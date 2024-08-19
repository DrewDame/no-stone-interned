import {addSubmitListener, addNavListeners, addInternship, getInternships} from "./index.js";

window.onload = function() {
    addInternship("Google", "Software Engineer Intern", "10/31/2024", "1");
    addInternship("Netflix", "Softward Engineer Intern", "11/15/2024", "2");
    addInternship("Apple", "Information Technology Intern", "11/22/2024", "3");
    const internships = getInternships();
    console.log(internships);
}

addSubmitListener();
addNavListeners();