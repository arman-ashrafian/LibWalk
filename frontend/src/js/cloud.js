const getClubsURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs";
const changeClubsURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/changeClub";

const getUserURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getUser";

export function getClubs() {
  return fetch(getClubsURL, { mode: "cors", method: "GET" }).then(resp =>
    resp.json()
  );
}

export function createClubs(
  annoucenments,
  clubName,
  clubReference,
  description,
  pageURL,
  emailList,
  eventList,
  pictureURL,
  tags
) {
  return fetch(changeClubsURL, { mode: "cors", method: "POST" }).then(resp =>
    resp.json()
  );
}

export function createUsers(
  annoucenments,
  clubName,
  clubReference,
  description,
  pageURL,
  emailList,
  eventList,
  pictureURL,
  tags
) {
  return fetch(changeClubsURL, { mode: "cors", method: "POST" }).then(resp =>
    resp.json()
  );
}
