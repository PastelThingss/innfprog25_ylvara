//have we over complicated this part again? Remember precise and to the point code not over overlycomplicated big arse boxses of code u squiggly brain.
//okay retry time with fresh eyes on this that re-read the task again adn read-up on curtain infomartion for this part.
//function 1
const getSingleEmployee = (index) => {
    const employee = employees[index]
    const article = document.createElement("article")

    const name = document.createElement("h3")
    const content = document.createTextNode (`${employee.firstname} ${employee.lastname}`)
    name.appendChild(content)
    article.appendChild (name)
//okay as we do with code we try and faila and try agian. so game plan rn for youself is to try the use same code for more than one
//part try to see if you can use the same code lines for more parts or adjust in a way to fit more parts than jsut one.
//game plan for now so your squirrel brain can read this if you somehow forget yur train of tought. which is
//is to try to put Para on psotions,office and email and the Tostring one to see of this fixes it. 
// in simple terms copy courses chnage it to fit the needs of the other parts of the workers card yeah:) For hope this makes sense to yourself later we both can hope for that past me to future me

    const positionPara = document.createElement ("p"); //have you mixed two things in this code part now? let it be and work on somthing else here and comeback and see if you can see your error. Present me thinks we might have mixed up in the way of is it this or that. Future me will tell me in the way of code stays or be chnaged
    //positionPara.textContent = `position: ${positions[employee.position]}`;
    positionPara.textContent = `position: ${employee.position}`
    article.appendChild (positionPara);

    const officePara = document.createElement ("p");
    officePara.textContent = `office: ${employee.office}`
    article.appendChild (officePara);

    const emailPara = document.createElement ("p")
    emailPara.textContent = `email: ${employee.email}`
    article.appendChild (emailPara)


    if (employee.courses.length > 0) {
        const coursesPara = document.createElement ("p")
    //const courses = document.createElement ("p")
    const coursesTostring = employee.courses.join (", ")
    coursesPara.textContent = `courses: ${coursesTostring}`
    article.appendChild (coursesPara)
    }
    //comment for myself: Are you mixing up things now? Like as a example is this courses or teachers, make
    //sure you write about the correct or are not writing one thing and thinking/meaning the other one! double check yourself here!
    return article 
} 
//coruses dosent equal the kursansvar so remeber to fix courses so it means the same as kursansvar
//THINK STRUCTUALLY SOUND BONES FOR THE CODE THINK OF A ATATOMIC SKELETON STRUCTURE AND NOT A ABOMINATION!!
//REMEMBER TO COMMENT YOUR GAH DAMN CODE U TUFF NUGGET. ALSO LINKY LINK RIGHT NO FORGET ONLY REMEMBER!!:D

//function 2
const displayAllEmployees = () => {
    const container = document.getElementById ("employees-list")
    container.innerHTML = ""
    employess.forEach ((_, index) => {
    container.appendChild (getSingleEmployee(index))
    })
}

//function 3
const filterByPosition = (positionName) => {
    const container = document.getElementById ("employees-list")
    container.innerHTML =""
    employees.forEach ((employee, index) => {
        if (employee.position === positionName) {
            container.appendChild (getSingleEmployee (index))
        }
    })
}

//function 4
const getAllCourses = () => {
    const all Courses = []
    employees.forEach (employee => {
        employee.courses.forEach (course => {
            if(!getAllCourses.includes (course)) {
                getAllCourses.push (course)
            }
        })
    })
    return allCourses
}

//function 5
const filtersTeachers = () => {
    const conatiner = document.getElementById ("employyes-list")
    container.innerHTML = ""
    employees.forEach((employee, index) =>{
        if (employee.position == "professor" || employee.postition === "Lektor") {¨
            container.appendChild (getSingleEmployee (index))
        }
    })
}

//function 6
const filterAdminstration =() => {
    const container = document.getElementById ("employees-list")
    container.innerHTML = ""
    employees.forEach ((employee,index)) => {
        if employee.postion == #Principal" || employee.postiion === "dekan") {
        container.appendChild (getSingleEmployee(index))
    }
    })
}

//function 7
const add Employee = (newEmployeer) => {
    if (!newEmployee || !newEmployee-firstname || !newEmplkoye.lastnae) {
        rerun false
    }
    employes.splice (index, 1)
    rerun ture
}
 //befire u move on fix written errrors or other writing mistakes in this part.
//function 8 den egentlige åttende men er syvende?? se om du forstår eller hører hva han sier.
const

