# -*- coding: utf-8 -*-


from flask import Flask,request,session,redirect,url_for
from flask import render_template,flash
from flask import jsonify
import pinboard
import json
import operator



DATABASE = "/tmp/app.db"
DEBUG = True
SECRET_KEY = "0219"


app = Flask(__name__,static_folder="../client/templates")
app.config.from_object(__name__)
p = pinboard.open("haradashinya","harashin0219")


@app.route("/tags",methods=["GET"])
def tags():
    tags = [item for item in p.tags()  if item["count"] > 0][0:20]
    sorted_tags =  sorted(tags,key = lambda x: x["count"] ,reverse=True)


    return jsonify({"tags": sorted_tags})


@app.route("/search/<keyword>",methods=["POST","GET"])
def search(keyword):
    posts =  p.posts(tag = keyword)
    res = []
    for post in posts:
        d = {
                "href": post["href"].encode("utf-8"),
                "desc": post["description"]
                }
        if  d["desc"] != "":
            res.append(d)
    r = jsonify({"data": res})
    return r




@app.route("/users",methods=["POST","GET"])
def users():
    if request.method == "POST":
        return "hello create users"
    elif request.method == "GET":
        return "fofofoofofo"


if __name__ == "__main__":
    app.run()
