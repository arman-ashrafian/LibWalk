const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';

export function getClubs() {
    return fetch(getClubsURL, {mode: 'cors', method: 'GET'})
        .then((resp) => resp.json());
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