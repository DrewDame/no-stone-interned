document.getElementById('add-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('add-form').style.display = 'grid';
    document.getElementById('connect-container').style.display = 'none';
    document.getElementById('apply-container').style.display = 'none';
    document.getElementById('reconnect-container').style.display = 'none';
    document.getElementById('update-container').style.display = 'none';
});

document.getElementById('connect-button').addEventListener('click',  function(event) {
    event.preventDefault();
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('connect-container').style.display = 'grid';
    document.getElementById('apply-container').style.display = 'none';
    document.getElementById('reconnect-container').style.display = 'none';
    document.getElementById('update-container').style.display = 'none';
});

document.getElementById('apply-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('connect-container').style.display = 'none';
    document.getElementById('apply-container').style.display = 'grid';
    document.getElementById('reconnect-container').style.display = 'none';
    document.getElementById('update-container').style.display = 'none';
});

document.getElementById('reconnect-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('connect-container').style.display = 'none';
    document.getElementById('apply-container').style.display = 'none';
    document.getElementById('reconnect-container').style.display = 'grid';
    document.getElementById('update-container').style.display = 'none';
});

document.getElementById('update-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElemtnById('add-form').style.display = 'none';
    document.getElemtnById('connect-container').style.display = 'none';
    document.getElemtnById('apply-container').style.display = 'none';
    document.getElemtnById('reconnect-container').style.display = 'none';
    document.getElemtnById('update-container').style.display = 'grid';
});


class Internship {
    constructor(company, position, deadline, location, term, priority, link) {
        this.company = company;
        this.position = position;
        this.deadline = deadline;
        this.location = location;
        this.term = term;
        this.priority = priority;
        this.link = link;
    }
}

function getInternships() {
    const internshipsJSON = localStorage.getItem('internships');
    const internshipsArray = internshipsJSON ? JSON.parse(internshipsJSON) : [];
    return internshipsArray.map(internshipObj => new Internship(internshipObj.company, internshipObj.position, internshipObj.deadline,
        internshipObj.location, internshipObj.term, internshipObj.priority));
}

function saveInternships(internships) {
    const internshipsJSON = JSON.stringify(internships);
    localStorage.setItem('internships', internshipsJSON);
}

function addInternship(company, position, deadline, location, term, priority) {
    let internships = getInternships();
    const duplicateInternship = internships.find(intern => intern.company === company && intern.posiion === position);
    if (duplicateInternship) {
        alert("This internship opportunity already exists.")
        return;
    }
    const newInternship = new Internship(company, position, deadline, location, term, priority);
    internships.push(newInternship);
    saveInternships(internships);
}

function compare(left, right) {
    if (left.priority > right.priority) return true;
    if (left.deadline < right.deadline) return true;
    if (left.company < right.company) return true;
    if (left.positin < right.position) return true;
    return false;
}

function getClosest(arr, val) {
    return arr.reduce(function (prev, curr) {
        return (Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev);
    });
}

document.querySelector("#priority-slider").addEventListener("change", function() {
        let closest = getClosest(years, this.value);
    this.value = document.querySelector("#rangevalue").value = closest;
})