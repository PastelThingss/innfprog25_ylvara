//function 1
//I added a appendChild to take from prior code (find better word, sentence structure here)#OPPD1
//#OPPD3 I added a Para so they would be affected and have the same looking text, I also added the strong so the stilling and so on would become bold. so it would look more like the site.
const getSingleEmployee = (index,adminbutton = false) => {
    const employee = employees[index]
    const article = document.createElement("article")

    const name = document.createElement("h3")
    const content = document.createTextNode (`${employee.firstname} ${employee.lastname}`)
    name.appendChild(content)
    article.appendChild (name)
//which is is to try to put Para on positions,office and email and the Tostring one to see of this fixes it. 
// in simple terms copy courses change it to fit the needs of the other parts of the workers card
//#OPPD1 added papa positions to see if it fixed my issue that my text would show up right in the browser
//#OPPD3 basically doubled it by adding the strong for the box card on which info it was like stilling and then the stilling name came after in not old text.
    const positionPara = document.createElement ("p");
    const positionStrong = document.createElement ("strong")
    positionStrong.textContent = "Stilling:"
    positionPara.appendChild (positionStrong)
    const textspositionPara = document.createTextNode (` ${employee.position}`)
    positionPara.appendChild (textspositionPara)
    article.appendChild (positionPara);

    const officePara = document.createElement ("p");
    const officeStrong = document.createElement ("strong")
    officeStrong.textContent = "Kontor:"
    officePara.appendChild (officeStrong)
    const textsofficePara = document.createTextNode (` ${employee.office}`)
    officePara.appendChild (textsofficePara)
    article.appendChild (officePara);
    
    const emailPara = document.createElement("p")
    const emailStrong = document.createElement("strong")
    emailStrong.textContent = "E-post:"
    emailPara.appendChild(emailStrong)

    //link to make email into a actual clickable link
    const emailLink = document.createElement("a")
    emailLink.href = `mailto:${employee.email}`
    emailLink.textContent = ` ${employee.email}`
    emailPara.appendChild(emailLink)

    article.appendChild(emailPara)

    const coursesPara = document.createElement ("p")
    if (employee.courses.length > 0) {
        
    //const courses = document.createElement ("p")
    const coursesTostring = employee.courses.join (", ")
    const coursesStrong = document.createElement ("strong")
    coursesStrong.textContent = "Kursansvar:"
    coursesPara.appendChild (coursesStrong) 
    const textsCoursesPara = document.createTextNode (` ${coursesTostring}`)
    coursesPara.appendChild (textsCoursesPara)
    article.appendChild (coursesPara)
    }
    else {
        //const coursesTostring = employee.courses.join (", ") (remove this!!)
    const courseStrong = document.createElement ("strong")
    courseStrong.textContent = "Kursansvar:"
    coursesPara.appendChild (courseStrong)
    const textsCoursesPara = document.createTextNode (" ingen kursansvar")
    coursesPara.appendChild (textsCoursesPara)
    article.appendChild (coursesPara)
    };
//COMMENT HERE (Is this one needed or ccan it be removed?)
    if(
        adminbutton === true
    ){
    
    const deleteButton = document.createElement ("button")
    deleteButton.textContent = "Slett ansatt"
    deleteButton.onclick = function() {removeEmployee(index) ;displayAllEmployees (adminbutton = true)} 
    article. appendChild (deleteButton)
    }
//this is for when we reloads the site the article will be reset as it was before we added the changes
    return article 
} 
//Added the function to get single employee and to get element from the employee list from the register js file #OPPD1
//#OPPD3 I changed the get single employee into a display all employees and added for each into it to display all the different positions
//function 2
const displayAllEmployees = (adminbutton = false) => {
    const container = document.getElementById ("employees-list")
    container.innerHTML = ""
    // const employeesLength = employess.length (can this be removed now?)
    employees.forEach ((_, index) => {
    container.appendChild (getSingleEmployee(index, adminbutton))
    })
    return container
    // for (let index in employeesLength) (can it be removed)
}
//function 3
//#OPPD1 added the filter position name to filter the positions after the names of the positions we put in the register js
const filterByPosition = (positionName) => {
    const container = document.getElementById ("employees-list")
    container.innerHTML =""
    employees.forEach ((employee, index) => {
        if (employee.position === positionName) {
            container.appendChild (getSingleEmployee (index))
        }
    })
    return container
}
//function 4
//#OPPD1 added the get all courses to get the li to sit over courses we have at the university
//#OPPD3 added the append child from courses html the ul tag to make it take the look of it and be affected by the css(is this comment correct)
const getAllCourses = () => {
    const allCourses = []
    const coursesHTML = document.getElementById ("all-courses-list")
    const ul = document.createElement("ul")
    employees.forEach (employees => {
        employees.courses.forEach (course => {
            if(!allCourses.includes (course)) {
                const li = document.createElement ("li")
                li.textContent = course
                ul.appendChild (li)
                allCourses.push (course)
            }
        })
    })
    coursesHTML.appendChild (ul)
    return allCourses
}
//function 5
//#OPPD1 added the filter teachers so you could filter the different types of teachers
//#OPPD3 added the append child tag to make it show up/work with the html sheet
const filtersTeachers = () => {
    const container = document.getElementById ("employees-list")
    container.innerHTML = ""
    employees.forEach((employee, index) => {
        if (employee.position == "Professor" || employee.position === "Lektor") {
            container.appendChild (getSingleEmployee (index))
        }
    })
    return container
}
//function 6
//#OPPD1 added the filter administration to make it show up as a the filter button on top to be able to filter it out
//#OPPD3 changed the english names to norwegian to match the site so everything on the site would be in norwegian an not a mix between english and norwegian
const filterAdministration =() => {
    const container = document.getElementById ("employees-list")
    container.innerHTML = ""
    employees.forEach ((employee,index) => {
        if (employee.position == "Rektor" || employee.position === "Dekan") {
        container.appendChild (getSingleEmployee(index))
    }
    })
    return container
}
//function 7
//#OPPD1 added the opportunity to add a new employee to teh employee stock? (re word this one)
//#OPPD3 changed the splice into a push instead to better fit our needs in task 3
const addEmployee = (newEmployee) => {
    if (!newEmployee) {
        return false
    }
    employees.push (newEmployee)
    return employees
}
//function 8 
//#oppd3 added the 8 function to be able to delete employees we want to delete in the admin html
const removeEmployee = (index) => {
    if (!employees) {
        return false
    }
    employees.splice (index, 1)
    return employees
}


