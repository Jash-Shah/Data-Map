from flask import Flask, jsonify
import sqlite3
import pickle
import pandas as pd
import re
import numpy as np

from sqlalchemy import null

app = Flask(__name__)

model_knn = pickle.load(open("data/model.pkl", "rb"))
movies_df = pd.read_csv("data/movie_titles.csv", index_col="id")
encoded_features = pd.read_csv("data/encoded_features.csv", index_col="id")

# A function to clean the search string
def clean_string(input_string):
    # Remove characters that are not letters or numbers
    cleaned_string = re.sub(r'[^a-zA-Z0-9]', '', input_string)
    # Remove whitespaces
    cleaned_string = cleaned_string.replace(' ', '')
    # Convert to lowercase
    cleaned_string = cleaned_string.lower()
    return cleaned_string

# function to recommend top 10 movies
def recommend_movies(movie,nn_data,orig_data):
    basemovie = orig_data.iloc[orig_data[orig_data["original_title"].apply(lambda x: clean_string(x)).str.contains(clean_string(movie))].original_title.str.len().sort_values().index[0]].to_frame().T
    movie_index=nn_data[orig_data.original_title==basemovie.original_title.values[0]].index
    _, indices = model_knn.kneighbors(np.array(nn_data.iloc[movie_index]).reshape(1, -1),n_neighbors=15)

    out=orig_data.iloc[indices[0]]
    return out

def search_movie(movie):
    return movies_df["original_title"].apply(clean_string).str.contains(clean_string(movie)).any()

@app.route('/')
def home():
    return "HOME"

'''
Take in users movie as argument and returns a JSON object in the form of a d3.js Force-Directed graph
'''
@app.route("/similar_to/<string:user_movie>", methods =["GET"])
def similar_to(user_movie):
    try:
        similar = recommend_movies(user_movie, encoded_features, movies_df)
        similar = similar["original_title"].tolist()
        final = {"nodes" : [] , "links" : []} # Format of JSON object for d3.js Graph
        val = 255
        # r,b = 255,255
        for mov in similar[1:]:
            node = {"id" : mov , "color" : "white"}
            link = {"source" : similar[0], "target" : mov, "value" : val}
            final["nodes"].append(node)
            final["links"].append(link)
            val= val - 15
        final["nodes"].append({"id": similar[0], "color" : "rgba(165, 85, 253, 1)"})
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
    is_movie = search_movie(user_movie)
    is_movie = jsonify(bool(is_movie))
    is_movie.headers.add("Access-Control-Allow-Origin","*")
    return is_movie


if  __name__ == "__main__":
    app.run(debug = True)
