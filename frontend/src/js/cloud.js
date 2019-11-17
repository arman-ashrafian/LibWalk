const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';
const getUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getUser';

export function getClubs() {
    return fetch(getClubsURL, {mode: 'cors', method: 'GET'})
        .then((resp) => resp.json());
}

export function getUser(userId) {
    return fetch(getUserURL, {mode: 'cors', method: 'POST', uid: userId})
        .then((resp) => resp.json());
}
