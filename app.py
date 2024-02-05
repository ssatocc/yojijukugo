import os

from dotenv import load_dotenv
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

load_dotenv()

if os.getenv("USE_FLASK_CORS") == "true":
    app = Flask(__name__)
    CORS(app)
else:
    app = Flask(__name__, static_folder="client/dist", static_url_path="")

if os.getenv("USE_FLASK_CORS") == "true":

    @app.route("/")
    def index():
        return "Hello, World!"

else:

    @app.route("/")
    def server_vue_index():
        return send_from_directory(app.static_folder, "index.html")

    @app.route("/<path:path>")
    def server_vue_static(path):
        return send_from_directory(app.static_folder, path)


@app.route("/api/yojijukugo", methods=["GET"])
def api_yojijukugo_get():
    data = {
        "yojijukugo": "日進月歩",
        "yojijukugo_furi": "にっしんげっぽ",
        "description": "たえまなく、どんどん進歩すること。",
        "description_en": "Continually make progress.",
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
