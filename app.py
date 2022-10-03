from calendar import c
from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

@app.router('/api', methods=['GET'])
@cross_origin()
def welcome():
    return {"message": "Welcome to my API"}

@app.router('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()