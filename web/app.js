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