from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
connString = 'postgresql://postgres:pass@192.168.1.10:5432/postgres'
app.config['SQLALCHEMY_DATABASE_URI'] = connString

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(120), unique=True)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return '<User %r>' % self.username