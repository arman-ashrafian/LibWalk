// URLS for our Cloud Functions
const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';
const getUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getUser';
const getEventURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getEvent';
const editUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/changeUser';

const CACHE_TIMEOUT_MS = 120000000000000000000000000 // only make API request if last call was over 120,000 ms == 120 seconds
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
    if (!cache['getClubs'] || (now - cache['getClubs'].date) > CACHE_TIMEOUT_MS) {
        return getRequest(getClubsURL).then(json => {
            cache['getClubs'] = {
                date: now,
                resp: json
            }
            // return json
            return club_data
        });
    } else {
        return new Promise(function (resolve, reject) {
            return resolve(cache['getClubs'].resp);
        })
    }
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

export function getUserProfile() {

}

export function editUserProfile() {

}

export function getEvent(eventId) {
    return postRequest(getEventURL, {event_id: eventId});
}


let club_data = { clubs: [
        {
            "UID": "ggb8UPUOI9QaosjQgzwzbauclM32",
            "ClubName": "4Corners Christian Fellowship at UCSD",
            "clubEmail": "4corners.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8348",
            "PurposeStatement": "The purpose of this organization is to provide all students, but in particular international students, the opportunity to learn about Christianity through studying the Bible and participating in Christian fellowship."
        },
        {
            "UID": "DhHvVhS5TAO05cRaWnSfTv9XSb73",
            "ClubName": "Pakistani Student Association",
            "clubEmail": "a1gunn@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11877",
            "PurposeStatement": "The purpose of this cultural student association is to create a community of those interested in learning about and celebrating Pakistani culture, to further the knowledge of interested person of the history of Pakistan, in the process learn about issues pertinent to the Pakistani community back home and American Pakistanis, and to serve all UCSD and other University Students, faculty and staff in achieving the above stated goals."
        },
        {
            "UID": "SNvgHxo25SUNuObWHE3pvFGNSxk2",
            "ClubName": "Academy of Managed Care Pharmacy (AMCP at UCSD)",
            "clubEmail": "a3to@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11935",
            "PurposeStatement": "AMCP at UCSD is an organization that aims to promote sound managed care pharmacy principles through education and professional development of its student pharmacist members and to encourage the education and support the advancement of managed care pharmacy. The purpose of the organization is to enhance the common academic and professional interests of the Chapter members, offer professional opportunities and leadership within managed care pharmacy, and establish, develop, promote, and conduct educational programs relating to and improving health, especially as it relates to the delivery of pharmacy services through managed care pharmacy."
        },
        {
            "UID": "S235UCm746eJi6uCw8ATCMaACRi1",
            "ClubName": "Asian and Pacific Islander Student Alliance (APSA)",
            "clubEmail": "aacf.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8391",
            "PurposeStatement": "We, the students of University of California at San Diego (UCSD), come together to provide a forum to deal combat the problems and concerns of UCSD Asian and Pacific-Islander (API) students, especially those deemed â€œunderrepresentedâ€ by the Student Affirmative Action Committee (SAAC); to try to create an environment where issues such as those political, educational, cultural and social can be addressed; to increase awareness about our API history and heritage within the university and the community; to unite as a community resource to represent a common voice and thereby empower ourselves; and to serve as a support network for building bonds and addressing differences between students. The Asian and Pacific-Islander Student Alliance is a non-profit organization."
        },
        {
            "UID": "ZMICEawBC6ZEuqIkksL4AQApNwO2",
            "ClubName": "Basic Life Support Program",
            "clubEmail": "AAOUCSD@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11989",
            "PurposeStatement": "Basic Life Support Program is a prestigious program established in 2014 that specializes in instructing Basic Life Support (BLS) through the American Heart Association and certifying individuals that complete the course. This program is a committee within the Alpha Epsilon Delta honor society that allows the acquirement of not only profit, leadership experience, and the growth of the organization, but ultimately provides a concrete difference between Alpha Epsilon Delta and other health related organizations."
        },
        {
            "UID": "mph3tPkt1zbGsKrzyZMoqmDIpyI3",
            "ClubName": "a.bio.club",
            "clubEmail": "abioclub@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10675",
            "PurposeStatement": "A.Bio.Club is a scientific journal club that strives to facilitate a deeper understanding of topics in the biological sciences through regular peer-led discussions of scientific literature. By focusing on holding small discussion seminars, we hope to create a welcoming environment in where each member has the opportunity to interact and participate. As such, we empower our members in developing strong communication and public speaking skills to further personal and professional growth. We seek to create a community of undergraduate students who share similar passions across the biological fields, and provide opportunities such as networking, workshops, and guest lectures to broaden our perspective in science."
        },
        {
            "UID": "QRxstzqIfeVBgyZrNAW6zvct5uF3",
            "ClubName": "Association for Women in Mathematics",
            "clubEmail": "acmucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11922",
            "PurposeStatement": "Specific goals for this chapter are to 1. build community for women in mathematics, 2. provide mentorship for UCSDâ€™s women in mathematics, 3. attract more diverse candidates to our graduate programs, and 4. create and maintain connections with other chapters of AWM. We believe achieving our goals will directly and positively impact our ability to support, retain, and attract talented women in our mathematics programs."
        },
        {
            "UID": "czyj8GeD9paebcQXGskOm8Galt83",
            "ClubName": "American Chemical Society Student Affiliates (ACSSA)",
            "clubEmail": "acssa@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10735",
            "PurposeStatement": "To serve UCSD chemistry majors by providing a friendly environment for the intellectual exploration of relevant industrial chemistry and chemical research topics. We aim to provide students interested in science with networking, outreach and volunteering opportunities that will help them define their goals, choose their career path and pursue their intended career."
        },
        {
            "UID": "IdOu8rAQi2ViEVl0gEdS5LiBBLC3",
            "ClubName": "Active Minds",
            "clubEmail": "activeminds.sandiego@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8480",
            "PurposeStatement": "Active Minds at UC San Diego is a non-profit, student-run mental health awareness, education, and advocacy organization on campus. Through our programs, events, and collaborations, we will seek to promote mental health awareness on campus and the overall psychological well-being of UC San Diego students."
        },
        {
            "UID": "LzJ5ZO1mjVSvKuei3vhPbQieRHq1",
            "ClubName": "Japanese Student Association",
            "clubEmail": "admin@ihcucsd.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9642",
            "PurposeStatement": "The UCSD Japanese Student Association is for students whose home country is Japan and for those who wish to experience Japanese culture."
        },
        {
            "UID": "K4aPcNHIMgguZ7dAYn3aQn9vfPH3",
            "ClubName": "Institute of Electrical and Electronics Engineers (IEEE)",
            "clubEmail": "aegomez@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8445",
            "PurposeStatement": "To build technical skills, professional skills, and social connections by applying engineering outside the classroom."
        },
        {
            "UID": "uu35KbWPuaZwNWuEYDrnpYzCJDI3",
            "ClubName": "Pepitos",
            "clubEmail": "aegomez@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8396",
            "PurposeStatement": "The purpose of this organization shall be to provide a not for profit social atmosphere for UCSD students interested in promoting and exhibiting school spirit."
        },
        {
            "UID": "87hocz1OrVfKaVtMOsGPEafYwXz2",
            "ClubName": "Health and Medical Professions Preparation Program (HMP3)",
            "clubEmail": "aej014@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8390",
            "PurposeStatement": "The UCSD Health and Medical Professions Preparation Program (HMP3) provides undergraduates with enriching experiences that will enhance their preparation for admission into professional school in the health professions. Through collaborations with the UCSD School of Medicine, faculty, HealthBeat, community health care providers and others, HMP3 provides members with stimulating experiences designed to expand the mind and increase qualifications for entry into the health professions."
        },
        {
            "UID": "gOINjDgi1AWKKSmVbUT5Ws1e7Tm1",
            "ClubName": "Alpha Epsilon Phi",
            "clubEmail": "aephi.bh.president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9636",
            "PurposeStatement": "To establish and maintain sisterhood of college/university women for social, educational, charitable and other non-profit purposes while taking pride in our Jewish founding."
        },
        {
            "UID": "B16LEtjAU3NF93my3hny0WEuNeE2",
            "ClubName": "Asian American Christian Fellowship",
            "clubEmail": "afe.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8558",
            "PurposeStatement": "The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ. ~ you don't gotta be Asian, or American, or Christian to come check us out! :)"
        },
        {
            "UID": "wzgIHzYh2FNl7clQwlhyWX4d6Xz1",
            "ClubName": "Community Leadership Through Service",
            "clubEmail": "agenin@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11890",
            "PurposeStatement": "Community Leadership Through Service seeks to assist underrepresented communities on the UC San Diego campus as well as the greater San Diego area through events, workshops, and volunteering."
        },
        {
            "UID": "SKIbnFu0UMNORC4BrfbVviiZSYV2",
            "ClubName": "American Institute of Aeronautics and Astronautics",
            "clubEmail": "aiaa@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9598",
            "PurposeStatement": "To promote interest in the field of aeronautics and astronautics."
        },
        {
            "UID": "TORwiQDpGHQYqT9xsm1cmPO3zmG2",
            "ClubName": "American Institute of Chemical Engineers (AIChE)",
            "clubEmail": "aiche@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8545",
            "PurposeStatement": "To provide chemical engineering students with the most beneficial experience at UCSD through industry, career-building, and social events. We seek to promote academic, social, and professional growth for the chemical engineering community."
        },
        {
            "UID": "N9qFhsM6G0b38G8SOe1MF5v97JF2",
            "ClubName": "Alpha Lambda Mu",
            "clubEmail": "alpha.lambda.mu.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12036",
            "PurposeStatement": "Our Mission is to establish a Muslim Network as well as a Brotherhood dedicated to not only improving ourselves but our communities. We hope to develop each and every brother into a community leader who will go back and help out their communities when they graduate and leave us. Above all, our mission is to better ourselves as People, for we are the future and if we ever want the future to be brighter, we must enlighten ourselves first. The following are excerpts from the Official Alif Laam Meem facebook page: The Alpha Lambda Mu National Muslim Fraternity has been founded upon and promises to strive to promote among its members: An everlasting bond between brothers as they lead their communities in service. Religious, academic, and extracurricular successes that benefit the individual, the family, and the community. To build and develop integrity, honesty, respect, and the highest character among each member within the Alpha Lambda Mu National Muslim Fraternity."
        },
        {
            "UID": "RNhMl8yOlpgJaC8zkyqrxheHOx92",
            "ClubName": "Developer Student Club at UC San Diego",
            "clubEmail": "alphadelta.chapter@dlp.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10805",
            "PurposeStatement": "Developer Student Clubs (DSC) is a program run by Google Developers. UCSD students from all undergraduate or graduate programs with an interest in growing as a developer or within another related field (e.g. Design) are welcome to join the UCSD chapter. By joining DSC UCSD, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
        },
        {
            "UID": "WkVdkvUnUZQe37I3fLSwF15ydNl1",
            "ClubName": "Redeemer Campus Outreach San Diego",
            "clubEmail": "amfurmid@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8355",
            "PurposeStatement": "Redeemer Campus Outreach (RCO) San Diego is a Christian organization that seeks to encourage the spiritual growth of UCSD students through the study of the Bible, structured, free-flowing discussion, and relationship-building activities. This club is open to all and non-profit."
        },
        {
            "UID": "c3yOKXFK40dPSEE2oCiBnMB3Qs72",
            "ClubName": "American Medical Student Association",
            "clubEmail": "amsapremeducsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8526",
            "PurposeStatement": "UCSD AMSA pre-medical chapter is dedicated to providing valuable resources for pre-medical students here at UCSD, as well as presenting opportunities for involvement in the health-care community. We provide a wide variety of events from networking with physicians to community service opportunities to our annual health fair for an underserved San Diego community as well as socials for our pre-med members."
        },
        {
            "UID": "u4sSkhpUlsTH74P61azZajxAgqS2",
            "ClubName": "Argentine Tango Club",
            "clubEmail": "apdccucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10843",
            "PurposeStatement": "To build and sustain a community that gathers to practice and promote Argentine Tango at UCSD."
        },
        {
            "UID": "a0EEClZ6TqaosVpYphFym36eY6F2",
            "ClubName": "Society of Hispanic Professional Engineers",
            "clubEmail": "asadighi@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8441",
            "PurposeStatement": "The purpose of SHPE UCSD is to promote the advancement of Hispanics in math, science, engineering and other technical fields through our student chapter benefits; including but not limited to Professional Development, Academic Development, and Community Service. SHPE at UCSD is a non-profit student organization."
        },
        {
            "UID": "fbOFtlDWOKXaoILhqWtaLQmMNkk1",
            "ClubName": "African Students Association at UCSD",
            "clubEmail": "asaxucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8572",
            "PurposeStatement": "To cultivate unity among individuals who share a common African identity. To understand, engage and celebrate diverse African cultures through empathetic dialogue. To stand in solidarity with causes and movements concerned with self-determination and the welfare of African people, the African continent and African Diaspora."
        },
        {
            "UID": "Px1Oxtt7x2WhuAVJoueBlGLQZgC3",
            "ClubName": "Ascension Hip Hop Dance Team",
            "clubEmail": "asayaketaiko@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10687",
            "PurposeStatement": "Ascension was founded in 1999 and embraces the principles of community in order to create a family for our members. As UCSD's longest-running competitive hip hop dance team, we strive to become better than the team we were yesterday by learning from and inspiring one another."
        },
        {
            "UID": "zeiVXCdEnuMIHWfbxPtwvFMwf4m1",
            "ClubName": "Asha for Education at UCSD",
            "clubEmail": "ascensionucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8419",
            "PurposeStatement": "Asha for Education at UCSD is an offset of the Asha for Education foundation, a non-profit organization dedicated to the support of basic education in rural India. \"Asha\", which means \"hope\" in many Indian dialects, was founded at the University of California, Berkeley in 1991 and has since grown to over 50 chapters scattered throughout the United States, Europe, East Asia and India. Each of these chapters raises funds to support various education-related projects in India. Since its inception, Asha has partnered with more than 800+ NGOs from across 24 states in India and has disbursed in excess of $32 million. In 2014 alone, Asha has disbursed $2.85 million and has supported the education of 250,000+ kids in India directly and many hundreds of thousands more indirectly."
        },
        {
            "UID": "ze2P6TkMx8NbWpfZufBVsKAFDQA2",
            "ClubName": "American Society of Mechanical Engineers",
            "clubEmail": "aslclub.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8540",
            "PurposeStatement": "The purpose of ASME at UCSD is to provide for its members a wholesome mechanical engineering experience with events, projects and programs that enrich studentsâ€™ knowledge and fuel passion for the engineering world. The ASME will also promote development of an ethical, community conscientious student and future engineer."
        },
        {
            "UID": "dVCeJVGnGsfbD0HBVb7BWcvudEp2",
            "ClubName": "Anthropology Club at UCSD",
            "clubEmail": "asme.ucsandiego@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9629",
            "PurposeStatement": "The Anthropology Club strives to maximize student involvement in anthropology, link students with faculty, provide a sense of support and community, raise awareness of anthropological issues, connect undergrads and grad students with career boosting opportunities, network within and beyond, and foster an inclusive environment conducive to personal and professional growth within the subfields of archaeology, sociocultural anthropology, and biological anthropology."
        },
        {
            "UID": "bnWnexJyZXPhLNwJhYLtb3R7WHW2",
            "ClubName": "Atutu",
            "clubEmail": "astronomyucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11971",
            "PurposeStatement": "Atutu is a student organization focused on co-creating projects in tandem with communities in developing nations. We seek to work with local communities in co-designing and implementing solutions to topics our partner communities have identified as important."
        },
        {
            "UID": "JhscyxPC5Ud1S6JPKQT2IAxzIhF2",
            "ClubName": "Astronomy Club at UCSD",
            "clubEmail": "asucsd.skaggs@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10738",
            "PurposeStatement": "Astronomy Club at UCSD aims to promote the interest of astronomy and astrophysics among UCSD undergraduates. Our organization will focus on the exploration of the universe. We hope to help students, who are interested in astronomy, make observations, know each other and get more access to professional faculty."
        },
        {
            "UID": "oRfNDz5fDhg4dlexpX6gyBBdnPt2",
            "ClubName": "Association of Indian Graduate Students",
            "clubEmail": "awm@math.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12062",
            "PurposeStatement": "To conduct events based on Indian culture and provide a congenial atmosphere for students belonging to the Indian community."
        },
        {
            "UID": "Mw9DxNhWsKV8bIBBHSjAXWCPXos1",
            "ClubName": "Alpha Chi Omega",
            "clubEmail": "axo.sd.president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10790",
            "PurposeStatement": "Our purpose is to promote friendship, leadership, learning, and service amongst our members."
        },
        {
            "UID": "nXh9DpOKH8aXWR3emMTWZIUqs3U2",
            "ClubName": "San Diego Arts Collective",
            "clubEmail": "ayu@cosandiego.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10760",
            "PurposeStatement": "The San Diego Arts Collective aims to bring equity to in the art world and in the larger San Diego area by visiting local high schools and hosting regular arts-educational workshops, as well as fostering a collaborative environment for university students interested in the arts."
        },
        {
            "UID": "b7p3PouHmvT2eS8Q0hq8q8n43DJ3",
            "ClubName": "Undergraduate Communication Society at UCSD",
            "clubEmail": "b8duong@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10822",
            "PurposeStatement": "The Undergraduate Communication Society (UCS) is an organization run by and for students interested in communication. The UCS conducts career panels, field trips (in which we are not responsible for member's transportation and utilize public transportation throughout San Diego) and social events for members, often including alumni and guest speakers from the communication field."
        },
        {
            "UID": "O9DFxEy49DQ26mRL599z7uzhiQU2",
            "ClubName": "Beat @ UCSD, The",
            "clubEmail": "bahai@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8524",
            "PurposeStatement": "To provide a fun and lively atmosphere to continue our passion for a cappella music at the collegiate level; to immerse members into the a cappella community on-campus and beyond; to strengthen and improve vocal and musical ability; to provide entertaining performances; and to foster close-knit relationships within the group."
        },
        {
            "UID": "pu9i5kw6JMXiGDMmDBoVtcb5pTm2",
            "ClubName": "Breakaway Collective Productions",
            "clubEmail": "bbb@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10740",
            "PurposeStatement": "BC Productions aims to help students, faculty, and other organizations produce a variety of media, while providing members with hands on experience in multiple fields of production, and opportunities to engage with media professionals."
        },
        {
            "UID": "4ZWm1SfWmWRh1ZsyteHlKQ186yi2",
            "ClubName": "Business Council",
            "clubEmail": "bcproductions.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10659",
            "PurposeStatement": "Business Council is organized to foster an integrated business community between student organizations, administrative bodies, and outside parties."
        },
        {
            "UID": "aKGfF8on3xcCERPGUuWJ5bmrcWb2",
            "ClubName": "Triton Engineering Student Council",
            "clubEmail": "beadprogram@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10736",
            "PurposeStatement": "TESC wants to develop engineers who exhibit leadership through excellence in all aspects of life: - Prepare students for, and connect them with, professional opportunities; - Coordinate, and collaborate with, engineering student organizations; - Create and maintain a vibrant community for engineering students; and - Champion engineering and engineers in the school, community, and beyond."
        },
        {
            "UID": "WRzAimc8uQbzjFwfTxbyrfyImW92",
            "ClubName": "Biomedical Engineering Society (BMES)",
            "clubEmail": "begs@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8498",
            "PurposeStatement": "To foster the growth of students interested in biomedical engineering through professional development and the mutual engaging of industry, alumni, and the local community."
        },
        {
            "UID": "HQA4Suiwy4SSSgZDwrazrQB8OpD2",
            "ClubName": "Triton Fighters",
            "clubEmail": "BEI@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8494",
            "PurposeStatement": "Triton Fighters seeks to offer a place where fans of fighting games of any kind can meet up to play and form a community. We hope to host weekly meetups at which students can bring setups for their favorite games to play with others, allowing them to meet new people that share common interests."
        },
        {
            "UID": "7hoRc6KTVjaglxuCpX359iboMS43",
            "ClubName": "Mock Trial @ UCSD",
            "clubEmail": "bfbarry@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8363",
            "PurposeStatement": "The purpose of Mock Trial at UCSD is to encourage interest in law advocacy and to prepare for Mock Trial competitions."
        },
        {
            "UID": "gVt0h53Ju2aWlr3OxqQnn33YZMu2",
            "ClubName": "Black Student Union",
            "clubEmail": "bioeasi@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8539",
            "PurposeStatement": "Conceived in 1967, the Black Student Union at UC San Diego is charged with four fundamental responsibilities: 1. Access, retention, and yield programming to inspire, enlighten, to build unity, to challenge, and to perpetuate the ideologies of the Black Student Union at UCSD 2. To support the efforts of those organizations which perpetuate the ideologies of the Black Student Union 3. To assist in providing an environment that is conducive to academic excellence amongst the Black student population 4. To be accountable through representation."
        },
        {
            "UID": "pJREgputZ1RYXrWplnSNlGEN6jM2",
            "ClubName": "Board Game Club",
            "clubEmail": "bmes.ucsandiego@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10666",
            "PurposeStatement": "The purpose of the Board Game Club is to bring members of the board game community together and create a social setting to play, create, and discuss strategies to board games."
        },
        {
            "UID": "3zflwgmPGWgjwIQwRMNSpUUMy3j2",
            "ClubName": "Triton Street Fighter",
            "clubEmail": "board.tcg@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10737",
            "PurposeStatement": "Triton Street Fighter is an organization centered around playing the video game Street Fighter 5 and other Fighting Games. The focus is to establish a community of players that all share the same love and passion for the game."
        },
        {
            "UID": "Q9C2uDXpHMMpbejF5zPl7r3277i1",
            "ClubName": "Triton-Ai",
            "clubEmail": "board@tesc.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11915",
            "PurposeStatement": "Building and racing autonomous RC cars."
        },
        {
            "UID": "aqIUuFGaCPZw7YX4VfYn7l1vKlC2",
            "ClubName": "Breakin' Club- Body Rock",
            "clubEmail": "booksforprisonersatucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8484",
            "PurposeStatement": "Established in 2003, Bodyrock is UCSD's first and only breaking club. Our goal is to promote the hip hop culture by teaching breaking to beginners, providing practice space for local bboys and bgirls, and showcasing our skills through performances and battles. Bodyrock hopes to entertain and inspire with our combination of athleticism and musicality."
        },
        {
            "UID": "JPrGfWJbgwU40EnJtsX1XahdPkz2",
            "ClubName": "Call of Cthulhu and Murder Mystery Game Club",
            "clubEmail": "businesscouncilucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8551",
            "PurposeStatement": "The purpose of the club is to organize students to participate in Call of Cthulhu and Murder Mystery Game. Members will be provided with access to participate in both â€œface to faceâ€ role play games to enhance social interactivity."
        },
        {
            "UID": "PrNm7VbfJtQDQf7pPrWWBQKExgg2",
            "ClubName": "Pre-PA Student Organization (PPASO)",
            "clubEmail": "bvn015@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8538",
            "PurposeStatement": "The mission of PPASO is to inform students about the physician assistant profession and to provide members with the resources that will best help them achieve their goals of entering physician assistant school. PPASO seeks to accomplish this mission by educating students about the process of becoming a physician assistant, collaborating with invaluable resources such as physician assistants, medical professionals, alumni, and UC San Diego faculty, and fostering camaraderie within the organization through unique experiential opportunities."
        },
        {
            "UID": "5UHxXDlIQJUm6ouBA5dqj9tg1OE3",
            "ClubName": "Chess Club at UCSD",
            "clubEmail": "c.scholars.all@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11995",
            "PurposeStatement": "To promote and encourage chess on campus by creating an intellectually challenging environment by introducing regular chess meetings and tournaments to UCSD."
        },
        {
            "UID": "9x2Rl7hX5ya7sB7LjULFFzhG1vF2",
            "ClubName": "TEDx@UCSD",
            "clubEmail": "c9shin@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8491",
            "PurposeStatement": "TEDxUCSD's mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately, their world. We aim to engage, motivate, and celebrate all generations of the UCSD family."
        },
        {
            "UID": "SzkZ7CWDxnaXvmSmLJ67OdNTFXb2",
            "ClubName": "Pre-Pharmacy Society (PPS)",
            "clubEmail": "cakappa@pibetaphi.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10700",
            "PurposeStatement": "Pre-Pharmacy Society is an organization that promotes the career of pharmacy through a variety of resources that include workshops, volunteer opportunities, guest speakers, and networking to compliment the interests of our members. Our main objectives are to better prepare our members for pharmacy school admission and to learn and explore the multitude of career options for pharmacists. While providing essential information to our members, PPS also strives to make the club as fun as possible for our members."
        },
        {
            "UID": "Sz0dxuSZ5UhSvO6tN9jPhM6qSME3",
            "ClubName": "Sri Lankan Students Association",
            "clubEmail": "calrhopresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8510",
            "PurposeStatement": "To gather the Sri Lankan student community and those interested in the country of Sri Lanka within UC San Diego. The Sri Lankan Student Association aims to promote Sri Lankan culture and showcase Sri Lankan traditions through several mediums."
        },
        {
            "UID": "Rv03NFbhvVW2flPRcO9fLTEUyJw1",
            "ClubName": "Cancer Outreach Team",
            "clubEmail": "camphopeucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10793",
            "PurposeStatement": "Our goal is to reduce cancer morbidity and mortality among the Pan-Asian community by educating UCSD students about appropriate cancer control measures and providing opportunities for those students to disseminate their acquired knowledge to the pan-Asian community at-large. Our team is a non-profit, student- run organization and has been operating continuously since 1994."
        },
        {
            "UID": "hyr0FZAWGaQ5vxsjRZbawmRNaj02",
            "ClubName": "CEO GLOBAL at UCSD",
            "clubEmail": "canceroutreachteam@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9649",
            "PurposeStatement": "The positive transformation of the Global Community by developing â€œServant Leaders of Integrityâ€ and helping transform the lives of university students."
        },
        {
            "UID": "6WImuBA9TWbUIlLUtLQFrS5pEvQ2",
            "ClubName": "Chinese Computer Community",
            "clubEmail": "CANGQIONGZHIANGX@GMAIL.COM",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8602",
            "PurposeStatement": "To create a technology-driven business incubator and serve students related to computer fields with opportunities in professional working environment, strengthen technical skills and seek business growth."
        },
        {
            "UID": "ROkg3awUJeYGcoUOmX6yWgRddiE2",
            "ClubName": "Chinese Dance Association",
            "clubEmail": "casaucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10758",
            "PurposeStatement": "To enrich the student community of UCSD with the awareness of Chinese culture through the art of dance. Our purpose is to create an atmosphere of artistic and creative expression for everyone. CDA practices Chinese dance with emphasis on ballet techniques, but continues to keep the essence of Chinese culture in the pieces. In order to spread multi-cultural acknowledgemnt, CDA uses dance to celebrate the individual creativity and artistic collaboration."
        },
        {
            "UID": "GcHL76FPRlQwnU57kAuAfetp8A82",
            "ClubName": "Chancellor's Scholars Alliance",
            "clubEmail": "cathcom@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9647",
            "PurposeStatement": "To promote service, academic development, leadership, and a sense of community among recipients of the UCSD Chancellorâ€™s Scholarship through volunteer and community service opportunities, social events, and organized meetings."
        },
        {
            "UID": "2RXgoZqdBXedSzBxDC03TcwhrbW2",
            "ClubName": "Che Cafe",
            "clubEmail": "cathcom@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10813",
            "PurposeStatement": "The Che Cafe is a community space for both the greater San Diego community and the University of California, San Diego. We identify this space as \"Do It Yourself\" venue, vegan cafe, resource center for radical grassroots activists. Furthermore, we open this space to people who would like to add to the space while at the same time dismantle hierarchies. The Che Cafe Collective organizes numerous political and social events for all ages and allows vegan groups to serve tasty vegan food."
        },
        {
            "UID": "icG9rKZHZNMkxInohKB5fov03Ih2",
            "ClubName": "KOTX",
            "clubEmail": "ccrao@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10767",
            "PurposeStatement": "KOTX is a K-pop dance team that entertains and spreads Korean culture through K-pop. Creating a welcoming environment for all K-pop lovers and is open to all levels of dancers. LET'S GET KOTX!"
        },
        {
            "UID": "Szwf9vWl7INCnF7rreWa7jRxDPk2",
            "ClubName": "Malaysians in America at UCSD",
            "clubEmail": "ceclife@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11973",
            "PurposeStatement": "The purpose of this cultural organization shall be to introduce Malaysian culture to all UCSD students as well as facilitate events for Malaysians students studying at UCSD; Facilitate events such as but not limited to: a. An organization aimed at encouraging conversation and bonding with new incoming Malaysian students and returning Malaysian students, b. Provide a sense of home for Malaysians studying abroad at UCSD, c. For Malaysian students who seek it, assistance with assimilation in American culture, d. Arrange events to introduce Malaysian culture and customs to other UCSD students (food, games, and traditional celebrations), e. Collaborate with other Malaysian Student Associations around the United States of America to form academic, social, and professional relationships; Malaysians in America (MIA) at UCSD is a non-profit student run cultural organization that will be financed through: a. Associated Students funding, b. External donations and charity, c. MIA fundraisers;"
        },
        {
            "UID": "vN1qQWqwe5dXbg3cMaxlhhuFQz13",
            "ClubName": "Christians at UCSD",
            "clubEmail": "cga.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8493",
            "PurposeStatement": "To provide Christian fellowship at UCSD"
        },
        {
            "UID": "HTIY4MeZcxenoxCKI5x0bwnYNO33",
            "ClubName": "Chicanx/Latinx For Community Medicine",
            "clubEmail": "chemecar@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10664",
            "PurposeStatement": "We are a pre-health undergraduate organization that is committed to providing support, guidance, and education in our pursuit for higher education in medicine. Our beliefs are deeply rooted in providing better health care for our underserved communities through service and empowerment."
        },
        {
            "UID": "z8qAtJB7PzYhiKi2Eg9L2mSsiRy2",
            "ClubName": "Chinese Drama Club (CDC)",
            "clubEmail": "chineseclassicdanceteam@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10732",
            "PurposeStatement": "The purpose of this club is to establish a Chinese culture proposing drama club, providing Chinese culture in the form of artistic activities for UCSD communities, and even the entire San Diego area."
        },
        {
            "UID": "30wStJj7FoaT64BjDhbIr0ujdH32",
            "ClubName": "Chinese Graduate Association",
            "clubEmail": "chinesedance.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9605",
            "PurposeStatement": "To help incoming new international students from China blend into America's multi-cultural society. Help Chinese student to understand other cultures and shorten the gaps between races and nations due to inexperience and misunderstandings. Also to provide convenient services to Chinese students and protect their safety."
        },
        {
            "UID": "nn4sayKjvQhNgt1DBMvpueaApRX2",
            "ClubName": "Circle K. International",
            "clubEmail": "chineseunion@outlook.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8446",
            "PurposeStatement": "Circle K International is comprised of university students who are responsible citizens and leaders with a lifelong commitment to community service worldwide. Through the three tenets of Service, Leadership, and Fellowship, Circle K inspires people to better our world, following the motto of \"Live to Serve, Love to Serve.\" Circle K provides constructive opportunities for students to become involved on their campuses and communities through service work to others in need."
        },
        {
            "UID": "zKXb8KwYvhMrrMWsALGtnoSOAMh2",
            "ClubName": "Camp HOPE America at UCSD",
            "clubEmail": "cocmmgucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10815",
            "PurposeStatement": "Camp HOPE America at UCSD members are a part of helping San Diego teens and young children exposed to trauma and domestic violence find pathways to HOPE and healing through a camping and year-round mentoring program. In partnership with the national evidence-based organization Camp HOPE America, members explore trauma informed mentoring, fundraising for community activities, and professional development. Through this club, our members become a network of hope givers who help break the cycle of domestic violence."
        },
        {
            "UID": "zBJnr3lG2APwvdBEfNeJw1xerUw1",
            "ClubName": "Helping Students Focus",
            "clubEmail": "college@harvestsd.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8461",
            "PurposeStatement": "The purpose of this non-profit organization is to provide students with ADHD, ADD, and other concentration related needs the academic and communal support they need whether it be through peer tutoring, support groups, or referring programs that the organization does not offer to allow for improvement in the academic field."
        },
        {
            "UID": "ZpH5kEx2m0ZG86MBq7bGQSB6O8S2",
            "ClubName": "San Diego Homeless Health Initiative",
            "clubEmail": "college@rgcsd.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9622",
            "PurposeStatement": "The organizationâ€™s purpose is to improve the San Diego homeless populationâ€™s health and well-being. We will accomplish this mainly through the production and distribution of health kits specifically designed to provide the best improvement to homeless lives. However, we will aim to aid the homeless population in any way we can, which may include activities such as holding donation drives, creating informational pamphlets for the homelessâ€™ benefit, or donating money raised to local homeless shelters. This organization seeks to bring light to the issue of homeless personsâ€™ poor states of health, which we believe is an issue much looked over by society."
        },
        {
            "UID": "OCeKz8gjuPd0zdT1r7tm620EK193",
            "ClubName": "Computer Science for Agriculture",
            "clubEmail": "comicbookclub@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8569",
            "PurposeStatement": "The goal of CSA is to enable students interested in a variety of fields to connect and engage on solving a singular goal â€“ how to bring aspects of gardening and farming into the 21st century, through the engagement of computer science, engineering, and data sciences majors. CSA will work alongside Rogerâ€™s Community Garden (formerly North County Community Garden) to host student projects relating to agriculture, food waste, bioenergy, and sustainability-oriented projects. Members of the organization can hope to gain skills in hardware and software design, soldering, data science, biology, chemistry, etc. Members are not required to have any background knowledge, as CSA and its partners are more than happy to help get interested members up to speed."
        },
        {
            "UID": "8NKpf0n0IVPHShX4MGZZxMKAy8U2",
            "ClubName": "Cooking Hub",
            "clubEmail": "communityleadershipthruservice@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8525",
            "PurposeStatement": "Cooking Hub aims to bring a good chance for students to get together, teach students practical cooking skills, advocate healthier college diets, raise awareness of cultural diversity represented by food, and help solve food insecurity at UCSD."
        },
        {
            "UID": "zQCubgwjjBVzBlyLc0O7ISDqEe23",
            "ClubName": "Team HBV",
            "clubEmail": "conservation@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8429",
            "PurposeStatement": "Team HBV is a national network spanning many colleges and high schools whose goal is to create a strong, unified community that will further efforts to eradicate hepatitis B. The national Team HBV mission is to raise awareness of the disproportionately high incidence of hepatitis B and liver cancer among Asian and Pacific Islanders (APIs) worldwide and hopes to create programming that will address the disparity. On the campus of UCSD, Team HBV will raise awareness on campus and in the local community through screening initiative programs, outreach campaigns, inviting guest speakers, and much more. Our objectives are to educate the community about hepatitis B and liver cancer, evaluate our efforts on our outreach and education projects, participate in national and international Team HBV efforts, and to collaborate with the other individuals and organizations that support the Jade Ribbon Campaign. We welcome everyone to join us in our fight against hepatitis B!"
        },
        {
            "UID": "dbWQfPk9lvXwou4Dy0geFV6ZvuL2",
            "ClubName": "SynBio",
            "clubEmail": "contact@setcucsd.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8404",
            "PurposeStatement": "The purpose of SynBio is to: A. Raise awareness of and drive interest in the field of synthetic biology B. Provide workshops to build the skillsets needed to be effective in quantitative biology research C. Encourage interdisciplinary modes of thinking and collaboration D. Create a community for individuals of all biology-related interests E. Foster the growth and development of open source biology at UC San Diego"
        },
        {
            "UID": "sIwegHEdTNaPgp6MmhIq7ngMFYH3",
            "ClubName": "",
            "clubEmail": "contact@votolatino.org",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "itOiCrZIakaiSN61v67Q3bBt3u02",
            "ClubName": "Counseling and Psychological Services Peer Education Program",
            "clubEmail": "cookinghub.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11857",
            "PurposeStatement": "The CAPS Wellness Peer Education Program is a non-profit organization that seeks to provide educational and outreach opportunities to members of the UCSD community and beyond. We recognize the value of peer support in helping students address personal concerns. Through peer education, we hope to help students recognize their resources as well as increase prevention of mental illness and decrease the stigmas associated with utilizing the Counseling and Psychological Services."
        },
        {
            "UID": "uznH3t8RfhcMwGvQsbCd1h97tkr2",
            "ClubName": "Books Beyond Boundaries",
            "clubEmail": "cooperbeaman@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10676",
            "PurposeStatement": "Our mission is to re-humanize inmates and reduce recidivism rates within the San Diego community. We believe that facilitating book groups with prisoners can aid in this process by promoting healthy human interaction. Interactions among inmates and between inmates and volunteers can help build or re-build prisonersâ€™ ability to function with other people. It can also help to re-humanize inmates who have by making prisoners feel heard and instilling self-worth. We hope that these skills and values make it easier for prisoners to re-enter society and thus prevent them from committing further crimes."
        },
        {
            "UID": "dknBqETJjnhAXQPUkXxWmM8XwYX2",
            "ClubName": "Civil Discourse Club",
            "clubEmail": "CPFI.UCSD@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8374",
            "PurposeStatement": "The goal of this organization is to offer a forum for political and philosophical inquiry. The organization seeks to promote free speech, civil discourse, and open criticism of all ideas. Organization members are offered a platform to share and discuss their ideas with others."
        },
        {
            "UID": "DEoUC89MsZRYXto8v5UILejjYz82",
            "ClubName": "Grad Pals Program",
            "clubEmail": "crkirkpa@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10810",
            "PurposeStatement": "The Grad Pals Program is a graduate student buddy program which aims to help new students settle in quicker, give them the opportunity to ask questions, provide them with support during the first few weeks and ease the transition into their graduate life at UCSD."
        },
        {
            "UID": "SCe0SJF5mVQikhono8ea7UGod862",
            "ClubName": "Campus Crusade for Christ",
            "clubEmail": "csa.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10669",
            "PurposeStatement": "Win, Build, and Send: turning lost students into Christ-centered laborers."
        },
        {
            "UID": "ce7xbYEkUwatxW0ioqy7vZ7zZ972",
            "ClubName": "Healing Hands at UCSD",
            "clubEmail": "cse-gradwic@eng.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8584",
            "PurposeStatement": "Healing Hands at UCSD aims to improve the access to healthcare in the homeless and underserved communities and to provide students opportunities with hands-on medical related events around San Diego; to inspire and help teach the medically underserved how to advocate for mental health and medical services. The ultimate goal is to create an environment of learning and awareness in our members in order to build a bridge of understanding and assistance towards the homeless and at-risk population."
        },
        {
            "UID": "eNR9Zd4O6YPRutjFSUjlEAf4p052",
            "ClubName": "Coptic Club at UCSD",
            "clubEmail": "cses@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9640",
            "PurposeStatement": "To allow members to grow spiritually while educating them about the Coptic culture and foremost religion."
        },
        {
            "UID": "pEZp1wOxCdbIA45eD5e4zeGTdEz1",
            "ClubName": "Data Science Student Society at UCSD",
            "clubEmail": "csforeach@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8394",
            "PurposeStatement": "The Data Science Student Society at UCSD is an interdisciplinary academic organization designed to immerse the community in the diverse and growing facets of Data Science: Machine Learning, Computational Statistics, Data Mining, Visualization, Predictive Analytics, and any new emerging relevant fields of study. With practical hands-on data projects, a professional portfolio-building approach, and fun outreach activities, the Data Science Student Society at UCSD strives to enrich the academic life of the student community by strengthening them for success in their current and future pursuits of Data Science related fields."
        },
        {
            "UID": "YhZhWWpF7PTCJxP7E0Z1adDRiIT2",
            "ClubName": "Colleges Against Cancer",
            "clubEmail": "cssa.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8535",
            "PurposeStatement": "Colleges Against Cancer is a non-profit nationwide collaboration of college students, faculty, and staff dedicated to eliminating cancer by initiating and supporting programs for cancer education in college communities. We accomplish this through our four strategic directions: Cancer Education, Advocacy, Relay For Life, and Survivorship."
        },
        {
            "UID": "dsM5yysTc2U7QAqzqtisq75GRY52",
            "ClubName": "American Mock World Health Organization at UCSD",
            "clubEmail": "cwenzel@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8427",
            "PurposeStatement": "The American Mock World Health Organization (AMWHO) is the only model-WHO entity in the United States of America. AMWHO aims to increase discourse on global health policy through creating authentic simulations of the World Health Assembly, the sole decision- making body of the World Health Organization. Participants assume the role of a WHO- Ambassador, Non-Governmental Organization Representative, or Media Correspondent, and form health-related positions to create a final resolution sent to the WHO in Geneva, Switzerland."
        },
        {
            "UID": "Ffyj7BP4t9QZXmb8ZCLq3NPJy6C2",
            "ClubName": "Emergency Medical Services at UCSD",
            "clubEmail": "d12ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11954",
            "PurposeStatement": "Emergency Medical Services at UCSD is organized exclusively to educate students and staff through CPR certification and training, provide information and resources for individuals, and to positively impact the health and safety of the UCSD community."
        },
        {
            "UID": "jU3Zb5UZ06Ndxote0Qy5oWQqlB83",
            "ClubName": "Deejays and Vinylphiles Club",
            "clubEmail": "darealpunjabiz@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8415",
            "PurposeStatement": "To educate the student body on DJ skills, techniques, and culture. To guide members through the process of producing and marketing free campus events for the student body."
        },
        {
            "UID": "YxN3dz0ZvBZKxSvrfCqI63YWZXG2",
            "ClubName": "Delta Delta Delta",
            "clubEmail": "darkstar@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8562",
            "PurposeStatement": "THE PURPOSE OF DELTA DELTA DELTA shall be to establish a perpetual bond of friendship among its members, to develop a stronger and more womanly character, to broaden the moral and intellectual life, and to assist its members in every possible way. IT SHALL ALSO BE THE PURPOSE OF DELTA DELTA DELTA to promote and develop mutually beneficial relationships between the Fraternity and the colleges and universities where the Fraternity has established chapters, to develop qualities of unselfish leadership among its members, and to encourage them to assume, with integrity and devotion to moral and democratic principles, the highest responsibilities of college women."
        },
        {
            "UID": "hAggH32XaUOYTWcMjMjOr4rydjM2",
            "ClubName": "",
            "clubEmail": "deep.yonderdynamics@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "GePiu10OATUpwtWyFiAlQHHqyKv2",
            "ClubName": "Ecology, Behavior and Evolution Club at UCSD",
            "clubEmail": "developerstudentclubucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10648",
            "PurposeStatement": "The Ecology, Behavior & Evolution Club at UCSD seeks to provide students with research opportunities, internship guidance, and information regarding careers in ecology, behavior & evolution (EBE). The group also serves as a social nexus for students with EBE interests, and provides an organizational structure to promote volunteer activities."
        },
        {
            "UID": "I6yta1a4kGeDRbXtBP99uSfXpWs1",
            "ClubName": "Design/Build/Fly",
            "clubEmail": "dgucsdpresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8522",
            "PurposeStatement": "The Design/Build/Fly (DBF) student team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission objective. The contest provides a real-world aircraft design experience for students by giving them the opportunity to validate their analytical studies. The competition is hosted by Textron Aviation, Raytheon Missile Systems, and the American Institute of Aeronautics and Astronautics (AIAA) national engineering society."
        },
        {
            "UID": "1fp81gaKxPYB1TJYytm9L0CvZo63",
            "ClubName": "Delta Lambda Phi",
            "clubEmail": "djclub.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8402",
            "PurposeStatement": "1) To develop dignified and purposeful social, service, and recreational activities for all men, irrespective of sexual orientation or gender expression. 2) To lead in determining the rights and privileges of individuals in society. 3) To present a strong and positive image which respects the diversity of all individuals."
        },
        {
            "UID": "9V3jetmJG2UddR6LWEyFPqnS1wl1",
            "ClubName": "Junior Panhellenic",
            "clubEmail": "dprotono@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8452",
            "PurposeStatement": "To assist Panhellenic Council in overseeing the 11 Panhellenic and 1 Affiliate Chapters within the Panhellenic Council. These chapters are: Alpha Chi Omega, Alpha Epsilon Phi, Alpha Omicron Pi, Alpha Phi, Chi Omega, Delta Delta Delta, Delta Gamma, Kappa Alpha Theta, Kappa Kappa Gamma, Phi Sigma Rho (Affiliate), Pi Beta Phi, and Sigma Kappa."
        },
        {
            "UID": "vxaS6m9zr7XsorvjNDjdIAJ5b293",
            "ClubName": "Delta Epsilon Mu",
            "clubEmail": "ds3ucsdmail@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9638",
            "PurposeStatement": "On May 13, 2017, the UC San Diego Colony earned a Charter as the 29th Chapter of Delta Epsilon Mu. The 16 Founders of Alpha Lambda Chapter thus established a foundation at UC San Diego to develop well-rounded leaders in the various health fields, centered around the Pillars of Loyalty, Dedication, Friendship, and Support."
        },
        {
            "UID": "Q0qexgEErGgFkP9XmMnowdGLnOD2",
            "ClubName": "Association of Student Pharmacists at UCSD Skaggs School of Pharmacy",
            "clubEmail": "dzurale@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10733",
            "PurposeStatement": "The purpose of this association shall be the development, promotion, and enhancement of the knowledge of pharmacy in the community, all in harmony with the educational interests of the University of California, San Diego Skaggs School of Pharmacy."
        },
        {
            "UID": "SBZXR3QDAVZ450qnq6w2BugMiqm2",
            "ClubName": "Triton Software Engineering",
            "clubEmail": "e4fisher@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8597",
            "PurposeStatement": "Triton Software Engineering (TSE) is an interdisciplinary student-run organization at UC San Diego that designs and develops pro-bono software (e.g. web and mobile applications) for non-profits, while giving our students practical, real world experience."
        },
        {
            "UID": "vS42675cnCaXxoJEgqep2V6LTuT2",
            "ClubName": "Engineers Without Borders at UCSD",
            "clubEmail": "ebeclub@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8556",
            "PurposeStatement": "Engineers Without Borders--UCSD Chapter is a non-profit organization dedicated to the betterment of developing communities around the world through the design, implementation, and construction of sustainable projects that fit the need of the community. Our goal is to establish an on-going relationship with these developing communities and to teach them the necessary skills to maintain the facilities and structures that we leave them with."
        },
        {
            "UID": "3nrznIL2LMaTt3ZLEcWLXiEH5pC3",
            "ClubName": "Figure Skating @ UCSD",
            "clubEmail": "eccf.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8500",
            "PurposeStatement": "We compete in the Intercollegiate circuit throughout the school year. One of our main goals is to qualify for Intercollegiate Nationals as a team. Each skater performs individually in the level and event of their choosing and the points they earn from podium placement get added to the UCSD cumulative team score. Intercollegiate competitions are a great place to have a fun time and meet skaters from other schools throughout the country. Our team is tight knit on and off the ice. Practices are largely self scheduled figure skating is a sport driven by individual motivation to improve. However, members often carpool to practice help one another with jumps, spins, and choreography."
        },
        {
            "UID": "HeysFvfXIDZMFGoDQK2XBCT76G62",
            "ClubName": "Engineers for a Sustainable World",
            "clubEmail": "eceusc@eng.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10833",
            "PurposeStatement": "ESW-UCSDâ€™s Vision: We envision a worldwide era of sustainability in which all communities cooperate to achieve lasting environmental, social, and economic prosperity. ESW-UCSDâ€™s Mission: Our mission is to bring communities together to develop, implement, and share sustainable technologies and practices worldwide."
        },
        {
            "UID": "UkjVfKHYvEeWUXC1HHUNldE2FYE2",
            "ClubName": "Psi Chi Omega",
            "clubEmail": "eco@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11966",
            "PurposeStatement": "We are an Asian-interest social fraternity established to uphold the values of integrity, perseverance, and eternal brotherhood."
        },
        {
            "UID": "v0DhxCcxrKWH1MDLBr5gsr8LzZf1",
            "ClubName": "Native American Student Alliance",
            "clubEmail": "editor@themq.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9617",
            "PurposeStatement": "The purpose of this organization is to facilitate the maintenance and education of Native American culture and beliefs, while maintaining a community for Native students (and Allies) on campus and contributing to local Native communities. Native American Student Alliance is a not-for-profit organization."
        },
        {
            "UID": "s2jb1vGnT3YRLWplRNEPfKHoHsE3",
            "ClubName": "Music and Memory at UCSD",
            "clubEmail": "egchrist@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8455",
            "PurposeStatement": "The purpose of Music & Memory at UCSD is to promote and carry out the mission of the parent Music & Memory non-profit organization, which is to bring personalized music into the lives of people with a wide range of cognitive and physical challenges through digital music technology and live performances, vastly improving quality of life. Further, we would like to help advocate for Music & Memoryâ€™s goal of making this form of personalized therapeutic music a standard of care throughout the healthcare industry."
        },
        {
            "UID": "NKWBZJo9WWehKCa8N2AyTqveeXJ2",
            "ClubName": "Finesse Dance Company",
            "clubEmail": "eim.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10780",
            "PurposeStatement": "Our purpose is to provide an outlet for dancers who come to college seeking to continue their passion for dance in addition to pursuing higher education. Our contemporary based dance company will hold various showcases and events to allow our members to express themselves through artistic movement. Our main goal is to offer a space for students who wish to further build upon their talent and creativity, as well as form a united family."
        },
        {
            "UID": "pJU9baqdGbcscaTVItH8dhvMiOi1",
            "ClubName": "Eta Kappa Nu (HKN)",
            "clubEmail": "empower.ucsandiego@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9650",
            "PurposeStatement": "Eta Kappa Nu (IEEE-HKN) is the student honor society of IEEE and is dedicated to encouraging and recognizing excellence in IEEE fields of interest. Members consist of students, alumni, and professionals who have demonstrated exceptional academic and professional accomplishments. Student members are selected on the basis of scholastic standing, character, and leadership. At UCSD, HKN provides free tutoring and hosts a variety of workshops and events to promote technical, professional, and academic development."
        },
        {
            "UID": "oOlmm5KdOIOWKelnYMGxts7H7yh1",
            "ClubName": "Expanding Visions for Health",
            "clubEmail": "envisionaries.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10789",
            "PurposeStatement": "At Expanding Visions for Health we are dedicated to providing service aimed at improving the health of our community."
        },
        {
            "UID": "EYKW64DhQfN5JPNwFgPQx4eO2h12",
            "ClubName": "Evangelical Chinese Christian Fellowship",
            "clubEmail": "esw.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8386",
            "PurposeStatement": "ECCF is an on-campus Christian fellowship focusing on the Mandarin speaking community in UC San Diego. Our fellowship is a group of brothers and sisters supporting each other physically and spiritually while studying in UCSD and we are here to build a home away from home together through the love of Christ."
        },
        {
            "UID": "lEfvCYpVnMbo74bwu44b9VXJc5o1",
            "ClubName": "Alpha Epsilon Omega, Eta",
            "clubEmail": "eta@alphaepsilonomega.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10697",
            "PurposeStatement": "To unite men who strive to achieve high standards of achievement in all aspects of life, and who share in the need of promoting Armenian history, language, and culture."
        },
        {
            "UID": "PrFz0Zy2t7g2ZZpDxrGsyr1LE5Z2",
            "ClubName": "Falun Dafa at UCSD",
            "clubEmail": "etaomegachi2018@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8456",
            "PurposeStatement": "Falun Dafa Club at UCSD is an ancient meditation practice in the Buddha school tradition; at the core of the practice are the values of Truthfulness, Compassion and Forbearance, which act as a guide for daily life and practice. Through tranquil meditations and an emphasis on the elevation of oneâ€™s heart-mind character, Falun Dafa has brought health and well-being to more than 100 million people in 100 countries around the world. Falun Dafa is not a religion, there is no membership and is completely free of charge! It is a mind-body practice with a spiritual component that covers metaphysics, ethics and enlightenment. Through persistent practice one strives to achieve a state of selflessness, increased insight, inner purity, balance- true health and ultimately enlightenment. Since July 1999 the communist government of China has persecuted and enslaved millions of innocent people for practicing Falun Dafa and they comprise 65% of labor camps, detention centers and prisons across China for believing in Truth- Compassion- Forbearance. Evidence from acclaimed sources have proven tens of thousands of Falun Dafa practitioners to have been killed from live organ harvesting for Chinaâ€™s lucrative organ transplant market. So what do we, as an organization, do on campus? We meditate together and teach the exercises, promote cultural art events that revive traditional Chinese culture and raise awareness about the persecution and organ harvesting of Falun Dafa practitioners in China."
        },
        {
            "UID": "evLw5D9qwSQJBAzBCLkXLPefgZk2",
            "ClubName": "Exercise is Medicine",
            "clubEmail": "ewb.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11986",
            "PurposeStatement": "To raise awareness about exercise/activity as a means for contributing and maintaining good health, and preventing disease. While also promoting the interests and professional development of the multidisciplinary field of sports medicine; such as orthopedics, family medicine, and rehabilitation."
        },
        {
            "UID": "N6h7bsGPmQP7fc40uTtZTZQA8bt1",
            "ClubName": "Eta Omega Chi",
            "clubEmail": "ewh.at.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10692",
            "PurposeStatement": "Eta Omega Chi is the first East Asian Entrepreneurship Fraternity organized to pursue the spirit of entrepreneurship; to share and consolidate resources among students; to encourage each innovative idea as well as leadership, and to further a higher standard of cultural and professional value in order to serve the community. During our pledging process, a wide range of topics and workshops about entrepreneurship will be taught to the pledges such as the how to give an elevator pitch, resume building, and how to write a business plan. We also will share a lot of resources for academic purpose and equip our brother with strong leadership."
        },
        {
            "UID": "NXIJg6N9K9dCjmaJvoi3lLLyY2g1",
            "ClubName": "Undergraduate Women in Computing at UCSD",
            "clubEmail": "eziaeika@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11866",
            "PurposeStatement": "WIC is a non-profit student organization committed to fostering a supportive and informative environment for women in computing through technical, professional development, and social events. We also focus on high school outreach programs to bring more young women into the field. Keynote speakers, mentorship, career fair information, interview preparation, programming competitions, and attending CS conferences are few of the opportunities that we provide for our members."
        },
        {
            "UID": "WzhmVIckPaVaG7C42omPwCPZeST2",
            "ClubName": "Fisherman's Club",
            "clubEmail": "fair.play.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8492",
            "PurposeStatement": "Here at the Fishermanâ€™s Club at UCSD, we provide a welcoming community for students to bond over the sport of angling. Our central goal is to educate students about the aspects and nuances of fishing through engagement in friendly competition and exploration of the many fisheries San Diego has to offer. We will also learn about fisheries and the importance of conservation through our connections with local community groups and faculty members. We welcome students regardless of experience, so whether you've grown up on the water or have yet to wet a line, we invite you to join Fisherman's Club! Check us out on Facebook! https://www.facebook.com/fishermansclubucsd"
        },
        {
            "UID": "lapCm3RvvRNbxWRYSSXjecfl1Tg1",
            "ClubName": "Five Millennia Chinese Orchestra",
            "clubEmail": "fdmucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9631",
            "PurposeStatement": "The purpose of our organization is to transmit Chinese traditional culture, to convene players and to provide them with an opportunity to communicate, perform and improve skills."
        },
        {
            "UID": "lIp0DzUZB0ZIYgSWNtOqaMfwoEG2",
            "ClubName": "TritonCubed",
            "clubEmail": "fighters@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8405",
            "PurposeStatement": "To provide students the opportunity to expand and test their knowledge by designing and fabricating a CubeSat. Participants of the TritonÂ³ work closely with other students and faculty members, as well as collaborate with other companies, to complete this multifaceted disciplinary project."
        },
        {
            "UID": "WAvTllYuYfT1i9HkkyZYV6BMtir2",
            "ClubName": "Flying Sams",
            "clubEmail": "figureskating.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9610",
            "PurposeStatement": "Flying Sams is a medical service club at the University of California, San Diego in association with the non-profit service organization, The Flying Samaritans Inc. We are dedicated to providing free medical services to the underprivileged people of Mexico through a clinic staffed entirely of volunteer physicians, nurses, medical and pre-medical students."
        },
        {
            "UID": "4zKQzWbnNvMjbiypePPxA7GyDw83",
            "ClubName": "Food Recovery Network at UCSD",
            "clubEmail": "finessedanceco@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8422",
            "PurposeStatement": "Food Recovery Network at UCSD aims to divert food waste and feed those facing food security at UC San Diego and in the greater San Diego community. We create partnerships with food donors on and off campus to run weekly recoveries. We deliver to organizations that help those in need like the Triton Food Pantry, The Hub, and Urban Street Angels. Through our efforts and activism, we help break the cycle of food waste and hunger and educate the community on how to build a more sustainable food system."
        },
        {
            "UID": "F1rIV1y26NXA9FcKLAq5gr4ezgm2",
            "ClubName": "Fronteras Saludables (Healthier Borders)",
            "clubEmail": "fishermansclubucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9637",
            "PurposeStatement": "Fronteras Saludables (Healthier Borders) is student organization that hopes to spread awareness about health issues in Tijuana, Mexico. We will support the efforts of the HFiT free clinic (located in Mexico) through fundraising for medical supplies, medications, and other equipment. Fronteras Saludables (Healthier Borders) will inform UCSD undergraduates about opportunities to get involved in the HFIT internship program and other supporting roles."
        },
        {
            "UID": "iKGDaA5APCOzPPV79BsufjuMHHI3",
            "ClubName": "Fun Talk and Learn Chinese Student Association (TLCSA)",
            "clubEmail": "fivemill@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8347",
            "PurposeStatement": "Fun Talk & Learn Chinese Student Association is a student body helping UCSD students learn useful skills, form appropriate worldviews in order to live a meaningful life and be contributive to the society inside and outside the campus. Through workshops and seminars, students will be equipped with capabilities to analyze, to conclude, to present and to lead. Through connecting with local Chinese/Taiwanese people, students can obtain helps in dorm and off-campus living while attending UCSD. Students will learn to overcome the challenges from the cultural and language differences in order that they can focus on the academic works without much hindrance from daily life arrangement. Group activities will be organized primarily by the students in order for them to learn the skills for planning, execution and leadership. Besides successfully academic learning, students can gain the spiritual understanding and find good mentors who can help them using their native languages. Students will also be given training on career development such as writing resumes, conducting successful on-site job interviews, and learning to work with others. Students are encourage to evaluate their world views in order to live with impact! The goals are that the participants will be able to obtain : 1. Communication and presentation skills both verbally and in writing 2. Innovative view on spiritual and religious issues 3. Understanding of the global affairs based on facts. 4. Connections with local Chinese/Taiwanese people and students 5. Leadership through organizing activities 6. Career development skills 7. Enthusiasm for life that leads to contributions to the community"
        },
        {
            "UID": "62u7rmqi4vd0DNNIv0mfIYN5NoT2",
            "ClubName": "Pre-Dental Society/Free Dental Clinic at UCSD",
            "clubEmail": "flr.gamma.president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8428",
            "PurposeStatement": "To provide additional educational resources to Pre-Dental students through our general body meetings, special speaker series, and student run free clinics."
        },
        {
            "UID": "dUlE6gCg9FPxOEjgSmOhtlsXNBn2",
            "ClubName": "Gift of Life at UCSD",
            "clubEmail": "fooshimprov@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8361",
            "PurposeStatement": "The purpose of Gift of Life at UCSD is to raise awareness for the bone marrow donation process. In collaboration with the Gift of Life Marrow Registry, one of the nation's public bone marrow and blood stem cell registries, Gift of Life at UCSD organizes events, campaigns, trainings, and seminars to register new potential donors, raise monetary funds, and educate the community about the bone marrow donation process. Gift of Life at UCSD is dedicated to expanding the bone marrow registry and supporting those who have been affected by cancer."
        },
        {
            "UID": "GPVRar3YfgVWBarWRrr5pYAODRN2",
            "ClubName": "Gamma Zeta Alpha Fraternity Inc",
            "clubEmail": "frn@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11951",
            "PurposeStatement": "The mission of Gamma Zeta Alpha Fraternity, Inc., a not-for-profit corporation built on the foundation of respect and brotherhood, is to establish and promote a nurturing environment at the university level and beyond, through academic excellence, community service, and the celebration of the diverse Latinx Culture."
        },
        {
            "UID": "bDNA6zrDLsTbbPne33lJZEdzJXy2",
            "ClubName": "FUSION Hip-Hop Dance Events Association",
            "clubEmail": "fs.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8606",
            "PurposeStatement": "The FUSION Hip-Hop Dance Events Association is a student organization involved in the cultural, social, community, and academic projects that benefit its members, its campus, and its community. The goal of FHHDEA is to educate and celebrate the unique Asian American cultural identity and its major presence in the emerging hip-hop dance communities along the west coast at UCSD. FHHDEA aims to recognize excellence in the UCSD hip-hop dance community, west cost dance communities, support dancers, and provide performance opportunities for dance to be shared among dancers and audiences all over the nation and beyond."
        },
        {
            "UID": "jxFrRAbzYcdzVT7q92SAMr7xvbe2",
            "ClubName": "Global Medical Missions Alliance",
            "clubEmail": "fushengtheater@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8523",
            "PurposeStatement": "Part 1. Leave a positive and profound impact for Christ by guiding and equipping students with training and networking opportunities so they may serve as effective healers and ministers of Christâ€™s love. Part 2. Foster a unique community and fellowship among peers and mentors committed to medical mission and healing ministry. Part 3. Become the next generation of healthcare professionals â€œpoured out as a drink offeringâ€ for the Gospel. Part 4. To provide various Medical Mission opportunities around the globe with the main focus, to further Godâ€™s kingdom."
        },
        {
            "UID": "9XLPbnQgbiSDMJKURHCfXRAqZlL2",
            "ClubName": "Global Medical Training",
            "clubEmail": "fusionhhdc.coords@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11928",
            "PurposeStatement": "Global Medical Training (GMT) is an international, non-profit, and humanitarian organization that provides free medical, dental, and veterinary services in developing communities in parts of Central America and Mexico. Students are given the unique chance to directly participate in â€œhands-onâ€ diagnoses and treatments under the supervision of medical professionals. This is the reason why our motto is â€œLEARN BY DOING.â€ As a health-focused organization, our main purpose is to increase awareness of the lack of healthcare in third world countries by giving undergraduate students the chance to expand their understanding of life and medicine outside the United States. This is made possible by educating and exposing students to the prevalent global and medical issues that many underserved communities in developing countries face. Such issues include poverty, poor national health-care systems, and the various circumstances that contribute to and perpetuate a specific populationâ€™s situation. GMT also understands there are major health issues that reside right in our own community. It is this very reason why we also offer our students the opportunity to volunteer in various community service events including free health fairs servicing the underprivileged in the Los Angeles and surrounding counties. Altogether, GMT views student volunteers as a vital force for change. After all, they may be the next generation of health-care providers."
        },
        {
            "UID": "jeHNgjh7KAdIpR3BJHMTKSysLv93",
            "ClubName": "Tritons Film Society",
            "clubEmail": "gbitton@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8537",
            "PurposeStatement": "The purpose of the club is to provide an environment where University of California San Diego students can discuss and watch films with their fellow peers."
        },
        {
            "UID": "A719MDVofwUBObbEyTem82yGBd23",
            "ClubName": "Hanbit Church",
            "clubEmail": "gccsdcampusfellowship@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9644",
            "PurposeStatement": "To invite Korean American college students to worship."
        },
        {
            "UID": "3SajlfN5GPgWmcp88QGcqI2yfl12",
            "ClubName": "Hawaii Club",
            "clubEmail": "gcf@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8398",
            "PurposeStatement": "Promote cultural awareness of Hawaiâ€™i, other Polynesian Islands, and their people, spread the â€œAloha Spiritâ€ across UCSD's campus, serve as a support group for incoming students from Hawaiâ€™i and other Polynesian Islands, and provide a social haven for any UCSD student seeking friends. We work together throughout the school year in preparation for our Annual Lu'au in the Spring."
        },
        {
            "UID": "wBg1T7zKH7c0Pcn7YjM4Hj9v2fe2",
            "ClubName": "GradWIC",
            "clubEmail": "ghpadvising@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10724",
            "PurposeStatement": "The objective of GradWIC shall be twofold. First, to foster an innovative, informative, and comfortable environment to advance the interests of and address the concerns of graduate students, primarily those who identify as women and underrepresented minorities in computing fields. Second, to provide general resources as well as an inclusive environment to graduate students in any computing-related field (ie. Computer Science and Engineering, BioInformatics, Cognitive Science, etc.) at the University of California, San Diego."
        },
        {
            "UID": "tqcTmsBJrqQhWafC6PYGf3Bdwps1",
            "ClubName": "GROW UCSD",
            "clubEmail": "gmtucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8354",
            "PurposeStatement": "Grow at UCSD will provide a forum for the collaboration of student gardens on campus."
        },
        {
            "UID": "IkQ7Okta0jOK1Mt5u431Lpa0wZg2",
            "ClubName": "Global Health Program Student Representatives",
            "clubEmail": "golgin@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11918",
            "PurposeStatement": "The Global Health Program Student Representatives are charged to advise the Global Health Program on issues related to undergraduate education, including but not limited to courses, curriculum, instruction, student involvement opportunities, research opportunities and student programs."
        },
        {
            "UID": "HJ8LKhQqDsXE2vflh21luemYw3H3",
            "ClubName": "Rotaract Club at UCSD",
            "clubEmail": "graduateprograms@rady.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8442",
            "PurposeStatement": "The purpose of Rotaract is to follow Rotary International's motto of \"Service Above Self.\" We are devoted to organizing and participating in both local and international service events. In addition, we strive to prepare our members for the future by offering professional development, leadership, and networking opportunities."
        },
        {
            "UID": "vhiWYGyazSUyvl7GNnz278vj7WE3",
            "ClubName": "Health Care Frontiers",
            "clubEmail": "greencorps@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8425",
            "PurposeStatement": "The frontiers of healthcare come from inspired under-represented communities, who embrace the humanization of healthcare for the providers, not just the patients. That begins with the pre-med and pre-health education experience. Our organization seeks to provide pre-professional resources to under-represented communities through programs put on by our HOPE committee, and humanistic pre-health education through programs by our MedTalks committee. UCSD is known as for its strong emphasis in the sciences, and many students aim to pursue careers in the health sector. Additionally, UCSD hosts a diverse set of motivated students who are interested in pursuing these careers and come from non-traditional backgrounds. For these minority, first generation, and/or financially disadvantaged students, HOPE organizes informational events and programs that provides resources and support to ensure a successful path to oneâ€™s health profession of choice. Through Medtalks we host a series of informational seminars, in which speakers from different careers in the healthcare world come to educate students about what they do, and how to pursue similar careers. For students pursuing MD, PharmD, and DDS degrees, we host informative sessions about current internship opportunities and certifications they can hold while still in college. For all undergraduates interested in healthcare, come and learn about the different degrees available, which schools offer them, and how a career in health may interest you. Furthermore, the purpose of our MedTalks committee is to provide students with information regarding stress and burnout prevention, as well as providing team building exercises in which pre-health students can have positive peer interactions."
        },
        {
            "UID": "keIUmkPTY6esGImeqDT1XVag2Kl2",
            "ClubName": "Health Guardians of America",
            "clubEmail": "groundworkbookscollective@yahoo.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10693",
            "PurposeStatement": "Health Guardians of America is a health nonprofit creating solutions to nationwide healthcare issues. The current national health campaign focuses on the nationwide obesity epidemic as a clinical risk factor for chronic illnesses and diseases such as cerebrovascular, cardiovascular, and diabetes mellitus. FitlifeFlow is our flagship health project that enables a rewards-based health program for consistent exercise per recommendations by the Center for Disease and Control (CDC) and U.S. Surgeon General. It is a personal health pledge to exercise three times per week, with a minimum of 30 minutes per session, over the course of five consecutive weeks. Our Goals 1. Decrease the obesity risk among youth and young adults to preserve longevity and quality of life. 2. Influence the appropriate lifestyle change and develop healthy decision-making at an early age. 3. Educate participants on the importance of sustained health management and self-care. Our mission is to tackle one of the most pressing health issues in America through the development of sustainable public health solutions using modern technologies, the deliverance of effective health education to general population, and the empowerment of student communities to produce positive change."
        },
        {
            "UID": "Lpi2zpETPTWWZkFYGfIl9F5XOkD3",
            "ClubName": "Healthcare Advice and Mentorship",
            "clubEmail": "growucsd@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8411",
            "PurposeStatement": "Pursuing a career in healthcare begins with a pre-health education experience and is furthered by mentorship and advice throughout this experience. Our organization seeks to aid all paths to health care through programs put on by our Peer Mentorship UCSD is known as for its strong emphasis in the sciences, and many students aim to pursue careers in the health sector. But there is more to health than getting an MD, PharmD, or DDS. There are dozens of other careers, our SEARCH committee is here to let you know about! Additionally, the Peer Mentor Program is designed to help pre-health undergraduates navigate life at UCSD as a pre-health student both academically and socially. By fostering meaningful, long-lasting relationships between different levels of the student body, the goal of the program is to ultimately increase the number of UCSD pre-health majors admitted into their desired health professional school."
        },
        {
            "UID": "U0hVLkadoCgBByK4oqoOKe5YPFM2",
            "ClubName": "Hindu Yuva",
            "clubEmail": "healinghands@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11926",
            "PurposeStatement": "The purpose of this organization is to promote, preserve, and celebrate the ancient and rich Hindu culture while also giving its members and affiliates a platform to connect and collaborate with the local Hindu community. The organization aims to become a cultural hub for one of the oldest religions in the world, which both basks in the wisdom of ancient traditions and shines with modernity in its approach towards society and the world at large. Hindu Yuva aims to provide support to students throughout their stay in San Diego, from moving in to exploring life in San Diego. By harnessing the inclusiveness of the organization, Hindu Yuva hopes to help the students not just in their academic journey but also in their professional and social development."
        },
        {
            "UID": "RE1RLsOle7PtRaFMcWbCBdnFGpC3",
            "ClubName": "Insight Pre-Optometry",
            "clubEmail": "hek055@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8377",
            "PurposeStatement": "To provide UCSD students interested in the field of optometry with the information, support, and opportunities necessary to learn about the profession, the schools of optometry, and the application process."
        },
        {
            "UID": "",
            "ClubName": "Undergraduate Investment Society",
            "clubEmail": "hello@tritonxr.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11945",
            "PurposeStatement": "Provide training and mentorship programs that empowers members to the obtain financial literacy and business acumen needed to excel in various roles within the most competitive firms globally."
        },
        {
            "UID": "UCgAUMr4HTglHvfPfcUyX5apaWw2",
            "ClubName": "Duly Noted",
            "clubEmail": "hello@ucsddesign.co",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10649",
            "PurposeStatement": "To provide a supportive environment in which singers can enjoy and participate in musical activities, specifically vocally."
        },
        {
            "UID": "nrgdN1suNHUYHt1JwyewV0raL7E3",
            "ClubName": "Cambodian Student Association",
            "clubEmail": "hhirata@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8438",
            "PurposeStatement": "We, a non-profit organization called the Cambodian Student Association (CSA), believe that by (1) building and strengthening identification of the Cambodian culture among fellow members, students and community at large, (2) offering consistent academic, social and moral encouragement through activities and community service and (3) developing social networks that will assist us during our time in college and in our lives thereafter, we will have established rare relationships and support systems based on common principles and values with fellow members who share common interests."
        },
        {
            "UID": "WNDhVHUwsTRt7WN1YUZULvAsfDo2",
            "ClubName": "Fair Play Theatre Company",
            "clubEmail": "hkn@eng.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8353",
            "PurposeStatement": "Fair Playâ€™s purpose is to provide more performance opportunities for the students of UCSD by producing theatrical productions every quarter. Additionally, we seek to foster a fun, fair, and professional creative environment. Fair Play also hopes to emulate a professional theatre company at the undergraduate level. Furthermore, we aim to create an inclusive community of students, from all backgrounds, that come together to create theatre in unexpected ways."
        },
        {
            "UID": "HlJ3rpdYn0S7v3zbnaUojNOHdKt1",
            "ClubName": "Imports@UCSD",
            "clubEmail": "hmongstudentassocitation.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10783",
            "PurposeStatement": "As a car club at the University of California, San Diego, Imports@UCSD aims to build a community for car enthusiasts to gather and share their collective knowledge about automobiles and motor sports. Our goals include teaching members about various aspects of automotive knowledge while constructing a network to develop strong connections in the automotive industry. We also strive to create a safe environment where we can test and improve the performance of our cars as well as our driving skills. Highly discouraging street racing, Imports@UCSD gives members the opportunity to go to the race track to satisfy their high performance driving needs. Using all of these resources and connections, members of Imports@UCSD can become strong leaders who are extremely knowledgeable in the automotive field and enthusiastic about everything they do. Even the slightest passion for cars will not be overlooked and is all that one must posses to become a proud and capable member of Imports@UCSD."
        },
        {
            "UID": "lMwkvzqmnHTww6NsLf0WOEcTepD3",
            "ClubName": "Hmong Student Association at UCSD (HSA at UCSD)",
            "clubEmail": "hmp3.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10712",
            "PurposeStatement": "The Hmong Student Association at UCSD is a cultural organization that unifies Hmong college students to promote and increase awareness about the Hmong culture/identity among the UC San Diego students, staff, and community. In addition, we foster and support the retention of Hmong students in higher education at all levels surrounding UC San Diego."
        },
        {
            "UID": "ssUA92AlSlWTeJVkhOxyl0qBuon2",
            "ClubName": "Homeless Charter, The",
            "clubEmail": "hmp3.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8368",
            "PurposeStatement": "The purpose of The Homeless Charter is to raise awareness for the homeless community in San Diego through engaging, hands on activities. The organization seeks to promote service to the greater community of San Diego, unity within the student body of UCSD, while breaking down stigmas of homelessness and providing support for homeless individuals. The Homeless Charter is a non-profit student organization."
        },
        {
            "UID": "XAHI7RxsEFfxUoyDa394vHOw7Uw1",
            "ClubName": "Hong Kong Student Union",
            "clubEmail": "hmp3.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8546",
            "PurposeStatement": "The goal of the organization is to create a platform to fuse the traditional Chinese culture with the new-fangled Western ideals. Our vision is to promote the welfare of the Cantonese-speaking Chinese student body. We also identify the student body with social issues in the interests of Hong Kong people in hopes to promote cultural awareness of Hong Kong. We also provide a social environment for those who want to stay in touch with the Chinese culture as well as those who want to find acceptance and sense of belonging in the States."
        },
        {
            "UID": "Ai3ocodi0DPkr66HDrFVwwQC0OH2",
            "ClubName": "Groundwork Books Collective",
            "clubEmail": "hok033@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9628",
            "PurposeStatement": "A political collective and non-profit bookstore that provide progressive literature and camaraderie for students and activists who hope for changes and a better world."
        },
        {
            "UID": "gfd2aEvbxOaS56JgpkmIjSZ2vUO2",
            "ClubName": "Iaido at UCSD",
            "clubEmail": "hsfucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10779",
            "PurposeStatement": "UCSD Iaido seeks to promote awareness and preservation of the Muso Jikiden Eishin-Ryu branch of Japanese swordsmanship."
        },
        {
            "UID": "5dAes2MH0GQmx5pgZ0MWFRlA4YL2",
            "ClubName": "International School Students Association (ISSA)",
            "clubEmail": "icra@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8555",
            "PurposeStatement": "The primary purpose for ISSA is to serve as a social platform for students who attended international schools in high school as well as any other students interested in differing cultures and global mindsets. We will plan social events for these students to meet one another and get acquainted. This org will also act as a support network for students who might be far away from their home and their family while studying at UCSD."
        },
        {
            "UID": "ZNH0a0cJVpZgW1jln712BEo67kI2",
            "ClubName": "International Family Union",
            "clubEmail": "ieee@eng.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11998",
            "PurposeStatement": "IFU (International Family Union) is a student organization currently made up of undergraduates in order to provide better campus safety and to share the latest information with parents."
        },
        {
            "UID": "c8vbxRFgboQZsujdf5WpCuE1m9v2",
            "ClubName": "International Society for Pharmaceutical Engineers (ISPE)",
            "clubEmail": "ifcpresident@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8571",
            "PurposeStatement": "Our purpose is to bring professional development to students in the pharmaceutical, biotechnological, and related industries. Thus our members will be offered resume/interview building workshops, networking events with industry professionals, industry tours, discussion panels, and much more."
        },
        {
            "UID": "JXPLbmZUQkXWsD4SPQdy7jc68xe2",
            "ClubName": "Its On Us at UCSD",
            "clubEmail": "ifu.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8583",
            "PurposeStatement": "Itâ€™s On Us at UCSD is a chapter of the national movement, Itâ€™s On Us. The purpose of Itâ€™s On Us at UCSD is to combat sexual violence and harassment, especially sexual assault, within the UCSD community. The goal of this organization is to engage students on the topics of sexual assault awareness, survivor support and bystander intervention. Areas of our work include, but are not limited to: consent, prevention, bystander education, and healthy relationships. Itâ€™s On Us at UCSD will achieve its goals through education and outreach, events and projects, and activism and advocacy."
        },
        {
            "UID": "mWMT0Q3HGuYszAO5ExJ56BR2AsS2",
            "ClubName": "The Youth Movement Against Alzheimers",
            "clubEmail": "igem.synbio.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10827",
            "PurposeStatement": "To promote understanding of Alzheimerâ€™s and healthy aging among youth and young adults by providing unique opportunities to volunteer with those afflicted by Alzheimerâ€™s and advocate for change. Our purpose is to raise funds for research and support treatment and care, ultimately contributing to the movement in finding a cure for this neurodegenerative disease."
        },
        {
            "UID": "tjF4sp6AAHMZk24IY3dqiXEyGSw2",
            "ClubName": "Inter Varsity Christian Fellowship",
            "clubEmail": "ignite.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8463",
            "PurposeStatement": "To establish and advance a witnessing community of students and faculty who follow Jesus as Lord and Savior: growing in love for God, God's word, God's people of every ethnicity and culture and God's purpose."
        },
        {
            "UID": "a85YjTgy2QfmJUHQHDM0IkOYqps1",
            "ClubName": "IUSM (International Undergraduate Student Ministry)",
            "clubEmail": "igsm.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9611",
            "PurposeStatement": "We are a fellowship that strives to build a Christ centered community on campus, primarily with International undergraduate students, but everyone is welcome. We meet weekly for Bible studies & prayer and worship on campus on Sundays. Our vision is to share the gospel and students to spiritually thrive during college."
        },
        {
            "UID": "fETRtZVpz0PZTn9Rnsu6Cvq4LUv2",
            "ClubName": "Kappa Kappa Gamma",
            "clubEmail": "ihp@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8407",
            "PurposeStatement": "To build and provide bonds of friendship, mutual support, respect for intellectual development, and an understanding and allegiance to positive ethical principles."
        },
        {
            "UID": "R0xUxmD3XjPyc1GhjaVMnyKhlml2",
            "ClubName": "Intergenerational Connections",
            "clubEmail": "imem.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10680",
            "PurposeStatement": "Intergenerational Connections is a non-profit student organization consisting of volunteers who believe that engaging seniors through various creative activities to promote healthy aging. Students will work one-on-one with seniors and community members."
        },
        {
            "UID": "AlXA7tTbjiPcfgJLqF3BdiaqYrn1",
            "ClubName": "Inter-College Residents Association (ICRA)",
            "clubEmail": "imports@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10751",
            "PurposeStatement": "The purpose of ICRA is to serve the on-campus residents of all residential areas at the University of California, San Diego, hereinafter referred to as UCSD. This body will plan educational, social, community service, and diversity programs to unite these residents as well as make recommendations for the enhancement of residential living. In addition, ICRA will serve to unite the residence committees of all residential living areas. ICRA will promote leadership opportunities and encourage college and residential area representation. It is the purpose of ICRA to help students grow as leaders and to unite the residents of all of UCSDâ€™s residential areas. ICRA is a non-profit organization."
        },
        {
            "UID": "X3BKcOGC4udQF3yCs2iE3SDLBna2",
            "ClubName": "Master Baking at UCSD",
            "clubEmail": "info@lighthousebc.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10668",
            "PurposeStatement": "To cultivate an atmosphere of collaboration through the fundamentals of baking."
        },
        {
            "UID": "D11snMzWpyMo97WIdweN8nuzuxo2",
            "ClubName": "SangamSD",
            "clubEmail": "info@rocketproplab.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8573",
            "PurposeStatement": "UC San Diego's largest South Asian organization, SangamSD aspires to promote South Asian cultural awareness and education within the UCSD community and beyond. SangamSD's goals of uniting South Asians at UCSD as well as spreading diversity, tolerance, and the understanding of all South Asian cultures is reflected through its numerous social, cultural, and educational events."
        },
        {
            "UID": "OVKgqiVtsdX4aq4DmAM21QJkBnA3",
            "ClubName": "APD Consulting Club at UCSD",
            "clubEmail": "info@ucsdanthroclub.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10755",
            "PurposeStatement": "The APD Consulting Club at UCSD has the following objectives: â€¢ To inform graduate-level students about possible careers in consulting â€¢ Prepare graduate-level students to attain consulting jobs â€¢ Provide a career building resource focused on consulting â€¢ Create an alumni network of advanced professional degree consultants from UCSD"
        },
        {
            "UID": "btBZy9FBIWdFvxqxWUoD8pOUkbl1",
            "ClubName": "International Christian Fellowship-West",
            "clubEmail": "insight.ves@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9612",
            "PurposeStatement": "In response to God's love for all people, we are here to establish student-led international witnessing communities, which welcome international students and scholars."
        },
        {
            "UID": "a6kaMEMc9xfk5saUAZj1dYiCnEi1",
            "ClubName": "International Studies Student Association (ISSA) at UCSD",
            "clubEmail": "intergenerationalconnectionssd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8380",
            "PurposeStatement": "The organization gathers like-minded individuals who share diverse interests in international studies and international relations. We aim to not only be a resource hub, but also build community and meaningful connections among our peers. ISSA intends to provide a platform of rich experiences and opportunities in international studies, including: -Networking, social, and pre-professional events, including collaboration with UCSD's undergraduate and graduate departments -ISP Peer Mentorship program supported by the ISP Advising Office -Research opportunities with UCSD faculty and graduate students -Resources for studying, working, and interning abroad -Public events, conferences, and workshops for research, social awareness, international development -Service projects and fundraising for international causes -Student and alumni panels"
        },
        {
            "UID": "13vPYchPoqWP185eNR1liExEyih1",
            "ClubName": "Intersectional Health Project - San Diego",
            "clubEmail": "intermissionUCSD@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11978",
            "PurposeStatement": "The mission of Intersectional Health Project (IHP) is to promote grassroots community efforts within communities of Greater San Diego."
        },
        {
            "UID": "AWOAI0hKFJgD0EYxhttBBGIh93K3",
            "ClubName": "StRIVE",
            "clubEmail": "iotachapter.president96@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10652",
            "PurposeStatement": "Our program focuses on breaking down the wall that separates those with disabilities from their non-disabled peers. It is unique in its unification of the peer-mentorship of young adults with mental and physical disabilities and their transitional community education. We primarily work with students ages 18-22 with disabilities through partnership with the Transitional Resources for Adult Community Education (TRACE) department of the San Diego Unified School District. Our student volunteers serve as teachers that target three critical areas imperative to independent living: communication, health awareness, and vocational skills. They also serve as mentors who participate in recreational activities and field trips that supplement the studentâ€™s community education. Our program is open to all UCSD undergraduates who are interested in empowering and bonding with other students their age with a wide range of disabilities."
        },
        {
            "UID": "AeXZMN2DyBbhoxOezMBbevRx89o2",
            "ClubName": "Young Minds",
            "clubEmail": "irbanchangemakers@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10777",
            "PurposeStatement": "To provide guidance for high school students, especially underrepresented minorities, to enable for them to succeed in school and their future careers"
        },
        {
            "UID": "AmKkSU8ZoyLkbn7Kplch7Ci8PHI2",
            "ClubName": "Kappa Sigma",
            "clubEmail": "isc@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12095",
            "PurposeStatement": "A non-political, non-religious and non-profit social organization commited to the embodiment of Fellowship, through brotherhood; Leadership, inside and outside of our organization; Scholarship, by aiding scholastic excellence; and Service, by aiding those at our university, in our community, and in the world through community service and philanthropy in order to become better men."
        },
        {
            "UID": "ErE6Cxk2pNcOSqy4PBeOl3Bu6zh1",
            "ClubName": "Kappa Alpha Pi",
            "clubEmail": "ispe.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8409",
            "PurposeStatement": "The purpose of this Fraternity shall be to foster knowledge of the law for undergraduate students; to provide service to the greater community and campus; to promote a strong sense of fraternalism among members; to uphold the ideals and integrity of Kappa Alpha Pi Pre-Law Co-ed Fraternity; so that each member may advance [their] intellect while contributing actively to the well-being of others."
        },
        {
            "UID": "boo5Ba3SUkVwq2L1XI7UWV6mYdD2",
            "ClubName": "Intermission Orchestra",
            "clubEmail": "ispgucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11923",
            "PurposeStatement": "The Intermission Orchestra is a student-run organization dedicated to playing music from films, video games, and Japanese animation. We hold a concert every quarter for UCSD students to enjoy their favorite pieces."
        },
        {
            "UID": "6pjXX3AXOKR0sakbEIMb339phRs2",
            "ClubName": "Kappa Alpha Theta",
            "clubEmail": "issaexec@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8439",
            "PurposeStatement": "The first greek letter fraternity for women, Kappa Alpha Theta strives to create an inclusive social and educational environment. Our mission is to offer women lifelong opportunities for intellectual and personal growth and create the widest influence for good."
        },
        {
            "UID": "KasYoiftU0OcxvJ0GQ6JzftuvrG2",
            "ClubName": "Daughters of Triton",
            "clubEmail": "ista@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10752",
            "PurposeStatement": "To bring together and create a female-identifying a cappella group within the UCSD community. To provide students who are interested in a cappella music an outlet through performances and/or a group to belong to."
        },
        {
            "UID": "0gJkLNUJZThU3GMhQBiAlmYiA8C3",
            "ClubName": "Phi Lambda Rho Sorority, Inc.",
            "clubEmail": "istaucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10655",
            "PurposeStatement": "The purpose of Phi Lambda Rho Sorority, Inc. is to promote academic excellence within its members, provide sisterhood, engage in community service, with emphasis in the Chicano (a) and Latino (a) community, and to instill the importance of retaining its roots for the sake of its identity by promoting the Chicano (a) and Latino (a) culture."
        },
        {
            "UID": "EBABT0z2AqhmWdE1grkYtcIQXIg2",
            "ClubName": "Interaxon at UCSD",
            "clubEmail": "ivtriton@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8604",
            "PurposeStatement": "To provide underserved public schools (K-12) in San Diego County with interactive and educational activities/presentations about neuroscience in order to foster an interest in higher education and STEM."
        },
        {
            "UID": "UdVKU8DfXTMPySgQKcFl51kF6YL2",
            "ClubName": "We The Redeemed",
            "clubEmail": "j3fung@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10809",
            "PurposeStatement": "Provide a Christian environment and circle for UCSD students through activities such as worship, prayer, bible study, and fellowship."
        },
        {
            "UID": "TbVwGx2nITRROrmefBo9MKuDGly1",
            "ClubName": "Lambda Chi Alpha",
            "clubEmail": "jnc012@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11939",
            "PurposeStatement": "Lambda Chi Alpha is a greek social fraternity as accepted by IFC."
        },
        {
            "UID": "WgoDLoxHOURwa7bkwWtFdts98OT2",
            "ClubName": "Klesis",
            "clubEmail": "jpcaffairs@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8568",
            "PurposeStatement": "The purpose of this organization is to present Christian doctrines to the students of UCSD through weekly, midweek Bible Studies and fellowship times."
        },
        {
            "UID": "qGekSU2kASY19PrK86FzUVLRX8o1",
            "ClubName": "Lambda Theta Alpha Latin Sorority, Inc.",
            "clubEmail": "jpk001@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12031",
            "PurposeStatement": "The purpose of Lambda Theta Alpha shall be to provide a sisterhood based on unity, love and respect in an effort to foster the development of strong leaders who will then provide and practice political, social and cultural activities. It shall also be the purpose of Lambda Theta Alpha to promote unity through charitable and educational programs, maintain a higher standard of learning and serve as a voice for all students."
        },
        {
            "UID": "v15HXUKv8IRXYTpacbbHTGBYiUj1",
            "ClubName": "Model United Nations at UCSD",
            "clubEmail": "jzx005@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8430",
            "PurposeStatement": "Model United Nations members simulate the United Nations by role-playing diplomats and forming delegations to attend conferences. At these conferences, students debate global issues, conduct speeches, draft resolutions, form political alliances, and resolve critical international problems. In doing so, Model United Nations students are exposed to international relations and its application in today's society, which expands their understanding of the world and becoming global citizens."
        },
        {
            "UID": "E2Qb9y7201g9IhpYfc9Fox05Xjw1",
            "ClubName": "Video Game Development Club",
            "clubEmail": "karandeepjune4@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10826",
            "PurposeStatement": "The Video Game Development Club seeks to bring students who are interested in the process of video game design and development together in a collaborative environment. Students can develop games from start to finish with their peers, and seek feedback and assistance with ideas and projects they may be working on."
        },
        {
            "UID": "ryxeJccTfONSFZY1yXKIr07M4IG2",
            "ClubName": "Kommon Society",
            "clubEmail": "kat.ucsd.president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8406",
            "PurposeStatement": "Kommon Society is a student organization for Korean and Korean-American undergraduate students with social science majors. Kommon Society aims to: 1) establish an academic environment among Korean and Korean-American students with Social Science majors; 2) facilitate a mutually beneficial network among students with same majors and career goals; 3) provide opportunities for various academic and professional experiences to prepare each individual's future; and 4) promote interest in contemporary global issues throughout the campus."
        },
        {
            "UID": "G5KGmUGzzGRzKT2LHwG9Z88pfCY2",
            "ClubName": "Latin Dance Project",
            "clubEmail": "kgsa.at.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12075",
            "PurposeStatement": "The purpose of this organization is to celebrate and bring Latin dance and music to UCSD students and the community through productions, performances, workshops, and events on campus and beyond, as well as weekly training sessions with a dance professional, and to promote diversity, equity, and inclusion by creating a space for all to celebrate Latin dance, music, and culture."
        },
        {
            "UID": "Mw35AXzaNiYv84E5e2C3wY3QeEv2",
            "ClubName": "Korean Graduate Student Association (KGSA)",
            "clubEmail": "kidznextdoordance@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11991",
            "PurposeStatement": "Korean Graduate Student Association is the organization of the Korean graduate students, research staff, post-docs, professors, visiting scholars, and visiting professors at the University of California, San Diego (UCSD). The KGSA aims to promote unity and harmony among Korean people at UCSD and to support them in various ways. The main activities of the organization include assisting new incoming students with settlement, holding seasonal/ holiday/ sports events, and providing members with various kinds of useful information on the job market and life around campus. We welcome any kind of supports or contributions from individuals, organizations, and companies that could further consolidate the Korean community at UCSD and contribute to sound relationship between our members and society in general."
        },
        {
            "UID": "xkhq41Wg53hRCQiMWo6cX34fCis2",
            "ClubName": "Amateur Radio Club at UCSD (KK6UC)",
            "clubEmail": "kk6uc@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8595",
            "PurposeStatement": "The purpose of the Amateur Radio Club at UCSD, licensed through the Federal Communications Commission (F.C.C.) as KK6UC and officially affiliated with the American Radio Relay League (ARRL), is to provide UCSD students and staff with tools and opportunities to explore and enjoy the hobby of amateur radio. KK6UC is a member-focused club that can host licensing classes, teach different modes of radio, participate in contests, collaborate with other amateur radio organizations, and perform general experimental wireless communications. The club was founded on campus as WA6DOT (later KI6FTQ) in fall 1965 by Michael C. Ransom WB6KMH (now AI6II) and run for many years by Brian Kantor WB6CYT. The club recently completed the 25-foot tall Gap Titan HF antenna atop Atkinson Hall for its new HF station, greatly adding to its on-campus RF capabilities."
        },
        {
            "UID": "9VcKrLTo13cVqJzotO7mf7TzX132",
            "ClubName": "Korea Campus Crusade for Christ (KCCC)",
            "clubEmail": "kkgpresidentucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10722",
            "PurposeStatement": "To help further the Great Commission at UCSD by making disciples and equipping them with the skills necessary to live out a Christian life after college. Activities will include bible study, worship sessions, and morning prayers. K.C.C.C is a non-profit, non-denominational Christian organization."
        },
        {
            "UID": "IhZ1It3IiuRuVo0CY9HQgSbJJuG2",
            "ClubName": "Kyrie Eleison",
            "clubEmail": "kojobs.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8372",
            "PurposeStatement": "We, Kyrie Eleison at UCSD, are a student-run Catholic ministry that fosters spiritual growth for students seeking faith, identity and fellowship within the Catholic Church."
        },
        {
            "UID": "ELvAtHYiC9MHv3Agzb5B3nvG2N72",
            "ClubName": "League of Tritons",
            "clubEmail": "kotx@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8482",
            "PurposeStatement": "Our club seeks to provide both a recreational, social, and competitive community for players of the game League of Legends within UCSD and the greater San Diego area. By providing an environment of social interaction, friendly competition, and in-game support, we seek to give all of our members a positive gaming experience and the competitive drive to succeed in any gaming or non-gaming endeavor."
        },
        {
            "UID": "GDPha76x1UUGs5xlmUBMJZxf2gf1",
            "ClubName": "Lambda Theta Nu Sorority, Inc.",
            "clubEmail": "KSEA.YG.UCSD@GMAIL.COM",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10667",
            "PurposeStatement": "The purpose of Lambda Theta Nu Sorority, Inc. shall be to open doors of opportunity to the Latinas of our community. Our primary focuses are academic excellence and meeting the needs of Latina women in higher education. Lambda Theta Nu Sorority, Inc. also promotes the advancement of Latinas through various campus activities and community services and provides an environment for personal growth within a unit of sisterhood. Lambda Theta Nu Sorority, Inc.â€™s priorities, however, will be placed upon academic excellence and community service."
        },
        {
            "UID": "G3nf7jhonJMs8SxnyxshXzmbASy1",
            "ClubName": "Morning Sign Out",
            "clubEmail": "kteh@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9646",
            "PurposeStatement": "Morning Sign Out (MSO) is an online publication that strives to turn science and medicine into something understandable for the greater public, providing them enough critical information that leaves them more knowledgeable than before."
        },
        {
            "UID": "87eqh3uqSPS4iTLl05gMK4r8x4d2",
            "ClubName": "Panhellenic Association",
            "clubEmail": "lambda.president@nakinc.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8451",
            "PurposeStatement": "To oversee the 11 Panhellenic and 1 Affiliate Chapters within the Panhellenic Council. These chapters are: Alpha Chi Omega, Alpha Epsilon Phi, Alpha Omicron Pi, Alpha Phi, Chi Omega, Delta Delta Delta, Delta Gamma, Kappa Alpha Theta, Kappa Kappa Gamma, Phi Sigma Rho (Affiliate), Pi Beta Phi, and Sigma Kappa."
        },
        {
            "UID": "IwM4Agz8BtV8txkmmUf0SppaJt33",
            "ClubName": "Major Map Initiative",
            "clubEmail": "leagueoftritons@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11855",
            "PurposeStatement": "The Major Map, in the form of an interactive website, will create an informative framework helping undeclared majors choose the right major, and giving new students a more comprehensive way to understand how their major develops over their undergraduate career. It will also outline real world applications of course material, and share career experience by UCSD alumni to give more insight on a major's purpose. Upon its fruition at UCSD, the goal is to spread this framework to other schools across the country."
        },
        {
            "UID": "36Hih4ibDgXo3MUBEEyKHrnNAqx2",
            "ClubName": "Camp Kesem",
            "clubEmail": "lhorstick@calpirgstudents.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8497",
            "PurposeStatement": "Camp Kesem at UCSD provides a free summer camp to children ages 6-18 in the San Diego community who have/had a parent with cancer."
        },
        {
            "UID": "KK9XIsYrryVdVDfVwNDzAry8eB02",
            "ClubName": "Medical Literature Society at UCSD",
            "clubEmail": "lingua@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8529",
            "PurposeStatement": "The Medical Literature Society at UCSD strives to promote the understanding of a career in medicine through a biomedical, psychological, and social perspective. We also encourage pre-medical and pre-health students to form a stronger community with each other and reach out to other students with similar career aspirations."
        },
        {
            "UID": "0fz3pq0VHGM8KwYFpoGdeFpdZil2",
            "ClubName": "Linguistics Undergraduate Association (LINGUA)",
            "clubEmail": "lta.etagamma@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8375",
            "PurposeStatement": "Our purpose is to unify linguistics majors, minors and interested students through scholarly discussion, social activities and faculty interaction. We aim to foster a warm, inviting environment in which to explore academic and occupational opportunities within UCSD Linguistics department and beyond."
        },
        {
            "UID": "dNMSuL2rfAYH44hX02GNCaBvmw52",
            "ClubName": "Voto Latino",
            "clubEmail": "Lucero@mikelevin.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10705",
            "PurposeStatement": "Voto Latino is a national non-profit organization that seeks to transform America by recognizing Latinosâ€™ innate leadership. Through innovative digital campaigns, pop culture, and grassroots voices, we provide culturally relevant programs that engage, educate and empower Latinos to be agents of change. Together, we aim to build a stronger and more inclusive democracy."
        },
        {
            "UID": "gZGMtTIVjURWHrZa4d4h8JmDjli1",
            "ClubName": "Baha'i Club",
            "clubEmail": "maw076@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10653",
            "PurposeStatement": "To promote awareness about The Baha'i Faith and promote the unity of mankind."
        },
        {
            "UID": "lttdo7zXLtctM1GHKV4OrS2rwx93",
            "ClubName": "NanoEngineering and Technology Society",
            "clubEmail": "mechadeucsd69@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8423",
            "PurposeStatement": "NETS is a non-profit student organization which facilitates communication and cooperation on nanotechnology and science. We work with NanoEngineering students, faculty members, non-major students and outside industry stakeholders. We provide opportunities for academic development, professional growth, and networking."
        },
        {
            "UID": "sKQD1ALypdhck8k5xADnPmAhc3J2",
            "ClubName": "Rising at UCSD",
            "clubEmail": "meconomo@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10761",
            "PurposeStatement": "Rising, inspired by the Vagina Monologues and TheirStories, exists as a safe space for students to share their experiences with identifying in a minority group, while raising awareness of various forms of oppression and actively trying to reduce them. It is our goal to raise a substantial amount of funds for charity each year by producing a performance-based show that will be the culmination of the stories of our members and those around our community."
        },
        {
            "UID": "B6uCBnaM3qTNFtmnjYIK5PlX2I02",
            "ClubName": "Mixed Student Union",
            "clubEmail": "memosd3@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10825",
            "PurposeStatement": "Mixed Student Union at UCSD will have the purpose to increase and highlight cultural exchange amongst members and campus at large, as well as create a welcoming and inclusive community for people of mixed identities. MSU strives to create community for those students who feel they may not fit into traditional cultural spaces."
        },
        {
            "UID": "RDAxaanXMmNqSU0pUixt4fLy0u62",
            "ClubName": "Microtomes",
            "clubEmail": "mgault@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8561",
            "PurposeStatement": "Microtomes is an academic journal club centered within the Division of Biological Sciences that aims to introduce students to cutting edge topics in biology and facilitate scientific critical thinking through peer-moderated discussions of recent publications."
        },
        {
            "UID": "c3Foi00SFINPxjB6pOOpJRdjnaZ2",
            "ClubName": "Neurodegenerative Disease Awareness Association (NDAA)",
            "clubEmail": "mgcpresident@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8470",
            "PurposeStatement": "The purpose of this organization is to educate its members on specific neurodegenerative diseases, their current treatments, and ongoing cutting-edge research for them, as well as inspire members to support these causes through raising money for their institutions, raising awareness at both the high school and college levels, and volunteering."
        },
        {
            "UID": "cxGkNfwb8gg49sGNniW6dMFk1Uu2",
            "ClubName": "Muir Quarterly, (MQ) The",
            "clubEmail": "microtomes.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8559",
            "PurposeStatement": "The Muir Quarterly publishes a satire/humor newspaper at UCSD and also provides social events for the student body."
        },
        {
            "UID": "QbbBRgucFsacFYI471k4L5AO6go1",
            "ClubName": "United Taiwanese Association",
            "clubEmail": "moa821@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8519",
            "PurposeStatement": "United Taiwanese Association (UTA) is an Asian-interest student organization at UC San Diego. UTA was established in 1992 and aims to provide a sense of home for overseas Taiwanese students and a platform for those interested in learning about Taiwan. As a sociocultural club, we host many events throughout the school year for people to catch up with friends and meet new people."
        },
        {
            "UID": "WwE3aJmmetPvCgdo06H1YlwK5oy1",
            "ClubName": "Rubiks Cube Club",
            "clubEmail": "moseskodur@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11895",
            "PurposeStatement": "To bring cubers and non-cubers together to learn more about solving the Rubik's cube, cuboids, or any other puzzles."
        },
        {
            "UID": "pngC4cMsl5bpxrl0qUmb8fYYGBs2",
            "ClubName": "Muslim Student Association",
            "clubEmail": "mso.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10658",
            "PurposeStatement": "The Muslim Student Association at UCSD strives to facilitate character building, humanitarian work, and social justice through educational and social avenues founded on Islamic standards of personal conduct and community. The organization aims to maintain an inclusive environment, to unite with allies, and to retain members in order to nurture a diverse generation of Muslims who are cognizant and pragmatic members of society."
        },
        {
            "UID": "5DUOmdI3pFZYt6nVFi69slQl0Mq2",
            "ClubName": "Psi Chi/Psychology Club",
            "clubEmail": "mtv002@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8478",
            "PurposeStatement": "Psi Chi is the international honors society of psychology whose mission is to provide students opportunities for leadership, scholarship, community service, and research. The UC San Diego chapter supports these opportunities by allowing students to form and join committees of interest as well as having a panel of officers who consistently present opportunities for professional growth. Being a registered member of the organization means a student has lifelong access psychology fellowships, scholarships, a career database, submission access to a peer-reviewed academic journal, and opportunities to present at the annual WPA and APA conferences. While Psi Chi has criteria for joining including a minimum GPA, amount of completed psychology courses, and a major or minor of psychology being a requirement, the UC San Diego chapter welcomes all students. Students who do not meet these minimum requirements (including new transfer students,) are welcome to join the chapter by being psychology club members. At meetings both Psi Chi and psychology club members work together using Robertâ€™s Rules of Order to vote on the direction of the chapter for the academic year. Students will be able to participate in experiences that can aid them in becoming stronger applicants for graduate school, attend workshops, view guest speakers, gain leadership skills, and help people in need within the San Diego community through service projects."
        },
        {
            "UID": "EPTPXOJgWbQCOC7CyQmGRAHPo3H2",
            "ClubName": "Musicians Club @ UCSD",
            "clubEmail": "muhexinli@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8349",
            "PurposeStatement": "Our purpose is to give an outlet for music lovers to share and express their passion for music, to allow musicians to collaborate and learn from one another, and to give musicians of all levels the experience of performing with others in front of an audience."
        },
        {
            "UID": "pn2fffEGDUh9ibuwFg5N22oLqzx2",
            "ClubName": "National Residence Hall Honorary",
            "clubEmail": "muir.musical@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8552",
            "PurposeStatement": "The purpose of the National Residence Hall Honorary is to serve and recognize individuals, groups, and programs on campus that contribute to the success of residential life at UC San Diego."
        },
        {
            "UID": "Yhdg8czJ2zTy7rwWlb77pRRKLvd2",
            "ClubName": "No Lost Generation at UCSD",
            "clubEmail": "musiciansclub.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10689",
            "PurposeStatement": "No Lost Generation (NLG) is an organization supported by the U.S. Department of State that focuses on advocating child protection and education for the youth affected by the global refugee crisis. NLG aims to promote awareness through networking opportunities with NGOs, IGOs, and aid groups, fundraising, and volunteering directly with local and virtually contacted refugees. NLG-UCSD hopes to encourage student humanitarian efforts within the San Diego community and abroad through collaboration with university students across the U.S., government agencies, and international organizations."
        },
        {
            "UID": "N1B2N9pcWgNzcUyZvC4EqyfsKZz2",
            "ClubName": "Okinawa Karate Do at UCSD",
            "clubEmail": "netsatucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10781",
            "PurposeStatement": "The Okinawa Karate-do at UCSD seeks to promote and preserve traditional Okinawa Karate."
        },
        {
            "UID": "btaFNb675uTZyzeDaPXJMXdKqNl1",
            "ClubName": "Out in Science, Technology, Engineering, and Mathematics (oSTEM)",
            "clubEmail": "newlifelajolla@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8448",
            "PurposeStatement": "Out in Science, Technology, Engineering, and Mathematics (oSTEM) is a nationally recognized organization that is geared towards the personal and professional development of queer or LGBTQIA+ students who are interested in Science, Technology, Engineering, and Mathematics through social, educational, professional, philanthropic, and outreach programming. It is also focused on helping students throughout UCSD and San Diego connect to a broader community of queer folks (students and professionals) whose academic interests lie in similar fields."
        },
        {
            "UID": "eohxFILHtJV1h9kjAZBobq4LmI33",
            "ClubName": "Open Dyalog",
            "clubEmail": "nrhhchair@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10807",
            "PurposeStatement": "Open Dyalog is a platform for students to share perspectives and experiences in an open discussion. Through a comprehensive training program, students can become facilitators to lead these conversations. Organizations across campus can request these dialogues in their community to promote deeper understanding and empathy."
        },
        {
            "UID": "T3UkID5fPte1RvjGvHrAuDInQJJ2",
            "ClubName": "Triton Actuarial Society",
            "clubEmail": "nuk002@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8509",
            "PurposeStatement": "Our mission is to encourage students interested in the actuarial field to pursue this profession by providing them with different resources, such as, workshops, exam preparation/study sessions, and networking opportunities with business professionals."
        },
        {
            "UID": "m0gek3XVX8Z4KFqGWlXQWJnhqIk1",
            "ClubName": "Glory Church Campus Fellowship",
            "clubEmail": "nupresident.gammas@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8366",
            "PurposeStatement": "The mission of this organization is to promote the Gospel of Jesus Christ, to promote faith in the Trinity God and His Bible, and to promote love and peace within communities with voluntary services."
        },
        {
            "UID": "cgUZngveX6ZSFYKIyy0aW8oZj1p2",
            "ClubName": "PARSA",
            "clubEmail": "oceanloversucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10729",
            "PurposeStatement": "The Persian Association for Rendering Science and Art (PARSA) at UCSD is a non-profit organization and independent of any political or religious beliefs. Activities of PARSA includes following purposes: I. Increase the general public awareness regarding Persian Art and Science II. Promote the Iranian/Iranian-American young and senior scientists and artists III. Bring Iranian/Iranian-American Scientist and Artist on-campus towards fostering young talents and show casing for general awareness."
        },
        {
            "UID": "KvaV6OHUf1PxhLVZs0Tl5M5VKEk2",
            "ClubName": "Triton Prosthetics",
            "clubEmail": "officialucsdtt@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10814",
            "PurposeStatement": "To increase independence and mobility for those with amputations and limb differences through the research and development of low cost, accessible prosthetics."
        },
        {
            "UID": "ONpNli3mDUa0qncUfVaan5jIQRG3",
            "ClubName": "Taiwanese Graduate Student Association",
            "clubEmail": "onestop@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10714",
            "PurposeStatement": "Taiwanese Graduate Student Association at UCSD is a social-oriented organization, but also culturally and academically based. The purpose of TGSA is to build up and strengthen social networks, to encourage academic merits of its members, and to promote Taiwanese and Asian culture."
        },
        {
            "UID": "ZCKAM6Ca4CWjZBoDQBY2AIO0Hqy1",
            "ClubName": "PERIOD. at UCSD",
            "clubEmail": "opendyalog@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8473",
            "PurposeStatement": "PERIOD. at UCSD is one of the many chapters of PERIOD., a national youth-led non-profit organization that strives to break down the stigma of menstruation while providing menstrual hygiene products to those in need. PERIOD. at UCSD aims to help lead PERIOD.â€™s â€œMenstrual Movementâ€ by advocating for equal access to menstrual hygiene products, educating others about this cause, and participating in service events. By hosting fundraisers to raise money for purchasing menstrual products, and by conducting donation drives, PERIOD. at UCSD will acquire the resources needed to create menstrual hygiene product care packages. All proceeds will then be donated to local San Diego recipient organizations that support homeless individuals in need of these packages. PERIOD. at UCSD also plans to incorporate educational components regarding the disparity in peopleâ€™s access to menstrual hygiene products during General Body Meetings (GBMâ€™s) and tabling events. Furthermore, PERIOD. at UCSD strives to make the discussion around menstruation a more comfortable topic, regardless of a personâ€™s identity. PERIOD. at UCSD believes that access to menstrual hygiene products should be a basic human right, and not a luxury or a privilege."
        },
        {
            "UID": "Y0SrEX2ZrueNMKGB1h1Ax0pjYLL2",
            "ClubName": "Persians Pursuing Pre-Health Professions",
            "clubEmail": "origamifoldersucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8464",
            "PurposeStatement": "Persians Pursuing Pre-Health Professions at UCSD (or Pre-Health Persians) wants to unify the Iranian community on campus through students who are passionately in pursuit of a deep sense of shared community, cultural identity, and also a future in health professions as we use our time together in our undergraduate years to prepare for our journeys to dental, medical, osteopathic, optometry, and pharmacy schools. We hope to form a symposium of like-minded students where we can be able to critically educate and mentor one another about the health issues pertaining, but not limited, to Iranians and in the Middle East, and to come together to fill each other with insight and support as we begin the path of seeking a career in health care."
        },
        {
            "UID": "34YSoyrvfnSUzYNGyQNbphQTSqo2",
            "ClubName": "Persian American Student Association",
            "clubEmail": "os-ucsd@eng.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10801",
            "PurposeStatement": "The Persian American Student Association (PASA) at UCSD intends to unify the undergraduate Persian community on campus in pursuit of a deeper sense of cultural, historical and communal identity. We hope to provide a forum, composed of individuals concerned with Iran and the Iranian diasporas irrelevant of background, where students can critically educate one another through educational, cultural, and social events. We also aim to engage Persian-American students with Persian their roots and culture."
        },
        {
            "UID": "adc6yjcMaiYu8190QDMOa8EeHpj2",
            "ClubName": "Phi Beta Lambda at UC San Diego",
            "clubEmail": "osu@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8543",
            "PurposeStatement": "Mission Statement: To bring business and education together in a positive working relationship through innovative leadership and career development programs."
        },
        {
            "UID": "azcdisz4mWSqE71M4gh2pfdMPgN2",
            "ClubName": "Phi Delta Theta",
            "clubEmail": "pagasa.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12046",
            "PurposeStatement": "Helping every individual to meet his true potential is the bedrock of the Phi Delta Theta Fraternity. By celebrating each personâ€™s true self, and by learning from each otherâ€™s strengths while helping to improve each otherâ€™s weaknesses, every member of Phi Delta Theta develops into a greater version of himself than he could ever on his own. Rather than try to find young men to â€œmoldâ€ into some ideal, we celebrate the uniqueness of each individual and, through encouragement, values, example and brotherhood, empower every brother to exceed his personal expectations."
        },
        {
            "UID": "fEklRzGwa5OsetX8M6zCDwsvdVe2",
            "ClubName": "PISA: Pacific Islander Student Association",
            "clubEmail": "pdtcakpresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12090",
            "PurposeStatement": "The goal of the organization is to provide a sense of community for students at UCSD who either identify as pacific islanders or wish to be a part of the pacific islander community. The organization will seek to promote and perpetuate pacific islander culture on campus. Members of the organization will gain a safe space in which they can meet with their fellow Pacific Islander UCSD peers to gain emotional and academic support"
        },
        {
            "UID": "LoqPsB1ESCesAIjzLUzSVgjfMYD2",
            "ClubName": "Phi Sigma Pi",
            "clubEmail": "pepitos@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8384",
            "PurposeStatement": "Phi Sigma Pi National Honor Fraternity is a co-educational honor fraternity with the purpose of fostering the ideals of scholarship, leadership and fellowship."
        },
        {
            "UID": "CZ8C6mYpUpakv5dS1lGAJt92lOL2",
            "ClubName": "Phi Sigma Rho",
            "clubEmail": "period.atucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11981",
            "PurposeStatement": "Phi Sigma Rho is a social sorority for women in engineering and engineering technology. Through Phi Sigma Rho, our sisters develop the highest standard of personal integrity, strive for academic excellence, and build friendships that will last a lifetime."
        },
        {
            "UID": "oj7YTpQKOYZ51Y8pWCVw41p6yDC2",
            "ClubName": "Phi Iota Alpha Fraternity, Inc.",
            "clubEmail": "phcadmin@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10824",
            "PurposeStatement": "Phi Iota Alpha Fraternity, Inc. is the Oldest Latino Fraternity in Existence. The history of Phi Iota Alpha Latino Fraternity is the history of all Latino college students and professionals who strive to keep their intellectual heritage alive. Phi Iota Alphaâ€™s vision is La UniÃ³n De La Patria Latino Americana and our mission is the promotion of personal, community, and Pan-American development through the ideals of Pan-American intellectuals and their philosophies. We believe in a commitment to the Latin American culture which involves intellectual development, cultural consciousness, personal growth, personal achievement, and social awareness."
        },
        {
            "UID": "1ceS31zx6mZOxAZBWNwvmGdQPwu2",
            "ClubName": "Pi Kappa Phi",
            "clubEmail": "phide.cabeta@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8373",
            "PurposeStatement": "Our mission is to create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of our communities. We envision a future where every Pi Kappa Phi embraces his role as a leader, puts service before self and improves the world around him."
        },
        {
            "UID": "lbxEUBdHVbQFHYD8tfjlze5hVz12",
            "ClubName": "Project BELL",
            "clubEmail": "pikappucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10795",
            "PurposeStatement": "Project B.E.L.L. (Boundless, Empowered, Lifelong Learners) is a dynamic initiative that strives to develop lifelong learners and active citizens who make a lasting impact in their neighborhoods, communities, and world at large by using education as a creative platform. Our programs seek to empower school-age youth from underserved communities by creating opportunities for them to take part in creating a safe and sustainable learning environment. In the course of effectuating change in underrepresented communities, our program strives to offer college students the freedom to apply what they have learned in a real world setting and the opportunity to be inspired by volunteering. We focus on Bell Middle School located in Chula Vista, hoping to increase the number of students who continue to high school each year."
        },
        {
            "UID": "vKKCIe0tLJeCqKzTYYPfi3eCAM53",
            "ClubName": "Project Kilimanjaro",
            "clubEmail": "PISA@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8383",
            "PurposeStatement": "The purpose of this organization is to promote the health and wellness of women and children internationally. Our current project focuses on increasing accessibility to healthcare for Maasai Villages on the base of Mt Kilimanjaro through HIV/AIDS seminars, First-Aid Resouces and Education, High risk Pregnancies Prevention and Childcare, and the Pad Project. These projects will culminate into building a pediatric wellness center in rural Tanzania for 87 Maasai villages on the base of Mount Kilimanjaro. Members of this organization will get a chance to volunteer in Tanzania to build the pediatric wellness center and promote the preceding four projects through our partner program, Maisha Arts Development and African Girl Foundation."
        },
        {
            "UID": "FXgiPkT1xAMvyt4DhCjaMYZjSnQ2",
            "ClubName": "Prospect - The Journal of International Affairs at UCSD",
            "clubEmail": "pokemonucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10685",
            "PurposeStatement": "PROSPECT is an undergraduate journal of international/transnational affairs at the University of California, San Diego. Serving as a forum for intelligent discourse relating to international and transnational affairs, the journal showcases works created by undergraduates who wish to broaden their understanding of issues of contemporary and global relevance."
        },
        {
            "UID": "O8DOEOQkdmVK3ZdIYOJWJLyCrn13",
            "ClubName": "Project RISHI",
            "clubEmail": "ppgaatucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8503",
            "PurposeStatement": "Project RISHI at UCSD aims to promote sustainable development and growth of rural Indian communities. In partnership with local community members and social enterprises, we identify issues central to our target community and provide resources to implement solutions through extensive field research and on-campus initiatives. We are a diverse group of passionate and energetic individuals moving forward the dialogue on equity and resilience through our projects. We hope to transform rural Indian areas into modern and sustainable communities while providing UCSD undergraduates with exposure to international philanthropy and the challenges faced in rural India."
        },
        {
            "UID": "48JjqKMgnRRQ81mta1QJqQUYPaJ3",
            "ClubName": "Pushpanjali",
            "clubEmail": "pps@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8357",
            "PurposeStatement": "To promote, explore, and to showcase classical Indian styles like Bharatanatyam, Kuchipudi, Kathak, and many more other styles in a way that can reach out to all cultures and people."
        },
        {
            "UID": "1PQ3bU0gFAc14ybsolNK6vJQnTJ3",
            "ClubName": "Pi Beta Phi",
            "clubEmail": "prehealthpersians@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12034",
            "PurposeStatement": "The mission of Pi Beta Phi is to promote friendship, develop women of intellect and integrity, cultivate leadership potential and enrich lives through community service."
        },
        {
            "UID": "6KebBhHFSBY2JiLxSva0GMv22633",
            "ClubName": "Pokemon League at UCSD",
            "clubEmail": "president.ucsd.phiota31@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8424",
            "PurposeStatement": "The purpose of Pokemon League at UCSD is: *To bring members of the Pokemon community together and create a social setting for anyone interested in anything related to Pokemon. *To provide a safe space for people within the Pokemon community, regardless of race, background, sexual orientation, gender, and religious association."
        },
        {
            "UID": "LtY8QfH5NkZmpZrHEVIjRjbvQal1",
            "ClubName": "Speech, Physical, and Occupational Therapy (SPOT) (formerly P-PT/OT Society)",
            "clubEmail": "president.ucsdsopi@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12088",
            "PurposeStatement": "To provide a gateway into the physical, occupational, and speech therapy fields through providing information about SPOT programs, preparing students for the application process, hosting speakers from the field and social networking."
        },
        {
            "UID": "ZvAI2UR67uczLe7lv3ehnYJOekr1",
            "ClubName": "Alpha Phi Omega",
            "clubEmail": "president@aporhopi.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9613",
            "PurposeStatement": "Alpha Phi Omega is a co-ed service fraternity organized to provide community service, leadership and social opportunities to college students. The purpose of this fraternity is to assemble college students in a national service fraternity in the fellowship of principles derived from the Scout Oath and Law of the Boy Scouts of America; to develop leadership, to promote friendship and to provide service to humanity; and to further freedom that is our national, educational and intellectual heritage"
        },
        {
            "UID": "WMGWjn5BxgXoQhv78kXeEVMWqZ82",
            "ClubName": "Society of Undergraduate Mathematics Students (SUMS)",
            "clubEmail": "prior.ucsdsam@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10679",
            "PurposeStatement": "SUMS provides resources, workshops, talks, and social events for UCSDâ€™s mathematics community with the goal of promoting mathematics and related fields."
        },
        {
            "UID": "veJiAKBnJtT8uBkWQJ5mtt48yAz2",
            "ClubName": "Queer Graduate Student Association",
            "clubEmail": "projectkiliforkids@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9600",
            "PurposeStatement": "The Queer Graduate Student Association was created to build community for graduate students who identify as lesbian, gay, bisexual, transgender, queer, intersex, asexual and other marginalized identities (LGBTQIA+)."
        },
        {
            "UID": "0glJFNKQJYR2Q9TU7MGYtlTQLoW2",
            "ClubName": "Quiz Bowl Club at UCSD",
            "clubEmail": "prospectjournal@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8577",
            "PurposeStatement": "To promote and participate in quiz bowl competitions throughout the United States."
        },
        {
            "UID": "EeOgh0qSMgRqHeWlaiuukkiYiqX2",
            "ClubName": "Phi Gamma Delta",
            "clubEmail": "psaucsd@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11868",
            "PurposeStatement": "We, the founding fathers of the Chi Lambda Chapter of UCSD will endeavor to provide an opportunity for friendship, scholarship and service to our members now and in the future. We seek excellence. We believe that the Phi Gamma Delta Chapter we bring back to UCSD must take into account the unique circumstances of our university and our student body. In order to be successful we must adapt our program to be in harmony with other campus constituencies, such as our student athletes and student leaders."
        },
        {
            "UID": "jkyXrLpR1eXLgfDDcPcU0hf3m7f2",
            "ClubName": "Ratio Christi at UCSD",
            "clubEmail": "psichi@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12020",
            "PurposeStatement": "Meetings consist of moderated discussions about \"life, the universe, and everything\" All are welcome. Attendees are from a wide variety of religious and philosophical perspectives. Please contact us if you are interested in participating. Ratio Christi is focused on bringing sound Christian apologetics to the campus through weekly meetings and special events. Meetings providing a safe and charitable venue for atheists, agnostics, skeptics, and adherents to any religion to investigate the claims of Christianity, discuss religious beliefs, and seek truth without fearing reprisal while forming friendships. Yes, this is a distinctly Christian organization, but any student is able to become a member and learn, debate, and explore the connection of faith and reason. Please join this effort."
        },
        {
            "UID": "UdJF5DBprwX3VYNjHKOvHbBpOFi2",
            "ClubName": "Rady Student Association",
            "clubEmail": "psichiomega@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10844",
            "PurposeStatement": "The mission of the Rady Student Association (RSA) is to encourage a thriving academic and social environment by providing leadership opportunities that empower and inspire, advocating on behalf of student interests, and coordinating all student-run activities for the Rady School of Management. RSA will serve as a link between the academic experience and the business world. RSA shall provide a forum for students to directly impact administrative policy matters while overseeing the development and maintenance of a strong community and pride in the Rady School of Management."
        },
        {
            "UID": "od5aSGd7YkavrDM3sM1h0N4FlWt2",
            "ClubName": "Pre-Health Professionals Club",
            "clubEmail": "psp@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10776",
            "PurposeStatement": "Pre-Health Professionals Club strives to gather Health Professionals and support them by creating a family environment for students to learn and develop as individuals and professionals."
        },
        {
            "UID": "cXqPt7z369gOhESfgwBcr7kAzyF2",
            "ClubName": "Redeemers Grace Church",
            "clubEmail": "qtpocucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8420",
            "PurposeStatement": "We are part of a local church called Redeemer's Grace Church of San Diego. We seek to proclaim the gospel of Jesus Christ and one of our ministries is to the college campus of UCSD."
        },
        {
            "UID": "04WFGu9NBZRbksjSq5CmUvu0gEC2",
            "ClubName": "Role Playing Games Club",
            "clubEmail": "quidditchucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8462",
            "PurposeStatement": "To encourage networking among the gaming community and introduce the UCSD community to role-playing games."
        },
        {
            "UID": "GN6WTkFeokQrI0e2zYd9FuXQLss1",
            "ClubName": "Catholics for Social Justice",
            "clubEmail": "r6walker@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10665",
            "PurposeStatement": "We, the Catholics for Social Justice at UCSD, as an affiliate of the Newman Center Catholic Community at UCSD, a mission of the Roman Catholic Bishop of San Diego, have a mission to spread Godâ€™s love and to care for our brothers and sisters in Christ through community service, education, and support for the San Diego community, as well as communities across the Mexican border."
        },
        {
            "UID": "fSF5FJsje7e66kTWtgXkCmCuZeq1",
            "ClubName": "Salsa Society",
            "clubEmail": "razagrad@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8486",
            "PurposeStatement": "The purpose of this page is to connect the Salsa/Bachata dancing community here at UC San Diego. We hope to create a clean and interactive environment here where students can share their love for dance or outreach to other students about any upcoming dance-related events. Any direct form of advertising made by people who are not students will not be acceptable and will be removed from the page to ensure that the quality of the page is kept as organic and genuine as possible. Weekly classes are held every Saturday from 6-8PM in Rec Gym. Keep on the lookout for our social dancing events this quarter on this page! The intention of the group is to bring new people into the salsa scene. Salsa dancing improves social skills, cognitive capacity and the ability to shake one's booty! It's ironically a highly effective stress reliever as well! What can you do to help? Invite your friends! Together we can break the UCSD trend of being known as the UC of the Socially Dead."
        },
        {
            "UID": "ULpaBBFS5EYmcGPnSCZpc1KMgPL2",
            "ClubName": "Samskrita Bharati UCSD",
            "clubEmail": "redcrossatucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10842",
            "PurposeStatement": "The group brings together people trying to learn Samskritam as a spoken language. Samskritam is a language of ancient India with a 3,500 year old history. The body of Sanskrit literature encompasses a rich tradition of philosophical and religious texts, as well as poetry, music, drama, scientific, technical and other texts. This group will provide an opportunity to speak the language among peers in the group and get support from experts in other organisations like Samskrita Bharati USA."
        },
        {
            "UID": "PFqNw9mqh7fA1eZ4PxUIAOj94523",
            "ClubName": "Mustard Seed Project, The",
            "clubEmail": "redliners@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11916",
            "PurposeStatement": "The Mustard Seed Projectâ€™s mission - guided by a â€œhand up, not hand outâ€ philosophy - is to create a student model that connects unsheltered and low-income individuals to services and programs through outreach, research, and education."
        },
        {
            "UID": "XShu63gARjZNpdyQIQpg6aFKCWr2",
            "ClubName": "Saltman Quarterly",
            "clubEmail": "remakeucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8479",
            "PurposeStatement": "The purpose of \"Saltman Quarterly\" (SQ) is to provide a medium for undergraduate students at UCSD to publish biological research as well as communicate new advances in the field of biology, encompassing topics ranging from medicine to ecology. SQ also provides authors and staff members with the skills needed to communicate science effectively to both biology and non-biology majors."
        },
        {
            "UID": "lrlrptvUNORZfS4XG0wdxH0lmtJ3",
            "ClubName": "British Student Association",
            "clubEmail": "rferrari@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11938",
            "PurposeStatement": "The purpose of this organization is to bring together the British student community and others interested in Great Britain together. The organization strives to practice and present British culture through social outings, historical cultural events, and British food."
        },
        {
            "UID": "bsLzwYN5FRO9Thye7nAgLTMCfjm1",
            "ClubName": "CS foreach",
            "clubEmail": "rhenein@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10818",
            "PurposeStatement": "CS foreach is a community outreach, student organization which aims to resolve the problems of equity and access in regards to Computer Science education among the underserved communities of San Diego. In resolving this issue, CS foreach will take an active role to support and initiate efforts to teach Computer Science education and cultivate mentorship between college students and K-12 students."
        },
        {
            "UID": "yAcNODGgs2SbvvnpyNdfgYQj5d83",
            "ClubName": "Quidditch",
            "clubEmail": "rishi@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10694",
            "PurposeStatement": "To share in our passion for Quidditch and Harry Potter as a community, by having fun."
        },
        {
            "UID": "hgYvdBW5SuRXoZeCuv61bwuOelo1",
            "ClubName": "San Diego Indonesian Association",
            "clubEmail": "risingucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8605",
            "PurposeStatement": "To promote Indonesian culture to University of California, San Diego community through social and other nonÂ­profit events. To create camaraderie between the members. To build a network with other Indonesian clubs."
        },
        {
            "UID": "XKezwbE8ngdk26Hy1jU4gMQJ2kI3",
            "ClubName": "Alpha Omega",
            "clubEmail": "rlim@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11906",
            "PurposeStatement": "A diverse and thriving community of believers who strive to encourage one another daily and help each other follow Jesus, while also seeking to make Him known to others around campus. Connected to a Bible-based local and international church."
        },
        {
            "UID": "58IfTl3SA8QR7wChpodJr4pBs7i1",
            "ClubName": "Tritons for Bernie 2020",
            "clubEmail": "robosub@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8547",
            "PurposeStatement": "To foster a grassroots movement on campus to help get Bernie Sanders into the White House"
        },
        {
            "UID": "F8yqS6x76IdRIdy6E0njuk6UHch1",
            "ClubName": "Cornerstone Community Consultants",
            "clubEmail": "rogerscommunitygarden@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8488",
            "PurposeStatement": "To assist and serve aspiring business leaders by bridging the gap between faith, community, and business opportunities through connections."
        },
        {
            "UID": "Q1eEJ7qSRBXIiNwlC18rzKthrNb2",
            "ClubName": "Sigma Alpha Epsilon",
            "clubEmail": "rpg@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8481",
            "PurposeStatement": "Sigma Alpha Epsilon strives to give young men the leadership, scholarship, service and social experiences they need to excel in the walls outside their campus and once they graduate. We firmly believe membership is for life. In addition, we strive to mold our members into gentlemen so they can set an example in today's society."
        },
        {
            "UID": "QhzXxGvwr7O7t6hRKC2Bi2pI88o1",
            "ClubName": "Sigma Alpha Mu Fraternity",
            "clubEmail": "rptpatucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11920",
            "PurposeStatement": "To unite each undergraduate member toward a more meaningful life, to prepare members for responsible fraternity and community involvement."
        },
        {
            "UID": "fwL5qBcpYGW7KucfWqyaYq9J0ry1",
            "ClubName": "Korean American Scientists and Engineers Association - Young Generation",
            "clubEmail": "rylui@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8362",
            "PurposeStatement": "KSEA-YG stands for Korean American Scientists and Engineers Association - Young Generation. Our parent organization was first established in 1971 to promote international cooperation between scientists and engineers in Korea and the US by providing career development and community service opportunities in the areas of science, technology, and entrepreneurship. More information about our parent organization can be found on the web: www.ksea.org. As a student chapter of KSEA, our organization foster communication among and provide assistance to Korean-American students in STEM field."
        },
        {
            "UID": "5F3lwdQcokfUm4rafJwB6KR2cwH2",
            "ClubName": "Sigma Phi Epsilon",
            "clubEmail": "salsasocietyucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8581",
            "PurposeStatement": "To impress upon its members the true significance of fraternal relationships and to create and perpetuate friendship among all persons in the chapter. To develop and strength the character of its members; promote the principles of Virtue, Diligence, and Brotherly Love; and preserve the ideals upon which this fraternity was founded. To instill upon those principles which are the responsibilities of an individual as a member of society."
        },
        {
            "UID": "SivJrBMqHWZDzyH6r5Ld92S60Gz2",
            "ClubName": "Sigma Pi Alpha National Sorority, Inc.",
            "clubEmail": "saltman@biology.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10849",
            "PurposeStatement": "Sigma Pi Alpha is a Chicana/Latina based sorority that focuses on community service, campus involvement, and sisterhood and within these components we stress academics and cultural awareness. We hope to provide women with the means to access higher education and to provide women on campus with community service opportunities and academic, personal, and individual support. Although we are a Chicana/Latina based sorority, our sisterhood reaches out to all different ethnicities."
        },
        {
            "UID": "vdClLoqST2aGK3usVugkWzOcE292",
            "ClubName": "Tau Kappa Epsilon",
            "clubEmail": "sami.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12060",
            "PurposeStatement": "To contribute to the advancement of society through the personal growth of our members and service to others."
        },
        {
            "UID": "HbSsIa14eETunfJNMNl909281GI3",
            "ClubName": "Sleepless Collective",
            "clubEmail": "sandiegohhi@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9599",
            "PurposeStatement": "Mixing urban dance and hip hop dance, Sleepless Collective aims to connect with people through dance and create humble community leaders and innovative performances."
        },
        {
            "UID": "h7VFcWpfcUMZ9c8KtX5w2D8aA882",
            "ClubName": "Society of Asian Scientists and Engineers at UCSD",
            "clubEmail": "sangamucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9620",
            "PurposeStatement": "The Chapter is committed to preparing members for success in the global business world, celebrating diversity, and contributing back to the community. The objectives and goals of the Chapter shall be to: 1. Support and develop programs that provide for the advancement of Asian heritage scientists and engineers. This goal shall be implemented by: -Career Workshops -Seminars and Symposia that focus on bettering the employability of members by bolstering the soft skills of members, working on their resumes, and teaching interview skills. 2. Develop and support programs that aid Asian heritage scientists and engineers who are actively seeking careers. -Interactions with potential employers -Tutoring/Curriculum assistance -Mentoring programs 3. Provide a forum for professional development and for the connection with entrepreneurial opportunities. 4. Inform the public of contributions and advancement made by Asian heritage scientists and engineers in newsletters and awards ceremonies."
        },
        {
            "UID": "pRNo1YP0YcPOEy4CHUVW3S44dyt1",
            "ClubName": "Sikh Student Association",
            "clubEmail": "saramach@ucsd.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11907",
            "PurposeStatement": "To promote awareness of Sikhism and inform others of its principles while building a close knit community."
        },
        {
            "UID": "WzTniA5A9fbKS9qsEc7e71KbZSG3",
            "ClubName": "Society of Women Engineers (SWE)",
            "clubEmail": "saztheta@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8444",
            "PurposeStatement": "Motivate women to achieve full potential in careers as engineers and leaders, expand the image of the engineering profession as a positive force in improving the quality of life, and demonstrate the value of diversity."
        },
        {
            "UID": "zEtNJD5aiKVDkTTg0nkI9e75elh2",
            "ClubName": "The BEAD Program",
            "clubEmail": "scejucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10748",
            "PurposeStatement": "The Bracelets for Empowerment And Development (BEAD) Program aims to provide widowed women in rural regions of Nigeria with the skill set of jewelry making as a source of economic and health security. In collaboration with the Faith Alive Foundation and Thrive Ministry and Mission, the BEAD Program has two main objectives: (1) To be an integral skills acquisition program and source of financial independence for both widows and younger women in rural Africa; (2) To produce revenue for the women that in part will be used to buy long-lasting insecticidal nets (LLINs) for the prevention of mosquito-borne disease in the local community, as well as investment in infrastructure in the womenâ€™s villages."
        },
        {
            "UID": "Rq54DL6HnQShE5JWSdFpoInLk7u1",
            "ClubName": "Hearthstoners at UCSD",
            "clubEmail": "scott.im@sdhanbit.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8467",
            "PurposeStatement": "Hearthstoners at UCSD seeks to provide a recreational, social, and competitive community for players of online card games within UCSD and the greater San Diego area, specifically Hearthstone. By providing an environment of social interaction, friendly competition, and in-game support, our goal is to give all of our members a positive gaming experience and the competitive drive to succeed in any gaming or non-gaming endeavor."
        },
        {
            "UID": "jJpthWjLW0fZlP5Yy8JPntua9pu2",
            "ClubName": "Student Organization for Activism and Represenation",
            "clubEmail": "scse.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8414",
            "PurposeStatement": "Student Organization for Activism and Representation (SOAR) strives to increase awareness on prevalent issues that affect underrepresented communities through various modes of community service. Additionally, the Student Organization for Activism and Representation is committed to educate UC San Diegoâ€™s undergraduate students on concerning issues to inspire their own sense of activism. The Student Organization for Activism and Representation is inclusive to all undergraduate students who share a passion for our mission and are devoted to positively impacting the community."
        },
        {
            "UID": "2gvI55314uaEIXne1vg63OvvUPB2",
            "ClubName": "Sitaare",
            "clubEmail": "sdacucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8557",
            "PurposeStatement": "Sitaare is UCSD's premier South Asian fusion A Cappella team. Since our inception in 2006, Sitaare has taken pride in its diverse vocal talent, continuing to explore ways to showcase variety and creativity in our repertoire. We enjoy performing various genres of both Indian and Western music, from Bollywood and Indian classical, to R&B and pop. In addition to competing in the Desi A Cappella circuit in prestigious competitions at Berkeley, Los Angeles, Dallas, Boston etc and the national All American Awaaz championship in Chicago, as well as UCSDâ€™s annual cultural events, Sitaare has also had the opportunity to perform at community events, weddings, and corporate events in San Diego, the Bay Area, and beyond. Sitaare always looks to push the boundaries of Desi a cappella, and reach for the stars."
        },
        {
            "UID": "auiYnd5jwsWyY4X7r7fCBsuwBTc2",
            "ClubName": "Alpha Kappa Psi",
            "clubEmail": "sdakpsi@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8358",
            "PurposeStatement": "The object and purpose of Alpha Kappa Psi Fraternity, Inc. (the \"Fraternity\") shall be to further the individual welfare of its members; to foster scientific research in the fields of commerce, accounts and finance; to educate the public to appreciate and demand higher ideals therein; and to promote and advance in institutions of college rank courses leading to degrees in business administration."
        },
        {
            "UID": "1umNfSkNGOb5yzI8tBXOEgb2pbw2",
            "ClubName": "Social Entrepreneurship Association",
            "clubEmail": "sdindonesianassociation@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10711",
            "PurposeStatement": "The Social Entrepreneurship Association is a collegiate organization that empowers students to discover meaningful and fulfilling work that satisfies their economic aspirations and creates a positive social impact on the world. The association welcomes its members to a network of motivated, empathetic change makers; fosters knowledge about local and global social issues; provides opportunities to partner with socially conscious businesses on impactful consulting projects; offers an education and training on key business skills; and spreads awareness about career paths that help others including benefit corporations, foundations, nonprofits, corporate social responsibility divisions, and more. The Social Entrepreneurship Association was founded at the University of California, San Diego in 2018 and aspires to grow nationally in order to empower all students to discover meaning, fulfillment and service in their careers."
        },
        {
            "UID": "1IyqZkrWodVXij8mMVzdvQcndvB2",
            "ClubName": "Student Housing Association",
            "clubEmail": "sea.ucsd1@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10828",
            "PurposeStatement": "To advocate for affordable housing on behalf of all UCSD student housing residents; To keep students informed through housing data analysis and facilitating access to housing information; To help students connect with classmates and neighbors; To hold student housing events such as town halls; To allow students to make their voice heard about campus housing."
        },
        {
            "UID": "zOWi3rIYDWaJSHKt0iupTlnkoHK2",
            "ClubName": "Pi Alpha Phi",
            "clubEmail": "sehyaei@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12017",
            "PurposeStatement": "Asian American Interest Fraternity"
        },
        {
            "UID": "0HRjhupgIJXhp9yFcVgUcGaQj332",
            "ClubName": "Society of Civil and Structural Engineers",
            "clubEmail": "sendforcsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8580",
            "PurposeStatement": "The Society of Civil and Structural Engineers (SCSE) is the UC San Diego student chapter of the American Society of Civil Engineers (ASCE) and the Structural Engineers Association of San Diego (SEAOSD). Our purpose is to supplement the engineering education of UCSD students, promote the personal and professional development of our members, and improve the community of which we are part through outreach and community service."
        },
        {
            "UID": "hd81vhXkEdPlsyMLOmApimiXplu2",
            "ClubName": "Taiwanese American Student Association",
            "clubEmail": "sha@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8490",
            "PurposeStatement": "The Taiwanese American Students Association (TASA) at the University of California â€“ San Diego is an organization that provides a sense of community for Taiwanese Americans, as well as those interested in the Taiwanese culture. We create a sense of unity not only within the Taiwanese community here in San Diego but also with students at other universities. Our organization promotes cultural awareness by building a community of motivated and dedicated students through our social, cultural, and service activities that take place throughout the year. The Taiwanese-American identity is a vastly varied one and at times a divisive issue. Moreover, there is political and cultural apathy among much Taiwanese, and under-representation in our communities. Yet, from those who barely identify themselves as Taiwanese, to those who feel passionately about Taiwanese culture, they are all still unified under a common background. Those with the Taiwanese-American identity have the potential to develop into a tight-knit community and strong leaders with a unified voice in this nation."
        },
        {
            "UID": "nWRrM0KsPbT1BrWbaJupDaXpWRt2",
            "ClubName": "Tae Kwon Do Club at UCSD",
            "clubEmail": "shacoordinator@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8603",
            "PurposeStatement": "The purpose of the Tae Kwon Do Club at UCSD is to provide a means through which members can practice and learn the art of Olympic Style Taekwondo in a fun and safe manner. The Club is part of an established intercollegiate organization (National Collegiate Taekwondo Association) and intercollegiate leagues (SoCal, PacWest), with goals of competing intercollegiately. The Club is also dedicated to building a community supporting health and fitness, as well as practicing teamwork, leadership, and sportsmanship."
        },
        {
            "UID": "v87wHdFPQtWOY29br9RExMPTapG3",
            "ClubName": "Student Veterans Organization",
            "clubEmail": "shpe@eng.ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11863",
            "PurposeStatement": "The mission of the Student Veterans Organization is to be the touchstone and support network for the UCSD veteran community in order to ensure their personal, professional, and academic success."
        },
        {
            "UID": "eJQfr8BlkibqaUg5L8OTaz5VjLK2",
            "ClubName": "Teo-Chew Association",
            "clubEmail": "sjpucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8474",
            "PurposeStatement": "The Teo-Chew Association is a nonprofit student-run organization committed to the rich history and culture of the Teo-Chew American community and serving college-age youth. The following goals compose the Teo-Chew Associationâ€™s mission statement and purpose: â€¢ To increase awareness about Teo-Chew culture and language â€¢ To unite the Teo-Chew community on campus and beyond â€¢ To advocate for the preservation of Teo-Chew and Chinese culture and history for the general welfare of the Teo-Chew community"
        },
        {
            "UID": "e7mK014PeWMjYIEpq7wk5ETF5Tj2",
            "ClubName": "Speech and Debate at the University of California: San Diego",
            "clubEmail": "skpresident.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10696",
            "PurposeStatement": "The mission of Speech and Debate at the University of California: San Diego is to provide education in the arts of public speaking and persuasive argumentation, incorporating the skills of research, analysis, critical thinking, organization of logical communication, and oral persuasive presentation."
        },
        {
            "UID": "qDQT4YvyEYPHI20yvuB24uA57C03",
            "ClubName": "Student Health Advocates",
            "clubEmail": "sleeplesscollectivedance@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12004",
            "PurposeStatement": "The Student Health Advocates (SHAs) are trained, volunteer peer health educators that educate other students about health issues and concerns through educational workshops, events, and campaigns. SHAs address topics such as alcohol, drugs, stress, healthy eating, physical activity, and sexual health."
        },
        {
            "UID": "RHEeO923Q8RVQOGwpUWzouTyb883",
            "ClubName": "Students of Color for Environmental Justice at UCSD",
            "clubEmail": "SLSAucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8534",
            "PurposeStatement": "The Students of Color for Environmental Justice at the University of California, San Diego seeks to provide communities of color a learning and healing space that works at the intersections of race, identity, class, and gender. The group will actively work towards increasing the representation of people of color in the environmental and wilderness sectors in an effort to alleviate the marginalization these communities have historically experienced in these fields."
        },
        {
            "UID": "O20LF0i3eMZQ9b3HibwOjRgOiCn1",
            "ClubName": "Hong Kong Cultural Society",
            "clubEmail": "sml004@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11948",
            "PurposeStatement": "The Hong Kong Cultural Society wishes to promote the unique Hong Kong and Cantonese Culture to UCSD students, while also helping Hong Kong students find a home overseas with fun and open social events and friendly discussions on current events."
        },
        {
            "UID": "XPUf41Egw9Pf5qhnYBorYMgdLTG2",
            "ClubName": "TamashaSD",
            "clubEmail": "soarucsd123@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12103",
            "PurposeStatement": "TamashaSD is a student run organization on the UC San Diego campus that aims to connect South Asian Americans back to their roots while fostering a positive cultural environment for the community. Eight Bollywood-Fusion dance teams will showcase their talent from across the nation and have the chance to compete for a first place prize. Get ready to experience amazing ocean views, unforgettable sunsets and tasty street tacos. Most of all, donâ€™t forget to stay classy San Diego."
        },
        {
            "UID": "bZxt3QwKdRQcnP1rE2ikhd0EUd32",
            "ClubName": "Student Equities Trading Club",
            "clubEmail": "ssa@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10695",
            "PurposeStatement": "The goal of our organization is to create a community of student equities, options, and/or forex traders and allow for the flourishing of new ideas as well as provide any and all helpful information to student traders. We seek to empower students who have little to no information of equities, options, and forex trading and grow their arsenal of trading techniques and analysis abilities. Whether a student is highly skilled and knowledgeable in trading or justs starting out, we will seek to always educate the best trading practices, risk management, and how to deal with emotions in the trading environment."
        },
        {
            "UID": "aWy7IjIhjwTGduzBxAMusUnbGw53",
            "ClubName": "Symphonic Student Association",
            "clubEmail": "strive@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12061",
            "PurposeStatement": "The Symphonic Student Association (SSA) is a student-run organization committed to fostering a community for students and community members who share an interest in classical music. SSA is the primary social platform for the UCSD Chamber Orchestra but hosts social events open to the entire UCSD community. In addition, SSA provides a range of performance opportunities such as: chamber groups, recording groups, gigs, and community outreach performances. Finally, SSA works to help improve musicianâ€™s skills with coaching from professionals for instrumentalists. SSA is dedicated to raising awareness in classical music on the UCSD campus by holding performances throughout the year and strives to build a community where students can gather to explore the boundaries of musical instruments and classical music. For more information, visit our website at ssa.ucsd.edu or contact us at symphoni@ucsd.edu."
        },
        {
            "UID": "YnoBpkGEF9cpGqf6S9uhNS9JFDR2",
            "ClubName": "Students Against Mass Incarceration",
            "clubEmail": "sums@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11962",
            "PurposeStatement": "Provide a space to cultivate a culture of undergraduate student activism against the injustice in the U.S. prison system and cooperate with faculty and graduate students to spread awareness primarily through screenings, speakers, panels, campaigns, and direct networking with key people working in this arena"
        },
        {
            "UID": "zG8W80OCvFZsXeO4kFbJjQIUFVE2",
            "ClubName": "Students for Conservation",
            "clubEmail": "swe@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8507",
            "PurposeStatement": "The purpose of this organization is to promote awareness about environmental conservation and to help preserve the natural environment. Organization efforts will focus on both aquatic and terrestrial ecosystems, with an emphasis on the local San Diego environment. Members will participate in volunteer and collaborative efforts to promote environmental stewardship."
        },
        {
            "UID": "wmy4ZZ8CXbMbR0FIKscO5Kqq9r12",
            "ClubName": "M.E.M.O. at UCSD",
            "clubEmail": "syl127@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8378",
            "PurposeStatement": "MEMO provides medical and educational services locally in San Diego and Orange County, as well as abroad in Vietnam. We send volunteers annually to Vietnam to provide scholarships and school supplies to students in rural communities, set up free health clinics, donate monetary aid and supplies to orphanages, and sponsor heart surgeries for children with congenital heart disease. Locally in San Diego and Orange County, we send volunteers to help other local non-profit organizations, set up community health fairs, and organize awareness nights on campus."
        },
        {
            "UID": "awDBzTvZHOSvlBr2huZ1IIBeZHP2",
            "ClubName": "The Brain Exercise Initiative",
            "clubEmail": "symphoni@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11961",
            "PurposeStatement": "The Brain Exercise Initiative is a student run non-profit organization that uses math, reading and writing as a form of cognitive development for the elderly. It is found that simple math exercises and reading aloud for just 30 minutes a day can have a positive impact on memory for those with Alzheimer's. This is currently being done extensively in Japan. It was discovered by a Japanese doctor, Ryuta Kawashima, and consists of math exercises and reading aloud of short stories. Done for just 30 minutes a day, 5 times a week, improvements in Alzheimerâ€™s patients have been observed. It is currently being done in 1,400 care homes with 15,000 Alzheimer's patients all over Japan and has had great success. Many individuals showed improvements in communication and behavior. Some went from being bedridden to sitting in a chair or walking. Some showed improvement in controlling their bowel movement. Additionally, they began to feel happier."
        },
        {
            "UID": "gPfZDngbPBcSfJ1eg3tFQZtwBvf1",
            "ClubName": "Themed Entertainment Association @ UCSD",
            "clubEmail": "tabithaucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8385",
            "PurposeStatement": "Officially affiliated with the international Themed Entertainment Association, TEA at UCSD is a club for aspiring theme park designers, engineers, and creators. Providing experience with industry-based, hands-on projects and events that canâ€™t be found anywhere else at UCSD, members graduate prepared to work in the top businesses that create the magical and adventurous experiences we all remember, cherish, and love."
        },
        {
            "UID": "qaQt4clhpHMTfiEdyd2c2YIkuZv2",
            "ClubName": "Trend",
            "clubEmail": "tamashasd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8376",
            "PurposeStatement": "Trend is a non-profit student organization that publishes a fashion magazine. It highlights the fashion of individuals and connects UCSD students to social events in the local San Diego community. The publication offers student opportunities to learn and gain experience in the media industry."
        },
        {
            "UID": "BDAIOm62xGTT9hw5TcSk0Ug0I9o1",
            "ClubName": "Triton Splatoon",
            "clubEmail": "tas.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10739",
            "PurposeStatement": "Triton Splatoon is a student organization with the purpose of bringing together players of the video game Splatoon 2 for the Nintendo Switch. The goal is to create a friendly community of students that share the same passion for the game while also promoting the competitive shooter scene. The focus will be primarily on socializing with other players on campus and bringing the best gaming experience possible to students."
        },
        {
            "UID": "IpcUtirdcOZPC1qRqlxypvn8gv32",
            "ClubName": "Triton A Cappella Community",
            "clubEmail": "tbp@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10839",
            "PurposeStatement": "To foster a community among the various a cappella groups at UC San Diego, and to facilitate the organization of concerts and events, especially during the audition season, which involve multiple groups. Triton A Cappella Community is a non-profit student organization."
        },
        {
            "UID": "EJ2kobwA29gDsHqmdgRHKtuO9h12",
            "ClubName": "Triton Dota",
            "clubEmail": "tca@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9635",
            "PurposeStatement": "The organizationâ€™s purpose will be to foster a community within UCSD focused around the video game Dota 2 and to promote interest and engagement with the game and its community in the general student body. This includes social, casual, and competitive opportunities for all players regardless of skill level or playtime."
        },
        {
            "UID": "ybrcdPMKhoeDJRsQxdjkksMwPZx2",
            "ClubName": "Triton Melee",
            "clubEmail": "tea@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12048",
            "PurposeStatement": "To expand the community of the game Super Smash Bros: Melee by offering a friendly, interactive, and competitive environment to all student players."
        },
        {
            "UID": "NQLKs6tnCANBWBn6L07pWepbhjQ2",
            "ClubName": "Korean American Student Association",
            "clubEmail": "teamucsd.kendo@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8587",
            "PurposeStatement": "To unify and empower the Korean American voice on campus by means of cultural, political, and social events."
        },
        {
            "UID": "dzyhZ7cLoSdRBpzhRZ01BI5g21g1",
            "ClubName": "Triton Counter Strike",
            "clubEmail": "TEDxUCSD@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10817",
            "PurposeStatement": "Triton Counter Strike is an organization encompassing all players an environment to play, socialize, and promote their enthusiasm for all Counter Strike games. We will provide events including, but not limited to: online games, offline meetings, and LANs / tournaments."
        },
        {
            "UID": "eX7x9hNtJifmPqdDoo8A3dh1PiD3",
            "ClubName": "Delta Gamma",
            "clubEmail": "the.dots@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10715",
            "PurposeStatement": "The ladies of Delta Gamma pride themselves on their commitment to fostering high ideals of friendship, promoting educational and cultural interests, creating a true sense of social responsibility, and developing the finest qualities of character."
        },
        {
            "UID": "nh6fZK329LVzXznHBNg8L2nPAgh2",
            "ClubName": "Chi Omega",
            "clubEmail": "thechecafe@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8592",
            "PurposeStatement": "Chi Omega is a Panhellenic sorority forever committed to its founding purposes of friendship, personal integrity, service to others, academic excellence and intellectual pursuits, community and campus involvement, and personal and career development."
        },
        {
            "UID": "l1hWhNnaQRVLMDcR3ED8Hv1X0dB2",
            "ClubName": "Indian Student Association",
            "clubEmail": "thehomelesscharter@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8371",
            "PurposeStatement": "We are an undergraduate organization that provides useful services for Indians at UCSD and hosts Indian cultural events for the San Diego community. Our goal is to make a culturally active and aware community and an easier transition to UCSD for undergraduate students."
        },
        {
            "UID": "ll5Oty47tHPpnPt8mN4ZGD9AlWu1",
            "ClubName": "Multi-Asian Student Association",
            "clubEmail": "themixedstudentunion.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8495",
            "PurposeStatement": "As a cultural and social organization, we aim to promote diversity and celebrate the various and distinct Asian cultural backgrounds of the students of UCSD. We hope to share these cultural values to the UCSD community by providing a fun and welcoming, stereotype-free, and all-inclusive social atmosphere for students."
        },
        {
            "UID": "TnrpGAk7s9VR3ij1VaFBSAycKN92",
            "ClubName": "Metanoia Social Club",
            "clubEmail": "tin035@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10683",
            "PurposeStatement": "The purpose of Metanoia is to allow students of all backgrounds to come together and form a community where they are able to engage in intellectual discussion, share ideas, and discover new ones. We strive to become a force of stability and strength in studentsâ€™ lives as they experience transition and explore their spirituality in a fun, sociable setting."
        },
        {
            "UID": "5IFyOx0TFBeNwpDZCghiFgj6QpH3",
            "ClubName": "Triton Robosub",
            "clubEmail": "tntforhealth@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8458",
            "PurposeStatement": "This organization is devoted to students who want to explore underwater robotics and research applications of Autonomous Underwater Vehicles, hereinafter referred to as AUVs. Our main method for exploring this field is by compete in Robonation's Robosub competition, hosted in San Diego's TRANSDEC pool. Students will have the opportunity to not only learn about Autonomous Underwater Vehicle (AUV) construction and testing, but will be able to meet technology recruiters at the competition, practice networking skills with other teams and companies, and learn how to write a journal paper."
        },
        {
            "UID": "ceZ7myQw22hjgXbB5tNLt3KvO3h1",
            "ClubName": "Triton Smash",
            "clubEmail": "trend@uscd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8528",
            "PurposeStatement": "Triton Smash is a student organization with the purpose of bringing together players, spectators, and enthusiast of Super Smash Bros Ultimate for the Nintendo Switch. The goal is to create a friendly community of students that share the same passion for the game while also promoting the competitive fighting scene. The focus will be primarily on socializing with other players on campus and bringing the best gaming experience possible to students."
        },
        {
            "UID": "yGEGedqReMO31iUkKF1t0CRaaU43",
            "ClubName": "Undies for Oldies: Geriatrics Education and Medicine",
            "clubEmail": "tritoncu@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8598",
            "PurposeStatement": "The purpose of this club is to raise money and buy underwear for elderly patients at Geriatric units in hospital throughout San Diego. By doing so we are helping to restore dignity and decency to these people while at the same time educating the student body about issues of geriatrics, senior care, and palliative care."
        },
        {
            "UID": "uJU90yerBVXgvRP04mMFP4EAWEJ2",
            "ClubName": "United Accounting Society at UC San Diego",
            "clubEmail": "tritones@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11880",
            "PurposeStatement": "The United Accounting Society at UC San Diego strives to assist students to pursue their interests and goals with respect to the accounting industry. We seek to provide students opportunities to learn more about the accounting industry, form connections with professionals, and meet other students with interests in accounting. We hope to help students achieve a smooth transition into the professional working world by helping them with their professional development."
        },
        {
            "UID": "6iHpMaoJa8fKcxUyjzcTBzfzQIX2",
            "ClubName": "Tritones at UCSD",
            "clubEmail": "tritongamingofficial@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12037",
            "PurposeStatement": "To encourage participation in the fine arts, to provide entertainment, to support all musical endeavors, to expand the genre of a cappella in the San Diego region."
        },
        {
            "UID": "VyK9UM6zliQFtWIVoh5CnGuJdbY2",
            "ClubName": "Multicultural Greek Council",
            "clubEmail": "tritonmocktrial@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12023",
            "PurposeStatement": "The purpose of the Multicultural Greek Council at the University of California, San Diego shall be to create and maintain high standards in fraternities and sororities by addressing, coordinating, and developing strategic action plans that unify organizations, promote higher education, provide community services, and enhance leadership. The Multicultural Greek Council will also serve as a liaison and advocate to the Associated Students, the Center for Student Involvement (CSI), and other administration thereby maintaining open communication and improving the campus climate. The Multicultural Greek Council at the University of California, San Diego, is a non-profit, student organization."
        },
        {
            "UID": "GNLyXzWp7ZTJWy7UMQicLMQ2ddf2",
            "ClubName": "Origami Folders at UCSD",
            "clubEmail": "tritonnavs@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8472",
            "PurposeStatement": "To provide a venue for origami enthusiasts to fold and share their passion with others and to introduce beginners to the traditional Japanese art and its applications in math and engineering."
        },
        {
            "UID": "s9o6GJjPnAOpBqUSHccBIpDyKEC2",
            "ClubName": "Tritons for Animals",
            "clubEmail": "tritonprosthetics@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10788",
            "PurposeStatement": "The purpose of Tritons for Animals is to advocate for the welfare and humane treatment of animals through education and the promotion of a plant- based lifestyle."
        },
        {
            "UID": "TNGhNybIRDQ63wOfnvE7Shmgkus2",
            "ClubName": "Tritons For Israel",
            "clubEmail": "tritonrobotics@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8548",
            "PurposeStatement": "Tritons For Israel is the pro-Israel student organization at UC San Diego. We are dedicated to raising awareness about Israel and celebrating Israeli culture, educating students and encouraging dialogue, as well as promoting peace in the Middle East."
        },
        {
            "UID": "Ze9w1urhFyRGKDXlijPSi4qKqxf1",
            "ClubName": "United Students Against Sweatshops-San Diego",
            "clubEmail": "tritonsfilmsociety@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8516",
            "PurposeStatement": "USAS-San Diego seeks to hold accountable multinational companies that exploit the people who work on university campuses, in our communities, and in the overseas factories where collegiate apparel is produced. Students have unique leverage over the colleges and universities that are often the largest employers, the largest landlords, and large institutional investors in our communities and regions. Students also have leverage over the companies that value universities as clients. Promote campaigns for organizing rights, fair contracts and living wage policies on campuses and in communities all across the US, using student power to support workers struggling to transform minimum wage jobs into living-wage, union jobs, and ensure universities support ethical contractors that set â€“ not undercut â€“ good employment standards in local economies."
        },
        {
            "UID": "ivT3b6wKBZX8NZKcYuQRJbFSelm1",
            "ClubName": "Urban Changemakers",
            "clubEmail": "tritonsforanimals@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8449",
            "PurposeStatement": "The purpose of the Urban Changemakers Club is to: -Foster a greater sense of community through healthy placemaking both on and off-campus -Increase networking opportunities and offer practical exposure to professional careers for Urban Studies and Planning majors."
        },
        {
            "UID": "PKf9K3T6EvaQYxEf5iFA4Dk3N8J3",
            "ClubName": "Vietnamese Student Association",
            "clubEmail": "tritonsforisrael@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9651",
            "PurposeStatement": "To promote and preserve the Vietnamese culture and awareness among the UCSD students through various cultural, social, community, and educational events."
        },
        {
            "UID": "40XCt3vglqOGxerKw6x3E12DNjR2",
            "ClubName": "Tritons for Sally Ride Science",
            "clubEmail": "Tritonsmash4@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9603",
            "PurposeStatement": "The purpose of Tritons for Sally Ride Science is to promote K-12 STEM education and generally broaden STEM participation. Through mentoring and exciting K-12 students, we hope to promote science literacy and awareness."
        },
        {
            "UID": "sDR4PnuFcBhOCGByhR6EqgyeXzP2",
            "ClubName": "Undergraduate Bioinformatics Club at UCSD (UBIC)",
            "clubEmail": "tritonsplatoon@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10682",
            "PurposeStatement": "The Undergraduate Bioinformatics Club (UBIC) at UCSD shall be a non-profit organization whose purpose is to serve bioinformatics undergraduates by providing resources for students entering the growing discipline; furthering access to job, internship, and research opportunities; facilitating an open forum for discussion, collaboration, and socialization; holding events, programs, and meetings; and acting as a collective voice for bioinformatics students at UCSD."
        },
        {
            "UID": "8PG2q2xBFJWYaynkVcactronXgI2",
            "ClubName": "Tau Beta Pi",
            "clubEmail": "tritonsvo@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8485",
            "PurposeStatement": "Tau Beta Pi is the premier engineering honor society in the United States and one of the top three honor societies in the nation. The Society focuses on serving its members and the public with enthusiasm and excellence. The Association also strives to promote excellence in the fields of engineering, thus helping to improve the perception of the profession."
        },
        {
            "UID": "kYTtzN24X4NOxHPhpgIUYpQtbIR2",
            "ClubName": "Tzu Chi Collegiate Association at UCSD",
            "clubEmail": "tse@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10671",
            "PurposeStatement": "Tzu Chi Collegiate Association at UCSD is a non-profit student organization, which aims to inspire college-level students in the mindful practice of the Tzu Chi Foundationâ€™s principles of Gratitude, Respect, and Love through service at the community level. Tzu Ching promote the universal value of â€œGreat Loveâ€ through the Tzu Chi Foundationâ€™s missions of Charity, Medicine, Education, Culture, International Relief, Bone Marrow Donation, Environmental Protection and Community Service. Through mindful practice of Founder Dharma Master Cheng Yenâ€™s teachings, Tzu Ching hope to purify people's minds and bring positive influence into the community."
        },
        {
            "UID": "fNhi4YZvUeRxbWWOxnJHvmn0JoC2",
            "ClubName": "Undergraduate Economics Society",
            "clubEmail": "tuas@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8506",
            "PurposeStatement": "The purpose of the Organization is to create a community of students and faculty members defined by an interest in the study of Economics."
        },
        {
            "UID": "dtrsPUwYOnQWYH5SNZeRVaChb5H3",
            "ClubName": "Yonder Deep",
            "clubEmail": "uas.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11878",
            "PurposeStatement": "Yonder Deep, part of the Yonder family of student project teams, is dedicated to pursuing autonomous underwater vehicle (AUV) projects, partnering with outside institutions to bring undergraduates closer to tangible research projects, and bringing tangible experience to students interested in the ocean and robotics."
        },
        {
            "UID": "3rRJqGOwtbbKKs2EazLoluGV3WD3",
            "ClubName": "Women in Business",
            "clubEmail": "ubic.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10657",
            "PurposeStatement": "UCSD Women In Business aims to empower women of all backgrounds to become leaders in today's ever-changing world. Through business education, networking, mentorship, leadership development workshops, and social events, members will have the chance to join a community dedicated to helping one another succeed. By encouraging both professional and personal growth, UCSD WIB will give women pursuing business the chance to affect change not only within themselves and the university, but in the world they seek beyond."
        },
        {
            "UID": "b4L98yqTcsWb0BOyx7MPN24Woym2",
            "ClubName": "Design at UCSD",
            "clubEmail": "ucsandiego.dem@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12058",
            "PurposeStatement": "Design Co is a pre-professional student organization at UC San Diego that bridges the gap between designers and industry. Our mission is to cultivate a space that fosters opportunity and growth as an inclusive community of designers. The â€œCoâ€ means Community, Collective, and Collaborative, which is everything we stand for. We believe that fostering an inclusive design community means collaborating with others and growing with everyone. By combining workshops, events, and other career growth opportunities, weâ€™re taking the challenges of breaking into industry head on and building a strong design community while we're at it."
        },
        {
            "UID": "5ATPq8rYzYZs9hnkt3sn6Wh2tgz2",
            "ClubName": "Alpha Phi",
            "clubEmail": "ucsandiegoalphaphi@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10846",
            "PurposeStatement": "Alpha Phi is a sisterhood of outstanding women supporting one another in lifelong achievement."
        },
        {
            "UID": "yyuSjDEmxDdwCU5at2cYZwlDOXu2",
            "ClubName": "Innovative Student Project Groups",
            "clubEmail": "ucsandiegohksu@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8594",
            "PurposeStatement": "ISPG is a student run organization which aims to give students confidence to start and work on projects outside the classroom. With discussions on leadership, idea sessions , project group workdays, and workshops, members will gain technical skills and knowledge about designing and managing projects effectively."
        },
        {
            "UID": "MJkh8Tck1pRCgHNfOCvA1vEfTRH2",
            "ClubName": "Tabitha",
            "clubEmail": "ucsandiegostudentfoundation@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8560",
            "PurposeStatement": "Tabitha is a sustainable non-profit organization seeking to improve the lives of impoverished families in Cambodia. The organization will seek to fundraise for multiple of Tabitha's ongoing projects such as its savings program, construction of new women's hospital, establishing accessible water and housebuilding. The foundation also seeks to implement an international volunteer connection between students in California and South East Asia. Tabitha is an educational experience for both ends involved benefiting the students that engage with the foundations as well as the people in Cambodia."
        },
        {
            "UID": "1XfCs24FV2MKSkhJj7qShiAWaoc2",
            "ClubName": "Zion Bible Study Club",
            "clubEmail": "ucsandiegovsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8435",
            "PurposeStatement": "Primarily focusing on studying the bible, Zion Bible Study Club offers members the opportunity to distinguish between what the bible teaches and the traditions of men."
        },
        {
            "UID": "wUQWZKoui6atwtaR9aXkU7B8x8D3",
            "ClubName": "",
            "clubEmail": "ucsandiegoyoungplanners@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "ZHbwdwYB1uQHakzOig6HZ4BU7FT2",
            "ClubName": "Alpha Epsilon Delta Pre-Health Professional Honor Society",
            "clubEmail": "ucsd.aed@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8471",
            "PurposeStatement": "A pre-health honor society with the purpose of connecting future health professionals and recognizing their achievements in their pursuit of a career in health. Activities include volunteering, educational programs and speakers at bi-weekly meetings including doctors, nurses, patients, medical students, pharmaceutical students, and more."
        },
        {
            "UID": "oEfR8Oprk8eheQdMplokyVysGtE3",
            "ClubName": "Alpha Epsilon Pi",
            "clubEmail": "Ucsd.aepimaster@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10656",
            "PurposeStatement": "Alpha Epsilon Pi's role is to encourage Jewish students to remain dedicated to Jewish ideals, values, and ethics and to develop members that effectively help to make UCSD a more inclusive and welcoming campus for all students, regardless of faith or cultural background. We rely on a variety of events and programs to help grow our community and to benefit UCSD and the San Diego community"
        },
        {
            "UID": "78WjiBvY4uWfHrGYVQvrdbYzFyG3",
            "ClubName": "Alpha Omicron Pi",
            "clubEmail": "ucsd.aoii.president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9609",
            "PurposeStatement": "The object of Alpha Omicron Pi Womenâ€™s Fraternity shall be to encourage a spirit of Fraternity and love among its members; to stand at all times for character, dignity, scholarship, and college loyalty; to strive for and support the best interest of the colleges and universities in which chapters are installed, and in no way to disregard, injure, or sacrifice those interests for the sake of prestige or advancement of the Fraternity or any of its chapters."
        },
        {
            "UID": "fDA1swssRSZisTZYml6OU6dsfXV2",
            "ClubName": "Bhagat Puran Singh Health Initiative (BPSHI)",
            "clubEmail": "ucsd.beat@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10770",
            "PurposeStatement": "The Bhagat Puran Singh Health Initiative aims to eliminate health and social misconceptions within underserved and underprivileged populations by providing access to health education and free health clinics for the betterment of the body."
        },
        {
            "UID": "JUPQFza4zVUIq2J6NHZynxdJAlP2",
            "ClubName": "Queer and Trans* People of Color (QT*POC) at UCSD",
            "clubEmail": "ucsd.bell@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12003",
            "PurposeStatement": "Queer and Trans* People of Color (QT*POC) at UCSD was established in 2000 by a group of Queer students of Color FED UP with racism in the queer community, and with homophobia and transphobia within cultural organizations. With this, at the core of QT*POC are our commitments to struggle and our commitments to activism. We recognize the intersections of our multiple, beautiful, and sometimes confusing identities, as well as the related intersections of social justice movements. We create a SPACE--a social, political, academic, and cultural environment--to enhance our members' entire self-being and holistic wellness."
        },
        {
            "UID": "FMAwQL5Rt2YPFvuYaLmJhTJ0cum1",
            "ClubName": "IGNITE at UCSD",
            "clubEmail": "ucsd.cochair1@hauchapters.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8513",
            "PurposeStatement": "IGNITE at UCSD is a network of like-minded, ambitious womxn leaders who are eager to work on their political ambition, civic engagement, and leadership skills. It teaches womxn their political power and trains them to become the leaders of tomorrow by guiding womxn to position themselves in roles of political candidacy."
        },
        {
            "UID": "j0bwv6dBAAXBlTjbSv3P8UKRXCi1",
            "ClubName": "Delta Sigma Pi",
            "clubEmail": "ucsd.ddd.vpa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8574",
            "PurposeStatement": "Delta Sigma Pi is a professional fraternity organized to foster the study of business in universities; to encourage scholarship, social activity and the association of students for their mutual advancement by research and practice; to promote closer affiliation between the commercial world and students of commerce, and to further a higher standard of commercial ethics and culture and the civic and commercial welfare of the community."
        },
        {
            "UID": "Ez2LX837KOfhlpBZZvlLrFtj0UP2",
            "ClubName": "Students for Global Health",
            "clubEmail": "ucsd.debate@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8530",
            "PurposeStatement": "Our purpose is to promote global health undergraduate student collaboration by striving to advance studentâ€™s knowledge, opportunities, and careers in the field. We uphold an interdisciplinary alliance with diverse majors, staff, faculty, and organizations around the globe. We also promote and educate members of our club and school on illness, health, and healing, through perspectives that transcend national borders and regional interests."
        },
        {
            "UID": "DYXjm2SSCCOxfNKlCUPwcfhEG2j1",
            "ClubName": "Dota2 League at UCSD",
            "clubEmail": "ucsd.dsp@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8553",
            "PurposeStatement": "To organize and support Dota2 at UCSD players in order to form a team to join Dota2 competitions."
        },
        {
            "UID": "F4KHMxYzhTTDFQUdQZ43ZytS4dm1",
            "ClubName": "Green Corps at UC San Diego",
            "clubEmail": "ucsd.gmb@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10686",
            "PurposeStatement": "Green Corps at UC San Diego is a student organization based on environmental and social justice, aiming to repurpose our economic, social, and food-water-energy-waste systems, and re-envisioning our infrastructure to create sustainable solutions to everyday problems and bring solidarity to all people. We support and develop student innovations and sustainability focused engineering and design through integrating agriculture with high technology. Green Corps also serves as a campus-based entity recruiting, and engaging students and promoting holistic sustainability efforts based on action."
        },
        {
            "UID": "rnS8E7YDejUVkFKifD7sElX3NCI2",
            "ClubName": "International Health Collective",
            "clubEmail": "ucsd.interaxon@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8586",
            "PurposeStatement": "The International Health Collective (or IHC) is a UCSD student-run, non-profit, organization that establishes a temporary free clinic in communities that need medical help around the world in addition to creating other projects to advance their health. Our first and primary goal is to assist underprivileged communities with services and free medical care, as well as providing medicine, and health education to improve the prevalent illnesses seen in underdeveloped communities. Our secondary goal at IHC is to provide undergraduate students with the resources necessary to pursue their interests in health care and beyond. Our experiences include first-hand work in a public medical setting by personally assisting medical professionals as well as community focused project development. They also include seminars in which medical professionals of all specialties speak on personal experiences encountered in their field to help attendees choose which specialty to work toward. The International Health Collectiveâ€™s largest project is a clinic that serves the communities surrounding a temporary site in Tijuana, Mexico, which functions during three Saturdays per school quarter. IHC strives to diagnose, supply medication, and provide health education to members of the Tijuana community with free doctor consultation, pharmacy care, and seminars. To provide these efficiently and effectively, IHC utilizes passionate, interdisciplinary, staff members in addition to comprehensive medical record systems, and an efficient clinic layout."
        },
        {
            "UID": "dsC5zwH8GiflEqTT8BejmAjw78j1",
            "ClubName": "Interfraternity Council",
            "clubEmail": "ucsd.isa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10741",
            "PurposeStatement": "The purpose of this body shall be to govern the member fraternities, to promote intellectual, philanthropic, fraternal and social values of the fraternities at the University of California, San Diego, and to maintain cooperation between these fraternities, their respective international headquarters, alumni, and the surrounding community."
        },
        {
            "UID": "zekJdOGEbwNW8MiSkwGRK68fLKO2",
            "ClubName": "Kendo Club at UCSD",
            "clubEmail": "ucsd.iusm@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8520",
            "PurposeStatement": "The Kendo Club at UCSD seeks to promote awareness and appreciation of the Japanese sport of kendo, through community outreach, school involvement, and intercollegiate competition."
        },
        {
            "UID": "kNdj5pCSJMQHhQzNP5IPPNQ2C3B2",
            "ClubName": "Ocean Lovers Club",
            "clubEmail": "ucsd.mustardproject@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8401",
            "PurposeStatement": "There are three goals for this club. The first is to clean up the beaches of San Diego and to help with conservation methods to help remedy the environmental crisis of the oceans. The second is to educate our members about current research and newsworthy events about the ocean, so that in turn, they can help educate the community. The last goal is to create a fun environment where like-minded people can form lasting friendships."
        },
        {
            "UID": "8eaBV4P8foeIIApcxF2yIuDBs0D3",
            "ClubName": "Open Source at UCSD",
            "clubEmail": "ucsd.nasa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8544",
            "PurposeStatement": "Open Source @ UCSD (OS) is an organization that contributes to and creates open source projects. Open source projects are projects where all interested UCSD students can participate in. Participation can vary between fixing known bugs or glitches to improving the project by adding new features. Open Source @ UCSD will be using these projects to help teach students core open source practices, which include Git and basic coding principles, in an inclusive environment. As students learn the basics of creating their own Git repositories, they will be able to create their own open source projects for others to expand upon."
        },
        {
            "UID": "gYgwIfIOlCMQRXaWDhds3tE767x2",
            "ClubName": "Public Health Club at UCSD",
            "clubEmail": "ucsd.ppaso@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8564",
            "PurposeStatement": "The overarching goal of the Public Health Club is to bring students, staff and faculty with an interest in public health, healthy lifestyles, or community health together. The Public Health Club will serve as an umbrella organization wherein members will be able to explore different areas of interest within the public health field. The Public Health Club will also help members by providing opportunities for volunteerism, health promotion, and internships."
        },
        {
            "UID": "GRx7S0e8lfaqJzx7QfCL3hvBB8b2",
            "ClubName": "Asayake Taiko",
            "clubEmail": "ucsd.tango@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8477",
            "PurposeStatement": "To promote the cultural aspect of taiko to any entities interested in the art form. To promote awareness of taiko on the UCSD campus and in the San Diego community through performances and other events. To help promote awareness of taiko at a national level through cooperation with other organizations such as other taiko groups."
        },
        {
            "UID": "LxMbVmO09wRfVqQx30BOo6cp6gU2",
            "ClubName": "Envisionaries",
            "clubEmail": "ucsd.triton.ems@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11946",
            "PurposeStatement": "1. To educate students in Engineering, Visual Arts, design, and manufacturing processes. 2. To support the Envision Maker Studio and other UCSD maker studios working directly with Envision Maker Studio in their goals to provide students with an environment to connect theory with practice. 3. To provide a forum for the discussion and exchange of ideas related to Engineering, Visual Arts, and the development of the maker studios. 4. To provide a platform of integration for non-arts or engineering students to learn and work within maker spaces. This group offers a means of access to Envision Maker spaces to non-majors."
        },
        {
            "UID": "J1rb2TqkazaTEZufHzsAP52a0Y63",
            "ClubName": "Chem-E-Car Project",
            "clubEmail": "ucsd.twts@ceoglobalusa.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8413",
            "PurposeStatement": "Chem-E-Car Project, centered within the NanoEngineering department, aims to provide chemical engineering students with the opportunity to participate in a team-oriented hands-on design and construction of a small chemical powered model car. In addition, it helps increase awareness of the chemical engineering discipline among the general public, industry leaders, educators and other students."
        },
        {
            "UID": "NFfHHSvun2QzbP1WNzWZdfgtWXv2",
            "ClubName": "Women and Minorities in Economics (WAMIE)",
            "clubEmail": "ucsd.tzuching@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9626",
            "PurposeStatement": "A persistent issue in economics has been the low representation of women and minorities in the profession. WAMIE (Women and Minorities in Economics) is dedicated to supporting all UC San Diego undergraduates, with a particular focus on the issues facing women and other underrepresented groups. We strive to create a supportive community where challenges are discussed, and innovative solutions are created. By giving students a closer connection to faculty, alumni, guest speakers, and researchers, and by making students aware of numerous opportunities in the department and in the profession, we hope to better equip students with the tools they need to succeed at UC San Diego and beyond. We welcome all students as part of this organization, and believe that our mission is enriched by considering diverse perspectives."
        },
        {
            "UID": "NLWUNdDNo6UEaNAGJgUBWILSYXi1",
            "ClubName": "",
            "clubEmail": "ucsd.ydsa@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "Tvd40b9pxUNt8vjP29q6BckDyFv1",
            "ClubName": "Acts 2 Fellowship",
            "clubEmail": "ucsd@acts2fellowship.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8443",
            "PurposeStatement": "We are a fellowship that strives to build a Christ centered community on campus. We meet weekly for Bible studies & prayer, and worship on campus on Sundays. Our vision is to share the gospel and help students to spiritually thrive during college."
        },
        {
            "UID": "RYXGhXa3pETderlTPKbkkgXDKw12",
            "ClubName": "Biological Sciences Student Association",
            "clubEmail": "ucsd@bpshi.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8515",
            "PurposeStatement": "With nearly 20 percent of the UCSD undergraduate population declared as biology majors, the Biological Sciences Student Association (BSSA) plays a crucial role in expanding opportunities and enhancing the overall educational and social experiences of these students during their time here. In addition, BSSA assists in preparing students for a wide range of career opportunities."
        },
        {
            "UID": "xb82n8rgEPPVtkNwnVZhityuiL32",
            "ClubName": "Catholic Student Community (CSC)",
            "clubEmail": "ucsd@campkesem.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9614",
            "PurposeStatement": "We are students, alumni, faculty and staff at UCSD, as well as young adults and residents of the surrounding area who celebrate life together as the Catholic Community at UCSD. We feel at home in this community and are free to experience Christ's presence in the Word, in the Eucharist and in each other. Hospitality and welcome are hallmarks of our community. We are passionate about living the Gospel in the context of our Catholic faith."
        },
        {
            "UID": "ruZ5OG8PXzV6mHmuc5TKUCXRJAH2",
            "ClubName": "Phi Delta Epsilon",
            "clubEmail": "ucsd@chapters.ostem.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9652",
            "PurposeStatement": "To prepare our members for a career in medicine and to promote fraternity amongst our members"
        },
        {
            "UID": "wAa5WnOxHLSJPB4HTuVElJZVl9x2",
            "ClubName": "Student Involvement Leadership Consultant (SILC)",
            "clubEmail": "ucsd@saseconnect.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8426",
            "PurposeStatement": "Student Involvement Leadership Consultants, or SILCs, are bright, motivated UCSD students committed to sharing our leadership and involvement experience to serve the UCSD community on whole. Our mission is to provide the University of California, San Diego student organizations with direct services to assist in their operations and to provide the campus-wide student population with consultation regarding student involvement and leadership opportunities."
        },
        {
            "UID": "9zPpL2pNd9OB0dpehTjIvoaDypZ2",
            "ClubName": "A Cappella Choir",
            "clubEmail": "ucsdacappellachoir@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8450",
            "PurposeStatement": "The purpose of A Cappella Choir is to provide a fun and safe space for students to sing and meet other fellow singers. We will be teaching singing techniques to students who are interested in a cappella. Everyone is welcome to join! No prior music background required."
        },
        {
            "UID": "NA6DF4XSH2T6hvdx6aKZbPIuSKE2",
            "ClubName": "Beta Theta Pi",
            "clubEmail": "ucsdaedcpr@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11917",
            "PurposeStatement": "To develop men of principle for a principled life."
        },
        {
            "UID": "C334TijsmJdRSjzmi1t7SZFoazj1",
            "ClubName": "Alpha Gamma Alpha",
            "clubEmail": "ucsdaga@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12070",
            "PurposeStatement": "Alpha Gamma Alpha's Zeta Chapter was established ten years ago at the University of California, San Diego. The sisters of Alpha Gamma Alpha work towards the advancement of Armenian causes, the greater San Diego community and our community here at UCSD. Our mission is to spread and further the Armenian culture and aid in Armenian causes as we guide fellow sisters in academics, life decisions, and social relationships while building life-long ties. For more information on becoming part of Alpha Gamma Alpha's legacy, contact the sisters at ucsdaga@gmail.com or visit us at alphagammaalpha.ucsd.edu"
        },
        {
            "UID": "FByIA9ZLhtP6sjxaeUCcNA03jX13",
            "ClubName": "CALPIRG Students",
            "clubEmail": "ucsdanimeclub@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11870",
            "PurposeStatement": "We believe in the power of students to change our world. Our organizers and students work together to create a greener, healthier, more meaningful future -- on campus, in our community, and across our state and country. We have a two-fold mission to win positive reforms on issues that affect us and our society and to train students to be engaged in civics and democracy."
        },
        {
            "UID": "wCbedRzpoxfh08y1Z86qWIfycyy2",
            "ClubName": "Public Health Brigades",
            "clubEmail": "ucsdapamsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12028",
            "PurposeStatement": "Public Health Brigades at UCSD is a non-profit, student organization that will participate in one international service brigade per academic year. The brigade will be approximately seven to eight days long and will take place during a designated school break. The current country of emphasis for this chapter is Honduras, where the organization provides public health education and infrastructure in collaboration with Sociedad Amigos de los NiÃ±os, a private non-profit organization founded by Sister Maria Rosa Leggol. During the brigade, the purpose of this organization is to improve the overall health and living conditions of families living in various rural Honduran communities through the construction of in-home infrastructure projects. Through these projects, this organizationâ€™s primary mission is to help prevent the spread of contagious diseases and respiratory problems within the communities. In addition, student volunteers will work together to prepare an educational presentation on a given health topic (ie. dental hygiene, etc.) for students in the local community."
        },
        {
            "UID": "02koW1H2e9WMBLXKBAEGr8xBTYq2",
            "ClubName": "Association for Computing Machinery (ACM)",
            "clubEmail": "ucsdapsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8350",
            "PurposeStatement": "To foster a community devoted to computing and help students interested in the field develop their technical skills and professional networks."
        },
        {
            "UID": "gvCqhVDmLWXUnvwiKfhCtjWSCu92",
            "ClubName": "Afghan Student Association",
            "clubEmail": "ucsdasa1@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12063",
            "PurposeStatement": "The purpose of the Afghan Student Association at UCSD shall be to promote awareness of the issues being faced within Afghanistan and to spread the Afghan culture to the larger UCSD community."
        },
        {
            "UID": "uYlnhqVo7sZNzDBEW5zWc5ehvBK2",
            "ClubName": "Motorcycle Club at UCSD",
            "clubEmail": "ucsdbaking@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8476",
            "PurposeStatement": "The Motorcycle Club, also known as Redliners@UCSD, is a social group for motorcycle riders and enthusiasts to discuss motorcycles and safe riding practices as well as organize group bonding events / rides."
        },
        {
            "UID": "VqNU1dIo5tZXRknlWZFgVv1j5372",
            "ClubName": "Bioengineering Graduate Society",
            "clubEmail": "ucsdbeta@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8397",
            "PurposeStatement": "The Bioengineering Graduate Society (BEGS) aims to be an interface for bioengineering graduate students at UC San Diego, their department, and the local community. Since its creation in 1994, the BEGS mission is to foster professional, educational, and social development opportunities through relationships with industry, alumni, and students. BEGS is a graduate student-run organization with the aid of the Bioengineering Department."
        },
        {
            "UID": "A5Z1IOBgUsdioqGDh1NkqRh90Ev1",
            "ClubName": "Books For Prisoners",
            "clubEmail": "ucsdblackstudentunion@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10677",
            "PurposeStatement": "Books For Prisoners sends books and resources to prisoners in California."
        },
        {
            "UID": "XAkRBn2i18PFEKePEODucBEwant1",
            "ClubName": "Brazilian Student Association",
            "clubEmail": "ucsdboardgame@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8389",
            "PurposeStatement": "Uniting Brazilian students all over UCSD"
        },
        {
            "UID": "hfFTz3m5aLTXQx1B2sZNZWvCEsK2",
            "ClubName": "Cal-Animage Beta",
            "clubEmail": "ucsdbodyrock@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8393",
            "PurposeStatement": "To present Japanese animation subtitled in English to Members of the club. We intend to engender a social atmosphere in which members can enjoy anime and learn about Japanese culture."
        },
        {
            "UID": "LB5qcZWMiNhHM9zHx5HPMzy7LVK2",
            "ClubName": "California Society of Health-System Pharmacists- at UCSD Student Chapter",
            "clubEmail": "ucsdbritishsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8505",
            "PurposeStatement": "The mission of the UCSD, Skaggs School of Pharmacy and Pharmaceutical Sciences, Student Society of Health-System Pharmacists is to make students aware of pharmacy practice in health systems and the potential of this setting for expanding the base of pharmacy practice, provide information to students about career directions in and credentials needed for pharmacy practice in health systems."
        },
        {
            "UID": "sByryVYRDzTYvYvlCdI15iHJcwA2",
            "ClubName": "Bio-Optimization Society at UCSD",
            "clubEmail": "ucsdbssa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10731",
            "PurposeStatement": "The Bio-Optimization Society at UCSD (BIOS) aims to provide an open forum for education about and discussion of bio-optimization strategies, research, and current events with students and faculty through academic opportunities, talks and other activities. We define bio-optimization as the use of targeted supplementation, nutrition, exercise, biorhythm-tracking technologies, personalized genomics, and other strategies to improve one's cognition and overall health. The Bio-Optimization Society at UCSD will empower its members to improve their quality of life through applied knowledge of various strategies for physiological self-improvement."
        },
        {
            "UID": "FSPjOTcR9GVWYmfUFukTbiTP9Dh2",
            "ClubName": "Chinese Classic Dance Team",
            "clubEmail": "ucsdccm@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10672",
            "PurposeStatement": "As a dance team, we strive to promote dancing on stage as an enjoyable form of art. We bring together people of different cultures, backgrounds, and disciplines, and connect through varying styles of dance, music, and choreography. Chinese Classic Dance Team, as a registered organization at UC San Diego, is committed to promoting a safe and vibrant campus community. No individual or group affiliated with Chinese Classic Dance Team will take any action or create a situation which recklessly or intentionally endangers mental or physical health or involves the forced consumption of liquor or drugs for the purpose of initiation into or affiliation with this organization. The leaders and members of the Chinese Classic Dance Team also agree to abide by all aspects of the UC San Diego Student Conduct Code, University policies and Federal, California State and Local laws."
        },
        {
            "UID": "ctTaOstp1rbcFaHsGKdQKqFTgqp2",
            "ClubName": "College Republicans at UCSD",
            "clubEmail": "ucsdcdc@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9623",
            "PurposeStatement": "The College Republicans at UCSD strive to enhance principles of the Republican Party in the UCSD community. We encourage the advancement of the Republican Party through aiding elections at all levels of government. Further we promote a forum for political discussion open to all viewpoints. We also seek to serve the UCSD community through various volunteer efforts. The College Republicans at UCSD aims to build leadership abilities in students to serve the community and party."
        },
        {
            "UID": "f24qdO2dOdfxo7Ltgk1P0N4NxpY2",
            "ClubName": "Chinese Union",
            "clubEmail": "ucsdcdc@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10688",
            "PurposeStatement": "Promoting Chinese culture and building a stronger bond within the UCSD Chinese American community."
        },
        {
            "UID": "a7Lovu3e8YRIQ14rtUC28U3UEjz2",
            "ClubName": "Christian Pharmacists Fellowship International (CPFI)",
            "clubEmail": "ucsdces@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8536",
            "PurposeStatement": "1. Fellowship Since Christian students have a common purpose, it follows that they should meet together for encouragement, edification, uplifting, and sharing. The scientific training involved in pharmacy education may stem from a humanist/agnostic philosophy. Therefore, regular meetings of Christians can help students maintain perspective on the â€œbig pictureâ€ God has planned for mankind as He revealed in the Bible. 2. Bible Study/Discussion/Prayer The need to examine, study, and struggle with social/medical issues has never been greater. Faith rooted in Scripture builds firm convictions about God, man, lifestyle, human relationships, purpose of science, and the nature of a profession. Christian principles taught through the Bible equip pharmacy students to become compassionate pharmacists that go above and beyond to care for the entire patient by meeting their physical, emotional, and spiritual needs. Times of discussion encourage growth of the chapter through shared experiences and individual insights. Prayer helps the chapter to remain dependent on God. 3. Ministry Projects A young attorney once asked Jesus a test question in an attempt to entrap him. â€œWhat shall I do to inherit eternal life?â€ Jesus responded with a question of his own. â€œYou know the Law. How do you read it? Sum it up in one sentence.â€ The young attorney quickly answered, â€œYou shall love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind; and your neighbor as yourself.â€ (Luke 10:25-29 and Mark 10:17) Jesus complimented the attorney on his succinct answer and told him to do just as he had answered. One of the characteristics of our society today is the rapid decline of a sense of community in tandem with an epidemic of autonomy. One does not have to travel far to do mission work; many opportunities are available in every community. Wherever God has placed you is your mission field and even closer to â€œhomeâ€ are those who sit next to you in class every day. Remember that we are told to start at home (Jerusalem), then work with interfacing cultures (Judea and Samaria), and then distant cultures (ends of the earth). 4. Witness â€œBut you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.â€ Acts 1:8 Every one of us is a witness for Jesus Christ. The question is, â€œAre we effective?â€ Student chapters should consider evangelism as individuals and as a chapter. The chapter should be a source of strength and encouragement for personal outreach. There is another facet to our Christian witness: The individual who sees himself/herself called by God and who knows Jesus Christ as the Lord of all creation is vitally concerned about this world and its values and priorities. Our witness involves not only a verbal declaration of the saving power of Jesus Christ, but a promotion of Christian alternatives to secularism and other â€œismsâ€ which are dehumanizing and degrading to man. The Christian view of life has more than a passing relevance to a discipline concerned with life, death, and the person. A chapter genuinely concerned with its witness must seek to let its light radiate forth in the midst of the healthcare community, piercing every facet. 5. Worship â€œShout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs. Know that the LORD is God. It is he who made us, and we are his; we are his people, the sheep of his pasture. Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. For the LORD is good and his love endures forever; his faithfulness continues through all generations.â€ Psalm 100 Though worship may not be the primary goal of our student chapter, it will be difficult to meet regularly as Christians and not spend some time worshiping our Heavenly Father. Worship will often unify a student chapter as no other activity can, and it is greatly encouraged where ever Christians gather."
        },
        {
            "UID": "lfl6UFnELwYDGRPyrYcHuDLlXnw1",
            "ClubName": "China Entrepreneur Network",
            "clubEmail": "ucsdchess@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10785",
            "PurposeStatement": "CEN-UCSD aims to develop leadership, facilitate innovation and encourage entrepreneurship for a better future, which shall be culturally viable, economically prosperous, and environmentally sustainable. Particularly, the CEN-UCSD devotes to explore effective strategies and opportunities of social businesses and provide UCSD students a platform to exercise social entrepreneurship and leadership."
        },
        {
            "UID": "BoCan26jrST8145CBvHZ4hye3f52",
            "ClubName": "Cognitive Science Student Association",
            "clubEmail": "ucsdchristians@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10654",
            "PurposeStatement": "Aid Cognitive Science student body through academic, professional, and social means; Engage graduate population and faculty of the Cognitive Science Department."
        },
        {
            "UID": "6Wu73gI5yOTQqCcqz8MAvlWtCRs1",
            "ClubName": "Comicbook Club at UCSD",
            "clubEmail": "ucsdcollegedemocrats@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8489",
            "PurposeStatement": "The purpose of the club is to foster community between comic: creators, artists, writers, readers, and enthusiasts"
        },
        {
            "UID": "hotbraR4CrgoE0WYH6RGMvPmzWo2",
            "ClubName": "Cultural Iranian STudent Association (CISTA) (formerly ISTA)",
            "clubEmail": "ucsdcornerstone@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10728",
            "PurposeStatement": "to sponsor Persian social and cultural activities and events, to promote an understanding of Iranian culture, to help foster friendship among different cultural groups, and to provide a source of union and support for the Iranian community at UC San Diego."
        },
        {
            "UID": "BfZ7RZdPkpbfIC75EE8ut02NNIN2",
            "ClubName": "Sigma Kappa Sorority",
            "clubEmail": "ucsdcubing@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9601",
            "PurposeStatement": "The purpose of Sigma Kappa Sorority is to unite its members in a bond of sincere friendship for the development of character and the promotion of social, philanthropic, and intellectual culture."
        },
        {
            "UID": "WRoMAaynTKNMQeReH3TncK9yW0Y2",
            "ClubName": "LIFE Fellowship",
            "clubEmail": "ucsddcthelab@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8359",
            "PurposeStatement": "LIFE Fellowship is a Christian group (associated with Chinese Evangelical Church - CEC) that fosters a unified community of college students who love Jesus Christ. Through small groups, prayer, worship, and service activities, we seek to understand God's love for us, how to live a life pleasing to God, and spread the gospel to other people."
        },
        {
            "UID": "kugoZRoVfrSwPNTntOIbCeOIZLd2",
            "ClubName": "ECE Undergraduate Student Council",
            "clubEmail": "ucsddesignbuildfly@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8533",
            "PurposeStatement": "The ECE Undergraduate Student Council (USC) is the voice of Electrical and Computer Engineering (ECE) undergraduate students at UCSD. Through networking, programming, leadership, & relevant education, the council strives to effect change within the department & campus at large, building a stronger & longer-lasting community for current & future engineers. The USC is committed to carrying out ECEâ€™s mission statement of educating tomorrowâ€™s technology leaders."
        },
        {
            "UID": "pcYdGggK77XP5TAefrE3s14zKSq1",
            "ClubName": "Engineering World Health",
            "clubEmail": "ucsddulynoted@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8487",
            "PurposeStatement": "Engineering World Health focuses on improving the state of global healthcare by spreading awareness, and developing members' interdisciplinary engineering skills required to engineer low-resource medical devices. Year-long, innovative projects addressing specific medical needs of underserved communities will be developed for the Engineering World Health design competition. We accept students from all majors and walks of life who share our passion for improving global healthcare."
        },
        {
            "UID": "eKDYwzuOhuPxx43Ywss2gzNYXFu2",
            "ClubName": "First Generation Student Alliance",
            "clubEmail": "ucsdevh@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10663",
            "PurposeStatement": "The First Generation Student Alliance (FGSA) acknowledges the unique facets of the first-generation identity and seek to strengthen its presence on campus. FGSA will support first generation students at UCSD by fostering a sense of first-gen solidarity through community bonding activities and providing members with access to campus opportunities and resources."
        },
        {
            "UID": "syAUSNaUepaHFFTJkSUUcKfqMgx2",
            "ClubName": "Frequency",
            "clubEmail": "ucsdfgsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8527",
            "PurposeStatement": "Frequency is the only all-male a cappella group at the University of California, San Diego (UCSD). Founded in 2008 and completely student-run, Frequency has been committed to promote a cappella music, provide entertainment through public and private performances, foster long-term relationships with the a cappella community on and off-campus, and to provide its members with leadership opportunities."
        },
        {
            "UID": "nNC3RBxlFShy9umoAIbECBzREtx2",
            "ClubName": "Planned Parenthood Generation Action at UCSD",
            "clubEmail": "ucsdfijipresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11931",
            "PurposeStatement": "PLANNED PARENTHOOD GENERATION ACTION: UCSD exists to educate the community about reproductive health and rights, to translate increased awareness into pro-choice activism on campus and pro-LGBTQ activism, and to serve as a coalition to state, national, and international in both reproductive and LGBTQ rights efforts. PPGA believes in the fundamental right of every individual to manage their own fertility. PPGA supports full access to comprehensive reproductive and complementary health care services in settings that preserve and protect the essential privacy and rights of each individual; advocates public policies that guarantee these rights and ensure access to such services, and supports access to medically accurate educational programs that enhance understanding of human sexuality."
        },
        {
            "UID": "sBOmKct79vQqsRNauYYaj0WVNhA2",
            "ClubName": "Global Development Council",
            "clubEmail": "ucsdfrequency@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8514",
            "PurposeStatement": "The mission of the Global Development Council is to help students aware of the importance of Global Development to self-development, and thus foster the comprehensive development of students. We provide academic workshops about Global and local issue and help students understand the society as a whole. Also, we operate our official accounts on public platforms, writing and posting the essays which advocate the global development. We also hold networking event with alumni or the successful people, in order to help students reach self-development while being aware of the global development. Global Development Council also focuses on the connections with other organizations or companies. We hold workshops or write journals or have GBM together with other organizations in order to fulfill our global mission. Global Development Council is a non-profit organization."
        },
        {
            "UID": "PQeH4gwCnkgvc9HJArBHXSuBZkk2",
            "ClubName": "Harvest Christian Fellowship at UCSD",
            "clubEmail": "ucsdgradpals@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10681",
            "PurposeStatement": "A Christian student organization comprised of Chinese and English speakers associated with Harvest Evangelical Church of San Diego (HECSD), focused on Bible study and outreach, and whose purpose is to share the gospel and grow in faith. Our purpose is for the Gospel to be made known on the UCSD campus and to welcome all people to learn more and have a community that cares for and supports one another."
        },
        {
            "UID": "unGEdqiRl1hlop8RQQJzyUcukkJ2",
            "ClubName": "Hermanas Unidas de UCSD",
            "clubEmail": "ucsdhawaiiclub@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8541",
            "PurposeStatement": "Hermanas Unidas reaches out to the Chicanx/Latinx community and provides resources as well as a network. Our three pillars are: Academics-Through the emphasis of academics not only do we empower our minds but our future as well. Community Service- In the struggle to empower ourselves we remember our communities and empower them as well. Collegial Networking- In stressing Hermandad, a family network is created to foster an environment of mutual respect and unity, while supporting individual interests and talents. The group provides a place where women can come together and be themselves. We accept any and all ideologies. We are a network attempting to provide a healthy transition to and from the university. Hermanas Unidas raises awareness and educates the campus and the community at large about Chicanx/Latinx issues."
        },
        {
            "UID": "woGP1Cu5gyWD0wwLhzdqAx6H38A2",
            "ClubName": "House of Prayer at UCSD",
            "clubEmail": "ucsdhearthstoners@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12035",
            "PurposeStatement": "Provide Christians on campus with various activities of worship, devotion and prayer."
        },
        {
            "UID": "G0Q5ce8D0KZut1AhCCd6fF3dqn93",
            "ClubName": "Imperial Valley Tritons",
            "clubEmail": "ucsdhinduyuva@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10718",
            "PurposeStatement": "The goal of the organization is to construct a relationship between the university and the Imperial County by outreaching students to encourage ongoing education, offer resources and useful workshops for students that show interest in higher education, build a stronger bond between UCSD students that come from the Imperial valley by providing mentorship and retention within ourselves, and to create a wide network within our culture to promote support academically, professionally, and mentally in our college journey. Members will experience a sense of belonging and support within the organization by being able to relate to students with similar backgrounds and gain knowledge from their experiences as well as from the programs offered."
        },
        {
            "UID": "7mC5c8LHxROj0fQ7N3wS6Qynffs1",
            "ClubName": "Initiative for Music Education and Mentorship (IMEM)",
            "clubEmail": "ucsdhkcs@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8447",
            "PurposeStatement": "IMEM reaches out to young, aspiring musicians to promote musicianship through tutoring for music performance and theory. We hope to foster musical appreciation in those who want exposure and do not have ready access to music resources, as well as enrich music programs in underserved populations. IMEM volunteers will work with these young musicians and provide mentorship to these students. Ultimately, we wish to strengthen the musical community and inspire more students to develop a stronger passion for music."
        },
        {
            "UID": "DyE2HpeixRZNGHUnZJsOgkras762",
            "ClubName": "Inter-Sustainability Council",
            "clubEmail": "ucsdicf@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8352",
            "PurposeStatement": "To unite the various organizations/departments of UC San Diego that promote sustainable development into a cohesive network. The Inter-Sustainability Council functions as an intermediary to improve coordination and outreach between these groups and the UCSD community."
        },
        {
            "UID": "19n8OmB1tOUjnvuCrOF5fGXChwr2",
            "ClubName": "Kappa Zeta Phi",
            "clubEmail": "ucsditsonus@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8421",
            "PurposeStatement": "To provide an opportunity for long lasting friendship and sisterhood to develop the individual in the areas of wholesome attitudes and ideals."
        },
        {
            "UID": "raZS8ud1e3eOFiHhWB1DKn0wKTH2",
            "ClubName": "International Graduate Student Ministry (IGSM) at UCSD",
            "clubEmail": "ucsdivoperations@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10690",
            "PurposeStatement": "The purpose of this organization is to provide all graduate students, but in particular international graduate students, the opportunity to learn about Christianity through studying the Bible and participating in Christian fellowship."
        },
        {
            "UID": "Ejj0gTZrBkhb9XCnFFG8DbuTA6j1",
            "ClubName": "Kidz Next Door",
            "clubEmail": "ucsdjsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8475",
            "PurposeStatement": "Mission Statement: Established in 2014, Kidz Next Door is an exhibition hip-hop dance group based in UCSD. Created with the purpose to inspire others in the dance community, the group spreads their passion for dance through performances and workshops. Although the group's focus is built around the style of hip hop, many diverse styles and backgrounds are represented through the individual dancers such jazz, contemporary, salsa, etc. The Kidz Next Door Leadership pushes the group members to grow not only as dancers but as a family, encouraging them to respect one another as well as the community around them."
        },
        {
            "UID": "ZJc3xf8kAvhtFxWCGz9DXDVNLQr2",
            "ClubName": "Kojobs at UCSD",
            "clubEmail": "ucsdkapi@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8588",
            "PurposeStatement": "Kojobs strives to act as an intermediary between students and companies, providing social networking events for students and professionals to assist students to become better prepared for their post-graduation lives. Kojobs also provides service activities within the community, and other activities held in relation to the organization will also be directed towards this purpose."
        },
        {
            "UID": "eJ29ZlSfO8TLUvJVEZCKrtCU9Fr1",
            "ClubName": "Korean American Campus Mission",
            "clubEmail": "ucsdkappasigmapresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8511",
            "PurposeStatement": "To obey the Great Commission by discipling and mobilizing Collegians."
        },
        {
            "UID": "ZvdbLnAMArQd60yIJpFEbynJwka2",
            "ClubName": "Lambda Theta Phi Latin Fraternity Inc.",
            "clubEmail": "ucsdkasa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10730",
            "PurposeStatement": "We aim to create a bridge between diversity and scholarship by fostering a space for men to share their diverse ideas and opinions while creating a strong brotherhood and serving our communities. We will work towards cultivating campus leaders and embrace all of the differences on campus. The Brothers of Lambda Theta Phi Latin Fraternity Inc. will invite and accept men from different ethnic backgrounds in order to improve our political consciousness, unify different ethnic groups, challenge our views, and grow as individuals."
        },
        {
            "UID": "KJjRcKv67TglIcoa9IxcjpfD5Em1",
            "ClubName": "Lab, The",
            "clubEmail": "ucsdkommonsociety@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8346",
            "PurposeStatement": "The purpose of The Lab is to unite the dance community at UCSD through fellowship. We seek to give the dance community the space and means to communicate and collaborate with other dancers, including those in the greater San Diego dance community. Anyone committed to fostering the camaraderie of our campus community through a mutual love of dance is welcome. Our goal is to create a safe space for dancers, regardless of team affiliation, to practice their craft and share it with others. Achievement of this goal will be supplemented by official community hosted events, including but not limited to: performance opportunities, competition opportunities, bonding and publicity events, etc."
        },
        {
            "UID": "L8Ox6gxuItb21hv1xbjkMU0bE5V2",
            "ClubName": "Lebanese Social Club",
            "clubEmail": "ucsdkyrie@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11977",
            "PurposeStatement": "LSC is a club for those who are Lebanese and non-Lebanese interested in uniting and promoting the culture. We are a non-political, non-religious campus organization interested in expanding the appreciation of Lebanon and its culture through networking and social events."
        },
        {
            "UID": "fHKADpjQAnZjp6TFs8ST40VCq1h2",
            "ClubName": "Lumnus Consulting Junior Enterprise",
            "clubEmail": "ucsdlambdas.president75@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8360",
            "PurposeStatement": "Lumnus Consulting is a Junior Enterprise that was established at UC San Diego in 2016. Lumnus is run entirely by students and provides business and marketing consulting services for startups and small businesses."
        },
        {
            "UID": "VDTEgFDFq6Tos0ygXAJP5tcEOwU2",
            "ClubName": "MakeNew",
            "clubEmail": "ucsdlsc@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10650",
            "PurposeStatement": "The purpose of this organization is to provide a safe space for students who are seeking to learn more about Christianity and for those who want to grow in their faith. We gather weekly to study the Bible and enjoy a time of fellowship with one another."
        },
        {
            "UID": "vMOgzAk9nlNUTU5e3zVqgc39iz53",
            "ClubName": "Lighthouse College Life",
            "clubEmail": "ucsdlxa.alpha@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10774",
            "PurposeStatement": "To provide a church-sponsored Bible teaching Christian organization for students on-campus."
        },
        {
            "UID": "VyQwK6jEMKW1tn28hwzfiZU1Fe13",
            "ClubName": "Navigators",
            "clubEmail": "ucsdmasa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8381",
            "PurposeStatement": "To advance the Gospel of Jesus and His Kingdom into the nations through spiritual generations of laborers living and discipling among the lost."
        },
        {
            "UID": "qWMT065PEDX0dC2TVALpw3lUDXs2",
            "ClubName": "Muir Musical",
            "clubEmail": "ucsdmetanoia@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10852",
            "PurposeStatement": "The Muir Musical is a UCSD student organization that produces one completely student-run musical theatre production annually. Students from all six UCSD colleges are invited to participate in a full-scale Broadway production that marks the single musical theatre opportunity for UCSD students all year long."
        },
        {
            "UID": "f5cK2qHWpmWPh5nb5HLwtX0bC952",
            "ClubName": "New Life Student Ministry",
            "clubEmail": "ucsdmiac@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12027",
            "PurposeStatement": "Student Campus Bible Study Group"
        },
        {
            "UID": "2TTdKB1F7kNMzbnpnCsz6jh2sdw2",
            "ClubName": "Movimiento Estudiantil Chicanola de Aztlan (MECHA)",
            "clubEmail": "ucsdmls@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9602",
            "PurposeStatement": "Movimiento Estudiantil Chicanx de AztlÃ¡n (M.E.Ch.A.) is a student organization that promotes higher education, cultura, and hxstoria. The goal of M.E.Ch.A. is create a consciousness, one in which to incorporate the political, the cultural, and the educational aspects of our community to those of the University. M.E.Ch.A. is a political voice for UCSD. It takes part in a series of political events through out the year, such as Raza Awareness Week. M.E.Ch.A. also honors many cultural holidays such as El dia de los Muertos and Las Posadas that occur in December; creating an atmosphere for social interaction. M.E.Ch.A. also strives in bridging the gap between High School and College by working directly with the youth of our community. This is accomplished through our annual Raza Youth Empowerment Conference, weekly outreach events, campus tours, overnight programs, and one on one mentoring. In realizing the importance of giving back to the community, we recognize that we are at UCSD to be successful students. We strive to build a community that is strong and united. The year is finalized with our Raza Graduation. Most importantly, throughout the year we build a strong network of people who are currently aware students, activists, and friends."
        },
        {
            "UID": "GlWHcq0eGaZswtMqET8R5KveEUq2",
            "ClubName": "Nu Alpha Kappa, Inc.",
            "clubEmail": "ucsdmsa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8469",
            "PurposeStatement": "We, NU ALPHA KAPPA, seek to unite and involve all students in a more harmonious and brotherly atmosphere through academic, social, and cultural means. There is a need to interface the various backgrounds that constitute the student body of our fraternal university chapter, in order to improve relations amongst all students and the community."
        },
        {
            "UID": "MgEebHUfUeR97xmRqypyvD0jxiO2",
            "ClubName": "Nikkei Student Union",
            "clubEmail": "ucsdmusicandmemory@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8345",
            "PurposeStatement": "To allow Japanese American, Japanese and any other interested student to interact in a socially conductive environment. To promote awareness of Japanese American and Japanese culture, history and issues on the UCSD campus. To provide a link between the Japanese American community on the UCSD campus and the Japanese American community in the areas surrounding UCSD."
        },
        {
            "UID": "dNTmvXhIEVNx2fETBNqhDiR74BH3",
            "ClubName": "osu! at UCSD",
            "clubEmail": "ucsdndaa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8468",
            "PurposeStatement": "This is a local community for osu! players in and around UC San Diego. This club was founded to create connections with other osu! players and to promote our own niche culture, encourages socializing with fellow players, sharing accomplishments, and raising the fun and competitive nature of osu!. osu! is a music rhythm game. It's a difficult, fun, and addicting game that can be played with anything from mouse, tablet, to touchscreen and, if you're crazy enough, trackpad. Test your hand-eye coordination as you play osu!'s thousands of beatmaps."
        },
        {
            "UID": "kDNbmlR8bbQRTFJFtWnrZAIfgQS2",
            "ClubName": "Pagasa",
            "clubEmail": "ucsdnsu@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8453",
            "PurposeStatement": "Our mission is to create a loving, supportive community through Christ, bringing collegiate students together with the Catholic Church. With God as a catalyst, Pagasa strives to empower students to learn and experience growth within themselves, further enhancing their spirituality. As a community, we are united by our devotion to the Holy Spirit, aiming to offer a space for prayer, support, and self-discovery. â€œPagasa,â€ meaning hope in Filipino, will stand as a driving force in enriching Catholic faith, upholding service, and finding truth within each other."
        },
        {
            "UID": "LMWzRdSXHsXNPGpqh0I9bWwEsqG2",
            "ClubName": "Pi Kappa Alpha",
            "clubEmail": "ucsdpbl@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8518",
            "PurposeStatement": "Our purpose is to create a positive environment that focuses on the improvement of our pillars such as Scholars, Leaders, Athletes, and Gentlemen."
        },
        {
            "UID": "AM7tDlQ2MUVGPhMXzSaudKsCpOf2",
            "ClubName": "Raza Graduate Student Association",
            "clubEmail": "ucsdphb@globalbrigades.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10787",
            "PurposeStatement": "The purposes of the Raza Graduate Student Association (RGSA) are to: 1) increase unity among graduate students of color, particularly Latinx/Chicanax students, at UCSD 2) promote graduate education to Latinx/Chicanax undergraduate student populations, and recruit them for graduate school at UCSD 3) provide a community, resources, and a social network for graduate students of color at UCSD 4) increase awareness and educate on different Latinx populations and history (RGSA is a not-for-profit organization.)"
        },
        {
            "UID": "78ivJ8LgK9QVjyLCNSfoOcH8Fks2",
            "ClubName": "Pre-Veterinary Student Association at UCSD",
            "clubEmail": "ucsdpikepresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10684",
            "PurposeStatement": "To inform and guide students who are interested in pursuing careers in veterinary medicine by introducing various resources such as volunteering opportunities and contacts with experienced professionals. In addition, the Pre-Veterinary Student Association at UCSD strives to create a positive community centered around helping one another reach their own individual goals within the field of veterinary medicine. A network of resources, support, and companionship will be fostered in order to motivate and encourage students to follow their chosen career paths. The club will help members refine their skills, improve their resumes, and expand their knowledge in preparation for applying to veterinary school."
        },
        {
            "UID": "b8DyhzprfAP1IIpUxcAur0U5fHm2",
            "ClubName": "Quality of Life Plus Club (QL+)",
            "clubEmail": "ucsdprevet@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10725",
            "PurposeStatement": "The purpose of Quality of Life Plus Student Association (QL+) at UCSD (which will hereafter be referred to as QL+) is to foster and generate innovations and adaptive equipment through hands-on learning, to aid and improve the quality of life of those who are injured and who are still serving or have served in our United States military forces, or others within the local community. The club will provide local community members with assistive and adaptive equipment and other innovative devices tailored to an individualâ€™s needs to benefit their ability to complete tasks that may be difficult to perform on their own. Organization members will get hands-on project experience in the following areas, including but not limited to: prostheses, assistive technology, and medical devices. Organization members will have the opportunity to work together and engineer solutions to address an issue that a particular community member may be having. QL+ will foster innovation and continue the philanthropic mission of the QL+ Program."
        },
        {
            "UID": "ZDgckoxGz5QT2hA52oJ2z1HQKlL2",
            "ClubName": "re:make at UCSD",
            "clubEmail": "ucsdpublichealthclub@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10838",
            "PurposeStatement": "Re:make is an undergraduate design organization that serves to rethink physical and digital design for students. Through organizing design projects, re:make provides opportunities and experiences for UCSD students to apply the theoretical design knowledge learned in classes, while at the same time gaining industry-relevant skills like parametric surface modelling, rendering, design thinking, storyboarding, and wireframing."
        },
        {
            "UID": "pY6wanrU7wUwxI89YpDftSSsJoq2",
            "ClubName": "Red Cross at UCSD",
            "clubEmail": "ucsdpushpanjali@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8395",
            "PurposeStatement": "To provide Red Cross related activities and service opportunities to the UCSD student body."
        },
        {
            "UID": "o9s84tvEeOVBOuEcxzH0BwQPugp1",
            "ClubName": "Rosa Parks Tutoring Program",
            "clubEmail": "ucsdqb@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12074",
            "PurposeStatement": "The purpose of the Rosa Parks Tutoring Program is to give members of the UCSD community the opportunity to offer free tutoring services to students at Rosa Parks Elementary School who are either recommended by teachers to be tutored or who independently seek out tutoring. The organization seeks to improve relations between UCSD and the local community. UCSD associates who are members of this organization are afforded the opportunity to share their reading, writing and math skills with young learners, reap the enjoyment of helping students in a formative stage of their education, and experience the satisfaction of witnessing progress in the studentsâ€™ performances."
        },
        {
            "UID": "NyeBb6JM1AgpupuW3V2IXTdLqcE2",
            "ClubName": "Computer Science and Engineering Society",
            "clubEmail": "ucsdrelay4life@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10747",
            "PurposeStatement": "Sponsored by top tech companies and working closely with the CSE department, the Computer Science and Engineering Society provides opportunities to students beyond what they get in the classroom. These include company sponsored events to help you get internships and jobs, workshops to improve your technical skills, social events to build your network, and events that allow you to interact with CSE department faculty and staff! We are open to all students with an interest in computing, not just CSE majors!"
        },
        {
            "UID": "vGW0GxU5MYdW8ODR89P3JAGiw1Z2",
            "ClubName": "Sigma Alpha Zeta",
            "clubEmail": "ucsdrotaract@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11944",
            "PurposeStatement": "The purpose of Sigma Alpha Zeta Sorority, Incorporated shall be to act as an elite multicultural group who promotes the upward mobility of women and enhances the community by means of education and voluntary services."
        },
        {
            "UID": "INPK9kB3t6ZwifGvS0TE4V84U922",
            "ClubName": "Wushu club @ UCSD",
            "clubEmail": "ucsdscholars@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8365",
            "PurposeStatement": "The primary purpose of the Wushu Club is to provide any individual with the opportunity to be introduced to and learn wushu in a friendly and safe environment. The secondary purpose of the club is to prepare members for intercollegiate competitions such as the Annual Collegiate Wushu Tournament. The Wushu Club at UCSD is a non-profit student organization."
        },
        {
            "UID": "AkHqPZhcYnRNWmi4MwQs0Zg3ffp1",
            "ClubName": "Acamazing",
            "clubEmail": "ucsdsinging@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8465",
            "PurposeStatement": "Acamazing is a co-ed a cappella group which seeks to provide a fun and enriching environment for singers and aspiring singers to make music without the use of instruments. We aim to nurture the musical talent of UCSD students and to entertain ourselves, the UCSD community, and the general public. Additionally, we hope that all members gain a better understanding of music and enrich their own musicality while building lasting friendships with their fellow members."
        },
        {
            "UID": "0PYuVcSP63dNt2ndt6uOaXyO9Lp2",
            "ClubName": "Student Foundation",
            "clubEmail": "ucsdsitaare@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8563",
            "PurposeStatement": "To promote, facilitate and perpetuate the philanthropic spirit among the UCSD student community."
        },
        {
            "UID": "fB4BZrL3YPMk8b0Ka4hHgN1Yviq2",
            "ClubName": "Students for Justice in Palestine",
            "clubEmail": "ucsdspot@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9630",
            "PurposeStatement": "Part and parcel of the larger student movement sweeping university campuses across the United States, Students for Justice in Palestine (SJP) is a diverse group of students, faculty, staff, and community members centered at the University of California, San Diego and organized in accordance with democratic principles to promote justice, human rights, and the right of self-determination for the Palestinian people."
        },
        {
            "UID": "NXG27GqqIKb5FBePTXnlkjqUjh92",
            "ClubName": "Transfer and Non-Traditional Students for Health",
            "clubEmail": "ucsdtasa@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8578",
            "PurposeStatement": "The purpose of this organization is to bring together a community of unique, transfer/non-traditional pre-health professionals on campus. We aim to provide educational resources, leadership opportunities, and volunteer opportunities to students who have a limited amount of time to prepare for applying to pre-health schools. These students include, but are not limited to: first generation college students, students considering a health profession, students pursuing a major in departments other than biology and chemistry, students belonging to demographics that are underserved in health professions, students who decided to be pre-health in their later years, and students returning to school after several years in the workforce and considering a health profession."
        },
        {
            "UID": "MRZAgFyDO6TpwPZbPQocaH3EWyP2",
            "ClubName": "Triton Consulting Group",
            "clubEmail": "ucsdteamhbv@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9596",
            "PurposeStatement": "To create business leaders in the UCSD community by engaging students in the consulting sector, by providing them with real-life applications and professional development."
        },
        {
            "UID": "1JzdE2YcF2hLxNkFVbiSLjL6QH92",
            "ClubName": "Treble Singers at UCSD, The",
            "clubEmail": "ucsdtgsa.website@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9648",
            "PurposeStatement": "The purpose of this ensemble is to find joy through singing together. We sing for ourselves and perform to share our love of music with others. We will explore a wide variety of musical styles and genres, including jazz, classical, and popular music."
        },
        {
            "UID": "ZyAnlTvxu2cVkuDbRIKaxHYVVsh2",
            "ClubName": "Theta Tau",
            "clubEmail": "ucsdtkd3@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8418",
            "PurposeStatement": "The purpose of Theta Tau is to build a strong fraternal bond and maintain high standards of professionalism among fellow members. We are a pre-professional engineering organization established for the development of the brothers of the fraternity.]Theta Tau aims to provide its members the social and professional development necessary to succeed during and after their college years."
        },
        {
            "UID": "hOv6XypKXkR3CwLfHjHc5brbuKp2",
            "ClubName": "Triton Robotics",
            "clubEmail": "ucsdtreblesingers@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11929",
            "PurposeStatement": "Attend RoboMaster, an international collegiate robotic competition organized by DJI(Da-Jiang Innovations), in Shenzhen, China."
        },
        {
            "UID": "7YZ581yrKARJoOEL7iMVjqsD8yZ2",
            "ClubName": "Chinese Engineering Society",
            "clubEmail": "ucsdtriplec@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12032",
            "PurposeStatement": "The main purpose of Chinese Engineering Society (CES) at UCSD is to promote academic excellence and entrepreneurship among researchers and students in Chinese ethnicity. We aim to help maintain the diverse, inspirational environment in UCSD by providing opportunities in career network, professional development and academic communications, and furthermore encouraging the society members to contribute to the greater community through innovative ideas and projects."
        },
        {
            "UID": "mXjoFf4loIaJMViTH7IWNa9khBq2",
            "ClubName": "Triton Unmanned Aerial Systems at UCSD",
            "clubEmail": "ucsdtritoncs@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10699",
            "PurposeStatement": "We are a student-run team that designs, builds, tests, and flies our own UAV to compete each year in the Student UAS Competition hosted by the AUVSI Seafarer Chapter against over 60 teams from around the world. The team is multi-disciplinary consisting of three subteams. The airframe team designs, analyzes and builds a reliable composite flight platform to house and transport a variety of avionics packages. The embedded team designs the payload and electronics. The software team programs the ability to complete mission tasks such as autonomously recognizing targets and dynamic path planning."
        },
        {
            "UID": "ajoWjqp6LCQzmJo3VCSmCBSBDdB3",
            "ClubName": "Triton XR",
            "clubEmail": "ucsdtritondota@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10749",
            "PurposeStatement": "Triton XR is a student organization that connects students with the VR/AR industry through networking, workshops, and projects. Our mission is to foster a multi-disciplinary community dedicated to exploring and creating Virtual, Augmented, and Mixed Reality experiences."
        },
        {
            "UID": "rmOTwGaKCDTWACOBpbYK8xRNooE2",
            "ClubName": "Women in ECE (WeCe)",
            "clubEmail": "ucsducs@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12033",
            "PurposeStatement": "To build a community among graduate women in Electrical and Computer Engineering to enhance their career opportunities."
        },
        {
            "UID": "jzawZQgk78SQlArdIdq7bb40U5q1",
            "ClubName": "",
            "clubEmail": "ucsdwamie@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "96lMoaYkbHdra74iShKk3hRlAck2",
            "ClubName": "Darkstar",
            "clubEmail": "ucsdwellnesspeereducators@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9597",
            "PurposeStatement": "Darkstar is a gathering of all those interested in Science Fiction and Fantasy. We are also a SF/F library of 6000+ books on campus, open to all students"
        },
        {
            "UID": "Vrw0anelCQVwFNAZX0LfeG0fsEl2",
            "ClubName": "",
            "clubEmail": "ucsdwib@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "iXDcMtDMOwXjtwF5NXoNaXIq63c2",
            "ClubName": "",
            "clubEmail": "UCSDwushu@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "vskZYjQ7I8MyaVaOaKsv0inMKmE3",
            "ClubName": "Chinese American Student Association",
            "clubEmail": "ucsdxopresident@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8593",
            "PurposeStatement": "The Chinese American Student Association (CASA) is a cultural, social, and community service oriented organization, striving to promote the Chinese American culture throughout UCSD and its surrounding community. Founded in 1972 at the University of California - San Diego, CASA is an organization that serves to unite all those with a love of the Chinese culture under a common banner in order to forge life-long friendships and to explore the 5,000-year-old Chinese culture."
        },
        {
            "UID": "CUsfTgjjtKOLTIAT6L5JTI0Vw4C3",
            "ClubName": "Women in Science Society",
            "clubEmail": "ues@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10727",
            "PurposeStatement": "We are committed to promoting the academic and professional success of collegiate women pursuing their degrees in the sciences, educating them on their career and extracurricular options and motivating them to complete their undergraduate coursework and enter the STEM workforce."
        },
        {
            "UID": "7C6t0s1t3sOSO52gC7r8War3oqu1",
            "ClubName": "Women SPEAK",
            "clubEmail": "uis.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9606",
            "PurposeStatement": "The purpose of Women SPEAK is to promote girls' health and leadership by cultivating positive body image, establish healthy relationships, defy and deconstruct gender media stereotypes, and become leaders of change in their local communities."
        },
        {
            "UID": "tnNLnfgYiDVga7RiZYzvMDuyOuf1",
            "ClubName": "Yifang Chinese Musical Club (YFM)",
            "clubEmail": "undiesforoldiesucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10799",
            "PurposeStatement": "The purpose of starting this Chinese Musical Club is to introduce the musicals combined with Chinese culture to the UCSD communities, and provide students who are interested in musicals with a place to communicate with each other."
        },
        {
            "UID": "5npYCZn3KFbxlOAYbMiMl8FTvAi2",
            "ClubName": "Yonder Dynamics",
            "clubEmail": "USASDiego@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9627",
            "PurposeStatement": "Yonder Dynamics is UC San Diego's premier robotics organization for undergraduates that focuses on designing and building autonomous rovers for terrestrial exploration. Every year, we compete in the University Rover Challenge, a prestigious international competition that challenges teams to design and build a rover that would be of use to early explorers on Mars. Our primary purpose is to empower undergraduates to work in robotics, space, and related fields, regardless of their age and major, or other circumstances. We believe in developing individuals from the ground up to prepare them for their future endeavors. With a mix of students from all backgrounds, we pride ourselves on inclusivityâ€“robotics is for everyone."
        },
        {
            "UID": "lbpBqqEBaGTBXY1cuUVfN7XB4q92",
            "ClubName": "Young Planners Society",
            "clubEmail": "vgdc@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8432",
            "PurposeStatement": "Young Planners' Society (YPS) is a career oriented network for undergraduate USP students and those who are interested in city planning and related careers. Founded in Fall 2018, YPS hosts weekly meetings that alternate between social opportunities and professional/educational development. Each quarter, YPS also incorporates faculty involvement and a community site visit. YPS is one of the founding sponsors and host of UCSD's annual Designathon, a weekend-long challenge that allows students and community members to provide solutions to campus planning and design focus areas. In addition, YPS aims to connect students with both regional planning-oriented companies and local jurisdiction planning agencies to facilitate professional mentorship opportunities for students. The Young Planners Society is represented as a nationally registered planning student organization under the American Planning Association (APA) California chapter, and is locally represented under the San Diego APA chapter."
        },
        {
            "UID": "6WRWL5bRpBQeiaqrjYVkdmgyvPk2",
            "ClubName": "College Democrats at UCSD",
            "clubEmail": "vpa@ucsdcki.org",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8369",
            "PurposeStatement": "The purpose of the College Democrats, a non-profit organization, is to educate students about the philosophy of the Democratic Party, promote campus discussion of issues of concern to students and the nation at large, foster involvement in political movements, and affect political change on a local, state, and national level"
        },
        {
            "UID": "oo8MVnuNhzQmjkxf0l4SMTflOvT2",
            "ClubName": "",
            "clubEmail": "wece@ucsd.edu",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "styoImxwuIXd3q9C2sNWg1WqfrR2",
            "ClubName": "Graduate Christian Fellowship",
            "clubEmail": "weg021@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/9625",
            "PurposeStatement": "GCF exists to help academics in the San Diego community on the lifelong journey of understanding and growing closer to God."
        },
        {
            "UID": "6gAfYtooGOcjsQ33aeKqA7dpV8u2",
            "ClubName": "",
            "clubEmail": "wetheredeemedcollege@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "zGyvMQVKQRRhDZ25fsO4qa8jKDW2",
            "ClubName": "Wordsmiths:",
            "clubEmail": "wic.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8590",
            "PurposeStatement": "The goal of Wordsmiths is to provide a place for writers and editors to collaborate in order to fulfill the mutual goals of both parties. Members of Wordsmiths will gain a community of like-minded individuals who will support their goals and provide assistance in honing their craft by editing, beta reading, and offering peer feedback."
        },
        {
            "UID": "XQaUjJSI3lUibJdmxOqZCFGeXjB3",
            "ClubName": "",
            "clubEmail": "womenspeakucsd@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "lKWo43eZCOcUV7lQpDB3nOaR0pa2",
            "ClubName": "",
            "clubEmail": "wordsm@ucsd.edu",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "lQ7cj2ubTgWJSMH4r5DFD8y9jzw2",
            "ClubName": "",
            "clubEmail": "wss.ucsd@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "QOaFvUz9qoUggzUCUuI8FkD4dHp2",
            "ClubName": "Tritons for a Free Press",
            "clubEmail": "wtbui@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/11858",
            "PurposeStatement": "The purpose of TFFP shall be to advocating for the exercise of a free press for the student body of UCSD. This organization shall serve as the official representation of the independent student press at the UCSD."
        },
        {
            "UID": "XoyzjSDEZbWc7J4dvC3UziAVIYP2",
            "ClubName": "Lion Dance at UCSD",
            "clubEmail": "xi1986president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8440",
            "PurposeStatement": "1. Lion Dance at UCSD is established for the purpose of providing cultural enrichment to UCSD and San Diego area by practicing, performing, and teaching the ancient art of Chinese Lion Dancing. 2. Lion Dance at UCSD intends to perform for any UCSD affiliated groups and events as well as non-UCSD affiliated organizations interested in our presentation. 3. Lion Dance at UCSD is a Not-For-Profit organization, and will rely on donations, contributions, and other forms of fundraising to finance equipment."
        },
        {
            "UID": "MbWhproCCBRYJpZIWItAA4YNxtD3",
            "ClubName": "Pre-Medical APAMSA at UCSD",
            "clubEmail": "xpsr.president@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8379",
            "PurposeStatement": "The purpose of our organization is to involve and educate pre-medical undergraduate students at UCSD on the health issues that pertain to the Asian community and enable them to serve the Asian Pacific communities throughout the greater San Diego region. As a pre-medical organization, we plan to educate our members on health issues that pertain to the Asian community, provide them with resources and insights into medical school, the medical school application process through a mentorship program."
        },
        {
            "UID": "7aLg6kwny6OqKCNpb33fjW5ZxlS2",
            "ClubName": "Young Democratic Socialists of America at UCSD",
            "clubEmail": "y1su@ucsd.edu",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/12038",
            "PurposeStatement": "Our mission is to educate and organize students and young people and to play a helpful and principled role in the movement for social justice. Within and throughout this struggle, we will articulate and defend the idea that true human liberation is impossible under capitalism. We seek social change which extends democracy into all aspects of life -- social, political and economic. This is the struggle for democratic socialism. Our vision of socialism is profoundly democratic, feminist, and anti-racist."
        },
        {
            "UID": "5GZomvsaVYPO4kTfM89SnjIkMZ03",
            "ClubName": "",
            "clubEmail": "yifang020@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "CGHsmzFHqKVO6eWYxnWbThHGRxf2",
            "ClubName": "Triton Gaming",
            "clubEmail": "ymaa.ucsd@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/10744",
            "PurposeStatement": "Triton Gaming is a group of collegiate organizers that team up to create epic entertainment experiences for student gamers at the University of California, San Diego. Our organization is the product of several independent on-campus gaming organizations that each represent a different gaming genre and student community. Through Triton Gaming, our team strives to create an exciting, diverse, and all-inclusive gaming environment on campus through high-quality live events."
        },
        {
            "UID": "53H1z9aMuOT3bbkM0SFXSOO3nUU2",
            "ClubName": "",
            "clubEmail": "yonder.dynamics@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": "4XYlWu4WB4WcjoZVC5Aj9I2y1f02",
            "ClubName": "",
            "clubEmail": "youngmindsucsd@gmail.com",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": 150,
            "ClubName": "Global Medical Brigades",
            "clubEmail": "yuz461@ucsd.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8399",
            "PurposeStatement": "Global Medical Brigades (GMB) is a secular, international network of university clubs that travel to developing countries to perform health care in communities without access to medicine otherwise. GMB delivers a holistic model for sustainable health through rigorous needs assessments, sponsoring referrals to those with needs beyond our capacity, keeping accurate electronic patient records, and working to improve the water and overall public health infrastructures of the villages we serve."
        },
        {
            "UID": "",
            "ClubName": "",
            "clubEmail": "zbsc@ucsd.edu",
            "SchoolURL": "",
            "PurposeStatement": ""
        },
        {
            "UID": 123,
            "ClubName": "Empower: Educate and Inspire",
            "clubEmail": "zhangfutian1@gmail.com",
            "SchoolURL": "https://studentorg.ucsd.edu/Home/Details/8408",
            "PurposeStatement": "The purpose of this organization is to raise awareness about global issues through different projects and working the community to make an impact in the real world."
        }
    ] };
