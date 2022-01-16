from flask import Flask, jsonify
import sqlite3

from sqlalchemy import null

app = Flask(__name__)

@app.route('/')
def home():
    return "HOME"

@app.route("/similar_to/<string:movie>", methods =["GET"])
def similar_to(movie):
    conn = sqlite3.connect('Movies.db')
    cursor = conn.cursor()
    similar_movies = cursor.execute("SELECT * FROM Movies WHERE title=?",(movie, ))
    similar = similar_movies.fetchall()
    res = {}
    try:
        for i in range(1,len(similar[0])):
            res[i] =  similar[0][i]
    except:
        res = null
    return jsonify(res)
    



if  __name__ == "__main__":
    app.run(debug = False)