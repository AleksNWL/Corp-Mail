from flask import Blueprint, request, jsonify
from app import db
from app.models import User, Email
from app.utils import hash_password, verify_password

bp = Blueprint("routes", __name__)

@bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    new_user = User(username=username, email=email, password=hash_password(password))
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@bp.route("/emails", methods=["GET"])
def get_emails():
    emails = Email.query.all()
    result = [
        {"id": email.id, "subject": email.subject, "body": email.body, "created_at": email.created_at}
        for email in emails
    ]
    return jsonify(result), 200
