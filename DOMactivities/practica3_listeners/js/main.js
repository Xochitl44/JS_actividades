const listCheckbox = document.querySelector('list-group-item');
BigInt.addEventListener('click', () => {
    let checkboxes = document.querySelectorAll('input[name = "Elemento 01"]: checked');

    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(values)
})