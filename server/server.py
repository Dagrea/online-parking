import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

connection = pymongo.MongoClient("localhost", 27017)
database = connection['mestechko']
#///////////////////////////////////////////////////////////
def insert_data(data,collection):
    document = collection.insert_one(data)
    return document.inserted_id

def update_data(document_id, data,collection):
    document = collection.update_one({'_id': ObjectId(document_id)}, {"$set": data}, upsert=True)
    return document.acknowledged

def authorize(document_id,collection):
    data = collection.find_one({'_id': ObjectId(document_id)})
    return data

def check_availability(document_id,collection):
    data = collection.find_one({'_id': ObjectId(document_id)})
    return data

def get_multiple_data(collection):
    data = collection.find()
    return list(data)

def remove_data(document_id,collection):
    document = collection.delete_one({'_id': ObjectId(document_id)})
    return document.acknowledged
#///////////////////////////////////////////////////////////
@app.route('/api/v1/users/create', methods=['POST'])
def insert_user(request):
    return jsonify(insert_data(request.data,database['users']))

@app.route('/api/v1/users/update', methods=['POST'])
def update_user(request):
    return jsonify(update_data(request.document_id,request.data,database['users']))

@app.route('/api/v1/users/delete', methods=['POST'])
def delete_user(request):
    return jsonify(remove_data(request.document_id,database['users']))

@app.route('/api/v1/users/authorize', methods=['POST'])
def authorize_user(request):
    return jsonify(authorize(request.document_id,database['users']))
#///////////////////////////////////////////////////////////
@app.route('/api/v1/places/create', methods=['POST'])
def insert_place(request):
    return jsonify(insert_data(request.data,database['places']))

@app.route('/api/v1/places/update', methods=['POST'])
def update_place(request):
    return jsonify(update_data(request.document_id,request.data,database['places']))

@app.route('/api/v1/places/delete', methods=['POST'])
def delete_place(request):
    return jsonify(remove_data(request.document_id,database['places']))
#///////////////////////////////////////////////////////////
@app.route('/api/v1/orders/create', methods=['POST'])
def insert_order(request):
    return jsonify(insert_data(request.data,database['orders']))

@app.route('/api/v1/orders/update', methods=['POST'])
def update_order(request):
    return jsonify(update_data(request.document_id,request.data,database['orders']))

@app.route('/api/v1/orders/delete', methods=['POST'])
def delete_order(request):
    return jsonify(remove_data(request.document_id,database['orders']))

@app.route('/api/v1/orders/check', methods=['POST'])
def check_order_availability (request):
    return jsonify(check_availability(request.document_id,database['orders']))
#///////////////////////////////////////////////////////////

if __name__ == '__main__':
  app.run()