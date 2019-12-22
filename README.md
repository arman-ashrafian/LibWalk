# LibWalk

## Introduction:
The infamous Library Walk at UCSD is the central for pedestrian traffic, especially during the first few weeks of classes during Fall Quarter when student organizations on campus swarm by-walkers with vigorous flyer distribution in order to recruit more members. Although student organizations are an essential part of contributing to an active campus, the whole recruiting process is chaotic and unorganized.

LibWalk, a centralized platform to connect students and student organizations on campus, aims to streamline this process and provide UCSD students with a pleasant experience of finding and managing their student organization involvement. With LibWalk, students will be able to search and filter through organizations that align with their interests, subscribe to the student organizations, and manage the organizations' events in an efficient manner. In addition, LibWalk provides student organizations with the tools to manage all information and events at one place, alleviating the administrative burdens and allowing student organizations to instead focus on the quality of their content and events that they execute.

Here is the link to the website: https://libwalk-721c2.firebaseapp.com/

## Login Credentials:
Student accounts: Any UCSD login credentials

Admin (student org) accounts:

Prepopulated - (vgdc@ucsd.edu, TeieGmDvlp)

Not populated - (os-ucsd@eng.ucsd.edu, OeSucCDSsn).

All - https://docs.google.com/spreadsheets/d/1MXptmgQAFEoKlZ354dIjvQDT_cRBhCq8y9rafuMcSAY/edit?usp=sharing

## Requirements:
Internet connection

## Installation Instruction:
Run the following commands:
```
git clone https://github.com/arman-ashrafian/LibWalk.git
cd LibWalk
cd frontend/
npm install
```

## How to Run:
```
cd LibWalk/frontend/
npm start
```

## Known Bugs:
We implemented local caching with a certain time threshold to prevent going over the Firebase quota limitation, so when editing club info, the updated information might not reflect right away due to our use of the local cache.

Sometimes async functions that call Firestore cloud functions return undefined due to too many requests being sent.
