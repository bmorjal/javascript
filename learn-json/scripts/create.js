function addme() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    const person = {};
    person.firstName = fname;
    person.lastName = lname;
    person.email = email;
    person.phone = phone;

    const myJson = JSON.stringify(person);

    document.getElementById('json-value').innerHTML = myJson;
}