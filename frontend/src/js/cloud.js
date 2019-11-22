// URLS for our Cloud Functions

const getClubsURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClubs';
const getUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getUser';
const getEventURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getEvent';
const editUserURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/changeUser';
const getClubURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/getClub';
const changeClubURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/changeClub';
const changeEventURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/changeEvent';

const CACHE_TIMEOUT_MS = 120000000000000000000000000; // only make API request if last call was over 120,000 ms == 120 seconds
let cache = {};

/* ============ fetch() wrappers ==================== */
// Use these functions instead of calling fetch directly
// so you don't have to set the params every time.
const postRequest = function(url, data) {
  // data argument should be json
  return fetch(url, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(resp => resp.json());
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
  console.log("printing cache !!!!!");
  console.log(cache);
  let now = new Date();
  if (!cache["getClubs"] || now - cache["getClubs"].date > CACHE_TIMEOUT_MS) {
    return getRequest(getClubsURL).then(json => {
      cache["getClubs"] = {
        date: now,
        resp: json
      };
      // return json
      return club_data;
    });
  } else {
    return club_data;
    return new Promise(function(resolve, reject) {
      return resolve(cache["getClubs"].resp);
    });
  }
}

// Get user
export function getUser(userId) {
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

export function getAnnouncements() {
  return null;
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

export function changeClub(clubId, clubData) {
  let data = {
  	  club_id: clubId,
	  club: clubData
  }
  return postRequest(changeClubURL, data);
}

export function orgLogin() {}

export function getUserProfile() {}

export function editUserProfile() {}

export function getEvent(eventId) {
  return postRequest(getEventURL, { event_id: eventId });
}

export function changeEvent(eventID, eventData) {
    let data = {
        event_id: eventID,
        event: eventData
    }
    return postRequest(changeEventURL, data);
}

export let club_list = [
  {
    ggb8UPUOI9QaosjQgzwzbauclM32: {
      clubName: "4Corners Christian Fellowship at UCSD",
      contactEmail: "4corners.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8348",
      description:
        "The purpose of this organization is to provide all students, but in particular international students, the opportunity to learn about Christianity through studying the Bible and participating in Christian fellowship."
    }
  },
  {
    DhHvVhS5TAO05cRaWnSfTv9XSb73: {
      clubName: "Pakistani Student Association",
      contactEmail: "a1gunn@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11877",
      description:
        "The purpose of this cultural student association is to create a community of those interested in learning about and celebrating Pakistani culture, to further the knowledge of interested person of the history of Pakistan, in the process learn about issues pertinent to the Pakistani community back home and American Pakistanis, and to serve all UCSD and other University Students, faculty and staff in achieving the above stated goals."
    }
  },
  {
    SNvgHxo25SUNuObWHE3pvFGNSxk2: {
      clubName: "Academy of Managed Care Pharmacy (AMCP at UCSD)",
      contactEmail: "a3to@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11935",
      description:
        "AMCP at UCSD is an organization that aims to promote sound managed care pharmacy principles through education and professional development of its student pharmacist members and to encourage the education and support the advancement of managed care pharmacy. The purpose of the organization is to enhance the common academic and professional interests of the Chapter members, offer professional opportunities and leadership within managed care pharmacy, and establish, develop, promote, and conduct educational programs relating to and improving health, especially as it relates to the delivery of pharmacy services through managed care pharmacy."
    }
  },
  {
    S235UCm746eJi6uCw8ATCMaACRi1: {
      clubName: "Asian and Pacific Islander Student Alliance (APSA)",
      contactEmail: "aacf.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8391",
      description:
        "We, the students of University of California at San Diego (UCSD), come together to provide a forum to deal combat the problems and concerns of UCSD Asian and Pacific-Islander (API) students, especially those deemed â€œunderrepresentedâ€ by the Student Affirmative Action Committee (SAAC); to try to create an environment where issues such as those political, educational, cultural and social can be addressed; to increase awareness about our API history and heritage within the university and the community; to unite as a community resource to represent a common voice and thereby empower ourselves; and to serve as a support network for building bonds and addressing differences between students. The Asian and Pacific-Islander Student Alliance is a non-profit organization."
    }
  },
  {
    ZMICEawBC6ZEuqIkksL4AQApNwO2: {
      clubName: "Basic Life Support Program",
      contactEmail: "AAOUCSD@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11989",
      description:
        "Basic Life Support Program is a prestigious program established in 2014 that specializes in instructing Basic Life Support (BLS) through the American Heart Association and certifying individuals that complete the course. This program is a committee within the Alpha Epsilon Delta honor society that allows the acquirement of not only profit, leadership experience, and the growth of the organization, but ultimately provides a concrete difference between Alpha Epsilon Delta and other health related organizations."
    }
  },
  {
    mph3tPkt1zbGsKrzyZMoqmDIpyI3: {
      clubName: "a.bio.club",
      contactEmail: "abioclub@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10675",
      description:
        "A.Bio.Club is a scientific journal club that strives to facilitate a deeper understanding of topics in the biological sciences through regular peer-led discussions of scientific literature. By focusing on holding small discussion seminars, we hope to create a welcoming environment in where each member has the opportunity to interact and participate. As such, we empower our members in developing strong communication and public speaking skills to further personal and professional growth. We seek to create a community of undergraduate students who share similar passions across the biological fields, and provide opportunities such as networking, workshops, and guest lectures to broaden our perspective in science."
    }
  },
  {
    QRxstzqIfeVBgyZrNAW6zvct5uF3: {
      clubName: "Association for Women in Mathematics",
      contactEmail: "acmucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11922",
      description:
        "Specific goals for this chapter are to 1. build community for women in mathematics, 2. provide mentorship for UCSDâ€™s women in mathematics, 3. attract more diverse candidates to our graduate programs, and 4. create and maintain connections with other chapters of AWM. We believe achieving our goals will directly and positively impact our ability to support, retain, and attract talented women in our mathematics programs."
    }
  },
  {
    czyj8GeD9paebcQXGskOm8Galt83: {
      clubName: "American Chemical Society Student Affiliates (ACSSA)",
      contactEmail: "acssa@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10735",
      description:
        "To serve UCSD chemistry majors by providing a friendly environment for the intellectual exploration of relevant industrial chemistry and chemical research topics. We aim to provide students interested in science with networking, outreach and volunteering opportunities that will help them define their goals, choose their career path and pursue their intended career."
    }
  },
  {
    IdOu8rAQi2ViEVl0gEdS5LiBBLC3: {
      clubName: "Active Minds",
      contactEmail: "activeminds.sandiego@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8480",
      description:
        "Active Minds at UC San Diego is a non-profit, student-run mental health awareness, education, and advocacy organization on campus. Through our programs, events, and collaborations, we will seek to promote mental health awareness on campus and the overall psychological well-being of UC San Diego students."
    }
  },
  {
    LzJ5ZO1mjVSvKuei3vhPbQieRHq1: {
      clubName: "Japanese Student Association",
      contactEmail: "admin@ihcucsd.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9642",
      description:
        "The UCSD Japanese Student Association is for students whose home country is Japan and for those who wish to experience Japanese culture."
    }
  },
  {
    K4aPcNHIMgguZ7dAYn3aQn9vfPH3: {
      clubName: "Institute of Electrical and Electronics Engineers (IEEE)",
      contactEmail: "aegomez@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8445",
      description:
        "To build technical skills, professional skills, and social connections by applying engineering outside the classroom."
    }
  },
  {
    uu35KbWPuaZwNWuEYDrnpYzCJDI3: {
      clubName: "Pepitos",
      contactEmail: "aegomez@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8396",
      description:
        "The purpose of this organization shall be to provide a not for profit social atmosphere for UCSD students interested in promoting and exhibiting school spirit."
    }
  },
  {
    "87hocz1OrVfKaVtMOsGPEafYwXz2": {
      clubName: "Health and Medical Professions Preparation Program (HMP3)",
      contactEmail: "aej014@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8390",
      description:
        "The UCSD Health and Medical Professions Preparation Program (HMP3) provides undergraduates with enriching experiences that will enhance their preparation for admission into professional school in the health professions. Through collaborations with the UCSD School of Medicine, faculty, HealthBeat, community health care providers and others, HMP3 provides members with stimulating experiences designed to expand the mind and increase qualifications for entry into the health professions."
    }
  },
  {
    gOINjDgi1AWKKSmVbUT5Ws1e7Tm1: {
      clubName: "Alpha Epsilon Phi",
      contactEmail: "aephi.bh.president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9636",
      description:
        "To establish and maintain sisterhood of college/university women for social, educational, charitable and other non-profit purposes while taking pride in our Jewish founding."
    }
  },
  {
    B16LEtjAU3NF93my3hny0WEuNeE2: {
      clubName: "Asian American Christian Fellowship",
      contactEmail: "afe.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8558",
      description:
        "The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ. ~ you don't gotta be Asian, or American, or Christian to come check us out! :)"
    }
  },
  {
    wzgIHzYh2FNl7clQwlhyWX4d6Xz1: {
      clubName: "Community Leadership Through Service",
      contactEmail: "agenin@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11890",
      description:
        "Community Leadership Through Service seeks to assist underrepresented communities on the UC San Diego campus as well as the greater San Diego area through events, workshops, and volunteering."
    }
  },
  {
    SKIbnFu0UMNORC4BrfbVviiZSYV2: {
      clubName: "American Institute of Aeronautics and Astronautics",
      contactEmail: "aiaa@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9598",
      description:
        "To promote interest in the field of aeronautics and astronautics."
    }
  },
  {
    TORwiQDpGHQYqT9xsm1cmPO3zmG2: {
      clubName: "American Institute of Chemical Engineers (AIChE)",
      contactEmail: "aiche@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8545",
      description:
        "To provide chemical engineering students with the most beneficial experience at UCSD through industry, career-building, and social events. We seek to promote academic, social, and professional growth for the chemical engineering community."
    }
  },
  {
    N9qFhsM6G0b38G8SOe1MF5v97JF2: {
      clubName: "Alpha Lambda Mu",
      contactEmail: "alpha.lambda.mu.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12036",
      description:
        "Our Mission is to establish a Muslim Network as well as a Brotherhood dedicated to not only improving ourselves but our communities. We hope to develop each and every brother into a community leader who will go back and help out their communities when they graduate and leave us. Above all, our mission is to better ourselves as People, for we are the future and if we ever want the future to be brighter, we must enlighten ourselves first. The following are excerpts from the Official Alif Laam Meem facebook page: The Alpha Lambda Mu National Muslim Fraternity has been founded upon and promises to strive to promote among its members: An everlasting bond between brothers as they lead their communities in service. Religious, academic, and extracurricular successes that benefit the individual, the family, and the community. To build and develop integrity, honesty, respect, and the highest character among each member within the Alpha Lambda Mu National Muslim Fraternity."
    }
  },
  {
    RNhMl8yOlpgJaC8zkyqrxheHOx92: {
      clubName: "Developer Student Club at UC San Diego",
      contactEmail: "alphadelta.chapter@dlp.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10805",
      description:
        "Developer Student Clubs (DSC) is a program run by Google Developers. UCSD students from all undergraduate or graduate programs with an interest in growing as a developer or within another related field (e.g. Design) are welcome to join the UCSD chapter. By joining DSC UCSD, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
    }
  },
  {
    WkVdkvUnUZQe37I3fLSwF15ydNl1: {
      clubName: "Redeemer Campus Outreach San Diego",
      contactEmail: "amfurmid@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8355",
      description:
        "Redeemer Campus Outreach (RCO) San Diego is a Christian organization that seeks to encourage the spiritual growth of UCSD students through the study of the Bible, structured, free-flowing discussion, and relationship-building activities. This club is open to all and non-profit."
    }
  },
  {
    c3yOKXFK40dPSEE2oCiBnMB3Qs72: {
      clubName: "American Medical Student Association",
      contactEmail: "amsapremeducsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8526",
      description:
        "UCSD AMSA pre-medical chapter is dedicated to providing valuable resources for pre-medical students here at UCSD, as well as presenting opportunities for involvement in the health-care community. We provide a wide variety of events from networking with physicians to community service opportunities to our annual health fair for an underserved San Diego community as well as socials for our pre-med members."
    }
  },
  {
    u4sSkhpUlsTH74P61azZajxAgqS2: {
      clubName: "Argentine Tango Club",
      contactEmail: "apdccucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10843",
      description:
        "To build and sustain a community that gathers to practice and promote Argentine Tango at UCSD."
    }
  },
  {
    a0EEClZ6TqaosVpYphFym36eY6F2: {
      clubName: "Society of Hispanic Professional Engineers",
      contactEmail: "asadighi@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8441",
      description:
        "The purpose of SHPE UCSD is to promote the advancement of Hispanics in math, science, engineering and other technical fields through our student chapter benefits; including but not limited to Professional Development, Academic Development, and Community Service. SHPE at UCSD is a non-profit student organization."
    }
  },
  {
    fbOFtlDWOKXaoILhqWtaLQmMNkk1: {
      clubName: "African Students Association at UCSD",
      contactEmail: "asaxucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8572",
      description:
        "To cultivate unity among individuals who share a common African identity. To understand, engage and celebrate diverse African cultures through empathetic dialogue. To stand in solidarity with causes and movements concerned with self-determination and the welfare of African people, the African continent and African Diaspora."
    }
  },
  {
    Px1Oxtt7x2WhuAVJoueBlGLQZgC3: {
      clubName: "Ascension Hip Hop Dance Team",
      contactEmail: "asayaketaiko@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10687",
      description:
        "Ascension was founded in 1999 and embraces the principles of community in order to create a family for our members. As UCSD's longest-running competitive hip hop dance team, we strive to become better than the team we were yesterday by learning from and inspiring one another."
    }
  },
  {
    zeiVXCdEnuMIHWfbxPtwvFMwf4m1: {
      clubName: "Asha for Education at UCSD",
      contactEmail: "ascensionucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8419",
      description:
        'Asha for Education at UCSD is an offset of the Asha for Education foundation, a non-profit organization dedicated to the support of basic education in rural India. "Asha", which means "hope" in many Indian dialects, was founded at the University of California, Berkeley in 1991 and has since grown to over 50 chapters scattered throughout the United States, Europe, East Asia and India. Each of these chapters raises funds to support various education-related projects in India. Since its inception, Asha has partnered with more than 800+ NGOs from across 24 states in India and has disbursed in excess of $32 million. In 2014 alone, Asha has disbursed $2.85 million and has supported the education of 250,000+ kids in India directly and many hundreds of thousands more indirectly.'
    }
  },
  {
    ze2P6TkMx8NbWpfZufBVsKAFDQA2: {
      clubName: "American Society of Mechanical Engineers",
      contactEmail: "aslclub.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8540",
      description:
        "The purpose of ASME at UCSD is to provide for its members a wholesome mechanical engineering experience with events, projects and programs that enrich studentsâ€™ knowledge and fuel passion for the engineering world. The ASME will also promote development of an ethical, community conscientious student and future engineer."
    }
  },
  {
    dVCeJVGnGsfbD0HBVb7BWcvudEp2: {
      clubName: "Anthropology Club at UCSD",
      contactEmail: "asme.ucsandiego@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9629",
      description:
        "The Anthropology Club strives to maximize student involvement in anthropology, link students with faculty, provide a sense of support and community, raise awareness of anthropological issues, connect undergrads and grad students with career boosting opportunities, network within and beyond, and foster an inclusive environment conducive to personal and professional growth within the subfields of archaeology, sociocultural anthropology, and biological anthropology."
    }
  },
  {
    bnWnexJyZXPhLNwJhYLtb3R7WHW2: {
      clubName: "Atutu",
      contactEmail: "astronomyucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11971",
      description:
        "Atutu is a student organization focused on co-creating projects in tandem with communities in developing nations. We seek to work with local communities in co-designing and implementing solutions to topics our partner communities have identified as important."
    }
  },
  {
    JhscyxPC5Ud1S6JPKQT2IAxzIhF2: {
      clubName: "Astronomy Club at UCSD",
      contactEmail: "asucsd.skaggs@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10738",
      description:
        "Astronomy Club at UCSD aims to promote the interest of astronomy and astrophysics among UCSD undergraduates. Our organization will focus on the exploration of the universe. We hope to help students, who are interested in astronomy, make observations, know each other and get more access to professional faculty."
    }
  },
  {
    oRfNDz5fDhg4dlexpX6gyBBdnPt2: {
      clubName: "Association of Indian Graduate Students",
      contactEmail: "awm@math.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12062",
      description:
        "To conduct events based on Indian culture and provide a congenial atmosphere for students belonging to the Indian community."
    }
  },
  {
    Mw9DxNhWsKV8bIBBHSjAXWCPXos1: {
      clubName: "Alpha Chi Omega",
      contactEmail: "axo.sd.president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10790",
      description:
        "Our purpose is to promote friendship, leadership, learning, and service amongst our members."
    }
  },
  {
    nXh9DpOKH8aXWR3emMTWZIUqs3U2: {
      clubName: "San Diego Arts Collective",
      contactEmail: "ayu@cosandiego.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10760",
      description:
        "The San Diego Arts Collective aims to bring equity to in the art world and in the larger San Diego area by visiting local high schools and hosting regular arts-educational workshops, as well as fostering a collaborative environment for university students interested in the arts."
    }
  },
  {
    b7p3PouHmvT2eS8Q0hq8q8n43DJ3: {
      clubName: "Undergraduate Communication Society at UCSD",
      contactEmail: "b8duong@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10822",
      description:
        "The Undergraduate Communication Society (UCS) is an organization run by and for students interested in communication. The UCS conducts career panels, field trips (in which we are not responsible for member's transportation and utilize public transportation throughout San Diego) and social events for members, often including alumni and guest speakers from the communication field."
    }
  },
  {
    O9DFxEy49DQ26mRL599z7uzhiQU2: {
      clubName: "Beat @ UCSD, The",
      contactEmail: "bahai@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8524",
      description:
        "To provide a fun and lively atmosphere to continue our passion for a cappella music at the collegiate level; to immerse members into the a cappella community on-campus and beyond; to strengthen and improve vocal and musical ability; to provide entertaining performances; and to foster close-knit relationships within the group."
    }
  },
  {
    pu9i5kw6JMXiGDMmDBoVtcb5pTm2: {
      clubName: "Breakaway Collective Productions",
      contactEmail: "bbb@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10740",
      description:
        "BC Productions aims to help students, faculty, and other organizations produce a variety of media, while providing members with hands on experience in multiple fields of production, and opportunities to engage with media professionals."
    }
  },
  {
    "4ZWm1SfWmWRh1ZsyteHlKQ186yi2": {
      clubName: "Business Council",
      contactEmail: "bcproductions.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10659",
      description:
        "Business Council is organized to foster an integrated business community between student organizations, administrative bodies, and outside parties."
    }
  },
  {
    aKGfF8on3xcCERPGUuWJ5bmrcWb2: {
      clubName: "Triton Engineering Student Council",
      contactEmail: "beadprogram@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10736",
      description:
        "TESC wants to develop engineers who exhibit leadership through excellence in all aspects of life: - Prepare students for, and connect them with, professional opportunities; - Coordinate, and collaborate with, engineering student organizations; - Create and maintain a vibrant community for engineering students; and - Champion engineering and engineers in the school, community, and beyond."
    }
  },
  {
    WRzAimc8uQbzjFwfTxbyrfyImW92: {
      clubName: "Biomedical Engineering Society (BMES)",
      contactEmail: "begs@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8498",
      description:
        "To foster the growth of students interested in biomedical engineering through professional development and the mutual engaging of industry, alumni, and the local community."
    }
  },
  {
    HQA4Suiwy4SSSgZDwrazrQB8OpD2: {
      clubName: "Triton Fighters",
      contactEmail: "BEI@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8494",
      description:
        "Triton Fighters seeks to offer a place where fans of fighting games of any kind can meet up to play and form a community. We hope to host weekly meetups at which students can bring setups for their favorite games to play with others, allowing them to meet new people that share common interests."
    }
  },
  {
    "7hoRc6KTVjaglxuCpX359iboMS43": {
      clubName: "Mock Trial @ UCSD",
      contactEmail: "bfbarry@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8363",
      description:
        "The purpose of Mock Trial at UCSD is to encourage interest in law advocacy and to prepare for Mock Trial competitions."
    }
  },
  {
    gVt0h53Ju2aWlr3OxqQnn33YZMu2: {
      clubName: "Black Student Union",
      contactEmail: "bioeasi@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8539",
      description:
        "Conceived in 1967, the Black Student Union at UC San Diego is charged with four fundamental responsibilities: 1. Access, retention, and yield programming to inspire, enlighten, to build unity, to challenge, and to perpetuate the ideologies of the Black Student Union at UCSD 2. To support the efforts of those organizations which perpetuate the ideologies of the Black Student Union 3. To assist in providing an environment that is conducive to academic excellence amongst the Black student population 4. To be accountable through representation."
    }
  },
  {
    pJREgputZ1RYXrWplnSNlGEN6jM2: {
      clubName: "Board Game Club",
      contactEmail: "bmes.ucsandiego@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10666",
      description:
        "The purpose of the Board Game Club is to bring members of the board game community together and create a social setting to play, create, and discuss strategies to board games."
    }
  },
  {
    "3zflwgmPGWgjwIQwRMNSpUUMy3j2": {
      clubName: "Triton Street Fighter",
      contactEmail: "board.tcg@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10737",
      description:
        "Triton Street Fighter is an organization centered around playing the video game Street Fighter 5 and other Fighting Games. The focus is to establish a community of players that all share the same love and passion for the game."
    }
  },
  {
    Q9C2uDXpHMMpbejF5zPl7r3277i1: {
      clubName: "Triton-Ai",
      contactEmail: "board@tesc.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11915",
      description: "Building and racing autonomous RC cars."
    }
  },
  {
    aqIUuFGaCPZw7YX4VfYn7l1vKlC2: {
      clubName: "Breakin' Club- Body Rock",
      contactEmail: "booksforprisonersatucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8484",
      description:
        "Established in 2003, Bodyrock is UCSD's first and only breaking club. Our goal is to promote the hip hop culture by teaching breaking to beginners, providing practice space for local bboys and bgirls, and showcasing our skills through performances and battles. Bodyrock hopes to entertain and inspire with our combination of athleticism and musicality."
    }
  },
  {
    JPrGfWJbgwU40EnJtsX1XahdPkz2: {
      clubName: "Call of Cthulhu and Murder Mystery Game Club",
      contactEmail: "businesscouncilucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8551",
      description:
        "The purpose of the club is to organize students to participate in Call of Cthulhu and Murder Mystery Game. Members will be provided with access to participate in both â€œface to faceâ€ role play games to enhance social interactivity."
    }
  },
  {
    PrNm7VbfJtQDQf7pPrWWBQKExgg2: {
      clubName: "Pre-PA Student Organization (PPASO)",
      contactEmail: "bvn015@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8538",
      description:
        "The mission of PPASO is to inform students about the physician assistant profession and to provide members with the resources that will best help them achieve their goals of entering physician assistant school. PPASO seeks to accomplish this mission by educating students about the process of becoming a physician assistant, collaborating with invaluable resources such as physician assistants, medical professionals, alumni, and UC San Diego faculty, and fostering camaraderie within the organization through unique experiential opportunities."
    }
  },
  {
    "5UHxXDlIQJUm6ouBA5dqj9tg1OE3": {
      clubName: "Chess Club at UCSD",
      contactEmail: "c.scholars.all@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11995",
      description:
        "To promote and encourage chess on campus by creating an intellectually challenging environment by introducing regular chess meetings and tournaments to UCSD."
    }
  },
  {
    "9x2Rl7hX5ya7sB7LjULFFzhG1vF2": {
      clubName: "TEDx@UCSD",
      contactEmail: "c9shin@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8491",
      description:
        "TEDxUCSD's mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately, their world. We aim to engage, motivate, and celebrate all generations of the UCSD family."
    }
  },
  {
    SzkZ7CWDxnaXvmSmLJ67OdNTFXb2: {
      clubName: "Pre-Pharmacy Society (PPS)",
      contactEmail: "cakappa@pibetaphi.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10700",
      description:
        "Pre-Pharmacy Society is an organization that promotes the career of pharmacy through a variety of resources that include workshops, volunteer opportunities, guest speakers, and networking to compliment the interests of our members. Our main objectives are to better prepare our members for pharmacy school admission and to learn and explore the multitude of career options for pharmacists. While providing essential information to our members, PPS also strives to make the club as fun as possible for our members."
    }
  },
  {
    Sz0dxuSZ5UhSvO6tN9jPhM6qSME3: {
      clubName: "Sri Lankan Students Association",
      contactEmail: "calrhopresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8510",
      description:
        "To gather the Sri Lankan student community and those interested in the country of Sri Lanka within UC San Diego. The Sri Lankan Student Association aims to promote Sri Lankan culture and showcase Sri Lankan traditions through several mediums."
    }
  },
  {
    Rv03NFbhvVW2flPRcO9fLTEUyJw1: {
      clubName: "Cancer Outreach Team",
      contactEmail: "camphopeucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10793",
      description:
        "Our goal is to reduce cancer morbidity and mortality among the Pan-Asian community by educating UCSD students about appropriate cancer control measures and providing opportunities for those students to disseminate their acquired knowledge to the pan-Asian community at-large. Our team is a non-profit, student- run organization and has been operating continuously since 1994."
    }
  },
  {
    hyr0FZAWGaQ5vxsjRZbawmRNaj02: {
      clubName: "CEO GLOBAL at UCSD",
      contactEmail: "canceroutreachteam@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9649",
      description:
        "The positive transformation of the Global Community by developing â€œServant Leaders of Integrityâ€ and helping transform the lives of university students."
    }
  },
  {
    "6WImuBA9TWbUIlLUtLQFrS5pEvQ2": {
      clubName: "Chinese Computer Community",
      contactEmail: "CANGQIONGZHIANGX@GMAIL.COM",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8602",
      description:
        "To create a technology-driven business incubator and serve students related to computer fields with opportunities in professional working environment, strengthen technical skills and seek business growth."
    }
  },
  {
    ROkg3awUJeYGcoUOmX6yWgRddiE2: {
      clubName: "Chinese Dance Association",
      contactEmail: "casaucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10758",
      description:
        "To enrich the student community of UCSD with the awareness of Chinese culture through the art of dance. Our purpose is to create an atmosphere of artistic and creative expression for everyone. CDA practices Chinese dance with emphasis on ballet techniques, but continues to keep the essence of Chinese culture in the pieces. In order to spread multi-cultural acknowledgemnt, CDA uses dance to celebrate the individual creativity and artistic collaboration."
    }
  },
  {
    GcHL76FPRlQwnU57kAuAfetp8A82: {
      clubName: "Chancellor's Scholars Alliance",
      contactEmail: "cathcom@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9647",
      description:
        "To promote service, academic development, leadership, and a sense of community among recipients of the UCSD Chancellorâ€™s Scholarship through volunteer and community service opportunities, social events, and organized meetings."
    }
  },
  {
    "2RXgoZqdBXedSzBxDC03TcwhrbW2": {
      clubName: "Che Cafe",
      contactEmail: "cathcom@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10813",
      description:
        'The Che Cafe is a community space for both the greater San Diego community and the University of California, San Diego. We identify this space as "Do It Yourself" venue, vegan cafe, resource center for radical grassroots activists. Furthermore, we open this space to people who would like to add to the space while at the same time dismantle hierarchies. The Che Cafe Collective organizes numerous political and social events for all ages and allows vegan groups to serve tasty vegan food.'
    }
  },
  {
    icG9rKZHZNMkxInohKB5fov03Ih2: {
      clubName: "KOTX",
      contactEmail: "ccrao@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10767",
      description:
        "KOTX is a K-pop dance team that entertains and spreads Korean culture through K-pop. Creating a welcoming environment for all K-pop lovers and is open to all levels of dancers. LET'S GET KOTX!"
    }
  },
  {
    Szwf9vWl7INCnF7rreWa7jRxDPk2: {
      clubName: "Malaysians in America at UCSD",
      contactEmail: "ceclife@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11973",
      description:
        "The purpose of this cultural organization shall be to introduce Malaysian culture to all UCSD students as well as facilitate events for Malaysians students studying at UCSD; Facilitate events such as but not limited to: a. An organization aimed at encouraging conversation and bonding with new incoming Malaysian students and returning Malaysian students, b. Provide a sense of home for Malaysians studying abroad at UCSD, c. For Malaysian students who seek it, assistance with assimilation in American culture, d. Arrange events to introduce Malaysian culture and customs to other UCSD students (food, games, and traditional celebrations), e. Collaborate with other Malaysian Student Associations around the United States of America to form academic, social, and professional relationships; Malaysians in America (MIA) at UCSD is a non-profit student run cultural organization that will be financed through: a. Associated Students funding, b. External donations and charity, c. MIA fundraisers;"
    }
  },
  {
    vN1qQWqwe5dXbg3cMaxlhhuFQz13: {
      clubName: "Christians at UCSD",
      contactEmail: "cga.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8493",
      description: "To provide Christian fellowship at UCSD"
    }
  },
  {
    HTIY4MeZcxenoxCKI5x0bwnYNO33: {
      clubName: "Chicanx/Latinx For Community Medicine",
      contactEmail: "chemecar@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10664",
      description:
        "We are a pre-health undergraduate organization that is committed to providing support, guidance, and education in our pursuit for higher education in medicine. Our beliefs are deeply rooted in providing better health care for our underserved communities through service and empowerment."
    }
  },
  {
    z8qAtJB7PzYhiKi2Eg9L2mSsiRy2: {
      clubName: "Chinese Drama Club (CDC)",
      contactEmail: "chineseclassicdanceteam@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10732",
      description:
        "The purpose of this club is to establish a Chinese culture proposing drama club, providing Chinese culture in the form of artistic activities for UCSD communities, and even the entire San Diego area."
    }
  },
  {
    "30wStJj7FoaT64BjDhbIr0ujdH32": {
      clubName: "Chinese Graduate Association",
      contactEmail: "chinesedance.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9605",
      description:
        "To help incoming new international students from China blend into America's multi-cultural society. Help Chinese student to understand other cultures and shorten the gaps between races and nations due to inexperience and misunderstandings. Also to provide convenient services to Chinese students and protect their safety."
    }
  },
  {
    nn4sayKjvQhNgt1DBMvpueaApRX2: {
      clubName: "Circle K. International",
      contactEmail: "chineseunion@outlook.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8446",
      description:
        'Circle K International is comprised of university students who are responsible citizens and leaders with a lifelong commitment to community service worldwide. Through the three tenets of Service, Leadership, and Fellowship, Circle K inspires people to better our world, following the motto of "Live to Serve, Love to Serve." Circle K provides constructive opportunities for students to become involved on their campuses and communities through service work to others in need.'
    }
  },
  {
    zKXb8KwYvhMrrMWsALGtnoSOAMh2: {
      clubName: "Camp HOPE America at UCSD",
      contactEmail: "cocmmgucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10815",
      description:
        "Camp HOPE America at UCSD members are a part of helping San Diego teens and young children exposed to trauma and domestic violence find pathways to HOPE and healing through a camping and year-round mentoring program. In partnership with the national evidence-based organization Camp HOPE America, members explore trauma informed mentoring, fundraising for community activities, and professional development. Through this club, our members become a network of hope givers who help break the cycle of domestic violence."
    }
  },
  {
    zBJnr3lG2APwvdBEfNeJw1xerUw1: {
      clubName: "Helping Students Focus",
      contactEmail: "college@harvestsd.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8461",
      description:
        "The purpose of this non-profit organization is to provide students with ADHD, ADD, and other concentration related needs the academic and communal support they need whether it be through peer tutoring, support groups, or referring programs that the organization does not offer to allow for improvement in the academic field."
    }
  },
  {
    ZpH5kEx2m0ZG86MBq7bGQSB6O8S2: {
      clubName: "San Diego Homeless Health Initiative",
      contactEmail: "college@rgcsd.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9622",
      description:
        "The organizationâ€™s purpose is to improve the San Diego homeless populationâ€™s health and well-being. We will accomplish this mainly through the production and distribution of health kits specifically designed to provide the best improvement to homeless lives. However, we will aim to aid the homeless population in any way we can, which may include activities such as holding donation drives, creating informational pamphlets for the homelessâ€™ benefit, or donating money raised to local homeless shelters. This organization seeks to bring light to the issue of homeless personsâ€™ poor states of health, which we believe is an issue much looked over by society."
    }
  },
  {
    OCeKz8gjuPd0zdT1r7tm620EK193: {
      clubName: "Computer Science for Agriculture",
      contactEmail: "comicbookclub@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8569",
      description:
        "The goal of CSA is to enable students interested in a variety of fields to connect and engage on solving a singular goal â€“ how to bring aspects of gardening and farming into the 21st century, through the engagement of computer science, engineering, and data sciences majors. CSA will work alongside Rogerâ€™s Community Garden (formerly North County Community Garden) to host student projects relating to agriculture, food waste, bioenergy, and sustainability-oriented projects. Members of the organization can hope to gain skills in hardware and software design, soldering, data science, biology, chemistry, etc. Members are not required to have any background knowledge, as CSA and its partners are more than happy to help get interested members up to speed."
    }
  },
  {
    "8NKpf0n0IVPHShX4MGZZxMKAy8U2": {
      clubName: "Cooking Hub",
      contactEmail: "communityleadershipthruservice@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8525",
      description:
        "Cooking Hub aims to bring a good chance for students to get together, teach students practical cooking skills, advocate healthier college diets, raise awareness of cultural diversity represented by food, and help solve food insecurity at UCSD."
    }
  },
  {
    zQCubgwjjBVzBlyLc0O7ISDqEe23: {
      clubName: "Team HBV",
      contactEmail: "conservation@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8429",
      description:
        "Team HBV is a national network spanning many colleges and high schools whose goal is to create a strong, unified community that will further efforts to eradicate hepatitis B. The national Team HBV mission is to raise awareness of the disproportionately high incidence of hepatitis B and liver cancer among Asian and Pacific Islanders (APIs) worldwide and hopes to create programming that will address the disparity. On the campus of UCSD, Team HBV will raise awareness on campus and in the local community through screening initiative programs, outreach campaigns, inviting guest speakers, and much more. Our objectives are to educate the community about hepatitis B and liver cancer, evaluate our efforts on our outreach and education projects, participate in national and international Team HBV efforts, and to collaborate with the other individuals and organizations that support the Jade Ribbon Campaign. We welcome everyone to join us in our fight against hepatitis B!"
    }
  },
  {
    dbWQfPk9lvXwou4Dy0geFV6ZvuL2: {
      clubName: "SynBio",
      contactEmail: "contact@setcucsd.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8404",
      description:
        "The purpose of SynBio is to: A. Raise awareness of and drive interest in the field of synthetic biology B. Provide workshops to build the skillsets needed to be effective in quantitative biology research C. Encourage interdisciplinary modes of thinking and collaboration D. Create a community for individuals of all biology-related interests E. Foster the growth and development of open source biology at UC San Diego"
    }
  },
  {
    sIwegHEdTNaPgp6MmhIq7ngMFYH3: {
      clubName: "",
      contactEmail: "contact@votolatino.org",
      pageURL: "",
      description: ""
    }
  },
  {
    itOiCrZIakaiSN61v67Q3bBt3u02: {
      clubName: "Counseling and Psychological Services Peer Education Program",
      contactEmail: "cookinghub.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11857",
      description:
        "The CAPS Wellness Peer Education Program is a non-profit organization that seeks to provide educational and outreach opportunities to members of the UCSD community and beyond. We recognize the value of peer support in helping students address personal concerns. Through peer education, we hope to help students recognize their resources as well as increase prevention of mental illness and decrease the stigmas associated with utilizing the Counseling and Psychological Services."
    }
  },
  {
    uznH3t8RfhcMwGvQsbCd1h97tkr2: {
      clubName: "Books Beyond Boundaries",
      contactEmail: "cooperbeaman@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10676",
      description:
        "Our mission is to re-humanize inmates and reduce recidivism rates within the San Diego community. We believe that facilitating book groups with prisoners can aid in this process by promoting healthy human interaction. Interactions among inmates and between inmates and volunteers can help build or re-build prisonersâ€™ ability to function with other people. It can also help to re-humanize inmates who have by making prisoners feel heard and instilling self-worth. We hope that these skills and values make it easier for prisoners to re-enter society and thus prevent them from committing further crimes."
    }
  },
  {
    dknBqETJjnhAXQPUkXxWmM8XwYX2: {
      clubName: "Civil Discourse Club",
      contactEmail: "CPFI.UCSD@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8374",
      description:
        "The goal of this organization is to offer a forum for political and philosophical inquiry. The organization seeks to promote free speech, civil discourse, and open criticism of all ideas. Organization members are offered a platform to share and discuss their ideas with others."
    }
  },
  {
    DEoUC89MsZRYXto8v5UILejjYz82: {
      clubName: "Grad Pals Program",
      contactEmail: "crkirkpa@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10810",
      description:
        "The Grad Pals Program is a graduate student buddy program which aims to help new students settle in quicker, give them the opportunity to ask questions, provide them with support during the first few weeks and ease the transition into their graduate life at UCSD."
    }
  },
  {
    SCe0SJF5mVQikhono8ea7UGod862: {
      clubName: "Campus Crusade for Christ",
      contactEmail: "csa.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10669",
      description:
        "Win, Build, and Send: turning lost students into Christ-centered laborers."
    }
  },
  {
    ce7xbYEkUwatxW0ioqy7vZ7zZ972: {
      clubName: "Healing Hands at UCSD",
      contactEmail: "cse-gradwic@eng.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8584",
      description:
        "Healing Hands at UCSD aims to improve the access to healthcare in the homeless and underserved communities and to provide students opportunities with hands-on medical related events around San Diego; to inspire and help teach the medically underserved how to advocate for mental health and medical services. The ultimate goal is to create an environment of learning and awareness in our members in order to build a bridge of understanding and assistance towards the homeless and at-risk population."
    }
  },
  {
    eNR9Zd4O6YPRutjFSUjlEAf4p052: {
      clubName: "Coptic Club at UCSD",
      contactEmail: "cses@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9640",
      description:
        "To allow members to grow spiritually while educating them about the Coptic culture and foremost religion."
    }
  },
  {
    pEZp1wOxCdbIA45eD5e4zeGTdEz1: {
      clubName: "Data Science Student Society at UCSD",
      contactEmail: "csforeach@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8394",
      description:
        "The Data Science Student Society at UCSD is an interdisciplinary academic organization designed to immerse the community in the diverse and growing facets of Data Science: Machine Learning, Computational Statistics, Data Mining, Visualization, Predictive Analytics, and any new emerging relevant fields of study. With practical hands-on data projects, a professional portfolio-building approach, and fun outreach activities, the Data Science Student Society at UCSD strives to enrich the academic life of the student community by strengthening them for success in their current and future pursuits of Data Science related fields."
    }
  },
  {
    YhZhWWpF7PTCJxP7E0Z1adDRiIT2: {
      clubName: "Colleges Against Cancer",
      contactEmail: "cssa.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8535",
      description:
        "Colleges Against Cancer is a non-profit nationwide collaboration of college students, faculty, and staff dedicated to eliminating cancer by initiating and supporting programs for cancer education in college communities. We accomplish this through our four strategic directions: Cancer Education, Advocacy, Relay For Life, and Survivorship."
    }
  },
  {
    dsM5yysTc2U7QAqzqtisq75GRY52: {
      clubName: "American Mock World Health Organization at UCSD",
      contactEmail: "cwenzel@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8427",
      description:
        "The American Mock World Health Organization (AMWHO) is the only model-WHO entity in the United States of America. AMWHO aims to increase discourse on global health policy through creating authentic simulations of the World Health Assembly, the sole decision- making body of the World Health Organization. Participants assume the role of a WHO- Ambassador, Non-Governmental Organization Representative, or Media Correspondent, and form health-related positions to create a final resolution sent to the WHO in Geneva, Switzerland."
    }
  },
  {
    Ffyj7BP4t9QZXmb8ZCLq3NPJy6C2: {
      clubName: "Emergency Medical Services at UCSD",
      contactEmail: "d12ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11954",
      description:
        "Emergency Medical Services at UCSD is organized exclusively to educate students and staff through CPR certification and training, provide information and resources for individuals, and to positively impact the health and safety of the UCSD community."
    }
  },
  {
    jU3Zb5UZ06Ndxote0Qy5oWQqlB83: {
      clubName: "Deejays and Vinylphiles Club",
      contactEmail: "darealpunjabiz@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8415",
      description:
        "To educate the student body on DJ skills, techniques, and culture. To guide members through the process of producing and marketing free campus events for the student body."
    }
  },
  {
    YxN3dz0ZvBZKxSvrfCqI63YWZXG2: {
      clubName: "Delta Delta Delta",
      contactEmail: "darkstar@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8562",
      description:
        "THE PURPOSE OF DELTA DELTA DELTA shall be to establish a perpetual bond of friendship among its members, to develop a stronger and more womanly character, to broaden the moral and intellectual life, and to assist its members in every possible way. IT SHALL ALSO BE THE PURPOSE OF DELTA DELTA DELTA to promote and develop mutually beneficial relationships between the Fraternity and the colleges and universities where the Fraternity has established chapters, to develop qualities of unselfish leadership among its members, and to encourage them to assume, with integrity and devotion to moral and democratic principles, the highest responsibilities of college women."
    }
  },
  {
    hAggH32XaUOYTWcMjMjOr4rydjM2: {
      clubName: "",
      contactEmail: "deep.yonderdynamics@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    GePiu10OATUpwtWyFiAlQHHqyKv2: {
      clubName: "Ecology, Behavior and Evolution Club at UCSD",
      contactEmail: "developerstudentclubucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10648",
      description:
        "The Ecology, Behavior & Evolution Club at UCSD seeks to provide students with research opportunities, internship guidance, and information regarding careers in ecology, behavior & evolution (EBE). The group also serves as a social nexus for students with EBE interests, and provides an organizational structure to promote volunteer activities."
    }
  },
  {
    I6yta1a4kGeDRbXtBP99uSfXpWs1: {
      clubName: "Design/Build/Fly",
      contactEmail: "dgucsdpresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8522",
      description:
        "The Design/Build/Fly (DBF) student team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission objective. The contest provides a real-world aircraft design experience for students by giving them the opportunity to validate their analytical studies. The competition is hosted by Textron Aviation, Raytheon Missile Systems, and the American Institute of Aeronautics and Astronautics (AIAA) national engineering society."
    }
  },
  {
    "1fp81gaKxPYB1TJYytm9L0CvZo63": {
      clubName: "Delta Lambda Phi",
      contactEmail: "djclub.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8402",
      description:
        "1) To develop dignified and purposeful social, service, and recreational activities for all men, irrespective of sexual orientation or gender expression. 2) To lead in determining the rights and privileges of individuals in society. 3) To present a strong and positive image which respects the diversity of all individuals."
    }
  },
  {
    "9V3jetmJG2UddR6LWEyFPqnS1wl1": {
      clubName: "Junior Panhellenic",
      contactEmail: "dprotono@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8452",
      description:
        "To assist Panhellenic Council in overseeing the 11 Panhellenic and 1 Affiliate Chapters within the Panhellenic Council. These chapters are: Alpha Chi Omega, Alpha Epsilon Phi, Alpha Omicron Pi, Alpha Phi, Chi Omega, Delta Delta Delta, Delta Gamma, Kappa Alpha Theta, Kappa Kappa Gamma, Phi Sigma Rho (Affiliate), Pi Beta Phi, and Sigma Kappa."
    }
  },
  {
    vxaS6m9zr7XsorvjNDjdIAJ5b293: {
      clubName: "Delta Epsilon Mu",
      contactEmail: "ds3ucsdmail@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9638",
      description:
        "On May 13, 2017, the UC San Diego Colony earned a Charter as the 29th Chapter of Delta Epsilon Mu. The 16 Founders of Alpha Lambda Chapter thus established a foundation at UC San Diego to develop well-rounded leaders in the various health fields, centered around the Pillars of Loyalty, Dedication, Friendship, and Support."
    }
  },
  {
    Q0qexgEErGgFkP9XmMnowdGLnOD2: {
      clubName:
        "Association of Student Pharmacists at UCSD Skaggs School of Pharmacy",
      contactEmail: "dzurale@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10733",
      description:
        "The purpose of this association shall be the development, promotion, and enhancement of the knowledge of pharmacy in the community, all in harmony with the educational interests of the University of California, San Diego Skaggs School of Pharmacy."
    }
  },
  {
    SBZXR3QDAVZ450qnq6w2BugMiqm2: {
      clubName: "Triton Software Engineering",
      contactEmail: "e4fisher@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8597",
      description:
        "Triton Software Engineering (TSE) is an interdisciplinary student-run organization at UC San Diego that designs and develops pro-bono software (e.g. web and mobile applications) for non-profits, while giving our students practical, real world experience."
    }
  },
  {
    vS42675cnCaXxoJEgqep2V6LTuT2: {
      clubName: "Engineers Without Borders at UCSD",
      contactEmail: "ebeclub@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8556",
      description:
        "Engineers Without Borders--UCSD Chapter is a non-profit organization dedicated to the betterment of developing communities around the world through the design, implementation, and construction of sustainable projects that fit the need of the community. Our goal is to establish an on-going relationship with these developing communities and to teach them the necessary skills to maintain the facilities and structures that we leave them with."
    }
  },
  {
    "3nrznIL2LMaTt3ZLEcWLXiEH5pC3": {
      clubName: "Figure Skating @ UCSD",
      contactEmail: "eccf.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8500",
      description:
        "We compete in the Intercollegiate circuit throughout the school year. One of our main goals is to qualify for Intercollegiate Nationals as a team. Each skater performs individually in the level and event of their choosing and the points they earn from podium placement get added to the UCSD cumulative team score. Intercollegiate competitions are a great place to have a fun time and meet skaters from other schools throughout the country. Our team is tight knit on and off the ice. Practices are largely self scheduled figure skating is a sport driven by individual motivation to improve. However, members often carpool to practice help one another with jumps, spins, and choreography."
    }
  },
  {
    HeysFvfXIDZMFGoDQK2XBCT76G62: {
      clubName: "Engineers for a Sustainable World",
      contactEmail: "eceusc@eng.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10833",
      description:
        "ESW-UCSDâ€™s Vision: We envision a worldwide era of sustainability in which all communities cooperate to achieve lasting environmental, social, and economic prosperity. ESW-UCSDâ€™s Mission: Our mission is to bring communities together to develop, implement, and share sustainable technologies and practices worldwide."
    }
  },
  {
    UkjVfKHYvEeWUXC1HHUNldE2FYE2: {
      clubName: "Psi Chi Omega",
      contactEmail: "eco@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11966",
      description:
        "We are an Asian-interest social fraternity established to uphold the values of integrity, perseverance, and eternal brotherhood."
    }
  },
  {
    v0DhxCcxrKWH1MDLBr5gsr8LzZf1: {
      clubName: "Native American Student Alliance",
      contactEmail: "editor@themq.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9617",
      description:
        "The purpose of this organization is to facilitate the maintenance and education of Native American culture and beliefs, while maintaining a community for Native students (and Allies) on campus and contributing to local Native communities. Native American Student Alliance is a not-for-profit organization."
    }
  },
  {
    s2jb1vGnT3YRLWplRNEPfKHoHsE3: {
      clubName: "Music and Memory at UCSD",
      contactEmail: "egchrist@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8455",
      description:
        "The purpose of Music & Memory at UCSD is to promote and carry out the mission of the parent Music & Memory non-profit organization, which is to bring personalized music into the lives of people with a wide range of cognitive and physical challenges through digital music technology and live performances, vastly improving quality of life. Further, we would like to help advocate for Music & Memoryâ€™s goal of making this form of personalized therapeutic music a standard of care throughout the healthcare industry."
    }
  },
  {
    NKWBZJo9WWehKCa8N2AyTqveeXJ2: {
      clubName: "Finesse Dance Company",
      contactEmail: "eim.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10780",
      description:
        "Our purpose is to provide an outlet for dancers who come to college seeking to continue their passion for dance in addition to pursuing higher education. Our contemporary based dance company will hold various showcases and events to allow our members to express themselves through artistic movement. Our main goal is to offer a space for students who wish to further build upon their talent and creativity, as well as form a united family."
    }
  },
  {
    pJU9baqdGbcscaTVItH8dhvMiOi1: {
      clubName: "Eta Kappa Nu (HKN)",
      contactEmail: "empower.ucsandiego@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9650",
      description:
        "Eta Kappa Nu (IEEE-HKN) is the student honor society of IEEE and is dedicated to encouraging and recognizing excellence in IEEE fields of interest. Members consist of students, alumni, and professionals who have demonstrated exceptional academic and professional accomplishments. Student members are selected on the basis of scholastic standing, character, and leadership. At UCSD, HKN provides free tutoring and hosts a variety of workshops and events to promote technical, professional, and academic development."
    }
  },
  {
    oOlmm5KdOIOWKelnYMGxts7H7yh1: {
      clubName: "Expanding Visions for Health",
      contactEmail: "envisionaries.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10789",
      description:
        "At Expanding Visions for Health we are dedicated to providing service aimed at improving the health of our community."
    }
  },
  {
    EYKW64DhQfN5JPNwFgPQx4eO2h12: {
      clubName: "Evangelical Chinese Christian Fellowship",
      contactEmail: "esw.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8386",
      description:
        "ECCF is an on-campus Christian fellowship focusing on the Mandarin speaking community in UC San Diego. Our fellowship is a group of brothers and sisters supporting each other physically and spiritually while studying in UCSD and we are here to build a home away from home together through the love of Christ."
    }
  },
  {
    lEfvCYpVnMbo74bwu44b9VXJc5o1: {
      clubName: "Alpha Epsilon Omega, Eta",
      contactEmail: "eta@alphaepsilonomega.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10697",
      description:
        "To unite men who strive to achieve high standards of achievement in all aspects of life, and who share in the need of promoting Armenian history, language, and culture."
    }
  },
  {
    PrFz0Zy2t7g2ZZpDxrGsyr1LE5Z2: {
      clubName: "Falun Dafa at UCSD",
      contactEmail: "etaomegachi2018@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8456",
      description:
        "Falun Dafa Club at UCSD is an ancient meditation practice in the Buddha school tradition; at the core of the practice are the values of Truthfulness, Compassion and Forbearance, which act as a guide for daily life and practice. Through tranquil meditations and an emphasis on the elevation of oneâ€™s heart-mind character, Falun Dafa has brought health and well-being to more than 100 million people in 100 countries around the world. Falun Dafa is not a religion, there is no membership and is completely free of charge! It is a mind-body practice with a spiritual component that covers metaphysics, ethics and enlightenment. Through persistent practice one strives to achieve a state of selflessness, increased insight, inner purity, balance- true health and ultimately enlightenment. Since July 1999 the communist government of China has persecuted and enslaved millions of innocent people for practicing Falun Dafa and they comprise 65% of labor camps, detention centers and prisons across China for believing in Truth- Compassion- Forbearance. Evidence from acclaimed sources have proven tens of thousands of Falun Dafa practitioners to have been killed from live organ harvesting for Chinaâ€™s lucrative organ transplant market. So what do we, as an organization, do on campus? We meditate together and teach the exercises, promote cultural art events that revive traditional Chinese culture and raise awareness about the persecution and organ harvesting of Falun Dafa practitioners in China."
    }
  },
  {
    evLw5D9qwSQJBAzBCLkXLPefgZk2: {
      clubName: "Exercise is Medicine",
      contactEmail: "ewb.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11986",
      description:
        "To raise awareness about exercise/activity as a means for contributing and maintaining good health, and preventing disease. While also promoting the interests and professional development of the multidisciplinary field of sports medicine; such as orthopedics, family medicine, and rehabilitation."
    }
  },
  {
    N6h7bsGPmQP7fc40uTtZTZQA8bt1: {
      clubName: "Eta Omega Chi",
      contactEmail: "ewh.at.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10692",
      description:
        "Eta Omega Chi is the first East Asian Entrepreneurship Fraternity organized to pursue the spirit of entrepreneurship; to share and consolidate resources among students; to encourage each innovative idea as well as leadership, and to further a higher standard of cultural and professional value in order to serve the community. During our pledging process, a wide range of topics and workshops about entrepreneurship will be taught to the pledges such as the how to give an elevator pitch, resume building, and how to write a business plan. We also will share a lot of resources for academic purpose and equip our brother with strong leadership."
    }
  },
  {
    NXIJg6N9K9dCjmaJvoi3lLLyY2g1: {
      clubName: "Undergraduate Women in Computing at UCSD",
      contactEmail: "eziaeika@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11866",
      description:
        "WIC is a non-profit student organization committed to fostering a supportive and informative environment for women in computing through technical, professional development, and social events. We also focus on high school outreach programs to bring more young women into the field. Keynote speakers, mentorship, career fair information, interview preparation, programming competitions, and attending CS conferences are few of the opportunities that we provide for our members."
    }
  },
  {
    WzhmVIckPaVaG7C42omPwCPZeST2: {
      clubName: "Fisherman's Club",
      contactEmail: "fair.play.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8492",
      description:
        "Here at the Fishermanâ€™s Club at UCSD, we provide a welcoming community for students to bond over the sport of angling. Our central goal is to educate students about the aspects and nuances of fishing through engagement in friendly competition and exploration of the many fisheries San Diego has to offer. We will also learn about fisheries and the importance of conservation through our connections with local community groups and faculty members. We welcome students regardless of experience, so whether you've grown up on the water or have yet to wet a line, we invite you to join Fisherman's Club! Check us out on Facebook! https://www.facebook.com/fishermansclubucsd"
    }
  },
  {
    lapCm3RvvRNbxWRYSSXjecfl1Tg1: {
      clubName: "Five Millennia Chinese Orchestra",
      contactEmail: "fdmucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9631",
      description:
        "The purpose of our organization is to transmit Chinese traditional culture, to convene players and to provide them with an opportunity to communicate, perform and improve skills."
    }
  },
  {
    lIp0DzUZB0ZIYgSWNtOqaMfwoEG2: {
      clubName: "TritonCubed",
      contactEmail: "fighters@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8405",
      description:
        "To provide students the opportunity to expand and test their knowledge by designing and fabricating a CubeSat. Participants of the TritonÂ³ work closely with other students and faculty members, as well as collaborate with other companies, to complete this multifaceted disciplinary project."
    }
  },
  {
    WAvTllYuYfT1i9HkkyZYV6BMtir2: {
      clubName: "Flying Sams",
      contactEmail: "figureskating.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9610",
      description:
        "Flying Sams is a medical service club at the University of California, San Diego in association with the non-profit service organization, The Flying Samaritans Inc. We are dedicated to providing free medical services to the underprivileged people of Mexico through a clinic staffed entirely of volunteer physicians, nurses, medical and pre-medical students."
    }
  },
  {
    "4zKQzWbnNvMjbiypePPxA7GyDw83": {
      clubName: "Food Recovery Network at UCSD",
      contactEmail: "finessedanceco@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8422",
      description:
        "Food Recovery Network at UCSD aims to divert food waste and feed those facing food security at UC San Diego and in the greater San Diego community. We create partnerships with food donors on and off campus to run weekly recoveries. We deliver to organizations that help those in need like the Triton Food Pantry, The Hub, and Urban Street Angels. Through our efforts and activism, we help break the cycle of food waste and hunger and educate the community on how to build a more sustainable food system."
    }
  },
  {
    F1rIV1y26NXA9FcKLAq5gr4ezgm2: {
      clubName: "Fronteras Saludables (Healthier Borders)",
      contactEmail: "fishermansclubucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9637",
      description:
        "Fronteras Saludables (Healthier Borders) is student organization that hopes to spread awareness about health issues in Tijuana, Mexico. We will support the efforts of the HFiT free clinic (located in Mexico) through fundraising for medical supplies, medications, and other equipment. Fronteras Saludables (Healthier Borders) will inform UCSD undergraduates about opportunities to get involved in the HFIT internship program and other supporting roles."
    }
  },
  {
    iKGDaA5APCOzPPV79BsufjuMHHI3: {
      clubName: "Fun Talk and Learn Chinese Student Association (TLCSA)",
      contactEmail: "fivemill@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8347",
      description:
        "Fun Talk & Learn Chinese Student Association is a student body helping UCSD students learn useful skills, form appropriate worldviews in order to live a meaningful life and be contributive to the society inside and outside the campus. Through workshops and seminars, students will be equipped with capabilities to analyze, to conclude, to present and to lead. Through connecting with local Chinese/Taiwanese people, students can obtain helps in dorm and off-campus living while attending UCSD. Students will learn to overcome the challenges from the cultural and language differences in order that they can focus on the academic works without much hindrance from daily life arrangement. Group activities will be organized primarily by the students in order for them to learn the skills for planning, execution and leadership. Besides successfully academic learning, students can gain the spiritual understanding and find good mentors who can help them using their native languages. Students will also be given training on career development such as writing resumes, conducting successful on-site job interviews, and learning to work with others. Students are encourage to evaluate their world views in order to live with impact! The goals are that the participants will be able to obtain : 1. Communication and presentation skills both verbally and in writing 2. Innovative view on spiritual and religious issues 3. Understanding of the global affairs based on facts. 4. Connections with local Chinese/Taiwanese people and students 5. Leadership through organizing activities 6. Career development skills 7. Enthusiasm for life that leads to contributions to the community"
    }
  },
  {
    "62u7rmqi4vd0DNNIv0mfIYN5NoT2": {
      clubName: "Pre-Dental Society/Free Dental Clinic at UCSD",
      contactEmail: "flr.gamma.president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8428",
      description:
        "To provide additional educational resources to Pre-Dental students through our general body meetings, special speaker series, and student run free clinics."
    }
  },
  {
    dUlE6gCg9FPxOEjgSmOhtlsXNBn2: {
      clubName: "Gift of Life at UCSD",
      contactEmail: "fooshimprov@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8361",
      description:
        "The purpose of Gift of Life at UCSD is to raise awareness for the bone marrow donation process. In collaboration with the Gift of Life Marrow Registry, one of the nation's public bone marrow and blood stem cell registries, Gift of Life at UCSD organizes events, campaigns, trainings, and seminars to register new potential donors, raise monetary funds, and educate the community about the bone marrow donation process. Gift of Life at UCSD is dedicated to expanding the bone marrow registry and supporting those who have been affected by cancer."
    }
  },
  {
    GPVRar3YfgVWBarWRrr5pYAODRN2: {
      clubName: "Gamma Zeta Alpha Fraternity Inc",
      contactEmail: "frn@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11951",
      description:
        "The mission of Gamma Zeta Alpha Fraternity, Inc., a not-for-profit corporation built on the foundation of respect and brotherhood, is to establish and promote a nurturing environment at the university level and beyond, through academic excellence, community service, and the celebration of the diverse Latinx Culture."
    }
  },
  {
    bDNA6zrDLsTbbPne33lJZEdzJXy2: {
      clubName: "FUSION Hip-Hop Dance Events Association",
      contactEmail: "fs.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8606",
      description:
        "The FUSION Hip-Hop Dance Events Association is a student organization involved in the cultural, social, community, and academic projects that benefit its members, its campus, and its community. The goal of FHHDEA is to educate and celebrate the unique Asian American cultural identity and its major presence in the emerging hip-hop dance communities along the west coast at UCSD. FHHDEA aims to recognize excellence in the UCSD hip-hop dance community, west cost dance communities, support dancers, and provide performance opportunities for dance to be shared among dancers and audiences all over the nation and beyond."
    }
  },
  {
    jxFrRAbzYcdzVT7q92SAMr7xvbe2: {
      clubName: "Global Medical Missions Alliance",
      contactEmail: "fushengtheater@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8523",
      description:
        "Part 1. Leave a positive and profound impact for Christ by guiding and equipping students with training and networking opportunities so they may serve as effective healers and ministers of Christâ€™s love. Part 2. Foster a unique community and fellowship among peers and mentors committed to medical mission and healing ministry. Part 3. Become the next generation of healthcare professionals â€œpoured out as a drink offeringâ€ for the Gospel. Part 4. To provide various Medical Mission opportunities around the globe with the main focus, to further Godâ€™s kingdom."
    }
  },
  {
    "9XLPbnQgbiSDMJKURHCfXRAqZlL2": {
      clubName: "Global Medical Training",
      contactEmail: "fusionhhdc.coords@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11928",
      description:
        "Global Medical Training (GMT) is an international, non-profit, and humanitarian organization that provides free medical, dental, and veterinary services in developing communities in parts of Central America and Mexico. Students are given the unique chance to directly participate in â€œhands-onâ€ diagnoses and treatments under the supervision of medical professionals. This is the reason why our motto is â€œLEARN BY DOING.â€ As a health-focused organization, our main purpose is to increase awareness of the lack of healthcare in third world countries by giving undergraduate students the chance to expand their understanding of life and medicine outside the United States. This is made possible by educating and exposing students to the prevalent global and medical issues that many underserved communities in developing countries face. Such issues include poverty, poor national health-care systems, and the various circumstances that contribute to and perpetuate a specific populationâ€™s situation. GMT also understands there are major health issues that reside right in our own community. It is this very reason why we also offer our students the opportunity to volunteer in various community service events including free health fairs servicing the underprivileged in the Los Angeles and surrounding counties. Altogether, GMT views student volunteers as a vital force for change. After all, they may be the next generation of health-care providers."
    }
  },
  {
    jeHNgjh7KAdIpR3BJHMTKSysLv93: {
      clubName: "Tritons Film Society",
      contactEmail: "gbitton@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8537",
      description:
        "The purpose of the club is to provide an environment where University of California San Diego students can discuss and watch films with their fellow peers."
    }
  },
  {
    A719MDVofwUBObbEyTem82yGBd23: {
      clubName: "Hanbit Church",
      contactEmail: "gccsdcampusfellowship@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9644",
      description: "To invite Korean American college students to worship."
    }
  },
  {
    "3SajlfN5GPgWmcp88QGcqI2yfl12": {
      clubName: "Hawaii Club",
      contactEmail: "gcf@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8398",
      description:
        "Promote cultural awareness of Hawaiâ€™i, other Polynesian Islands, and their people, spread the â€œAloha Spiritâ€ across UCSD's campus, serve as a support group for incoming students from Hawaiâ€™i and other Polynesian Islands, and provide a social haven for any UCSD student seeking friends. We work together throughout the school year in preparation for our Annual Lu'au in the Spring."
    }
  },
  {
    wBg1T7zKH7c0Pcn7YjM4Hj9v2fe2: {
      clubName: "GradWIC",
      contactEmail: "ghpadvising@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10724",
      description:
        "The objective of GradWIC shall be twofold. First, to foster an innovative, informative, and comfortable environment to advance the interests of and address the concerns of graduate students, primarily those who identify as women and underrepresented minorities in computing fields. Second, to provide general resources as well as an inclusive environment to graduate students in any computing-related field (ie. Computer Science and Engineering, BioInformatics, Cognitive Science, etc.) at the University of California, San Diego."
    }
  },
  {
    tqcTmsBJrqQhWafC6PYGf3Bdwps1: {
      clubName: "GROW UCSD",
      contactEmail: "gmtucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8354",
      description:
        "Grow at UCSD will provide a forum for the collaboration of student gardens on campus."
    }
  },
  {
    IkQ7Okta0jOK1Mt5u431Lpa0wZg2: {
      clubName: "Global Health Program Student Representatives",
      contactEmail: "golgin@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11918",
      description:
        "The Global Health Program Student Representatives are charged to advise the Global Health Program on issues related to undergraduate education, including but not limited to courses, curriculum, instruction, student involvement opportunities, research opportunities and student programs."
    }
  },
  {
    HJ8LKhQqDsXE2vflh21luemYw3H3: {
      clubName: "Rotaract Club at UCSD",
      contactEmail: "graduateprograms@rady.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8442",
      description:
        'The purpose of Rotaract is to follow Rotary International\'s motto of "Service Above Self." We are devoted to organizing and participating in both local and international service events. In addition, we strive to prepare our members for the future by offering professional development, leadership, and networking opportunities.'
    }
  },
  {
    vhiWYGyazSUyvl7GNnz278vj7WE3: {
      clubName: "Health Care Frontiers",
      contactEmail: "greencorps@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8425",
      description:
        "The frontiers of healthcare come from inspired under-represented communities, who embrace the humanization of healthcare for the providers, not just the patients. That begins with the pre-med and pre-health education experience. Our organization seeks to provide pre-professional resources to under-represented communities through programs put on by our HOPE committee, and humanistic pre-health education through programs by our MedTalks committee. UCSD is known as for its strong emphasis in the sciences, and many students aim to pursue careers in the health sector. Additionally, UCSD hosts a diverse set of motivated students who are interested in pursuing these careers and come from non-traditional backgrounds. For these minority, first generation, and/or financially disadvantaged students, HOPE organizes informational events and programs that provides resources and support to ensure a successful path to oneâ€™s health profession of choice. Through Medtalks we host a series of informational seminars, in which speakers from different careers in the healthcare world come to educate students about what they do, and how to pursue similar careers. For students pursuing MD, PharmD, and DDS degrees, we host informative sessions about current internship opportunities and certifications they can hold while still in college. For all undergraduates interested in healthcare, come and learn about the different degrees available, which schools offer them, and how a career in health may interest you. Furthermore, the purpose of our MedTalks committee is to provide students with information regarding stress and burnout prevention, as well as providing team building exercises in which pre-health students can have positive peer interactions."
    }
  },
  {
    keIUmkPTY6esGImeqDT1XVag2Kl2: {
      clubName: "Health Guardians of America",
      contactEmail: "groundworkbookscollective@yahoo.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10693",
      description:
        "Health Guardians of America is a health nonprofit creating solutions to nationwide healthcare issues. The current national health campaign focuses on the nationwide obesity epidemic as a clinical risk factor for chronic illnesses and diseases such as cerebrovascular, cardiovascular, and diabetes mellitus. FitlifeFlow is our flagship health project that enables a rewards-based health program for consistent exercise per recommendations by the Center for Disease and Control (CDC) and U.S. Surgeon General. It is a personal health pledge to exercise three times per week, with a minimum of 30 minutes per session, over the course of five consecutive weeks. Our Goals 1. Decrease the obesity risk among youth and young adults to preserve longevity and quality of life. 2. Influence the appropriate lifestyle change and develop healthy decision-making at an early age. 3. Educate participants on the importance of sustained health management and self-care. Our mission is to tackle one of the most pressing health issues in America through the development of sustainable public health solutions using modern technologies, the deliverance of effective health education to general population, and the empowerment of student communities to produce positive change."
    }
  },
  {
    Lpi2zpETPTWWZkFYGfIl9F5XOkD3: {
      clubName: "Healthcare Advice and Mentorship",
      contactEmail: "growucsd@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8411",
      description:
        "Pursuing a career in healthcare begins with a pre-health education experience and is furthered by mentorship and advice throughout this experience. Our organization seeks to aid all paths to health care through programs put on by our Peer Mentorship UCSD is known as for its strong emphasis in the sciences, and many students aim to pursue careers in the health sector. But there is more to health than getting an MD, PharmD, or DDS. There are dozens of other careers, our SEARCH committee is here to let you know about! Additionally, the Peer Mentor Program is designed to help pre-health undergraduates navigate life at UCSD as a pre-health student both academically and socially. By fostering meaningful, long-lasting relationships between different levels of the student body, the goal of the program is to ultimately increase the number of UCSD pre-health majors admitted into their desired health professional school."
    }
  },
  {
    U0hVLkadoCgBByK4oqoOKe5YPFM2: {
      clubName: "Hindu Yuva",
      contactEmail: "healinghands@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11926",
      description:
        "The purpose of this organization is to promote, preserve, and celebrate the ancient and rich Hindu culture while also giving its members and affiliates a platform to connect and collaborate with the local Hindu community. The organization aims to become a cultural hub for one of the oldest religions in the world, which both basks in the wisdom of ancient traditions and shines with modernity in its approach towards society and the world at large. Hindu Yuva aims to provide support to students throughout their stay in San Diego, from moving in to exploring life in San Diego. By harnessing the inclusiveness of the organization, Hindu Yuva hopes to help the students not just in their academic journey but also in their professional and social development."
    }
  },
  {
    RE1RLsOle7PtRaFMcWbCBdnFGpC3: {
      clubName: "Insight Pre-Optometry",
      contactEmail: "hek055@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8377",
      description:
        "To provide UCSD students interested in the field of optometry with the information, support, and opportunities necessary to learn about the profession, the schools of optometry, and the application process."
    }
  },
  {
    "": {
      clubName: "Undergraduate Investment Society",
      contactEmail: "hello@tritonxr.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11945",
      description:
        "Provide training and mentorship programs that empowers members to the obtain financial literacy and business acumen needed to excel in various roles within the most competitive firms globally."
    }
  },
  {
    UCgAUMr4HTglHvfPfcUyX5apaWw2: {
      clubName: "Duly Noted",
      contactEmail: "hello@ucsddesign.co",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10649",
      description:
        "To provide a supportive environment in which singers can enjoy and participate in musical activities, specifically vocally."
    }
  },
  {
    nrgdN1suNHUYHt1JwyewV0raL7E3: {
      clubName: "Cambodian Student Association",
      contactEmail: "hhirata@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8438",
      description:
        "We, a non-profit organization called the Cambodian Student Association (CSA), believe that by (1) building and strengthening identification of the Cambodian culture among fellow members, students and community at large, (2) offering consistent academic, social and moral encouragement through activities and community service and (3) developing social networks that will assist us during our time in college and in our lives thereafter, we will have established rare relationships and support systems based on common principles and values with fellow members who share common interests."
    }
  },
  {
    WNDhVHUwsTRt7WN1YUZULvAsfDo2: {
      clubName: "Fair Play Theatre Company",
      contactEmail: "hkn@eng.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8353",
      description:
        "Fair Playâ€™s purpose is to provide more performance opportunities for the students of UCSD by producing theatrical productions every quarter. Additionally, we seek to foster a fun, fair, and professional creative environment. Fair Play also hopes to emulate a professional theatre company at the undergraduate level. Furthermore, we aim to create an inclusive community of students, from all backgrounds, that come together to create theatre in unexpected ways."
    }
  },
  {
    HlJ3rpdYn0S7v3zbnaUojNOHdKt1: {
      clubName: "Imports@UCSD",
      contactEmail: "hmongstudentassocitation.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10783",
      description:
        "As a car club at the University of California, San Diego, Imports@UCSD aims to build a community for car enthusiasts to gather and share their collective knowledge about automobiles and motor sports. Our goals include teaching members about various aspects of automotive knowledge while constructing a network to develop strong connections in the automotive industry. We also strive to create a safe environment where we can test and improve the performance of our cars as well as our driving skills. Highly discouraging street racing, Imports@UCSD gives members the opportunity to go to the race track to satisfy their high performance driving needs. Using all of these resources and connections, members of Imports@UCSD can become strong leaders who are extremely knowledgeable in the automotive field and enthusiastic about everything they do. Even the slightest passion for cars will not be overlooked and is all that one must posses to become a proud and capable member of Imports@UCSD."
    }
  },
  {
    lMwkvzqmnHTww6NsLf0WOEcTepD3: {
      clubName: "Hmong Student Association at UCSD (HSA at UCSD)",
      contactEmail: "hmp3.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10712",
      description:
        "The Hmong Student Association at UCSD is a cultural organization that unifies Hmong college students to promote and increase awareness about the Hmong culture/identity among the UC San Diego students, staff, and community. In addition, we foster and support the retention of Hmong students in higher education at all levels surrounding UC San Diego."
    }
  },
  {
    ssUA92AlSlWTeJVkhOxyl0qBuon2: {
      clubName: "Homeless Charter, The",
      contactEmail: "hmp3.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8368",
      description:
        "The purpose of The Homeless Charter is to raise awareness for the homeless community in San Diego through engaging, hands on activities. The organization seeks to promote service to the greater community of San Diego, unity within the student body of UCSD, while breaking down stigmas of homelessness and providing support for homeless individuals. The Homeless Charter is a non-profit student organization."
    }
  },
  {
    XAHI7RxsEFfxUoyDa394vHOw7Uw1: {
      clubName: "Hong Kong Student Union",
      contactEmail: "hmp3.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8546",
      description:
        "The goal of the organization is to create a platform to fuse the traditional Chinese culture with the new-fangled Western ideals. Our vision is to promote the welfare of the Cantonese-speaking Chinese student body. We also identify the student body with social issues in the interests of Hong Kong people in hopes to promote cultural awareness of Hong Kong. We also provide a social environment for those who want to stay in touch with the Chinese culture as well as those who want to find acceptance and sense of belonging in the States."
    }
  },
  {
    Ai3ocodi0DPkr66HDrFVwwQC0OH2: {
      clubName: "Groundwork Books Collective",
      contactEmail: "hok033@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9628",
      description:
        "A political collective and non-profit bookstore that provide progressive literature and camaraderie for students and activists who hope for changes and a better world."
    }
  },
  {
    gfd2aEvbxOaS56JgpkmIjSZ2vUO2: {
      clubName: "Iaido at UCSD",
      contactEmail: "hsfucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10779",
      description:
        "UCSD Iaido seeks to promote awareness and preservation of the Muso Jikiden Eishin-Ryu branch of Japanese swordsmanship."
    }
  },
  {
    "5dAes2MH0GQmx5pgZ0MWFRlA4YL2": {
      clubName: "International School Students Association (ISSA)",
      contactEmail: "icra@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8555",
      description:
        "The primary purpose for ISSA is to serve as a social platform for students who attended international schools in high school as well as any other students interested in differing cultures and global mindsets. We will plan social events for these students to meet one another and get acquainted. This org will also act as a support network for students who might be far away from their home and their family while studying at UCSD."
    }
  },
  {
    ZNH0a0cJVpZgW1jln712BEo67kI2: {
      clubName: "International Family Union",
      contactEmail: "ieee@eng.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11998",
      description:
        "IFU (International Family Union) is a student organization currently made up of undergraduates in order to provide better campus safety and to share the latest information with parents."
    }
  },
  {
    c8vbxRFgboQZsujdf5WpCuE1m9v2: {
      clubName: "International Society for Pharmaceutical Engineers (ISPE)",
      contactEmail: "ifcpresident@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8571",
      description:
        "Our purpose is to bring professional development to students in the pharmaceutical, biotechnological, and related industries. Thus our members will be offered resume/interview building workshops, networking events with industry professionals, industry tours, discussion panels, and much more."
    }
  },
  {
    JXPLbmZUQkXWsD4SPQdy7jc68xe2: {
      clubName: "Its On Us at UCSD",
      contactEmail: "ifu.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8583",
      description:
        "Itâ€™s On Us at UCSD is a chapter of the national movement, Itâ€™s On Us. The purpose of Itâ€™s On Us at UCSD is to combat sexual violence and harassment, especially sexual assault, within the UCSD community. The goal of this organization is to engage students on the topics of sexual assault awareness, survivor support and bystander intervention. Areas of our work include, but are not limited to: consent, prevention, bystander education, and healthy relationships. Itâ€™s On Us at UCSD will achieve its goals through education and outreach, events and projects, and activism and advocacy."
    }
  },
  {
    mWMT0Q3HGuYszAO5ExJ56BR2AsS2: {
      clubName: "The Youth Movement Against Alzheimers",
      contactEmail: "igem.synbio.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10827",
      description:
        "To promote understanding of Alzheimerâ€™s and healthy aging among youth and young adults by providing unique opportunities to volunteer with those afflicted by Alzheimerâ€™s and advocate for change. Our purpose is to raise funds for research and support treatment and care, ultimately contributing to the movement in finding a cure for this neurodegenerative disease."
    }
  },
  {
    tjF4sp6AAHMZk24IY3dqiXEyGSw2: {
      clubName: "Inter Varsity Christian Fellowship",
      contactEmail: "ignite.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8463",
      description:
        "To establish and advance a witnessing community of students and faculty who follow Jesus as Lord and Savior: growing in love for God, God's word, God's people of every ethnicity and culture and God's purpose."
    }
  },
  {
    a85YjTgy2QfmJUHQHDM0IkOYqps1: {
      clubName: "IUSM (International Undergraduate Student Ministry)",
      contactEmail: "igsm.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9611",
      description:
        "We are a fellowship that strives to build a Christ centered community on campus, primarily with International undergraduate students, but everyone is welcome. We meet weekly for Bible studies & prayer and worship on campus on Sundays. Our vision is to share the gospel and students to spiritually thrive during college."
    }
  },
  {
    fETRtZVpz0PZTn9Rnsu6Cvq4LUv2: {
      clubName: "Kappa Kappa Gamma",
      contactEmail: "ihp@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8407",
      description:
        "To build and provide bonds of friendship, mutual support, respect for intellectual development, and an understanding and allegiance to positive ethical principles."
    }
  },
  {
    R0xUxmD3XjPyc1GhjaVMnyKhlml2: {
      clubName: "Intergenerational Connections",
      contactEmail: "imem.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10680",
      description:
        "Intergenerational Connections is a non-profit student organization consisting of volunteers who believe that engaging seniors through various creative activities to promote healthy aging. Students will work one-on-one with seniors and community members."
    }
  },
  {
    AlXA7tTbjiPcfgJLqF3BdiaqYrn1: {
      clubName: "Inter-College Residents Association (ICRA)",
      contactEmail: "imports@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10751",
      description:
        "The purpose of ICRA is to serve the on-campus residents of all residential areas at the University of California, San Diego, hereinafter referred to as UCSD. This body will plan educational, social, community service, and diversity programs to unite these residents as well as make recommendations for the enhancement of residential living. In addition, ICRA will serve to unite the residence committees of all residential living areas. ICRA will promote leadership opportunities and encourage college and residential area representation. It is the purpose of ICRA to help students grow as leaders and to unite the residents of all of UCSDâ€™s residential areas. ICRA is a non-profit organization."
    }
  },
  {
    X3BKcOGC4udQF3yCs2iE3SDLBna2: {
      clubName: "Master Baking at UCSD",
      contactEmail: "info@lighthousebc.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10668",
      description:
        "To cultivate an atmosphere of collaboration through the fundamentals of baking."
    }
  },
  {
    D11snMzWpyMo97WIdweN8nuzuxo2: {
      clubName: "SangamSD",
      contactEmail: "info@rocketproplab.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8573",
      description:
        "UC San Diego's largest South Asian organization, SangamSD aspires to promote South Asian cultural awareness and education within the UCSD community and beyond. SangamSD's goals of uniting South Asians at UCSD as well as spreading diversity, tolerance, and the understanding of all South Asian cultures is reflected through its numerous social, cultural, and educational events."
    }
  },
  {
    OVKgqiVtsdX4aq4DmAM21QJkBnA3: {
      clubName: "APD Consulting Club at UCSD",
      contactEmail: "info@ucsdanthroclub.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10755",
      description:
        "The APD Consulting Club at UCSD has the following objectives: â€¢ To inform graduate-level students about possible careers in consulting â€¢ Prepare graduate-level students to attain consulting jobs â€¢ Provide a career building resource focused on consulting â€¢ Create an alumni network of advanced professional degree consultants from UCSD"
    }
  },
  {
    btBZy9FBIWdFvxqxWUoD8pOUkbl1: {
      clubName: "International Christian Fellowship-West",
      contactEmail: "insight.ves@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9612",
      description:
        "In response to God's love for all people, we are here to establish student-led international witnessing communities, which welcome international students and scholars."
    }
  },
  {
    a6kaMEMc9xfk5saUAZj1dYiCnEi1: {
      clubName: "International Studies Student Association (ISSA) at UCSD",
      contactEmail: "intergenerationalconnectionssd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8380",
      description:
        "The organization gathers like-minded individuals who share diverse interests in international studies and international relations. We aim to not only be a resource hub, but also build community and meaningful connections among our peers. ISSA intends to provide a platform of rich experiences and opportunities in international studies, including: -Networking, social, and pre-professional events, including collaboration with UCSD's undergraduate and graduate departments -ISP Peer Mentorship program supported by the ISP Advising Office -Research opportunities with UCSD faculty and graduate students -Resources for studying, working, and interning abroad -Public events, conferences, and workshops for research, social awareness, international development -Service projects and fundraising for international causes -Student and alumni panels"
    }
  },
  {
    "13vPYchPoqWP185eNR1liExEyih1": {
      clubName: "Intersectional Health Project - San Diego",
      contactEmail: "intermissionUCSD@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11978",
      description:
        "The mission of Intersectional Health Project (IHP) is to promote grassroots community efforts within communities of Greater San Diego."
    }
  },
  {
    AWOAI0hKFJgD0EYxhttBBGIh93K3: {
      clubName: "StRIVE",
      contactEmail: "iotachapter.president96@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10652",
      description:
        "Our program focuses on breaking down the wall that separates those with disabilities from their non-disabled peers. It is unique in its unification of the peer-mentorship of young adults with mental and physical disabilities and their transitional community education. We primarily work with students ages 18-22 with disabilities through partnership with the Transitional Resources for Adult Community Education (TRACE) department of the San Diego Unified School District. Our student volunteers serve as teachers that target three critical areas imperative to independent living: communication, health awareness, and vocational skills. They also serve as mentors who participate in recreational activities and field trips that supplement the studentâ€™s community education. Our program is open to all UCSD undergraduates who are interested in empowering and bonding with other students their age with a wide range of disabilities."
    }
  },
  {
    AeXZMN2DyBbhoxOezMBbevRx89o2: {
      clubName: "Young Minds",
      contactEmail: "irbanchangemakers@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10777",
      description:
        "To provide guidance for high school students, especially underrepresented minorities, to enable for them to succeed in school and their future careers"
    }
  },
  {
    AmKkSU8ZoyLkbn7Kplch7Ci8PHI2: {
      clubName: "Kappa Sigma",
      contactEmail: "isc@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12095",
      description:
        "A non-political, non-religious and non-profit social organization commited to the embodiment of Fellowship, through brotherhood; Leadership, inside and outside of our organization; Scholarship, by aiding scholastic excellence; and Service, by aiding those at our university, in our community, and in the world through community service and philanthropy in order to become better men."
    }
  },
  {
    ErE6Cxk2pNcOSqy4PBeOl3Bu6zh1: {
      clubName: "Kappa Alpha Pi",
      contactEmail: "ispe.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8409",
      description:
        "The purpose of this Fraternity shall be to foster knowledge of the law for undergraduate students; to provide service to the greater community and campus; to promote a strong sense of fraternalism among members; to uphold the ideals and integrity of Kappa Alpha Pi Pre-Law Co-ed Fraternity; so that each member may advance [their] intellect while contributing actively to the well-being of others."
    }
  },
  {
    boo5Ba3SUkVwq2L1XI7UWV6mYdD2: {
      clubName: "Intermission Orchestra",
      contactEmail: "ispgucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11923",
      description:
        "The Intermission Orchestra is a student-run organization dedicated to playing music from films, video games, and Japanese animation. We hold a concert every quarter for UCSD students to enjoy their favorite pieces."
    }
  },
  {
    "6pjXX3AXOKR0sakbEIMb339phRs2": {
      clubName: "Kappa Alpha Theta",
      contactEmail: "issaexec@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8439",
      description:
        "The first greek letter fraternity for women, Kappa Alpha Theta strives to create an inclusive social and educational environment. Our mission is to offer women lifelong opportunities for intellectual and personal growth and create the widest influence for good."
    }
  },
  {
    KasYoiftU0OcxvJ0GQ6JzftuvrG2: {
      clubName: "Daughters of Triton",
      contactEmail: "ista@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10752",
      description:
        "To bring together and create a female-identifying a cappella group within the UCSD community. To provide students who are interested in a cappella music an outlet through performances and/or a group to belong to."
    }
  },
  {
    "0gJkLNUJZThU3GMhQBiAlmYiA8C3": {
      clubName: "Phi Lambda Rho Sorority, Inc.",
      contactEmail: "istaucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10655",
      description:
        "The purpose of Phi Lambda Rho Sorority, Inc. is to promote academic excellence within its members, provide sisterhood, engage in community service, with emphasis in the Chicano (a) and Latino (a) community, and to instill the importance of retaining its roots for the sake of its identity by promoting the Chicano (a) and Latino (a) culture."
    }
  },
  {
    EBABT0z2AqhmWdE1grkYtcIQXIg2: {
      clubName: "Interaxon at UCSD",
      contactEmail: "ivtriton@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8604",
      description:
        "To provide underserved public schools (K-12) in San Diego County with interactive and educational activities/presentations about neuroscience in order to foster an interest in higher education and STEM."
    }
  },
  {
    UdVKU8DfXTMPySgQKcFl51kF6YL2: {
      clubName: "We The Redeemed",
      contactEmail: "j3fung@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10809",
      description:
        "Provide a Christian environment and circle for UCSD students through activities such as worship, prayer, bible study, and fellowship."
    }
  },
  {
    TbVwGx2nITRROrmefBo9MKuDGly1: {
      clubName: "Lambda Chi Alpha",
      contactEmail: "jnc012@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11939",
      description:
        "Lambda Chi Alpha is a greek social fraternity as accepted by IFC."
    }
  },
  {
    WgoDLoxHOURwa7bkwWtFdts98OT2: {
      clubName: "Klesis",
      contactEmail: "jpcaffairs@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8568",
      description:
        "The purpose of this organization is to present Christian doctrines to the students of UCSD through weekly, midweek Bible Studies and fellowship times."
    }
  },
  {
    qGekSU2kASY19PrK86FzUVLRX8o1: {
      clubName: "Lambda Theta Alpha Latin Sorority, Inc.",
      contactEmail: "jpk001@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12031",
      description:
        "The purpose of Lambda Theta Alpha shall be to provide a sisterhood based on unity, love and respect in an effort to foster the development of strong leaders who will then provide and practice political, social and cultural activities. It shall also be the purpose of Lambda Theta Alpha to promote unity through charitable and educational programs, maintain a higher standard of learning and serve as a voice for all students."
    }
  },
  {
    v15HXUKv8IRXYTpacbbHTGBYiUj1: {
      clubName: "Model United Nations at UCSD",
      contactEmail: "jzx005@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8430",
      description:
        "Model United Nations members simulate the United Nations by role-playing diplomats and forming delegations to attend conferences. At these conferences, students debate global issues, conduct speeches, draft resolutions, form political alliances, and resolve critical international problems. In doing so, Model United Nations students are exposed to international relations and its application in today's society, which expands their understanding of the world and becoming global citizens."
    }
  },
  {
    E2Qb9y7201g9IhpYfc9Fox05Xjw1: {
      clubName: "Video Game Development Club",
      contactEmail: "karandeepjune4@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10826",
      description:
        "The Video Game Development Club seeks to bring students who are interested in the process of video game design and development together in a collaborative environment. Students can develop games from start to finish with their peers, and seek feedback and assistance with ideas and projects they may be working on."
    }
  },
  {
    ryxeJccTfONSFZY1yXKIr07M4IG2: {
      clubName: "Kommon Society",
      contactEmail: "kat.ucsd.president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8406",
      description:
        "Kommon Society is a student organization for Korean and Korean-American undergraduate students with social science majors. Kommon Society aims to: 1) establish an academic environment among Korean and Korean-American students with Social Science majors; 2) facilitate a mutually beneficial network among students with same majors and career goals; 3) provide opportunities for various academic and professional experiences to prepare each individual's future; and 4) promote interest in contemporary global issues throughout the campus."
    }
  },
  {
    G5KGmUGzzGRzKT2LHwG9Z88pfCY2: {
      clubName: "Latin Dance Project",
      contactEmail: "kgsa.at.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12075",
      description:
        "The purpose of this organization is to celebrate and bring Latin dance and music to UCSD students and the community through productions, performances, workshops, and events on campus and beyond, as well as weekly training sessions with a dance professional, and to promote diversity, equity, and inclusion by creating a space for all to celebrate Latin dance, music, and culture."
    }
  },
  {
    Mw35AXzaNiYv84E5e2C3wY3QeEv2: {
      clubName: "Korean Graduate Student Association (KGSA)",
      contactEmail: "kidznextdoordance@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11991",
      description:
        "Korean Graduate Student Association is the organization of the Korean graduate students, research staff, post-docs, professors, visiting scholars, and visiting professors at the University of California, San Diego (UCSD). The KGSA aims to promote unity and harmony among Korean people at UCSD and to support them in various ways. The main activities of the organization include assisting new incoming students with settlement, holding seasonal/ holiday/ sports events, and providing members with various kinds of useful information on the job market and life around campus. We welcome any kind of supports or contributions from individuals, organizations, and companies that could further consolidate the Korean community at UCSD and contribute to sound relationship between our members and society in general."
    }
  },
  {
    xkhq41Wg53hRCQiMWo6cX34fCis2: {
      clubName: "Amateur Radio Club at UCSD (KK6UC)",
      contactEmail: "kk6uc@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8595",
      description:
        "The purpose of the Amateur Radio Club at UCSD, licensed through the Federal Communications Commission (F.C.C.) as KK6UC and officially affiliated with the American Radio Relay League (ARRL), is to provide UCSD students and staff with tools and opportunities to explore and enjoy the hobby of amateur radio. KK6UC is a member-focused club that can host licensing classes, teach different modes of radio, participate in contests, collaborate with other amateur radio organizations, and perform general experimental wireless communications. The club was founded on campus as WA6DOT (later KI6FTQ) in fall 1965 by Michael C. Ransom WB6KMH (now AI6II) and run for many years by Brian Kantor WB6CYT. The club recently completed the 25-foot tall Gap Titan HF antenna atop Atkinson Hall for its new HF station, greatly adding to its on-campus RF capabilities."
    }
  },
  {
    "9VcKrLTo13cVqJzotO7mf7TzX132": {
      clubName: "Korea Campus Crusade for Christ (KCCC)",
      contactEmail: "kkgpresidentucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10722",
      description:
        "To help further the Great Commission at UCSD by making disciples and equipping them with the skills necessary to live out a Christian life after college. Activities will include bible study, worship sessions, and morning prayers. K.C.C.C is a non-profit, non-denominational Christian organization."
    }
  },
  {
    IhZ1It3IiuRuVo0CY9HQgSbJJuG2: {
      clubName: "Kyrie Eleison",
      contactEmail: "kojobs.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8372",
      description:
        "We, Kyrie Eleison at UCSD, are a student-run Catholic ministry that fosters spiritual growth for students seeking faith, identity and fellowship within the Catholic Church."
    }
  },
  {
    ELvAtHYiC9MHv3Agzb5B3nvG2N72: {
      clubName: "League of Tritons",
      contactEmail: "kotx@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8482",
      description:
        "Our club seeks to provide both a recreational, social, and competitive community for players of the game League of Legends within UCSD and the greater San Diego area. By providing an environment of social interaction, friendly competition, and in-game support, we seek to give all of our members a positive gaming experience and the competitive drive to succeed in any gaming or non-gaming endeavor."
    }
  },
  {
    GDPha76x1UUGs5xlmUBMJZxf2gf1: {
      clubName: "Lambda Theta Nu Sorority, Inc.",
      contactEmail: "KSEA.YG.UCSD@GMAIL.COM",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10667",
      description:
        "The purpose of Lambda Theta Nu Sorority, Inc. shall be to open doors of opportunity to the Latinas of our community. Our primary focuses are academic excellence and meeting the needs of Latina women in higher education. Lambda Theta Nu Sorority, Inc. also promotes the advancement of Latinas through various campus activities and community services and provides an environment for personal growth within a unit of sisterhood. Lambda Theta Nu Sorority, Inc.â€™s priorities, however, will be placed upon academic excellence and community service."
    }
  },
  {
    G3nf7jhonJMs8SxnyxshXzmbASy1: {
      clubName: "Morning Sign Out",
      contactEmail: "kteh@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9646",
      description:
        "Morning Sign Out (MSO) is an online publication that strives to turn science and medicine into something understandable for the greater public, providing them enough critical information that leaves them more knowledgeable than before."
    }
  },
  {
    "87eqh3uqSPS4iTLl05gMK4r8x4d2": {
      clubName: "Panhellenic Association",
      contactEmail: "lambda.president@nakinc.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8451",
      description:
        "To oversee the 11 Panhellenic and 1 Affiliate Chapters within the Panhellenic Council. These chapters are: Alpha Chi Omega, Alpha Epsilon Phi, Alpha Omicron Pi, Alpha Phi, Chi Omega, Delta Delta Delta, Delta Gamma, Kappa Alpha Theta, Kappa Kappa Gamma, Phi Sigma Rho (Affiliate), Pi Beta Phi, and Sigma Kappa."
    }
  },
  {
    IwM4Agz8BtV8txkmmUf0SppaJt33: {
      clubName: "Major Map Initiative",
      contactEmail: "leagueoftritons@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11855",
      description:
        "The Major Map, in the form of an interactive website, will create an informative framework helping undeclared majors choose the right major, and giving new students a more comprehensive way to understand how their major develops over their undergraduate career. It will also outline real world applications of course material, and share career experience by UCSD alumni to give more insight on a major's purpose. Upon its fruition at UCSD, the goal is to spread this framework to other schools across the country."
    }
  },
  {
    "36Hih4ibDgXo3MUBEEyKHrnNAqx2": {
      clubName: "Camp Kesem",
      contactEmail: "lhorstick@calpirgstudents.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8497",
      description:
        "Camp Kesem at UCSD provides a free summer camp to children ages 6-18 in the San Diego community who have/had a parent with cancer."
    }
  },
  {
    KK9XIsYrryVdVDfVwNDzAry8eB02: {
      clubName: "Medical Literature Society at UCSD",
      contactEmail: "lingua@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8529",
      description:
        "The Medical Literature Society at UCSD strives to promote the understanding of a career in medicine through a biomedical, psychological, and social perspective. We also encourage pre-medical and pre-health students to form a stronger community with each other and reach out to other students with similar career aspirations."
    }
  },
  {
    "0fz3pq0VHGM8KwYFpoGdeFpdZil2": {
      clubName: "Linguistics Undergraduate Association (LINGUA)",
      contactEmail: "lta.etagamma@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8375",
      description:
        "Our purpose is to unify linguistics majors, minors and interested students through scholarly discussion, social activities and faculty interaction. We aim to foster a warm, inviting environment in which to explore academic and occupational opportunities within UCSD Linguistics department and beyond."
    }
  },
  {
    dNMSuL2rfAYH44hX02GNCaBvmw52: {
      clubName: "Voto Latino",
      contactEmail: "Lucero@mikelevin.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10705",
      description:
        "Voto Latino is a national non-profit organization that seeks to transform America by recognizing Latinosâ€™ innate leadership. Through innovative digital campaigns, pop culture, and grassroots voices, we provide culturally relevant programs that engage, educate and empower Latinos to be agents of change. Together, we aim to build a stronger and more inclusive democracy."
    }
  },
  {
    gZGMtTIVjURWHrZa4d4h8JmDjli1: {
      clubName: "Baha'i Club",
      contactEmail: "maw076@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10653",
      description:
        "To promote awareness about The Baha'i Faith and promote the unity of mankind."
    }
  },
  {
    lttdo7zXLtctM1GHKV4OrS2rwx93: {
      clubName: "NanoEngineering and Technology Society",
      contactEmail: "mechadeucsd69@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8423",
      description:
        "NETS is a non-profit student organization which facilitates communication and cooperation on nanotechnology and science. We work with NanoEngineering students, faculty members, non-major students and outside industry stakeholders. We provide opportunities for academic development, professional growth, and networking."
    }
  },
  {
    sKQD1ALypdhck8k5xADnPmAhc3J2: {
      clubName: "Rising at UCSD",
      contactEmail: "meconomo@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10761",
      description:
        "Rising, inspired by the Vagina Monologues and TheirStories, exists as a safe space for students to share their experiences with identifying in a minority group, while raising awareness of various forms of oppression and actively trying to reduce them. It is our goal to raise a substantial amount of funds for charity each year by producing a performance-based show that will be the culmination of the stories of our members and those around our community."
    }
  },
  {
    B6uCBnaM3qTNFtmnjYIK5PlX2I02: {
      clubName: "Mixed Student Union",
      contactEmail: "memosd3@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10825",
      description:
        "Mixed Student Union at UCSD will have the purpose to increase and highlight cultural exchange amongst members and campus at large, as well as create a welcoming and inclusive community for people of mixed identities. MSU strives to create community for those students who feel they may not fit into traditional cultural spaces."
    }
  },
  {
    RDAxaanXMmNqSU0pUixt4fLy0u62: {
      clubName: "Microtomes",
      contactEmail: "mgault@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8561",
      description:
        "Microtomes is an academic journal club centered within the Division of Biological Sciences that aims to introduce students to cutting edge topics in biology and facilitate scientific critical thinking through peer-moderated discussions of recent publications."
    }
  },
  {
    c3Foi00SFINPxjB6pOOpJRdjnaZ2: {
      clubName: "Neurodegenerative Disease Awareness Association (NDAA)",
      contactEmail: "mgcpresident@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8470",
      description:
        "The purpose of this organization is to educate its members on specific neurodegenerative diseases, their current treatments, and ongoing cutting-edge research for them, as well as inspire members to support these causes through raising money for their institutions, raising awareness at both the high school and college levels, and volunteering."
    }
  },
  {
    cxGkNfwb8gg49sGNniW6dMFk1Uu2: {
      clubName: "Muir Quarterly, (MQ) The",
      contactEmail: "microtomes.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8559",
      description:
        "The Muir Quarterly publishes a satire/humor newspaper at UCSD and also provides social events for the student body."
    }
  },
  {
    QbbBRgucFsacFYI471k4L5AO6go1: {
      clubName: "United Taiwanese Association",
      contactEmail: "moa821@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8519",
      description:
        "United Taiwanese Association (UTA) is an Asian-interest student organization at UC San Diego. UTA was established in 1992 and aims to provide a sense of home for overseas Taiwanese students and a platform for those interested in learning about Taiwan. As a sociocultural club, we host many events throughout the school year for people to catch up with friends and meet new people."
    }
  },
  {
    WwE3aJmmetPvCgdo06H1YlwK5oy1: {
      clubName: "Rubiks Cube Club",
      contactEmail: "moseskodur@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11895",
      description:
        "To bring cubers and non-cubers together to learn more about solving the Rubik's cube, cuboids, or any other puzzles."
    }
  },
  {
    pngC4cMsl5bpxrl0qUmb8fYYGBs2: {
      clubName: "Muslim Student Association",
      contactEmail: "mso.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10658",
      description:
        "The Muslim Student Association at UCSD strives to facilitate character building, humanitarian work, and social justice through educational and social avenues founded on Islamic standards of personal conduct and community. The organization aims to maintain an inclusive environment, to unite with allies, and to retain members in order to nurture a diverse generation of Muslims who are cognizant and pragmatic members of society."
    }
  },
  {
    "5DUOmdI3pFZYt6nVFi69slQl0Mq2": {
      clubName: "Psi Chi/Psychology Club",
      contactEmail: "mtv002@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8478",
      description:
        "Psi Chi is the international honors society of psychology whose mission is to provide students opportunities for leadership, scholarship, community service, and research. The UC San Diego chapter supports these opportunities by allowing students to form and join committees of interest as well as having a panel of officers who consistently present opportunities for professional growth. Being a registered member of the organization means a student has lifelong access psychology fellowships, scholarships, a career database, submission access to a peer-reviewed academic journal, and opportunities to present at the annual WPA and APA conferences. While Psi Chi has criteria for joining including a minimum GPA, amount of completed psychology courses, and a major or minor of psychology being a requirement, the UC San Diego chapter welcomes all students. Students who do not meet these minimum requirements (including new transfer students,) are welcome to join the chapter by being psychology club members. At meetings both Psi Chi and psychology club members work together using Robertâ€™s Rules of Order to vote on the direction of the chapter for the academic year. Students will be able to participate in experiences that can aid them in becoming stronger applicants for graduate school, attend workshops, view guest speakers, gain leadership skills, and help people in need within the San Diego community through service projects."
    }
  },
  {
    EPTPXOJgWbQCOC7CyQmGRAHPo3H2: {
      clubName: "Musicians Club @ UCSD",
      contactEmail: "muhexinli@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8349",
      description:
        "Our purpose is to give an outlet for music lovers to share and express their passion for music, to allow musicians to collaborate and learn from one another, and to give musicians of all levels the experience of performing with others in front of an audience."
    }
  },
  {
    pn2fffEGDUh9ibuwFg5N22oLqzx2: {
      clubName: "National Residence Hall Honorary",
      contactEmail: "muir.musical@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8552",
      description:
        "The purpose of the National Residence Hall Honorary is to serve and recognize individuals, groups, and programs on campus that contribute to the success of residential life at UC San Diego."
    }
  },
  {
    Yhdg8czJ2zTy7rwWlb77pRRKLvd2: {
      clubName: "No Lost Generation at UCSD",
      contactEmail: "musiciansclub.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10689",
      description:
        "No Lost Generation (NLG) is an organization supported by the U.S. Department of State that focuses on advocating child protection and education for the youth affected by the global refugee crisis. NLG aims to promote awareness through networking opportunities with NGOs, IGOs, and aid groups, fundraising, and volunteering directly with local and virtually contacted refugees. NLG-UCSD hopes to encourage student humanitarian efforts within the San Diego community and abroad through collaboration with university students across the U.S., government agencies, and international organizations."
    }
  },
  {
    N1B2N9pcWgNzcUyZvC4EqyfsKZz2: {
      clubName: "Okinawa Karate Do at UCSD",
      contactEmail: "netsatucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10781",
      description:
        "The Okinawa Karate-do at UCSD seeks to promote and preserve traditional Okinawa Karate."
    }
  },
  {
    btaFNb675uTZyzeDaPXJMXdKqNl1: {
      clubName:
        "Out in Science, Technology, Engineering, and Mathematics (oSTEM)",
      contactEmail: "newlifelajolla@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8448",
      description:
        "Out in Science, Technology, Engineering, and Mathematics (oSTEM) is a nationally recognized organization that is geared towards the personal and professional development of queer or LGBTQIA+ students who are interested in Science, Technology, Engineering, and Mathematics through social, educational, professional, philanthropic, and outreach programming. It is also focused on helping students throughout UCSD and San Diego connect to a broader community of queer folks (students and professionals) whose academic interests lie in similar fields."
    }
  },
  {
    eohxFILHtJV1h9kjAZBobq4LmI33: {
      clubName: "Open Dyalog",
      contactEmail: "nrhhchair@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10807",
      description:
        "Open Dyalog is a platform for students to share perspectives and experiences in an open discussion. Through a comprehensive training program, students can become facilitators to lead these conversations. Organizations across campus can request these dialogues in their community to promote deeper understanding and empathy."
    }
  },
  {
    T3UkID5fPte1RvjGvHrAuDInQJJ2: {
      clubName: "Triton Actuarial Society",
      contactEmail: "nuk002@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8509",
      description:
        "Our mission is to encourage students interested in the actuarial field to pursue this profession by providing them with different resources, such as, workshops, exam preparation/study sessions, and networking opportunities with business professionals."
    }
  },
  {
    m0gek3XVX8Z4KFqGWlXQWJnhqIk1: {
      clubName: "Glory Church Campus Fellowship",
      contactEmail: "nupresident.gammas@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8366",
      description:
        "The mission of this organization is to promote the Gospel of Jesus Christ, to promote faith in the Trinity God and His Bible, and to promote love and peace within communities with voluntary services."
    }
  },
  {
    cgUZngveX6ZSFYKIyy0aW8oZj1p2: {
      clubName: "PARSA",
      contactEmail: "oceanloversucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10729",
      description:
        "The Persian Association for Rendering Science and Art (PARSA) at UCSD is a non-profit organization and independent of any political or religious beliefs. Activities of PARSA includes following purposes: I. Increase the general public awareness regarding Persian Art and Science II. Promote the Iranian/Iranian-American young and senior scientists and artists III. Bring Iranian/Iranian-American Scientist and Artist on-campus towards fostering young talents and show casing for general awareness."
    }
  },
  {
    KvaV6OHUf1PxhLVZs0Tl5M5VKEk2: {
      clubName: "Triton Prosthetics",
      contactEmail: "officialucsdtt@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10814",
      description:
        "To increase independence and mobility for those with amputations and limb differences through the research and development of low cost, accessible prosthetics."
    }
  },
  {
    ONpNli3mDUa0qncUfVaan5jIQRG3: {
      clubName: "Taiwanese Graduate Student Association",
      contactEmail: "onestop@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10714",
      description:
        "Taiwanese Graduate Student Association at UCSD is a social-oriented organization, but also culturally and academically based. The purpose of TGSA is to build up and strengthen social networks, to encourage academic merits of its members, and to promote Taiwanese and Asian culture."
    }
  },
  {
    ZCKAM6Ca4CWjZBoDQBY2AIO0Hqy1: {
      clubName: "PERIOD. at UCSD",
      contactEmail: "opendyalog@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8473",
      description:
        "PERIOD. at UCSD is one of the many chapters of PERIOD., a national youth-led non-profit organization that strives to break down the stigma of menstruation while providing menstrual hygiene products to those in need. PERIOD. at UCSD aims to help lead PERIOD.â€™s â€œMenstrual Movementâ€ by advocating for equal access to menstrual hygiene products, educating others about this cause, and participating in service events. By hosting fundraisers to raise money for purchasing menstrual products, and by conducting donation drives, PERIOD. at UCSD will acquire the resources needed to create menstrual hygiene product care packages. All proceeds will then be donated to local San Diego recipient organizations that support homeless individuals in need of these packages. PERIOD. at UCSD also plans to incorporate educational components regarding the disparity in peopleâ€™s access to menstrual hygiene products during General Body Meetings (GBMâ€™s) and tabling events. Furthermore, PERIOD. at UCSD strives to make the discussion around menstruation a more comfortable topic, regardless of a personâ€™s identity. PERIOD. at UCSD believes that access to menstrual hygiene products should be a basic human right, and not a luxury or a privilege."
    }
  },
  {
    Y0SrEX2ZrueNMKGB1h1Ax0pjYLL2: {
      clubName: "Persians Pursuing Pre-Health Professions",
      contactEmail: "origamifoldersucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8464",
      description:
        "Persians Pursuing Pre-Health Professions at UCSD (or Pre-Health Persians) wants to unify the Iranian community on campus through students who are passionately in pursuit of a deep sense of shared community, cultural identity, and also a future in health professions as we use our time together in our undergraduate years to prepare for our journeys to dental, medical, osteopathic, optometry, and pharmacy schools. We hope to form a symposium of like-minded students where we can be able to critically educate and mentor one another about the health issues pertaining, but not limited, to Iranians and in the Middle East, and to come together to fill each other with insight and support as we begin the path of seeking a career in health care."
    }
  },
  {
    "34YSoyrvfnSUzYNGyQNbphQTSqo2": {
      clubName: "Persian American Student Association",
      contactEmail: "os-ucsd@eng.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10801",
      description:
        "The Persian American Student Association (PASA) at UCSD intends to unify the undergraduate Persian community on campus in pursuit of a deeper sense of cultural, historical and communal identity. We hope to provide a forum, composed of individuals concerned with Iran and the Iranian diasporas irrelevant of background, where students can critically educate one another through educational, cultural, and social events. We also aim to engage Persian-American students with Persian their roots and culture."
    }
  },
  {
    adc6yjcMaiYu8190QDMOa8EeHpj2: {
      clubName: "Phi Beta Lambda at UC San Diego",
      contactEmail: "osu@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8543",
      description:
        "Mission Statement: To bring business and education together in a positive working relationship through innovative leadership and career development programs."
    }
  },
  {
    azcdisz4mWSqE71M4gh2pfdMPgN2: {
      clubName: "Phi Delta Theta",
      contactEmail: "pagasa.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12046",
      description:
        "Helping every individual to meet his true potential is the bedrock of the Phi Delta Theta Fraternity. By celebrating each personâ€™s true self, and by learning from each otherâ€™s strengths while helping to improve each otherâ€™s weaknesses, every member of Phi Delta Theta develops into a greater version of himself than he could ever on his own. Rather than try to find young men to â€œmoldâ€ into some ideal, we celebrate the uniqueness of each individual and, through encouragement, values, example and brotherhood, empower every brother to exceed his personal expectations."
    }
  },
  {
    fEklRzGwa5OsetX8M6zCDwsvdVe2: {
      clubName: "PISA: Pacific Islander Student Association",
      contactEmail: "pdtcakpresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12090",
      description:
        "The goal of the organization is to provide a sense of community for students at UCSD who either identify as pacific islanders or wish to be a part of the pacific islander community. The organization will seek to promote and perpetuate pacific islander culture on campus. Members of the organization will gain a safe space in which they can meet with their fellow Pacific Islander UCSD peers to gain emotional and academic support"
    }
  },
  {
    LoqPsB1ESCesAIjzLUzSVgjfMYD2: {
      clubName: "Phi Sigma Pi",
      contactEmail: "pepitos@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8384",
      description:
        "Phi Sigma Pi National Honor Fraternity is a co-educational honor fraternity with the purpose of fostering the ideals of scholarship, leadership and fellowship."
    }
  },
  {
    CZ8C6mYpUpakv5dS1lGAJt92lOL2: {
      clubName: "Phi Sigma Rho",
      contactEmail: "period.atucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11981",
      description:
        "Phi Sigma Rho is a social sorority for women in engineering and engineering technology. Through Phi Sigma Rho, our sisters develop the highest standard of personal integrity, strive for academic excellence, and build friendships that will last a lifetime."
    }
  },
  {
    oj7YTpQKOYZ51Y8pWCVw41p6yDC2: {
      clubName: "Phi Iota Alpha Fraternity, Inc.",
      contactEmail: "phcadmin@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10824",
      description:
        "Phi Iota Alpha Fraternity, Inc. is the Oldest Latino Fraternity in Existence. The history of Phi Iota Alpha Latino Fraternity is the history of all Latino college students and professionals who strive to keep their intellectual heritage alive. Phi Iota Alphaâ€™s vision is La UniÃ³n De La Patria Latino Americana and our mission is the promotion of personal, community, and Pan-American development through the ideals of Pan-American intellectuals and their philosophies. We believe in a commitment to the Latin American culture which involves intellectual development, cultural consciousness, personal growth, personal achievement, and social awareness."
    }
  },
  {
    "1ceS31zx6mZOxAZBWNwvmGdQPwu2": {
      clubName: "Pi Kappa Phi",
      contactEmail: "phide.cabeta@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8373",
      description:
        "Our mission is to create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of our communities. We envision a future where every Pi Kappa Phi embraces his role as a leader, puts service before self and improves the world around him."
    }
  },
  {
    lbxEUBdHVbQFHYD8tfjlze5hVz12: {
      clubName: "Project BELL",
      contactEmail: "pikappucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10795",
      description:
        "Project B.E.L.L. (Boundless, Empowered, Lifelong Learners) is a dynamic initiative that strives to develop lifelong learners and active citizens who make a lasting impact in their neighborhoods, communities, and world at large by using education as a creative platform. Our programs seek to empower school-age youth from underserved communities by creating opportunities for them to take part in creating a safe and sustainable learning environment. In the course of effectuating change in underrepresented communities, our program strives to offer college students the freedom to apply what they have learned in a real world setting and the opportunity to be inspired by volunteering. We focus on Bell Middle School located in Chula Vista, hoping to increase the number of students who continue to high school each year."
    }
  },
  {
    vKKCIe0tLJeCqKzTYYPfi3eCAM53: {
      clubName: "Project Kilimanjaro",
      contactEmail: "PISA@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8383",
      description:
        "The purpose of this organization is to promote the health and wellness of women and children internationally. Our current project focuses on increasing accessibility to healthcare for Maasai Villages on the base of Mt Kilimanjaro through HIV/AIDS seminars, First-Aid Resouces and Education, High risk Pregnancies Prevention and Childcare, and the Pad Project. These projects will culminate into building a pediatric wellness center in rural Tanzania for 87 Maasai villages on the base of Mount Kilimanjaro. Members of this organization will get a chance to volunteer in Tanzania to build the pediatric wellness center and promote the preceding four projects through our partner program, Maisha Arts Development and African Girl Foundation."
    }
  },
  {
    FXgiPkT1xAMvyt4DhCjaMYZjSnQ2: {
      clubName: "Prospect - The Journal of International Affairs at UCSD",
      contactEmail: "pokemonucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10685",
      description:
        "PROSPECT is an undergraduate journal of international/transnational affairs at the University of California, San Diego. Serving as a forum for intelligent discourse relating to international and transnational affairs, the journal showcases works created by undergraduates who wish to broaden their understanding of issues of contemporary and global relevance."
    }
  },
  {
    O8DOEOQkdmVK3ZdIYOJWJLyCrn13: {
      clubName: "Project RISHI",
      contactEmail: "ppgaatucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8503",
      description:
        "Project RISHI at UCSD aims to promote sustainable development and growth of rural Indian communities. In partnership with local community members and social enterprises, we identify issues central to our target community and provide resources to implement solutions through extensive field research and on-campus initiatives. We are a diverse group of passionate and energetic individuals moving forward the dialogue on equity and resilience through our projects. We hope to transform rural Indian areas into modern and sustainable communities while providing UCSD undergraduates with exposure to international philanthropy and the challenges faced in rural India."
    }
  },
  {
    "48JjqKMgnRRQ81mta1QJqQUYPaJ3": {
      clubName: "Pushpanjali",
      contactEmail: "pps@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8357",
      description:
        "To promote, explore, and to showcase classical Indian styles like Bharatanatyam, Kuchipudi, Kathak, and many more other styles in a way that can reach out to all cultures and people."
    }
  },
  {
    "1PQ3bU0gFAc14ybsolNK6vJQnTJ3": {
      clubName: "Pi Beta Phi",
      contactEmail: "prehealthpersians@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12034",
      description:
        "The mission of Pi Beta Phi is to promote friendship, develop women of intellect and integrity, cultivate leadership potential and enrich lives through community service."
    }
  },
  {
    "6KebBhHFSBY2JiLxSva0GMv22633": {
      clubName: "Pokemon League at UCSD",
      contactEmail: "president.ucsd.phiota31@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8424",
      description:
        "The purpose of Pokemon League at UCSD is: *To bring members of the Pokemon community together and create a social setting for anyone interested in anything related to Pokemon. *To provide a safe space for people within the Pokemon community, regardless of race, background, sexual orientation, gender, and religious association."
    }
  },
  {
    LtY8QfH5NkZmpZrHEVIjRjbvQal1: {
      clubName:
        "Speech, Physical, and Occupational Therapy (SPOT) (formerly P-PT/OT Society)",
      contactEmail: "president.ucsdsopi@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12088",
      description:
        "To provide a gateway into the physical, occupational, and speech therapy fields through providing information about SPOT programs, preparing students for the application process, hosting speakers from the field and social networking."
    }
  },
  {
    ZvAI2UR67uczLe7lv3ehnYJOekr1: {
      clubName: "Alpha Phi Omega",
      contactEmail: "president@aporhopi.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9613",
      description:
        "Alpha Phi Omega is a co-ed service fraternity organized to provide community service, leadership and social opportunities to college students. The purpose of this fraternity is to assemble college students in a national service fraternity in the fellowship of principles derived from the Scout Oath and Law of the Boy Scouts of America; to develop leadership, to promote friendship and to provide service to humanity; and to further freedom that is our national, educational and intellectual heritage"
    }
  },
  {
    WMGWjn5BxgXoQhv78kXeEVMWqZ82: {
      clubName: "Society of Undergraduate Mathematics Students (SUMS)",
      contactEmail: "prior.ucsdsam@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10679",
      description:
        "SUMS provides resources, workshops, talks, and social events for UCSDâ€™s mathematics community with the goal of promoting mathematics and related fields."
    }
  },
  {
    veJiAKBnJtT8uBkWQJ5mtt48yAz2: {
      clubName: "Queer Graduate Student Association",
      contactEmail: "projectkiliforkids@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9600",
      description:
        "The Queer Graduate Student Association was created to build community for graduate students who identify as lesbian, gay, bisexual, transgender, queer, intersex, asexual and other marginalized identities (LGBTQIA+)."
    }
  },
  {
    "0glJFNKQJYR2Q9TU7MGYtlTQLoW2": {
      clubName: "Quiz Bowl Club at UCSD",
      contactEmail: "prospectjournal@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8577",
      description:
        "To promote and participate in quiz bowl competitions throughout the United States."
    }
  },
  {
    EeOgh0qSMgRqHeWlaiuukkiYiqX2: {
      clubName: "Phi Gamma Delta",
      contactEmail: "psaucsd@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11868",
      description:
        "We, the founding fathers of the Chi Lambda Chapter of UCSD will endeavor to provide an opportunity for friendship, scholarship and service to our members now and in the future. We seek excellence. We believe that the Phi Gamma Delta Chapter we bring back to UCSD must take into account the unique circumstances of our university and our student body. In order to be successful we must adapt our program to be in harmony with other campus constituencies, such as our student athletes and student leaders."
    }
  },
  {
    jkyXrLpR1eXLgfDDcPcU0hf3m7f2: {
      clubName: "Ratio Christi at UCSD",
      contactEmail: "psichi@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12020",
      description:
        'Meetings consist of moderated discussions about "life, the universe, and everything" All are welcome. Attendees are from a wide variety of religious and philosophical perspectives. Please contact us if you are interested in participating. Ratio Christi is focused on bringing sound Christian apologetics to the campus through weekly meetings and special events. Meetings providing a safe and charitable venue for atheists, agnostics, skeptics, and adherents to any religion to investigate the claims of Christianity, discuss religious beliefs, and seek truth without fearing reprisal while forming friendships. Yes, this is a distinctly Christian organization, but any student is able to become a member and learn, debate, and explore the connection of faith and reason. Please join this effort.'
    }
  },
  {
    UdJF5DBprwX3VYNjHKOvHbBpOFi2: {
      clubName: "Rady Student Association",
      contactEmail: "psichiomega@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10844",
      description:
        "The mission of the Rady Student Association (RSA) is to encourage a thriving academic and social environment by providing leadership opportunities that empower and inspire, advocating on behalf of student interests, and coordinating all student-run activities for the Rady School of Management. RSA will serve as a link between the academic experience and the business world. RSA shall provide a forum for students to directly impact administrative policy matters while overseeing the development and maintenance of a strong community and pride in the Rady School of Management."
    }
  },
  {
    od5aSGd7YkavrDM3sM1h0N4FlWt2: {
      clubName: "Pre-Health Professionals Club",
      contactEmail: "psp@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10776",
      description:
        "Pre-Health Professionals Club strives to gather Health Professionals and support them by creating a family environment for students to learn and develop as individuals and professionals."
    }
  },
  {
    cXqPt7z369gOhESfgwBcr7kAzyF2: {
      clubName: "Redeemers Grace Church",
      contactEmail: "qtpocucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8420",
      description:
        "We are part of a local church called Redeemer's Grace Church of San Diego. We seek to proclaim the gospel of Jesus Christ and one of our ministries is to the college campus of UCSD."
    }
  },
  {
    "04WFGu9NBZRbksjSq5CmUvu0gEC2": {
      clubName: "Role Playing Games Club",
      contactEmail: "quidditchucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8462",
      description:
        "To encourage networking among the gaming community and introduce the UCSD community to role-playing games."
    }
  },
  {
    GN6WTkFeokQrI0e2zYd9FuXQLss1: {
      clubName: "Catholics for Social Justice",
      contactEmail: "r6walker@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10665",
      description:
        "We, the Catholics for Social Justice at UCSD, as an affiliate of the Newman Center Catholic Community at UCSD, a mission of the Roman Catholic Bishop of San Diego, have a mission to spread Godâ€™s love and to care for our brothers and sisters in Christ through community service, education, and support for the San Diego community, as well as communities across the Mexican border."
    }
  },
  {
    fSF5FJsje7e66kTWtgXkCmCuZeq1: {
      clubName: "Salsa Society",
      contactEmail: "razagrad@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8486",
      description:
        "The purpose of this page is to connect the Salsa/Bachata dancing community here at UC San Diego. We hope to create a clean and interactive environment here where students can share their love for dance or outreach to other students about any upcoming dance-related events. Any direct form of advertising made by people who are not students will not be acceptable and will be removed from the page to ensure that the quality of the page is kept as organic and genuine as possible. Weekly classes are held every Saturday from 6-8PM in Rec Gym. Keep on the lookout for our social dancing events this quarter on this page! The intention of the group is to bring new people into the salsa scene. Salsa dancing improves social skills, cognitive capacity and the ability to shake one's booty! It's ironically a highly effective stress reliever as well! What can you do to help? Invite your friends! Together we can break the UCSD trend of being known as the UC of the Socially Dead."
    }
  },
  {
    ULpaBBFS5EYmcGPnSCZpc1KMgPL2: {
      clubName: "Samskrita Bharati UCSD",
      contactEmail: "redcrossatucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10842",
      description:
        "The group brings together people trying to learn Samskritam as a spoken language. Samskritam is a language of ancient India with a 3,500 year old history. The body of Sanskrit literature encompasses a rich tradition of philosophical and religious texts, as well as poetry, music, drama, scientific, technical and other texts. This group will provide an opportunity to speak the language among peers in the group and get support from experts in other organisations like Samskrita Bharati USA."
    }
  },
  {
    PFqNw9mqh7fA1eZ4PxUIAOj94523: {
      clubName: "Mustard Seed Project, The",
      contactEmail: "redliners@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11916",
      description:
        "The Mustard Seed Projectâ€™s mission - guided by a â€œhand up, not hand outâ€ philosophy - is to create a student model that connects unsheltered and low-income individuals to services and programs through outreach, research, and education."
    }
  },
  {
    XShu63gARjZNpdyQIQpg6aFKCWr2: {
      clubName: "Saltman Quarterly",
      contactEmail: "remakeucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8479",
      description:
        'The purpose of "Saltman Quarterly" (SQ) is to provide a medium for undergraduate students at UCSD to publish biological research as well as communicate new advances in the field of biology, encompassing topics ranging from medicine to ecology. SQ also provides authors and staff members with the skills needed to communicate science effectively to both biology and non-biology majors.'
    }
  },
  {
    lrlrptvUNORZfS4XG0wdxH0lmtJ3: {
      clubName: "British Student Association",
      contactEmail: "rferrari@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11938",
      description:
        "The purpose of this organization is to bring together the British student community and others interested in Great Britain together. The organization strives to practice and present British culture through social outings, historical cultural events, and British food."
    }
  },
  {
    bsLzwYN5FRO9Thye7nAgLTMCfjm1: {
      clubName: "CS foreach",
      contactEmail: "rhenein@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10818",
      description:
        "CS foreach is a community outreach, student organization which aims to resolve the problems of equity and access in regards to Computer Science education among the underserved communities of San Diego. In resolving this issue, CS foreach will take an active role to support and initiate efforts to teach Computer Science education and cultivate mentorship between college students and K-12 students."
    }
  },
  {
    yAcNODGgs2SbvvnpyNdfgYQj5d83: {
      clubName: "Quidditch",
      contactEmail: "rishi@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10694",
      description:
        "To share in our passion for Quidditch and Harry Potter as a community, by having fun."
    }
  },
  {
    hgYvdBW5SuRXoZeCuv61bwuOelo1: {
      clubName: "San Diego Indonesian Association",
      contactEmail: "risingucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8605",
      description:
        "To promote Indonesian culture to University of California, San Diego community through social and other nonÂ­profit events. To create camaraderie between the members. To build a network with other Indonesian clubs."
    }
  },
  {
    XKezwbE8ngdk26Hy1jU4gMQJ2kI3: {
      clubName: "Alpha Omega",
      contactEmail: "rlim@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11906",
      description:
        "A diverse and thriving community of believers who strive to encourage one another daily and help each other follow Jesus, while also seeking to make Him known to others around campus. Connected to a Bible-based local and international church."
    }
  },
  {
    "58IfTl3SA8QR7wChpodJr4pBs7i1": {
      clubName: "Tritons for Bernie 2020",
      contactEmail: "robosub@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8547",
      description:
        "To foster a grassroots movement on campus to help get Bernie Sanders into the White House"
    }
  },
  {
    F8yqS6x76IdRIdy6E0njuk6UHch1: {
      clubName: "Cornerstone Community Consultants",
      contactEmail: "rogerscommunitygarden@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8488",
      description:
        "To assist and serve aspiring business leaders by bridging the gap between faith, community, and business opportunities through connections."
    }
  },
  {
    Q1eEJ7qSRBXIiNwlC18rzKthrNb2: {
      clubName: "Sigma Alpha Epsilon",
      contactEmail: "rpg@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8481",
      description:
        "Sigma Alpha Epsilon strives to give young men the leadership, scholarship, service and social experiences they need to excel in the walls outside their campus and once they graduate. We firmly believe membership is for life. In addition, we strive to mold our members into gentlemen so they can set an example in today's society."
    }
  },
  {
    QhzXxGvwr7O7t6hRKC2Bi2pI88o1: {
      clubName: "Sigma Alpha Mu Fraternity",
      contactEmail: "rptpatucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11920",
      description:
        "To unite each undergraduate member toward a more meaningful life, to prepare members for responsible fraternity and community involvement."
    }
  },
  {
    fwL5qBcpYGW7KucfWqyaYq9J0ry1: {
      clubName:
        "Korean American Scientists and Engineers Association - Young Generation",
      contactEmail: "rylui@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8362",
      description:
        "KSEA-YG stands for Korean American Scientists and Engineers Association - Young Generation. Our parent organization was first established in 1971 to promote international cooperation between scientists and engineers in Korea and the US by providing career development and community service opportunities in the areas of science, technology, and entrepreneurship. More information about our parent organization can be found on the web: www.ksea.org. As a student chapter of KSEA, our organization foster communication among and provide assistance to Korean-American students in STEM field."
    }
  },
  {
    "5F3lwdQcokfUm4rafJwB6KR2cwH2": {
      clubName: "Sigma Phi Epsilon",
      contactEmail: "salsasocietyucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8581",
      description:
        "To impress upon its members the true significance of fraternal relationships and to create and perpetuate friendship among all persons in the chapter. To develop and strength the character of its members; promote the principles of Virtue, Diligence, and Brotherly Love; and preserve the ideals upon which this fraternity was founded. To instill upon those principles which are the responsibilities of an individual as a member of society."
    }
  },
  {
    SivJrBMqHWZDzyH6r5Ld92S60Gz2: {
      clubName: "Sigma Pi Alpha National Sorority, Inc.",
      contactEmail: "saltman@biology.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10849",
      description:
        "Sigma Pi Alpha is a Chicana/Latina based sorority that focuses on community service, campus involvement, and sisterhood and within these components we stress academics and cultural awareness. We hope to provide women with the means to access higher education and to provide women on campus with community service opportunities and academic, personal, and individual support. Although we are a Chicana/Latina based sorority, our sisterhood reaches out to all different ethnicities."
    }
  },
  {
    vdClLoqST2aGK3usVugkWzOcE292: {
      clubName: "Tau Kappa Epsilon",
      contactEmail: "sami.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12060",
      description:
        "To contribute to the advancement of society through the personal growth of our members and service to others."
    }
  },
  {
    HbSsIa14eETunfJNMNl909281GI3: {
      clubName: "Sleepless Collective",
      contactEmail: "sandiegohhi@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9599",
      description:
        "Mixing urban dance and hip hop dance, Sleepless Collective aims to connect with people through dance and create humble community leaders and innovative performances."
    }
  },
  {
    h7VFcWpfcUMZ9c8KtX5w2D8aA882: {
      clubName: "Society of Asian Scientists and Engineers at UCSD",
      contactEmail: "sangamucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9620",
      description:
        "The Chapter is committed to preparing members for success in the global business world, celebrating diversity, and contributing back to the community. The objectives and goals of the Chapter shall be to: 1. Support and develop programs that provide for the advancement of Asian heritage scientists and engineers. This goal shall be implemented by: -Career Workshops -Seminars and Symposia that focus on bettering the employability of members by bolstering the soft skills of members, working on their resumes, and teaching interview skills. 2. Develop and support programs that aid Asian heritage scientists and engineers who are actively seeking careers. -Interactions with potential employers -Tutoring/Curriculum assistance -Mentoring programs 3. Provide a forum for professional development and for the connection with entrepreneurial opportunities. 4. Inform the public of contributions and advancement made by Asian heritage scientists and engineers in newsletters and awards ceremonies."
    }
  },
  {
    pRNo1YP0YcPOEy4CHUVW3S44dyt1: {
      clubName: "Sikh Student Association",
      contactEmail: "saramach@ucsd.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11907",
      description:
        "To promote awareness of Sikhism and inform others of its principles while building a close knit community."
    }
  },
  {
    WzTniA5A9fbKS9qsEc7e71KbZSG3: {
      clubName: "Society of Women Engineers (SWE)",
      contactEmail: "saztheta@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8444",
      description:
        "Motivate women to achieve full potential in careers as engineers and leaders, expand the image of the engineering profession as a positive force in improving the quality of life, and demonstrate the value of diversity."
    }
  },
  {
    zEtNJD5aiKVDkTTg0nkI9e75elh2: {
      clubName: "The BEAD Program",
      contactEmail: "scejucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10748",
      description:
        "The Bracelets for Empowerment And Development (BEAD) Program aims to provide widowed women in rural regions of Nigeria with the skill set of jewelry making as a source of economic and health security. In collaboration with the Faith Alive Foundation and Thrive Ministry and Mission, the BEAD Program has two main objectives: (1) To be an integral skills acquisition program and source of financial independence for both widows and younger women in rural Africa; (2) To produce revenue for the women that in part will be used to buy long-lasting insecticidal nets (LLINs) for the prevention of mosquito-borne disease in the local community, as well as investment in infrastructure in the womenâ€™s villages."
    }
  },
  {
    Rq54DL6HnQShE5JWSdFpoInLk7u1: {
      clubName: "Hearthstoners at UCSD",
      contactEmail: "scott.im@sdhanbit.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8467",
      description:
        "Hearthstoners at UCSD seeks to provide a recreational, social, and competitive community for players of online card games within UCSD and the greater San Diego area, specifically Hearthstone. By providing an environment of social interaction, friendly competition, and in-game support, our goal is to give all of our members a positive gaming experience and the competitive drive to succeed in any gaming or non-gaming endeavor."
    }
  },
  {
    jJpthWjLW0fZlP5Yy8JPntua9pu2: {
      clubName: "Student Organization for Activism and Represenation",
      contactEmail: "scse.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8414",
      description:
        "Student Organization for Activism and Representation (SOAR) strives to increase awareness on prevalent issues that affect underrepresented communities through various modes of community service. Additionally, the Student Organization for Activism and Representation is committed to educate UC San Diegoâ€™s undergraduate students on concerning issues to inspire their own sense of activism. The Student Organization for Activism and Representation is inclusive to all undergraduate students who share a passion for our mission and are devoted to positively impacting the community."
    }
  },
  {
    "2gvI55314uaEIXne1vg63OvvUPB2": {
      clubName: "Sitaare",
      contactEmail: "sdacucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8557",
      description:
        "Sitaare is UCSD's premier South Asian fusion A Cappella team. Since our inception in 2006, Sitaare has taken pride in its diverse vocal talent, continuing to explore ways to showcase variety and creativity in our repertoire. We enjoy performing various genres of both Indian and Western music, from Bollywood and Indian classical, to R&B and pop. In addition to competing in the Desi A Cappella circuit in prestigious competitions at Berkeley, Los Angeles, Dallas, Boston etc and the national All American Awaaz championship in Chicago, as well as UCSDâ€™s annual cultural events, Sitaare has also had the opportunity to perform at community events, weddings, and corporate events in San Diego, the Bay Area, and beyond. Sitaare always looks to push the boundaries of Desi a cappella, and reach for the stars."
    }
  },
  {
    auiYnd5jwsWyY4X7r7fCBsuwBTc2: {
      clubName: "Alpha Kappa Psi",
      contactEmail: "sdakpsi@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8358",
      description:
        'The object and purpose of Alpha Kappa Psi Fraternity, Inc. (the "Fraternity") shall be to further the individual welfare of its members; to foster scientific research in the fields of commerce, accounts and finance; to educate the public to appreciate and demand higher ideals therein; and to promote and advance in institutions of college rank courses leading to degrees in business administration.'
    }
  },
  {
    "1umNfSkNGOb5yzI8tBXOEgb2pbw2": {
      clubName: "Social Entrepreneurship Association",
      contactEmail: "sdindonesianassociation@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10711",
      description:
        "The Social Entrepreneurship Association is a collegiate organization that empowers students to discover meaningful and fulfilling work that satisfies their economic aspirations and creates a positive social impact on the world. The association welcomes its members to a network of motivated, empathetic change makers; fosters knowledge about local and global social issues; provides opportunities to partner with socially conscious businesses on impactful consulting projects; offers an education and training on key business skills; and spreads awareness about career paths that help others including benefit corporations, foundations, nonprofits, corporate social responsibility divisions, and more. The Social Entrepreneurship Association was founded at the University of California, San Diego in 2018 and aspires to grow nationally in order to empower all students to discover meaning, fulfillment and service in their careers."
    }
  },
  {
    "1IyqZkrWodVXij8mMVzdvQcndvB2": {
      clubName: "Student Housing Association",
      contactEmail: "sea.ucsd1@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10828",
      description:
        "To advocate for affordable housing on behalf of all UCSD student housing residents; To keep students informed through housing data analysis and facilitating access to housing information; To help students connect with classmates and neighbors; To hold student housing events such as town halls; To allow students to make their voice heard about campus housing."
    }
  },
  {
    zOWi3rIYDWaJSHKt0iupTlnkoHK2: {
      clubName: "Pi Alpha Phi",
      contactEmail: "sehyaei@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12017",
      description: "Asian American Interest Fraternity"
    }
  },
  {
    "0HRjhupgIJXhp9yFcVgUcGaQj332": {
      clubName: "Society of Civil and Structural Engineers",
      contactEmail: "sendforcsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8580",
      description:
        "The Society of Civil and Structural Engineers (SCSE) is the UC San Diego student chapter of the American Society of Civil Engineers (ASCE) and the Structural Engineers Association of San Diego (SEAOSD). Our purpose is to supplement the engineering education of UCSD students, promote the personal and professional development of our members, and improve the community of which we are part through outreach and community service."
    }
  },
  {
    hd81vhXkEdPlsyMLOmApimiXplu2: {
      clubName: "Taiwanese American Student Association",
      contactEmail: "sha@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8490",
      description:
        "The Taiwanese American Students Association (TASA) at the University of California â€“ San Diego is an organization that provides a sense of community for Taiwanese Americans, as well as those interested in the Taiwanese culture. We create a sense of unity not only within the Taiwanese community here in San Diego but also with students at other universities. Our organization promotes cultural awareness by building a community of motivated and dedicated students through our social, cultural, and service activities that take place throughout the year. The Taiwanese-American identity is a vastly varied one and at times a divisive issue. Moreover, there is political and cultural apathy among much Taiwanese, and under-representation in our communities. Yet, from those who barely identify themselves as Taiwanese, to those who feel passionately about Taiwanese culture, they are all still unified under a common background. Those with the Taiwanese-American identity have the potential to develop into a tight-knit community and strong leaders with a unified voice in this nation."
    }
  },
  {
    nWRrM0KsPbT1BrWbaJupDaXpWRt2: {
      clubName: "Tae Kwon Do Club at UCSD",
      contactEmail: "shacoordinator@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8603",
      description:
        "The purpose of the Tae Kwon Do Club at UCSD is to provide a means through which members can practice and learn the art of Olympic Style Taekwondo in a fun and safe manner. The Club is part of an established intercollegiate organization (National Collegiate Taekwondo Association) and intercollegiate leagues (SoCal, PacWest), with goals of competing intercollegiately. The Club is also dedicated to building a community supporting health and fitness, as well as practicing teamwork, leadership, and sportsmanship."
    }
  },
  {
    v87wHdFPQtWOY29br9RExMPTapG3: {
      clubName: "Student Veterans Organization",
      contactEmail: "shpe@eng.ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11863",
      description:
        "The mission of the Student Veterans Organization is to be the touchstone and support network for the UCSD veteran community in order to ensure their personal, professional, and academic success."
    }
  },
  {
    eJQfr8BlkibqaUg5L8OTaz5VjLK2: {
      clubName: "Teo-Chew Association",
      contactEmail: "sjpucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8474",
      description:
        "The Teo-Chew Association is a nonprofit student-run organization committed to the rich history and culture of the Teo-Chew American community and serving college-age youth. The following goals compose the Teo-Chew Associationâ€™s mission statement and purpose: â€¢ To increase awareness about Teo-Chew culture and language â€¢ To unite the Teo-Chew community on campus and beyond â€¢ To advocate for the preservation of Teo-Chew and Chinese culture and history for the general welfare of the Teo-Chew community"
    }
  },
  {
    e7mK014PeWMjYIEpq7wk5ETF5Tj2: {
      clubName: "Speech and Debate at the University of California: San Diego",
      contactEmail: "skpresident.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10696",
      description:
        "The mission of Speech and Debate at the University of California: San Diego is to provide education in the arts of public speaking and persuasive argumentation, incorporating the skills of research, analysis, critical thinking, organization of logical communication, and oral persuasive presentation."
    }
  },
  {
    qDQT4YvyEYPHI20yvuB24uA57C03: {
      clubName: "Student Health Advocates",
      contactEmail: "sleeplesscollectivedance@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12004",
      description:
        "The Student Health Advocates (SHAs) are trained, volunteer peer health educators that educate other students about health issues and concerns through educational workshops, events, and campaigns. SHAs address topics such as alcohol, drugs, stress, healthy eating, physical activity, and sexual health."
    }
  },
  {
    RHEeO923Q8RVQOGwpUWzouTyb883: {
      clubName: "Students of Color for Environmental Justice at UCSD",
      contactEmail: "SLSAucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8534",
      description:
        "The Students of Color for Environmental Justice at the University of California, San Diego seeks to provide communities of color a learning and healing space that works at the intersections of race, identity, class, and gender. The group will actively work towards increasing the representation of people of color in the environmental and wilderness sectors in an effort to alleviate the marginalization these communities have historically experienced in these fields."
    }
  },
  {
    O20LF0i3eMZQ9b3HibwOjRgOiCn1: {
      clubName: "Hong Kong Cultural Society",
      contactEmail: "sml004@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11948",
      description:
        "The Hong Kong Cultural Society wishes to promote the unique Hong Kong and Cantonese Culture to UCSD students, while also helping Hong Kong students find a home overseas with fun and open social events and friendly discussions on current events."
    }
  },
  {
    XPUf41Egw9Pf5qhnYBorYMgdLTG2: {
      clubName: "TamashaSD",
      contactEmail: "soarucsd123@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12103",
      description:
        "TamashaSD is a student run organization on the UC San Diego campus that aims to connect South Asian Americans back to their roots while fostering a positive cultural environment for the community. Eight Bollywood-Fusion dance teams will showcase their talent from across the nation and have the chance to compete for a first place prize. Get ready to experience amazing ocean views, unforgettable sunsets and tasty street tacos. Most of all, donâ€™t forget to stay classy San Diego."
    }
  },
  {
    bZxt3QwKdRQcnP1rE2ikhd0EUd32: {
      clubName: "Student Equities Trading Club",
      contactEmail: "ssa@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10695",
      description:
        "The goal of our organization is to create a community of student equities, options, and/or forex traders and allow for the flourishing of new ideas as well as provide any and all helpful information to student traders. We seek to empower students who have little to no information of equities, options, and forex trading and grow their arsenal of trading techniques and analysis abilities. Whether a student is highly skilled and knowledgeable in trading or justs starting out, we will seek to always educate the best trading practices, risk management, and how to deal with emotions in the trading environment."
    }
  },
  {
    aWy7IjIhjwTGduzBxAMusUnbGw53: {
      clubName: "Symphonic Student Association",
      contactEmail: "strive@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12061",
      description:
        "The Symphonic Student Association (SSA) is a student-run organization committed to fostering a community for students and community members who share an interest in classical music. SSA is the primary social platform for the UCSD Chamber Orchestra but hosts social events open to the entire UCSD community. In addition, SSA provides a range of performance opportunities such as: chamber groups, recording groups, gigs, and community outreach performances. Finally, SSA works to help improve musicianâ€™s skills with coaching from professionals for instrumentalists. SSA is dedicated to raising awareness in classical music on the UCSD campus by holding performances throughout the year and strives to build a community where students can gather to explore the boundaries of musical instruments and classical music. For more information, visit our website at ssa.ucsd.edu or contact us at symphoni@ucsd.edu."
    }
  },
  {
    YnoBpkGEF9cpGqf6S9uhNS9JFDR2: {
      clubName: "Students Against Mass Incarceration",
      contactEmail: "sums@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11962",
      description:
        "Provide a space to cultivate a culture of undergraduate student activism against the injustice in the U.S. prison system and cooperate with faculty and graduate students to spread awareness primarily through screenings, speakers, panels, campaigns, and direct networking with key people working in this arena"
    }
  },
  {
    zG8W80OCvFZsXeO4kFbJjQIUFVE2: {
      clubName: "Students for Conservation",
      contactEmail: "swe@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8507",
      description:
        "The purpose of this organization is to promote awareness about environmental conservation and to help preserve the natural environment. Organization efforts will focus on both aquatic and terrestrial ecosystems, with an emphasis on the local San Diego environment. Members will participate in volunteer and collaborative efforts to promote environmental stewardship."
    }
  },
  {
    wmy4ZZ8CXbMbR0FIKscO5Kqq9r12: {
      clubName: "M.E.M.O. at UCSD",
      contactEmail: "syl127@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8378",
      description:
        "MEMO provides medical and educational services locally in San Diego and Orange County, as well as abroad in Vietnam. We send volunteers annually to Vietnam to provide scholarships and school supplies to students in rural communities, set up free health clinics, donate monetary aid and supplies to orphanages, and sponsor heart surgeries for children with congenital heart disease. Locally in San Diego and Orange County, we send volunteers to help other local non-profit organizations, set up community health fairs, and organize awareness nights on campus."
    }
  },
  {
    awDBzTvZHOSvlBr2huZ1IIBeZHP2: {
      clubName: "The Brain Exercise Initiative",
      contactEmail: "symphoni@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11961",
      description:
        "The Brain Exercise Initiative is a student run non-profit organization that uses math, reading and writing as a form of cognitive development for the elderly. It is found that simple math exercises and reading aloud for just 30 minutes a day can have a positive impact on memory for those with Alzheimer's. This is currently being done extensively in Japan. It was discovered by a Japanese doctor, Ryuta Kawashima, and consists of math exercises and reading aloud of short stories. Done for just 30 minutes a day, 5 times a week, improvements in Alzheimerâ€™s patients have been observed. It is currently being done in 1,400 care homes with 15,000 Alzheimer's patients all over Japan and has had great success. Many individuals showed improvements in communication and behavior. Some went from being bedridden to sitting in a chair or walking. Some showed improvement in controlling their bowel movement. Additionally, they began to feel happier."
    }
  },
  {
    gPfZDngbPBcSfJ1eg3tFQZtwBvf1: {
      clubName: "Themed Entertainment Association @ UCSD",
      contactEmail: "tabithaucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8385",
      description:
        "Officially affiliated with the international Themed Entertainment Association, TEA at UCSD is a club for aspiring theme park designers, engineers, and creators. Providing experience with industry-based, hands-on projects and events that canâ€™t be found anywhere else at UCSD, members graduate prepared to work in the top businesses that create the magical and adventurous experiences we all remember, cherish, and love."
    }
  },
  {
    qaQt4clhpHMTfiEdyd2c2YIkuZv2: {
      clubName: "Trend",
      contactEmail: "tamashasd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8376",
      description:
        "Trend is a non-profit student organization that publishes a fashion magazine. It highlights the fashion of individuals and connects UCSD students to social events in the local San Diego community. The publication offers student opportunities to learn and gain experience in the media industry."
    }
  },
  {
    BDAIOm62xGTT9hw5TcSk0Ug0I9o1: {
      clubName: "Triton Splatoon",
      contactEmail: "tas.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10739",
      description:
        "Triton Splatoon is a student organization with the purpose of bringing together players of the video game Splatoon 2 for the Nintendo Switch. The goal is to create a friendly community of students that share the same passion for the game while also promoting the competitive shooter scene. The focus will be primarily on socializing with other players on campus and bringing the best gaming experience possible to students."
    }
  },
  {
    IpcUtirdcOZPC1qRqlxypvn8gv32: {
      clubName: "Triton A Cappella Community",
      contactEmail: "tbp@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10839",
      description:
        "To foster a community among the various a cappella groups at UC San Diego, and to facilitate the organization of concerts and events, especially during the audition season, which involve multiple groups. Triton A Cappella Community is a non-profit student organization."
    }
  },
  {
    EJ2kobwA29gDsHqmdgRHKtuO9h12: {
      clubName: "Triton Dota",
      contactEmail: "tca@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9635",
      description:
        "The organizationâ€™s purpose will be to foster a community within UCSD focused around the video game Dota 2 and to promote interest and engagement with the game and its community in the general student body. This includes social, casual, and competitive opportunities for all players regardless of skill level or playtime."
    }
  },
  {
    ybrcdPMKhoeDJRsQxdjkksMwPZx2: {
      clubName: "Triton Melee",
      contactEmail: "tea@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12048",
      description:
        "To expand the community of the game Super Smash Bros: Melee by offering a friendly, interactive, and competitive environment to all student players."
    }
  },
  {
    NQLKs6tnCANBWBn6L07pWepbhjQ2: {
      clubName: "Korean American Student Association",
      contactEmail: "teamucsd.kendo@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8587",
      description:
        "To unify and empower the Korean American voice on campus by means of cultural, political, and social events."
    }
  },
  {
    dzyhZ7cLoSdRBpzhRZ01BI5g21g1: {
      clubName: "Triton Counter Strike",
      contactEmail: "TEDxUCSD@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10817",
      description:
        "Triton Counter Strike is an organization encompassing all players an environment to play, socialize, and promote their enthusiasm for all Counter Strike games. We will provide events including, but not limited to: online games, offline meetings, and LANs / tournaments."
    }
  },
  {
    eX7x9hNtJifmPqdDoo8A3dh1PiD3: {
      clubName: "Delta Gamma",
      contactEmail: "the.dots@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10715",
      description:
        "The ladies of Delta Gamma pride themselves on their commitment to fostering high ideals of friendship, promoting educational and cultural interests, creating a true sense of social responsibility, and developing the finest qualities of character."
    }
  },
  {
    nh6fZK329LVzXznHBNg8L2nPAgh2: {
      clubName: "Chi Omega",
      contactEmail: "thechecafe@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8592",
      description:
        "Chi Omega is a Panhellenic sorority forever committed to its founding purposes of friendship, personal integrity, service to others, academic excellence and intellectual pursuits, community and campus involvement, and personal and career development."
    }
  },
  {
    l1hWhNnaQRVLMDcR3ED8Hv1X0dB2: {
      clubName: "Indian Student Association",
      contactEmail: "thehomelesscharter@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8371",
      description:
        "We are an undergraduate organization that provides useful services for Indians at UCSD and hosts Indian cultural events for the San Diego community. Our goal is to make a culturally active and aware community and an easier transition to UCSD for undergraduate students."
    }
  },
  {
    ll5Oty47tHPpnPt8mN4ZGD9AlWu1: {
      clubName: "Multi-Asian Student Association",
      contactEmail: "themixedstudentunion.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8495",
      description:
        "As a cultural and social organization, we aim to promote diversity and celebrate the various and distinct Asian cultural backgrounds of the students of UCSD. We hope to share these cultural values to the UCSD community by providing a fun and welcoming, stereotype-free, and all-inclusive social atmosphere for students."
    }
  },
  {
    TnrpGAk7s9VR3ij1VaFBSAycKN92: {
      clubName: "Metanoia Social Club",
      contactEmail: "tin035@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10683",
      description:
        "The purpose of Metanoia is to allow students of all backgrounds to come together and form a community where they are able to engage in intellectual discussion, share ideas, and discover new ones. We strive to become a force of stability and strength in studentsâ€™ lives as they experience transition and explore their spirituality in a fun, sociable setting."
    }
  },
  {
    "5IFyOx0TFBeNwpDZCghiFgj6QpH3": {
      clubName: "Triton Robosub",
      contactEmail: "tntforhealth@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8458",
      description:
        "This organization is devoted to students who want to explore underwater robotics and research applications of Autonomous Underwater Vehicles, hereinafter referred to as AUVs. Our main method for exploring this field is by compete in Robonation's Robosub competition, hosted in San Diego's TRANSDEC pool. Students will have the opportunity to not only learn about Autonomous Underwater Vehicle (AUV) construction and testing, but will be able to meet technology recruiters at the competition, practice networking skills with other teams and companies, and learn how to write a journal paper."
    }
  },
  {
    ceZ7myQw22hjgXbB5tNLt3KvO3h1: {
      clubName: "Triton Smash",
      contactEmail: "trend@uscd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8528",
      description:
        "Triton Smash is a student organization with the purpose of bringing together players, spectators, and enthusiast of Super Smash Bros Ultimate for the Nintendo Switch. The goal is to create a friendly community of students that share the same passion for the game while also promoting the competitive fighting scene. The focus will be primarily on socializing with other players on campus and bringing the best gaming experience possible to students."
    }
  },
  {
    yGEGedqReMO31iUkKF1t0CRaaU43: {
      clubName: "Undies for Oldies: Geriatrics Education and Medicine",
      contactEmail: "tritoncu@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8598",
      description:
        "The purpose of this club is to raise money and buy underwear for elderly patients at Geriatric units in hospital throughout San Diego. By doing so we are helping to restore dignity and decency to these people while at the same time educating the student body about issues of geriatrics, senior care, and palliative care."
    }
  },
  {
    uJU90yerBVXgvRP04mMFP4EAWEJ2: {
      clubName: "United Accounting Society at UC San Diego",
      contactEmail: "tritones@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11880",
      description:
        "The United Accounting Society at UC San Diego strives to assist students to pursue their interests and goals with respect to the accounting industry. We seek to provide students opportunities to learn more about the accounting industry, form connections with professionals, and meet other students with interests in accounting. We hope to help students achieve a smooth transition into the professional working world by helping them with their professional development."
    }
  },
  {
    "6iHpMaoJa8fKcxUyjzcTBzfzQIX2": {
      clubName: "Tritones at UCSD",
      contactEmail: "tritongamingofficial@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12037",
      description:
        "To encourage participation in the fine arts, to provide entertainment, to support all musical endeavors, to expand the genre of a cappella in the San Diego region."
    }
  },
  {
    VyK9UM6zliQFtWIVoh5CnGuJdbY2: {
      clubName: "Multicultural Greek Council",
      contactEmail: "tritonmocktrial@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12023",
      description:
        "The purpose of the Multicultural Greek Council at the University of California, San Diego shall be to create and maintain high standards in fraternities and sororities by addressing, coordinating, and developing strategic action plans that unify organizations, promote higher education, provide community services, and enhance leadership. The Multicultural Greek Council will also serve as a liaison and advocate to the Associated Students, the Center for Student Involvement (CSI), and other administration thereby maintaining open communication and improving the campus climate. The Multicultural Greek Council at the University of California, San Diego, is a non-profit, student organization."
    }
  },
  {
    GNLyXzWp7ZTJWy7UMQicLMQ2ddf2: {
      clubName: "Origami Folders at UCSD",
      contactEmail: "tritonnavs@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8472",
      description:
        "To provide a venue for origami enthusiasts to fold and share their passion with others and to introduce beginners to the traditional Japanese art and its applications in math and engineering."
    }
  },
  {
    s9o6GJjPnAOpBqUSHccBIpDyKEC2: {
      clubName: "Tritons for Animals",
      contactEmail: "tritonprosthetics@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10788",
      description:
        "The purpose of Tritons for Animals is to advocate for the welfare and humane treatment of animals through education and the promotion of a plant- based lifestyle."
    }
  },
  {
    TNGhNybIRDQ63wOfnvE7Shmgkus2: {
      clubName: "Tritons For Israel",
      contactEmail: "tritonrobotics@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8548",
      description:
        "Tritons For Israel is the pro-Israel student organization at UC San Diego. We are dedicated to raising awareness about Israel and celebrating Israeli culture, educating students and encouraging dialogue, as well as promoting peace in the Middle East."
    }
  },
  {
    Ze9w1urhFyRGKDXlijPSi4qKqxf1: {
      clubName: "United Students Against Sweatshops-San Diego",
      contactEmail: "tritonsfilmsociety@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8516",
      description:
        "USAS-San Diego seeks to hold accountable multinational companies that exploit the people who work on university campuses, in our communities, and in the overseas factories where collegiate apparel is produced. Students have unique leverage over the colleges and universities that are often the largest employers, the largest landlords, and large institutional investors in our communities and regions. Students also have leverage over the companies that value universities as clients. Promote campaigns for organizing rights, fair contracts and living wage policies on campuses and in communities all across the US, using student power to support workers struggling to transform minimum wage jobs into living-wage, union jobs, and ensure universities support ethical contractors that set â€“ not undercut â€“ good employment standards in local economies."
    }
  },
  {
    ivT3b6wKBZX8NZKcYuQRJbFSelm1: {
      clubName: "Urban Changemakers",
      contactEmail: "tritonsforanimals@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8449",
      description:
        "The purpose of the Urban Changemakers Club is to: -Foster a greater sense of community through healthy placemaking both on and off-campus -Increase networking opportunities and offer practical exposure to professional careers for Urban Studies and Planning majors."
    }
  },
  {
    PKf9K3T6EvaQYxEf5iFA4Dk3N8J3: {
      clubName: "Vietnamese Student Association",
      contactEmail: "tritonsforisrael@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9651",
      description:
        "To promote and preserve the Vietnamese culture and awareness among the UCSD students through various cultural, social, community, and educational events."
    }
  },
  {
    "40XCt3vglqOGxerKw6x3E12DNjR2": {
      clubName: "Tritons for Sally Ride Science",
      contactEmail: "Tritonsmash4@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9603",
      description:
        "The purpose of Tritons for Sally Ride Science is to promote K-12 STEM education and generally broaden STEM participation. Through mentoring and exciting K-12 students, we hope to promote science literacy and awareness."
    }
  },
  {
    sDR4PnuFcBhOCGByhR6EqgyeXzP2: {
      clubName: "Undergraduate Bioinformatics Club at UCSD (UBIC)",
      contactEmail: "tritonsplatoon@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10682",
      description:
        "The Undergraduate Bioinformatics Club (UBIC) at UCSD shall be a non-profit organization whose purpose is to serve bioinformatics undergraduates by providing resources for students entering the growing discipline; furthering access to job, internship, and research opportunities; facilitating an open forum for discussion, collaboration, and socialization; holding events, programs, and meetings; and acting as a collective voice for bioinformatics students at UCSD."
    }
  },
  {
    "8PG2q2xBFJWYaynkVcactronXgI2": {
      clubName: "Tau Beta Pi",
      contactEmail: "tritonsvo@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8485",
      description:
        "Tau Beta Pi is the premier engineering honor society in the United States and one of the top three honor societies in the nation. The Society focuses on serving its members and the public with enthusiasm and excellence. The Association also strives to promote excellence in the fields of engineering, thus helping to improve the perception of the profession."
    }
  },
  {
    kYTtzN24X4NOxHPhpgIUYpQtbIR2: {
      clubName: "Tzu Chi Collegiate Association at UCSD",
      contactEmail: "tse@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10671",
      description:
        "Tzu Chi Collegiate Association at UCSD is a non-profit student organization, which aims to inspire college-level students in the mindful practice of the Tzu Chi Foundationâ€™s principles of Gratitude, Respect, and Love through service at the community level. Tzu Ching promote the universal value of â€œGreat Loveâ€ through the Tzu Chi Foundationâ€™s missions of Charity, Medicine, Education, Culture, International Relief, Bone Marrow Donation, Environmental Protection and Community Service. Through mindful practice of Founder Dharma Master Cheng Yenâ€™s teachings, Tzu Ching hope to purify people's minds and bring positive influence into the community."
    }
  },
  {
    fNhi4YZvUeRxbWWOxnJHvmn0JoC2: {
      clubName: "Undergraduate Economics Society",
      contactEmail: "tuas@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8506",
      description:
        "The purpose of the Organization is to create a community of students and faculty members defined by an interest in the study of Economics."
    }
  },
  {
    dtrsPUwYOnQWYH5SNZeRVaChb5H3: {
      clubName: "Yonder Deep",
      contactEmail: "uas.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11878",
      description:
        "Yonder Deep, part of the Yonder family of student project teams, is dedicated to pursuing autonomous underwater vehicle (AUV) projects, partnering with outside institutions to bring undergraduates closer to tangible research projects, and bringing tangible experience to students interested in the ocean and robotics."
    }
  },
  {
    "3rRJqGOwtbbKKs2EazLoluGV3WD3": {
      clubName: "Women in Business",
      contactEmail: "ubic.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10657",
      description:
        "UCSD Women In Business aims to empower women of all backgrounds to become leaders in today's ever-changing world. Through business education, networking, mentorship, leadership development workshops, and social events, members will have the chance to join a community dedicated to helping one another succeed. By encouraging both professional and personal growth, UCSD WIB will give women pursuing business the chance to affect change not only within themselves and the university, but in the world they seek beyond."
    }
  },
  {
    b4L98yqTcsWb0BOyx7MPN24Woym2: {
      clubName: "Design at UCSD",
      contactEmail: "ucsandiego.dem@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12058",
      description:
        "Design Co is a pre-professional student organization at UC San Diego that bridges the gap between designers and industry. Our mission is to cultivate a space that fosters opportunity and growth as an inclusive community of designers. The â€œCoâ€ means Community, Collective, and Collaborative, which is everything we stand for. We believe that fostering an inclusive design community means collaborating with others and growing with everyone. By combining workshops, events, and other career growth opportunities, weâ€™re taking the challenges of breaking into industry head on and building a strong design community while we're at it."
    }
  },
  {
    "5ATPq8rYzYZs9hnkt3sn6Wh2tgz2": {
      clubName: "Alpha Phi",
      contactEmail: "ucsandiegoalphaphi@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10846",
      description:
        "Alpha Phi is a sisterhood of outstanding women supporting one another in lifelong achievement."
    }
  },
  {
    yyuSjDEmxDdwCU5at2cYZwlDOXu2: {
      clubName: "Innovative Student Project Groups",
      contactEmail: "ucsandiegohksu@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8594",
      description:
        "ISPG is a student run organization which aims to give students confidence to start and work on projects outside the classroom. With discussions on leadership, idea sessions , project group workdays, and workshops, members will gain technical skills and knowledge about designing and managing projects effectively."
    }
  },
  {
    MJkh8Tck1pRCgHNfOCvA1vEfTRH2: {
      clubName: "Tabitha",
      contactEmail: "ucsandiegostudentfoundation@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8560",
      description:
        "Tabitha is a sustainable non-profit organization seeking to improve the lives of impoverished families in Cambodia. The organization will seek to fundraise for multiple of Tabitha's ongoing projects such as its savings program, construction of new women's hospital, establishing accessible water and housebuilding. The foundation also seeks to implement an international volunteer connection between students in California and South East Asia. Tabitha is an educational experience for both ends involved benefiting the students that engage with the foundations as well as the people in Cambodia."
    }
  },
  {
    "1XfCs24FV2MKSkhJj7qShiAWaoc2": {
      clubName: "Zion Bible Study Club",
      contactEmail: "ucsandiegovsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8435",
      description:
        "Primarily focusing on studying the bible, Zion Bible Study Club offers members the opportunity to distinguish between what the bible teaches and the traditions of men."
    }
  },
  {
    wUQWZKoui6atwtaR9aXkU7B8x8D3: {
      clubName: "",
      contactEmail: "ucsandiegoyoungplanners@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    ZHbwdwYB1uQHakzOig6HZ4BU7FT2: {
      clubName: "Alpha Epsilon Delta Pre-Health Professional Honor Society",
      contactEmail: "ucsd.aed@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8471",
      description:
        "A pre-health honor society with the purpose of connecting future health professionals and recognizing their achievements in their pursuit of a career in health. Activities include volunteering, educational programs and speakers at bi-weekly meetings including doctors, nurses, patients, medical students, pharmaceutical students, and more."
    }
  },
  {
    oEfR8Oprk8eheQdMplokyVysGtE3: {
      clubName: "Alpha Epsilon Pi",
      contactEmail: "Ucsd.aepimaster@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10656",
      description:
        "Alpha Epsilon Pi's role is to encourage Jewish students to remain dedicated to Jewish ideals, values, and ethics and to develop members that effectively help to make UCSD a more inclusive and welcoming campus for all students, regardless of faith or cultural background. We rely on a variety of events and programs to help grow our community and to benefit UCSD and the San Diego community"
    }
  },
  {
    "78WjiBvY4uWfHrGYVQvrdbYzFyG3": {
      clubName: "Alpha Omicron Pi",
      contactEmail: "ucsd.aoii.president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9609",
      description:
        "The object of Alpha Omicron Pi Womenâ€™s Fraternity shall be to encourage a spirit of Fraternity and love among its members; to stand at all times for character, dignity, scholarship, and college loyalty; to strive for and support the best interest of the colleges and universities in which chapters are installed, and in no way to disregard, injure, or sacrifice those interests for the sake of prestige or advancement of the Fraternity or any of its chapters."
    }
  },
  {
    fDA1swssRSZisTZYml6OU6dsfXV2: {
      clubName: "Bhagat Puran Singh Health Initiative (BPSHI)",
      contactEmail: "ucsd.beat@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10770",
      description:
        "The Bhagat Puran Singh Health Initiative aims to eliminate health and social misconceptions within underserved and underprivileged populations by providing access to health education and free health clinics for the betterment of the body."
    }
  },
  {
    JUPQFza4zVUIq2J6NHZynxdJAlP2: {
      clubName: "Queer and Trans* People of Color (QT*POC) at UCSD",
      contactEmail: "ucsd.bell@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12003",
      description:
        "Queer and Trans* People of Color (QT*POC) at UCSD was established in 2000 by a group of Queer students of Color FED UP with racism in the queer community, and with homophobia and transphobia within cultural organizations. With this, at the core of QT*POC are our commitments to struggle and our commitments to activism. We recognize the intersections of our multiple, beautiful, and sometimes confusing identities, as well as the related intersections of social justice movements. We create a SPACE--a social, political, academic, and cultural environment--to enhance our members' entire self-being and holistic wellness."
    }
  },
  {
    FMAwQL5Rt2YPFvuYaLmJhTJ0cum1: {
      clubName: "IGNITE at UCSD",
      contactEmail: "ucsd.cochair1@hauchapters.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8513",
      description:
        "IGNITE at UCSD is a network of like-minded, ambitious womxn leaders who are eager to work on their political ambition, civic engagement, and leadership skills. It teaches womxn their political power and trains them to become the leaders of tomorrow by guiding womxn to position themselves in roles of political candidacy."
    }
  },
  {
    j0bwv6dBAAXBlTjbSv3P8UKRXCi1: {
      clubName: "Delta Sigma Pi",
      contactEmail: "ucsd.ddd.vpa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8574",
      description:
        "Delta Sigma Pi is a professional fraternity organized to foster the study of business in universities; to encourage scholarship, social activity and the association of students for their mutual advancement by research and practice; to promote closer affiliation between the commercial world and students of commerce, and to further a higher standard of commercial ethics and culture and the civic and commercial welfare of the community."
    }
  },
  {
    Ez2LX837KOfhlpBZZvlLrFtj0UP2: {
      clubName: "Students for Global Health",
      contactEmail: "ucsd.debate@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8530",
      description:
        "Our purpose is to promote global health undergraduate student collaboration by striving to advance studentâ€™s knowledge, opportunities, and careers in the field. We uphold an interdisciplinary alliance with diverse majors, staff, faculty, and organizations around the globe. We also promote and educate members of our club and school on illness, health, and healing, through perspectives that transcend national borders and regional interests."
    }
  },
  {
    DYXjm2SSCCOxfNKlCUPwcfhEG2j1: {
      clubName: "Dota2 League at UCSD",
      contactEmail: "ucsd.dsp@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8553",
      description:
        "To organize and support Dota2 at UCSD players in order to form a team to join Dota2 competitions."
    }
  },
  {
    F4KHMxYzhTTDFQUdQZ43ZytS4dm1: {
      clubName: "Green Corps at UC San Diego",
      contactEmail: "ucsd.gmb@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10686",
      description:
        "Green Corps at UC San Diego is a student organization based on environmental and social justice, aiming to repurpose our economic, social, and food-water-energy-waste systems, and re-envisioning our infrastructure to create sustainable solutions to everyday problems and bring solidarity to all people. We support and develop student innovations and sustainability focused engineering and design through integrating agriculture with high technology. Green Corps also serves as a campus-based entity recruiting, and engaging students and promoting holistic sustainability efforts based on action."
    }
  },
  {
    rnS8E7YDejUVkFKifD7sElX3NCI2: {
      clubName: "International Health Collective",
      contactEmail: "ucsd.interaxon@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8586",
      description:
        "The International Health Collective (or IHC) is a UCSD student-run, non-profit, organization that establishes a temporary free clinic in communities that need medical help around the world in addition to creating other projects to advance their health. Our first and primary goal is to assist underprivileged communities with services and free medical care, as well as providing medicine, and health education to improve the prevalent illnesses seen in underdeveloped communities. Our secondary goal at IHC is to provide undergraduate students with the resources necessary to pursue their interests in health care and beyond. Our experiences include first-hand work in a public medical setting by personally assisting medical professionals as well as community focused project development. They also include seminars in which medical professionals of all specialties speak on personal experiences encountered in their field to help attendees choose which specialty to work toward. The International Health Collectiveâ€™s largest project is a clinic that serves the communities surrounding a temporary site in Tijuana, Mexico, which functions during three Saturdays per school quarter. IHC strives to diagnose, supply medication, and provide health education to members of the Tijuana community with free doctor consultation, pharmacy care, and seminars. To provide these efficiently and effectively, IHC utilizes passionate, interdisciplinary, staff members in addition to comprehensive medical record systems, and an efficient clinic layout."
    }
  },
  {
    dsC5zwH8GiflEqTT8BejmAjw78j1: {
      clubName: "Interfraternity Council",
      contactEmail: "ucsd.isa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10741",
      description:
        "The purpose of this body shall be to govern the member fraternities, to promote intellectual, philanthropic, fraternal and social values of the fraternities at the University of California, San Diego, and to maintain cooperation between these fraternities, their respective international headquarters, alumni, and the surrounding community."
    }
  },
  {
    zekJdOGEbwNW8MiSkwGRK68fLKO2: {
      clubName: "Kendo Club at UCSD",
      contactEmail: "ucsd.iusm@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8520",
      description:
        "The Kendo Club at UCSD seeks to promote awareness and appreciation of the Japanese sport of kendo, through community outreach, school involvement, and intercollegiate competition."
    }
  },
  {
    kNdj5pCSJMQHhQzNP5IPPNQ2C3B2: {
      clubName: "Ocean Lovers Club",
      contactEmail: "ucsd.mustardproject@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8401",
      description:
        "There are three goals for this club. The first is to clean up the beaches of San Diego and to help with conservation methods to help remedy the environmental crisis of the oceans. The second is to educate our members about current research and newsworthy events about the ocean, so that in turn, they can help educate the community. The last goal is to create a fun environment where like-minded people can form lasting friendships."
    }
  },
  {
    "8eaBV4P8foeIIApcxF2yIuDBs0D3": {
      clubName: "Open Source at UCSD",
      contactEmail: "ucsd.nasa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8544",
      description:
        "Open Source @ UCSD (OS) is an organization that contributes to and creates open source projects. Open source projects are projects where all interested UCSD students can participate in. Participation can vary between fixing known bugs or glitches to improving the project by adding new features. Open Source @ UCSD will be using these projects to help teach students core open source practices, which include Git and basic coding principles, in an inclusive environment. As students learn the basics of creating their own Git repositories, they will be able to create their own open source projects for others to expand upon."
    }
  },
  {
    gYgwIfIOlCMQRXaWDhds3tE767x2: {
      clubName: "Public Health Club at UCSD",
      contactEmail: "ucsd.ppaso@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8564",
      description:
        "The overarching goal of the Public Health Club is to bring students, staff and faculty with an interest in public health, healthy lifestyles, or community health together. The Public Health Club will serve as an umbrella organization wherein members will be able to explore different areas of interest within the public health field. The Public Health Club will also help members by providing opportunities for volunteerism, health promotion, and internships."
    }
  },
  {
    GRx7S0e8lfaqJzx7QfCL3hvBB8b2: {
      clubName: "Asayake Taiko",
      contactEmail: "ucsd.tango@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8477",
      description:
        "To promote the cultural aspect of taiko to any entities interested in the art form. To promote awareness of taiko on the UCSD campus and in the San Diego community through performances and other events. To help promote awareness of taiko at a national level through cooperation with other organizations such as other taiko groups."
    }
  },
  {
    LxMbVmO09wRfVqQx30BOo6cp6gU2: {
      clubName: "Envisionaries",
      contactEmail: "ucsd.triton.ems@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11946",
      description:
        "1. To educate students in Engineering, Visual Arts, design, and manufacturing processes. 2. To support the Envision Maker Studio and other UCSD maker studios working directly with Envision Maker Studio in their goals to provide students with an environment to connect theory with practice. 3. To provide a forum for the discussion and exchange of ideas related to Engineering, Visual Arts, and the development of the maker studios. 4. To provide a platform of integration for non-arts or engineering students to learn and work within maker spaces. This group offers a means of access to Envision Maker spaces to non-majors."
    }
  },
  {
    J1rb2TqkazaTEZufHzsAP52a0Y63: {
      clubName: "Chem-E-Car Project",
      contactEmail: "ucsd.twts@ceoglobalusa.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8413",
      description:
        "Chem-E-Car Project, centered within the NanoEngineering department, aims to provide chemical engineering students with the opportunity to participate in a team-oriented hands-on design and construction of a small chemical powered model car. In addition, it helps increase awareness of the chemical engineering discipline among the general public, industry leaders, educators and other students."
    }
  },
  {
    NFfHHSvun2QzbP1WNzWZdfgtWXv2: {
      clubName: "Women and Minorities in Economics (WAMIE)",
      contactEmail: "ucsd.tzuching@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9626",
      description:
        "A persistent issue in economics has been the low representation of women and minorities in the profession. WAMIE (Women and Minorities in Economics) is dedicated to supporting all UC San Diego undergraduates, with a particular focus on the issues facing women and other underrepresented groups. We strive to create a supportive community where challenges are discussed, and innovative solutions are created. By giving students a closer connection to faculty, alumni, guest speakers, and researchers, and by making students aware of numerous opportunities in the department and in the profession, we hope to better equip students with the tools they need to succeed at UC San Diego and beyond. We welcome all students as part of this organization, and believe that our mission is enriched by considering diverse perspectives."
    }
  },
  {
    NLWUNdDNo6UEaNAGJgUBWILSYXi1: {
      clubName: "",
      contactEmail: "ucsd.ydsa@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    Tvd40b9pxUNt8vjP29q6BckDyFv1: {
      clubName: "Acts 2 Fellowship",
      contactEmail: "ucsd@acts2fellowship.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8443",
      description:
        '"We are a fellowship that strives to build a Christ centered community on campus. We meet weekly for Bible studies & prayer, and worship on campus on Sundays. Our vision is to share the gospel and help students to spiritually thrive during college."'
    }
  },
  {
    RYXGhXa3pETderlTPKbkkgXDKw12: {
      clubName: "Biological Sciences Student Association",
      contactEmail: "ucsd@bpshi.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8515",
      description:
        "With nearly 20 percent of the UCSD undergraduate population declared as biology majors, the Biological Sciences Student Association (BSSA) plays a crucial role in expanding opportunities and enhancing the overall educational and social experiences of these students during their time here. In addition, BSSA assists in preparing students for a wide range of career opportunities."
    }
  },
  {
    xb82n8rgEPPVtkNwnVZhityuiL32: {
      clubName: "Catholic Student Community (CSC)",
      contactEmail: "ucsd@campkesem.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9614",
      description:
        "We are students, alumni, faculty and staff at UCSD, as well as young adults and residents of the surrounding area who celebrate life together as the Catholic Community at UCSD. We feel at home in this community and are free to experience Christ's presence in the Word, in the Eucharist and in each other. Hospitality and welcome are hallmarks of our community. We are passionate about living the Gospel in the context of our Catholic faith."
    }
  },
  {
    ruZ5OG8PXzV6mHmuc5TKUCXRJAH2: {
      clubName: "Phi Delta Epsilon",
      contactEmail: "ucsd@chapters.ostem.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9652",
      description:
        "To prepare our members for a career in medicine and to promote fraternity amongst our members"
    }
  },
  {
    wAa5WnOxHLSJPB4HTuVElJZVl9x2: {
      clubName: "Student Involvement Leadership Consultant (SILC)",
      contactEmail: "ucsd@saseconnect.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8426",
      description:
        "Student Involvement Leadership Consultants, or SILCs, are bright, motivated UCSD students committed to sharing our leadership and involvement experience to serve the UCSD community on whole. Our mission is to provide the University of California, San Diego student organizations with direct services to assist in their operations and to provide the campus-wide student population with consultation regarding student involvement and leadership opportunities."
    }
  },
  {
    "9zPpL2pNd9OB0dpehTjIvoaDypZ2": {
      clubName: "A Cappella Choir",
      contactEmail: "ucsdacappellachoir@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8450",
      description:
        "The purpose of A Cappella Choir is to provide a fun and safe space for students to sing and meet other fellow singers. We will be teaching singing techniques to students who are interested in a cappella. Everyone is welcome to join! No prior music background required."
    }
  },
  {
    NA6DF4XSH2T6hvdx6aKZbPIuSKE2: {
      clubName: "Beta Theta Pi",
      contactEmail: "ucsdaedcpr@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11917",
      description: "To develop men of principle for a principled life."
    }
  },
  {
    C334TijsmJdRSjzmi1t7SZFoazj1: {
      clubName: "Alpha Gamma Alpha",
      contactEmail: "ucsdaga@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12070",
      description:
        "Alpha Gamma Alpha's Zeta Chapter was established ten years ago at the University of California, San Diego. The sisters of Alpha Gamma Alpha work towards the advancement of Armenian causes, the greater San Diego community and our community here at UCSD. Our mission is to spread and further the Armenian culture and aid in Armenian causes as we guide fellow sisters in academics, life decisions, and social relationships while building life-long ties. For more information on becoming part of Alpha Gamma Alpha's legacy, contact the sisters at ucsdaga@gmail.com or visit us at alphagammaalpha.ucsd.edu"
    }
  },
  {
    FByIA9ZLhtP6sjxaeUCcNA03jX13: {
      clubName: "CALPIRG Students",
      contactEmail: "ucsdanimeclub@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11870",
      description:
        "We believe in the power of students to change our world. Our organizers and students work together to create a greener, healthier, more meaningful future -- on campus, in our community, and across our state and country. We have a two-fold mission to win positive reforms on issues that affect us and our society and to train students to be engaged in civics and democracy."
    }
  },
  {
    wCbedRzpoxfh08y1Z86qWIfycyy2: {
      clubName: "Public Health Brigades",
      contactEmail: "ucsdapamsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12028",
      description:
        "Public Health Brigades at UCSD is a non-profit, student organization that will participate in one international service brigade per academic year. The brigade will be approximately seven to eight days long and will take place during a designated school break. The current country of emphasis for this chapter is Honduras, where the organization provides public health education and infrastructure in collaboration with Sociedad Amigos de los NiÃ±os, a private non-profit organization founded by Sister Maria Rosa Leggol. During the brigade, the purpose of this organization is to improve the overall health and living conditions of families living in various rural Honduran communities through the construction of in-home infrastructure projects. Through these projects, this organizationâ€™s primary mission is to help prevent the spread of contagious diseases and respiratory problems within the communities. In addition, student volunteers will work together to prepare an educational presentation on a given health topic (ie. dental hygiene, etc.) for students in the local community."
    }
  },
  {
    "02koW1H2e9WMBLXKBAEGr8xBTYq2": {
      clubName: "Association for Computing Machinery (ACM)",
      contactEmail: "ucsdapsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8350",
      description:
        "To foster a community devoted to computing and help students interested in the field develop their technical skills and professional networks."
    }
  },
  {
    gvCqhVDmLWXUnvwiKfhCtjWSCu92: {
      clubName: "Afghan Student Association",
      contactEmail: "ucsdasa1@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12063",
      description:
        "The purpose of the Afghan Student Association at UCSD shall be to promote awareness of the issues being faced within Afghanistan and to spread the Afghan culture to the larger UCSD community."
    }
  },
  {
    uYlnhqVo7sZNzDBEW5zWc5ehvBK2: {
      clubName: "Motorcycle Club at UCSD",
      contactEmail: "ucsdbaking@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8476",
      description:
        "The Motorcycle Club, also known as Redliners@UCSD, is a social group for motorcycle riders and enthusiasts to discuss motorcycles and safe riding practices as well as organize group bonding events / rides."
    }
  },
  {
    VqNU1dIo5tZXRknlWZFgVv1j5372: {
      clubName: "Bioengineering Graduate Society",
      contactEmail: "ucsdbeta@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8397",
      description:
        "The Bioengineering Graduate Society (BEGS) aims to be an interface for bioengineering graduate students at UC San Diego, their department, and the local community. Since its creation in 1994, the BEGS mission is to foster professional, educational, and social development opportunities through relationships with industry, alumni, and students. BEGS is a graduate student-run organization with the aid of the Bioengineering Department."
    }
  },
  {
    A5Z1IOBgUsdioqGDh1NkqRh90Ev1: {
      clubName: "Books For Prisoners",
      contactEmail: "ucsdblackstudentunion@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10677",
      description:
        "Books For Prisoners sends books and resources to prisoners in California."
    }
  },
  {
    XAkRBn2i18PFEKePEODucBEwant1: {
      clubName: "Brazilian Student Association",
      contactEmail: "ucsdboardgame@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8389",
      description: "Uniting Brazilian students all over UCSD"
    }
  },
  {
    hfFTz3m5aLTXQx1B2sZNZWvCEsK2: {
      clubName: "Cal-Animage Beta",
      contactEmail: "ucsdbodyrock@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8393",
      description:
        "To present Japanese animation subtitled in English to Members of the club. We intend to engender a social atmosphere in which members can enjoy anime and learn about Japanese culture."
    }
  },
  {
    LB5qcZWMiNhHM9zHx5HPMzy7LVK2: {
      clubName:
        "California Society of Health-System Pharmacists- at UCSD Student Chapter",
      contactEmail: "ucsdbritishsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8505",
      description:
        "The mission of the UCSD, Skaggs School of Pharmacy and Pharmaceutical Sciences, Student Society of Health-System Pharmacists is to make students aware of pharmacy practice in health systems and the potential of this setting for expanding the base of pharmacy practice, provide information to students about career directions in and credentials needed for pharmacy practice in health systems."
    }
  },
  {
    sByryVYRDzTYvYvlCdI15iHJcwA2: {
      clubName: "Bio-Optimization Society at UCSD",
      contactEmail: "ucsdbssa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10731",
      description:
        "The Bio-Optimization Society at UCSD (BIOS) aims to provide an open forum for education about and discussion of bio-optimization strategies, research, and current events with students and faculty through academic opportunities, talks and other activities. We define bio-optimization as the use of targeted supplementation, nutrition, exercise, biorhythm-tracking technologies, personalized genomics, and other strategies to improve one's cognition and overall health. The Bio-Optimization Society at UCSD will empower its members to improve their quality of life through applied knowledge of various strategies for physiological self-improvement."
    }
  },
  {
    FSPjOTcR9GVWYmfUFukTbiTP9Dh2: {
      clubName: "Chinese Classic Dance Team",
      contactEmail: "ucsdccm@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10672",
      description:
        "As a dance team, we strive to promote dancing on stage as an enjoyable form of art. We bring together people of different cultures, backgrounds, and disciplines, and connect through varying styles of dance, music, and choreography. Chinese Classic Dance Team, as a registered organization at UC San Diego, is committed to promoting a safe and vibrant campus community. No individual or group affiliated with Chinese Classic Dance Team will take any action or create a situation which recklessly or intentionally endangers mental or physical health or involves the forced consumption of liquor or drugs for the purpose of initiation into or affiliation with this organization. The leaders and members of the Chinese Classic Dance Team also agree to abide by all aspects of the UC San Diego Student Conduct Code, University policies and Federal, California State and Local laws."
    }
  },
  {
    ctTaOstp1rbcFaHsGKdQKqFTgqp2: {
      clubName: "College Republicans at UCSD",
      contactEmail: "ucsdcdc@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9623",
      description:
        "The College Republicans at UCSD strive to enhance principles of the Republican Party in the UCSD community. We encourage the advancement of the Republican Party through aiding elections at all levels of government. Further we promote a forum for political discussion open to all viewpoints. We also seek to serve the UCSD community through various volunteer efforts. The College Republicans at UCSD aims to build leadership abilities in students to serve the community and party."
    }
  },
  {
    f24qdO2dOdfxo7Ltgk1P0N4NxpY2: {
      clubName: "Chinese Union",
      contactEmail: "ucsdcdc@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10688",
      description:
        "Promoting Chinese culture and building a stronger bond within the UCSD Chinese American community."
    }
  },
  {
    a7Lovu3e8YRIQ14rtUC28U3UEjz2: {
      clubName: "Christian Pharmacists Fellowship International (CPFI)",
      contactEmail: "ucsdces@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8536",
      description:
        "1. Fellowship Since Christian students have a common purpose, it follows that they should meet together for encouragement, edification, uplifting, and sharing. The scientific training involved in pharmacy education may stem from a humanist/agnostic philosophy. Therefore, regular meetings of Christians can help students maintain perspective on the â€œbig pictureâ€ God has planned for mankind as He revealed in the Bible. 2. Bible Study/Discussion/Prayer The need to examine, study, and struggle with social/medical issues has never been greater. Faith rooted in Scripture builds firm convictions about God, man, lifestyle, human relationships, purpose of science, and the nature of a profession. Christian principles taught through the Bible equip pharmacy students to become compassionate pharmacists that go above and beyond to care for the entire patient by meeting their physical, emotional, and spiritual needs. Times of discussion encourage growth of the chapter through shared experiences and individual insights. Prayer helps the chapter to remain dependent on God. 3. Ministry Projects A young attorney once asked Jesus a test question in an attempt to entrap him. â€œWhat shall I do to inherit eternal life?â€ Jesus responded with a question of his own. â€œYou know the Law. How do you read it? Sum it up in one sentence.â€ The young attorney quickly answered, â€œYou shall love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind; and your neighbor as yourself.â€ (Luke 10:25-29 and Mark 10:17) Jesus complimented the attorney on his succinct answer and told him to do just as he had answered. One of the characteristics of our society today is the rapid decline of a sense of community in tandem with an epidemic of autonomy. One does not have to travel far to do mission work; many opportunities are available in every community. Wherever God has placed you is your mission field and even closer to â€œhomeâ€ are those who sit next to you in class every day. Remember that we are told to start at home (Jerusalem), then work with interfacing cultures (Judea and Samaria), and then distant cultures (ends of the earth). 4. Witness â€œBut you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.â€ Acts 1:8 Every one of us is a witness for Jesus Christ. The question is, â€œAre we effective?â€ Student chapters should consider evangelism as individuals and as a chapter. The chapter should be a source of strength and encouragement for personal outreach. There is another facet to our Christian witness: The individual who sees himself/herself called by God and who knows Jesus Christ as the Lord of all creation is vitally concerned about this world and its values and priorities. Our witness involves not only a verbal declaration of the saving power of Jesus Christ, but a promotion of Christian alternatives to secularism and other â€œismsâ€ which are dehumanizing and degrading to man. The Christian view of life has more than a passing relevance to a discipline concerned with life, death, and the person. A chapter genuinely concerned with its witness must seek to let its light radiate forth in the midst of the healthcare community, piercing every facet. 5. Worship â€œShout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs. Know that the LORD is God. It is he who made us, and we are his; we are his people, the sheep of his pasture. Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. For the LORD is good and his love endures forever; his faithfulness continues through all generations.â€ Psalm 100 Though worship may not be the primary goal of our student chapter, it will be difficult to meet regularly as Christians and not spend some time worshiping our Heavenly Father. Worship will often unify a student chapter as no other activity can, and it is greatly encouraged where ever Christians gather."
    }
  },
  {
    lfl6UFnELwYDGRPyrYcHuDLlXnw1: {
      clubName: "China Entrepreneur Network",
      contactEmail: "ucsdchess@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10785",
      description:
        "CEN-UCSD aims to develop leadership, facilitate innovation and encourage entrepreneurship for a better future, which shall be culturally viable, economically prosperous, and environmentally sustainable. Particularly, the CEN-UCSD devotes to explore effective strategies and opportunities of social businesses and provide UCSD students a platform to exercise social entrepreneurship and leadership."
    }
  },
  {
    BoCan26jrST8145CBvHZ4hye3f52: {
      clubName: "Cognitive Science Student Association",
      contactEmail: "ucsdchristians@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10654",
      description:
        "Aid Cognitive Science student body through academic, professional, and social means; Engage graduate population and faculty of the Cognitive Science Department."
    }
  },
  {
    "6Wu73gI5yOTQqCcqz8MAvlWtCRs1": {
      clubName: "Comicbook Club at UCSD",
      contactEmail: "ucsdcollegedemocrats@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8489",
      description:
        "The purpose of the club is to foster community between comic: creators, artists, writers, readers, and enthusiasts"
    }
  },
  {
    hotbraR4CrgoE0WYH6RGMvPmzWo2: {
      clubName: "Cultural Iranian STudent Association (CISTA) (formerly ISTA)",
      contactEmail: "ucsdcornerstone@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10728",
      description:
        "to sponsor Persian social and cultural activities and events, to promote an understanding of Iranian culture, to help foster friendship among different cultural groups, and to provide a source of union and support for the Iranian community at UC San Diego."
    }
  },
  {
    BfZ7RZdPkpbfIC75EE8ut02NNIN2: {
      clubName: "Sigma Kappa Sorority",
      contactEmail: "ucsdcubing@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9601",
      description:
        "The purpose of Sigma Kappa Sorority is to unite its members in a bond of sincere friendship for the development of character and the promotion of social, philanthropic, and intellectual culture."
    }
  },
  {
    WRoMAaynTKNMQeReH3TncK9yW0Y2: {
      clubName: "LIFE Fellowship",
      contactEmail: "ucsddcthelab@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8359",
      description:
        "LIFE Fellowship is a Christian group (associated with Chinese Evangelical Church - CEC) that fosters a unified community of college students who love Jesus Christ. Through small groups, prayer, worship, and service activities, we seek to understand God's love for us, how to live a life pleasing to God, and spread the gospel to other people."
    }
  },
  {
    kugoZRoVfrSwPNTntOIbCeOIZLd2: {
      clubName: "ECE Undergraduate Student Council",
      contactEmail: "ucsddesignbuildfly@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8533",
      description:
        "The ECE Undergraduate Student Council (USC) is the voice of Electrical and Computer Engineering (ECE) undergraduate students at UCSD. Through networking, programming, leadership, & relevant education, the council strives to effect change within the department & campus at large, building a stronger & longer-lasting community for current & future engineers. The USC is committed to carrying out ECEâ€™s mission statement of educating tomorrowâ€™s technology leaders."
    }
  },
  {
    pcYdGggK77XP5TAefrE3s14zKSq1: {
      clubName: "Engineering World Health",
      contactEmail: "ucsddulynoted@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8487",
      description:
        "Engineering World Health focuses on improving the state of global healthcare by spreading awareness, and developing members' interdisciplinary engineering skills required to engineer low-resource medical devices. Year-long, innovative projects addressing specific medical needs of underserved communities will be developed for the Engineering World Health design competition. We accept students from all majors and walks of life who share our passion for improving global healthcare."
    }
  },
  {
    eKDYwzuOhuPxx43Ywss2gzNYXFu2: {
      clubName: "First Generation Student Alliance",
      contactEmail: "ucsdevh@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10663",
      description:
        "The First Generation Student Alliance (FGSA) acknowledges the unique facets of the first-generation identity and seek to strengthen its presence on campus. FGSA will support first generation students at UCSD by fostering a sense of first-gen solidarity through community bonding activities and providing members with access to campus opportunities and resources."
    }
  },
  {
    syAUSNaUepaHFFTJkSUUcKfqMgx2: {
      clubName: "Frequency",
      contactEmail: "ucsdfgsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8527",
      description:
        "Frequency is the only all-male a cappella group at the University of California, San Diego (UCSD). Founded in 2008 and completely student-run, Frequency has been committed to promote a cappella music, provide entertainment through public and private performances, foster long-term relationships with the a cappella community on and off-campus, and to provide its members with leadership opportunities."
    }
  },
  {
    nNC3RBxlFShy9umoAIbECBzREtx2: {
      clubName: "Planned Parenthood Generation Action at UCSD",
      contactEmail: "ucsdfijipresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11931",
      description:
        "PLANNED PARENTHOOD GENERATION ACTION: UCSD exists to educate the community about reproductive health and rights, to translate increased awareness into pro-choice activism on campus and pro-LGBTQ activism, and to serve as a coalition to state, national, and international in both reproductive and LGBTQ rights efforts. PPGA believes in the fundamental right of every individual to manage their own fertility. PPGA supports full access to comprehensive reproductive and complementary health care services in settings that preserve and protect the essential privacy and rights of each individual; advocates public policies that guarantee these rights and ensure access to such services, and supports access to medically accurate educational programs that enhance understanding of human sexuality."
    }
  },
  {
    sBOmKct79vQqsRNauYYaj0WVNhA2: {
      clubName: "Global Development Council",
      contactEmail: "ucsdfrequency@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8514",
      description:
        "The mission of the Global Development Council is to help students aware of the importance of Global Development to self-development, and thus foster the comprehensive development of students. We provide academic workshops about Global and local issue and help students understand the society as a whole. Also, we operate our official accounts on public platforms, writing and posting the essays which advocate the global development. We also hold networking event with alumni or the successful people, in order to help students reach self-development while being aware of the global development. Global Development Council also focuses on the connections with other organizations or companies. We hold workshops or write journals or have GBM together with other organizations in order to fulfill our global mission. Global Development Council is a non-profit organization."
    }
  },
  {
    PQeH4gwCnkgvc9HJArBHXSuBZkk2: {
      clubName: "Harvest Christian Fellowship at UCSD",
      contactEmail: "ucsdgradpals@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10681",
      description:
        "A Christian student organization comprised of Chinese and English speakers associated with Harvest Evangelical Church of San Diego (HECSD), focused on Bible study and outreach, and whose purpose is to share the gospel and grow in faith. Our purpose is for the Gospel to be made known on the UCSD campus and to welcome all people to learn more and have a community that cares for and supports one another."
    }
  },
  {
    unGEdqiRl1hlop8RQQJzyUcukkJ2: {
      clubName: "Hermanas Unidas de UCSD",
      contactEmail: "ucsdhawaiiclub@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8541",
      description:
        "Hermanas Unidas reaches out to the Chicanx/Latinx community and provides resources as well as a network. Our three pillars are: Academics-Through the emphasis of academics not only do we empower our minds but our future as well. Community Service- In the struggle to empower ourselves we remember our communities and empower them as well. Collegial Networking- In stressing Hermandad, a family network is created to foster an environment of mutual respect and unity, while supporting individual interests and talents. The group provides a place where women can come together and be themselves. We accept any and all ideologies. We are a network attempting to provide a healthy transition to and from the university. Hermanas Unidas raises awareness and educates the campus and the community at large about Chicanx/Latinx issues."
    }
  },
  {
    woGP1Cu5gyWD0wwLhzdqAx6H38A2: {
      clubName: "House of Prayer at UCSD",
      contactEmail: "ucsdhearthstoners@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12035",
      description:
        "Provide Christians on campus with various activities of worship, devotion and prayer."
    }
  },
  {
    G0Q5ce8D0KZut1AhCCd6fF3dqn93: {
      clubName: "Imperial Valley Tritons",
      contactEmail: "ucsdhinduyuva@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10718",
      description:
        "The goal of the organization is to construct a relationship between the university and the Imperial County by outreaching students to encourage ongoing education, offer resources and useful workshops for students that show interest in higher education, build a stronger bond between UCSD students that come from the Imperial valley by providing mentorship and retention within ourselves, and to create a wide network within our culture to promote support academically, professionally, and mentally in our college journey. Members will experience a sense of belonging and support within the organization by being able to relate to students with similar backgrounds and gain knowledge from their experiences as well as from the programs offered."
    }
  },
  {
    "7mC5c8LHxROj0fQ7N3wS6Qynffs1": {
      clubName: "Initiative for Music Education and Mentorship (IMEM)",
      contactEmail: "ucsdhkcs@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8447",
      description:
        "IMEM reaches out to young, aspiring musicians to promote musicianship through tutoring for music performance and theory. We hope to foster musical appreciation in those who want exposure and do not have ready access to music resources, as well as enrich music programs in underserved populations. IMEM volunteers will work with these young musicians and provide mentorship to these students. Ultimately, we wish to strengthen the musical community and inspire more students to develop a stronger passion for music."
    }
  },
  {
    DyE2HpeixRZNGHUnZJsOgkras762: {
      clubName: "Inter-Sustainability Council",
      contactEmail: "ucsdicf@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8352",
      description:
        "To unite the various organizations/departments of UC San Diego that promote sustainable development into a cohesive network. The Inter-Sustainability Council functions as an intermediary to improve coordination and outreach between these groups and the UCSD community."
    }
  },
  {
    "19n8OmB1tOUjnvuCrOF5fGXChwr2": {
      clubName: "Kappa Zeta Phi",
      contactEmail: "ucsditsonus@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8421",
      description:
        "To provide an opportunity for long lasting friendship and sisterhood to develop the individual in the areas of wholesome attitudes and ideals."
    }
  },
  {
    raZS8ud1e3eOFiHhWB1DKn0wKTH2: {
      clubName: "International Graduate Student Ministry (IGSM) at UCSD",
      contactEmail: "ucsdivoperations@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10690",
      description:
        "The purpose of this organization is to provide all graduate students, but in particular international graduate students, the opportunity to learn about Christianity through studying the Bible and participating in Christian fellowship."
    }
  },
  {
    Ejj0gTZrBkhb9XCnFFG8DbuTA6j1: {
      clubName: "Kidz Next Door",
      contactEmail: "ucsdjsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8475",
      description:
        "Mission Statement: Established in 2014, Kidz Next Door is an exhibition hip-hop dance group based in UCSD. Created with the purpose to inspire others in the dance community, the group spreads their passion for dance through performances and workshops. Although the group's focus is built around the style of hip hop, many diverse styles and backgrounds are represented through the individual dancers such jazz, contemporary, salsa, etc. The Kidz Next Door Leadership pushes the group members to grow not only as dancers but as a family, encouraging them to respect one another as well as the community around them."
    }
  },
  {
    ZJc3xf8kAvhtFxWCGz9DXDVNLQr2: {
      clubName: "Kojobs at UCSD",
      contactEmail: "ucsdkapi@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8588",
      description:
        "Kojobs strives to act as an intermediary between students and companies, providing social networking events for students and professionals to assist students to become better prepared for their post-graduation lives. Kojobs also provides service activities within the community, and other activities held in relation to the organization will also be directed towards this purpose."
    }
  },
  {
    eJ29ZlSfO8TLUvJVEZCKrtCU9Fr1: {
      clubName: "Korean American Campus Mission",
      contactEmail: "ucsdkappasigmapresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8511",
      description:
        "To obey the Great Commission by discipling and mobilizing Collegians."
    }
  },
  {
    ZvdbLnAMArQd60yIJpFEbynJwka2: {
      clubName: "Lambda Theta Phi Latin Fraternity Inc.",
      contactEmail: "ucsdkasa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10730",
      description:
        "We aim to create a bridge between diversity and scholarship by fostering a space for men to share their diverse ideas and opinions while creating a strong brotherhood and serving our communities. We will work towards cultivating campus leaders and embrace all of the differences on campus. The Brothers of Lambda Theta Phi Latin Fraternity Inc. will invite and accept men from different ethnic backgrounds in order to improve our political consciousness, unify different ethnic groups, challenge our views, and grow as individuals."
    }
  },
  {
    KJjRcKv67TglIcoa9IxcjpfD5Em1: {
      clubName: "Lab, The",
      contactEmail: "ucsdkommonsociety@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8346",
      description:
        "The purpose of The Lab is to unite the dance community at UCSD through fellowship. We seek to give the dance community the space and means to communicate and collaborate with other dancers, including those in the greater San Diego dance community. Anyone committed to fostering the camaraderie of our campus community through a mutual love of dance is welcome. Our goal is to create a safe space for dancers, regardless of team affiliation, to practice their craft and share it with others. Achievement of this goal will be supplemented by official community hosted events, including but not limited to: performance opportunities, competition opportunities, bonding and publicity events, etc."
    }
  },
  {
    L8Ox6gxuItb21hv1xbjkMU0bE5V2: {
      clubName: "Lebanese Social Club",
      contactEmail: "ucsdkyrie@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11977",
      description:
        "LSC is a club for those who are Lebanese and non-Lebanese interested in uniting and promoting the culture. We are a non-political, non-religious campus organization interested in expanding the appreciation of Lebanon and its culture through networking and social events."
    }
  },
  {
    fHKADpjQAnZjp6TFs8ST40VCq1h2: {
      clubName: "Lumnus Consulting Junior Enterprise",
      contactEmail: "ucsdlambdas.president75@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8360",
      description:
        "Lumnus Consulting is a Junior Enterprise that was established at UC San Diego in 2016. Lumnus is run entirely by students and provides business and marketing consulting services for startups and small businesses."
    }
  },
  {
    VDTEgFDFq6Tos0ygXAJP5tcEOwU2: {
      clubName: "MakeNew",
      contactEmail: "ucsdlsc@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10650",
      description:
        "The purpose of this organization is to provide a safe space for students who are seeking to learn more about Christianity and for those who want to grow in their faith. We gather weekly to study the Bible and enjoy a time of fellowship with one another."
    }
  },
  {
    vMOgzAk9nlNUTU5e3zVqgc39iz53: {
      clubName: "Lighthouse College Life",
      contactEmail: "ucsdlxa.alpha@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10774",
      description:
        "To provide a church-sponsored Bible teaching Christian organization for students on-campus."
    }
  },
  {
    VyQwK6jEMKW1tn28hwzfiZU1Fe13: {
      clubName: "Navigators",
      contactEmail: "ucsdmasa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8381",
      description:
        "To advance the Gospel of Jesus and His Kingdom into the nations through spiritual generations of laborers living and discipling among the lost."
    }
  },
  {
    qWMT065PEDX0dC2TVALpw3lUDXs2: {
      clubName: "Muir Musical",
      contactEmail: "ucsdmetanoia@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10852",
      description:
        "The Muir Musical is a UCSD student organization that produces one completely student-run musical theatre production annually. Students from all six UCSD colleges are invited to participate in a full-scale Broadway production that marks the single musical theatre opportunity for UCSD students all year long."
    }
  },
  {
    f5cK2qHWpmWPh5nb5HLwtX0bC952: {
      clubName: "New Life Student Ministry",
      contactEmail: "ucsdmiac@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12027",
      description: "Student Campus Bible Study Group"
    }
  },
  {
    "2TTdKB1F7kNMzbnpnCsz6jh2sdw2": {
      clubName: "Movimiento Estudiantil Chicanola de Aztlan (MECHA)",
      contactEmail: "ucsdmls@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9602",
      description:
        "Movimiento Estudiantil Chicanx de AztlÃ¡n (M.E.Ch.A.) is a student organization that promotes higher education, cultura, and hxstoria. The goal of M.E.Ch.A. is create a consciousness, one in which to incorporate the political, the cultural, and the educational aspects of our community to those of the University. M.E.Ch.A. is a political voice for UCSD. It takes part in a series of political events through out the year, such as Raza Awareness Week. M.E.Ch.A. also honors many cultural holidays such as El dia de los Muertos and Las Posadas that occur in December; creating an atmosphere for social interaction. M.E.Ch.A. also strives in bridging the gap between High School and College by working directly with the youth of our community. This is accomplished through our annual Raza Youth Empowerment Conference, weekly outreach events, campus tours, overnight programs, and one on one mentoring. In realizing the importance of giving back to the community, we recognize that we are at UCSD to be successful students. We strive to build a community that is strong and united. The year is finalized with our Raza Graduation. Most importantly, throughout the year we build a strong network of people who are currently aware students, activists, and friends."
    }
  },
  {
    GlWHcq0eGaZswtMqET8R5KveEUq2: {
      clubName: "Nu Alpha Kappa, Inc.",
      contactEmail: "ucsdmsa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8469",
      description:
        "We, NU ALPHA KAPPA, seek to unite and involve all students in a more harmonious and brotherly atmosphere through academic, social, and cultural means. There is a need to interface the various backgrounds that constitute the student body of our fraternal university chapter, in order to improve relations amongst all students and the community."
    }
  },
  {
    MgEebHUfUeR97xmRqypyvD0jxiO2: {
      clubName: "Nikkei Student Union",
      contactEmail: "ucsdmusicandmemory@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8345",
      description:
        "To allow Japanese American, Japanese and any other interested student to interact in a socially conductive environment. To promote awareness of Japanese American and Japanese culture, history and issues on the UCSD campus. To provide a link between the Japanese American community on the UCSD campus and the Japanese American community in the areas surrounding UCSD."
    }
  },
  {
    dNTmvXhIEVNx2fETBNqhDiR74BH3: {
      clubName: "osu! at UCSD",
      contactEmail: "ucsdndaa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8468",
      description:
        "This is a local community for osu! players in and around UC San Diego. This club was founded to create connections with other osu! players and to promote our own niche culture, encourages socializing with fellow players, sharing accomplishments, and raising the fun and competitive nature of osu!. osu! is a music rhythm game. It's a difficult, fun, and addicting game that can be played with anything from mouse, tablet, to touchscreen and, if you're crazy enough, trackpad. Test your hand-eye coordination as you play osu!'s thousands of beatmaps."
    }
  },
  {
    kDNbmlR8bbQRTFJFtWnrZAIfgQS2: {
      clubName: "Pagasa",
      contactEmail: "ucsdnsu@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8453",
      description:
        "Our mission is to create a loving, supportive community through Christ, bringing collegiate students together with the Catholic Church. With God as a catalyst, Pagasa strives to empower students to learn and experience growth within themselves, further enhancing their spirituality. As a community, we are united by our devotion to the Holy Spirit, aiming to offer a space for prayer, support, and self-discovery. â€œPagasa,â€ meaning hope in Filipino, will stand as a driving force in enriching Catholic faith, upholding service, and finding truth within each other."
    }
  },
  {
    LMWzRdSXHsXNPGpqh0I9bWwEsqG2: {
      clubName: "Pi Kappa Alpha",
      contactEmail: "ucsdpbl@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8518",
      description:
        "Our purpose is to create a positive environment that focuses on the improvement of our pillars such as Scholars, Leaders, Athletes, and Gentlemen."
    }
  },
  {
    AM7tDlQ2MUVGPhMXzSaudKsCpOf2: {
      clubName: "Raza Graduate Student Association",
      contactEmail: "ucsdphb@globalbrigades.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10787",
      description:
        "The purposes of the Raza Graduate Student Association (RGSA) are to: 1) increase unity among graduate students of color, particularly Latinx/Chicanax students, at UCSD 2) promote graduate education to Latinx/Chicanax undergraduate student populations, and recruit them for graduate school at UCSD 3) provide a community, resources, and a social network for graduate students of color at UCSD 4) increase awareness and educate on different Latinx populations and history (RGSA is a not-for-profit organization.)"
    }
  },
  {
    "78ivJ8LgK9QVjyLCNSfoOcH8Fks2": {
      clubName: "Pre-Veterinary Student Association at UCSD",
      contactEmail: "ucsdpikepresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10684",
      description:
        "To inform and guide students who are interested in pursuing careers in veterinary medicine by introducing various resources such as volunteering opportunities and contacts with experienced professionals. In addition, the Pre-Veterinary Student Association at UCSD strives to create a positive community centered around helping one another reach their own individual goals within the field of veterinary medicine. A network of resources, support, and companionship will be fostered in order to motivate and encourage students to follow their chosen career paths. The club will help members refine their skills, improve their resumes, and expand their knowledge in preparation for applying to veterinary school."
    }
  },
  {
    b8DyhzprfAP1IIpUxcAur0U5fHm2: {
      clubName: "Quality of Life Plus Club (QL+)",
      contactEmail: "ucsdprevet@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10725",
      description:
        "The purpose of Quality of Life Plus Student Association (QL+) at UCSD (which will hereafter be referred to as QL+) is to foster and generate innovations and adaptive equipment through hands-on learning, to aid and improve the quality of life of those who are injured and who are still serving or have served in our United States military forces, or others within the local community. The club will provide local community members with assistive and adaptive equipment and other innovative devices tailored to an individualâ€™s needs to benefit their ability to complete tasks that may be difficult to perform on their own. Organization members will get hands-on project experience in the following areas, including but not limited to: prostheses, assistive technology, and medical devices. Organization members will have the opportunity to work together and engineer solutions to address an issue that a particular community member may be having. QL+ will foster innovation and continue the philanthropic mission of the QL+ Program."
    }
  },
  {
    ZDgckoxGz5QT2hA52oJ2z1HQKlL2: {
      clubName: "re:make at UCSD",
      contactEmail: "ucsdpublichealthclub@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10838",
      description:
        "Re:make is an undergraduate design organization that serves to rethink physical and digital design for students. Through organizing design projects, re:make provides opportunities and experiences for UCSD students to apply the theoretical design knowledge learned in classes, while at the same time gaining industry-relevant skills like parametric surface modelling, rendering, design thinking, storyboarding, and wireframing."
    }
  },
  {
    pY6wanrU7wUwxI89YpDftSSsJoq2: {
      clubName: "Red Cross at UCSD",
      contactEmail: "ucsdpushpanjali@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8395",
      description:
        "To provide Red Cross related activities and service opportunities to the UCSD student body."
    }
  },
  {
    o9s84tvEeOVBOuEcxzH0BwQPugp1: {
      clubName: "Rosa Parks Tutoring Program",
      contactEmail: "ucsdqb@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12074",
      description:
        "The purpose of the Rosa Parks Tutoring Program is to give members of the UCSD community the opportunity to offer free tutoring services to students at Rosa Parks Elementary School who are either recommended by teachers to be tutored or who independently seek out tutoring. The organization seeks to improve relations between UCSD and the local community. UCSD associates who are members of this organization are afforded the opportunity to share their reading, writing and math skills with young learners, reap the enjoyment of helping students in a formative stage of their education, and experience the satisfaction of witnessing progress in the studentsâ€™ performances."
    }
  },
  {
    NyeBb6JM1AgpupuW3V2IXTdLqcE2: {
      clubName: "Computer Science and Engineering Society",
      contactEmail: "ucsdrelay4life@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10747",
      description:
        "Sponsored by top tech companies and working closely with the CSE department, the Computer Science and Engineering Society provides opportunities to students beyond what they get in the classroom. These include company sponsored events to help you get internships and jobs, workshops to improve your technical skills, social events to build your network, and events that allow you to interact with CSE department faculty and staff! We are open to all students with an interest in computing, not just CSE majors!"
    }
  },
  {
    vGW0GxU5MYdW8ODR89P3JAGiw1Z2: {
      clubName: "Sigma Alpha Zeta",
      contactEmail: "ucsdrotaract@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11944",
      description:
        "The purpose of Sigma Alpha Zeta Sorority, Incorporated shall be to act as an elite multicultural group who promotes the upward mobility of women and enhances the community by means of education and voluntary services."
    }
  },
  {
    INPK9kB3t6ZwifGvS0TE4V84U922: {
      clubName: "Wushu club @ UCSD",
      contactEmail: "ucsdscholars@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8365",
      description:
        "The primary purpose of the Wushu Club is to provide any individual with the opportunity to be introduced to and learn wushu in a friendly and safe environment. The secondary purpose of the club is to prepare members for intercollegiate competitions such as the Annual Collegiate Wushu Tournament. The Wushu Club at UCSD is a non-profit student organization."
    }
  },
  {
    AkHqPZhcYnRNWmi4MwQs0Zg3ffp1: {
      clubName: "Acamazing",
      contactEmail: "ucsdsinging@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8465",
      description:
        "Acamazing is a co-ed a cappella group which seeks to provide a fun and enriching environment for singers and aspiring singers to make music without the use of instruments. We aim to nurture the musical talent of UCSD students and to entertain ourselves, the UCSD community, and the general public. Additionally, we hope that all members gain a better understanding of music and enrich their own musicality while building lasting friendships with their fellow members."
    }
  },
  {
    "0PYuVcSP63dNt2ndt6uOaXyO9Lp2": {
      clubName: "Student Foundation",
      contactEmail: "ucsdsitaare@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8563",
      description:
        "To promote, facilitate and perpetuate the philanthropic spirit among the UCSD student community."
    }
  },
  {
    fB4BZrL3YPMk8b0Ka4hHgN1Yviq2: {
      clubName: "Students for Justice in Palestine",
      contactEmail: "ucsdspot@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9630",
      description:
        "Part and parcel of the larger student movement sweeping university campuses across the United States, Students for Justice in Palestine (SJP) is a diverse group of students, faculty, staff, and community members centered at the University of California, San Diego and organized in accordance with democratic principles to promote justice, human rights, and the right of self-determination for the Palestinian people."
    }
  },
  {
    NXG27GqqIKb5FBePTXnlkjqUjh92: {
      clubName: "Transfer and Non-Traditional Students for Health",
      contactEmail: "ucsdtasa@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8578",
      description:
        "The purpose of this organization is to bring together a community of unique, transfer/non-traditional pre-health professionals on campus. We aim to provide educational resources, leadership opportunities, and volunteer opportunities to students who have a limited amount of time to prepare for applying to pre-health schools. These students include, but are not limited to: first generation college students, students considering a health profession, students pursuing a major in departments other than biology and chemistry, students belonging to demographics that are underserved in health professions, students who decided to be pre-health in their later years, and students returning to school after several years in the workforce and considering a health profession."
    }
  },
  {
    MRZAgFyDO6TpwPZbPQocaH3EWyP2: {
      clubName: "Triton Consulting Group",
      contactEmail: "ucsdteamhbv@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9596",
      description:
        "To create business leaders in the UCSD community by engaging students in the consulting sector, by providing them with real-life applications and professional development."
    }
  },
  {
    "1JzdE2YcF2hLxNkFVbiSLjL6QH92": {
      clubName: "Treble Singers at UCSD, The",
      contactEmail: "ucsdtgsa.website@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9648",
      description:
        "The purpose of this ensemble is to find joy through singing together. We sing for ourselves and perform to share our love of music with others. We will explore a wide variety of musical styles and genres, including jazz, classical, and popular music."
    }
  },
  {
    ZyAnlTvxu2cVkuDbRIKaxHYVVsh2: {
      clubName: "Theta Tau",
      contactEmail: "ucsdtkd3@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8418",
      description:
        "The purpose of Theta Tau is to build a strong fraternal bond and maintain high standards of professionalism among fellow members. We are a pre-professional engineering organization established for the development of the brothers of the fraternity.]Theta Tau aims to provide its members the social and professional development necessary to succeed during and after their college years."
    }
  },
  {
    hOv6XypKXkR3CwLfHjHc5brbuKp2: {
      clubName: "Triton Robotics",
      contactEmail: "ucsdtreblesingers@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11929",
      description:
        "Attend RoboMaster, an international collegiate robotic competition organized by DJI(Da-Jiang Innovations), in Shenzhen, China."
    }
  },
  {
    "7YZ581yrKARJoOEL7iMVjqsD8yZ2": {
      clubName: "Chinese Engineering Society",
      contactEmail: "ucsdtriplec@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12032",
      description:
        "The main purpose of Chinese Engineering Society (CES) at UCSD is to promote academic excellence and entrepreneurship among researchers and students in Chinese ethnicity. We aim to help maintain the diverse, inspirational environment in UCSD by providing opportunities in career network, professional development and academic communications, and furthermore encouraging the society members to contribute to the greater community through innovative ideas and projects."
    }
  },
  {
    mXjoFf4loIaJMViTH7IWNa9khBq2: {
      clubName: "Triton Unmanned Aerial Systems at UCSD",
      contactEmail: "ucsdtritoncs@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10699",
      description:
        "We are a student-run team that designs, builds, tests, and flies our own UAV to compete each year in the Student UAS Competition hosted by the AUVSI Seafarer Chapter against over 60 teams from around the world. The team is multi-disciplinary consisting of three subteams. The airframe team designs, analyzes and builds a reliable composite flight platform to house and transport a variety of avionics packages. The embedded team designs the payload and electronics. The software team programs the ability to complete mission tasks such as autonomously recognizing targets and dynamic path planning."
    }
  },
  {
    ajoWjqp6LCQzmJo3VCSmCBSBDdB3: {
      clubName: "Triton XR",
      contactEmail: "ucsdtritondota@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10749",
      description:
        "Triton XR is a student organization that connects students with the VR/AR industry through networking, workshops, and projects. Our mission is to foster a multi-disciplinary community dedicated to exploring and creating Virtual, Augmented, and Mixed Reality experiences."
    }
  },
  {
    rmOTwGaKCDTWACOBpbYK8xRNooE2: {
      clubName: "Women in ECE (WeCe)",
      contactEmail: "ucsducs@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12033",
      description:
        "To build a community among graduate women in Electrical and Computer Engineering to enhance their career opportunities."
    }
  },
  {
    jzawZQgk78SQlArdIdq7bb40U5q1: {
      clubName: "",
      contactEmail: "ucsdwamie@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    "96lMoaYkbHdra74iShKk3hRlAck2": {
      clubName: "Darkstar",
      contactEmail: "ucsdwellnesspeereducators@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9597",
      description:
        "Darkstar is a gathering of all those interested in Science Fiction and Fantasy. We are also a SF/F library of 6000+ books on campus, open to all students"
    }
  },
  {
    Vrw0anelCQVwFNAZX0LfeG0fsEl2: {
      clubName: "",
      contactEmail: "ucsdwib@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    iXDcMtDMOwXjtwF5NXoNaXIq63c2: {
      clubName: "",
      contactEmail: "UCSDwushu@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    vskZYjQ7I8MyaVaOaKsv0inMKmE3: {
      clubName: "Chinese American Student Association",
      contactEmail: "ucsdxopresident@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8593",
      description:
        "The Chinese American Student Association (CASA) is a cultural, social, and community service oriented organization, striving to promote the Chinese American culture throughout UCSD and its surrounding community. Founded in 1972 at the University of California - San Diego, CASA is an organization that serves to unite all those with a love of the Chinese culture under a common banner in order to forge life-long friendships and to explore the 5,000-year-old Chinese culture."
    }
  },
  {
    CUsfTgjjtKOLTIAT6L5JTI0Vw4C3: {
      clubName: "Women in Science Society",
      contactEmail: "ues@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10727",
      description:
        "We are committed to promoting the academic and professional success of collegiate women pursuing their degrees in the sciences, educating them on their career and extracurricular options and motivating them to complete their undergraduate coursework and enter the STEM workforce."
    }
  },
  {
    "7C6t0s1t3sOSO52gC7r8War3oqu1": {
      clubName: "Women SPEAK",
      contactEmail: "uis.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9606",
      description:
        "The purpose of Women SPEAK is to promote girls' health and leadership by cultivating positive body image, establish healthy relationships, defy and deconstruct gender media stereotypes, and become leaders of change in their local communities."
    }
  },
  {
    tnNLnfgYiDVga7RiZYzvMDuyOuf1: {
      clubName: "Yifang Chinese Musical Club (YFM)",
      contactEmail: "undiesforoldiesucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10799",
      description:
        "The purpose of starting this Chinese Musical Club is to introduce the musicals combined with Chinese culture to the UCSD communities, and provide students who are interested in musicals with a place to communicate with each other."
    }
  },
  {
    "5npYCZn3KFbxlOAYbMiMl8FTvAi2": {
      clubName: "Yonder Dynamics",
      contactEmail: "USASDiego@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9627",
      description:
        "Yonder Dynamics is UC San Diego's premier robotics organization for undergraduates that focuses on designing and building autonomous rovers for terrestrial exploration. Every year, we compete in the University Rover Challenge, a prestigious international competition that challenges teams to design and build a rover that would be of use to early explorers on Mars. Our primary purpose is to empower undergraduates to work in robotics, space, and related fields, regardless of their age and major, or other circumstances. We believe in developing individuals from the ground up to prepare them for their future endeavors. With a mix of students from all backgrounds, we pride ourselves on inclusivityâ€“robotics is for everyone."
    }
  },
  {
    lbpBqqEBaGTBXY1cuUVfN7XB4q92: {
      clubName: "Young Planners Society",
      contactEmail: "vgdc@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8432",
      description:
        "Young Planners' Society (YPS) is a career oriented network for undergraduate USP students and those who are interested in city planning and related careers. Founded in Fall 2018, YPS hosts weekly meetings that alternate between social opportunities and professional/educational development. Each quarter, YPS also incorporates faculty involvement and a community site visit. YPS is one of the founding sponsors and host of UCSD's annual Designathon, a weekend-long challenge that allows students and community members to provide solutions to campus planning and design focus areas. In addition, YPS aims to connect students with both regional planning-oriented companies and local jurisdiction planning agencies to facilitate professional mentorship opportunities for students. The Young Planners Society is represented as a nationally registered planning student organization under the American Planning Association (APA) California chapter, and is locally represented under the San Diego APA chapter."
    }
  },
  {
    "6WRWL5bRpBQeiaqrjYVkdmgyvPk2": {
      clubName: "College Democrats at UCSD",
      contactEmail: "vpa@ucsdcki.org",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8369",
      description:
        "The purpose of the College Democrats, a non-profit organization, is to educate students about the philosophy of the Democratic Party, promote campus discussion of issues of concern to students and the nation at large, foster involvement in political movements, and affect political change on a local, state, and national level"
    }
  },
  {
    oo8MVnuNhzQmjkxf0l4SMTflOvT2: {
      clubName: "",
      contactEmail: "wece@ucsd.edu",
      pageURL: "",
      description: ""
    }
  },
  {
    styoImxwuIXd3q9C2sNWg1WqfrR2: {
      clubName: "Graduate Christian Fellowship",
      contactEmail: "weg021@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/9625",
      description:
        "GCF exists to help academics in the San Diego community on the lifelong journey of understanding and growing closer to God."
    }
  },
  {
    "6gAfYtooGOcjsQ33aeKqA7dpV8u2": {
      clubName: "",
      contactEmail: "wetheredeemedcollege@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    zGyvMQVKQRRhDZ25fsO4qa8jKDW2: {
      clubName: "Wordsmiths:",
      contactEmail: "wic.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8590",
      description:
        "The goal of Wordsmiths is to provide a place for writers and editors to collaborate in order to fulfill the mutual goals of both parties. Members of Wordsmiths will gain a community of like-minded individuals who will support their goals and provide assistance in honing their craft by editing, beta reading, and offering peer feedback."
    }
  },
  {
    XQaUjJSI3lUibJdmxOqZCFGeXjB3: {
      clubName: "",
      contactEmail: "womenspeakucsd@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    lKWo43eZCOcUV7lQpDB3nOaR0pa2: {
      clubName: "",
      contactEmail: "wordsm@ucsd.edu",
      pageURL: "",
      description: ""
    }
  },
  {
    lQ7cj2ubTgWJSMH4r5DFD8y9jzw2: {
      clubName: "",
      contactEmail: "wss.ucsd@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    QOaFvUz9qoUggzUCUuI8FkD4dHp2: {
      clubName: "Tritons for a Free Press",
      contactEmail: "wtbui@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/11858",
      description:
        "The purpose of TFFP shall be to advocating for the exercise of a free press for the student body of UCSD. This organization shall serve as the official representation of the independent student press at the UCSD."
    }
  },
  {
    XoyzjSDEZbWc7J4dvC3UziAVIYP2: {
      clubName: "Lion Dance at UCSD",
      contactEmail: "xi1986president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8440",
      description:
        "1. Lion Dance at UCSD is established for the purpose of providing cultural enrichment to UCSD and San Diego area by practicing, performing, and teaching the ancient art of Chinese Lion Dancing. 2. Lion Dance at UCSD intends to perform for any UCSD affiliated groups and events as well as non-UCSD affiliated organizations interested in our presentation. 3. Lion Dance at UCSD is a Not-For-Profit organization, and will rely on donations, contributions, and other forms of fundraising to finance equipment."
    }
  },
  {
    MbWhproCCBRYJpZIWItAA4YNxtD3: {
      clubName: "Pre-Medical APAMSA at UCSD",
      contactEmail: "xpsr.president@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8379",
      description:
        "The purpose of our organization is to involve and educate pre-medical undergraduate students at UCSD on the health issues that pertain to the Asian community and enable them to serve the Asian Pacific communities throughout the greater San Diego region. As a pre-medical organization, we plan to educate our members on health issues that pertain to the Asian community, provide them with resources and insights into medical school, the medical school application process through a mentorship program."
    }
  },
  {
    "7aLg6kwny6OqKCNpb33fjW5ZxlS2": {
      clubName: "Young Democratic Socialists of America at UCSD",
      contactEmail: "y1su@ucsd.edu",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/12038",
      description:
        "Our mission is to educate and organize students and young people and to play a helpful and principled role in the movement for social justice. Within and throughout this struggle, we will articulate and defend the idea that true human liberation is impossible under capitalism. We seek social change which extends democracy into all aspects of life -- social, political and economic. This is the struggle for democratic socialism. Our vision of socialism is profoundly democratic, feminist, and anti-racist."
    }
  },
  {
    "5GZomvsaVYPO4kTfM89SnjIkMZ03": {
      clubName: "",
      contactEmail: "yifang020@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    CGHsmzFHqKVO6eWYxnWbThHGRxf2: {
      clubName: "Triton Gaming",
      contactEmail: "ymaa.ucsd@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/10744",
      description:
        "Triton Gaming is a group of collegiate organizers that team up to create epic entertainment experiences for student gamers at the University of California, San Diego. Our organization is the product of several independent on-campus gaming organizations that each represent a different gaming genre and student community. Through Triton Gaming, our team strives to create an exciting, diverse, and all-inclusive gaming environment on campus through high-quality live events."
    }
  },
  {
    "53H1z9aMuOT3bbkM0SFXSOO3nUU2": {
      clubName: "",
      contactEmail: "yonder.dynamics@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    "4XYlWu4WB4WcjoZVC5Aj9I2y1f02": {
      clubName: "",
      contactEmail: "youngmindsucsd@gmail.com",
      pageURL: "",
      description: ""
    }
  },
  {
    "150": {
      clubName: "Global Medical Brigades",
      contactEmail: "yuz461@ucsd.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8399",
      description:
        "Global Medical Brigades (GMB) is a secular, international network of university clubs that travel to developing countries to perform health care in communities without access to medicine otherwise. GMB delivers a holistic model for sustainable health through rigorous needs assessments, sponsoring referrals to those with needs beyond our capacity, keeping accurate electronic patient records, and working to improve the water and overall public health infrastructures of the villages we serve."
    }
  },
  {
    "": {
      clubName: "",
      contactEmail: "zbsc@ucsd.edu",
      pageURL: "",
      description: ""
    }
  },
  {
    "123": {
      clubName: "Empower: Educate and Inspire",
      contactEmail: "zhangfutian1@gmail.com",
      pageURL: "https://studentorg.ucsd.edu/Home/Details/8408",
      description:
        "The purpose of this organization is to raise awareness about global issues through different projects and working the community to make an impact in the real world."
    }
  }
];
let club_data = { clubs: club_list };
