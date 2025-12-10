//this file shall include the data structure of the workers(ansatte) at a university. one worker shall have a last name and a first name. which office they are at(sitting at), also which work
//positions they have and the name of the work position they have (that specific worker). their work mail (mail address) and for last it shall also include which courses they have or have the responsibility for.
//the work positions they can have are: Professor, Dekan, Janitor, Principal. (Norwegian: Professor, Rektor, Dekan, Vaktmester og Lektor). 

//Added a const for the positions that are at the university #OPPD1
const positions = [
    "Professor", //professor = 0
    "Rektor", //Rektor = 1
    "Dekan", //Dekan = 2
    "Vaktmester",//Vaktmester = 3
    "Lektor"//Lektor = 4
]
//Added a const for employees, so I would have a list here that I could use here and in the other files. #OPPD1
const employees = [
    //Rektor
    {
        firstname: "Eva", //r1
        lastname: "Lund",
        office: "A101",
        email: "eva.lund@hiof.no",
        position: positions[1],
        courses: []
    },
//Dekaner
    {
        firstname: "Tore", //d1
        lastname: "Sørensen",
        office: "B203",
        email: "tore.sorensen@hiof.no",
        position: positions[2],
        courses: []
    },
        {
        firstname: "Mai", //d2
        lastname: "Nguyen",
        office: "B204",
        email: "mai.nguyen@hiof.no",
        position: positions[2],
        courses: []
    },
//Vaktmestere
        {
        firstname: "Per", //v1
        lastname: "Johansen",
        office: "V101",
        email: "per.johansen@hiof.no",
        position: positions[3],
        courses: []
    },
    {
        firstname: "Khalid", //v2
        lastname: "Ali",
        office: "V002",
        email: "khalid.ali@hiof.no",
        position: positions[3],
        courses: []
    },
        {
        firstname: "Siri", //v3
        lastname: "Hansen",
        office: "V003",
        email: "siri.hansen@hiof.no",
        position: positions[3],
        courses: []
    },
//Professorere
        {
        firstname: "Ola", //p1
        lastname: "Berg",
        office: "C310",
        email: "ola.berg@hiof.no",
        position: positions[0],
        courses: ["Programmering1, Webutikling"]
    },
    {
        firstname: "Lina", //p2
        lastname: "Eriksen",
        office: "C312",
        email: "Lina.Eriksen@hiof.no",
        position: positions[0],
        courses: ["Algoritmer og datastruktur"]
    },
        {
        firstname: "Jonas", //p3
        lastname: "Muller",
        office: "C313",
        email: "jonas.muller@hiof.no",
        position: positions[0],
        courses: ["Kunstig intelligens, Maskinlæring"]
    },
        {
        firstname: "Ingrid", //p4
        lastname: "Pettersen",
        office: "C314",
        email: "ingrid.pettersen@hiof.no",
        position: positions[0],
        courses: ["Databaser"]
    },
    {
        firstname: "Sara", //p5
        lastname: "Ahmed",
        office: "C315",
        email: "sara.ahmed@hiof.no",
        position: positions[0],
        courses: ["Operativesystemer"]
    },
//lektorere
        {
        firstname: "Henrik", //L1
        lastname: "Nilsen",
        office: "D401",
        email: "henrik.nilse@hiof.no",
        position: positions[4],
        courses: ["Webdesign, Responsiv utvikling"]
    },
            {
        firstname: "Anne", //L2
        lastname: "solberg",
        office: "D402",
        email: "Anne.Solberg@hiof.no",
        position: positions[4],
        courses: ["Grunnleggende javaScript"]
    },

        {
        firstname: "Trond", //L3
        lastname: "Bakken",
        office: "D403",
        email: "Trond.Bakken@hiof.no",
        position: positions[4],
        courses: ["UX-design"]
    },
    {
        firstname: "Kari", //L4
        lastname: "Holm",
        office: "D404",
        email: "Kari.Holm@hiof.no",
        position: positions[4],
        courses: ["Frontend-utvikling, Css og design"]
    },
        {
        firstname: "Eirik", //L5
        lastname: "Larsen",
        office: "D405",
        email: "Eirik.Larsen@hiof.no",
        position: positions[4],
        courses: ["Python for web"]
    },

        {
        firstname: "Ida", //L6
        lastname: "Martinsen",
        office: "D406",
        email: "Ida.Martinsen@hiof.no",
        position: positions[4],
        courses: ["Systemutvikling"]
    },
    {
        firstname: "Rune", //L7
        lastname: "Karlsen",
        office: "D407",
        email: "Rune.Karlsen@hiof.no",
        position: positions[4],
        courses: ["Objektorientert programmering"]
    },
        {
        firstname: "Mona", //L8
        lastname: "Strøm",
        office: "D408",
        email: "Mona.Strøm@hiof.no",
        position: positions[4],
        courses: ["Datakommunikasjon"]
    },
        {
        firstname: "Tom", //L9
        lastname: "Rasmussen",
        office: "D409",
        email: "Tom.Rasmussen@hiof.no",
        position: positions[4],
        courses: ["Datasikkerhet"]
    },
    {
        firstname: "Julie", //L10
        lastname: "Olsen",
        office: "D410",
        email: "Julie.Olsen@hiof.no",
        position: positions[4],
        courses: ["Prosjektledelse"]
    }
]

