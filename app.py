from flask import Flask, jsonify
import sqlite3

from sqlalchemy import null

app = Flask(__name__)

@app.route('/')
def home():
    return "HOME"

'''
Take in users movie as argument and returns a JSON object in the form of a d3.js Force-Directed graph
'''
@app.route("/similar_to/<string:user_movie>", methods =["GET"])
def similar_to(user_movie):
    movie = user_movie.lower() #converting user enetered string to lowercase
    #  Connecting to db and initialising cursor
    conn = sqlite3.connect('Movies.db')
    cursor = conn.cursor()
    #  Getting the 20 similar movies to users inputted choice in order
    similar_movies = cursor.execute("SELECT * FROM Movies WHERE LOWER(title)=?",(movie, ))
    similar = similar_movies.fetchall()
    res = {}
    final = {"nodes" : [] , "links" : []} # Format of JSON object for d3.js Graph
    try:
        for i in range(1,len(similar[0])):
            res[i] =  similar[0][i]
        for rank,mov in res.items():
            node = {"id" : mov , "color" : "purple"}
            link = {"source" : user_movie, "target" : mov, "value" : 1}
            final["nodes"].append(node)
            final["links"].append(link)
    except:
        res = null  
        final = null
    final.headers.add("Access-Control-Allow-Origin","*")
    return jsonify(final)
    

'''
Returns 0 or 1 depending on wheter given movie is in the db or not
'''
@app.route("/is_in/<string:movie>", methods = ["GET"])
def is_in(movie):
    conn = sqlite3.connect('Movies.db')
    cursor = conn.cursor()
    is_movie =  cursor.execute("SELECT COUNT(title) FROM Movies WHERE LOWER(title)=?",(movie,))
    is_movie = is_movie.fetchone()
    print(is_movie)
    is_movie.headers.add("Access-Control-Allow-Origin","*")
    return jsonify(is_movie)


if  __name__ == "__main__":
    app.run(debug = False)