/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Importa la librería cors permitiendo todos los orígenes
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.calculateAverage = functions.https.onRequest(async (req, res) => {
  cors( req, res, async () => {
    try {
      const db = admin.firestore();

      const medicionesRef = db.collection("mediciones");
      const medicionesSnapshot = await medicionesRef.get();

      let totalValue = 0;
      let totalCount = 0;

      medicionesSnapshot.forEach((doc) => {
        const data = doc.data();
        totalValue += data[req.query.campo];
        // Asumiendo que el valor de la medición está en la propiedad "valor"
        totalCount++;
      });

      const average = totalValue / totalCount;

      return res.status(200).json({average});
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Something went wrong"});
    }
  });
});

exports.calculateSum = functions.https.onRequest(async (req, res) => {
  cors( req, res, async () => {
    try {
      const db = admin.firestore();

      const medicionesRef = db.collection("mediciones");
      const medicionesSnapshot = await medicionesRef.get();

      let totalValue = 0;

      medicionesSnapshot.forEach((doc) => {
        const data = doc.data();
        totalValue += data[req.query.campo];
      });

      return res.status(200).json({totalSum: totalValue});
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Something went wrong"});
    }
  });
});

exports.calculateCount = functions.https.onRequest(async (req, res) => {
  cors( req, res, async () => {
    try {
      const db = admin.firestore();

      const medicionesRef = db.collection(req.query.esquema);
      const medicionesSnapshot = await medicionesRef.get();

      const totalCount = medicionesSnapshot.size;

      return res.status(200).json({totalCount: totalCount});
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Something went wrong"});
    }
  });
});

exports.getValues = functions.https.onRequest(async (req, res) => {
  cors( req, res, async () => {
    try {
      const db = admin.firestore();

      const medicionesRef = db.collection(req.query.esquema);
      const medicionesSnapshot = await medicionesRef.get();

      const ArrayCampo1 = [];
      const ArrayCampo2 = [];

      medicionesSnapshot.forEach((doc) => {
        const data = doc.data();

        if (req.query.campo_1 === "fecha") {
          // Convertir el timestamp a una fecha legible
          // eslint-disable-next-line max-len
          const timestamp1 = new Date(data[req.query.campo_1]._seconds * 1000); // Multiplicar por 1000 para obtener milisegundos
          // eslint-disable-next-line max-len
          ArrayCampo1.push(timestamp1.toLocaleString()); // Convertir a una cadena legible
        } else {
          ArrayCampo1.push(data[req.query.campo_1]);
        }

        if (req.query.campo_2 === "fecha") {
          // Convertir el timestamp a una fecha legible
          // eslint-disable-next-line max-len
          const timestamp2 = new Date(data[req.query.campo_2]._seconds * 1000); // Multiplicar por 1000 para obtener milisegundos
          // eslint-disable-next-line max-len
          ArrayCampo1.push(timestamp2.toLocaleString()); // Convertir a una cadena legible
        } else {
          ArrayCampo2.push(data[req.query.campo_2]);
        }
      });

      const responseObj = {
        campo_1: ArrayCampo1,
        campo_2: ArrayCampo2,
      };

      return res.status(200).json(responseObj);
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Something went wrong"});
    }
  });
});


// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
