export function clickReconnect() {
    localStorage.clear();
    document.getElementById('add-container').style.display = "none";
    document.getElementById('connect-container').style.display = "none";
    document.getElementById('apply-container').style.display = "none";
    document.getElementById('reconnect-container').style.display = "grid";
}