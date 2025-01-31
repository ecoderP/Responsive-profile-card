const timeUpdate = document.querySelector("#currentTimeUTC");

function utcTimeUpdate() {
    let currentTime = new Date().toUTCString();
    timeUpdate.innerText = currentTime;
}
utcTimeUpdate();