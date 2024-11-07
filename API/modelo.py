import xgboost as xgb
import pandas as pd


class Iadisponible:
    def __init__(self):
        self.model_path = "./API/modeloia/xgb_model.json"
        self.model = xgb.Booster()

    def disponibilizar(self, data):
        self.model.load_model(self.model_path)

        # Convertir los datos en un DataFrame
        datos = pd.DataFrame([data])

        # Hacer la predicción
        dmatrix = xgb.DMatrix(datos)
        prediction = self.model.predict(dmatrix)
        print("ACA LA PREDICCION!!!!!!!!!! ", prediction[0])
        return prediction[0]
