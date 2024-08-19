import {getInternships, saveInternships, compare, Stage} from "../../index.js"
// import {Stage}

export function clickConnect() {
    document.getElementById('add-container').style.display = "none";
    document.getElementById('apply-container').style.display = "none";
    document.getElementById('reconnect-container').style.display = "none";
    let internships = getInternships().filter(item => item.stage == Stage.CONNECT);
    if (internships.length == 0) {
        console.log("No internships can be displayed");
        return;
    }
    internships.sort(compare)
    let internship = internships[0];
    internship.stage = Stage.APPLY;
    // console.log(internship);
    document.getElementById('connect-container').style.display = "grid";
    addLinkedInTemplates();
    addTopDisplay(internship);
    addInfoForm(internship);

    // addBottomContainer();
    saveInternships();
}

export function addLinkedInTemplates() {
    // document.getElementById('')
}

export function addTopDisplay(internship) {
    // let topDisplay = document.createElement('div');
    // topDisplay.classList.add('top-display');
    
    // let shipPosition = document.createElement('div');
    // shipPosition.classList.add('top-display-position');
    // shipPosition.textContent = internship.position;
    // topDisplay.appendChild(shipPosition);

    // let shipCompany = document.createElement('div');
    // shipCompany.classList.add('top-display-company');
    // shipCompany.textContent = internship.company;
    // topDisplay.appendChild(shipCompany);

    // let shipDescription = document.createElement('div');
    // shipDescription.classList.add('top-display')
    console.log(internship.position);
    document.getElementById('top-display-company').textContent = internship.company;
    document.getElementById('top-display-position').textContent = internship.position;
    // document.getElementById('top-display-description').textContent = internship.description;
    document.getElementById('top-display-dueDate').textContent = internship.dueDate;
    document.getElementById('top-display-priority').textContent = internship.priority;
}

export function addInfoForm(internship) {
    let infoForm = document.createElement('div');
    infoForm.classList.add('info-form')
}