from flask import request, jsonify
from werkzeug.security import check_password_hash
from app import app, mongo

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    # Query the database using only the username
    user = mongo.db.users.find_one({"username": username})
    
    # Check if user exists and then verify the password
    if user and check_password_hash(user['password'], password):
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401