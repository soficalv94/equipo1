from flask import Flask, request, jsonify
from flask_cors import CORS
from modelo import Iadisponible

app = Flask(__name__)
CORS(app)

modeloIA = Iadisponible()


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No se recibieron datos"}), 400
    prediccion = modeloIA.disponibilizar(data)
    result = prediccion > 0.5  # Supongamos que una predicción > 0.5 indica fraude
    print(result)
    return jsonify({"fraudulent": bool(result)}), 200
