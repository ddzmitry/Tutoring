from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import scrape_surfing
app = Flask(__name__)
mongo = PyMongo(app)


@app.route('/')
def index():
    all_Images = mongo.db.images.find({})
    return render_template('index.html' , images = all_Images)
@app.route('/scrape')
def scrape():
    image_collection = mongo.db.images
    data = scrape_surfing.scrape()
    for image in data:
        image_collection.insert_one(image)
        # print('Inserted')

    return redirect("http://localhost:5000/", code=302)


if __name__ == "__main__":
    app.run(debug=True)
