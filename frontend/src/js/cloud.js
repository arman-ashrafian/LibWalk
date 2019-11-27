// URLS for our Cloud Functions

const getClubsURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs";
const getUserURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getUser";
const getEventURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getEvent";
const getAnnounceURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getAnnouncements";
const createAnnounceURL =
    "https://us-central1-libwalk-721c2.cloudfunctions.net/createAnnouncements";
const getClubURL =
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getClub";
const getTagURL = 
  "https://us-central1-libwalk-721c2.cloudfunctions.net/getTag";
const editUserURL = 
  'https://us-central1-libwalk-721c2.cloudfunctions.net/changeUser';
const changeClubURL = 
  'https://us-central1-libwalk-721c2.cloudfunctions.net/changeClub';
const changeEventURL = 
  'https://us-central1-libwalk-721c2.cloudfunctions.net/changeEvent';
const changeTagURL = 
  'https://us-central1-libwalk-721c2.cloudfunctions.net/changeTag';
const getUserEventsURL = 
  'https://us-central1-libwalk-721c2.cloudfunctions.net/getUserEvents';


/* ============ fetch() wrappers ==================== */
// Use these functions instead of calling fetch directly
// so you don't have to set the params every time.
const postRequest = function(url, data) {
  console.log(data)
  // data argument should be json
  return fetch(url, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(resp => resp.json()).catch(err => console.log(err));
};

const getRequest = function(url) {
  return fetch(url, { mode: "cors", method: "GET" }).then(resp => resp.json());
};

/* ================================================== */
export function getClub(clubId) {
  let data = {
    club_id: clubId
  };
  return postRequest(getClubURL, data);
}

export async function getClubs() {
  console.log('calling /getClubs');
  return getRequest(getClubsURL).then(json => {
        return json;
  });
}

export function getUser(userId) {
  console.log('calling /getUser');
  let data = {
    uid: userId
  };
  return postRequest(getUserURL, data);
}

export function editUser(userId, userData) {
  let data = {
    user_id: userId,
    user: userData
  };
  return postRequest(editUserURL, data);
}

export function editAnnouncements() {
  return null;
}

export function createAnnouncements(annId, annData) {
    let data = {
        ann_id: annId,
        announcement: annData
    }
    return postRequest(createAnnounceURL, data);
}

export function getAnnouncements(clubId) {
  let data = {
    club_id: clubId
  };
  // add getTime function
  return postRequest(getAnnounceURL, data);
}

export function changeClub(clubId, clubData) {
  let data = {
    club_id: clubId,
    club: clubData
  };
  return postRequest(changeClubURL, data);
}

export function getEvent(eventId) {
  return postRequest(getEventURL, { event_id: eventId });
}

export function changeEvent(eventID, eventData) {
  let data = {
    event_id: eventID,
    event: eventData
  };
  return postRequest(changeEventURL, data);
}

export function getTag(tagId) {
  return postRequest(getTagURL, { tag_id: tagId });
}

export function changeTag(tagID, tagData) {
    let data = {
        tag_id: tagID,
        tag: tagData
    }
    return postRequest(changeTagURL, data);
}

export function getUserEvents(userId) {
    let data = {
        uid: userId
    }
    return postRequest(getUserEventsURL, data);
}

export let club_list = [
        {
            "00NbpvJkiDhwnitEU3mUakuAFid2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "PERIOD. at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8473",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "00NbpvJkiDhwnitEU3mUakuAFid2",
                "description": "PERIOD. at UCSD is one of the many chapters of PERIOD., a national youth-led non-profit organization that strives to break down the stigma of menstruation while providing menstrual hygiene products to those in need. PERIOD. at UCSD aims to help lead PERIOD.â€™s â€œMenstrual Movementâ€ by advocating for equal access to menstrual hygiene products, educating others about this cause, and participating in service events. By hosting fundraisers to raise money for purchasing menstrual products, and by conducting donation drives, PERIOD. at UCSD will acquire the resources needed to create menstrual hygiene product care packages. All proceeds will then be donated to local San Diego recipient organizations that support homeless individuals in need of these packages. PERIOD. at UCSD also plans to incorporate educational components regarding the disparity in peopleâ€™s access to menstrual hygiene products during General Body Meetings (GBMâ€™s) and tabling events. Furthermore, PERIOD. at UCSD strives to make the discussion around menstruation a more comfortable topic, regardless of a personâ€™s identity. PERIOD. at UCSD believes that access to menstrual hygiene products should be a basic human right, and not a luxury or a privilege.",
                "eventList": []
            }
        },
        {
            "00nLFumXfnWAjXqpvSQEQEEBvmI2": {
                "emailList": [],
                "clubName": "Vietnamese Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9651",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "00nLFumXfnWAjXqpvSQEQEEBvmI2",
                "description": "To promote and preserve the Vietnamese culture and awareness among the UCSD students through various cultural, social, community, and educational events.",
                "eventList": []
            }
        },
        {
            "08ty8DCalehP6KbWldvDPkoK9ZA3": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "08ty8DCalehP6KbWldvDPkoK9ZA3",
                "description": "The American Mock World Health Organization (AMWHO) is the only model-WHO entity in the United States of America. AMWHO aims to increase discourse on global health policy through creating authentic simulations of the World Health Assembly, the sole decision- making body of the World Health Organization. Participants assume the role of a WHO- Ambassador, Non-Governmental Organization Representative, or Media Correspondent, and form health-related positions to create a final resolution sent to the WHO in Geneva, Switzerland.",
                "eventList": [
                    "event_id_00"
                ],
                "emailList": [],
                "pictureURL": "https://upload.wikimedia.org/wikipedia/commons/4/44/Geisel_Library%2C_UCSD.jpg",
                "clubName": "American Mock World Health Organization at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8427",
                "contactEmail": ""
            }
        },
        {
            "09ZUvuAh41Znik0YgH1r8XjkGJj1": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "09ZUvuAh41Znik0YgH1r8XjkGJj1",
                "description": "Community Leadership Through Service seeks to assist underrepresented communities on the UC San Diego campus as well as the greater San Diego area through events, workshops, and volunteering.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Community Leadership Through Service",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11890",
                "contactEmail": ""
            }
        },
        {
            "0Nak2AHlRicb5I2oQu5IhgWXWek1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Phi Sigma Pi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8384",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "0Nak2AHlRicb5I2oQu5IhgWXWek1",
                "description": "Phi Sigma Pi National Honor Fraternity is a co-educational honor fraternity with the purpose of fostering the ideals of scholarship, leadership and fellowship.",
                "eventList": []
            }
        },
        {
            "0S5DMNMuJTbbLTnSFMnG7PiBzTH2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8559",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "0S5DMNMuJTbbLTnSFMnG7PiBzTH2",
                "description": "The Muir Quarterly publishes a satire/humor newspaper at UCSD and also provides social events for the student body.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Muir Quarterly, (MQ) The"
            }
        },
        {
            "0TcUxx62MwenVQGTmdcARHHFa962": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "0TcUxx62MwenVQGTmdcARHHFa962",
                "description": "The purpose of this organization is to bring together a community of unique, transfer/non-traditional pre-health professionals on campus. We aim to provide educational resources, leadership opportunities, and volunteer opportunities to students who have a limited amount of time to prepare for applying to pre-health schools. These students include, but are not limited to: first generation college students, students considering a health profession, students pursuing a major in departments other than biology and chemistry, students belonging to demographics that are underserved in health professions, students who decided to be pre-health in their later years, and students returning to school after several years in the workforce and considering a health profession.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Transfer and Non-Traditional Students for Health",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8578",
                "contactEmail": ""
            }
        },
        {
            "0hoZEX1jKHc87vmNZv1l8xdW7kj2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Pre-Medical APAMSA at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8379",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "0hoZEX1jKHc87vmNZv1l8xdW7kj2",
                "description": "The purpose of our organization is to involve and educate pre-medical undergraduate students at UCSD on the health issues that pertain to the Asian community and enable them to serve the Asian Pacific communities throughout the greater San Diego region. As a pre-medical organization, we plan to educate our members on health issues that pertain to the Asian community, provide them with resources and insights into medical school, the medical school application process through a mentorship program.",
                "eventList": []
            }
        },
        {
            "0lnYt5WthfUX1Urhpjx5LnkQPUC2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8377",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "0lnYt5WthfUX1Urhpjx5LnkQPUC2",
                "description": "To provide UCSD students interested in the field of optometry with the information, support, and opportunities necessary to learn about the profession, the schools of optometry, and the application process.",
                "eventList": [],
                "emailList": [],
                "clubName": "Insight Pre-Optometry",
                "pictureURL": ""
            }
        },
        {
            "0rCjv2Db37YxEEH1e9M1qpKBgpF3": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "0rCjv2Db37YxEEH1e9M1qpKBgpF3",
                "description": "United Taiwanese Association (UTA) is an Asian-interest student organization at UC San Diego. UTA was established in 1992 and aims to provide a sense of home for overseas Taiwanese students and a platform for those interested in learning about Taiwan. As a sociocultural club, we host many events throughout the school year for people to catch up with friends and meet new people.",
                "eventList": [],
                "emailList": [],
                "clubName": "United Taiwanese Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8519",
                "contactEmail": ""
            }
        },
        {
            "0w61ajUCoMO7FsPedooSmdLYJRJ2": {
                "emailList": [],
                "clubName": "Salsa Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8486",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "0w61ajUCoMO7FsPedooSmdLYJRJ2",
                "description": "The purpose of this page is to connect the Salsa/Bachata dancing community here at UC San Diego. We hope to create a clean and interactive environment here where students can share their love for dance or outreach to other students about any upcoming dance-related events. Any direct form of advertising made by people who are not students will not be acceptable and will be removed from the page to ensure that the quality of the page is kept as organic and genuine as possible. Weekly classes are held every Saturday from 6-8PM in Rec Gym. Keep on the lookout for our social dancing events this quarter on this page! The intention of the group is to bring new people into the salsa scene. Salsa dancing improves social skills, cognitive capacity and the ability to shake one's booty! It's ironically a highly effective stress reliever as well! What can you do to help? Invite your friends! Together we can break the UCSD trend of being known as the UC of the Socially Dead.",
                "eventList": []
            }
        },
        {
            "10UEemJ6WFTn6PnUaXQ7rVjyhB43": {
                "emailList": [],
                "clubName": "Kommon Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8406",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "10UEemJ6WFTn6PnUaXQ7rVjyhB43",
                "description": "Kommon Society is a student organization for Korean and Korean-American undergraduate students with social science majors. Kommon Society aims to: 1) establish an academic environment among Korean and Korean-American students with Social Science majors; 2) facilitate a mutually beneficial network among students with same majors and career goals; 3) provide opportunities for various academic and professional experiences to prepare each individual's future; and 4) promote interest in contemporary global issues throughout the campus.",
                "eventList": []
            }
        },
        {
            "18kLWJLH8bZlszSp3vu0HBi7kFI3": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10712",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "18kLWJLH8bZlszSp3vu0HBi7kFI3",
                "description": "The Hmong Student Association at UCSD is a cultural organization that unifies Hmong college students to promote and increase awareness about the Hmong culture/identity among the UC San Diego students, staff, and community. In addition, we foster and support the retention of Hmong students in higher education at all levels surrounding UC San Diego.",
                "eventList": [],
                "emailList": [],
                "clubName": "Hmong Student Association at UCSD (HSA at UCSD)",
                "pictureURL": ""
            }
        },
        {
            "1C593QJQ1AbxorVFMOLKqIgRFUF3": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "1C593QJQ1AbxorVFMOLKqIgRFUF3",
                "description": "Team HBV is a national network spanning many colleges and high schools whose goal is to create a strong, unified community that will further efforts to eradicate hepatitis B. The national Team HBV mission is to raise awareness of the disproportionately high incidence of hepatitis B and liver cancer among Asian and Pacific Islanders (APIs) worldwide and hopes to create programming that will address the disparity. On the campus of UCSD, Team HBV will raise awareness on campus and in the local community through screening initiative programs, outreach campaigns, inviting guest speakers, and much more. Our objectives are to educate the community about hepatitis B and liver cancer, evaluate our efforts on our outreach and education projects, participate in national and international Team HBV efforts, and to collaborate with the other individuals and organizations that support the Jade Ribbon Campaign. We welcome everyone to join us in our fight against hepatitis B!",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Team HBV",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8429",
                "contactEmail": ""
            }
        },
        {
            "1IuxTZ26McZRYRbBpmXxVak81of1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Phi Delta Epsilon",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9652",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "1IuxTZ26McZRYRbBpmXxVak81of1",
                "description": "To prepare our members for a career in medicine and to promote fraternity amongst our members",
                "eventList": []
            }
        },
        {
            "1Jz7WAARcdhpY01kugZY8dPDuxX2": {
                "tags": [],
                "announcements": [],
                "clubReference": "1Jz7WAARcdhpY01kugZY8dPDuxX2",
                "description": "The purpose of this ensemble is to find joy through singing together. We sing for ourselves and perform to share our love of music with others. We will explore a wide variety of musical styles and genres, including jazz, classical, and popular music.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Treble Singers at UCSD, The",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9648",
                "contactEmail": ""
            }
        },
        {
            "1i5Wm0hFhVWKbbYlG2sz8fHiGnc2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8583",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "1i5Wm0hFhVWKbbYlG2sz8fHiGnc2",
                "description": "Itâ€™s On Us at UCSD is a chapter of the national movement, Itâ€™s On Us. The purpose of Itâ€™s On Us at UCSD is to combat sexual violence and harassment, especially sexual assault, within the UCSD community. The goal of this organization is to engage students on the topics of sexual assault awareness, survivor support and bystander intervention. Areas of our work include, but are not limited to: consent, prevention, bystander education, and healthy relationships. Itâ€™s On Us at UCSD will achieve its goals through education and outreach, events and projects, and activism and advocacy.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Its On Us at UCSD"
            }
        },
        {
            "26Mb3peavEgiDcBC640Is8w7NQI3": {
                "clubReference": "26Mb3peavEgiDcBC640Is8w7NQI3",
                "description": "The purpose of the Organization is to create a community of students and faculty members defined by an interest in the study of Economics.",
                "eventList": [],
                "emailList": [],
                "clubName": "Undergraduate Economics Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8506",
                "contactEmail": "",
                "tags": [],
                "announcements": []
            }
        },
        {
            "291xv9AOzQPNWhnw5pg7Q6Facl92": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "291xv9AOzQPNWhnw5pg7Q6Facl92",
                "description": "The mission of Intersectional Health Project (IHP) is to promote grassroots community efforts within communities of Greater San Diego.",
                "eventList": [],
                "emailList": [],
                "clubName": "Intersectional Health Project - San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11978",
                "contactEmail": ""
            }
        },
        {
            "2MGsSOKmthO8ksI1LX7bFtf3w8Q2": {
                "emailList": [],
                "clubName": "Division 12",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11921",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "2MGsSOKmthO8ksI1LX7bFtf3w8Q2",
                "description": "To unite dancers from teams all over campus through collaborating on a project team called Division 12.",
                "eventList": []
            }
        },
        {
            "2OXSKLekREQMaiZ7HRFbALq0Xch1": {
                "tags": [
                    "Cultural"
                ],
                "clubReference": "2OXSKLekREQMaiZ7HRFbALq0Xch1",
                "description": "Promoting Chinese culture and building a stronger bond within the UCSD Chinese American community.",
                "eventList": [
                    "2OXSKLekREQMaiZ7HRFbALq0Xch1ChineseSometime"
                ],
                "emailList": [],
                "clubName": "Chinese Union",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10688",
                "contactEmail": ""
            }
        },
        {
            "2PfER4AntycMJVhms3UyNIXU4Gr2": {
                "emailList": [],
                "clubName": "Fusheng Chinese Drama Troupe",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11882",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "2PfER4AntycMJVhms3UyNIXU4Gr2",
                "description": "We are a group of undergrad students who are seeking extracurricular involvements in theatrical activities. Our troupe's motivation is to bring students with different backgrounds and interests in Chinese drama together to create a welcoming environment for theatrical productions in UCSD to spread Chinese culture and art forms through collaboration.",
                "eventList": []
            }
        },
        {
            "2YCVf9ic9dVOCoREsWsfh5IjeD03": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12063",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "2YCVf9ic9dVOCoREsWsfh5IjeD03",
                "description": "The purpose of the Afghan Student Association at UCSD shall be to promote awareness of the issues being faced within Afghanistan and to spread the Afghan culture to the larger UCSD community.",
                "eventList": [],
                "emailList": [],
                "clubName": "Afghan Student Association",
                "pictureURL": ""
            }
        },
        {
            "2dVB6KSXmiQXblGkPf1RTlp4bvo1": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "2dVB6KSXmiQXblGkPf1RTlp4bvo1",
                "description": "Uniting Brazilian students all over UCSD",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Brazilian Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8389",
                "contactEmail": ""
            }
        },
        {
            "2hZmEwRhh7NQTAOcXsuNB8ePQ9t2": {
                "description": "Lumnus Consulting is a Junior Enterprise that was established at UC San Diego in 2016. Lumnus is run entirely by students and provides business and marketing consulting services for startups and small businesses.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Lumnus Consulting Junior Enterprise",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8360",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "2hZmEwRhh7NQTAOcXsuNB8ePQ9t2"
            }
        },
        {
            "2hdM5PJgqlZutsw7MW4MmRjpWnd2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "2hdM5PJgqlZutsw7MW4MmRjpWnd2",
                "description": "The purpose of the National Residence Hall Honorary is to serve and recognize individuals, groups, and programs on campus that contribute to the success of residential life at UC San Diego.",
                "eventList": [],
                "emailList": [],
                "clubName": "National Residence Hall Honorary",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8552",
                "contactEmail": ""
            }
        },
        {
            "2osDSQTeTchULRAFc6iKDR2wQWB2": {
                "clubReference": "2osDSQTeTchULRAFc6iKDR2wQWB2",
                "description": "TamashaSD is a student run organization on the UC San Diego campus that aims to connect South Asian Americans back to their roots while fostering a positive cultural environment for the community. Eight Bollywood-Fusion dance teams will showcase their talent from across the nation and have the chance to compete for a first place prize. Get ready to experience amazing ocean views, unforgettable sunsets and tasty street tacos. Most of all, donâ€™t forget to stay classy San Diego.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "TamashaSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12103",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "2ySIZAwYcPhrXRoip7hAq8yAfrK2": {
                "emailList": [],
                "clubName": "Kendo Club at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8520",
                "contactEmail": "",
                "tags": [
                    "Martial Arts"
                ],
                "announcements": [],
                "clubReference": "2ySIZAwYcPhrXRoip7hAq8yAfrK2",
                "description": "The Kendo Club at UCSD seeks to promote awareness and appreciation of the Japanese sport of kendo, through community outreach, school involvement, and intercollegiate competition.",
                "eventList": []
            }
        },
        {
            "309hVc1ZN9bE1RLeiSEHNiuAO5M2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "309hVc1ZN9bE1RLeiSEHNiuAO5M2",
                "description": "Global Medical Brigades (GMB) is a secular, international network of university clubs that travel to developing countries to perform health care in communities without access to medicine otherwise. GMB delivers a holistic model for sustainable health through rigorous needs assessments, sponsoring referrals to those with needs beyond our capacity, keeping accurate electronic patient records, and working to improve the water and overall public health infrastructures of the villages we serve.",
                "eventList": [],
                "emailList": [],
                "clubName": "Global Medical Brigades",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8399",
                "contactEmail": ""
            }
        },
        {
            "3A1MHDWoCngfiK1Mi4tEEu9v0PW2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "3A1MHDWoCngfiK1Mi4tEEu9v0PW2",
                "description": "To help incoming new international students from China blend into America's multi-cultural society. Help Chinese student to understand other cultures and shorten the gaps between races and nations due to inexperience and misunderstandings. Also to provide convenient services to Chinese students and protect their safety.",
                "eventList": [],
                "emailList": [],
                "clubName": "Chinese Graduate Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9605",
                "contactEmail": ""
            }
        },
        {
            "3MwnH3AXbfObCVP65qQOHAzifnW2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "3MwnH3AXbfObCVP65qQOHAzifnW2",
                "description": "The goal of the organization is to provide a sense of community for students at UCSD who either identify as pacific islanders or wish to be a part of the pacific islander community. The organization will seek to promote and perpetuate pacific islander culture on campus. Members of the organization will gain a safe space in which they can meet with their fellow Pacific Islander UCSD peers to gain emotional and academic support",
                "eventList": [],
                "emailList": [],
                "clubName": "PISA: Pacific Islander Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12090",
                "contactEmail": ""
            }
        },
        {
            "3NEs9k5VzCXGQNJjAFOs0knVcvj1": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "3NEs9k5VzCXGQNJjAFOs0knVcvj1",
                "description": "The first greek letter fraternity for women, Kappa Alpha Theta strives to create an inclusive social and educational environment. Our mission is to offer women lifelong opportunities for intellectual and personal growth and create the widest influence for good.",
                "eventList": [],
                "emailList": [],
                "clubName": "Kappa Alpha Theta",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8439",
                "contactEmail": ""
            }
        },
        {
            "3ORF8iS7XPYt6snHtMKaywnYySO2": {
                "tags": [],
                "announcements": [],
                "clubReference": "3ORF8iS7XPYt6snHtMKaywnYySO2",
                "description": "Aid Cognitive Science student body through academic, professional, and social means; Engage graduate population and faculty of the Cognitive Science Department.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Cognitive Science Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10654",
                "contactEmail": ""
            }
        },
        {
            "3UtihVjRyZa86ODjXFH7glwKEgD3": {
                "clubReference": "3UtihVjRyZa86ODjXFH7glwKEgD3",
                "description": "Attend RoboMaster, an international collegiate robotic competition organized by DJI(Da-Jiang Innovations), in Shenzhen, China.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Robotics",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11929",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "3hNZLAfqmsh47BXvygSZdMuJbak1": {
                "description": "To allow Japanese American, Japanese and any other interested student to interact in a socially conductive environment. To promote awareness of Japanese American and Japanese culture, history and issues on the UCSD campus. To provide a link between the Japanese American community on the UCSD campus and the Japanese American community in the areas surrounding UCSD.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Nikkei Student Union",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8345",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "3hNZLAfqmsh47BXvygSZdMuJbak1"
            }
        },
        {
            "3iFBGe5wqoXaeNHWAePtch5WeoQ2": {
                "description": "Mission Statement: Established in 2014, Kidz Next Door is an exhibition hip-hop dance group based in UCSD. Created with the purpose to inspire others in the dance community, the group spreads their passion for dance through performances and workshops. Although the group's focus is built around the style of hip hop, many diverse styles and backgrounds are represented through the individual dancers such jazz, contemporary, salsa, etc. The Kidz Next Door Leadership pushes the group members to grow not only as dancers but as a family, encouraging them to respect one another as well as the community around them.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Kidz Next Door",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8475",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "3iFBGe5wqoXaeNHWAePtch5WeoQ2"
            }
        },
        {
            "3nB3R9351NZi0CRplTIWEablAD12": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10648",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "3nB3R9351NZi0CRplTIWEablAD12",
                "description": "The Ecology, Behavior & Evolution Club at UCSD seeks to provide students with research opportunities, internship guidance, and information regarding careers in ecology, behavior & evolution (EBE). The group also serves as a social nexus for students with EBE interests, and provides an organizational structure to promote volunteer activities.",
                "eventList": [],
                "emailList": [],
                "clubName": "Ecology, Behavior and Evolution Club at UCSD",
                "pictureURL": ""
            }
        },
        {
            "3x7VgxR0YVSw8mdWIRUhLqpTgSD3": {
                "emailList": [],
                "clubName": "Intergenerational Connections",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10680",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "3x7VgxR0YVSw8mdWIRUhLqpTgSD3",
                "description": "Intergenerational Connections is a non-profit student organization consisting of volunteers who believe that engaging seniors through various creative activities to promote healthy aging. Students will work one-on-one with seniors and community members.",
                "eventList": []
            }
        },
        {
            "3yBwq5hDf2NmbER8bEDta4tFQsa2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11878",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "3yBwq5hDf2NmbER8bEDta4tFQsa2",
                "description": "Yonder Deep, part of the Yonder family of student project teams, is dedicated to pursuing autonomous underwater vehicle (AUV) projects, partnering with outside institutions to bring undergraduates closer to tangible research projects, and bringing tangible experience to students interested in the ocean and robotics.",
                "eventList": [],
                "emailList": [],
                "clubName": "Yonder Deep",
                "pictureURL": ""
            }
        },
        {
            "42ZVhn4jGKRf0fekDieba1wHGYX2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "42ZVhn4jGKRf0fekDieba1wHGYX2",
                "description": "The UCSD Japanese Student Association is for students whose home country is Japan and for those who wish to experience Japanese culture.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Japanese Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9642",
                "contactEmail": ""
            }
        },
        {
            "4LRR5KmwD1cBpy1C3MPJ3nXDEpy1": {
                "emailList": [],
                "clubName": "Active Minds",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8480",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "4LRR5KmwD1cBpy1C3MPJ3nXDEpy1",
                "description": "Active Minds at UC San Diego is a non-profit, student-run mental health awareness, education, and advocacy organization on campus. Through our programs, events, and collaborations, we will seek to promote mental health awareness on campus and the overall psychological well-being of UC San Diego students.",
                "eventList": []
            }
        },
        {
            "4WjkyvL8MAdHOKUXfoh0wGWBkJy1": {
                "clubReference": "4WjkyvL8MAdHOKUXfoh0wGWBkJy1",
                "description": "Educate and familiarize students in the aviation career field.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Aztec Aviation Organization at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10845",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "4YqQ0XfOCEcFOAhTbeqApdEIYF53": {
                "clubReference": "4YqQ0XfOCEcFOAhTbeqApdEIYF53",
                "description": "We are an Asian-interest social fraternity established to uphold the values of integrity, perseverance, and eternal brotherhood.",
                "eventList": [],
                "emailList": [],
                "clubName": "Psi Chi Omega",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11966",
                "contactEmail": "",
                "tags": [
                    "Fraternity"
                ],
                "announcements": []
            }
        },
        {
            "52B9hGPbxZXEqax2KcDn3sdGUX33": {
                "tags": [
                    "Media"
                ],
                "announcements": [],
                "clubReference": "52B9hGPbxZXEqax2KcDn3sdGUX33",
                "description": "The Medical Literature Society at UCSD strives to promote the understanding of a career in medicine through a biomedical, psychological, and social perspective. We also encourage pre-medical and pre-health students to form a stronger community with each other and reach out to other students with similar career aspirations.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Medical Literature Society at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8529",
                "contactEmail": ""
            }
        },
        {
            "5BkD0ztLGMYzIpwd3TWaWS57fcl1": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "5BkD0ztLGMYzIpwd3TWaWS57fcl1",
                "description": "Tau Beta Pi is the premier engineering honor society in the United States and one of the top three honor societies in the nation. The Society focuses on serving its members and the public with enthusiasm and excellence. The Association also strives to promote excellence in the fields of engineering, thus helping to improve the perception of the profession.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tau Beta Pi",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8485",
                "contactEmail": ""
            }
        },
        {
            "5E3xLamBKhVE7g69vePk893AyvP2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chinese Dance Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10758",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "5E3xLamBKhVE7g69vePk893AyvP2",
                "description": "To enrich the student community of UCSD with the awareness of Chinese culture through the art of dance. Our purpose is to create an atmosphere of artistic and creative expression for everyone. CDA practices Chinese dance with emphasis on ballet techniques, but continues to keep the essence of Chinese culture in the pieces. In order to spread multi-cultural acknowledgemnt, CDA uses dance to celebrate the individual creativity and artistic collaboration.",
                "eventList": []
            }
        },
        {
            "5UNG4D1PNwdWwBtSpTGSQKhTAdD2": {
                "emailList": [],
                "clubName": "FOOSH",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8392",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "5UNG4D1PNwdWwBtSpTGSQKhTAdD2",
                "description": "Foosh performs and teaches short form and long form improv comedy. Throughout the year we regularly put on free shows for the UCSD student body, perform in the greater San Diego improv community, and host and attend improv festivals.",
                "eventList": []
            }
        },
        {
            "5XMSCHlHFYTZsMmwPuH4MSjIp2C3": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "5XMSCHlHFYTZsMmwPuH4MSjIp2C3",
                "description": "Books For Prisoners sends books and resources to prisoners in California.",
                "eventList": [],
                "emailList": [],
                "clubName": "Books For Prisoners",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10677",
                "contactEmail": ""
            }
        },
        {
            "5Yp9OUa5UaOivypjojIHoscHPl93": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "5Yp9OUa5UaOivypjojIHoscHPl93",
                "description": "Grow at UCSD will provide a forum for the collaboration of student gardens on campus.",
                "eventList": [],
                "emailList": [],
                "clubName": "GROW UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8354",
                "contactEmail": ""
            }
        },
        {
            "5dcZZlfNwQT2JEJAZ3T6Ojl5jIm2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8461",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "5dcZZlfNwQT2JEJAZ3T6Ojl5jIm2",
                "description": "The purpose of this non-profit organization is to provide students with ADHD, ADD, and other concentration related needs the academic and communal support they need whether it be through peer tutoring, support groups, or referring programs that the organization does not offer to allow for improvement in the academic field.",
                "eventList": [],
                "emailList": [],
                "clubName": "Helping Students Focus",
                "pictureURL": ""
            }
        },
        {
            "5erVnS1VRGd5Z2ktR6B6a6skjqY2": {
                "description": "To raise awareness about exercise/activity as a means for contributing and maintaining good health, and preventing disease. While also promoting the interests and professional development of the multidisciplinary field of sports medicine; such as orthopedics, family medicine, and rehabilitation.",
                "eventList": [],
                "emailList": [],
                "clubName": "Exercise is Medicine",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11986",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "5erVnS1VRGd5Z2ktR6B6a6skjqY2"
            }
        },
        {
            "5mbCKpz0CaQUHcCCFwgCe5p6pqx2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Alpha Phi Omega",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9613",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "5mbCKpz0CaQUHcCCFwgCe5p6pqx2",
                "description": "Alpha Phi Omega is a co-ed service fraternity organized to provide community service, leadership and social opportunities to college students. The purpose of this fraternity is to assemble college students in a national service fraternity in the fellowship of principles derived from the Scout Oath and Law of the Boy Scouts of America; to develop leadership, to promote friendship and to provide service to humanity; and to further freedom that is our national, educational and intellectual heritage",
                "eventList": []
            }
        },
        {
            "5nOsLuCr2MTFg9gR2pZtp6giweF2": {
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "5nOsLuCr2MTFg9gR2pZtp6giweF2",
                "description": "The purpose for Tritons for Mike Levin is to bring together undergraduates who are passionate about keeping California's 49th district blue. We work directly with Mike Levin's campaign to not only keep him in office, but to ensure adequate representation, clean air, sensible gun legislation, and corporate accountability for all students living in the 49th district, which incluses UCSD's campus.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tritons for Mike Levin",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12073",
                "contactEmail": ""
            }
        },
        {
            "5u5FpGoSLsRck8asMsjBM8vzSFd2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "5u5FpGoSLsRck8asMsjBM8vzSFd2",
                "description": "The positive transformation of the Global Community by developing â€œServant Leaders of Integrityâ€ and helping transform the lives of university students.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "CEO GLOBAL at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9649",
                "contactEmail": ""
            }
        },
        {
            "5uxxiEGKqybuJAJJFkESQKkjRlS2": {
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "5uxxiEGKqybuJAJJFkESQKkjRlS2",
                "description": "The purpose of TFFP shall be to advocating for the exercise of a free press for the student body of UCSD. This organization shall serve as the official representation of the independent student press at the UCSD.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Tritons for a Free Press",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11858",
                "contactEmail": ""
            }
        },
        {
            "6CoqK6y9vjOiEGe4Gt1sR6IpEfD3": {
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "6CoqK6y9vjOiEGe4Gt1sR6IpEfD3",
                "description": "Our mission is to create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of our communities. We envision a future where every Pi Kappa Phi embraces his role as a leader, puts service before self and improves the world around him.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Pi Kappa Phi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8373",
                "contactEmail": ""
            }
        },
        {
            "6GpV1lH2BnMFO1C968DnxJbFKWb2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10827",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "6GpV1lH2BnMFO1C968DnxJbFKWb2",
                "description": "To promote understanding of Alzheimerâ€™s and healthy aging among youth and young adults by providing unique opportunities to volunteer with those afflicted by Alzheimerâ€™s and advocate for change. Our purpose is to raise funds for research and support treatment and care, ultimately contributing to the movement in finding a cure for this neurodegenerative disease.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "The Youth Movement Against Alzheimers"
            }
        },
        {
            "6aAQAVlexRe96cNMJjnVeEShZ992": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "6aAQAVlexRe96cNMJjnVeEShZ992",
                "description": "We are a student-run team that designs, builds, tests, and flies our own UAV to compete each year in the Student UAS Competition hosted by the AUVSI Seafarer Chapter against over 60 teams from around the world. The team is multi-disciplinary consisting of three subteams. The airframe team designs, analyzes and builds a reliable composite flight platform to house and transport a variety of avionics packages. The embedded team designs the payload and electronics. The software team programs the ability to complete mission tasks such as autonomously recognizing targets and dynamic path planning.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Unmanned Aerial Systems at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10699",
                "contactEmail": ""
            }
        },
        {
            "6obta5BEbzZtzuGWDACTOOnBp1p1": {
                "description": "Frequency is the only all-male a cappella group at the University of California, San Diego (UCSD). Founded in 2008 and completely student-run, Frequency has been committed to promote a cappella music, provide entertainment through public and private performances, foster long-term relationships with the a cappella community on and off-campus, and to provide its members with leadership opportunities.",
                "eventList": [],
                "emailList": [],
                "clubName": "Frequency",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8527",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "6obta5BEbzZtzuGWDACTOOnBp1p1"
            }
        },
        {
            "71iBJ6mYNygITRZNgN8SU3wSPsk2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "71iBJ6mYNygITRZNgN8SU3wSPsk2",
                "description": "Triton Fighters seeks to offer a place where fans of fighting games of any kind can meet up to play and form a community. We hope to host weekly meetups at which students can bring setups for their favorite games to play with others, allowing them to meet new people that share common interests.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Fighters",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8494",
                "contactEmail": ""
            }
        },
        {
            "7DGx2bGIy8WYAiHtqAk84RUg5lo1": {
                "emailList": [],
                "clubName": "Flying Sams",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9610",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "7DGx2bGIy8WYAiHtqAk84RUg5lo1",
                "description": "Flying Sams is a medical service club at the University of California, San Diego in association with the non-profit service organization, The Flying Samaritans Inc. We are dedicated to providing free medical services to the underprivileged people of Mexico through a clinic staffed entirely of volunteer physicians, nurses, medical and pre-medical students.",
                "eventList": []
            }
        },
        {
            "7HnIu5cCiRXs2lxR275lz8qSMzv1": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "7HnIu5cCiRXs2lxR275lz8qSMzv1",
                "description": "The purpose of Quality of Life Plus Student Association (QL+) at UCSD (which will hereafter be referred to as QL+) is to foster and generate innovations and adaptive equipment through hands-on learning, to aid and improve the quality of life of those who are injured and who are still serving or have served in our United States military forces, or others within the local community. The club will provide local community members with assistive and adaptive equipment and other innovative devices tailored to an individualâ€™s needs to benefit their ability to complete tasks that may be difficult to perform on their own. Organization members will get hands-on project experience in the following areas, including but not limited to: prostheses, assistive technology, and medical devices. Organization members will have the opportunity to work together and engineer solutions to address an issue that a particular community member may be having. QL+ will foster innovation and continue the philanthropic mission of the QL+ Program.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Quality of Life Plus Club (QL+)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10725",
                "contactEmail": ""
            }
        },
        {
            "7Wn4xtLH1ugEb516hWogo92SPbL2": {
                "emailList": [],
                "clubName": "Sigma Alpha Mu Fraternity",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11920",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "7Wn4xtLH1ugEb516hWogo92SPbL2",
                "description": "To unite each undergraduate member toward a more meaningful life, to prepare members for responsible fraternity and community involvement.",
                "eventList": []
            }
        },
        {
            "7c6a3ffF7ycBqM0scAVjtpoTp2C3": {
                "emailList": [],
                "clubName": "Tritons Film Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8537",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "7c6a3ffF7ycBqM0scAVjtpoTp2C3",
                "description": "The purpose of the club is to provide an environment where University of California San Diego students can discuss and watch films with their fellow peers.",
                "eventList": []
            }
        },
        {
            "7keEKpcRIuNL2yE2gqrv9xSYSmp2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Christian Pharmacists Fellowship International (CPFI)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8536",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "7keEKpcRIuNL2yE2gqrv9xSYSmp2",
                "description": "1. Fellowship Since Christian students have a common purpose, it follows that they should meet together for encouragement, edification, uplifting, and sharing. The scientific training involved in pharmacy education may stem from a humanist/agnostic philosophy. Therefore, regular meetings of Christians can help students maintain perspective on the â€œbig pictureâ€ God has planned for mankind as He revealed in the Bible. 2. Bible Study/Discussion/Prayer The need to examine, study, and struggle with social/medical issues has never been greater. Faith rooted in Scripture builds firm convictions about God, man, lifestyle, human relationships, purpose of science, and the nature of a profession. Christian principles taught through the Bible equip pharmacy students to become compassionate pharmacists that go above and beyond to care for the entire patient by meeting their physical, emotional, and spiritual needs. Times of discussion encourage growth of the chapter through shared experiences and individual insights. Prayer helps the chapter to remain dependent on God. 3. Ministry Projects A young attorney once asked Jesus a test question in an attempt to entrap him. â€œWhat shall I do to inherit eternal life?â€ Jesus responded with a question of his own. â€œYou know the Law. How do you read it? Sum it up in one sentence.â€ The young attorney quickly answered, â€œYou shall love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind; and your neighbor as yourself.â€ (Luke 10:25-29 and Mark 10:17) Jesus complimented the attorney on his succinct answer and told him to do just as he had answered. One of the characteristics of our society today is the rapid decline of a sense of community in tandem with an epidemic of autonomy. One does not have to travel far to do mission work; many opportunities are available in every community. Wherever God has placed you is your mission field and even closer to â€œhomeâ€ are those who sit next to you in class every day. Remember that we are told to start at home (Jerusalem), then work with interfacing cultures (Judea and Samaria), and then distant cultures (ends of the earth). 4. Witness â€œBut you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.â€ Acts 1:8 Every one of us is a witness for Jesus Christ. The question is, â€œAre we effective?â€ Student chapters should consider evangelism as individuals and as a chapter. The chapter should be a source of strength and encouragement for personal outreach. There is another facet to our Christian witness: The individual who sees himself/herself called by God and who knows Jesus Christ as the Lord of all creation is vitally concerned about this world and its values and priorities. Our witness involves not only a verbal declaration of the saving power of Jesus Christ, but a promotion of Christian alternatives to secularism and other â€œismsâ€ which are dehumanizing and degrading to man. The Christian view of life has more than a passing relevance to a discipline concerned with life, death, and the person. A chapter genuinely concerned with its witness must seek to let its light radiate forth in the midst of the healthcare community, piercing every facet. 5. Worship â€œShout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs. Know that the LORD is God. It is he who made us, and we are his; we are his people, the sheep of his pasture. Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. For the LORD is good and his love endures forever; his faithfulness continues through all generations.â€ Psalm 100 Though worship may not be the primary goal of our student chapter, it will be difficult to meet regularly as Christians and not spend some time worshiping our Heavenly Father. Worship will often unify a student chapter as no other activity can, and it is greatly encouraged where ever Christians gather.",
                "eventList": []
            }
        },
        {
            "7s6AxBuErodTcYb3ODwQDBhTXJ12": {
                "emailList": [],
                "clubName": "Women in Business",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10657",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "7s6AxBuErodTcYb3ODwQDBhTXJ12",
                "description": "UCSD Women In Business aims to empower women of all backgrounds to become leaders in today's ever-changing world. Through business education, networking, mentorship, leadership development workshops, and social events, members will have the chance to join a community dedicated to helping one another succeed. By encouraging both professional and personal growth, UCSD WIB will give women pursuing business the chance to affect change not only within themselves and the university, but in the world they seek beyond.",
                "eventList": []
            }
        },
        {
            "7su87WTZhsNPuzj10drEsmBtK1l1": {
                "clubReference": "7su87WTZhsNPuzj10drEsmBtK1l1",
                "description": "Our mission is to encourage students interested in the actuarial field to pursue this profession by providing them with different resources, such as, workshops, exam preparation/study sessions, and networking opportunities with business professionals.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Actuarial Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8509",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": []
            }
        },
        {
            "7udUJPGbD4bAaxAdjzq7JCGnqI42": {
                "emailList": [],
                "clubName": "A Cappella Choir",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8450",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "clubReference": "7udUJPGbD4bAaxAdjzq7JCGnqI42",
                "description": "The purpose of A Cappella Choir is to provide a fun and safe space for students to sing and meet other fellow singers. We will be teaching singing techniques to students who are interested in a cappella. Everyone is welcome to join! No prior music background required.",
                "eventList": [
                    "7udUJPGbD4bAaxAdjzq7JCGnqI42Music stuffSometime"
                ]
            }
        },
        {
            "7wyOkq2UTIdKHIZmLHNx9j3AmKy2": {
                "description": "To unite men who strive to achieve high standards of achievement in all aspects of life, and who share in the need of promoting Armenian history, language, and culture.",
                "eventList": [],
                "emailList": [],
                "clubName": "Alpha Epsilon Omega, Eta",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10697",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "7wyOkq2UTIdKHIZmLHNx9j3AmKy2"
            }
        },
        {
            "8CHdiKiYnARHMbmZf5XNEqNnz8J2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9635",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "8CHdiKiYnARHMbmZf5XNEqNnz8J2",
                "description": "The organizationâ€™s purpose will be to foster a community within UCSD focused around the video game Dota 2 and to promote interest and engagement with the game and its community in the general student body. This includes social, casual, and competitive opportunities for all players regardless of skill level or playtime.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Dota",
                "pictureURL": ""
            }
        },
        {
            "8I08PzOEBwaP79He1enT48V678u1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Out in Science, Technology, Engineering, and Mathematics (oSTEM)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8448",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "8I08PzOEBwaP79He1enT48V678u1",
                "description": "Out in Science, Technology, Engineering, and Mathematics (oSTEM) is a nationally recognized organization that is geared towards the personal and professional development of queer or LGBTQIA+ students who are interested in Science, Technology, Engineering, and Mathematics through social, educational, professional, philanthropic, and outreach programming. It is also focused on helping students throughout UCSD and San Diego connect to a broader community of queer folks (students and professionals) whose academic interests lie in similar fields.",
                "eventList": []
            }
        },
        {
            "8YMDQeQBcXMODNmSxhwMnFbZJN32": {
                "clubReference": "8YMDQeQBcXMODNmSxhwMnFbZJN32",
                "description": "To build and sustain a community that gathers to practice and promote Argentine Tango at UCSD.",
                "eventList": [],
                "emailList": [],
                "clubName": "Argentine Tango Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10843",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": []
            }
        },
        {
            "8zKlihnTYwbxiK0VyrbHT2XAZLy2": {
                "tags": [
                    "Computer Science",
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "8zKlihnTYwbxiK0VyrbHT2XAZLy2",
                "description": "Open Source @ UCSD (OS) is an organization that contributes to and creates open source projects. Open source projects are projects where all interested UCSD students can participate in. Participation can vary between fixing known bugs or glitches to improving the project by adding new features. Open Source @ UCSD will be using these projects to help teach students core open source practices, which include Git and basic coding principles, in an inclusive environment. As students learn the basics of creating their own Git repositories, they will be able to create their own open source projects for others to expand upon.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Open Source at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8544",
                "contactEmail": ""
            }
        },
        {
            "9TleHSMjtKMk37ZU54vbpCiqCep1": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "9TleHSMjtKMk37ZU54vbpCiqCep1",
                "description": "Tritons For Israel is the pro-Israel student organization at UC San Diego. We are dedicated to raising awareness about Israel and celebrating Israeli culture, educating students and encouraging dialogue, as well as promoting peace in the Middle East.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tritons For Israel",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8548",
                "contactEmail": ""
            }
        },
        {
            "9Z64uva55TZe3SBaXJV6pkPW8EP2": {
                "emailList": [],
                "clubName": "Global Medical Missions Alliance",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8523",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "9Z64uva55TZe3SBaXJV6pkPW8EP2",
                "description": "Part 1. Leave a positive and profound impact for Christ by guiding and equipping students with training and networking opportunities so they may serve as effective healers and ministers of Christâ€™s love. Part 2. Foster a unique community and fellowship among peers and mentors committed to medical mission and healing ministry. Part 3. Become the next generation of healthcare professionals â€œpoured out as a drink offeringâ€ for the Gospel. Part 4. To provide various Medical Mission opportunities around the globe with the main focus, to further Godâ€™s kingdom.",
                "eventList": []
            }
        },
        {
            "9z0pNwXSzshMjNu8R8LbnepWfa02": {
                "emailList": [],
                "clubName": "Lebanese Social Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11977",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "9z0pNwXSzshMjNu8R8LbnepWfa02",
                "description": "LSC is a club for those who are Lebanese and non-Lebanese interested in uniting and promoting the culture. We are a non-political, non-religious campus organization interested in expanding the appreciation of Lebanon and its culture through networking and social events.",
                "eventList": []
            }
        },
        {
            "AAbPkZsrMXTQIkNPsze5V6WGoZ82": {
                "description": "To provide a supportive environment in which singers can enjoy and participate in musical activities, specifically vocally.",
                "eventList": [],
                "emailList": [],
                "clubName": "Duly Noted",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10649",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "AAbPkZsrMXTQIkNPsze5V6WGoZ82"
            }
        },
        {
            "ABMdJ4SzG0NoxjhS18VlwjOZqYV2": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "ABMdJ4SzG0NoxjhS18VlwjOZqYV2",
                "description": "To promote awareness about The Baha'i Faith and promote the unity of mankind.",
                "eventList": [],
                "emailList": [],
                "clubName": "Baha'i Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10653",
                "contactEmail": ""
            }
        },
        {
            "AIzQz3obP1NRBW1EzujSklUt52H2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chinese Classic Dance Team",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10672",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "AIzQz3obP1NRBW1EzujSklUt52H2",
                "description": "As a dance team, we strive to promote dancing on stage as an enjoyable form of art. We bring together people of different cultures, backgrounds, and disciplines, and connect through varying styles of dance, music, and choreography. Chinese Classic Dance Team, as a registered organization at UC San Diego, is committed to promoting a safe and vibrant campus community. No individual or group affiliated with Chinese Classic Dance Team will take any action or create a situation which recklessly or intentionally endangers mental or physical health or involves the forced consumption of liquor or drugs for the purpose of initiation into or affiliation with this organization. The leaders and members of the Chinese Classic Dance Team also agree to abide by all aspects of the UC San Diego Student Conduct Code, University policies and Federal, California State and Local laws.",
                "eventList": []
            }
        },
        {
            "AO2U8YjZurdPgVv4dXyXnlTVNyk1": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "AO2U8YjZurdPgVv4dXyXnlTVNyk1",
                "description": "The mission of the Student Veterans Organization is to be the touchstone and support network for the UCSD veteran community in order to ensure their personal, professional, and academic success.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Student Veterans Organization",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11863",
                "contactEmail": ""
            }
        },
        {
            "AnyzeYBqn3SfPqm5nq1rnTK4K992": {
                "clubReference": "AnyzeYBqn3SfPqm5nq1rnTK4K992",
                "description": "To cultivate unity among individuals who share a common African identity. To understand, engage and celebrate diverse African cultures through empathetic dialogue. To stand in solidarity with causes and movements concerned with self-determination and the welfare of African people, the African continent and African Diaspora.",
                "eventList": [],
                "emailList": [],
                "clubName": "African Students Association at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8572",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "ArgCWJHtZQdpYtnvsW1yuUOUbl93": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "ArgCWJHtZQdpYtnvsW1yuUOUbl93",
                "description": "Design Co is a pre-professional student organization at UC San Diego that bridges the gap between designers and industry. Our mission is to cultivate a space that fosters opportunity and growth as an inclusive community of designers. The â€œCoâ€ means Community, Collective, and Collaborative, which is everything we stand for. We believe that fostering an inclusive design community means collaborating with others and growing with everyone. By combining workshops, events, and other career growth opportunities, weâ€™re taking the challenges of breaking into industry head on and building a strong design community while we're at it.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Design at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12058",
                "contactEmail": ""
            }
        },
        {
            "At4hIX4liHRvC8HtrQKK3MlNg7o2": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "At4hIX4liHRvC8HtrQKK3MlNg7o2",
                "description": "The Symphonic Student Association (SSA) is a student-run organization committed to fostering a community for students and community members who share an interest in classical music. SSA is the primary social platform for the UCSD Chamber Orchestra but hosts social events open to the entire UCSD community. In addition, SSA provides a range of performance opportunities such as: chamber groups, recording groups, gigs, and community outreach performances. Finally, SSA works to help improve musicianâ€™s skills with coaching from professionals for instrumentalists. SSA is dedicated to raising awareness in classical music on the UCSD campus by holding performances throughout the year and strives to build a community where students can gather to explore the boundaries of musical instruments and classical music. For more information, visit our website at ssa.ucsd.edu or contact us at symphoni@ucsd.edu.",
                "eventList": [],
                "emailList": [],
                "clubName": "Symphonic Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12061",
                "contactEmail": ""
            }
        },
        {
            "AvxyuSCzYohArm1WdJEREAzwlQo1": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "AvxyuSCzYohArm1WdJEREAzwlQo1",
                "description": "A Christian student organization comprised of Chinese and English speakers associated with Harvest Evangelical Church of San Diego (HECSD), focused on Bible study and outreach, and whose purpose is to share the gospel and grow in faith. Our purpose is for the Gospel to be made known on the UCSD campus and to welcome all people to learn more and have a community that cares for and supports one another.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Harvest Christian Fellowship at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10681",
                "contactEmail": ""
            }
        },
        {
            "B1d7t0m8xjci1VRsfObI4K5seSh2": {
                "emailList": [],
                "clubName": "First Generation Student Alliance",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10663",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "B1d7t0m8xjci1VRsfObI4K5seSh2",
                "description": "The First Generation Student Alliance (FGSA) acknowledges the unique facets of the first-generation identity and seek to strengthen its presence on campus. FGSA will support first generation students at UCSD by fostering a sense of first-gen solidarity through community bonding activities and providing members with access to campus opportunities and resources.",
                "eventList": []
            }
        },
        {
            "B8pYPhAaaqYOPI7ZTsL4qjer2QO2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10847",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "B8pYPhAaaqYOPI7ZTsL4qjer2QO2",
                "description": "To create a community of Greek students with a passion to explore God and their faith.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "GreekLove"
            }
        },
        {
            "BC5Ij9A32ydtvFLkJvgYQVZRdPH2": {
                "clubReference": "BC5Ij9A32ydtvFLkJvgYQVZRdPH2",
                "description": "The purpose of Theta Tau is to build a strong fraternal bond and maintain high standards of professionalism among fellow members. We are a pre-professional engineering organization established for the development of the brothers of the fraternity.]Theta Tau aims to provide its members the social and professional development necessary to succeed during and after their college years.",
                "eventList": [],
                "emailList": [],
                "clubName": "Theta Tau",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8418",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": []
            }
        },
        {
            "BKkTkFz4GQYpH5s9rl224pTVsnr2": {
                "description": "The purpose of the Board Game Club is to bring members of the board game community together and create a social setting to play, create, and discuss strategies to board games.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Board Game Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10666",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "BKkTkFz4GQYpH5s9rl224pTVsnr2"
            }
        },
        {
            "BOvUiNj9GzgCTHzpV2nTbhWJCT13": {
                "emailList": [],
                "clubName": "Kappa Sigma",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12095",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "BOvUiNj9GzgCTHzpV2nTbhWJCT13",
                "description": "A non-political, non-religious and non-profit social organization commited to the embodiment of Fellowship, through brotherhood; Leadership, inside and outside of our organization; Scholarship, by aiding scholastic excellence; and Service, by aiding those at our university, in our community, and in the world through community service and philanthropy in order to become better men.",
                "eventList": []
            }
        },
        {
            "BUEvdrhDDOV7mHH9JsaHFaqRrMi2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "BUEvdrhDDOV7mHH9JsaHFaqRrMi2",
                "description": "To provide guidance for high school students, especially underrepresented minorities, to enable for them to succeed in school and their future careers",
                "eventList": [],
                "emailList": [],
                "clubName": "Young Minds",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10777",
                "contactEmail": ""
            }
        },
        {
            "BoZQIAHaugTKbi7N4RPazdZ9DzT2": {
                "clubReference": "BoZQIAHaugTKbi7N4RPazdZ9DzT2",
                "description": "ESW-UCSDâ€™s Vision: We envision a worldwide era of sustainability in which all communities cooperate to achieve lasting environmental, social, and economic prosperity. ESW-UCSDâ€™s Mission: Our mission is to bring communities together to develop, implement, and share sustainable technologies and practices worldwide.",
                "eventList": [],
                "emailList": [],
                "clubName": "Engineers for a Sustainable World",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10833",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": []
            }
        },
        {
            "BwOJXYgz5QgJFIyALjlB0pwxSH42": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "BwOJXYgz5QgJFIyALjlB0pwxSH42",
                "description": "To promote an understanding of the Armenian culture and foster awareness about issues of concern in the Diaspora and the Homeland to the campus community of UC San Diego.",
                "eventList": [],
                "emailList": [],
                "clubName": "Armenian Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8457",
                "contactEmail": ""
            }
        },
        {
            "ByxLxxdrSmV0xqz4Upgje1ssFJU2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8528",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "ByxLxxdrSmV0xqz4Upgje1ssFJU2",
                "description": "Triton Smash is a student organization with the purpose of bringing together players, spectators, and enthusiast of Super Smash Bros Ultimate for the Nintendo Switch. The goal is to create a friendly community of students that share the same passion for the game while also promoting the competitive fighting scene. The focus will be primarily on socializing with other players on campus and bringing the best gaming experience possible to students.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Triton Smash"
            }
        },
        {
            "C85SQhaJsHUXmpQaDaV7Dr4aO6G2": {
                "emailList": [],
                "clubName": "Hawaii Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8398",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "C85SQhaJsHUXmpQaDaV7Dr4aO6G2",
                "description": "Promote cultural awareness of Hawaiâ€™i, other Polynesian Islands, and their people, spread the â€œAloha Spiritâ€ across UCSD's campus, serve as a support group for incoming students from Hawaiâ€™i and other Polynesian Islands, and provide a social haven for any UCSD student seeking friends. We work together throughout the school year in preparation for our Annual Lu'au in the Spring.",
                "eventList": []
            }
        },
        {
            "C8oIltd2zeW8uPP6knZTlgjzrKD3": {
                "emailList": [],
                "clubName": "Mixed Student Union",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10825",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "C8oIltd2zeW8uPP6knZTlgjzrKD3",
                "description": "Mixed Student Union at UCSD will have the purpose to increase and highlight cultural exchange amongst members and campus at large, as well as create a welcoming and inclusive community for people of mixed identities. MSU strives to create community for those students who feel they may not fit into traditional cultural spaces.",
                "eventList": []
            }
        },
        {
            "CK1jvBVvBJV7EJzc5RiWXj7JZB63": {
                "emailList": [],
                "clubName": "CALPIRG Students",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11870",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "CK1jvBVvBJV7EJzc5RiWXj7JZB63",
                "description": "We believe in the power of students to change our world. Our organizers and students work together to create a greener, healthier, more meaningful future -- on campus, in our community, and across our state and country. We have a two-fold mission to win positive reforms on issues that affect us and our society and to train students to be engaged in civics and democracy.",
                "eventList": []
            }
        },
        {
            "CPUEUSE1GPOcOKnOQcZYgArXxmk2": {
                "tags": [],
                "announcements": [],
                "clubReference": "CPUEUSE1GPOcOKnOQcZYgArXxmk2",
                "description": "To provide a gateway into the physical, occupational, and speech therapy fields through providing information about SPOT programs, preparing students for the application process, hosting speakers from the field and social networking.",
                "eventList": [],
                "emailList": [],
                "clubName": "Speech, Physical, and Occupational Therapy (SPOT) (formerly P-PT/OT Society)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12088",
                "contactEmail": ""
            }
        },
        {
            "CWJPECQp79PtCSgdQzWrhCqMQqu2": {
                "description": "The APD Consulting Club at UCSD has the following objectives: â€¢ To inform graduate-level students about possible careers in consulting â€¢ Prepare graduate-level students to attain consulting jobs â€¢ Provide a career building resource focused on consulting â€¢ Create an alumni network of advanced professional degree consultants from UCSD",
                "eventList": [],
                "emailList": [],
                "clubName": "APD Consulting Club at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10755",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "CWJPECQp79PtCSgdQzWrhCqMQqu2"
            }
        },
        {
            "CZeKaKp7Kfg11YGi52YdEo3ydU92": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8423",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "CZeKaKp7Kfg11YGi52YdEo3ydU92",
                "description": "NETS is a non-profit student organization which facilitates communication and cooperation on nanotechnology and science. We work with NanoEngineering students, faculty members, non-major students and outside industry stakeholders. We provide opportunities for academic development, professional growth, and networking.",
                "eventList": [],
                "emailList": [],
                "clubName": "NanoEngineering and Technology Society",
                "pictureURL": ""
            }
        },
        {
            "DFkd3yKTGUaLGLwDXkyZq6LQNNi1": {
                "clubReference": "DFkd3yKTGUaLGLwDXkyZq6LQNNi1",
                "description": "Sigma Alpha Epsilon strives to give young men the leadership, scholarship, service and social experiences they need to excel in the walls outside their campus and once they graduate. We firmly believe membership is for life. In addition, we strive to mold our members into gentlemen so they can set an example in today's society.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sigma Alpha Epsilon",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8481",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": []
            }
        },
        {
            "DG6Z7tXOVEV4lKUC5BMrb3yqjsB2": {
                "clubReference": "DG6Z7tXOVEV4lKUC5BMrb3yqjsB2",
                "description": "to sponsor Persian social and cultural activities and events, to promote an understanding of Iranian culture, to help foster friendship among different cultural groups, and to provide a source of union and support for the Iranian community at UC San Diego.",
                "eventList": [],
                "emailList": [],
                "clubName": "Cultural Iranian STudent Association (CISTA) (formerly ISTA)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10728",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "DbrWitZX3eNrRtLgW8pDEMzUOCA2": {
                "emailList": [],
                "clubName": "Eta Kappa Nu (HKN)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9650",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "DbrWitZX3eNrRtLgW8pDEMzUOCA2",
                "description": "Eta Kappa Nu (IEEE-HKN) is the student honor society of IEEE and is dedicated to encouraging and recognizing excellence in IEEE fields of interest. Members consist of students, alumni, and professionals who have demonstrated exceptional academic and professional accomplishments. Student members are selected on the basis of scholastic standing, character, and leadership. At UCSD, HKN provides free tutoring and hosts a variety of workshops and events to promote technical, professional, and academic development.",
                "eventList": []
            }
        },
        {
            "DyavVcn6Vzab3wj9YqA3gAuxGy93": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "DyavVcn6Vzab3wj9YqA3gAuxGy93",
                "description": "A pre-health honor society with the purpose of connecting future health professionals and recognizing their achievements in their pursuit of a career in health. Activities include volunteering, educational programs and speakers at bi-weekly meetings including doctors, nurses, patients, medical students, pharmaceutical students, and more.",
                "eventList": [],
                "emailList": [],
                "clubName": "Alpha Epsilon Delta Pre-Health Professional Honor Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8471",
                "contactEmail": ""
            }
        },
        {
            "E40A1nVMdIQ6V3Dk5hYFTNBIoYq1": {
                "emailList": [],
                "clubName": "Triton Engineering Student Council",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10736",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "E40A1nVMdIQ6V3Dk5hYFTNBIoYq1",
                "description": "TESC wants to develop engineers who exhibit leadership through excellence in all aspects of life: - Prepare students for, and connect them with, professional opportunities; - Coordinate, and collaborate with, engineering student organizations; - Create and maintain a vibrant community for engineering students; and - Champion engineering and engineers in the school, community, and beyond.",
                "eventList": []
            }
        },
        {
            "EIkcLHRHaMSu27pt6JWwKxGvrht1": {
                "description": "Conceived in 1967, the Black Student Union at UC San Diego is charged with four fundamental responsibilities: 1. Access, retention, and yield programming to inspire, enlighten, to build unity, to challenge, and to perpetuate the ideologies of the Black Student Union at UCSD 2. To support the efforts of those organizations which perpetuate the ideologies of the Black Student Union 3. To assist in providing an environment that is conducive to academic excellence amongst the Black student population 4. To be accountable through representation.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Black Student Union",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8539",
                "contactEmail": "",
                "tags": [
                    "Affirmitive Action"
                ],
                "announcements": [],
                "clubReference": "EIkcLHRHaMSu27pt6JWwKxGvrht1"
            }
        },
        {
            "EIs7clHCt2hwHcY2w7sJtDVXDzB2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "EIs7clHCt2hwHcY2w7sJtDVXDzB2",
                "description": "The Bracelets for Empowerment And Development (BEAD) Program aims to provide widowed women in rural regions of Nigeria with the skill set of jewelry making as a source of economic and health security. In collaboration with the Faith Alive Foundation and Thrive Ministry and Mission, the BEAD Program has two main objectives: (1) To be an integral skills acquisition program and source of financial independence for both widows and younger women in rural Africa; (2) To produce revenue for the women that in part will be used to buy long-lasting insecticidal nets (LLINs) for the prevention of mosquito-borne disease in the local community, as well as investment in infrastructure in the womenâ€™s villages.",
                "eventList": [],
                "emailList": [],
                "clubName": "The BEAD Program",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10748",
                "contactEmail": ""
            }
        },
        {
            "EIym6mkZsIRrMhHmBdgJBC7khiO2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "EIym6mkZsIRrMhHmBdgJBC7khiO2",
                "description": "Mission Statement: To bring business and education together in a positive working relationship through innovative leadership and career development programs.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Phi Beta Lambda at UC San Diego",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8543",
                "contactEmail": ""
            }
        },
        {
            "EnOI9pgvnJTo3vaFMSX3mFIJy1i2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10689",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "EnOI9pgvnJTo3vaFMSX3mFIJy1i2",
                "description": "No Lost Generation (NLG) is an organization supported by the U.S. Department of State that focuses on advocating child protection and education for the youth affected by the global refugee crisis. NLG aims to promote awareness through networking opportunities with NGOs, IGOs, and aid groups, fundraising, and volunteering directly with local and virtually contacted refugees. NLG-UCSD hopes to encourage student humanitarian efforts within the San Diego community and abroad through collaboration with university students across the U.S., government agencies, and international organizations.",
                "eventList": [],
                "emailList": [],
                "clubName": "No Lost Generation at UCSD",
                "pictureURL": ""
            }
        },
        {
            "Et42bBvQfQOxINyEwcTTZvAJjQU2": {
                "tags": [
                    "Media"
                ],
                "announcements": [],
                "clubReference": "Et42bBvQfQOxINyEwcTTZvAJjQU2",
                "description": "The goal of Wordsmiths is to provide a place for writers and editors to collaborate in order to fulfill the mutual goals of both parties. Members of Wordsmiths will gain a community of like-minded individuals who will support their goals and provide assistance in honing their craft by editing, beta reading, and offering peer feedback.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Wordsmiths:",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8590",
                "contactEmail": ""
            }
        },
        {
            "ExlGpSVjiJUUJnSTNtQOSmZqnpp1": {
                "tags": [],
                "announcements": [],
                "clubReference": "ExlGpSVjiJUUJnSTNtQOSmZqnpp1",
                "description": "Sigma Pi Alpha is a Chicana/Latina based sorority that focuses on community service, campus involvement, and sisterhood and within these components we stress academics and cultural awareness. We hope to provide women with the means to access higher education and to provide women on campus with community service opportunities and academic, personal, and individual support. Although we are a Chicana/Latina based sorority, our sisterhood reaches out to all different ethnicities.",
                "eventList": [],
                "emailList": [],
                "clubName": "Sigma Pi Alpha National Sorority, Inc.",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10849",
                "contactEmail": ""
            }
        },
        {
            "F1DItu2UVScn39PHsbCAtrWGbeO2": {
                "tags": [],
                "announcements": [],
                "clubReference": "F1DItu2UVScn39PHsbCAtrWGbeO2",
                "description": "A.Bio.Club is a scientific journal club that strives to facilitate a deeper understanding of topics in the biological sciences through regular peer-led discussions of scientific literature. By focusing on holding small discussion seminars, we hope to create a welcoming environment in where each member has the opportunity to interact and participate. As such, we empower our members in developing strong communication and public speaking skills to further personal and professional growth. We seek to create a community of undergraduate students who share similar passions across the biological fields, and provide opportunities such as networking, workshops, and guest lectures to broaden our perspective in science.",
                "eventList": [],
                "emailList": [],
                "clubName": "a.bio.club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10675",
                "contactEmail": ""
            }
        },
        {
            "F7m4G75ttta2eH1v47YvdhUfN6b2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8555",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "F7m4G75ttta2eH1v47YvdhUfN6b2",
                "description": "The primary purpose for ISSA is to serve as a social platform for students who attended international schools in high school as well as any other students interested in differing cultures and global mindsets. We will plan social events for these students to meet one another and get acquainted. This org will also act as a support network for students who might be far away from their home and their family while studying at UCSD.",
                "eventList": [],
                "emailList": [],
                "clubName": "International School Students Association (ISSA)",
                "pictureURL": ""
            }
        },
        {
            "FB59Xn1drNZxjqAtzrUyBY5MEh62": {
                "emailList": [],
                "clubName": "Beat @ UCSD, The",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8524",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "FB59Xn1drNZxjqAtzrUyBY5MEh62",
                "description": "To provide a fun and lively atmosphere to continue our passion for a cappella music at the collegiate level; to immerse members into the a cappella community on-campus and beyond; to strengthen and improve vocal and musical ability; to provide entertaining performances; and to foster close-knit relationships within the group.",
                "eventList": []
            }
        },
        {
            "FIn1cQDU3eVW54Ka6OTCzRLtJmk2": {
                "clubReference": "FIn1cQDU3eVW54Ka6OTCzRLtJmk2",
                "description": "The United Accounting Society at UC San Diego strives to assist students to pursue their interests and goals with respect to the accounting industry. We seek to provide students opportunities to learn more about the accounting industry, form connections with professionals, and meet other students with interests in accounting. We hope to help students achieve a smooth transition into the professional working world by helping them with their professional development.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "United Accounting Society at UC San Diego",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11880",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": []
            }
        },
        {
            "FRXEC8pwkWNaWh8aA0EWHeK1gEv2": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "FRXEC8pwkWNaWh8aA0EWHeK1gEv2",
                "description": "On May 13, 2017, the UC San Diego Colony earned a Charter as the 29th Chapter of Delta Epsilon Mu. The 16 Founders of Alpha Lambda Chapter thus established a foundation at UC San Diego to develop well-rounded leaders in the various health fields, centered around the Pillars of Loyalty, Dedication, Friendship, and Support.",
                "eventList": [],
                "emailList": [],
                "clubName": "Delta Epsilon Mu",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9638",
                "contactEmail": ""
            }
        },
        {
            "FU3zhGn8dUUj1fnb8H3lSf3q4X32": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "FU3zhGn8dUUj1fnb8H3lSf3q4X32",
                "description": "The UCSD Health and Medical Professions Preparation Program (HMP3) provides undergraduates with enriching experiences that will enhance their preparation for admission into professional school in the health professions. Through collaborations with the UCSD School of Medicine, faculty, HealthBeat, community health care providers and others, HMP3 provides members with stimulating experiences designed to expand the mind and increase qualifications for entry into the health professions.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Health and Medical Professions Preparation Program (HMP3)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8390",
                "contactEmail": ""
            }
        },
        {
            "FUG8MAVk9HMGRew9MXOMbau9HYL2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "FUG8MAVk9HMGRew9MXOMbau9HYL2",
                "description": "Triton Counter Strike is an organization encompassing all players an environment to play, socialize, and promote their enthusiasm for all Counter Strike games. We will provide events including, but not limited to: online games, offline meetings, and LANs / tournaments.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Counter Strike",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10817",
                "contactEmail": ""
            }
        },
        {
            "FUSH31nn7DcgAKVhCI0uLha6rGs1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8571",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "FUSH31nn7DcgAKVhCI0uLha6rGs1",
                "description": "Our purpose is to bring professional development to students in the pharmaceutical, biotechnological, and related industries. Thus our members will be offered resume/interview building workshops, networking events with industry professionals, industry tours, discussion panels, and much more.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "International Society for Pharmaceutical Engineers (ISPE)"
            }
        },
        {
            "FVTq4ftrVQYLgaOgZzbekvJEsNA2": {
                "description": "Triton XR is a student organization that connects students with the VR/AR industry through networking, workshops, and projects. Our mission is to foster a multi-disciplinary community dedicated to exploring and creating Virtual, Augmented, and Mixed Reality experiences.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton XR",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10749",
                "contactEmail": "",
                "tags": [
                    "Computer Science"
                ],
                "announcements": [],
                "clubReference": "FVTq4ftrVQYLgaOgZzbekvJEsNA2"
            }
        },
        {
            "FVzT9O8FVXNtxEz6fvTZX83RcYq1": {
                "description": "The purpose of the Rosa Parks Tutoring Program is to give members of the UCSD community the opportunity to offer free tutoring services to students at Rosa Parks Elementary School who are either recommended by teachers to be tutored or who independently seek out tutoring. The organization seeks to improve relations between UCSD and the local community. UCSD associates who are members of this organization are afforded the opportunity to share their reading, writing and math skills with young learners, reap the enjoyment of helping students in a formative stage of their education, and experience the satisfaction of witnessing progress in the studentsâ€™ performances.",
                "eventList": [],
                "emailList": [],
                "clubName": "Rosa Parks Tutoring Program",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12074",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "FVzT9O8FVXNtxEz6fvTZX83RcYq1"
            }
        },
        {
            "FXHhGWvLK5d2OJHqcEopz3Kdlbe2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "FXHhGWvLK5d2OJHqcEopz3Kdlbe2",
                "description": "TEDxUCSD's mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately, their world. We aim to engage, motivate, and celebrate all generations of the UCSD family.",
                "eventList": [],
                "emailList": [],
                "clubName": "TEDx@UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8491",
                "contactEmail": ""
            }
        },
        {
            "Ffqku0VVgwMgVzhJTXnlKBEXuNm2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8489",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "Ffqku0VVgwMgVzhJTXnlKBEXuNm2",
                "description": "The purpose of the club is to foster community between comic: creators, artists, writers, readers, and enthusiasts",
                "eventList": [],
                "emailList": [],
                "clubName": "Comicbook Club at UCSD",
                "pictureURL": ""
            }
        },
        {
            "FiEOlLVQ6jWX1F6z1cUb5jI4BCj1": {
                "emailList": [],
                "clubName": "Triton Jewish Leaders",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12078",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "FiEOlLVQ6jWX1F6z1cUb5jI4BCj1",
                "description": "Triton Jewish Leaders is a leadership incubator at the core of UC San Diegoâ€™s Jewish student community, mobilizing student leaders through Jewish education and individualized mentorship, thereby enabling them to put into practice their vision for Jewish student life and the wider university community. Triton Jewish Leaders reflect the diversity of the Jewish student body at UC San Diego. Identified throughout their college career as students with leadership capacity, TJL pairs each student with a mentor and educator for the entirety of their college career. Through biweekly education and mentorship, the student leader is shown the Jewish wisdom that undergirds their leadership interests, empowering them to build Jewish life on campus on their own terms.",
                "eventList": []
            }
        },
        {
            "FjhK971vztUM02UTLlTONVHAz7W2": {
                "emailList": [],
                "clubName": "Metanoia Social Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10683",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "FjhK971vztUM02UTLlTONVHAz7W2",
                "description": "The purpose of Metanoia is to allow students of all backgrounds to come together and form a community where they are able to engage in intellectual discussion, share ideas, and discover new ones. We strive to become a force of stability and strength in studentsâ€™ lives as they experience transition and explore their spirituality in a fun, sociable setting.",
                "eventList": []
            }
        },
        {
            "FlsXbTQVyDbT8aAYHVl97FrXAGo1": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "FlsXbTQVyDbT8aAYHVl97FrXAGo1",
                "description": "The purpose of Pokemon League at UCSD is: *To bring members of the Pokemon community together and create a social setting for anyone interested in anything related to Pokemon. *To provide a safe space for people within the Pokemon community, regardless of race, background, sexual orientation, gender, and religious association.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pokemon League at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8424",
                "contactEmail": ""
            }
        },
        {
            "GFWuZGg1RkecYG82SrOcr26tWiJ3": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8581",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "GFWuZGg1RkecYG82SrOcr26tWiJ3",
                "description": "To impress upon its members the true significance of fraternal relationships and to create and perpetuate friendship among all persons in the chapter. To develop and strength the character of its members; promote the principles of Virtue, Diligence, and Brotherly Love; and preserve the ideals upon which this fraternity was founded. To instill upon those principles which are the responsibilities of an individual as a member of society.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sigma Phi Epsilon"
            }
        },
        {
            "GMxJjHnJxfhg1keocnV5Xey9R9k1": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "GMxJjHnJxfhg1keocnV5Xey9R9k1",
                "description": "ISPG is a student run organization which aims to give students confidence to start and work on projects outside the classroom. With discussions on leadership, idea sessions , project group workdays, and workshops, members will gain technical skills and knowledge about designing and managing projects effectively.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Innovative Student Project Groups",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8594",
                "contactEmail": ""
            }
        },
        {
            "GsVttOf0MqS9cZmZp2HiLtFGE3p1": {
                "description": "Trend is a non-profit student organization that publishes a fashion magazine. It highlights the fashion of individuals and connects UCSD students to social events in the local San Diego community. The publication offers student opportunities to learn and gain experience in the media industry.",
                "eventList": [],
                "emailList": [],
                "clubName": "Trend",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8376",
                "contactEmail": "",
                "tags": [
                    "Media"
                ],
                "announcements": [],
                "clubReference": "GsVttOf0MqS9cZmZp2HiLtFGE3p1"
            }
        },
        {
            "GtnrJEpDPFf7xtsxmg80tLJGfdS2": {
                "clubReference": "GtnrJEpDPFf7xtsxmg80tLJGfdS2",
                "description": "To obey the Great Commission by discipling and mobilizing Collegians.",
                "eventList": [],
                "emailList": [],
                "clubName": "Korean American Campus Mission",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8511",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "Gy07g3Zd9ORHtr5TasA6xHofgMm2": {
                "emailList": [],
                "clubName": "KOTX",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10767",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "Gy07g3Zd9ORHtr5TasA6xHofgMm2",
                "description": "KOTX is a K-pop dance team that entertains and spreads Korean culture through K-pop. Creating a welcoming environment for all K-pop lovers and is open to all levels of dancers. LET'S GET KOTX!",
                "eventList": []
            }
        },
        {
            "H3INFOX5z1P9hs0h9xB52HsqRV23": {
                "clubReference": "H3INFOX5z1P9hs0h9xB52HsqRV23",
                "description": "To promote, explore, and to showcase classical Indian styles like Bharatanatyam, Kuchipudi, Kathak, and many more other styles in a way that can reach out to all cultures and people.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pushpanjali",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8357",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": []
            }
        },
        {
            "H9Sm4LB4INUghjaQrxM5caEsoO22": {
                "emailList": [],
                "clubName": "The Brain Exercise Initiative",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11961",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "H9Sm4LB4INUghjaQrxM5caEsoO22",
                "description": "The Brain Exercise Initiative is a student run non-profit organization that uses math, reading and writing as a form of cognitive development for the elderly. It is found that simple math exercises and reading aloud for just 30 minutes a day can have a positive impact on memory for those with Alzheimer's. This is currently being done extensively in Japan. It was discovered by a Japanese doctor, Ryuta Kawashima, and consists of math exercises and reading aloud of short stories. Done for just 30 minutes a day, 5 times a week, improvements in Alzheimerâ€™s patients have been observed. It is currently being done in 1,400 care homes with 15,000 Alzheimer's patients all over Japan and has had great success. Many individuals showed improvements in communication and behavior. Some went from being bedridden to sitting in a chair or walking. Some showed improvement in controlling their bowel movement. Additionally, they began to feel happier.",
                "eventList": []
            }
        },
        {
            "HCztYaGK7fY9y25XWsHUpfzzVCu2": {
                "emailList": [],
                "clubName": "Engineers Without Borders at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8556",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "HCztYaGK7fY9y25XWsHUpfzzVCu2",
                "description": "Engineers Without Borders--UCSD Chapter is a non-profit organization dedicated to the betterment of developing communities around the world through the design, implementation, and construction of sustainable projects that fit the need of the community. Our goal is to establish an on-going relationship with these developing communities and to teach them the necessary skills to maintain the facilities and structures that we leave them with.",
                "eventList": []
            }
        },
        {
            "HISYR38OLBRlmZRcqxtnCBeshQB3": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "HISYR38OLBRlmZRcqxtnCBeshQB3",
                "description": "The purpose of the club is to organize students to participate in Call of Cthulhu and Murder Mystery Game. Members will be provided with access to participate in both â€œface to faceâ€ role play games to enhance social interactivity.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Call of Cthulhu and Murder Mystery Game Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8551",
                "contactEmail": ""
            }
        },
        {
            "HP2THcKmFOXIuvL9Ewxgjw6kqwC3": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "HP2THcKmFOXIuvL9Ewxgjw6kqwC3",
                "description": "The object of Alpha Omicron Pi Womenâ€™s Fraternity shall be to encourage a spirit of Fraternity and love among its members; to stand at all times for character, dignity, scholarship, and college loyalty; to strive for and support the best interest of the colleges and universities in which chapters are installed, and in no way to disregard, injure, or sacrifice those interests for the sake of prestige or advancement of the Fraternity or any of its chapters.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Alpha Omicron Pi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9609",
                "contactEmail": ""
            }
        },
        {
            "HTpXSIt8cYXFFOi2FlGeEJbGTbk1": {
                "description": "Tzu Chi Collegiate Association at UCSD is a non-profit student organization, which aims to inspire college-level students in the mindful practice of the Tzu Chi Foundationâ€™s principles of Gratitude, Respect, and Love through service at the community level. Tzu Ching promote the universal value of â€œGreat Loveâ€ through the Tzu Chi Foundationâ€™s missions of Charity, Medicine, Education, Culture, International Relief, Bone Marrow Donation, Environmental Protection and Community Service. Through mindful practice of Founder Dharma Master Cheng Yenâ€™s teachings, Tzu Ching hope to purify people's minds and bring positive influence into the community.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tzu Chi Collegiate Association at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10671",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "HTpXSIt8cYXFFOi2FlGeEJbGTbk1"
            }
        },
        {
            "Hbat1Rf2lgdKrh4KoFpHNhn5COq2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "Hbat1Rf2lgdKrh4KoFpHNhn5COq2",
                "description": "Young Planners' Society (YPS) is a career oriented network for undergraduate USP students and those who are interested in city planning and related careers. Founded in Fall 2018, YPS hosts weekly meetings that alternate between social opportunities and professional/educational development. Each quarter, YPS also incorporates faculty involvement and a community site visit. YPS is one of the founding sponsors and host of UCSD's annual Designathon, a weekend-long challenge that allows students and community members to provide solutions to campus planning and design focus areas. In addition, YPS aims to connect students with both regional planning-oriented companies and local jurisdiction planning agencies to facilitate professional mentorship opportunities for students. The Young Planners Society is represented as a nationally registered planning student organization under the American Planning Association (APA) California chapter, and is locally represented under the San Diego APA chapter.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Young Planners Society",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8432",
                "contactEmail": ""
            }
        },
        {
            "Hcwgs1uyJhVCOLs0oFlB5jeM2Os1": {
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "Hcwgs1uyJhVCOLs0oFlB5jeM2Os1",
                "description": "USAS-San Diego seeks to hold accountable multinational companies that exploit the people who work on university campuses, in our communities, and in the overseas factories where collegiate apparel is produced. Students have unique leverage over the colleges and universities that are often the largest employers, the largest landlords, and large institutional investors in our communities and regions. Students also have leverage over the companies that value universities as clients. Promote campaigns for organizing rights, fair contracts and living wage policies on campuses and in communities all across the US, using student power to support workers struggling to transform minimum wage jobs into living-wage, union jobs, and ensure universities support ethical contractors that set â€“ not undercut â€“ good employment standards in local economies.",
                "eventList": [],
                "emailList": [],
                "clubName": "United Students Against Sweatshops-San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8516",
                "contactEmail": ""
            }
        },
        {
            "HgBlmLpiXlNLC77pPGstk9VVpWm1": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "HgBlmLpiXlNLC77pPGstk9VVpWm1",
                "description": "Project B.E.L.L. (Boundless, Empowered, Lifelong Learners) is a dynamic initiative that strives to develop lifelong learners and active citizens who make a lasting impact in their neighborhoods, communities, and world at large by using education as a creative platform. Our programs seek to empower school-age youth from underserved communities by creating opportunities for them to take part in creating a safe and sustainable learning environment. In the course of effectuating change in underrepresented communities, our program strives to offer college students the freedom to apply what they have learned in a real world setting and the opportunity to be inspired by volunteering. We focus on Bell Middle School located in Chula Vista, hoping to increase the number of students who continue to high school each year.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Project BELL",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10795",
                "contactEmail": ""
            }
        },
        {
            "HlMhTkPHTRXe3qAUMbFFQLYY7Fd2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "HlMhTkPHTRXe3qAUMbFFQLYY7Fd2",
                "description": "The purpose of Rotaract is to follow Rotary International's motto of \"Service Above Self.\" We are devoted to organizing and participating in both local and international service events. In addition, we strive to prepare our members for the future by offering professional development, leadership, and networking opportunities.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Rotaract Club at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8442",
                "contactEmail": ""
            }
        },
        {
            "HtLvcHA8H8TfDE1zemSXoGODAcw1": {
                "tags": [
                    "Sorority"
                ],
                "announcements": [],
                "clubReference": "HtLvcHA8H8TfDE1zemSXoGODAcw1",
                "description": "The purpose of the Multicultural Greek Council at the University of California, San Diego shall be to create and maintain high standards in fraternities and sororities by addressing, coordinating, and developing strategic action plans that unify organizations, promote higher education, provide community services, and enhance leadership. The Multicultural Greek Council will also serve as a liaison and advocate to the Associated Students, the Center for Student Involvement (CSI), and other administration thereby maintaining open communication and improving the campus climate. The Multicultural Greek Council at the University of California, San Diego, is a non-profit, student organization.",
                "eventList": [],
                "emailList": [],
                "clubName": "Multicultural Greek Council",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12023",
                "contactEmail": ""
            }
        },
        {
            "IGpTOBN4WtgKmMRl9teLyrkCy1Q2": {
                "tags": [],
                "announcements": [],
                "clubReference": "IGpTOBN4WtgKmMRl9teLyrkCy1Q2",
                "description": "Phi Iota Alpha Fraternity, Inc. is the Oldest Latino Fraternity in Existence. The history of Phi Iota Alpha Latino Fraternity is the history of all Latino college students and professionals who strive to keep their intellectual heritage alive. Phi Iota Alphaâ€™s vision is La UniÃ³n De La Patria Latino Americana and our mission is the promotion of personal, community, and Pan-American development through the ideals of Pan-American intellectuals and their philosophies. We believe in a commitment to the Latin American culture which involves intellectual development, cultural consciousness, personal growth, personal achievement, and social awareness.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Phi Iota Alpha Fraternity, Inc.",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10824",
                "contactEmail": ""
            }
        },
        {
            "Iba6jqJM8OWPCSJG7Cp1rniFJ0o1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8435",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "Iba6jqJM8OWPCSJG7Cp1rniFJ0o1",
                "description": "Primarily focusing on studying the bible, Zion Bible Study Club offers members the opportunity to distinguish between what the bible teaches and the traditions of men.",
                "eventList": [],
                "emailList": [],
                "clubName": "Zion Bible Study Club",
                "pictureURL": ""
            }
        },
        {
            "IcLT6h1B5IhPr2nInIAzAnVXQHk1": {
                "description": "The goal of this organization is to offer a forum for political and philosophical inquiry. The organization seeks to promote free speech, civil discourse, and open criticism of all ideas. Organization members are offered a platform to share and discuss their ideas with others.",
                "eventList": [],
                "emailList": [],
                "clubName": "Civil Discourse Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8374",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "IcLT6h1B5IhPr2nInIAzAnVXQHk1"
            }
        },
        {
            "Iqy7eA1xUcMnBx36QPjUOQ8B4DW2": {
                "description": "To create a technology-driven business incubator and serve students related to computer fields with opportunities in professional working environment, strengthen technical skills and seek business growth.",
                "eventList": [],
                "emailList": [],
                "clubName": "Chinese Computer Community",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8602",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "Iqy7eA1xUcMnBx36QPjUOQ8B4DW2"
            }
        },
        {
            "IukA5vlmCUP3SpZSYXafXWDuNKf2": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "IukA5vlmCUP3SpZSYXafXWDuNKf2",
                "description": "The purpose of Sigma Kappa Sorority is to unite its members in a bond of sincere friendship for the development of character and the promotion of social, philanthropic, and intellectual culture.",
                "eventList": [],
                "emailList": [],
                "clubName": "Sigma Kappa Sorority",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9601",
                "contactEmail": ""
            }
        },
        {
            "J4gMIS0k3ZWPv1FieLxB0Nd5UlJ3": {
                "emailList": [],
                "clubName": "Chinese American Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8593",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "J4gMIS0k3ZWPv1FieLxB0Nd5UlJ3",
                "description": "The Chinese American Student Association (CASA) is a cultural, social, and community service oriented organization, striving to promote the Chinese American culture throughout UCSD and its surrounding community. Founded in 1972 at the University of California - San Diego, CASA is an organization that serves to unite all those with a love of the Chinese culture under a common banner in order to forge life-long friendships and to explore the 5,000-year-old Chinese culture.",
                "eventList": []
            }
        },
        {
            "J5M5sBniZjSQfKZAIpiZTUHdbbh2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12060",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "J5M5sBniZjSQfKZAIpiZTUHdbbh2",
                "description": "To contribute to the advancement of society through the personal growth of our members and service to others.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tau Kappa Epsilon",
                "pictureURL": ""
            }
        },
        {
            "J7aKLABi5Ue6U5f9UpVRRwwEqVM2": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "J7aKLABi5Ue6U5f9UpVRRwwEqVM2",
                "description": "A diverse and thriving community of believers who strive to encourage one another daily and help each other follow Jesus, while also seeking to make Him known to others around campus. Connected to a Bible-based local and international church.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Alpha Omega",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11906",
                "contactEmail": ""
            }
        },
        {
            "J9slsDPeVjdSJkR4mOvVezglyAG3": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Student Foundation",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8563",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "J9slsDPeVjdSJkR4mOvVezglyAG3",
                "description": "To promote, facilitate and perpetuate the philanthropic spirit among the UCSD student community.",
                "eventList": []
            }
        },
        {
            "JDdYHKasSafaLYAaaKwaNWqRBhf2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Women in ECE (WeCe)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12033",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "JDdYHKasSafaLYAaaKwaNWqRBhf2",
                "description": "To build a community among graduate women in Electrical and Computer Engineering to enhance their career opportunities.",
                "eventList": []
            }
        },
        {
            "JKhfaAPFm0UcGtYoDncY7obNlA23": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Anthropology Club at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9629",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "JKhfaAPFm0UcGtYoDncY7obNlA23",
                "description": "The Anthropology Club strives to maximize student involvement in anthropology, link students with faculty, provide a sense of support and community, raise awareness of anthropological issues, connect undergrads and grad students with career boosting opportunities, network within and beyond, and foster an inclusive environment conducive to personal and professional growth within the subfields of archaeology, sociocultural anthropology, and biological anthropology.",
                "eventList": []
            }
        },
        {
            "JOwhgXCiWcTcZwXK55gyNq79Qpm1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10846",
                "contactEmail": "",
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "JOwhgXCiWcTcZwXK55gyNq79Qpm1",
                "description": "Alpha Phi is a sisterhood of outstanding women supporting one another in lifelong achievement.",
                "eventList": [],
                "emailList": [],
                "clubName": "Alpha Phi",
                "pictureURL": ""
            }
        },
        {
            "Ja5u1jPNLPglT4Al1KzT2BTNSxk2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "Ja5u1jPNLPglT4Al1KzT2BTNSxk2",
                "description": "The purpose of Music & Memory at UCSD is to promote and carry out the mission of the parent Music & Memory non-profit organization, which is to bring personalized music into the lives of people with a wide range of cognitive and physical challenges through digital music technology and live performances, vastly improving quality of life. Further, we would like to help advocate for Music & Memoryâ€™s goal of making this form of personalized therapeutic music a standard of care throughout the healthcare industry.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Music and Memory at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8455",
                "contactEmail": ""
            }
        },
        {
            "JfXdsnW3rxe00MvRPMSaDMcghrF2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8588",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "JfXdsnW3rxe00MvRPMSaDMcghrF2",
                "description": "Kojobs strives to act as an intermediary between students and companies, providing social networking events for students and professionals to assist students to become better prepared for their post-graduation lives. Kojobs also provides service activities within the community, and other activities held in relation to the organization will also be directed towards this purpose.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Kojobs at UCSD"
            }
        },
        {
            "JgoG8rSMeZaCaCtORNjzqcrbdWy2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "JgoG8rSMeZaCaCtORNjzqcrbdWy2",
                "description": "To cultivate an atmosphere of collaboration through the fundamentals of baking.",
                "eventList": [],
                "emailList": [],
                "clubName": "Master Baking at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10668",
                "contactEmail": ""
            }
        },
        {
            "JlN7I8GJ5Og5o8hk3AappxwwQRn2": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "JlN7I8GJ5Og5o8hk3AappxwwQRn2",
                "description": "Fair Playâ€™s purpose is to provide more performance opportunities for the students of UCSD by producing theatrical productions every quarter. Additionally, we seek to foster a fun, fair, and professional creative environment. Fair Play also hopes to emulate a professional theatre company at the undergraduate level. Furthermore, we aim to create an inclusive community of students, from all backgrounds, that come together to create theatre in unexpected ways.",
                "eventList": [],
                "emailList": [],
                "clubName": "Fair Play Theatre Company",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8353",
                "contactEmail": ""
            }
        },
        {
            "K9YZwgzanjhOeFZqnHNqBSPAGsl2": {
                "clubReference": "K9YZwgzanjhOeFZqnHNqBSPAGsl2",
                "description": "The purpose of this cultural student association is to create a community of those interested in learning about and celebrating Pakistani culture, to further the knowledge of interested person of the history of Pakistan, in the process learn about issues pertinent to the Pakistani community back home and American Pakistanis, and to serve all UCSD and other University Students, faculty and staff in achieving the above stated goals.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pakistani Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11877",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "K9wqDNEr7SgEUMfL1NR18yMQYPf1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10783",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "K9wqDNEr7SgEUMfL1NR18yMQYPf1",
                "description": "As a car club at the University of California, San Diego, Imports@UCSD aims to build a community for car enthusiasts to gather and share their collective knowledge about automobiles and motor sports. Our goals include teaching members about various aspects of automotive knowledge while constructing a network to develop strong connections in the automotive industry. We also strive to create a safe environment where we can test and improve the performance of our cars as well as our driving skills. Highly discouraging street racing, Imports@UCSD gives members the opportunity to go to the race track to satisfy their high performance driving needs. Using all of these resources and connections, members of Imports@UCSD can become strong leaders who are extremely knowledgeable in the automotive field and enthusiastic about everything they do. Even the slightest passion for cars will not be overlooked and is all that one must posses to become a proud and capable member of Imports@UCSD.",
                "eventList": [],
                "emailList": [],
                "clubName": "Imports@UCSD",
                "pictureURL": ""
            }
        },
        {
            "KOOdwih8olY1wKz86FfLrSyHanf2": {
                "emailList": [],
                "clubName": "Association of Student Pharmacists at UCSD Skaggs School of Pharmacy",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10733",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "KOOdwih8olY1wKz86FfLrSyHanf2",
                "description": "The purpose of this association shall be the development, promotion, and enhancement of the knowledge of pharmacy in the community, all in harmony with the educational interests of the University of California, San Diego Skaggs School of Pharmacy.",
                "eventList": []
            }
        },
        {
            "Kt5IXQ5e9QhFzI4GB9JjoWoQDE53": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9603",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "Kt5IXQ5e9QhFzI4GB9JjoWoQDE53",
                "description": "The purpose of Tritons for Sally Ride Science is to promote K-12 STEM education and generally broaden STEM participation. Through mentoring and exciting K-12 students, we hope to promote science literacy and awareness.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tritons for Sally Ride Science",
                "pictureURL": ""
            }
        },
        {
            "KxI5fXiYzAQ6pcKhFotigxUkPyj1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11994",
                "contactEmail": "",
                "tags": [
                    "Sorority"
                ],
                "announcements": [],
                "clubReference": "KxI5fXiYzAQ6pcKhFotigxUkPyj1",
                "description": "To promote Asian American Awareness through unity, friendship, leadership, and service. Our organization was originally created by ten Asian American women pursuing the interest of teaching. Though, our sorority, no longer centers around the interest of teaching, it still maintains its commitment to the Asian American community. All of our chapters have become extremely involved in their respective communities, volunteering our time at community agencies and raising money to donate to favorable charities.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sigma Omicron Pi"
            }
        },
        {
            "L0Zkova1onR8EMkgwryFQPehK9E2": {
                "clubReference": "L0Zkova1onR8EMkgwryFQPehK9E2",
                "description": "The Bhagat Puran Singh Health Initiative aims to eliminate health and social misconceptions within underserved and underprivileged populations by providing access to health education and free health clinics for the betterment of the body.",
                "eventList": [],
                "emailList": [],
                "clubName": "Bhagat Puran Singh Health Initiative (BPSHI)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10770",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": []
            }
        },
        {
            "L8bGMDx036bxpLR8PUzJ8rmsZzh2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "L8bGMDx036bxpLR8PUzJ8rmsZzh2",
                "description": "To build technical skills, professional skills, and social connections by applying engineering outside the classroom.",
                "eventList": [],
                "emailList": [],
                "clubName": "Institute of Electrical and Electronics Engineers (IEEE)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8445",
                "contactEmail": ""
            }
        },
        {
            "LGjEvUpoRTSwjkyZPQwZDnxP7Cl2": {
                "description": "With nearly 20 percent of the UCSD undergraduate population declared as biology majors, the Biological Sciences Student Association (BSSA) plays a crucial role in expanding opportunities and enhancing the overall educational and social experiences of these students during their time here. In addition, BSSA assists in preparing students for a wide range of career opportunities.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Biological Sciences Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8515",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "LGjEvUpoRTSwjkyZPQwZDnxP7Cl2"
            }
        },
        {
            "LkntqwxUt3T60UHd33P5hPRQZJz2": {
                "clubReference": "LkntqwxUt3T60UHd33P5hPRQZJz2",
                "description": "Fun Talk & Learn Chinese Student Association is a student body helping UCSD students learn useful skills, form appropriate worldviews in order to live a meaningful life and be contributive to the society inside and outside the campus. Through workshops and seminars, students will be equipped with capabilities to analyze, to conclude, to present and to lead. Through connecting with local Chinese/Taiwanese people, students can obtain helps in dorm and off-campus living while attending UCSD. Students will learn to overcome the challenges from the cultural and language differences in order that they can focus on the academic works without much hindrance from daily life arrangement. Group activities will be organized primarily by the students in order for them to learn the skills for planning, execution and leadership. Besides successfully academic learning, students can gain the spiritual understanding and find good mentors who can help them using their native languages. Students will also be given training on career development such as writing resumes, conducting successful on-site job interviews, and learning to work with others. Students are encourage to evaluate their world views in order to live with impact! The goals are that the participants will be able to obtain : 1. Communication and presentation skills both verbally and in writing 2. Innovative view on spiritual and religious issues 3. Understanding of the global affairs based on facts. 4. Connections with local Chinese/Taiwanese people and students 5. Leadership through organizing activities 6. Career development skills 7. Enthusiasm for life that leads to contributions to the community",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Fun Talk and Learn Chinese Student Association (TLCSA)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8347",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "LqaYj6kyo3f4VYoQgX0yv1BIWmJ2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8598",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "LqaYj6kyo3f4VYoQgX0yv1BIWmJ2",
                "description": "The purpose of this club is to raise money and buy underwear for elderly patients at Geriatric units in hospital throughout San Diego. By doing so we are helping to restore dignity and decency to these people while at the same time educating the student body about issues of geriatrics, senior care, and palliative care.",
                "eventList": [],
                "emailList": [],
                "clubName": "Undies for Oldies: Geriatrics Education and Medicine",
                "pictureURL": ""
            }
        },
        {
            "MUW1kN2G1aPXDSWD6SJiHR61czD3": {
                "tags": [
                    "Affirmitive Action"
                ],
                "announcements": [],
                "clubReference": "MUW1kN2G1aPXDSWD6SJiHR61czD3",
                "description": "The Muslim Student Association at UCSD strives to facilitate character building, humanitarian work, and social justice through educational and social avenues founded on Islamic standards of personal conduct and community. The organization aims to maintain an inclusive environment, to unite with allies, and to retain members in order to nurture a diverse generation of Muslims who are cognizant and pragmatic members of society.",
                "eventList": [],
                "emailList": [],
                "clubName": "Muslim Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10658",
                "contactEmail": ""
            }
        },
        {
            "MYuHazDnfJOnnbsvEU0KuwlmEJ03": {
                "emailList": [],
                "clubName": "Indian Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8371",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "MYuHazDnfJOnnbsvEU0KuwlmEJ03",
                "description": "We are an undergraduate organization that provides useful services for Indians at UCSD and hosts Indian cultural events for the San Diego community. Our goal is to make a culturally active and aware community and an easier transition to UCSD for undergraduate students.",
                "eventList": []
            }
        },
        {
            "MddTsNp2afcDfqjLqs88cP39uP92": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "MddTsNp2afcDfqjLqs88cP39uP92",
                "description": "The object and purpose of Alpha Kappa Psi Fraternity, Inc. (the \"Fraternity\") shall be to further the individual welfare of its members; to foster scientific research in the fields of commerce, accounts and finance; to educate the public to appreciate and demand higher ideals therein; and to promote and advance in institutions of college rank courses leading to degrees in business administration.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Alpha Kappa Psi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8358",
                "contactEmail": ""
            }
        },
        {
            "MjSZH9M26POleRVdUf4PAeD8Yhq1": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "MjSZH9M26POleRVdUf4PAeD8Yhq1",
                "description": "There are three goals for this club. The first is to clean up the beaches of San Diego and to help with conservation methods to help remedy the environmental crisis of the oceans. The second is to educate our members about current research and newsworthy events about the ocean, so that in turn, they can help educate the community. The last goal is to create a fun environment where like-minded people can form lasting friendships.",
                "eventList": [],
                "emailList": [],
                "clubName": "Ocean Lovers Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8401",
                "contactEmail": ""
            }
        },
        {
            "MyPN2nFdIjWMrYsCJU5PreyCVOI2": {
                "description": "IFU (International Family Union) is a student organization currently made up of undergraduates in order to provide better campus safety and to share the latest information with parents.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "International Family Union",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11998",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "MyPN2nFdIjWMrYsCJU5PreyCVOI2"
            }
        },
        {
            "N00Lsrfe5zNv4ofPJOMuD61LTMy2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10735",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "N00Lsrfe5zNv4ofPJOMuD61LTMy2",
                "description": "To serve UCSD chemistry majors by providing a friendly environment for the intellectual exploration of relevant industrial chemistry and chemical research topics. We aim to provide students interested in science with networking, outreach and volunteering opportunities that will help them define their goals, choose their career path and pursue their intended career.",
                "eventList": [],
                "emailList": [],
                "clubName": "American Chemical Society Student Affiliates (ACSSA)",
                "pictureURL": ""
            }
        },
        {
            "NCKXcWx6IOhgkdqJ9xp6FJqxrxD3": {
                "description": "To present Japanese animation subtitled in English to Members of the club. We intend to engender a social atmosphere in which members can enjoy anime and learn about Japanese culture.",
                "eventList": [],
                "emailList": [],
                "clubName": "Cal-Animage Beta",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8393",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "NCKXcWx6IOhgkdqJ9xp6FJqxrxD3"
            }
        },
        {
            "NJPQZ4BeNNRrQSk7Drjq882Tavw1": {
                "description": "The purpose of the College Democrats, a non-profit organization, is to educate students about the philosophy of the Democratic Party, promote campus discussion of issues of concern to students and the nation at large, foster involvement in political movements, and affect political change on a local, state, and national level",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "College Democrats at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8369",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "NJPQZ4BeNNRrQSk7Drjq882Tavw1"
            }
        },
        {
            "NKfzI7x5U1QM7jUkJHnU3cmXHvh1": {
                "clubReference": "NKfzI7x5U1QM7jUkJHnU3cmXHvh1",
                "description": "Open Dyalog is a platform for students to share perspectives and experiences in an open discussion. Through a comprehensive training program, students can become facilitators to lead these conversations. Organizations across campus can request these dialogues in their community to promote deeper understanding and empathy.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Open Dyalog",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10807",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": []
            }
        },
        {
            "NMFNhFSOlQZLl7xn099vYtVdKjI3": {
                "tags": [],
                "announcements": [],
                "clubReference": "NMFNhFSOlQZLl7xn099vYtVdKjI3",
                "description": "The organization gathers like-minded individuals who share diverse interests in international studies and international relations. We aim to not only be a resource hub, but also build community and meaningful connections among our peers. ISSA intends to provide a platform of rich experiences and opportunities in international studies, including: -Networking, social, and pre-professional events, including collaboration with UCSD's undergraduate and graduate departments -ISP Peer Mentorship program supported by the ISP Advising Office -Research opportunities with UCSD faculty and graduate students -Resources for studying, working, and interning abroad -Public events, conferences, and workshops for research, social awareness, international development -Service projects and fundraising for international causes -Student and alumni panels",
                "eventList": [],
                "emailList": [],
                "clubName": "International Studies Student Association (ISSA) at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8380",
                "contactEmail": ""
            }
        },
        {
            "NUM6tZKz8kUwNzLa3v595WHn89i1": {
                "tags": [
                    "Fraternity"
                ],
                "announcements": [],
                "clubReference": "NUM6tZKz8kUwNzLa3v595WHn89i1",
                "description": "The mission of Gamma Zeta Alpha Fraternity, Inc., a not-for-profit corporation built on the foundation of respect and brotherhood, is to establish and promote a nurturing environment at the university level and beyond, through academic excellence, community service, and the celebration of the diverse Latinx Culture.",
                "eventList": [],
                "emailList": [],
                "clubName": "Gamma Zeta Alpha Fraternity Inc",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11951",
                "contactEmail": ""
            }
        },
        {
            "NazG6b6H2ZbwaWzGpJjhDabR2op1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Student Housing Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10828",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "NazG6b6H2ZbwaWzGpJjhDabR2op1",
                "description": "To advocate for affordable housing on behalf of all UCSD student housing residents; To keep students informed through housing data analysis and facilitating access to housing information; To help students connect with classmates and neighbors; To hold student housing events such as town halls; To allow students to make their voice heard about campus housing.",
                "eventList": []
            }
        },
        {
            "NdWLEbMqV1ZOZaiPlzJmVk7kBi62": {
                "emailList": [],
                "clubName": "Kappa Zeta Phi",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8421",
                "contactEmail": "",
                "tags": [
                    "Sorority"
                ],
                "announcements": [],
                "clubReference": "NdWLEbMqV1ZOZaiPlzJmVk7kBi62",
                "description": "To provide an opportunity for long lasting friendship and sisterhood to develop the individual in the areas of wholesome attitudes and ideals.",
                "eventList": []
            }
        },
        {
            "O0GVzZrwUceAGO8ScoK7TppP7UZ2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Counseling and Psychological Services Peer Education Program",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11857",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "O0GVzZrwUceAGO8ScoK7TppP7UZ2",
                "description": "The CAPS Wellness Peer Education Program is a non-profit organization that seeks to provide educational and outreach opportunities to members of the UCSD community and beyond. We recognize the value of peer support in helping students address personal concerns. Through peer education, we hope to help students recognize their resources as well as increase prevention of mental illness and decrease the stigmas associated with utilizing the Counseling and Psychological Services.",
                "eventList": []
            }
        },
        {
            "O35zmlin5CYLwd22F8lZaUtSiR93": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "O35zmlin5CYLwd22F8lZaUtSiR93",
                "description": "KSEA-YG stands for Korean American Scientists and Engineers Association - Young Generation. Our parent organization was first established in 1971 to promote international cooperation between scientists and engineers in Korea and the US by providing career development and community service opportunities in the areas of science, technology, and entrepreneurship. More information about our parent organization can be found on the web: www.ksea.org. As a student chapter of KSEA, our organization foster communication among and provide assistance to Korean-American students in STEM field.",
                "eventList": [],
                "emailList": [],
                "clubName": "Korean American Scientists and Engineers Association - Young Generation",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8362",
                "contactEmail": ""
            }
        },
        {
            "O3MS9wNfiDWRu0vntYhjrVdKhix1": {
                "clubReference": "O3MS9wNfiDWRu0vntYhjrVdKhix1",
                "description": "Chi Omega is a Panhellenic sorority forever committed to its founding purposes of friendship, personal integrity, service to others, academic excellence and intellectual pursuits, community and campus involvement, and personal and career development.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chi Omega",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8592",
                "contactEmail": "",
                "tags": [
                    "Panhellenic"
                ],
                "announcements": []
            }
        },
        {
            "O5TeQ4bNS2YIIloprPe68CdO27U2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "O5TeQ4bNS2YIIloprPe68CdO27U2",
                "description": "The purpose of the Amateur Radio Club at UCSD, licensed through the Federal Communications Commission (F.C.C.) as KK6UC and officially affiliated with the American Radio Relay League (ARRL), is to provide UCSD students and staff with tools and opportunities to explore and enjoy the hobby of amateur radio. KK6UC is a member-focused club that can host licensing classes, teach different modes of radio, participate in contests, collaborate with other amateur radio organizations, and perform general experimental wireless communications. The club was founded on campus as WA6DOT (later KI6FTQ) in fall 1965 by Michael C. Ransom WB6KMH (now AI6II) and run for many years by Brian Kantor WB6CYT. The club recently completed the 25-foot tall Gap Titan HF antenna atop Atkinson Hall for its new HF station, greatly adding to its on-campus RF capabilities.",
                "eventList": [],
                "emailList": [],
                "clubName": "Amateur Radio Club at UCSD (KK6UC)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8595",
                "contactEmail": ""
            }
        },
        {
            "ObRF0P8emjbm4UT6WPlhmOIGkln1": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "ObRF0P8emjbm4UT6WPlhmOIGkln1",
                "description": "Pre-Health Professionals Club strives to gather Health Professionals and support them by creating a family environment for students to learn and develop as individuals and professionals.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pre-Health Professionals Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10776",
                "contactEmail": ""
            }
        },
        {
            "OeNc5IflVGZDiHZIXpj2D35awrW2": {
                "clubReference": "OeNc5IflVGZDiHZIXpj2D35awrW2",
                "description": "Developer Student Clubs (DSC) is a program run by Google Developers. UCSD students from all undergraduate or graduate programs with an interest in growing as a developer or within another related field (e.g. Design) are welcome to join the UCSD chapter. By joining DSC UCSD, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
                "eventList": [],
                "emailList": [],
                "clubName": "Developer Student Club at UC San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10805",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "Oj1HKnafdyaYlRDgaF6lU8OIUaR2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Homeless Charter, The",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8368",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "Oj1HKnafdyaYlRDgaF6lU8OIUaR2",
                "description": "The purpose of The Homeless Charter is to raise awareness for the homeless community in San Diego through engaging, hands on activities. The organization seeks to promote service to the greater community of San Diego, unity within the student body of UCSD, while breaking down stigmas of homelessness and providing support for homeless individuals. The Homeless Charter is a non-profit student organization.",
                "eventList": []
            }
        },
        {
            "OpfLsrlNfsPjxV307zC1MbiwyII3": {
                "emailList": [],
                "clubName": "Campus Crusade for Christ",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10669",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "OpfLsrlNfsPjxV307zC1MbiwyII3",
                "description": "Win, Build, and Send: turning lost students into Christ-centered laborers.",
                "eventList": []
            }
        },
        {
            "P2YW1ngU1leMgmXrd0sXeQRH4dd2": {
                "tags": [],
                "announcements": [],
                "clubReference": "P2YW1ngU1leMgmXrd0sXeQRH4dd2",
                "description": "This organization is devoted to students who want to explore underwater robotics and research applications of Autonomous Underwater Vehicles, hereinafter referred to as AUVs. Our main method for exploring this field is by compete in Robonation's Robosub competition, hosted in San Diego's TRANSDEC pool. Students will have the opportunity to not only learn about Autonomous Underwater Vehicle (AUV) construction and testing, but will be able to meet technology recruiters at the competition, practice networking skills with other teams and companies, and learn how to write a journal paper.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Robosub",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8458",
                "contactEmail": ""
            }
        },
        {
            "P346wwrNOSNoMROOyTcU6nq6h3j2": {
                "emailList": [],
                "clubName": "Triton-Ai",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11915",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "P346wwrNOSNoMROOyTcU6nq6h3j2",
                "description": "Building and racing autonomous RC cars.",
                "eventList": []
            }
        },
        {
            "P4l52w9LQGT7htWpyauYHArZ83w2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Society of Asian Scientists and Engineers at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9620",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "P4l52w9LQGT7htWpyauYHArZ83w2",
                "description": "The Chapter is committed to preparing members for success in the global business world, celebrating diversity, and contributing back to the community. The objectives and goals of the Chapter shall be to: 1. Support and develop programs that provide for the advancement of Asian heritage scientists and engineers. This goal shall be implemented by: -Career Workshops -Seminars and Symposia that focus on bettering the employability of members by bolstering the soft skills of members, working on their resumes, and teaching interview skills. 2. Develop and support programs that aid Asian heritage scientists and engineers who are actively seeking careers. -Interactions with potential employers -Tutoring/Curriculum assistance -Mentoring programs 3. Provide a forum for professional development and for the connection with entrepreneurial opportunities. 4. Inform the public of contributions and advancement made by Asian heritage scientists and engineers in newsletters and awards ceremonies.",
                "eventList": []
            }
        },
        {
            "PFqTDtHQ3FbdNOYjl85md14puuA2": {
                "description": "The Design/Build/Fly (DBF) student team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission objective. The contest provides a real-world aircraft design experience for students by giving them the opportunity to validate their analytical studies. The competition is hosted by Textron Aviation, Raytheon Missile Systems, and the American Institute of Aeronautics and Astronautics (AIAA) national engineering society.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Design/Build/Fly",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8522",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "PFqTDtHQ3FbdNOYjl85md14puuA2"
            }
        },
        {
            "PYO47nEoCWcuPIzMMmq6tDFxgWL2": {
                "emailList": [],
                "clubName": "Urban Changemakers",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8449",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "PYO47nEoCWcuPIzMMmq6tDFxgWL2",
                "description": "The purpose of the Urban Changemakers Club is to: -Foster a greater sense of community through healthy placemaking both on and off-campus -Increase networking opportunities and offer practical exposure to professional careers for Urban Studies and Planning majors.",
                "eventList": []
            }
        },
        {
            "Pw7I9eQbWwdlevy4CdAnasdUBQQ2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "Pw7I9eQbWwdlevy4CdAnasdUBQQ2",
                "description": "The purpose of this organization is to celebrate and bring Latin dance and music to UCSD students and the community through productions, performances, workshops, and events on campus and beyond, as well as weekly training sessions with a dance professional, and to promote diversity, equity, and inclusion by creating a space for all to celebrate Latin dance, music, and culture.",
                "eventList": [],
                "emailList": [],
                "clubName": "Latin Dance Project",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12075",
                "contactEmail": ""
            }
        },
        {
            "Q2TccTKrHVSW8Lz9g7etUutJ4po2": {
                "emailList": [],
                "clubName": "Acts 2 Fellowship",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8443",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "Q2TccTKrHVSW8Lz9g7etUutJ4po2",
                "description": "We are a fellowship that strives to build a Christ centered community on campus. We meet weekly for Bible studies & prayer, and worship on campus on Sundays. Our vision is to share the gospel and help students to spiritually thrive during college.",
                "eventList": []
            }
        },
        {
            "QLoNUpDwhKW6gCtnYlMZnaGnn573": {
                "emailList": [],
                "clubName": "Da Real Punjabiz",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12102",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "QLoNUpDwhKW6gCtnYlMZnaGnn573",
                "description": "In the 20 years since DRP was formed, the team has performed at numerous competitions including Boston Bhangra, Bruin Bhangra, Dhol Di Awaz, VIBC, So-Cal Bhangra, and Best of the Best. Placing at many competitions, DRP has raised awareness of Punjabi culture not only in Southern California, but all over the United States. Through hard work, dedication, and determination, DRP hopes to continue to spread its love and respect for bhangra for years to come.",
                "eventList": []
            }
        },
        {
            "RDkZZnb74ve2NKtV5BUC0VSOPoE3": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "RDkZZnb74ve2NKtV5BUC0VSOPoE3",
                "description": "Hopkins Sax Jam is an all-saxophone performance ensemble. We strive to promote the art of saxophone through public performance at UCSD and in the San Diego community and to support other saxophonists in further improving their musicianship and technique by sharing saxophone knowledge and skills with each other. Members of this organization benefit by continuing to improve their saxophone playing and developing strong relationships with fellow saxophonists.",
                "eventList": [],
                "emailList": [],
                "clubName": "Hopkins Sax Jam",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8367",
                "contactEmail": ""
            }
        },
        {
            "RMp4klQcnDcc9jYzYPpr31WwnM42": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "RMp4klQcnDcc9jYzYPpr31WwnM42",
                "description": "To organize and support Dota2 at UCSD players in order to form a team to join Dota2 competitions.",
                "eventList": [],
                "emailList": [],
                "clubName": "Dota2 League at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8553",
                "contactEmail": ""
            }
        },
        {
            "RUEPVhsyIhgNAk1nfOFTTxMW4XU2": {
                "tags": [],
                "announcements": [],
                "clubReference": "RUEPVhsyIhgNAk1nfOFTTxMW4XU2",
                "description": "Chem-E-Car Project, centered within the NanoEngineering department, aims to provide chemical engineering students with the opportunity to participate in a team-oriented hands-on design and construction of a small chemical powered model car. In addition, it helps increase awareness of the chemical engineering discipline among the general public, industry leaders, educators and other students.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chem-E-Car Project",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8413",
                "contactEmail": ""
            }
        },
        {
            "RURVm8M0jqWkEfPwmFzgW7b0dBi2": {
                "tags": [],
                "announcements": [],
                "clubReference": "RURVm8M0jqWkEfPwmFzgW7b0dBi2",
                "description": "The Data Science Student Society at UCSD is an interdisciplinary academic organization designed to immerse the community in the diverse and growing facets of Data Science: Machine Learning, Computational Statistics, Data Mining, Visualization, Predictive Analytics, and any new emerging relevant fields of study. With practical hands-on data projects, a professional portfolio-building approach, and fun outreach activities, the Data Science Student Society at UCSD strives to enrich the academic life of the student community by strengthening them for success in their current and future pursuits of Data Science related fields.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Data Science Student Society at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8394",
                "contactEmail": ""
            }
        },
        {
            "RWfmdsda8lPAzgbHpTk3wmXNE153": {
                "description": "In response to God's love for all people, we are here to establish student-led international witnessing communities, which welcome international students and scholars.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "International Christian Fellowship-West",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9612",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "RWfmdsda8lPAzgbHpTk3wmXNE153"
            }
        },
        {
            "RZR3tbD5UtXJAcPywJKxekTBd4L2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8477",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "RZR3tbD5UtXJAcPywJKxekTBd4L2",
                "description": "To promote the cultural aspect of taiko to any entities interested in the art form. To promote awareness of taiko on the UCSD campus and in the San Diego community through performances and other events. To help promote awareness of taiko at a national level through cooperation with other organizations such as other taiko groups.",
                "eventList": [],
                "emailList": [],
                "clubName": "Asayake Taiko",
                "pictureURL": ""
            }
        },
        {
            "RrRwssKr7FV9S6gwlw54Mcx10Bw2": {
                "clubReference": "RrRwssKr7FV9S6gwlw54Mcx10Bw2",
                "description": "Triton Splatoon is a student organization with the purpose of bringing together players of the video game Splatoon 2 for the Nintendo Switch. The goal is to create a friendly community of students that share the same passion for the game while also promoting the competitive shooter scene. The focus will be primarily on socializing with other players on campus and bringing the best gaming experience possible to students.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Splatoon",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10739",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": []
            }
        },
        {
            "RtIwu0sk9HZypg3iMDOLGDmoSHI2": {
                "clubReference": "RtIwu0sk9HZypg3iMDOLGDmoSHI2",
                "description": "The purpose of this organization is to present Christian doctrines to the students of UCSD through weekly, midweek Bible Studies and fellowship times.",
                "eventList": [],
                "emailList": [],
                "clubName": "Klesis",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8568",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "Rv4nhASsiXdMhP9KCdrneQoj4se2": {
                "description": "The purpose of this organization is to promote awareness about environmental conservation and to help preserve the natural environment. Organization efforts will focus on both aquatic and terrestrial ecosystems, with an emphasis on the local San Diego environment. Members will participate in volunteer and collaborative efforts to promote environmental stewardship.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Students for Conservation",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8507",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "Rv4nhASsiXdMhP9KCdrneQoj4se2"
            }
        },
        {
            "RxsmOc2xMpd37pgXR1f76CuDKKr1": {
                "description": "Alpha Epsilon Pi's role is to encourage Jewish students to remain dedicated to Jewish ideals, values, and ethics and to develop members that effectively help to make UCSD a more inclusive and welcoming campus for all students, regardless of faith or cultural background. We rely on a variety of events and programs to help grow our community and to benefit UCSD and the San Diego community",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Alpha Epsilon Pi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10656",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "RxsmOc2xMpd37pgXR1f76CuDKKr1"
            }
        },
        {
            "RzO4d7xnw3ShkoLKPqTY954D4xG3": {
                "emailList": [],
                "clubName": "Persians Pursuing Pre-Health Professions",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8464",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "RzO4d7xnw3ShkoLKPqTY954D4xG3",
                "description": "Persians Pursuing Pre-Health Professions at UCSD (or Pre-Health Persians) wants to unify the Iranian community on campus through students who are passionately in pursuit of a deep sense of shared community, cultural identity, and also a future in health professions as we use our time together in our undergraduate years to prepare for our journeys to dental, medical, osteopathic, optometry, and pharmacy schools. We hope to form a symposium of like-minded students where we can be able to critically educate and mentor one another about the health issues pertaining, but not limited, to Iranians and in the Middle East, and to come together to fill each other with insight and support as we begin the path of seeking a career in health care.",
                "eventList": []
            }
        },
        {
            "RzmvOIFOGdcXNnWZiUQ5i6v0OG13": {
                "emailList": [],
                "clubName": "Empower: Educate and Inspire",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8408",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "RzmvOIFOGdcXNnWZiUQ5i6v0OG13",
                "description": "The purpose of this organization is to raise awareness about global issues through different projects and working the community to make an impact in the real world.",
                "eventList": []
            }
        },
        {
            "S2QxLEOoozd9wb4KGcJXWBxhd252": {
                "emailList": [],
                "clubName": "LIFE Fellowship",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8359",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "S2QxLEOoozd9wb4KGcJXWBxhd252",
                "description": "LIFE Fellowship is a Christian group (associated with Chinese Evangelical Church - CEC) that fosters a unified community of college students who love Jesus Christ. Through small groups, prayer, worship, and service activities, we seek to understand God's love for us, how to live a life pleasing to God, and spread the gospel to other people.",
                "eventList": []
            }
        },
        {
            "SAFPX11bBHeWhMO2bJDGEEy9gtr1": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "SAFPX11bBHeWhMO2bJDGEEy9gtr1",
                "description": "The Intermission Orchestra is a student-run organization dedicated to playing music from films, video games, and Japanese animation. We hold a concert every quarter for UCSD students to enjoy their favorite pieces.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Intermission Orchestra",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11923",
                "contactEmail": ""
            }
        },
        {
            "SKLuTIVqUwZoBTjUvcx6DlJLwfb2": {
                "clubReference": "SKLuTIVqUwZoBTjUvcx6DlJLwfb2",
                "description": "The Bio-Optimization Society at UCSD (BIOS) aims to provide an open forum for education about and discussion of bio-optimization strategies, research, and current events with students and faculty through academic opportunities, talks and other activities. We define bio-optimization as the use of targeted supplementation, nutrition, exercise, biorhythm-tracking technologies, personalized genomics, and other strategies to improve one's cognition and overall health. The Bio-Optimization Society at UCSD will empower its members to improve their quality of life through applied knowledge of various strategies for physiological self-improvement.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Bio-Optimization Society at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10731",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "SNoppqmIHcelv88kHa8hXfgkFVj1": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "SNoppqmIHcelv88kHa8hXfgkFVj1",
                "description": "Camp HOPE America at UCSD members are a part of helping San Diego teens and young children exposed to trauma and domestic violence find pathways to HOPE and healing through a camping and year-round mentoring program. In partnership with the national evidence-based organization Camp HOPE America, members explore trauma informed mentoring, fundraising for community activities, and professional development. Through this club, our members become a network of hope givers who help break the cycle of domestic violence.",
                "eventList": [],
                "emailList": [],
                "clubName": "Camp HOPE America at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10815",
                "contactEmail": ""
            }
        },
        {
            "SeyS3wgbwGRdg7Y1ZVP9XERgEGr1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Deejays and Vinylphiles Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8415",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "SeyS3wgbwGRdg7Y1ZVP9XERgEGr1",
                "description": "To educate the student body on DJ skills, techniques, and culture. To guide members through the process of producing and marketing free campus events for the student body.",
                "eventList": []
            }
        },
        {
            "SoKjEmdnAUbCdNal3UsyPHdnGf32": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "SoKjEmdnAUbCdNal3UsyPHdnGf32",
                "description": "Green Corps at UC San Diego is a student organization based on environmental and social justice, aiming to repurpose our economic, social, and food-water-energy-waste systems, and re-envisioning our infrastructure to create sustainable solutions to everyday problems and bring solidarity to all people. We support and develop student innovations and sustainability focused engineering and design through integrating agriculture with high technology. Green Corps also serves as a campus-based entity recruiting, and engaging students and promoting holistic sustainability efforts based on action.",
                "eventList": [],
                "emailList": [],
                "clubName": "Green Corps at UC San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10686",
                "contactEmail": ""
            }
        },
        {
            "Sw9ArajDPcUnnnE768VVeSNivXs2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10684",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "Sw9ArajDPcUnnnE768VVeSNivXs2",
                "description": "To inform and guide students who are interested in pursuing careers in veterinary medicine by introducing various resources such as volunteering opportunities and contacts with experienced professionals. In addition, the Pre-Veterinary Student Association at UCSD strives to create a positive community centered around helping one another reach their own individual goals within the field of veterinary medicine. A network of resources, support, and companionship will be fostered in order to motivate and encourage students to follow their chosen career paths. The club will help members refine their skills, improve their resumes, and expand their knowledge in preparation for applying to veterinary school.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pre-Veterinary Student Association at UCSD",
                "pictureURL": ""
            }
        },
        {
            "TD8PjE7ZuSaVIpFsyVjNA5pRraj2": {
                "clubReference": "TD8PjE7ZuSaVIpFsyVjNA5pRraj2",
                "description": "Emergency Medical Services at UCSD is organized exclusively to educate students and staff through CPR certification and training, provide information and resources for individuals, and to positively impact the health and safety of the UCSD community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Emergency Medical Services at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11954",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": []
            }
        },
        {
            "TGtZpnt9mwTSOeqSfpeSmB82LlY2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "TGtZpnt9mwTSOeqSfpeSmB82LlY2",
                "description": "Project RISHI at UCSD aims to promote sustainable development and growth of rural Indian communities. In partnership with local community members and social enterprises, we identify issues central to our target community and provide resources to implement solutions through extensive field research and on-campus initiatives. We are a diverse group of passionate and energetic individuals moving forward the dialogue on equity and resilience through our projects. We hope to transform rural Indian areas into modern and sustainable communities while providing UCSD undergraduates with exposure to international philanthropy and the challenges faced in rural India.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Project RISHI",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8503",
                "contactEmail": ""
            }
        },
        {
            "TJSQyFtNKMNU44zFeNpWX1ilD923": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10682",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "TJSQyFtNKMNU44zFeNpWX1ilD923",
                "description": "The Undergraduate Bioinformatics Club (UBIC) at UCSD shall be a non-profit organization whose purpose is to serve bioinformatics undergraduates by providing resources for students entering the growing discipline; furthering access to job, internship, and research opportunities; facilitating an open forum for discussion, collaboration, and socialization; holding events, programs, and meetings; and acting as a collective voice for bioinformatics students at UCSD.",
                "eventList": [],
                "emailList": [],
                "clubName": "Undergraduate Bioinformatics Club at UCSD (UBIC)",
                "pictureURL": ""
            }
        },
        {
            "TRgnBut4OWhX4VsHj2CrTfzoFeI3": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "TRgnBut4OWhX4VsHj2CrTfzoFeI3",
                "description": "The mission of the UCSD, Skaggs School of Pharmacy and Pharmaceutical Sciences, Student Society of Health-System Pharmacists is to make students aware of pharmacy practice in health systems and the potential of this setting for expanding the base of pharmacy practice, provide information to students about career directions in and credentials needed for pharmacy practice in health systems.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "California Society of Health-System Pharmacists- at UCSD Student Chapter",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8505",
                "contactEmail": ""
            }
        },
        {
            "TT7L9POltRV8IRMvwfjzRkO9D4h2": {
                "emailList": [],
                "clubName": "Yifang Chinese Musical Club (YFM)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10799",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "TT7L9POltRV8IRMvwfjzRkO9D4h2",
                "description": "The purpose of starting this Chinese Musical Club is to introduce the musicals combined with Chinese culture to the UCSD communities, and provide students who are interested in musicals with a place to communicate with each other.",
                "eventList": []
            }
        },
        {
            "TViL53GUjYel2WSI1Xgs83yLxUo2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "TViL53GUjYel2WSI1Xgs83yLxUo2",
                "description": "Our goal is to reduce cancer morbidity and mortality among the Pan-Asian community by educating UCSD students about appropriate cancer control measures and providing opportunities for those students to disseminate their acquired knowledge to the pan-Asian community at-large. Our team is a non-profit, student- run organization and has been operating continuously since 1994.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Cancer Outreach Team",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10793",
                "contactEmail": ""
            }
        },
        {
            "TYpDKYyU7LfCOYz5sr3xH19Qtt42": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Phi Lambda Rho Sorority, Inc.",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10655",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "TYpDKYyU7LfCOYz5sr3xH19Qtt42",
                "description": "The purpose of Phi Lambda Rho Sorority, Inc. is to promote academic excellence within its members, provide sisterhood, engage in community service, with emphasis in the Chicano (a) and Latino (a) community, and to instill the importance of retaining its roots for the sake of its identity by promoting the Chicano (a) and Latino (a) culture.",
                "eventList": []
            }
        },
        {
            "TcR7UOOcPHf5HXFkm774NZu4Ykb2": {
                "tags": [],
                "announcements": [],
                "clubReference": "TcR7UOOcPHf5HXFkm774NZu4Ykb2",
                "description": "Astronomy Club at UCSD aims to promote the interest of astronomy and astrophysics among UCSD undergraduates. Our organization will focus on the exploration of the universe. We hope to help students, who are interested in astronomy, make observations, know each other and get more access to professional faculty.",
                "eventList": [],
                "emailList": [],
                "clubName": "Astronomy Club at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10738",
                "contactEmail": ""
            }
        },
        {
            "TcX1pDDsmjPUUlomZnSA8h9RwEA2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10732",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "TcX1pDDsmjPUUlomZnSA8h9RwEA2",
                "description": "The purpose of this club is to establish a Chinese culture proposing drama club, providing Chinese culture in the form of artistic activities for UCSD communities, and even the entire San Diego area.",
                "eventList": [],
                "emailList": [],
                "clubName": "Chinese Drama Club (CDC)",
                "pictureURL": ""
            }
        },
        {
            "TxzuDMfYpjMtkbMLJ42RSsHdLw93": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "TxzuDMfYpjMtkbMLJ42RSsHdLw93",
                "description": "To provide students the opportunity to expand and test their knowledge by designing and fabricating a CubeSat. Participants of the TritonÂ³ work closely with other students and faculty members, as well as collaborate with other companies, to complete this multifaceted disciplinary project.",
                "eventList": [],
                "emailList": [],
                "clubName": "TritonCubed",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8405",
                "contactEmail": ""
            }
        },
        {
            "UIpH0UnBaVVZJJgguEP4cq0c6WH3": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Coptic Club at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9640",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "UIpH0UnBaVVZJJgguEP4cq0c6WH3",
                "description": "To allow members to grow spiritually while educating them about the Coptic culture and foremost religion.",
                "eventList": []
            }
        },
        {
            "UOFsjOdCBdN1FGv2h7rCqtCrPrx1": {
                "tags": [],
                "announcements": [],
                "clubReference": "UOFsjOdCBdN1FGv2h7rCqtCrPrx1",
                "description": "The purpose of SynBio is to: A. Raise awareness of and drive interest in the field of synthetic biology B. Provide workshops to build the skillsets needed to be effective in quantitative biology research C. Encourage interdisciplinary modes of thinking and collaboration D. Create a community for individuals of all biology-related interests E. Foster the growth and development of open source biology at UC San Diego",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "SynBio",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8404",
                "contactEmail": ""
            }
        },
        {
            "UQ5YYzWd8RT6bk4lPDwWgGNbMS73": {
                "description": "UC San Diego's largest South Asian organization, SangamSD aspires to promote South Asian cultural awareness and education within the UCSD community and beyond. SangamSD's goals of uniting South Asians at UCSD as well as spreading diversity, tolerance, and the understanding of all South Asian cultures is reflected through its numerous social, cultural, and educational events.",
                "eventList": [],
                "emailList": [],
                "clubName": "SangamSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8573",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "UQ5YYzWd8RT6bk4lPDwWgGNbMS73"
            }
        },
        {
            "UVde40TT4yWLIos0Uu7p9o69C0K2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Acamazing",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8465",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "UVde40TT4yWLIos0Uu7p9o69C0K2",
                "description": "Acamazing is a co-ed a cappella group which seeks to provide a fun and enriching environment for singers and aspiring singers to make music without the use of instruments. We aim to nurture the musical talent of UCSD students and to entertain ourselves, the UCSD community, and the general public. Additionally, we hope that all members gain a better understanding of music and enrich their own musicality while building lasting friendships with their fellow members.",
                "eventList": []
            }
        },
        {
            "UVm014Y9glNOlzjLBRcBz608hhC3": {
                "description": "The purpose of Lambda Theta Alpha shall be to provide a sisterhood based on unity, love and respect in an effort to foster the development of strong leaders who will then provide and practice political, social and cultural activities. It shall also be the purpose of Lambda Theta Alpha to promote unity through charitable and educational programs, maintain a higher standard of learning and serve as a voice for all students.",
                "eventList": [],
                "emailList": [],
                "clubName": "Lambda Theta Alpha Latin Sorority, Inc.",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12031",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "UVm014Y9glNOlzjLBRcBz608hhC3"
            }
        },
        {
            "UZVizDuCBfTvmTa0LrECXeG7xyI2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10676",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "UZVizDuCBfTvmTa0LrECXeG7xyI2",
                "description": "Our mission is to re-humanize inmates and reduce recidivism rates within the San Diego community. We believe that facilitating book groups with prisoners can aid in this process by promoting healthy human interaction. Interactions among inmates and between inmates and volunteers can help build or re-build prisonersâ€™ ability to function with other people. It can also help to re-humanize inmates who have by making prisoners feel heard and instilling self-worth. We hope that these skills and values make it easier for prisoners to re-enter society and thus prevent them from committing further crimes.",
                "eventList": [],
                "emailList": [],
                "clubName": "Books Beyond Boundaries",
                "pictureURL": ""
            }
        },
        {
            "Uo5uHIQAlUWxKdgvvRJ7C2enlon2": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "Uo5uHIQAlUWxKdgvvRJ7C2enlon2",
                "description": "ECCF is an on-campus Christian fellowship focusing on the Mandarin speaking community in UC San Diego. Our fellowship is a group of brothers and sisters supporting each other physically and spiritually while studying in UCSD and we are here to build a home away from home together through the love of Christ.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Evangelical Chinese Christian Fellowship",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8386",
                "contactEmail": ""
            }
        },
        {
            "V3z3OFrHQGehHW9gOUZdypfD7y03": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10694",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "V3z3OFrHQGehHW9gOUZdypfD7y03",
                "description": "To share in our passion for Quidditch and Harry Potter as a community, by having fun.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Quidditch"
            }
        },
        {
            "V6REm6Mn7gZzk7Jf9ASTUjvbPzQ2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11962",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "V6REm6Mn7gZzk7Jf9ASTUjvbPzQ2",
                "description": "Provide a space to cultivate a culture of undergraduate student activism against the injustice in the U.S. prison system and cooperate with faculty and graduate students to spread awareness primarily through screenings, speakers, panels, campaigns, and direct networking with key people working in this arena",
                "eventList": [],
                "emailList": [],
                "clubName": "Students Against Mass Incarceration",
                "pictureURL": ""
            }
        },
        {
            "VUo5rxR7wsU6gHyTlqvePLod9Oo1": {
                "emailList": [],
                "clubName": "Cybersecurity @ UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10832",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "VUo5rxR7wsU6gHyTlqvePLod9Oo1",
                "description": "Cybersecurity Group @ UCSD is an organization designed to expand the knowledge of cybersecurity for all students. As part of our mission, various workshops, panel discussions, seminars, and other programs will be hosted covering the latest information in all topics, issues, and concerns related to cybersecurity. The key element in developing cybersecurity understanding is the Cybersecurity Group CTF (Capture the Flag) team, a hands-on approach to learning important concepts and skills.",
                "eventList": []
            }
        },
        {
            "VYnkSElzgcf09oPc9W3Nczpk7N02": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "VYnkSElzgcf09oPc9W3Nczpk7N02",
                "description": "Here at the Fishermanâ€™s Club at UCSD, we provide a welcoming community for students to bond over the sport of angling. Our central goal is to educate students about the aspects and nuances of fishing through engagement in friendly competition and exploration of the many fisheries San Diego has to offer. We will also learn about fisheries and the importance of conservation through our connections with local community groups and faculty members. We welcome students regardless of experience, so whether you've grown up on the water or have yet to wet a line, we invite you to join Fisherman's Club! Check us out on Facebook! https://www.facebook.com/fishermansclubucsd",
                "eventList": [],
                "emailList": [],
                "clubName": "Fisherman's Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8492",
                "contactEmail": ""
            }
        },
        {
            "Vjc5i1ZLz3eUGCIxg6WsVwsR2zw2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8597",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "Vjc5i1ZLz3eUGCIxg6WsVwsR2zw2",
                "description": "Triton Software Engineering (TSE) is an interdisciplinary student-run organization at UC San Diego that designs and develops pro-bono software (e.g. web and mobile applications) for non-profits, while giving our students practical, real world experience.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Triton Software Engineering"
            }
        },
        {
            "VlcC5IVBzghsJcZlzzeHc6YryRk2": {
                "description": "Motivate women to achieve full potential in careers as engineers and leaders, expand the image of the engineering profession as a positive force in improving the quality of life, and demonstrate the value of diversity.",
                "eventList": [],
                "emailList": [],
                "clubName": "Society of Women Engineers (SWE)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8444",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "VlcC5IVBzghsJcZlzzeHc6YryRk2"
            }
        },
        {
            "Vm8VRxdQ0kd8J4qtFdDad1rTxCF3": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "Vm8VRxdQ0kd8J4qtFdDad1rTxCF3",
                "description": "Korean Graduate Student Association is the organization of the Korean graduate students, research staff, post-docs, professors, visiting scholars, and visiting professors at the University of California, San Diego (UCSD). The KGSA aims to promote unity and harmony among Korean people at UCSD and to support them in various ways. The main activities of the organization include assisting new incoming students with settlement, holding seasonal/ holiday/ sports events, and providing members with various kinds of useful information on the job market and life around campus. We welcome any kind of supports or contributions from individuals, organizations, and companies that could further consolidate the Korean community at UCSD and contribute to sound relationship between our members and society in general.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Korean Graduate Student Association (KGSA)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11991",
                "contactEmail": ""
            }
        },
        {
            "VqmrNZZuITOStmfD0jIe9iryzRa2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9598",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "VqmrNZZuITOStmfD0jIe9iryzRa2",
                "description": "To promote interest in the field of aeronautics and astronautics.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "American Institute of Aeronautics and Astronautics"
            }
        },
        {
            "VrE3PWWqhgRQs5tI84NZ1JhSu5C2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "VrE3PWWqhgRQs5tI84NZ1JhSu5C2",
                "description": "The Queer Graduate Student Association was created to build community for graduate students who identify as lesbian, gay, bisexual, transgender, queer, intersex, asexual and other marginalized identities (LGBTQIA+).",
                "eventList": [],
                "emailList": [],
                "clubName": "Queer Graduate Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9600",
                "contactEmail": ""
            }
        },
        {
            "W3ouPON99MTM0DL5ZxvJdNFyUq02": {
                "emailList": [],
                "clubName": "Global Medical Training",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11928",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "W3ouPON99MTM0DL5ZxvJdNFyUq02",
                "description": "Global Medical Training (GMT) is an international, non-profit, and humanitarian organization that provides free medical, dental, and veterinary services in developing communities in parts of Central America and Mexico. Students are given the unique chance to directly participate in â€œhands-onâ€ diagnoses and treatments under the supervision of medical professionals. This is the reason why our motto is â€œLEARN BY DOING.â€ As a health-focused organization, our main purpose is to increase awareness of the lack of healthcare in third world countries by giving undergraduate students the chance to expand their understanding of life and medicine outside the United States. This is made possible by educating and exposing students to the prevalent global and medical issues that many underserved communities in developing countries face. Such issues include poverty, poor national health-care systems, and the various circumstances that contribute to and perpetuate a specific populationâ€™s situation. GMT also understands there are major health issues that reside right in our own community. It is this very reason why we also offer our students the opportunity to volunteer in various community service events including free health fairs servicing the underprivileged in the Los Angeles and surrounding counties. Altogether, GMT views student volunteers as a vital force for change. After all, they may be the next generation of health-care providers.",
                "eventList": []
            }
        },
        {
            "W4140A17v3MIBaLD09LY6pH7zL43": {
                "clubReference": "W4140A17v3MIBaLD09LY6pH7zL43",
                "description": "Fronteras Saludables (Healthier Borders) is student organization that hopes to spread awareness about health issues in Tijuana, Mexico. We will support the efforts of the HFiT free clinic (located in Mexico) through fundraising for medical supplies, medications, and other equipment. Fronteras Saludables (Healthier Borders) will inform UCSD undergraduates about opportunities to get involved in the HFIT internship program and other supporting roles.",
                "eventList": [],
                "emailList": [],
                "clubName": "Fronteras Saludables (Healthier Borders)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9637",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": []
            }
        },
        {
            "WBxheurGByWooqLp4THl6JD4oO32": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Cambodian Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8438",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "WBxheurGByWooqLp4THl6JD4oO32",
                "description": "We, a non-profit organization called the Cambodian Student Association (CSA), believe that by (1) building and strengthening identification of the Cambodian culture among fellow members, students and community at large, (2) offering consistent academic, social and moral encouragement through activities and community service and (3) developing social networks that will assist us during our time in college and in our lives thereafter, we will have established rare relationships and support systems based on common principles and values with fellow members who share common interests.",
                "eventList": []
            }
        },
        {
            "WUQMwZCYOqOr3e5V5giDDtpC3vd2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8378",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "WUQMwZCYOqOr3e5V5giDDtpC3vd2",
                "description": "MEMO provides medical and educational services locally in San Diego and Orange County, as well as abroad in Vietnam. We send volunteers annually to Vietnam to provide scholarships and school supplies to students in rural communities, set up free health clinics, donate monetary aid and supplies to orphanages, and sponsor heart surgeries for children with congenital heart disease. Locally in San Diego and Orange County, we send volunteers to help other local non-profit organizations, set up community health fairs, and organize awareness nights on campus.",
                "eventList": [],
                "emailList": [],
                "clubName": "M.E.M.O. at UCSD",
                "pictureURL": ""
            }
        },
        {
            "WYoE0dMKFBUgj3XrRyKLN2H60bZ2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8495",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "WYoE0dMKFBUgj3XrRyKLN2H60bZ2",
                "description": "As a cultural and social organization, we aim to promote diversity and celebrate the various and distinct Asian cultural backgrounds of the students of UCSD. We hope to share these cultural values to the UCSD community by providing a fun and welcoming, stereotype-free, and all-inclusive social atmosphere for students.",
                "eventList": [],
                "emailList": [],
                "clubName": "Multi-Asian Student Association",
                "pictureURL": ""
            }
        },
        {
            "WbUZfOmh3SMqg7EKhUVGLnRNyyK2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "WbUZfOmh3SMqg7EKhUVGLnRNyyK2",
                "description": "Hearthstoners at UCSD seeks to provide a recreational, social, and competitive community for players of online card games within UCSD and the greater San Diego area, specifically Hearthstone. By providing an environment of social interaction, friendly competition, and in-game support, our goal is to give all of our members a positive gaming experience and the competitive drive to succeed in any gaming or non-gaming endeavor.",
                "eventList": [],
                "emailList": [],
                "clubName": "Hearthstoners at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8467",
                "contactEmail": ""
            }
        },
        {
            "Wil36449hAhcAPNxVu5dljiBLPY2": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "Wil36449hAhcAPNxVu5dljiBLPY2",
                "description": "Morning Sign Out (MSO) is an online publication that strives to turn science and medicine into something understandable for the greater public, providing them enough critical information that leaves them more knowledgeable than before.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Morning Sign Out",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9646",
                "contactEmail": ""
            }
        },
        {
            "Wy1xWNlWFdQLw9T7uxcSAGH6lYC2": {
                "description": "To build and provide bonds of friendship, mutual support, respect for intellectual development, and an understanding and allegiance to positive ethical principles.",
                "eventList": [],
                "emailList": [],
                "clubName": "Kappa Kappa Gamma",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8407",
                "contactEmail": "",
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "Wy1xWNlWFdQLw9T7uxcSAGH6lYC2"
            }
        },
        {
            "XKRqSuxHb5aVFWKnODXOjeImrkl2": {
                "clubReference": "XKRqSuxHb5aVFWKnODXOjeImrkl2",
                "description": "Provide a Christian environment and circle for UCSD students through activities such as worship, prayer, bible study, and fellowship.",
                "eventList": [],
                "emailList": [],
                "clubName": "We The Redeemed",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10809",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "XKfjwaDcaOcgJRT4xwfpFnrcCax2": {
                "clubReference": "XKfjwaDcaOcgJRT4xwfpFnrcCax2",
                "description": "Our purpose is to provide an outlet for dancers who come to college seeking to continue their passion for dance in addition to pursuing higher education. Our contemporary based dance company will hold various showcases and events to allow our members to express themselves through artistic movement. Our main goal is to offer a space for students who wish to further build upon their talent and creativity, as well as form a united family.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Finesse Dance Company",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10780",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": []
            }
        },
        {
            "XLJZV6zfF2Q8alIlxmvG6FnCcDj2": {
                "clubReference": "XLJZV6zfF2Q8alIlxmvG6FnCcDj2",
                "description": "Basic Life Support Program is a prestigious program established in 2014 that specializes in instructing Basic Life Support (BLS) through the American Heart Association and certifying individuals that complete the course. This program is a committee within the Alpha Epsilon Delta honor society that allows the acquirement of not only profit, leadership experience, and the growth of the organization, but ultimately provides a concrete difference between Alpha Epsilon Delta and other health related organizations.",
                "eventList": [],
                "emailList": [],
                "clubName": "Basic Life Support Program",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11989",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "XQmhaUw8w9hX3WtvVzMGNeaEFvT2": {
                "description": "Our purpose is to create a positive environment that focuses on the improvement of our pillars such as Scholars, Leaders, Athletes, and Gentlemen.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pi Kappa Alpha",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8518",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "XQmhaUw8w9hX3WtvVzMGNeaEFvT2"
            }
        },
        {
            "Xa1eVcPC3rbcwSvrpFAoaHqvSLF2": {
                "emailList": [],
                "clubName": "Groundwork Books Collective",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9628",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "Xa1eVcPC3rbcwSvrpFAoaHqvSLF2",
                "description": "A political collective and non-profit bookstore that provide progressive literature and camaraderie for students and activists who hope for changes and a better world.",
                "eventList": []
            }
        },
        {
            "XbY935ywv6VvselUo45h9ndU1l13": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Delta Gamma",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10715",
                "contactEmail": "",
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "XbY935ywv6VvselUo45h9ndU1l13",
                "description": "The ladies of Delta Gamma pride themselves on their commitment to fostering high ideals of friendship, promoting educational and cultural interests, creating a true sense of social responsibility, and developing the finest qualities of character.",
                "eventList": []
            }
        },
        {
            "XfRfmtMOiKMhVoHdiAIeeS3D27j1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8397",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "XfRfmtMOiKMhVoHdiAIeeS3D27j1",
                "description": "The Bioengineering Graduate Society (BEGS) aims to be an interface for bioengineering graduate students at UC San Diego, their department, and the local community. Since its creation in 1994, the BEGS mission is to foster professional, educational, and social development opportunities through relationships with industry, alumni, and students. BEGS is a graduate student-run organization with the aid of the Bioengineering Department.",
                "eventList": [],
                "emailList": [],
                "clubName": "Bioengineering Graduate Society",
                "pictureURL": ""
            }
        },
        {
            "XllvgaHZZZUQ0eNZmgacnnwEDse2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8361",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "XllvgaHZZZUQ0eNZmgacnnwEDse2",
                "description": "The purpose of Gift of Life at UCSD is to raise awareness for the bone marrow donation process. In collaboration with the Gift of Life Marrow Registry, one of the nation's public bone marrow and blood stem cell registries, Gift of Life at UCSD organizes events, campaigns, trainings, and seminars to register new potential donors, raise monetary funds, and educate the community about the bone marrow donation process. Gift of Life at UCSD is dedicated to expanding the bone marrow registry and supporting those who have been affected by cancer.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Gift of Life at UCSD"
            }
        },
        {
            "XtkQly6g1iZRHSDfTWuEO3LP0pp2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sleepless Collective",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9599",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "XtkQly6g1iZRHSDfTWuEO3LP0pp2",
                "description": "Mixing urban dance and hip hop dance, Sleepless Collective aims to connect with people through dance and create humble community leaders and innovative performances.",
                "eventList": []
            }
        },
        {
            "XuWG3ZpxBPPY7vhhZDJSWKqfGIj2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10822",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "XuWG3ZpxBPPY7vhhZDJSWKqfGIj2",
                "description": "The Undergraduate Communication Society (UCS) is an organization run by and for students interested in communication. The UCS conducts career panels, field trips (in which we are not responsible for member's transportation and utilize public transportation throughout San Diego) and social events for members, often including alumni and guest speakers from the communication field.",
                "eventList": [],
                "emailList": [],
                "clubName": "Undergraduate Communication Society at UCSD",
                "pictureURL": ""
            }
        },
        {
            "Y9QGvTaLnQTyuj1XlRygID28Y7p1": {
                "description": "Microtomes is an academic journal club centered within the Division of Biological Sciences that aims to introduce students to cutting edge topics in biology and facilitate scientific critical thinking through peer-moderated discussions of recent publications.",
                "eventList": [],
                "emailList": [],
                "clubName": "Microtomes",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8561",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "Y9QGvTaLnQTyuj1XlRygID28Y7p1"
            }
        },
        {
            "YFZm7d0umTbtSy1O0ur0AQPqyjh2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "YFZm7d0umTbtSy1O0ur0AQPqyjh2",
                "description": "The purpose of ASME at UCSD is to provide for its members a wholesome mechanical engineering experience with events, projects and programs that enrich studentsâ€™ knowledge and fuel passion for the engineering world. The ASME will also promote development of an ethical, community conscientious student and future engineer.",
                "eventList": [],
                "emailList": [],
                "clubName": "American Society of Mechanical Engineers",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8540",
                "contactEmail": ""
            }
        },
        {
            "YKn6R1gVWXVp7bCLMCs3xAa0EZ22": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8363",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "YKn6R1gVWXVp7bCLMCs3xAa0EZ22",
                "description": "The purpose of Mock Trial at UCSD is to encourage interest in law advocacy and to prepare for Mock Trial competitions.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Mock Trial @ UCSD"
            }
        },
        {
            "YPJepGAeMxaTMTaTrcuviPRatJq1": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "YPJepGAeMxaTMTaTrcuviPRatJq1",
                "description": "Asha for Education at UCSD is an offset of the Asha for Education foundation, a non-profit organization dedicated to the support of basic education in rural India. \"Asha\", which means \"hope\" in many Indian dialects, was founded at the University of California, Berkeley in 1991 and has since grown to over 50 chapters scattered throughout the United States, Europe, East Asia and India. Each of these chapters raises funds to support various education-related projects in India. Since its inception, Asha has partnered with more than 800+ NGOs from across 24 states in India and has disbursed in excess of $32 million. In 2014 alone, Asha has disbursed $2.85 million and has supported the education of 250,000+ kids in India directly and many hundreds of thousands more indirectly.",
                "eventList": [],
                "emailList": [],
                "clubName": "Asha for Education at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8419",
                "contactEmail": ""
            }
        },
        {
            "YlyHZL5wKiZVE8EQl0CAtU8MhcD2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "YlyHZL5wKiZVE8EQl0CAtU8MhcD2",
                "description": "The Teo-Chew Association is a nonprofit student-run organization committed to the rich history and culture of the Teo-Chew American community and serving college-age youth. The following goals compose the Teo-Chew Associationâ€™s mission statement and purpose: â€¢ To increase awareness about Teo-Chew culture and language â€¢ To unite the Teo-Chew community on campus and beyond â€¢ To advocate for the preservation of Teo-Chew and Chinese culture and history for the general welfare of the Teo-Chew community",
                "eventList": [],
                "emailList": [],
                "clubName": "Teo-Chew Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8474",
                "contactEmail": ""
            }
        },
        {
            "ZAZS0gW8yzP2a2pNt9zfZBnmCmd2": {
                "clubReference": "ZAZS0gW8yzP2a2pNt9zfZBnmCmd2",
                "description": "At Expanding Visions for Health we are dedicated to providing service aimed at improving the health of our community.",
                "eventList": [],
                "emailList": [],
                "clubName": "Expanding Visions for Health",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10789",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": []
            }
        },
        {
            "ZlpFOcT4CHgtdQ4FuMdpnp9mM9W2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11916",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "ZlpFOcT4CHgtdQ4FuMdpnp9mM9W2",
                "description": "The Mustard Seed Projectâ€™s mission - guided by a â€œhand up, not hand outâ€ philosophy - is to create a student model that connects unsheltered and low-income individuals to services and programs through outreach, research, and education.",
                "eventList": [],
                "emailList": [],
                "clubName": "Mustard Seed Project, The",
                "pictureURL": ""
            }
        },
        {
            "Zy0rmxSj85akzwczWNW5E77PwUq1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10737",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "Zy0rmxSj85akzwczWNW5E77PwUq1",
                "description": "Triton Street Fighter is an organization centered around playing the video game Street Fighter 5 and other Fighting Games. The focus is to establish a community of players that all share the same love and passion for the game.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Triton Street Fighter"
            }
        },
        {
            "a1MwFzC9mzZt5jxxFgwwU6QwOcq2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "a1MwFzC9mzZt5jxxFgwwU6QwOcq2",
                "description": "Rocket Propulsion Laboratory is a non-profit student organization at the University of California, San Diego created with the goal of training the next generation of engineers through projects in rocket propulsion.",
                "eventList": [],
                "emailList": [],
                "clubName": "Rocket Propulsion Laboratory",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12029",
                "contactEmail": ""
            }
        },
        {
            "a5l4kutm0fPCsqWlIUwuCeuVXl23": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "a5l4kutm0fPCsqWlIUwuCeuVXl23",
                "description": "Our program focuses on breaking down the wall that separates those with disabilities from their non-disabled peers. It is unique in its unification of the peer-mentorship of young adults with mental and physical disabilities and their transitional community education. We primarily work with students ages 18-22 with disabilities through partnership with the Transitional Resources for Adult Community Education (TRACE) department of the San Diego Unified School District. Our student volunteers serve as teachers that target three critical areas imperative to independent living: communication, health awareness, and vocational skills. They also serve as mentors who participate in recreational activities and field trips that supplement the studentâ€™s community education. Our program is open to all UCSD undergraduates who are interested in empowering and bonding with other students their age with a wide range of disabilities.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "StRIVE",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10652",
                "contactEmail": ""
            }
        },
        {
            "a8dxHuW0VTOcEGcu7oQfxQgCRqq1": {
                "clubReference": "a8dxHuW0VTOcEGcu7oQfxQgCRqq1",
                "description": "The Multi Identity Art Collective was founded with the intention of creating an inclusive and warm artist space here at UCSD. The Collective is inclusive of all personal identities and skill levels. Members will learn technical art skills and art critique. They also produce at least one project per quart. The collective guarantees a welcoming atmosphere for all who wish to create art, and stands against discrimination on basis of race, gender, or sexuality.",
                "eventList": [],
                "emailList": [],
                "clubName": "Multi-Identity Art Collective",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11905",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "aCW80lNKKiNjd0DUrFLmjyCV1Aw1": {
                "clubReference": "aCW80lNKKiNjd0DUrFLmjyCV1Aw1",
                "description": "To promote Indonesian culture to University of California, San Diego community through social and other nonÂ­profit events. To create camaraderie between the members. To build a network with other Indonesian clubs.",
                "eventList": [],
                "emailList": [],
                "clubName": "San Diego Indonesian Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8605",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "aIdSEev1tPQicPTwQQq5zJE8up62": {
                "clubReference": "aIdSEev1tPQicPTwQQq5zJE8up62",
                "description": "Circle K International is comprised of university students who are responsible citizens and leaders with a lifelong commitment to community service worldwide. Through the three tenets of Service, Leadership, and Fellowship, Circle K inspires people to better our world, following the motto of \"Live to Serve, Love to Serve.\" Circle K provides constructive opportunities for students to become involved on their campuses and communities through service work to others in need.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Circle K. International",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8446",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": []
            }
        },
        {
            "aLMbhd7tTGNmamgT3ci3VeOYQRC3": {
                "emailList": [],
                "clubName": "Cooking Hub",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8525",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "aLMbhd7tTGNmamgT3ci3VeOYQRC3",
                "description": "Cooking Hub aims to bring a good chance for students to get together, teach students practical cooking skills, advocate healthier college diets, raise awareness of cultural diversity represented by food, and help solve food insecurity at UCSD.",
                "eventList": []
            }
        },
        {
            "aPmckGcEmWd3aJUoG2D1r5U9sDI3": {
                "emailList": [],
                "clubName": "Project Kilimanjaro",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8383",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "aPmckGcEmWd3aJUoG2D1r5U9sDI3",
                "description": "The purpose of this organization is to promote the health and wellness of women and children internationally. Our current project focuses on increasing accessibility to healthcare for Maasai Villages on the base of Mt Kilimanjaro through HIV/AIDS seminars, First-Aid Resouces and Education, High risk Pregnancies Prevention and Childcare, and the Pad Project. These projects will culminate into building a pediatric wellness center in rural Tanzania for 87 Maasai villages on the base of Mount Kilimanjaro. Members of this organization will get a chance to volunteer in Tanzania to build the pediatric wellness center and promote the preceding four projects through our partner program, Maisha Arts Development and African Girl Foundation.",
                "eventList": []
            }
        },
        {
            "abAUX5ETqFQ1IRtnzxLunC93DAI2": {
                "tags": [
                    "Affirmitive Action"
                ],
                "announcements": [],
                "clubReference": "abAUX5ETqFQ1IRtnzxLunC93DAI2",
                "description": "The purpose of this organization is to facilitate the maintenance and education of Native American culture and beliefs, while maintaining a community for Native students (and Allies) on campus and contributing to local Native communities. Native American Student Alliance is a not-for-profit organization.",
                "eventList": [],
                "emailList": [],
                "clubName": "Native American Student Alliance",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9617",
                "contactEmail": ""
            }
        },
        {
            "aeGlRHwwB3ThwMu51NYOuJsVTQt2": {
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "aeGlRHwwB3ThwMu51NYOuJsVTQt2",
                "description": "Voto Latino is a national non-profit organization that seeks to transform America by recognizing Latinosâ€™ innate leadership. Through innovative digital campaigns, pop culture, and grassroots voices, we provide culturally relevant programs that engage, educate and empower Latinos to be agents of change. Together, we aim to build a stronger and more inclusive democracy.",
                "eventList": [],
                "emailList": [],
                "clubName": "Voto Latino",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10705",
                "contactEmail": ""
            }
        },
        {
            "afxSiVNyaJPRQJPbqKSHfDZ1aV12": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8440",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "afxSiVNyaJPRQJPbqKSHfDZ1aV12",
                "description": "1. Lion Dance at UCSD is established for the purpose of providing cultural enrichment to UCSD and San Diego area by practicing, performing, and teaching the ancient art of Chinese Lion Dancing. 2. Lion Dance at UCSD intends to perform for any UCSD affiliated groups and events as well as non-UCSD affiliated organizations interested in our presentation. 3. Lion Dance at UCSD is a Not-For-Profit organization, and will rely on donations, contributions, and other forms of fundraising to finance equipment.",
                "eventList": [],
                "emailList": [],
                "clubName": "Lion Dance at UCSD",
                "pictureURL": ""
            }
        },
        {
            "ar3n3VSQHZhURxfylWJcixvkw7o2": {
                "clubReference": "ar3n3VSQHZhURxfylWJcixvkw7o2",
                "description": "The Students of Color for Environmental Justice at the University of California, San Diego seeks to provide communities of color a learning and healing space that works at the intersections of race, identity, class, and gender. The group will actively work towards increasing the representation of people of color in the environmental and wilderness sectors in an effort to alleviate the marginalization these communities have historically experienced in these fields.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Students of Color for Environmental Justice at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8534",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "arOLljmvJcRcVuMdCDzMH1I8DiO2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "arOLljmvJcRcVuMdCDzMH1I8DiO2",
                "description": "The purposes of the Raza Graduate Student Association (RGSA) are to: 1) increase unity among graduate students of color, particularly Latinx/Chicanax students, at UCSD 2) promote graduate education to Latinx/Chicanax undergraduate student populations, and recruit them for graduate school at UCSD 3) provide a community, resources, and a social network for graduate students of color at UCSD 4) increase awareness and educate on different Latinx populations and history (RGSA is a not-for-profit organization.)",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Raza Graduate Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10787",
                "contactEmail": ""
            }
        },
        {
            "bAlXtwjhd9UEi5XUY0UHMdZPa9w2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Society of Hispanic Professional Engineers",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8441",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "bAlXtwjhd9UEi5XUY0UHMdZPa9w2",
                "description": "The purpose of SHPE UCSD is to promote the advancement of Hispanics in math, science, engineering and other technical fields through our student chapter benefits; including but not limited to Professional Development, Academic Development, and Community Service. SHPE at UCSD is a non-profit student organization.",
                "eventList": []
            }
        },
        {
            "bKb5HP3WX0cEoizid9nbuMuYns72": {
                "tags": [
                    "Affirmitive Action"
                ],
                "announcements": [],
                "clubReference": "bKb5HP3WX0cEoizid9nbuMuYns72",
                "description": "We, the students of University of California at San Diego (UCSD), come together to provide a forum to deal combat the problems and concerns of UCSD Asian and Pacific-Islander (API) students, especially those deemed â€œunderrepresentedâ€ by the Student Affirmative Action Committee (SAAC); to try to create an environment where issues such as those political, educational, cultural and social can be addressed; to increase awareness about our API history and heritage within the university and the community; to unite as a community resource to represent a common voice and thereby empower ourselves; and to serve as a support network for building bonds and addressing differences between students. The Asian and Pacific-Islander Student Alliance is a non-profit organization.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Asian and Pacific Islander Student Alliance (APSA)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8391",
                "contactEmail": ""
            }
        },
        {
            "bPWET8EiQqfycocDzxjDaLyb0iq2": {
                "description": "Alpha Gamma Alpha's Zeta Chapter was established ten years ago at the University of California, San Diego. The sisters of Alpha Gamma Alpha work towards the advancement of Armenian causes, the greater San Diego community and our community here at UCSD. Our mission is to spread and further the Armenian culture and aid in Armenian causes as we guide fellow sisters in academics, life decisions, and social relationships while building life-long ties. For more information on becoming part of Alpha Gamma Alpha's legacy, contact the sisters at ucsdaga@gmail.com or visit us at alphagammaalpha.ucsd.edu",
                "eventList": [],
                "emailList": [],
                "clubName": "Alpha Gamma Alpha",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12070",
                "contactEmail": "",
                "tags": [
                    "Sorority"
                ],
                "announcements": [],
                "clubReference": "bPWET8EiQqfycocDzxjDaLyb0iq2"
            }
        },
        {
            "bjlZisuGYSdhbCRSLk1hZNLiUb43": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9625",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "bjlZisuGYSdhbCRSLk1hZNLiUb43",
                "description": "GCF exists to help academics in the San Diego community on the lifelong journey of understanding and growing closer to God.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Graduate Christian Fellowship"
            }
        },
        {
            "bu7yu4scXybVIOqxBRSjzwBLEEj2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Triton Melee",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12048",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "bu7yu4scXybVIOqxBRSjzwBLEEj2",
                "description": "To expand the community of the game Super Smash Bros: Melee by offering a friendly, interactive, and competitive environment to all student players.",
                "eventList": []
            }
        },
        {
            "c87ExU6aCsbC9adoV6LmDgBZCtD3": {
                "clubReference": "c87ExU6aCsbC9adoV6LmDgBZCtD3",
                "description": "Public Health Brigades at UCSD is a non-profit, student organization that will participate in one international service brigade per academic year. The brigade will be approximately seven to eight days long and will take place during a designated school break. The current country of emphasis for this chapter is Honduras, where the organization provides public health education and infrastructure in collaboration with Sociedad Amigos de los NiÃ±os, a private non-profit organization founded by Sister Maria Rosa Leggol. During the brigade, the purpose of this organization is to improve the overall health and living conditions of families living in various rural Honduran communities through the construction of in-home infrastructure projects. Through these projects, this organizationâ€™s primary mission is to help prevent the spread of contagious diseases and respiratory problems within the communities. In addition, student volunteers will work together to prepare an educational presentation on a given health topic (ie. dental hygiene, etc.) for students in the local community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Public Health Brigades",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12028",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": []
            }
        },
        {
            "cAp04g67vwPS8nlV273LWCgwRew2": {
                "clubReference": "cAp04g67vwPS8nlV273LWCgwRew2",
                "description": "The Hong Kong Cultural Society wishes to promote the unique Hong Kong and Cantonese Culture to UCSD students, while also helping Hong Kong students find a home overseas with fun and open social events and friendly discussions on current events.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Hong Kong Cultural Society",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11948",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": []
            }
        },
        {
            "cV3UVW48BcNp75jmirW8xj5sydw2": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "cV3UVW48BcNp75jmirW8xj5sydw2",
                "description": "Provide Christians on campus with various activities of worship, devotion and prayer.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "House of Prayer at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12035",
                "contactEmail": ""
            }
        },
        {
            "cWmAsYtAT9eAN4ICCeO6W0oW8iJ2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Beta Theta Pi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11917",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "cWmAsYtAT9eAN4ICCeO6W0oW8iJ2",
                "description": "To develop men of principle for a principled life.",
                "eventList": []
            }
        },
        {
            "cXFIw2eY3DczjH5Y74qfxIHwaRI3": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "cXFIw2eY3DczjH5Y74qfxIHwaRI3",
                "description": "UCSD AMSA pre-medical chapter is dedicated to providing valuable resources for pre-medical students here at UCSD, as well as presenting opportunities for involvement in the health-care community. We provide a wide variety of events from networking with physicians to community service opportunities to our annual health fair for an underserved San Diego community as well as socials for our pre-med members.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "American Medical Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8526",
                "contactEmail": ""
            }
        },
        {
            "cl2PUesncha0aC5n9BjFn13Gfi42": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8586",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "cl2PUesncha0aC5n9BjFn13Gfi42",
                "description": "The International Health Collective (or IHC) is a UCSD student-run, non-profit, organization that establishes a temporary free clinic in communities that need medical help around the world in addition to creating other projects to advance their health. Our first and primary goal is to assist underprivileged communities with services and free medical care, as well as providing medicine, and health education to improve the prevalent illnesses seen in underdeveloped communities. Our secondary goal at IHC is to provide undergraduate students with the resources necessary to pursue their interests in health care and beyond. Our experiences include first-hand work in a public medical setting by personally assisting medical professionals as well as community focused project development. They also include seminars in which medical professionals of all specialties speak on personal experiences encountered in their field to help attendees choose which specialty to work toward. The International Health Collectiveâ€™s largest project is a clinic that serves the communities surrounding a temporary site in Tijuana, Mexico, which functions during three Saturdays per school quarter. IHC strives to diagnose, supply medication, and provide health education to members of the Tijuana community with free doctor consultation, pharmacy care, and seminars. To provide these efficiently and effectively, IHC utilizes passionate, interdisciplinary, staff members in addition to comprehensive medical record systems, and an efficient clinic layout.",
                "eventList": [],
                "emailList": [],
                "clubName": "International Health Collective",
                "pictureURL": ""
            }
        },
        {
            "d1d9k0MaDhaUzXHDfIEJ7AOMFja2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "d1d9k0MaDhaUzXHDfIEJ7AOMFja2",
                "description": "The FUSION Hip-Hop Dance Events Association is a student organization involved in the cultural, social, community, and academic projects that benefit its members, its campus, and its community. The goal of FHHDEA is to educate and celebrate the unique Asian American cultural identity and its major presence in the emerging hip-hop dance communities along the west coast at UCSD. FHHDEA aims to recognize excellence in the UCSD hip-hop dance community, west cost dance communities, support dancers, and provide performance opportunities for dance to be shared among dancers and audiences all over the nation and beyond.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "FUSION Hip-Hop Dance Events Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8606",
                "contactEmail": ""
            }
        },
        {
            "d1kBwTSzvkbSX8TiSE76u7wrjvK2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8375",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "d1kBwTSzvkbSX8TiSE76u7wrjvK2",
                "description": "Our purpose is to unify linguistics majors, minors and interested students through scholarly discussion, social activities and faculty interaction. We aim to foster a warm, inviting environment in which to explore academic and occupational opportunities within UCSD Linguistics department and beyond.",
                "eventList": [],
                "emailList": [],
                "clubName": "Linguistics Undergraduate Association (LINGUA)",
                "pictureURL": ""
            }
        },
        {
            "dKj4d3RMZCW4EV3rJvCxy3SlFbc2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "dKj4d3RMZCW4EV3rJvCxy3SlFbc2",
                "description": "The purpose of this Fraternity shall be to foster knowledge of the law for undergraduate students; to provide service to the greater community and campus; to promote a strong sense of fraternalism among members; to uphold the ideals and integrity of Kappa Alpha Pi Pre-Law Co-ed Fraternity; so that each member may advance [their] intellect while contributing actively to the well-being of others.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Kappa Alpha Pi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8409",
                "contactEmail": ""
            }
        },
        {
            "dWkvbsH7jhfxTsWOStXYs4BtFX63": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8381",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "dWkvbsH7jhfxTsWOStXYs4BtFX63",
                "description": "To advance the Gospel of Jesus and His Kingdom into the nations through spiritual generations of laborers living and discipling among the lost.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Navigators"
            }
        },
        {
            "daRTlWgLmzX6uiWOZjIFH50009J3": {
                "description": "The mission of BioEASI is to facilitate the interaction between scientists and the public through outreach, education, and the arts. BioEASI aims to increase public interest and support for basic scientific research and to enhance communication and creative-thinking skills of its graduate student members. BioEASI believes that by achieving these aims, we can help further scientific innovation, recruit the next generation of diverse young people into scientific careers, and increase scientific understanding among the general public.",
                "eventList": [],
                "emailList": [],
                "clubName": "Biology Education and Art for Science Innovation (BioEASI)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12116",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "daRTlWgLmzX6uiWOZjIFH50009J3"
            }
        },
        {
            "dbiozLW3YjX3RPztaQ755Y5qZsl1": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "dbiozLW3YjX3RPztaQ755Y5qZsl1",
                "description": "To promote and encourage chess on campus by creating an intellectually challenging environment by introducing regular chess meetings and tournaments to UCSD.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chess Club at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11995",
                "contactEmail": ""
            }
        },
        {
            "dkts3ERdBadSdGi5CHkXwUumjY02": {
                "description": "To establish and advance a witnessing community of students and faculty who follow Jesus as Lord and Savior: growing in love for God, God's word, God's people of every ethnicity and culture and God's purpose.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Inter Varsity Christian Fellowship",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8463",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "dkts3ERdBadSdGi5CHkXwUumjY02"
            }
        },
        {
            "dmsUw4hDG3XZGn9ApLq2lqwbSkA2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sigma Nu",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8403",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "dmsUw4hDG3XZGn9ApLq2lqwbSkA2",
                "description": "To promote scholastics, a good social environment, philanthropy, sports, and leadership for UCSD students.",
                "eventList": []
            }
        },
        {
            "e0jHQ3jeV6UubAWyG0UjuducE9F3": {
                "description": "The purpose of this organization is to bring together the British student community and others interested in Great Britain together. The organization strives to practice and present British culture through social outings, historical cultural events, and British food.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "British Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11938",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "e0jHQ3jeV6UubAWyG0UjuducE9F3"
            }
        },
        {
            "e9pg2xJHLngJuycp7ASpnkf4dKf1": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "e9pg2xJHLngJuycp7ASpnkf4dKf1",
                "description": "To provide Christian fellowship at UCSD",
                "eventList": [],
                "emailList": [],
                "clubName": "Christians at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8493",
                "contactEmail": ""
            }
        },
        {
            "eBGMgprLiXYicb9a9YXPFRq0vIF3": {
                "tags": [
                    "Computer Science",
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "eBGMgprLiXYicb9a9YXPFRq0vIF3",
                "description": "To foster a community devoted to computing and help students interested in the field develop their technical skills and professional networks.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Association for Computing Machinery (ACM)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8350",
                "contactEmail": ""
            }
        },
        {
            "eNSvSuuwSFe06VVfWm23Wr9Zjx12": {
                "description": "The ASL Club strives to promote the use of American Sign Language while spreading awareness of the culture, history, and perspectives of the Deaf and Hard-of-Hearing community. We seek to enhance the education of UCSD students as well as the surrounding community by conducting meetings and events that bring this community together in an open and safe environment that stimulates learning.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "American Sign Language Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12099",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "eNSvSuuwSFe06VVfWm23Wr9Zjx12"
            }
        },
        {
            "eSgQYui4TSUedC2eUsKpf1u2CLn1": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "eSgQYui4TSUedC2eUsKpf1u2CLn1",
                "description": "To assist Panhellenic Council in overseeing the 11 Panhellenic and 1 Affiliate Chapters within the Panhellenic Council. These chapters are: Alpha Chi Omega, Alpha Epsilon Phi, Alpha Omicron Pi, Alpha Phi, Chi Omega, Delta Delta Delta, Delta Gamma, Kappa Alpha Theta, Kappa Kappa Gamma, Phi Sigma Rho (Affiliate), Pi Beta Phi, and Sigma Kappa.",
                "eventList": [],
                "emailList": [],
                "clubName": "Junior Panhellenic",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8452",
                "contactEmail": ""
            }
        },
        {
            "ecytBPeIWUcSFhEivv6sDQh5RTl2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "ecytBPeIWUcSFhEivv6sDQh5RTl2",
                "description": "The purpose of this organization shall be to provide a not for profit social atmosphere for UCSD students interested in promoting and exhibiting school spirit.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pepitos",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8396",
                "contactEmail": ""
            }
        },
        {
            "erG2Ph0za4ZcBP7r8N2ObXgbFqW2": {
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "erG2Ph0za4ZcBP7r8N2ObXgbFqW2",
                "description": "Ascension was founded in 1999 and embraces the principles of community in order to create a family for our members. As UCSD's longest-running competitive hip hop dance team, we strive to become better than the team we were yesterday by learning from and inspiring one another.",
                "eventList": [],
                "emailList": [],
                "clubName": "Ascension Hip Hop Dance Team",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10687",
                "contactEmail": ""
            }
        },
        {
            "ermkefAaKraS0vSiYJDiofjkToZ2": {
                "clubReference": "ermkefAaKraS0vSiYJDiofjkToZ2",
                "description": "Health Guardians of America is a health nonprofit creating solutions to nationwide healthcare issues. The current national health campaign focuses on the nationwide obesity epidemic as a clinical risk factor for chronic illnesses and diseases such as cerebrovascular, cardiovascular, and diabetes mellitus. FitlifeFlow is our flagship health project that enables a rewards-based health program for consistent exercise per recommendations by the Center for Disease and Control (CDC) and U.S. Surgeon General. It is a personal health pledge to exercise three times per week, with a minimum of 30 minutes per session, over the course of five consecutive weeks. Our Goals 1. Decrease the obesity risk among youth and young adults to preserve longevity and quality of life. 2. Influence the appropriate lifestyle change and develop healthy decision-making at an early age. 3. Educate participants on the importance of sustained health management and self-care. Our mission is to tackle one of the most pressing health issues in America through the development of sustainable public health solutions using modern technologies, the deliverance of effective health education to general population, and the empowerment of student communities to produce positive change.",
                "eventList": [],
                "emailList": [],
                "clubName": "Health Guardians of America",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10693",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": []
            }
        },
        {
            "euZLZPGghFQUCxx7Fbz9TXDhaFj1": {
                "description": "CS foreach is a community outreach, student organization which aims to resolve the problems of equity and access in regards to Computer Science education among the underserved communities of San Diego. In resolving this issue, CS foreach will take an active role to support and initiate efforts to teach Computer Science education and cultivate mentorship between college students and K-12 students.",
                "eventList": [],
                "emailList": [],
                "clubName": "CS foreach",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10818",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "euZLZPGghFQUCxx7Fbz9TXDhaFj1"
            }
        },
        {
            "eyDPSz1XUefoY70rq96KZ98NQST2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10718",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "eyDPSz1XUefoY70rq96KZ98NQST2",
                "description": "The goal of the organization is to construct a relationship between the university and the Imperial County by outreaching students to encourage ongoing education, offer resources and useful workshops for students that show interest in higher education, build a stronger bond between UCSD students that come from the Imperial valley by providing mentorship and retention within ourselves, and to create a wide network within our culture to promote support academically, professionally, and mentally in our college journey. Members will experience a sense of belonging and support within the organization by being able to relate to students with similar backgrounds and gain knowledge from their experiences as well as from the programs offered.",
                "eventList": [],
                "emailList": [],
                "clubName": "Imperial Valley Tritons",
                "pictureURL": ""
            }
        },
        {
            "f9bawnEXswVWWItSFOL3hFhePvB2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "f9bawnEXswVWWItSFOL3hFhePvB2",
                "description": "The purpose of this organization is to educate its members on specific neurodegenerative diseases, their current treatments, and ongoing cutting-edge research for them, as well as inspire members to support these causes through raising money for their institutions, raising awareness at both the high school and college levels, and volunteering.",
                "eventList": [],
                "emailList": [],
                "clubName": "Neurodegenerative Disease Awareness Association (NDAA)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8470",
                "contactEmail": ""
            }
        },
        {
            "fGuZCeuKzFanaRdinM3Hc4gvVP62": {
                "emailList": [],
                "clubName": "Public Health Club at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8564",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "fGuZCeuKzFanaRdinM3Hc4gvVP62",
                "description": "The overarching goal of the Public Health Club is to bring students, staff and faculty with an interest in public health, healthy lifestyles, or community health together. The Public Health Club will serve as an umbrella organization wherein members will be able to explore different areas of interest within the public health field. The Public Health Club will also help members by providing opportunities for volunteerism, health promotion, and internships.",
                "eventList": []
            }
        },
        {
            "fQLeB7D1ioQ5wrtfwWAK84yglt53": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "fQLeB7D1ioQ5wrtfwWAK84yglt53",
                "description": "The Persian American Student Association (PASA) at UCSD intends to unify the undergraduate Persian community on campus in pursuit of a deeper sense of cultural, historical and communal identity. We hope to provide a forum, composed of individuals concerned with Iran and the Iranian diasporas irrelevant of background, where students can critically educate one another through educational, cultural, and social events. We also aim to engage Persian-American students with Persian their roots and culture.",
                "eventList": [],
                "emailList": [],
                "clubName": "Persian American Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10801",
                "contactEmail": ""
            }
        },
        {
            "fc8eN3UusxXIMSQDTrhivQm4Axq2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "fc8eN3UusxXIMSQDTrhivQm4Axq2",
                "description": "To promote and participate in quiz bowl competitions throughout the United States.",
                "eventList": [],
                "emailList": [],
                "clubName": "Quiz Bowl Club at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8577",
                "contactEmail": ""
            }
        },
        {
            "fgSw6fHdvndqh4y03UC95JhYLON2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "fgSw6fHdvndqh4y03UC95JhYLON2",
                "description": "To gather the Sri Lankan student community and those interested in the country of Sri Lanka within UC San Diego. The Sri Lankan Student Association aims to promote Sri Lankan culture and showcase Sri Lankan traditions through several mediums.",
                "eventList": [],
                "emailList": [],
                "clubName": "Sri Lankan Students Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8510",
                "contactEmail": ""
            }
        },
        {
            "fi5wY2L1ReYxSyu5KytxHwrhiA72": {
                "clubReference": "fi5wY2L1ReYxSyu5KytxHwrhiA72",
                "description": "We, Kyrie Eleison at UCSD, are a student-run Catholic ministry that fosters spiritual growth for students seeking faith, identity and fellowship within the Catholic Church.",
                "eventList": [],
                "emailList": [],
                "clubName": "Kyrie Eleison",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8372",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "g0vAywFPlFTekRxKwdeVvcv02P42": {
                "description": "The mission of this organization is to promote the Gospel of Jesus Christ, to promote faith in the Trinity God and His Bible, and to promote love and peace within communities with voluntary services.",
                "eventList": [],
                "emailList": [],
                "clubName": "Glory Church Campus Fellowship",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8366",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "g0vAywFPlFTekRxKwdeVvcv02P42"
            }
        },
        {
            "g3aEjxlP4Tc2z0JdSgGNRpVOzMu1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Hindu Yuva",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11926",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "g3aEjxlP4Tc2z0JdSgGNRpVOzMu1",
                "description": "The purpose of this organization is to promote, preserve, and celebrate the ancient and rich Hindu culture while also giving its members and affiliates a platform to connect and collaborate with the local Hindu community. The organization aims to become a cultural hub for one of the oldest religions in the world, which both basks in the wisdom of ancient traditions and shines with modernity in its approach towards society and the world at large. Hindu Yuva aims to provide support to students throughout their stay in San Diego, from moving in to exploring life in San Diego. By harnessing the inclusiveness of the organization, Hindu Yuva hopes to help the students not just in their academic journey but also in their professional and social development.",
                "eventList": []
            }
        },
        {
            "g76RRrgx6cZ9ixjQRJC716pxgYx2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "g76RRrgx6cZ9ixjQRJC716pxgYx2",
                "description": "Our goal is to increase access to higher education for incarcerated, formerly incarcerated, and system impacted students.",
                "eventList": [],
                "emailList": [],
                "clubName": "Underground Scholars Initiative",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10800",
                "contactEmail": ""
            }
        },
        {
            "gKBwikBZIiU4Tt2HTsaOSjYkx8s2": {
                "emailList": [],
                "clubName": "Planned Parenthood Generation Action at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11931",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "gKBwikBZIiU4Tt2HTsaOSjYkx8s2",
                "description": "PLANNED PARENTHOOD GENERATION ACTION: UCSD exists to educate the community about reproductive health and rights, to translate increased awareness into pro-choice activism on campus and pro-LGBTQ activism, and to serve as a coalition to state, national, and international in both reproductive and LGBTQ rights efforts. PPGA believes in the fundamental right of every individual to manage their own fertility. PPGA supports full access to comprehensive reproductive and complementary health care services in settings that preserve and protect the essential privacy and rights of each individual; advocates public policies that guarantee these rights and ensure access to such services, and supports access to medically accurate educational programs that enhance understanding of human sexuality.",
                "eventList": []
            }
        },
        {
            "gTGgKO1Kp7WYnCDREd5CVuAwXUI3": {
                "description": "The goal of our organization is to create a community of student equities, options, and/or forex traders and allow for the flourishing of new ideas as well as provide any and all helpful information to student traders. We seek to empower students who have little to no information of equities, options, and forex trading and grow their arsenal of trading techniques and analysis abilities. Whether a student is highly skilled and knowledgeable in trading or justs starting out, we will seek to always educate the best trading practices, risk management, and how to deal with emotions in the trading environment.",
                "eventList": [],
                "emailList": [],
                "clubName": "Student Equities Trading Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10695",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "gTGgKO1Kp7WYnCDREd5CVuAwXUI3"
            }
        },
        {
            "gXbejD3rukc6eqx78FfN4tAkdDk2": {
                "emailList": [],
                "clubName": "Pi Alpha Phi",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12017",
                "contactEmail": "",
                "tags": [
                    "Fraternity"
                ],
                "announcements": [],
                "clubReference": "gXbejD3rukc6eqx78FfN4tAkdDk2",
                "description": "Asian American Interest Fraternity",
                "eventList": []
            }
        },
        {
            "gewJNRJfP9QhBA6xVgPfRM9sEQp2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "gewJNRJfP9QhBA6xVgPfRM9sEQp2",
                "description": "The Major Map, in the form of an interactive website, will create an informative framework helping undeclared majors choose the right major, and giving new students a more comprehensive way to understand how their major develops over their undergraduate career. It will also outline real world applications of course material, and share career experience by UCSD alumni to give more insight on a major's purpose. Upon its fruition at UCSD, the goal is to spread this framework to other schools across the country.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Major Map Initiative",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11855",
                "contactEmail": ""
            }
        },
        {
            "hEKniOgOqnZqq9zj2oXKcJn8moy1": {
                "tags": [
                    "Martial Arts"
                ],
                "announcements": [],
                "clubReference": "hEKniOgOqnZqq9zj2oXKcJn8moy1",
                "description": "The primary purpose of the Wushu Club is to provide any individual with the opportunity to be introduced to and learn wushu in a friendly and safe environment. The secondary purpose of the club is to prepare members for intercollegiate competitions such as the Annual Collegiate Wushu Tournament. The Wushu Club at UCSD is a non-profit student organization.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Wushu club @ UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8365",
                "contactEmail": ""
            }
        },
        {
            "hGfAKc0fFgTaCBVqzKOcB0zhUiK2": {
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "hGfAKc0fFgTaCBVqzKOcB0zhUiK2",
                "description": "The purpose of this body shall be to govern the member fraternities, to promote intellectual, philanthropic, fraternal and social values of the fraternities at the University of California, San Diego, and to maintain cooperation between these fraternities, their respective international headquarters, alumni, and the surrounding community.",
                "eventList": [],
                "emailList": [],
                "clubName": "Interfraternity Council",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10741",
                "contactEmail": ""
            }
        },
        {
            "hNywrMb0FsZvjjfbmsbdrnn02BK2": {
                "emailList": [],
                "clubName": "Lambda Theta Phi Latin Fraternity Inc.",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10730",
                "contactEmail": "",
                "tags": [
                    "Fraternity"
                ],
                "announcements": [],
                "clubReference": "hNywrMb0FsZvjjfbmsbdrnn02BK2",
                "description": "We aim to create a bridge between diversity and scholarship by fostering a space for men to share their diverse ideas and opinions while creating a strong brotherhood and serving our communities. We will work towards cultivating campus leaders and embrace all of the differences on campus. The Brothers of Lambda Theta Phi Latin Fraternity Inc. will invite and accept men from different ethnic backgrounds in order to improve our political consciousness, unify different ethnic groups, challenge our views, and grow as individuals.",
                "eventList": []
            }
        },
        {
            "hTHOXzX8iLh6mGYoBCr8BXFK5Lr2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "hTHOXzX8iLh6mGYoBCr8BXFK5Lr2",
                "description": "To assist and serve aspiring business leaders by bridging the gap between faith, community, and business opportunities through connections.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Cornerstone Community Consultants",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8488",
                "contactEmail": ""
            }
        },
        {
            "hdJxg5m1lddNbAtRI7M8yfcZRI33": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "hdJxg5m1lddNbAtRI7M8yfcZRI33",
                "description": "The purpose of this organization is to provide a safe space for students who are seeking to learn more about Christianity and for those who want to grow in their faith. We gather weekly to study the Bible and enjoy a time of fellowship with one another.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "MakeNew",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10650",
                "contactEmail": ""
            }
        },
        {
            "hkxEupxYRse3nTNZNnAPA4ETEYI2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10679",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "hkxEupxYRse3nTNZNnAPA4ETEYI2",
                "description": "SUMS provides resources, workshops, talks, and social events for UCSDâ€™s mathematics community with the goal of promoting mathematics and related fields.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Society of Undergraduate Mathematics Students (SUMS)"
            }
        },
        {
            "ht4PjQYbz0UByYXbMjaaLI4IaDw1": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "ht4PjQYbz0UByYXbMjaaLI4IaDw1",
                "description": "Re:make is an undergraduate design organization that serves to rethink physical and digital design for students. Through organizing design projects, re:make provides opportunities and experiences for UCSD students to apply the theoretical design knowledge learned in classes, while at the same time gaining industry-relevant skills like parametric surface modelling, rendering, design thinking, storyboarding, and wireframing.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "re:make at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10838",
                "contactEmail": ""
            }
        },
        {
            "hu232PfF5CTliUIL1EYUtFZjaPU2": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "hu232PfF5CTliUIL1EYUtFZjaPU2",
                "description": "Hermanas Unidas reaches out to the Chicanx/Latinx community and provides resources as well as a network. Our three pillars are: Academics-Through the emphasis of academics not only do we empower our minds but our future as well. Community Service- In the struggle to empower ourselves we remember our communities and empower them as well. Collegial Networking- In stressing Hermandad, a family network is created to foster an environment of mutual respect and unity, while supporting individual interests and talents. The group provides a place where women can come together and be themselves. We accept any and all ideologies. We are a network attempting to provide a healthy transition to and from the university. Hermanas Unidas raises awareness and educates the campus and the community at large about Chicanx/Latinx issues.",
                "eventList": [],
                "emailList": [],
                "clubName": "Hermanas Unidas de UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8541",
                "contactEmail": ""
            }
        },
        {
            "i0opiOJe8XWiKRMPVCpaJuwysXr1": {
                "tags": [
                    "Fraternity"
                ],
                "announcements": [],
                "clubReference": "i0opiOJe8XWiKRMPVCpaJuwysXr1",
                "description": "1) To develop dignified and purposeful social, service, and recreational activities for all men, irrespective of sexual orientation or gender expression. 2) To lead in determining the rights and privileges of individuals in society. 3) To present a strong and positive image which respects the diversity of all individuals.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Delta Lambda Phi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8402",
                "contactEmail": ""
            }
        },
        {
            "ig17kFFRX0avA35cRgPrrXIVmJV2": {
                "emailList": [],
                "clubName": "Food Recovery Network at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8422",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "ig17kFFRX0avA35cRgPrrXIVmJV2",
                "description": "Food Recovery Network at UCSD aims to divert food waste and feed those facing food security at UC San Diego and in the greater San Diego community. We create partnerships with food donors on and off campus to run weekly recoveries. We deliver to organizations that help those in need like the Triton Food Pantry, The Hub, and Urban Street Angels. Through our efforts and activism, we help break the cycle of food waste and hunger and educate the community on how to build a more sustainable food system.",
                "eventList": []
            }
        },
        {
            "jB74wDS9dgaMEvRF8JehvQG45sW2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "jB74wDS9dgaMEvRF8JehvQG45sW2",
                "description": "To create business leaders in the UCSD community by engaging students in the consulting sector, by providing them with real-life applications and professional development.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Consulting Group",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9596",
                "contactEmail": ""
            }
        },
        {
            "jEAUbySYOiWtv0OwLqJdNeS0LAs2": {
                "tags": [],
                "announcements": [],
                "clubReference": "jEAUbySYOiWtv0OwLqJdNeS0LAs2",
                "description": "A persistent issue in economics has been the low representation of women and minorities in the profession. WAMIE (Women and Minorities in Economics) is dedicated to supporting all UC San Diego undergraduates, with a particular focus on the issues facing women and other underrepresented groups. We strive to create a supportive community where challenges are discussed, and innovative solutions are created. By giving students a closer connection to faculty, alumni, guest speakers, and researchers, and by making students aware of numerous opportunities in the department and in the profession, we hope to better equip students with the tools they need to succeed at UC San Diego and beyond. We welcome all students as part of this organization, and believe that our mission is enriched by considering diverse perspectives.",
                "eventList": [],
                "emailList": [],
                "clubName": "Women and Minorities in Economics (WAMIE)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9626",
                "contactEmail": ""
            }
        },
        {
            "jUihczbfO4W7w8sq5mMa6wmF1e13": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "jUihczbfO4W7w8sq5mMa6wmF1e13",
                "description": "To unify and empower the Korean American voice on campus by means of cultural, political, and social events.",
                "eventList": [],
                "emailList": [],
                "clubName": "Korean American Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8587",
                "contactEmail": ""
            }
        },
        {
            "jahN8yx1BxdTqJ4FTp9NB1SeDsx2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "jahN8yx1BxdTqJ4FTp9NB1SeDsx2",
                "description": "1. To educate students in Engineering, Visual Arts, design, and manufacturing processes. 2. To support the Envision Maker Studio and other UCSD maker studios working directly with Envision Maker Studio in their goals to provide students with an environment to connect theory with practice. 3. To provide a forum for the discussion and exchange of ideas related to Engineering, Visual Arts, and the development of the maker studios. 4. To provide a platform of integration for non-arts or engineering students to learn and work within maker spaces. This group offers a means of access to Envision Maker spaces to non-majors.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Envisionaries",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11946",
                "contactEmail": ""
            }
        },
        {
            "jifl9YF6VGMl2qIcXiAISuajFRC3": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "jifl9YF6VGMl2qIcXiAISuajFRC3",
                "description": "Sitaare is UCSD's premier South Asian fusion A Cappella team. Since our inception in 2006, Sitaare has taken pride in its diverse vocal talent, continuing to explore ways to showcase variety and creativity in our repertoire. We enjoy performing various genres of both Indian and Western music, from Bollywood and Indian classical, to R&B and pop. In addition to competing in the Desi A Cappella circuit in prestigious competitions at Berkeley, Los Angeles, Dallas, Boston etc and the national All American Awaaz championship in Chicago, as well as UCSDâ€™s annual cultural events, Sitaare has also had the opportunity to perform at community events, weddings, and corporate events in San Diego, the Bay Area, and beyond. Sitaare always looks to push the boundaries of Desi a cappella, and reach for the stars.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sitaare",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8557",
                "contactEmail": ""
            }
        },
        {
            "jtkxrmFAE0giIDD1PqCsiZ6rpYu1": {
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "jtkxrmFAE0giIDD1PqCsiZ6rpYu1",
                "description": "To promote awareness of Sikhism and inform others of its principles while building a close knit community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Sikh Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11907",
                "contactEmail": ""
            }
        },
        {
            "jzXHWrjnkieUb7TFuVYykRIR43Q2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8604",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "jzXHWrjnkieUb7TFuVYykRIR43Q2",
                "description": "To provide underserved public schools (K-12) in San Diego County with interactive and educational activities/presentations about neuroscience in order to foster an interest in higher education and STEM.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Interaxon at UCSD"
            }
        },
        {
            "k1dSNkwcxSdGN9irzIjKQ9czijJ3": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Business Council",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10659",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "k1dSNkwcxSdGN9irzIjKQ9czijJ3",
                "description": "Business Council is organized to foster an integrated business community between student organizations, administrative bodies, and outside parties.",
                "eventList": []
            }
        },
        {
            "kB32mxoWCOUNMbp3tO5NtvhWl0X2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8500",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "kB32mxoWCOUNMbp3tO5NtvhWl0X2",
                "description": "We compete in the Intercollegiate circuit throughout the school year. One of our main goals is to qualify for Intercollegiate Nationals as a team. Each skater performs individually in the level and event of their choosing and the points they earn from podium placement get added to the UCSD cumulative team score. Intercollegiate competitions are a great place to have a fun time and meet skaters from other schools throughout the country. Our team is tight knit on and off the ice. Practices are largely self scheduled figure skating is a sport driven by individual motivation to improve. However, members often carpool to practice help one another with jumps, spins, and choreography.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Figure Skating @ UCSD"
            }
        },
        {
            "kKPEjrIZv5U8QvuSwG4RS28vpZv1": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "kKPEjrIZv5U8QvuSwG4RS28vpZv1",
                "description": "To foster a community among the various a cappella groups at UC San Diego, and to facilitate the organization of concerts and events, especially during the audition season, which involve multiple groups. Triton A Cappella Community is a non-profit student organization.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Triton A Cappella Community",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10839",
                "contactEmail": ""
            }
        },
        {
            "kVy3ayQEhjSWheH6Q5uxgW0hIIZ2": {
                "emailList": [],
                "clubName": "Ratio Christi at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12020",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "kVy3ayQEhjSWheH6Q5uxgW0hIIZ2",
                "description": "Meetings consist of moderated discussions about \"life, the universe, and everything\" All are welcome. Attendees are from a wide variety of religious and philosophical perspectives. Please contact us if you are interested in participating. Ratio Christi is focused on bringing sound Christian apologetics to the campus through weekly meetings and special events. Meetings providing a safe and charitable venue for atheists, agnostics, skeptics, and adherents to any religion to investigate the claims of Christianity, discuss religious beliefs, and seek truth without fearing reprisal while forming friendships. Yes, this is a distinctly Christian organization, but any student is able to become a member and learn, debate, and explore the connection of faith and reason. Please join this effort.",
                "eventList": []
            }
        },
        {
            "kdlFnduai7cpibpgIzifajsK1tB3": {
                "emailList": [],
                "clubName": "Alpha Epsilon Phi",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9636",
                "contactEmail": "",
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "kdlFnduai7cpibpgIzifajsK1tB3",
                "description": "To establish and maintain sisterhood of college/university women for social, educational, charitable and other non-profit purposes while taking pride in our Jewish founding.",
                "eventList": []
            }
        },
        {
            "ke4aGLIWteOq840rm7x5fmYMiKy1": {
                "clubReference": "ke4aGLIWteOq840rm7x5fmYMiKy1",
                "description": "The purpose of Sigma Alpha Zeta Sorority, Incorporated shall be to act as an elite multicultural group who promotes the upward mobility of women and enhances the community by means of education and voluntary services.",
                "eventList": [],
                "emailList": [],
                "clubName": "Sigma Alpha Zeta",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11944",
                "contactEmail": "",
                "tags": [
                    "Sorority"
                ],
                "announcements": []
            }
        },
        {
            "ky5fu51uNqbmFLVGkQuHVdsgnAt2": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "ky5fu51uNqbmFLVGkQuHVdsgnAt2",
                "description": "We are students, alumni, faculty and staff at UCSD, as well as young adults and residents of the surrounding area who celebrate life together as the Catholic Community at UCSD. We feel at home in this community and are free to experience Christ's presence in the Word, in the Eucharist and in each other. Hospitality and welcome are hallmarks of our community. We are passionate about living the Gospel in the context of our Catholic faith.",
                "eventList": [],
                "emailList": [],
                "clubName": "Catholic Student Community (CSC)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9614",
                "contactEmail": ""
            }
        },
        {
            "kyJpZWoirQNHgPfxFgOu68kO4Wf2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Hong Kong Student Union",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8546",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "kyJpZWoirQNHgPfxFgOu68kO4Wf2",
                "description": "The goal of the organization is to create a platform to fuse the traditional Chinese culture with the new-fangled Western ideals. Our vision is to promote the welfare of the Cantonese-speaking Chinese student body. We also identify the student body with social issues in the interests of Hong Kong people in hopes to promote cultural awareness of Hong Kong. We also provide a social environment for those who want to stay in touch with the Chinese culture as well as those who want to find acceptance and sense of belonging in the States.",
                "eventList": []
            }
        },
        {
            "kzfCXDqC5eZXjMCsz0YE4NeRLC32": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "kzfCXDqC5eZXjMCsz0YE4NeRLC32",
                "description": "Tabitha is a sustainable non-profit organization seeking to improve the lives of impoverished families in Cambodia. The organization will seek to fundraise for multiple of Tabitha's ongoing projects such as its savings program, construction of new women's hospital, establishing accessible water and housebuilding. The foundation also seeks to implement an international volunteer connection between students in California and South East Asia. Tabitha is an educational experience for both ends involved benefiting the students that engage with the foundations as well as the people in Cambodia.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Tabitha",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8560",
                "contactEmail": ""
            }
        },
        {
            "lHoCJTuSGmPZXcE68ARXvKEQoM93": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Che Cafe",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10813",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "lHoCJTuSGmPZXcE68ARXvKEQoM93",
                "description": "The Che Cafe is a community space for both the greater San Diego community and the University of California, San Diego. We identify this space as \"Do It Yourself\" venue, vegan cafe, resource center for radical grassroots activists. Furthermore, we open this space to people who would like to add to the space while at the same time dismantle hierarchies. The Che Cafe Collective organizes numerous political and social events for all ages and allows vegan groups to serve tasty vegan food.",
                "eventList": []
            }
        },
        {
            "lTvTlVTNBWZa6QGVWe6n05xoqec2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "lTvTlVTNBWZa6QGVWe6n05xoqec2",
                "description": "To provide additional educational resources to Pre-Dental students through our general body meetings, special speaker series, and student run free clinics.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pre-Dental Society/Free Dental Clinic at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8428",
                "contactEmail": ""
            }
        },
        {
            "lUkdr8iG2wclmbVubKwZ2HkHKFT2": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "lUkdr8iG2wclmbVubKwZ2HkHKFT2",
                "description": "IMEM reaches out to young, aspiring musicians to promote musicianship through tutoring for music performance and theory. We hope to foster musical appreciation in those who want exposure and do not have ready access to music resources, as well as enrich music programs in underserved populations. IMEM volunteers will work with these young musicians and provide mentorship to these students. Ultimately, we wish to strengthen the musical community and inspire more students to develop a stronger passion for music.",
                "eventList": [],
                "emailList": [],
                "clubName": "Initiative for Music Education and Mentorship (IMEM)",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8447",
                "contactEmail": ""
            }
        },
        {
            "lYGb3QjANcNTczomo3NOvH19LG23": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "lYGb3QjANcNTczomo3NOvH19LG23",
                "description": "Healing Hands at UCSD aims to improve the access to healthcare in the homeless and underserved communities and to provide students opportunities with hands-on medical related events around San Diego; to inspire and help teach the medically underserved how to advocate for mental health and medical services. The ultimate goal is to create an environment of learning and awareness in our members in order to build a bridge of understanding and assistance towards the homeless and at-risk population.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Healing Hands at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8584",
                "contactEmail": ""
            }
        },
        {
            "lwOxp7Sza5eIQ258lHAPPaaxcEO2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "lwOxp7Sza5eIQ258lHAPPaaxcEO2",
                "description": "Eta Omega Chi is the first East Asian Entrepreneurship Fraternity organized to pursue the spirit of entrepreneurship; to share and consolidate resources among students; to encourage each innovative idea as well as leadership, and to further a higher standard of cultural and professional value in order to serve the community. During our pledging process, a wide range of topics and workshops about entrepreneurship will be taught to the pledges such as the how to give an elevator pitch, resume building, and how to write a business plan. We also will share a lot of resources for academic purpose and equip our brother with strong leadership.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Eta Omega Chi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10692",
                "contactEmail": ""
            }
        },
        {
            "m5KVUhDm8NWl7cJ5UJJlMwqjfR93": {
                "clubReference": "m5KVUhDm8NWl7cJ5UJJlMwqjfR93",
                "description": "To provide a venue for origami enthusiasts to fold and share their passion with others and to introduce beginners to the traditional Japanese art and its applications in math and engineering.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Origami Folders at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8472",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": []
            }
        },
        {
            "m8PCZRrPR8QnOiLGmTCZ9a4r1Yl2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "m8PCZRrPR8QnOiLGmTCZ9a4r1Yl2",
                "description": "Officially affiliated with the international Themed Entertainment Association, TEA at UCSD is a club for aspiring theme park designers, engineers, and creators. Providing experience with industry-based, hands-on projects and events that canâ€™t be found anywhere else at UCSD, members graduate prepared to work in the top businesses that create the magical and adventurous experiences we all remember, cherish, and love.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Themed Entertainment Association @ UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8385",
                "contactEmail": ""
            }
        },
        {
            "mQGJSW7QqjhjFxg9ve5Yq84yy8h1": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "mQGJSW7QqjhjFxg9ve5Yq84yy8h1",
                "description": "To invite Korean American college students to worship.",
                "eventList": [],
                "emailList": [],
                "clubName": "Hanbit Church",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9644",
                "contactEmail": ""
            }
        },
        {
            "mZ1wKk2LcPcAiaP7GJiF4w7bwKS2": {
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "mZ1wKk2LcPcAiaP7GJiF4w7bwKS2",
                "description": "Our Mission is to establish a Muslim Network as well as a Brotherhood dedicated to not only improving ourselves but our communities. We hope to develop each and every brother into a community leader who will go back and help out their communities when they graduate and leave us. Above all, our mission is to better ourselves as People, for we are the future and if we ever want the future to be brighter, we must enlighten ourselves first. The following are excerpts from the Official Alif Laam Meem facebook page: The Alpha Lambda Mu National Muslim Fraternity has been founded upon and promises to strive to promote among its members: An everlasting bond between brothers as they lead their communities in service. Religious, academic, and extracurricular successes that benefit the individual, the family, and the community. To build and develop integrity, honesty, respect, and the highest character among each member within the Alpha Lambda Mu National Muslim Fraternity.",
                "eventList": [],
                "emailList": [],
                "clubName": "Alpha Lambda Mu",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12036",
                "contactEmail": ""
            }
        },
        {
            "mexxMJvRfdbZxzApWTddzYOHltL2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "mexxMJvRfdbZxzApWTddzYOHltL2",
                "description": "To encourage networking among the gaming community and introduce the UCSD community to role-playing games.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Role Playing Games Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8462",
                "contactEmail": ""
            }
        },
        {
            "mgYwijzngtWSlvRgpdSOddZmP233": {
                "clubReference": "mgYwijzngtWSlvRgpdSOddZmP233",
                "description": "THE PURPOSE OF DELTA DELTA DELTA shall be to establish a perpetual bond of friendship among its members, to develop a stronger and more womanly character, to broaden the moral and intellectual life, and to assist its members in every possible way. IT SHALL ALSO BE THE PURPOSE OF DELTA DELTA DELTA to promote and develop mutually beneficial relationships between the Fraternity and the colleges and universities where the Fraternity has established chapters, to develop qualities of unselfish leadership among its members, and to encourage them to assume, with integrity and devotion to moral and democratic principles, the highest responsibilities of college women.",
                "eventList": [],
                "emailList": [],
                "clubName": "Delta Delta Delta",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8562",
                "contactEmail": "",
                "tags": [
                    "Panhellenic"
                ],
                "announcements": []
            }
        },
        {
            "mm0W9IZb9ZSgmkUhIzgz8ISkhvc2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Atutu",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11971",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "mm0W9IZb9ZSgmkUhIzgz8ISkhvc2",
                "description": "Atutu is a student organization focused on co-creating projects in tandem with communities in developing nations. We seek to work with local communities in co-designing and implementing solutions to topics our partner communities have identified as important.",
                "eventList": []
            }
        },
        {
            "mwLQARxNnHMCDhKEDwH04hZH6ee2": {
                "clubReference": "mwLQARxNnHMCDhKEDwH04hZH6ee2",
                "description": "Our club seeks to provide both a recreational, social, and competitive community for players of the game League of Legends within UCSD and the greater San Diego area. By providing an environment of social interaction, friendly competition, and in-game support, we seek to give all of our members a positive gaming experience and the competitive drive to succeed in any gaming or non-gaming endeavor.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "League of Tritons",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8482",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": []
            }
        },
        {
            "mwyrm7YA2thgfmm7MEVfHpRNQhF2": {
                "emailList": [],
                "clubName": "4Corners Christian Fellowship at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8348",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "mwyrm7YA2thgfmm7MEVfHpRNQhF2",
                "description": "The purpose of this organization is to provide all students, but in particular international students, the opportunity to learn about Christianity through studying the Bible and participating in Christian fellowship.",
                "eventList": []
            }
        },
        {
            "n4xZsApxCQQ0Jt2vP3rDX5XdpPY2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Motorcycle Club at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8476",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "n4xZsApxCQQ0Jt2vP3rDX5XdpPY2",
                "description": "The Motorcycle Club, also known as Redliners@UCSD, is a social group for motorcycle riders and enthusiasts to discuss motorcycles and safe riding practices as well as organize group bonding events / rides.",
                "eventList": []
            }
        },
        {
            "nAoLmHcw33d6NVOHJjsoLoRHku22": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11868",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "nAoLmHcw33d6NVOHJjsoLoRHku22",
                "description": "We, the founding fathers of the Chi Lambda Chapter of UCSD will endeavor to provide an opportunity for friendship, scholarship and service to our members now and in the future. We seek excellence. We believe that the Phi Gamma Delta Chapter we bring back to UCSD must take into account the unique circumstances of our university and our student body. In order to be successful we must adapt our program to be in harmony with other campus constituencies, such as our student athletes and student leaders.",
                "eventList": [],
                "emailList": [],
                "clubName": "Phi Gamma Delta",
                "pictureURL": ""
            }
        },
        {
            "naaypgMuUkRGgLryXgGXo9j6XwE2": {
                "clubReference": "naaypgMuUkRGgLryXgGXo9j6XwE2",
                "description": "We are part of a local church called Redeemer's Grace Church of San Diego. We seek to proclaim the gospel of Jesus Christ and one of our ministries is to the college campus of UCSD.",
                "eventList": [],
                "emailList": [],
                "clubName": "Redeemers Grace Church",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8420",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "ntSJQrVo4qecI5MEbhARfRcR0Dt2": {
                "emailList": [],
                "clubName": "Saltman Quarterly",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8479",
                "contactEmail": "",
                "tags": [
                    "Media"
                ],
                "announcements": [],
                "clubReference": "ntSJQrVo4qecI5MEbhARfRcR0Dt2",
                "description": "The purpose of \"Saltman Quarterly\" (SQ) is to provide a medium for undergraduate students at UCSD to publish biological research as well as communicate new advances in the field of biology, encompassing topics ranging from medicine to ecology. SQ also provides authors and staff members with the skills needed to communicate science effectively to both biology and non-biology majors.",
                "eventList": []
            }
        },
        {
            "nyPlZRPUFKQOTkXEtYyVkyhdBcu1": {
                "emailList": [],
                "clubName": "Young Democratic Socialists of America at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12038",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "nyPlZRPUFKQOTkXEtYyVkyhdBcu1",
                "description": "Our mission is to educate and organize students and young people and to play a helpful and principled role in the movement for social justice. Within and throughout this struggle, we will articulate and defend the idea that true human liberation is impossible under capitalism. We seek social change which extends democracy into all aspects of life -- social, political and economic. This is the struggle for democratic socialism. Our vision of socialism is profoundly democratic, feminist, and anti-racist.",
                "eventList": []
            }
        },
        {
            "o2U32rcbCrc88LB3dxAW8kAQ3aX2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "o2U32rcbCrc88LB3dxAW8kAQ3aX2",
                "description": "The Grad Pals Program is a graduate student buddy program which aims to help new students settle in quicker, give them the opportunity to ask questions, provide them with support during the first few weeks and ease the transition into their graduate life at UCSD.",
                "eventList": [],
                "emailList": [],
                "clubName": "Grad Pals Program",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10810",
                "contactEmail": ""
            }
        },
        {
            "oN35MKDBVmYp90H8vsZEEVNMpel2": {
                "emailList": [],
                "clubName": "Chicanx/Latinx For Community Medicine",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10664",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "oN35MKDBVmYp90H8vsZEEVNMpel2",
                "description": "We are a pre-health undergraduate organization that is committed to providing support, guidance, and education in our pursuit for higher education in medicine. Our beliefs are deeply rooted in providing better health care for our underserved communities through service and empowerment.",
                "eventList": []
            }
        },
        {
            "oTubxwJqf9aMSEQ1VGMT2VkQETB3": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11973",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "oTubxwJqf9aMSEQ1VGMT2VkQETB3",
                "description": "The purpose of this cultural organization shall be to introduce Malaysian culture to all UCSD students as well as facilitate events for Malaysians students studying at UCSD; Facilitate events such as but not limited to: a. An organization aimed at encouraging conversation and bonding with new incoming Malaysian students and returning Malaysian students, b. Provide a sense of home for Malaysians studying abroad at UCSD, c. For Malaysian students who seek it, assistance with assimilation in American culture, d. Arrange events to introduce Malaysian culture and customs to other UCSD students (food, games, and traditional celebrations), e. Collaborate with other Malaysian Student Associations around the United States of America to form academic, social, and professional relationships; Malaysians in America (MIA) at UCSD is a non-profit student run cultural organization that will be financed through: a. Associated Students funding, b. External donations and charity, c. MIA fundraisers;",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Malaysians in America at UCSD"
            }
        },
        {
            "oZz2CjhBUfaaQDLG5K0sYZUUfZc2": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "oZz2CjhBUfaaQDLG5K0sYZUUfZc2",
                "description": "This is a local community for osu! players in and around UC San Diego. This club was founded to create connections with other osu! players and to promote our own niche culture, encourages socializing with fellow players, sharing accomplishments, and raising the fun and competitive nature of osu!. osu! is a music rhythm game. It's a difficult, fun, and addicting game that can be played with anything from mouse, tablet, to touchscreen and, if you're crazy enough, trackpad. Test your hand-eye coordination as you play osu!'s thousands of beatmaps.",
                "eventList": [],
                "emailList": [],
                "clubName": "osu! at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8468",
                "contactEmail": ""
            }
        },
        {
            "ovUUlrnOUNPWUJBrcGngV4qxlXx2": {
                "tags": [
                    "Affirmitive Action"
                ],
                "announcements": [],
                "clubReference": "ovUUlrnOUNPWUJBrcGngV4qxlXx2",
                "description": "Queer and Trans* People of Color (QT*POC) at UCSD was established in 2000 by a group of Queer students of Color FED UP with racism in the queer community, and with homophobia and transphobia within cultural organizations. With this, at the core of QT*POC are our commitments to struggle and our commitments to activism. We recognize the intersections of our multiple, beautiful, and sometimes confusing identities, as well as the related intersections of social justice movements. We create a SPACE--a social, political, academic, and cultural environment--to enhance our members' entire self-being and holistic wellness.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Queer and Trans* People of Color (QT*POC) at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12003",
                "contactEmail": ""
            }
        },
        {
            "pKuwGhxU89Psewk5kielx5N7JCn1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "PARSA",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10729",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "pKuwGhxU89Psewk5kielx5N7JCn1",
                "description": "The Persian Association for Rendering Science and Art (PARSA) at UCSD is a non-profit organization and independent of any political or religious beliefs. Activities of PARSA includes following purposes: I. Increase the general public awareness regarding Persian Art and Science II. Promote the Iranian/Iranian-American young and senior scientists and artists III. Bring Iranian/Iranian-American Scientist and Artist on-campus towards fostering young talents and show casing for general awareness.",
                "eventList": []
            }
        },
        {
            "pUgt9ieFkzcTndiWDMlRG98wD1n2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Students for Global Health",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8530",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "pUgt9ieFkzcTndiWDMlRG98wD1n2",
                "description": "Our purpose is to promote global health undergraduate student collaboration by striving to advance studentâ€™s knowledge, opportunities, and careers in the field. We uphold an interdisciplinary alliance with diverse majors, staff, faculty, and organizations around the globe. We also promote and educate members of our club and school on illness, health, and healing, through perspectives that transcend national borders and regional interests.",
                "eventList": []
            }
        },
        {
            "pXxsDLuhPPNobv6U7kNAQcwqzjA2": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "pXxsDLuhPPNobv6U7kNAQcwqzjA2",
                "description": "Phi Sigma Rho is a social sorority for women in engineering and engineering technology. Through Phi Sigma Rho, our sisters develop the highest standard of personal integrity, strive for academic excellence, and build friendships that will last a lifetime.",
                "eventList": [],
                "emailList": [],
                "clubName": "Phi Sigma Rho",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11981",
                "contactEmail": ""
            }
        },
        {
            "pazx5DPdLCcT6XlLcNXuW59AN7Q2": {
                "description": "The Taiwanese American Students Association (TASA) at the University of California â€“ San Diego is an organization that provides a sense of community for Taiwanese Americans, as well as those interested in the Taiwanese culture. We create a sense of unity not only within the Taiwanese community here in San Diego but also with students at other universities. Our organization promotes cultural awareness by building a community of motivated and dedicated students through our social, cultural, and service activities that take place throughout the year. The Taiwanese-American identity is a vastly varied one and at times a divisive issue. Moreover, there is political and cultural apathy among much Taiwanese, and under-representation in our communities. Yet, from those who barely identify themselves as Taiwanese, to those who feel passionately about Taiwanese culture, they are all still unified under a common background. Those with the Taiwanese-American identity have the potential to develop into a tight-knit community and strong leaders with a unified voice in this nation.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Taiwanese American Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8490",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "pazx5DPdLCcT6XlLcNXuW59AN7Q2"
            }
        },
        {
            "pbJSjzoF9oSO0iCPvMZVh5ZNS8g2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8346",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "pbJSjzoF9oSO0iCPvMZVh5ZNS8g2",
                "description": "The purpose of The Lab is to unite the dance community at UCSD through fellowship. We seek to give the dance community the space and means to communicate and collaborate with other dancers, including those in the greater San Diego dance community. Anyone committed to fostering the camaraderie of our campus community through a mutual love of dance is welcome. Our goal is to create a safe space for dancers, regardless of team affiliation, to practice their craft and share it with others. Achievement of this goal will be supplemented by official community hosted events, including but not limited to: performance opportunities, competition opportunities, bonding and publicity events, etc.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Lab, The"
            }
        },
        {
            "pc1gMxUvIwf7NuOFTPwyt9XkNX63": {
                "clubReference": "pc1gMxUvIwf7NuOFTPwyt9XkNX63",
                "description": "To provide a church-sponsored Bible teaching Christian organization for students on-campus.",
                "eventList": [],
                "emailList": [],
                "clubName": "Lighthouse College Life",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10774",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "phuT9APLqSRsT4yuIcIbEz59vZz2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "phuT9APLqSRsT4yuIcIbEz59vZz2",
                "description": "We are committed to promoting the academic and professional success of collegiate women pursuing their degrees in the sciences, educating them on their career and extracurricular options and motivating them to complete their undergraduate coursework and enter the STEM workforce.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Women in Science Society",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10727",
                "contactEmail": ""
            }
        },
        {
            "poc39TW6tjZiJNOEDj2uMQ385f92": {
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "poc39TW6tjZiJNOEDj2uMQ385f92",
                "description": "AMCP at UCSD is an organization that aims to promote sound managed care pharmacy principles through education and professional development of its student pharmacist members and to encourage the education and support the advancement of managed care pharmacy. The purpose of the organization is to enhance the common academic and professional interests of the Chapter members, offer professional opportunities and leadership within managed care pharmacy, and establish, develop, promote, and conduct educational programs relating to and improving health, especially as it relates to the delivery of pharmacy services through managed care pharmacy.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Academy of Managed Care Pharmacy (AMCP at UCSD)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11935",
                "contactEmail": ""
            }
        },
        {
            "pvS2zg2oFCh52I962wlaG2J1jIE2": {
                "tags": [
                    "Martial Arts"
                ],
                "announcements": [],
                "clubReference": "pvS2zg2oFCh52I962wlaG2J1jIE2",
                "description": "The purpose of the Tae Kwon Do Club at UCSD is to provide a means through which members can practice and learn the art of Olympic Style Taekwondo in a fun and safe manner. The Club is part of an established intercollegiate organization (National Collegiate Taekwondo Association) and intercollegiate leagues (SoCal, PacWest), with goals of competing intercollegiately. The Club is also dedicated to building a community supporting health and fitness, as well as practicing teamwork, leadership, and sportsmanship.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tae Kwon Do Club at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8603",
                "contactEmail": ""
            }
        },
        {
            "q6XEY311umRrTecqV7XroC73qyO2": {
                "description": "Specific goals for this chapter are to 1. build community for women in mathematics, 2. provide mentorship for UCSDâ€™s women in mathematics, 3. attract more diverse candidates to our graduate programs, and 4. create and maintain connections with other chapters of AWM. We believe achieving our goals will directly and positively impact our ability to support, retain, and attract talented women in our mathematics programs.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Association for Women in Mathematics",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11922",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "q6XEY311umRrTecqV7XroC73qyO2"
            }
        },
        {
            "qEyIC2KIlvQnMAQvXsrEZ7nDhf43": {
                "tags": [],
                "announcements": [],
                "clubReference": "qEyIC2KIlvQnMAQvXsrEZ7nDhf43",
                "description": "The objective of GradWIC shall be twofold. First, to foster an innovative, informative, and comfortable environment to advance the interests of and address the concerns of graduate students, primarily those who identify as women and underrepresented minorities in computing fields. Second, to provide general resources as well as an inclusive environment to graduate students in any computing-related field (ie. Computer Science and Engineering, BioInformatics, Cognitive Science, etc.) at the University of California, San Diego.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "GradWIC",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10724",
                "contactEmail": ""
            }
        },
        {
            "qNnRFJ7ypEMGelgeDvwpkZD7Ydz1": {
                "description": "To provide Red Cross related activities and service opportunities to the UCSD student body.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Red Cross at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8395",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "qNnRFJ7ypEMGelgeDvwpkZD7Ydz1"
            }
        },
        {
            "qZemMS7bHec5ovsx9eV4eMcE62M2": {
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "qZemMS7bHec5ovsx9eV4eMcE62M2",
                "description": "Part and parcel of the larger student movement sweeping university campuses across the United States, Students for Justice in Palestine (SJP) is a diverse group of students, faculty, staff, and community members centered at the University of California, San Diego and organized in accordance with democratic principles to promote justice, human rights, and the right of self-determination for the Palestinian people.",
                "eventList": [],
                "emailList": [],
                "clubName": "Students for Justice in Palestine",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9630",
                "contactEmail": ""
            }
        },
        {
            "qafAQBuZ3lbgmI98naWsIb5d3hz1": {
                "description": "Darkstar is a gathering of all those interested in Science Fiction and Fantasy. We are also a SF/F library of 6000+ books on campus, open to all students",
                "eventList": [],
                "emailList": [],
                "clubName": "Darkstar",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9597",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "qafAQBuZ3lbgmI98naWsIb5d3hz1"
            }
        },
        {
            "qeZ0jp9MdKaeD8CfTJG52ZDmz5J3": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "qeZ0jp9MdKaeD8CfTJG52ZDmz5J3",
                "description": "The goal of CSA is to enable students interested in a variety of fields to connect and engage on solving a singular goal â€“ how to bring aspects of gardening and farming into the 21st century, through the engagement of computer science, engineering, and data sciences majors. CSA will work alongside Rogerâ€™s Community Garden (formerly North County Community Garden) to host student projects relating to agriculture, food waste, bioenergy, and sustainability-oriented projects. Members of the organization can hope to gain skills in hardware and software design, soldering, data science, biology, chemistry, etc. Members are not required to have any background knowledge, as CSA and its partners are more than happy to help get interested members up to speed.",
                "eventList": [],
                "emailList": [],
                "clubName": "Computer Science for Agriculture",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8569",
                "contactEmail": ""
            }
        },
        {
            "qtDV03DaXwXfDaxkceheYmKEIxt1": {
                "clubReference": "qtDV03DaXwXfDaxkceheYmKEIxt1",
                "description": "SENDforC San Diego is the San Diego branch of the non-profit organization Support, ENcourage, and Develop for Children, Inc. (referred to as SENDforC). SENDforC San Diego advocates STEM education and mentoring of high school students. Members of this club will serve as University Mentors and assist students to engineer solutions to everyday problems through playful and hands-on projects. SENDforC San Diego will implement the QDII curriculum developed by SENDforC Inc. to produce technological, social entrepreneurs.",
                "eventList": [],
                "emailList": [],
                "clubName": "SENDforC San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8387",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": []
            }
        },
        {
            "qvuiQMgLIWNpbxvrQqrVcLIRqVF3": {
                "description": "Established in 2003, Bodyrock is UCSD's first and only breaking club. Our goal is to promote the hip hop culture by teaching breaking to beginners, providing practice space for local bboys and bgirls, and showcasing our skills through performances and battles. Bodyrock hopes to entertain and inspire with our combination of athleticism and musicality.",
                "eventList": [],
                "emailList": [],
                "clubName": "Breakin' Club- Body Rock",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8484",
                "contactEmail": "",
                "tags": [
                    "Dance"
                ],
                "announcements": [],
                "clubReference": "qvuiQMgLIWNpbxvrQqrVcLIRqVF3"
            }
        },
        {
            "r3RQhdDuBzUFlQo9br6jhF0MxZk2": {
                "description": "IGNITE at UCSD is a network of like-minded, ambitious womxn leaders who are eager to work on their political ambition, civic engagement, and leadership skills. It teaches womxn their political power and trains them to become the leaders of tomorrow by guiding womxn to position themselves in roles of political candidacy.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "IGNITE at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8513",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "r3RQhdDuBzUFlQo9br6jhF0MxZk2"
            }
        },
        {
            "rBgwgQQ5doSMyOHzprjN6xDWUzs1": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "rBgwgQQ5doSMyOHzprjN6xDWUzs1",
                "description": "The mission of the Global Development Council is to help students aware of the importance of Global Development to self-development, and thus foster the comprehensive development of students. We provide academic workshops about Global and local issue and help students understand the society as a whole. Also, we operate our official accounts on public platforms, writing and posting the essays which advocate the global development. We also hold networking event with alumni or the successful people, in order to help students reach self-development while being aware of the global development. Global Development Council also focuses on the connections with other organizations or companies. We hold workshops or write journals or have GBM together with other organizations in order to fulfill our global mission. Global Development Council is a non-profit organization.",
                "eventList": [],
                "emailList": [],
                "clubName": "Global Development Council",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8514",
                "contactEmail": ""
            }
        },
        {
            "rGEcqNnqAJX8pSm2O8o1FU23BMz1": {
                "description": "The purpose of this organization is to provide all graduate students, but in particular international graduate students, the opportunity to learn about Christianity through studying the Bible and participating in Christian fellowship.",
                "eventList": [],
                "emailList": [],
                "clubName": "International Graduate Student Ministry (IGSM) at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10690",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "rGEcqNnqAJX8pSm2O8o1FU23BMz1"
            }
        },
        {
            "rJVjvqnGB3RWlurLzjc1Bnxg0Sw2": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "rJVjvqnGB3RWlurLzjc1Bnxg0Sw2",
                "description": "To bring together and create a female-identifying a cappella group within the UCSD community. To provide students who are interested in a cappella music an outlet through performances and/or a group to belong to.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Daughters of Triton",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10752",
                "contactEmail": ""
            }
        },
        {
            "raL5lvt1L1gQZyQBjs5SlGRSnGp1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10779",
                "contactEmail": "",
                "tags": [
                    "Martial Arts"
                ],
                "announcements": [],
                "clubReference": "raL5lvt1L1gQZyQBjs5SlGRSnGp1",
                "description": "UCSD Iaido seeks to promote awareness and preservation of the Muso Jikiden Eishin-Ryu branch of Japanese swordsmanship.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Iaido at UCSD"
            }
        },
        {
            "rlUtwIIMgeT1iLrNBtZuq1o5px13": {
                "clubReference": "rlUtwIIMgeT1iLrNBtZuq1o5px13",
                "description": "Sponsored by top tech companies and working closely with the CSE department, the Computer Science and Engineering Society provides opportunities to students beyond what they get in the classroom. These include company sponsored events to help you get internships and jobs, workshops to improve your technical skills, social events to build your network, and events that allow you to interact with CSE department faculty and staff! We are open to all students with an interest in computing, not just CSE majors!",
                "eventList": [],
                "emailList": [],
                "clubName": "Computer Science and Engineering Society",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10747",
                "contactEmail": "",
                "tags": [
                    "Computer Science"
                ],
                "announcements": []
            }
        },
        {
            "rmdhV5cv7gPGUTii7jwzk7DmHpn1": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Video Game Development Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10826",
                "contactEmail": "",
                "tags": [
                    "Computer Science"
                ],
                "announcements": [],
                "clubReference": "rmdhV5cv7gPGUTii7jwzk7DmHpn1",
                "description": "The Video Game Development Club seeks to bring students who are interested in the process of video game design and development together in a collaborative environment. Students can develop games from start to finish with their peers, and seek feedback and assistance with ideas and projects they may be working on.",
                "eventList": []
            }
        },
        {
            "s1Xqew5q4gfxVKP51RXFrvJ3JG23": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "s1Xqew5q4gfxVKP51RXFrvJ3JG23",
                "description": "Student Organization for Activism and Representation (SOAR) strives to increase awareness on prevalent issues that affect underrepresented communities through various modes of community service. Additionally, the Student Organization for Activism and Representation is committed to educate UC San Diegoâ€™s undergraduate students on concerning issues to inspire their own sense of activism. The Student Organization for Activism and Representation is inclusive to all undergraduate students who share a passion for our mission and are devoted to positively impacting the community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Student Organization for Activism and Represenation",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8414",
                "contactEmail": ""
            }
        },
        {
            "s6bca4jDJmYLpr2UNLOBG8C7HGE3": {
                "description": "The Society of Civil and Structural Engineers (SCSE) is the UC San Diego student chapter of the American Society of Civil Engineers (ASCE) and the Structural Engineers Association of San Diego (SEAOSD). Our purpose is to supplement the engineering education of UCSD students, promote the personal and professional development of our members, and improve the community of which we are part through outreach and community service.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Society of Civil and Structural Engineers",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8580",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "s6bca4jDJmYLpr2UNLOBG8C7HGE3"
            }
        },
        {
            "sAkSwjCDSyc8265IuxCYJLLsc6u1": {
                "emailList": [],
                "clubName": "Lambda Theta Nu Sorority, Inc.",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10667",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "sAkSwjCDSyc8265IuxCYJLLsc6u1",
                "description": "The purpose of Lambda Theta Nu Sorority, Inc. shall be to open doors of opportunity to the Latinas of our community. Our primary focuses are academic excellence and meeting the needs of Latina women in higher education. Lambda Theta Nu Sorority, Inc. also promotes the advancement of Latinas through various campus activities and community services and provides an environment for personal growth within a unit of sisterhood. Lambda Theta Nu Sorority, Inc.â€™s priorities, however, will be placed upon academic excellence and community service.",
                "eventList": []
            }
        },
        {
            "sTQG7R8YzLSEfYepF0LSlYZ4Wps1": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "sTQG7R8YzLSEfYepF0LSlYZ4Wps1",
                "description": "The Careers in Student Affairs Club is a non-profit organization whose purpose is to explore and promote educational and career opportunities in the filed of Higher Education, and more specifically Student Affairs. We strive to help UCSD students and members achieve their career goals through shared information, conferences, and opportunities to meet current graduate students and faculty in the field.",
                "eventList": [],
                "emailList": [],
                "clubName": "Careers in Student Affairs Club",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12007",
                "contactEmail": ""
            }
        },
        {
            "seK6OxPupvPTcApjfLkqcr417MB3": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8430",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "seK6OxPupvPTcApjfLkqcr417MB3",
                "description": "Model United Nations members simulate the United Nations by role-playing diplomats and forming delegations to attend conferences. At these conferences, students debate global issues, conduct speeches, draft resolutions, form political alliances, and resolve critical international problems. In doing so, Model United Nations students are exposed to international relations and its application in today's society, which expands their understanding of the world and becoming global citizens.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Model United Nations at UCSD"
            }
        },
        {
            "snhnhynGDrT5dRhSZAEkQLPguXK2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "snhnhynGDrT5dRhSZAEkQLPguXK2",
                "description": "To foster the growth of students interested in biomedical engineering through professional development and the mutual engaging of industry, alumni, and the local community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Biomedical Engineering Society (BMES)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8498",
                "contactEmail": ""
            }
        },
        {
            "t2n68u2atYbnFM0EI9TFu7UXwhs2": {
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "t2n68u2atYbnFM0EI9TFu7UXwhs2",
                "description": "The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ. ~ you don't gotta be Asian, or American, or Christian to come check us out! :)",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Asian American Christian Fellowship",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8558",
                "contactEmail": ""
            }
        },
        {
            "tCu6Vqnm0TXAa9AltFVvIkdrwZA3": {
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "tCu6Vqnm0TXAa9AltFVvIkdrwZA3",
                "description": "Taiwanese Graduate Student Association at UCSD is a social-oriented organization, but also culturally and academically based. The purpose of TGSA is to build up and strengthen social networks, to encourage academic merits of its members, and to promote Taiwanese and Asian culture.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Taiwanese Graduate Student Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10714",
                "contactEmail": ""
            }
        },
        {
            "tIu0NKMcfoeQkOfbwW6zBWI4cDC3": {
                "description": "Helping every individual to meet his true potential is the bedrock of the Phi Delta Theta Fraternity. By celebrating each personâ€™s true self, and by learning from each otherâ€™s strengths while helping to improve each otherâ€™s weaknesses, every member of Phi Delta Theta develops into a greater version of himself than he could ever on his own. Rather than try to find young men to â€œmoldâ€ into some ideal, we celebrate the uniqueness of each individual and, through encouragement, values, example and brotherhood, empower every brother to exceed his personal expectations.",
                "eventList": [],
                "emailList": [],
                "clubName": "Phi Delta Theta",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12046",
                "contactEmail": "",
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "tIu0NKMcfoeQkOfbwW6zBWI4cDC3"
            }
        },
        {
            "tLTzemsbigc0XpNwhkhXaa7OmXG3": {
                "clubReference": "tLTzemsbigc0XpNwhkhXaa7OmXG3",
                "description": "To encourage participation in the fine arts, to provide entertainment, to support all musical endeavors, to expand the genre of a cappella in the San Diego region.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tritones at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12037",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "announcements": []
            }
        },
        {
            "tORl5zZbT5ZgqrA4adcreW4ljFx1": {
                "description": "Our mission is to create a loving, supportive community through Christ, bringing collegiate students together with the Catholic Church. With God as a catalyst, Pagasa strives to empower students to learn and experience growth within themselves, further enhancing their spirituality. As a community, we are united by our devotion to the Holy Spirit, aiming to offer a space for prayer, support, and self-discovery. â€œPagasa,â€ meaning hope in Filipino, will stand as a driving force in enriching Catholic faith, upholding service, and finding truth within each other.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Pagasa",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8453",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "tORl5zZbT5ZgqrA4adcreW4ljFx1"
            }
        },
        {
            "tQfUzSdh4bYr6f8DBHWZky7F9fq1": {
                "clubReference": "tQfUzSdh4bYr6f8DBHWZky7F9fq1",
                "description": "We, NU ALPHA KAPPA, seek to unite and involve all students in a more harmonious and brotherly atmosphere through academic, social, and cultural means. There is a need to interface the various backgrounds that constitute the student body of our fraternal university chapter, in order to improve relations amongst all students and the community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Nu Alpha Kappa, Inc.",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8469",
                "contactEmail": "",
                "tags": [],
                "announcements": []
            }
        },
        {
            "tcUTm1cPrJWqfjF69FvJ2PtYOi73": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10784",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "tcUTm1cPrJWqfjF69FvJ2PtYOi73",
                "description": "Providing propagation of psychological knowledge, psychological major student peer support, psychology-related lecture both online and offline, and psychological support. Associating with UCSD Counseling and Psychological Services (CAPS), and organizing with Chinese Student Associations to form friendly and professional Chinese Student Psychological Community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Mood Psychology"
            }
        },
        {
            "tig81s0lKWZWblQgJerSrbvb36E2": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "tig81s0lKWZWblQgJerSrbvb36E2",
                "description": "To oversee the 11 Panhellenic and 1 Affiliate Chapters within the Panhellenic Council. These chapters are: Alpha Chi Omega, Alpha Epsilon Phi, Alpha Omicron Pi, Alpha Phi, Chi Omega, Delta Delta Delta, Delta Gamma, Kappa Alpha Theta, Kappa Kappa Gamma, Phi Sigma Rho (Affiliate), Pi Beta Phi, and Sigma Kappa.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Panhellenic Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8451",
                "contactEmail": ""
            }
        },
        {
            "tsWu6tBDoLY47nswzXG6WiYPlOu1": {
                "tags": [
                    "Interfraternity Council"
                ],
                "announcements": [],
                "clubReference": "tsWu6tBDoLY47nswzXG6WiYPlOu1",
                "description": "Lambda Chi Alpha is a greek social fraternity as accepted by IFC.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Lambda Chi Alpha",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11939",
                "contactEmail": ""
            }
        },
        {
            "u11uJbNNTPR51SqR0erNf4XZdXJ3": {
                "description": "Camp Kesem at UCSD provides a free summer camp to children ages 6-18 in the San Diego community who have/had a parent with cancer.",
                "eventList": [],
                "emailList": [],
                "clubName": "Camp Kesem",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8497",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "u11uJbNNTPR51SqR0erNf4XZdXJ3"
            }
        },
        {
            "uBq5pqLdDuYgjQyXVlmNosU8mr52": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8426",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "uBq5pqLdDuYgjQyXVlmNosU8mr52",
                "description": "Student Involvement Leadership Consultants, or SILCs, are bright, motivated UCSD students committed to sharing our leadership and involvement experience to serve the UCSD community on whole. Our mission is to provide the University of California, San Diego student organizations with direct services to assist in their operations and to provide the campus-wide student population with consultation regarding student involvement and leadership opportunities.",
                "eventList": [],
                "emailList": [],
                "clubName": "Student Involvement Leadership Consultant (SILC)",
                "pictureURL": ""
            }
        },
        {
            "uZRTOrf9S3PA7sFlNCHA5Y4Fv6l1": {
                "clubReference": "uZRTOrf9S3PA7sFlNCHA5Y4Fv6l1",
                "description": "The Global Health Program Student Representatives are charged to advise the Global Health Program on issues related to undergraduate education, including but not limited to courses, curriculum, instruction, student involvement opportunities, research opportunities and student programs.",
                "eventList": [],
                "emailList": [],
                "clubName": "Global Health Program Student Representatives",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11918",
                "contactEmail": "",
                "tags": [],
                "announcements": []
            }
        },
        {
            "ueKLVFirBAc2FlSCd1kcueWZ4TS2": {
                "clubReference": "ueKLVFirBAc2FlSCd1kcueWZ4TS2",
                "description": "Psi Chi is the international honors society of psychology whose mission is to provide students opportunities for leadership, scholarship, community service, and research. The UC San Diego chapter supports these opportunities by allowing students to form and join committees of interest as well as having a panel of officers who consistently present opportunities for professional growth. Being a registered member of the organization means a student has lifelong access psychology fellowships, scholarships, a career database, submission access to a peer-reviewed academic journal, and opportunities to present at the annual WPA and APA conferences. While Psi Chi has criteria for joining including a minimum GPA, amount of completed psychology courses, and a major or minor of psychology being a requirement, the UC San Diego chapter welcomes all students. Students who do not meet these minimum requirements (including new transfer students,) are welcome to join the chapter by being psychology club members. At meetings both Psi Chi and psychology club members work together using Robertâ€™s Rules of Order to vote on the direction of the chapter for the academic year. Students will be able to participate in experiences that can aid them in becoming stronger applicants for graduate school, attend workshops, view guest speakers, gain leadership skills, and help people in need within the San Diego community through service projects.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Psi Chi/Psychology Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8478",
                "contactEmail": "",
                "tags": [],
                "announcements": []
            }
        },
        {
            "ukb00JxdIqS5XL4h0Bv2Xkt59O13": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Inter-College Residents Association (ICRA)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10751",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "ukb00JxdIqS5XL4h0Bv2Xkt59O13",
                "description": "The purpose of ICRA is to serve the on-campus residents of all residential areas at the University of California, San Diego, hereinafter referred to as UCSD. This body will plan educational, social, community service, and diversity programs to unite these residents as well as make recommendations for the enhancement of residential living. In addition, ICRA will serve to unite the residence committees of all residential living areas. ICRA will promote leadership opportunities and encourage college and residential area representation. It is the purpose of ICRA to help students grow as leaders and to unite the residents of all of UCSDâ€™s residential areas. ICRA is a non-profit organization.",
                "eventList": []
            }
        },
        {
            "v3GN4b9hzLanxAUonjfUtOFGzcs1": {
                "tags": [],
                "announcements": [],
                "clubReference": "v3GN4b9hzLanxAUonjfUtOFGzcs1",
                "description": "Our purpose is to promote friendship, leadership, learning, and service amongst our members.",
                "eventList": [],
                "emailList": [],
                "clubName": "Alpha Chi Omega",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10790",
                "contactEmail": ""
            }
        },
        {
            "vELtvTaJhpN2FHet2wl4BDmGtT92": {
                "clubReference": "vELtvTaJhpN2FHet2wl4BDmGtT92",
                "description": "The mission of PPASO is to inform students about the physician assistant profession and to provide members with the resources that will best help them achieve their goals of entering physician assistant school. PPASO seeks to accomplish this mission by educating students about the process of becoming a physician assistant, collaborating with invaluable resources such as physician assistants, medical professionals, alumni, and UC San Diego faculty, and fostering camaraderie within the organization through unique experiential opportunities.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Pre-PA Student Organization (PPASO)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8538",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": []
            }
        },
        {
            "vEf0UHfbrGY3sW68P7tDvoSBYSo2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8352",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "vEf0UHfbrGY3sW68P7tDvoSBYSo2",
                "description": "To unite the various organizations/departments of UC San Diego that promote sustainable development into a cohesive network. The Inter-Sustainability Council functions as an intermediary to improve coordination and outreach between these groups and the UCSD community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Inter-Sustainability Council"
            }
        },
        {
            "vHrLE0yOd5Z8YA7Pb2l0YplcjMD2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8547",
                "contactEmail": "",
                "tags": [
                    "Political"
                ],
                "announcements": [],
                "clubReference": "vHrLE0yOd5Z8YA7Pb2l0YplcjMD2",
                "description": "To foster a grassroots movement on campus to help get Bernie Sanders into the White House",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Tritons for Bernie 2020"
            }
        },
        {
            "vtdvCU6G4CP1kjA6MX8g0bisrnI3": {
                "description": "The purpose of Women SPEAK is to promote girls' health and leadership by cultivating positive body image, establish healthy relationships, defy and deconstruct gender media stereotypes, and become leaders of change in their local communities.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Women SPEAK",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9606",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "vtdvCU6G4CP1kjA6MX8g0bisrnI3"
            }
        },
        {
            "w2fb6pm0RDNFtuQoYnSC7DDyCr72": {
                "emailList": [],
                "clubName": "Falun Dafa at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8456",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "w2fb6pm0RDNFtuQoYnSC7DDyCr72",
                "description": "Falun Dafa Club at UCSD is an ancient meditation practice in the Buddha school tradition; at the core of the practice are the values of Truthfulness, Compassion and Forbearance, which act as a guide for daily life and practice. Through tranquil meditations and an emphasis on the elevation of oneâ€™s heart-mind character, Falun Dafa has brought health and well-being to more than 100 million people in 100 countries around the world. Falun Dafa is not a religion, there is no membership and is completely free of charge! It is a mind-body practice with a spiritual component that covers metaphysics, ethics and enlightenment. Through persistent practice one strives to achieve a state of selflessness, increased insight, inner purity, balance- true health and ultimately enlightenment. Since July 1999 the communist government of China has persecuted and enslaved millions of innocent people for practicing Falun Dafa and they comprise 65% of labor camps, detention centers and prisons across China for believing in Truth- Compassion- Forbearance. Evidence from acclaimed sources have proven tens of thousands of Falun Dafa practitioners to have been killed from live organ harvesting for Chinaâ€™s lucrative organ transplant market. So what do we, as an organization, do on campus? We meditate together and teach the exercises, promote cultural art events that revive traditional Chinese culture and raise awareness about the persecution and organ harvesting of Falun Dafa practitioners in China.",
                "eventList": []
            }
        },
        {
            "w63yA4ikh0UAPBCIDmlPr6tdrGV2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Yonder Dynamics",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9627",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "w63yA4ikh0UAPBCIDmlPr6tdrGV2",
                "description": "Yonder Dynamics is UC San Diego's premier robotics organization for undergraduates that focuses on designing and building autonomous rovers for terrestrial exploration. Every year, we compete in the University Rover Challenge, a prestigious international competition that challenges teams to design and build a rover that would be of use to early explorers on Mars. Our primary purpose is to empower undergraduates to work in robotics, space, and related fields, regardless of their age and major, or other circumstances. We believe in developing individuals from the ground up to prepare them for their future endeavors. With a mix of students from all backgrounds, we pride ourselves on inclusivityâ€“robotics is for everyone.",
                "eventList": []
            }
        },
        {
            "w6YVgdibdnOXeOn7CYRTrSWLR713": {
                "emailList": [],
                "clubName": "Rady Student Association",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10844",
                "contactEmail": "",
                "tags": [],
                "announcements": [],
                "clubReference": "w6YVgdibdnOXeOn7CYRTrSWLR713",
                "description": "The mission of the Rady Student Association (RSA) is to encourage a thriving academic and social environment by providing leadership opportunities that empower and inspire, advocating on behalf of student interests, and coordinating all student-run activities for the Rady School of Management. RSA will serve as a link between the academic experience and the business world. RSA shall provide a forum for students to directly impact administrative policy matters while overseeing the development and maintenance of a strong community and pride in the Rady School of Management.",
                "eventList": []
            }
        },
        {
            "wB4MrQ84JAgdOYfqv5j3feR7cck1": {
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "wB4MrQ84JAgdOYfqv5j3feR7cck1",
                "description": "Our purpose is to give an outlet for music lovers to share and express their passion for music, to allow musicians to collaborate and learn from one another, and to give musicians of all levels the experience of performing with others in front of an audience.",
                "eventList": [],
                "emailList": [],
                "clubName": "Musicians Club @ UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8349",
                "contactEmail": ""
            }
        },
        {
            "wK7Q7OBzNJajDKR1T77JuQHNEcM2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "wK7Q7OBzNJajDKR1T77JuQHNEcM2",
                "description": "The Social Entrepreneurship Association is a collegiate organization that empowers students to discover meaningful and fulfilling work that satisfies their economic aspirations and creates a positive social impact on the world. The association welcomes its members to a network of motivated, empathetic change makers; fosters knowledge about local and global social issues; provides opportunities to partner with socially conscious businesses on impactful consulting projects; offers an education and training on key business skills; and spreads awareness about career paths that help others including benefit corporations, foundations, nonprofits, corporate social responsibility divisions, and more. The Social Entrepreneurship Association was founded at the University of California, San Diego in 2018 and aspires to grow nationally in order to empower all students to discover meaning, fulfillment and service in their careers.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Social Entrepreneurship Association",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10711",
                "contactEmail": ""
            }
        },
        {
            "wKJ3q69467SyChhUyUP7PWvaRfe2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chancellor's Scholars Alliance",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9647",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "wKJ3q69467SyChhUyUP7PWvaRfe2",
                "description": "To promote service, academic development, leadership, and a sense of community among recipients of the UCSD Chancellorâ€™s Scholarship through volunteer and community service opportunities, social events, and organized meetings.",
                "eventList": []
            }
        },
        {
            "wRdsTK44OIR5ycFbZOf8qTmRWhD2": {
                "clubReference": "wRdsTK44OIR5ycFbZOf8qTmRWhD2",
                "description": "We are a fellowship that strives to build a Christ centered community on campus, primarily with International undergraduate students, but everyone is welcome. We meet weekly for Bible studies & prayer and worship on campus on Sundays. Our vision is to share the gospel and students to spiritually thrive during college.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "IUSM (International Undergraduate Student Ministry)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9611",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": []
            }
        },
        {
            "wcqWuV6PlJMkJu2LphsGuMBPqek2": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10722",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "wcqWuV6PlJMkJu2LphsGuMBPqek2",
                "description": "To help further the Great Commission at UCSD by making disciples and equipping them with the skills necessary to live out a Christian life after college. Activities will include bible study, worship sessions, and morning prayers. K.C.C.C is a non-profit, non-denominational Christian organization.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Korea Campus Crusade for Christ (KCCC)"
            }
        },
        {
            "wzfe9zfLsxcsSglqoQoasYIJktN2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Prospect - The Journal of International Affairs at UCSD",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10685",
                "contactEmail": "",
                "tags": [
                    "Media"
                ],
                "announcements": [],
                "clubReference": "wzfe9zfLsxcsSglqoQoasYIJktN2",
                "description": "PROSPECT is an undergraduate journal of international/transnational affairs at the University of California, San Diego. Serving as a forum for intelligent discourse relating to international and transnational affairs, the journal showcases works created by undergraduates who wish to broaden their understanding of issues of contemporary and global relevance.",
                "eventList": []
            }
        },
        {
            "x9miSyvQ75U02HlJk5vbgaJ8BDC3": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "New Life Student Ministry",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12027",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "x9miSyvQ75U02HlJk5vbgaJ8BDC3",
                "description": "Student Campus Bible Study Group",
                "eventList": []
            }
        },
        {
            "xKu8AhDVvJfbjizPUeapsIrS48h1": {
                "emailList": [],
                "clubName": "Undergraduate Women in Computing at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11866",
                "contactEmail": "",
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "xKu8AhDVvJfbjizPUeapsIrS48h1",
                "description": "WIC is a non-profit student organization committed to fostering a supportive and informative environment for women in computing through technical, professional development, and social events. We also focus on high school outreach programs to bring more young women into the field. Keynote speakers, mentorship, career fair information, interview preparation, programming competitions, and attending CS conferences are few of the opportunities that we provide for our members.",
                "eventList": []
            }
        },
        {
            "xLadQZ4GYvOLAUR3CzX2fUk1Iyj2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Rubiks Cube Club",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11895",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "xLadQZ4GYvOLAUR3CzX2fUk1Iyj2",
                "description": "To bring cubers and non-cubers together to learn more about solving the Rubik's cube, cuboids, or any other puzzles.",
                "eventList": []
            }
        },
        {
            "xTqvQT6euHgTNT7CorMHToSyzgu2": {
                "emailList": [],
                "pictureURL": "",
                "clubName": "Student Health Advocates",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12004",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": [],
                "clubReference": "xTqvQT6euHgTNT7CorMHToSyzgu2",
                "description": "The Student Health Advocates (SHAs) are trained, volunteer peer health educators that educate other students about health issues and concerns through educational workshops, events, and campaigns. SHAs address topics such as alcohol, drugs, stress, healthy eating, physical activity, and sexual health.",
                "eventList": []
            }
        },
        {
            "xVVA7owsL7PXPkVulFNq9RldNOa2": {
                "emailList": [],
                "clubName": "Speech and Debate at the University of California: San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10696",
                "contactEmail": "",
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "xVVA7owsL7PXPkVulFNq9RldNOa2",
                "description": "The mission of Speech and Debate at the University of California: San Diego is to provide education in the arts of public speaking and persuasive argumentation, incorporating the skills of research, analysis, critical thinking, organization of logical communication, and oral persuasive presentation.",
                "eventList": []
            }
        },
        {
            "xhpqBTkP52him67AT6pX790Rrkf2": {
                "description": "To increase independence and mobility for those with amputations and limb differences through the research and development of low cost, accessible prosthetics.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Triton Prosthetics",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10814",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "xhpqBTkP52him67AT6pX790Rrkf2"
            }
        },
        {
            "xiK1SfiCJqQfwgLjr1Uik5gmk993": {
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "xiK1SfiCJqQfwgLjr1Uik5gmk993",
                "description": "Rising, inspired by the Vagina Monologues and TheirStories, exists as a safe space for students to share their experiences with identifying in a minority group, while raising awareness of various forms of oppression and actively trying to reduce them. It is our goal to raise a substantial amount of funds for charity each year by producing a performance-based show that will be the culmination of the stories of our members and those around our community.",
                "eventList": [],
                "emailList": [],
                "clubName": "Rising at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10761",
                "contactEmail": ""
            }
        },
        {
            "xjmtgK9hQeUdTtV6btzZ6Zkp5TL2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "xjmtgK9hQeUdTtV6btzZ6Zkp5TL2",
                "description": "Provide training and mentorship programs that empowers members to the obtain financial literacy and business acumen needed to excel in various roles within the most competitive firms globally.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Undergraduate Investment Society",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/11945",
                "contactEmail": ""
            }
        },
        {
            "xnqAYaUkgva3ftpOTCLq6XrR4z03": {
                "tags": [
                    "Panhellenic"
                ],
                "announcements": [],
                "clubReference": "xnqAYaUkgva3ftpOTCLq6XrR4z03",
                "description": "The mission of Pi Beta Phi is to promote friendship, develop women of intellect and integrity, cultivate leadership potential and enrich lives through community service.",
                "eventList": [],
                "emailList": [],
                "clubName": "Pi Beta Phi",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12034",
                "contactEmail": ""
            }
        },
        {
            "xpjisK4hnnVzJYdMuTFQdsrLM043": {
                "emailList": [],
                "clubName": "Association of Indian Graduate Students",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12062",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "xpjisK4hnnVzJYdMuTFQdsrLM043",
                "description": "To conduct events based on Indian culture and provide a congenial atmosphere for students belonging to the Indian community.",
                "eventList": []
            }
        },
        {
            "xrno8rKUhPRKEyqijRzsuMUPUDO2": {
                "description": "The Muir Musical is a UCSD student organization that produces one completely student-run musical theatre production annually. Students from all six UCSD colleges are invited to participate in a full-scale Broadway production that marks the single musical theatre opportunity for UCSD students all year long.",
                "eventList": [],
                "emailList": [],
                "clubName": "Muir Musical",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10852",
                "contactEmail": "",
                "tags": [
                    "Music"
                ],
                "announcements": [],
                "clubReference": "xrno8rKUhPRKEyqijRzsuMUPUDO2"
            }
        },
        {
            "yBHEBVidBle1sLpny70sczZwAh73": {
                "emailList": [],
                "clubName": "Engineering World Health",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8487",
                "contactEmail": "",
                "tags": [
                    "Service"
                ],
                "announcements": [],
                "clubReference": "yBHEBVidBle1sLpny70sczZwAh73",
                "description": "Engineering World Health focuses on improving the state of global healthcare by spreading awareness, and developing members' interdisciplinary engineering skills required to engineer low-resource medical devices. Year-long, innovative projects addressing specific medical needs of underserved communities will be developed for the Engineering World Health design competition. We accept students from all majors and walks of life who share our passion for improving global healthcare.",
                "eventList": []
            }
        },
        {
            "yRRPPDFZpVfppgySxwRRCQm2jn82": {
                "clubReference": "yRRPPDFZpVfppgySxwRRCQm2jn82",
                "description": "Pre-Pharmacy Society is an organization that promotes the career of pharmacy through a variety of resources that include workshops, volunteer opportunities, guest speakers, and networking to compliment the interests of our members. Our main objectives are to better prepare our members for pharmacy school admission and to learn and explore the multitude of career options for pharmacists. While providing essential information to our members, PPS also strives to make the club as fun as possible for our members.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Pre-Pharmacy Society (PPS)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10700",
                "contactEmail": "",
                "tags": [
                    "Health Professions"
                ],
                "announcements": []
            }
        },
        {
            "yUEgLI5fcRfDDMS38JjfHccobno2": {
                "tags": [
                    "Affirmitive Action"
                ],
                "announcements": [],
                "clubReference": "yUEgLI5fcRfDDMS38JjfHccobno2",
                "description": "Movimiento Estudiantil Chicanx de AztlÃ¡n (M.E.Ch.A.) is a student organization that promotes higher education, cultura, and hxstoria. The goal of M.E.Ch.A. is create a consciousness, one in which to incorporate the political, the cultural, and the educational aspects of our community to those of the University. M.E.Ch.A. is a political voice for UCSD. It takes part in a series of political events through out the year, such as Raza Awareness Week. M.E.Ch.A. also honors many cultural holidays such as El dia de los Muertos and Las Posadas that occur in December; creating an atmosphere for social interaction. M.E.Ch.A. also strives in bridging the gap between High School and College by working directly with the youth of our community. This is accomplished through our annual Raza Youth Empowerment Conference, weekly outreach events, campus tours, overnight programs, and one on one mentoring. In realizing the importance of giving back to the community, we recognize that we are at UCSD to be successful students. We strive to build a community that is strong and united. The year is finalized with our Raza Graduation. Most importantly, throughout the year we build a strong network of people who are currently aware students, activists, and friends.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Movimiento Estudiantil Chicanola de Aztlan (MECHA)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9602",
                "contactEmail": ""
            }
        },
        {
            "yVAdEbMe8qOoE04cAMnlgYyahTi1": {
                "tags": [],
                "announcements": [],
                "clubReference": "yVAdEbMe8qOoE04cAMnlgYyahTi1",
                "description": "uwu",
                "eventList": [],
                "emailList": [],
                "clubName": "TEST",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8348",
                "contactEmail": ""
            }
        },
        {
            "yWmvBbvlTqY7PPJkD6baZ8l8SdH2": {
                "description": "The purpose of Tritons for Animals is to advocate for the welfare and humane treatment of animals through education and the promotion of a plant- based lifestyle.",
                "eventList": [],
                "emailList": [],
                "clubName": "Tritons for Animals",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10788",
                "contactEmail": "",
                "tags": [
                    "Social"
                ],
                "announcements": [],
                "clubReference": "yWmvBbvlTqY7PPJkD6baZ8l8SdH2"
            }
        },
        {
            "ycTxtiDLN1QyIBV8krg7ofJLptS2": {
                "tags": [
                    "Educational"
                ],
                "announcements": [],
                "clubReference": "ycTxtiDLN1QyIBV8krg7ofJLptS2",
                "description": "The main purpose of Chinese Engineering Society (CES) at UCSD is to promote academic excellence and entrepreneurship among researchers and students in Chinese ethnicity. We aim to help maintain the diverse, inspirational environment in UCSD by providing opportunities in career network, professional development and academic communications, and furthermore encouraging the society members to contribute to the greater community through innovative ideas and projects.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Chinese Engineering Society",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/12032",
                "contactEmail": ""
            }
        },
        {
            "ys7lf9bTLOW7nz5PeL4qo7SaCby1": {
                "emailList": [],
                "clubName": "Breakaway Collective Productions",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10740",
                "contactEmail": "",
                "tags": [
                    "Media"
                ],
                "announcements": [],
                "clubReference": "ys7lf9bTLOW7nz5PeL4qo7SaCby1",
                "description": "BC Productions aims to help students, faculty, and other organizations produce a variety of media, while providing members with hands on experience in multiple fields of production, and opportunities to engage with media professionals.",
                "eventList": []
            }
        },
        {
            "z34cpnHnzZeNEp5vq8G2Cvc49w03": {
                "clubReference": "z34cpnHnzZeNEp5vq8G2Cvc49w03",
                "description": "Triton Gaming is a group of collegiate organizers that team up to create epic entertainment experiences for student gamers at the University of California, San Diego. Our organization is the product of several independent on-campus gaming organizations that each represent a different gaming genre and student community. Through Triton Gaming, our team strives to create an exciting, diverse, and all-inclusive gaming environment on campus through high-quality live events.",
                "eventList": [],
                "emailList": [],
                "clubName": "Triton Gaming",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10744",
                "contactEmail": "",
                "tags": [
                    "Panhellenic",
                    "Social"
                ],
                "announcements": []
            }
        },
        {
            "zD2qHqY0kYRcm7sZnNW5TmxAI5h1": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "zD2qHqY0kYRcm7sZnNW5TmxAI5h1",
                "description": "CEN-UCSD aims to develop leadership, facilitate innovation and encourage entrepreneurship for a better future, which shall be culturally viable, economically prosperous, and environmentally sustainable. Particularly, the CEN-UCSD devotes to explore effective strategies and opportunities of social businesses and provide UCSD students a platform to exercise social entrepreneurship and leadership.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "China Entrepreneur Network",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/10785",
                "contactEmail": ""
            }
        },
        {
            "zJT5JCE7fTQeJb7haTALitXaFp22": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "zJT5JCE7fTQeJb7haTALitXaFp22",
                "description": "Delta Sigma Pi is a professional fraternity organized to foster the study of business in universities; to encourage scholarship, social activity and the association of students for their mutual advancement by research and practice; to promote closer affiliation between the commercial world and students of commerce, and to further a higher standard of commercial ethics and culture and the civic and commercial welfare of the community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Delta Sigma Pi",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8574",
                "contactEmail": ""
            }
        },
        {
            "zLpklMKa2IYMSCwznXgZ2S4JpXU2": {
                "emailList": [],
                "clubName": "Redeemer Campus Outreach San Diego",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8355",
                "contactEmail": "",
                "tags": [
                    "Spiritual"
                ],
                "announcements": [],
                "clubReference": "zLpklMKa2IYMSCwznXgZ2S4JpXU2",
                "description": "Redeemer Campus Outreach (RCO) San Diego is a Christian organization that seeks to encourage the spiritual growth of UCSD students through the study of the Bible, structured, free-flowing discussion, and relationship-building activities. This club is open to all and non-profit.",
                "eventList": []
            }
        },
        {
            "zZ4gu6gICOMUS4pD6r7dTGjUuYm1": {
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9631",
                "contactEmail": "",
                "tags": [
                    "Cultural"
                ],
                "announcements": [],
                "clubReference": "zZ4gu6gICOMUS4pD6r7dTGjUuYm1",
                "description": "The purpose of our organization is to transmit Chinese traditional culture, to convene players and to provide them with an opportunity to communicate, perform and improve skills.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "Five Millennia Chinese Orchestra"
            }
        },
        {
            "zlYkvaZJnAZmaPX1uQfL0YWeDvZ2": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "zlYkvaZJnAZmaPX1uQfL0YWeDvZ2",
                "description": "To provide chemical engineering students with the most beneficial experience at UCSD through industry, career-building, and social events. We seek to promote academic, social, and professional growth for the chemical engineering community.",
                "eventList": [],
                "emailList": [],
                "pictureURL": "",
                "clubName": "American Institute of Chemical Engineers (AIChE)",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/8545",
                "contactEmail": ""
            }
        },
        {
            "znOONNwZj5dpCvlk4CaKqkVPHVH3": {
                "tags": [
                    "Pre-Professional"
                ],
                "announcements": [],
                "clubReference": "znOONNwZj5dpCvlk4CaKqkVPHVH3",
                "description": "Training the next generation of top business leaders through comprehensive education, pro-bono consulting, capital market investment research, and a summer fellowship.",
                "eventList": [],
                "emailList": [],
                "clubName": "TAMID at UCSD",
                "pictureURL": "",
                "pageURL": "https://studentorg.ucsd.edu/Home/Details/9633",
                "contactEmail": ""
            }
        }
    ];
let club_data = { clubs: club_list };
