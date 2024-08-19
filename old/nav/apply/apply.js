import {getInternships} from "../../index.js"

export function clickApply() {
    // localStorage.clear();
    let internships = getInternships();
    // console.log(internships);
    document.getElementById('add-container').style.display = "none";
    document.getElementById('connect-container').style.display = "none";
    document.getElementById('apply-container').style.display = "grid";
}