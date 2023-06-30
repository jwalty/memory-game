document.querySelectorAll('td').forEach((e) => {
    e.addEventListener('mousedown', () => {
        e.style.backgroundColor = 'red';
    })
});