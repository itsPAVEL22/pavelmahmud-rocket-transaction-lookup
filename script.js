function getTransaction() {
    const phone = document.getElementById('phone').value;
    const output = document.getElementById('output');
    output.textContent = 'Fetching data...';

    fetch(`https://unknownx.top/rocket_pdf.php?phone=${phone}`)
        .then(response => response.text())
        .then(data => {
            output.textContent = data;
        })
        .catch(error => {
            output.textContent = 'Error fetching data. Please try again.';
            console.error('Error:', error);
        });
}
