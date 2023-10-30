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

      // eslint-disable-next-line max-len
      // Verifica si se proporcionan los parámetros "page" y "pageSize" para paginación
      // const page = req.query.page ? parseInt(req.query.page) : 1;
      const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;

      // Calcula el índice del primer documento de la página actual
      // const startIndex = (page - 1) * pageSize;

      // eslint-disable-next-line max-len
      const medicionesRef = db.collection(req.query.esquema);

      // Consulta los documentos usando el índice calculado
      const medicionesSnapshot = await medicionesRef
          .orderBy(req.query.campo_1, "desc")
          // eslint-disable-next-line max-len
          .startAfter(new Date(2024, 10, 30, 6, 54, 0)) // for testing Date(year, date, month, hh, mm, ss)
          .limit(pageSize)
          .get();

      // Instanciamos el array principal de devolución
      const responseArray = [];

      medicionesSnapshot.forEach((doc) => {
        const data = doc.data();

        let valor1;
        let valor2;

        if (req.query.campo_1 === "fecha") {
          // Convertir el timestamp a una fecha legible
          // eslint-disable-next-line max-len
          const timestamp1 = new Date(data[req.query.campo_1]._seconds * 1000); // Multiplicar por 1000 para obtener milisegundos
          // eslint-disable-next-line max-len
          valor1 = timestamp1.toLocaleString();
        } else {
          valor1 = data[req.query.campo_1];
        }

        if (req.query.campo_2 === "fecha") {
          // Convertir el timestamp a una fecha legible
          // eslint-disable-next-line max-len
          const timestamp2 = new Date(data[req.query.campo_2]._seconds * 1000); // Multiplicar por 1000 para obtener milisegundos
          // eslint-disable-next-line max-len
          valor2 = timestamp2.toLocaleString();
        } else {
          valor2 = data[req.query.campo_2];
        }

        // Creamos el objeto respuesta para meter en el array mas grande
        const responseObj = {
          [req.query.campo_1]: valor1,
          [req.query.campo_2]: valor2,
        };

        // Pusheamos al array principal
        responseArray.push(responseObj);
      });

      return res.status(200).json(responseArray);
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Something went wrong"});
    }
  });
});

exports.insertFictitiousData = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const db = admin.firestore();
      // eslint-disable-next-line max-len
      const batch = db.batch(); // Use a batch to write multiple documents at once
      // eslint-disable-next-line max-len
      const numDocumentsToInsert = 1; // Number of fictitious documents to insert

      for (let i = 0; i < numDocumentsToInsert; i++) {
        const idMedicion = i + 1; // Auto-incremental ID
        const idNodo = 1;
        const idSensor = 1;
        const valor = Math.random(); // Generate a random value

        // eslint-disable-next-line max-len
        const fecha = admin.firestore.Timestamp.fromDate(new Date()); // Current timestamp

        const medicionData = {
          fecha,
          id_medicion: idMedicion,
          id_nodo: idNodo,
          id_sensor: idSensor,
          valor: valor,
        };
        // eslint-disable-next-line max-len
        const medicionRef = db.collection("mediciones").doc(); // Generate a new document ID
        batch.set(medicionRef, medicionData);
      }

      await batch.commit(); // Commit the batch
      // eslint-disable-next-line max-len
      return res.status(200).json({message: `${numDocumentsToInsert} fictitious documents inserted.`});
    } catch (error) {
      console.error(error);
      return res.status(500).json({error: "Something went wrong"});
    }
  });
});

exports.insertMedicion = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const db = admin.firestore();
      // eslint-disable-next-line max-len
      const batch = db.batch(); // Use a batch to write multiple documents at once
      // eslint-disable-next-line max-len
      const numDocumentsToInsert = 1; // Number of fictitious documents to insert

      // eslint-disable-next-line max-len
      const fecha = admin.firestore.Timestamp.fromDate(new Date()); // Current timestamp

      // eslint-disable-next-line max-len
      const medicionesRef = db.collection("mediciones");

      // Verificar la autenticación con client_id y secret en los encabezados
      const clientId = req.headers["client_id"];
      const secret = req.headers["secret"];

      // Verifica si los valores de client_id y secret son válidos
      if (clientId === "ungs_energia" && secret === "0f1abfe5ae3b407ff3") {
        // Consulta para obtener el máximo idMedicion
        const querySnapshot = await medicionesRef
            .orderBy("id_medicion", "desc") // Ordena por idMedicion
            .limit(1) // Limita la consulta a un solo resultado (el máximo)
            .get();

        // eslint-disable-next-line max-len
        let idMedicion = 0; // Valor predeterminado si no hay documentos en la colección

        if (!querySnapshot.empty) {
          // Si se encontró al menos un documento, obtén su idMedicion
          const maxDoc = querySnapshot.docs[0];
          idMedicion = maxDoc.data().id_nodo;
        }

        // Incrementa el idMedicion para el nuevo documento
        idMedicion++;

        // Parsea los valores como números
        const idNodo = parseInt(req.query.idNodo, 10);
        const idSensor = parseInt(req.query.idSensor, 10);
        const valor = parseFloat(req.query.valor);

        const medicionData = {
          fecha,
          id_medicion: idMedicion,
          id_nodo: idNodo,
          id_sensor: idSensor,
          valor: valor,
        };

        // eslint-disable-next-line max-len
        const medicionInsert = db.collection("mediciones").doc(); // Generate a new document ID
        batch.set(medicionInsert, medicionData);


        await batch.commit();
        // eslint-disable-next-line max-len
        return res.status(200).json({message: `${numDocumentsToInsert} medida insertada.`});
      } else {
        // Si la autenticación falla, responde con un error
        return res.status(401).json({error: "Autenticación fallida."});
      }
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
