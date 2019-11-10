const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// test function
exports.helloWorld = functions.https.onRequest((req, res) => {
 res.send("HIIIII");
});

// test function
// This function demonstrates how to get a document and read a particular attribute from the database
exports.testDb = functions.https.onRequest((req, res) => {
  admin
    .firestore()
    .collection('Test').doc('Arman')
    .get()
    .then( (doc) => { // db query success
      let age = doc.data().Age; // doc.data() returns a JSON object
      res.send({age: age}); // res.send() parameter must be JSON !!
    })
    .catch( (err) => { // db query fail
      res.send(err);
    });
});

/* ================== /getUser ================== 
 * request:
 *    {uid: <string>}
 *
 * response:
 *    {{
 *        "name": <string>,
 *        "subscriptions": [<string>, <string>,...],
 *        "year": <number>,
 *        "major": <string> 
 *    }
 */
exports.getUser = functions.https.onRequest((req, res) => {
  const UID = req.body.uid; // user ID
  
  admin
    .firestore()
    .collection('Users').doc(UID)
    .get()
    .then( (doc) => {
      res.send(doc.data());
    })
    .catch( (err) => {
      res.send(err);
    });
});

//todo add comments
exports.changeEvent = functions.https.onRequest((req, res) => {
  const eventId = req.body.event_id;
  const eventJson = req.body.event;

  admin
    .firestore()
    .collection('Events').doc(eventId)
    .set(eventJson)
        .then( () => res.send({message:"changed event " + eventId}) )
        .catch( (err) => res.send({message:err}) );
});
