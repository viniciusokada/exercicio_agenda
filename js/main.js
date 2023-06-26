const form = document.querySelector('#form');
const table = document.querySelector('#table');

let lines = '';

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone');

    let line = '<tr>';
    
    line += `<td>${inputName.value}</td>`;
    line += `<td>${inputPhone.value}</td>`;
    line += '</tr>';

    lines += line
    
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = lines;

    inputName.value = '';
    inputPhone.value = '';
    
});