//I prefer writing code and comments in English even dho the task we have got is in Norwegian. I might use some of the names or words you used in the videos as names for some code fucntions and so on.
// Since some of them will be weird to translate to english and the site isteself are gonna show its content in Norwegian.

//this file shall include the data structure of the workers(ansatte) at a university. one worker shall have a last name and a first name. which office they are at(sitting at), also which work
//postions they have and the name of the work postion they have (that spesific worker). their work mail (mail adress) and for last it shall also include which courses they have or have the responsibility for.
//the work postions they can have are: Professor, Dekan, Janitor, Principal. (Norwegian: Professor, Rektor, Dekan, Vaktmester og Lektor). The notes to myself about the task and so has been moved to a seperate file as to not clog this one up.
const workersData = [
    {
        firstname: "",
        lastname: "",
        office: "",
        position: "",
        email: "",
        courses: "",
    }
]
//or shall I use this set up hmm?
const employees = [
    {
        firstname: "Ola R1",
        lastname: "Berg",
        office: "C310",
        email: "1ola.berg@hiof.no",
        postion: positions[1],
        courses: []
    },

    {
        firstname: "Ola d1",
        lastname: "Berg",
        office: "C310",
        email: "2ola.berg@hiof.no",
        postion: positions[2],
        courses: []
    },
        {
        firstname: "Ola d2",
        lastname: "Berg",
        office: "C310",
        email: "3ola.berg@hiof.no",
        postion: positions[2],
        courses: []
    },

        {
        firstname: "Ola v1",
        lastname: "Berg",
        office: "C310",
        email: "4ola.berg@hiof.no",
        postion: positions[3],
        courses: []
    },
    {
        firstname: "Ola v2",
        lastname: "Berg",
        office: "C310",
        email: "5ola.berg@hiof.no",
        postion: positions[3],
        courses: []
    },
        {
        firstname: "Ola v3",
        lastname: "Berg",
        office: "C310",
        email: "6ola.berg@hiof.no",
        postion: positions[3],
        courses: []
    },

        {
        firstname: "Ola p1",
        lastname: "Berg",
        office: "C310",
        email: "7ola.berg@hiof.no",
        postion: positions[0],
        courses: ["C1"]
    },
    {
        firstname: "Ola p2",
        lastname: "Berg",
        office: "C310",
        email: "8ola.berg@hiof.no",
        postion: positions[0],
        courses: ["C2"]
    },
        {
        firstname: "Ola p3",
        lastname: "Berg",
        office: "C310",
        email: "9ola.berg@hiof.no",
        postion: positions[0],
        courses: ["C3"]
    },
        {
        firstname: "Ola p4",
        lastname: "Berg",
        office: "C310",
        email: "10ola.berg@hiof.no",
        postion: positions[0],
        courses: ["C4"]
    },
    {
        firstname: "Ola p5",
        lastname: "Berg",
        office: "C310",
        email: "11ola.berg@hiof.no",
        postion: positions[0],
        courses: ["C5"]
    },

        {
        firstname: "Ola L1",
        lastname: "Berg",
        office: "C310",
        email: "12ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C6"]
    },
            {
        firstname: "Ola L2",
        lastname: "Berg",
        office: "C310",
        email: "13ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C7"]
    },

        {
        firstname: "Ola L3",
        lastname: "Berg",
        office: "C310",
        email: "14ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C8"]
    },
    {
        firstname: "Ola L4",
        lastname: "Berg",
        office: "C310",
        email: "15ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C9"]
    },
        {
        firstname: "Ola L5",
        lastname: "Berg",
        office: "C310",
        email: "16ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C10"]
    },

        {
        firstname: "Ola L6",
        lastname: "Berg",
        office: "C310",
        email: "17ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C11"]
    },
    {
        firstname: "Ola L7",
        lastname: "Berg",
        office: "C310",
        email: "18ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C12"]
    },
        {
        firstname: "Ola L8",
        lastname: "Berg",
        office: "C310",
        email: "19ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C13","2C3"]
    },
        {
        firstname: "Ola L9",
        lastname: "Berg",
        office: "C310",
        email: "20ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C14","2C2"]
    },
    {
        firstname: "Ola L10",
        lastname: "Berg",
        office: "C310",
        email: "21ola.berg@hiof.no",
        postion: positions[4],
        courses: ["C15","2C1"]
    }
]

// remember that stilling shall be its own list and that it shall be sued in the indexsen from this list to explain which stilling one employye/worker (ansatt) has in the the overview(oversikt) over the employees/workers(ansatte). 
const positions = [
    "Professor", 
    "Rektor", 
    "Dekan", 
    "Vaktmester",
    "Lektor"
]