// URLS for our Cloud Functions
const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';
const getUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getUser';
const editUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/changeUser';

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

export function getClubs() {
    return getRequest(getClubsURL);
}

export function getUser(userId) {
    let data = {
        uid: userId
    }
    return postRequest(getUserURL, data)
}

export function editUser(userId, userData) {
    let data = {
        user_id: userId,
        user: userData
    }
    return postRequest(editUserURL, data)
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
