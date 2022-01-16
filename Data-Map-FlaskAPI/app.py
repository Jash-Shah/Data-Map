from flask import Flask, jsonify
import sqlite3

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
    for i in range(1,len(similar[0])):
        res[i] =  similar[0][i]
    return jsonify(res)
    



if  __name__ == "__main__":
    app.run(debug = False)