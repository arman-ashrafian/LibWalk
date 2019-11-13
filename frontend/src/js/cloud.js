const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';

export function getClubs() {
    return fetch(getClubsURL, {mode: 'cors', method: 'GET'})
        .then((resp) => resp.json());
}