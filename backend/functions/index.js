const functions = require("firebase-functions");
const admin = require("firebase-admin");

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
    .collection("Test")
    .doc("Arman")
    .get()
    .then(doc => {
      // db query success
      let age = doc.data().Age; // doc.data() returns a JSON object
      res.send({ age: age }); // res.send() parameter must be JSON !!
    })
    .catch(err => {
      // db query fail
      res.send(err);
    });
});

/* ================== /getUser ================== 
 * request:
 *    {uid: <string>}
 *
 * response:
 *    {
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
    .collection("Users")
    .doc(UID)
    .get()
    .then(doc => {
      res.send(doc.data());
    })
    .catch(err => {
      res.send(err);
    });
});

/* ================= /changeEvent  ====================
 * request:
 *   { 
 *      event_id: <string>,
 *      event: {
 *       "eventName": <string>,
 *       "description": <string>,
 *       "pictureURL": <string>,
 *       "rsvpForm": [<string>],
 *       "club_reference": <string>,
 *       "time": <time>,
 *       "clubsHosting": [<string>]
 *      }
 *   }
 *
 * response:
 *   {
 *      message: "changed event <event_id>"
 *   }
 *
 */
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

exports.getClubs = functions.https.onRequest((req, res) => {
    admin
        .firestore()
        .collection("Clubs")
        .get()
        .then(querySnapshot => {
            let json_data = { clubs: [] };
            querySnapshot.forEach(doc => {
                json_data.clubs.push(doc.data());
            });
            res.send(json_data);
        })
        .catch(err => {
            // db query fail
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


/* ================== /getTags ================== 
 * request: 
 * 	{}
 *
 * response:
 * 	{
 * 		<tag.JSON>
 * 		<tag.JSON>
 * 		...
 * 	}
 */
exports.getTags = functions.https.onRequest((req, res) => {
  const markers = [];
  admin
    .firestore()
    .collection('Tags')
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

/* ================= /getClub  ====================
* request:
*   { club_id: <string> }
*
* response:
*   {
*       "clubName": <string>,
*       "description": <string>,
*       "pictureURL": <string>,
*       "club_reference": <string>,
*       "announcements": [<string>],
*       "emailList": [<string>],
*       "eventList": [<string>],
*       "tags": [<string>]
*   }
*/
exports.getClub = functions.https.onRequest((req, res) => {
  admin
  .firestore()
  .collection('Clubs').doc(req.body.club_id).get()
  .then( (doc) => {
    res.send(doc.data());
  })
  
  .catch( (err) => { // db query fail
    res.send(err);
  });

});

/* ================== /changeUser  ====================
* request:
*   { user_id: <string>,
      user: {
*       "name": <string>,
*       "major": <string>,
*       "year": <string>,
*       "user_reference": <string>,
*       "subscriptions": [<string>]
*     }
*   }
*
* response:
*   {
*      message: "changed user <user_id>"
*   }
*/
exports.changeUser = functions.https.onRequest((req, res) => {
	user_id = req.body.user_id;
  user_info = req.body.user;
	admin.firestore().collection('Users').doc(user_id).set(user_info)
    .then( () => res.send({message:"changed event " + eventId}) )
    .catch( (err) => res.send(err))
});
/* ================== /changeClub ====================
* request:
*   { club_id: <string>,
      club: {
*       "clubName": <string>,
*       "description": <string>,
*       "pictureURL": <string>,
*       "club_reference": <string>,
*       "announcements": [<string>],
*       "emailList": [<string>],
*       "eventList": [<string>],
*       "tags":[<string>]
*     }
*   }
*
* response:
*   {
*      message: "changed club <club_id>"
*   }
*/
exports.changeClub = functions.https.onRequest((req, res) => {
  const club_id = req.body.club_id;
  const club_info = req.body.club;
    admin
        .firestore()
        .collection('Clubs').doc(club_id)
        .set(club_info)
        .then( () => res.send({message:"changed club " + club_id}) )
        .catch( (err) => res.send({message:err}) );
});
