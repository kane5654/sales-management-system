from werkzeug.security import generate_password_hash
from pymongo import MongoClient

# MongoDB連接設置
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database_name']  # 替換成你的數據庫名稱
users_collection = db['users']  # 替換成你的集合名稱

# 選擇的username和password
username = "testUser"
password = "testPassword"

# 對password進行哈希處理
hashed_password = generate_password_hash(password)

# 將username和哈希過的password存儲到數據庫中
user_document = {
    "username": username,
    "password": hashed_password
}
users_collection.insert_one(user_document)

print("User created successfully.")