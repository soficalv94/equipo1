from flask import Flask, request, jsonify
from flask_cors import CORS
import xgboost as xgb
import pandas as pd

app = Flask(__name__)
CORS(app)  # Permitir CORS para todas las rutas

# Cargar el modelo
model_path = "./API/xgb_model.json"
model = xgb.Booster()
model.load_model(model_path)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No se recibieron datos"}), 400

    # Convertir los datos en un DataFrame
    datos = pd.DataFrame([data])

    # Hacer la predicción
    dmatrix = xgb.DMatrix(datos)
    prediction = model.predict(dmatrix)
    print("ACA LA PREDICCION!!!!!!!!!! ", prediction[0])

    # Interpretar la predicción
    result = prediction[0] > 0.5  # Supongamos que una predicción > 0.5 indica fraude
    print(result)
    return jsonify({"fraudulent": bool(result)}), 200


if __name__ == "__main__":
    app.run(debug=True)
