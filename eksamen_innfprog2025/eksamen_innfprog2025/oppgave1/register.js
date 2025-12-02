//I prefer writing code and comments in English even dho the task we have got is in Norwegian. I might use some of the names or words you used in the videos as names for some code fucntions and so on.
// Since some of them will be weird to translate to english and the site isteself are gonna show its content in Norwegian.

//this file shall include the data structure of the workers(ansatte) at a university. one worker shall have a last name and a first name. which office they are at(sitting at), also which work
//postions they have and the name of the work postion they have (that spesific worker). their work mail (mail adress) and for last it shall also include which courses they have or have the responsibility for.
//the work postions they can have are: Professor, Dekan, Janitor, Principal. (Norwegian: Rektor, Dekan, Vaktmester og Lektor). The notes to myself about the task and so has been moved to a seperate file as to not clog this one up.
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
        firstname: "Ola",
        lastname: "Berg",
        office: "C310",
        email: "ola.berg@hiof.no",
        postion: "Professor",
        courses: "Programmering 1, Webutvikling"
    }
]

// remember that stilling shall be its own list and that it shall be sued in the indexsen from this list to explain which stilling one employye/worker (ansatt) has in the the overview(oversikt) over the employees/workers(ansatte). 