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

exports.getUser = functions.https.onRequest((req, res) => {
  res.send('get user');
});


exports.getEvent = functions.https.onRequest((req, res) => {
  let event_id = req.body.event_id;
  admin
    .firestore()
    .collection('Events').doc(event_id)
    .get()
    .then( (doc) => {
	res.send(doc.data());
    })
    .catch( (err) => {
	res.send(err);
    });
});


/* ================== /getEvent ================== 
 * request: 
 * 	{event_id: <string>}
 *
 * response:
 * 	{
 * 		"eventName": <string>,
 * 		"location": <string>,
 * 		"rsvpForm": <string>,
 * 		"description": <string>,
 * 		"clubsHosting": <string[]>,
 * 		"pictureURL": <string>,
 * 		"time": {
 *				"seconds": <number>,
 *				"nanoseconds": <number>
 * 			}
 * 	}
 */
exports.getEvent = functions.https.onRequest((req, res) => {
  let event_id = req.body.event_id;
  admin
    .firestore()
    .collection('Events').doc(event_id)
    .get()
    .then( (doc) => {
	res.send(doc.data());
    })
    .catch( (err) => {
	res.send(err);
    });
});



/* ================== /getEvents ================== 
 * request: 
 * 	{}
 *
 * response:
 * 	{
 * 		<event.JSON>
 * 		<event.JSON>
 * 		...
 * 	}
 */
exports.getEvents = functions.https.onRequest((req, res) => {
  const markers = [];
  admin
    .firestore()
    .collection('Events')
    .get()
    .then( (cols) => {
	cols.docs.forEach(doc => {
		markers.push(doc.data());
	});
	res.send(markers);
    })
    .catch( (err) => {
	res.send(err);
    });

});


/* ================== /getTag ================== 
 * request: 
 * 	{tag_id: <string>}
 *
 * response:
 * 	{
 * 		"type": <string>,
 * 	}
 */
exports.getTag = functions.https.onRequest((req, res) => {
  let tag_id = req.body.tag_id;
  admin
    .firestore()
    .collection('Tags').doc(tag_id)
    .get()
    .then( (doc) => {
	res.send(doc.data());
    })
    .catch( (err) => {
	res.send(err);
    });
});

