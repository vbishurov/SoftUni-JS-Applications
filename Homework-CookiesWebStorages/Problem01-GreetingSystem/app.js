if (!localStorage.refreshCount) {
    localStorage.refreshCount = 1;
    sessionStorage.refreshCount = 1;
    localStorage.name = prompt("Please enter your name");
} else {
    localStorage.refreshCount++;
    if (!sessionStorage.refreshCount) {
        sessionStorage.refreshCount = 1;
    } else {
        sessionStorage.refreshCount++;
    }

    alert("Hello " + localStorage.name + ', you have visited ' + sessionVisits() + ' times this session and ' + totalVisits() + ' times total.');
}

function sessionVisits() {
    return sessionStorage.refreshCount;
}

function totalVisits() {
    return localStorage.refreshCount;
}
