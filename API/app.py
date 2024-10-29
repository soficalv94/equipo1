import json
from flask import Flask, request, jsonify
import xgboost as xgb
import pandas as pd

# Inicializar la aplicación Flask
app = Flask(__name__)

# Cargar el modelo
model_path = 'xgb_model.json'
model = xgb.Booster()
model.load_model(model_path)

# Ruta de prueba
@app.route('/')
def home():
    return "API de Predicción de Fraude"

# Endpoint para evaluar el fraude
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        # Convertir los datos en un DataFrame
        input_data = pd.DataFrame([data])
        
        # Hacer la predicción
        dmatrix = xgb.DMatrix(input_data)
        prediction = model.predict(dmatrix)

        # Interpretar la predicción
        result = prediction[0] > 0.5  # Supongamos que una predicción > 0.5 indica fraude
        return jsonify({'fraudulent': bool(result)})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)