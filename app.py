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
    # for row in similar:
    #     print(dict(row))
    res = {}
    final = {"nodes" : [] , "links" : []} # Format of JSON object for d3.js Graph
    val = 255
    # r,b = 255,255
    try:
        for i in range(2,len(similar[0])):
            res[i] =  similar[0][i]
        for rank,mov in res.items():
            node = {"id" : mov , "color" : "white"}
            link = {"source" : similar[0][1], "target" : mov, "value" : val}
            final["nodes"].append(node)
            final["links"].append(link)
            val= val - 15
        final["nodes"].append({"id": similar[0][1], "color" : "rgba(165, 85, 253, 1)"})
    except:
        final = {"status" : "error404", "message" : "Movie not Found"}
    final =  jsonify(final)
    final.headers.add("Access-Control-Allow-Origin","*")
    return final
    

'''
Returns 0 or 1 depending on wheter given movie is in the db or not
'''
@app.route("/is_in/<string:user_movie>", methods = ["GET"])
def is_in(user_movie):
    movie = user_movie.lower() #converting user enetered string to lowercase
    cursor = conn.cursor()
    is_movie =  cursor.execute("SELECT COUNT(title) FROM Movies WHERE LOWER(title)=?",(movie,))
    is_movie = is_movie.fetchone()
    # print(is_movie)
    is_movie = jsonify(is_movie)
    is_movie.headers.add("Access-Control-Allow-Origin","*")
    return is_movie


if  __name__ == "__main__":
    app.run(debug = True)
