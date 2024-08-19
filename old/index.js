import {clickAdd} from "./nav/add/add.js"
import {clickConnect} from "./nav/connect/connect.js"
import {clickApply} from "./nav/apply/apply.js"
import {clickReconnect} from "./nav/reconnect/reconnect.js"
import {clickUpdate} from "./nav/update/update.js"
import {clickViewAll} from "./nav/viewall/viewall.js"

export const Stage = Object.freeze({
    CONNECT: 1,
    APPLY: 2,
    RECONNECT: 3,
    WAITING: 4
});


export class Internship {
    constructor(company, position, dueDate, priority) {
        this.company = company;
        this.position = position;
        // this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.stage = Stage.CONNECT;
    }
}

export function getInternships() {
    const internshipsJSON = localStorage.getItem('internships');
    const internshipsArray = internshipsJSON ? JSON.parse(internshipsJSON) : [];
    return internshipsArray.map(internshipObj => new Internship(internshipObj.company, internshipObj.position, internshipObj.dueDate, internshipObj.priority));
}

export function saveInternships(internships) {
    const internshipsJSON = JSON.stringify(internships);
    localStorage.setItem('internships', internshipsJSON);
}

export function addInternship(company, position, dueDate, priority) {
    let internships = getInternships();

    // Check if an internship with the same company and position already exists
    const duplicateInternship = internships.find(intern => intern.company === company && intern.position === position);
    if (duplicateInternship) {
        console.log("This internship opportunity already exists. Please edit the existing entry.");
        return;
    }

    const newInternship = new Internship(company, position, dueDate, priority);
    // console.log(newInternship);
    internships.push(newInternship);
    // console.log(internships);
    saveInternships(internships);
}

export function addSubmitListener() {
    document.getElementById('internship-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;
        // const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;
    
        addInternship(company, position, dueDate, priority);
        document.getElementById('internship-form').reset();
    });
}

export function addNavListeners() {
    document.getElementById('nav-add').addEventListener('click', function(event) {
        event.preventDefault();
        clickAdd();
    });
    document.getElementById('nav-connect').addEventListener('click', function(event) {
        event.preventDefault();
        clickConnect();
    });
    document.getElementById('nav-apply').addEventListener('click', function(event) {
        event.preventDefault();
        clickApply();
    });
    document.getElementById('nav-reconnect').addEventListener('click', function(event) {
        event.preventDefault();
        clickReconnect();
    });
    document.getElementById('nav-update').addEventListener('click', function(event) {
        event.preventDefault();
        clickUpdate();
    });
    document.getElementById('nav-view-all').addEventListener('click', function(event) {
        event.preventDefault();
        clickViewAll();
    });
}

export function compare(left, right) {
    // if (left.stage < right.stage) return true;
    if (left.priority > right.priority) return true;
    if (left.dueDate < right.dueDate) return true;
    if (left.company < right.company) return true;
    return false;
}


// window.onload = function() {
//     const internships = getInternships();
//     console.log(internships);
// };