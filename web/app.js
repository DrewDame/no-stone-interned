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
    displayConnectCard();
});

document.getElementById('apply-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('connect-container').style.display = 'none';
    document.getElementById('apply-container').style.display = 'grid';
    document.getElementById('reconnect-container').style.display = 'none';
    document.getElementById('update-container').style.display = 'none';
    displayAddCard();
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
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('connect-container').style.display = 'none';
    document.getElementById('apply-container').style.display = 'none';
    document.getElementById('reconnect-container').style.display = 'none';
    document.getElementById('update-container').style.display = 'grid';
});

const Stage = {
    ADD: 'add',
    CONNECT: 'connect',
    APPLY: 'apply',
    RECONNECT: 'reconnect',
    UPDATE: 'update'
}

class Internship {
    constructor(company, position, deadline, location, priority, link, requirements = '', stage = Stage.ADD) {
        this.company = company;
        this.position = position;
        this.deadline = deadline;
        this.location = location;
        this.priority = priority;
        this.link = link;
        this.requirements = requirements;
        this.stage = stage;
    }
}

function getInternships(targetStage) {
    if (targetStage == undefined) {
        const internshipsJSON = localStorage.getItem('internships');
        const internshipsArray = internshipsJSON ? JSON.parse(internshipsJSON) : [];
        return internshipsArray.map(internshipObj => new Internship(internshipObj.company, internshipObj.position, internshipObj.deadline,
            internshipObj.location, internshipObj.priority, internshipObj.link, internshipObj.requirements, internshipObj.stage));
    }
    else {
        let internships = getInternships();
        let newInternships = [];
        for (let i = 0; i < internships.length; i++) {
            if (internships[i].stage == targetStage) {
                newInternships.push(new Internship(
                    internships[i].company,
                    internships[i].position,
                    internships[i].deadline,
                    internships[i].location,
                    internships[i].priority,
                    internships[i].link,
                    internships[i].requirements,
                    internships[i].stage
                ));
        }
        return newInternships;
    }
}
}

function saveInternships(internships) {
    const internshipsJSON = JSON.stringify(internships);
    localStorage.setItem('internships', internshipsJSON);
}

function addInternship(company, position, deadline, location, priority, link) {
    let internships = getInternships();
    const duplicateInternship = internships.find(intern => intern.company === company && intern.posiion === position);
    if (duplicateInternship) {
        alert("This internship opportunity already exists.")
        return;
    }
    let newInternship = new Internship(company, position, deadline, location, priority, link);
    newInternship.stage = Stage.CONNECT;
    internships.push(newInternship);
    internships.sort(compare);
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

function displayConnectCard() {
    let internships = getInternships(Stage.CONNECT);
    let ship = internships[0];
    document.getElementById('internship-company').textContent = ship.company;
    document.getElementById('internship-position').textContent = ship.position;
    document.getElementById('internship-deadline').textContent = ship.deadline;
    document.getElementById('internship-location').textContent = ship.location;
    document.getElementById('internship-card').addEventListener('click', function(event) {
        event.preventDefault();
        window.open(ship.link, '_blank');
    });
}

function displayAddCard() {
    let internships = getInternships(Stage.APPLY);
    let ship = internships[0];
    document.getElementById('apply-internship-company').textContent = ship.company;
    document.getElementById('apply-internship-position').textContent = ship.position;
    document.getElementById('apply-internship-deadline').textContent = ship.deadline;
    document.getElementById('apply-internship-location').textContent = ship.location;
    document.getElementById('apply-internship-card').addEventListener('click', function(event) {
        event.preventDefault();
        window.open(ship.link, "_blank");
    })
}

document.querySelector("#priority-slider").addEventListener("change", function() {
    let closest = getClosest([1,2,3,4,5], this.value);
    this.value = document.querySelector("#rangevalue").value = closest;
    document.querySelector("#rangevalue").textContent = closest;
})

document.getElementById('add-form-button').addEventListener('click', function(event) {
    event.preventDefault();
    const position = document.getElementById('position-field').value;
    const company = document.getElementById('company-field').value;
    const deadline = document.getElementById('deadline-field').value;
    const location = document.getElementById('location-field').value;
    const link = document.getElementById('link-field').value;
    const priority = document.getElementById('priority-slider').value;
    addInternship(company, position, deadline, location, priority, link);
    document.getElementById('position-field').value = '';
    document.getElementById('company-field').value = '';
    document.getElementById('deadline-field').value = '';
    document.getElementById('location-field').value = '';
    document.getElementById('link-field').value = '';
    document.getElementById('priority-slider').value = '';
    document.getElementById('rangevalue').textContent = 3;
})

document.getElementById('recruiter-copy-button').addEventListener('click', function(event) {
    event.preventDefault();
    navigator.clipboard.writeText("copied recruiter message to clipboard");
})

document.getElementById('alumni-copy-button').addEventListener('click', function(event) {
    event.preventDefault();
    navigator.clipboard.writeText("copied alumni message to clipboard");
})

document.getElementById('connect-update-button').addEventListener('click', function(event) {
    event.preventDefault();
    let internships = getInternships(Stage.CONNECT);
    let ship = internships[0];
    ship.requirements = document.getElementById('copy-field-input').value;
    document.getElementById('copy-field-input').value = '';
    ship.stage = Stage.APPLY;
    saveInternships(internships);
})

//TODO: Parse through the job requirements string to make the job requirements box
//on the apply page dynamic

document.getElementById('final-steps-card-01').addEventListener('click', function(event) {
    event.preventDefault();
    window.open("https://overleaf.com/", "_blank");
})

document.getElementById('final-steps-card-02').addEventListener('click', function(event) {
    event.preventDefault();
    window.open("https://drive.google.com/", "_blank");
})

document.getElementById('final-steps-card-03').addEventListener('click', function(event) {
    event.preventDefault();
    let internships = getInternships(Stage.APPLY);
    let ship = internships[0];
    window.open(ship.link, "_blank");
    ship.stage = Stage.RECONNECT;
    saveInternships(internships);
    console.log(getInternships());
})