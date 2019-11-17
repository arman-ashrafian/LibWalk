// URLS for our Cloud Functions
const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';
const getUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getUser';

let cache = {}

/* ============ fetch() wrappers ==================== */
// Use these functions instead of calling fetch directly
// so you don't have to set the params every time.

const postRequest = function (url, data) { // data argument should be json 
    return fetch(url, 
        {
            mode: 'cors', 
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json());
}


const getRequest = function (url) {
    return fetch(url, {mode: 'cors', method: 'GET'})
        .then((resp) => resp.json());
}
/* ================================================== */

export async function getClubs() {
    console.log('printing cache !!!!!');
    console.log(cache);
    let now = new Date();
    if ( !cache['getClubs'] || (now - cache['getClubs'].date) > 120000 ) {
        return getRequest(getClubsURL).then( json => { 
            cache['getClubs'] = {
                time: now,
                resp: json
            }
            return json
        });
    } else {
        return new Promise(function(resolve, reject) {
            return resolve(cache['getClubs'].resp);
        })
    }
}

export function getUser(userId) {
    return postRequest(getUserURL, {uid: userId});
}

export function registerUser() {
    return null;
}

export function updateUser() {
    return null;
}


export function registerClub() {
    return null;
}

export function updateClub() {
    return null;
}

export function orgLogin() {
    
}

export function getUserProfile() {
    
}

export function editUserProfile() {
    
}
