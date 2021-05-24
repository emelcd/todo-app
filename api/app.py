from flask import Flask, jsonify
from flask_cors import CORS

with open('data.json', 'r', encoding='utf-8') as f:
    data = f.read()

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return data
    
if __name__ == "__main__":
    app.run(debug=True)