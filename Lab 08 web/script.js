function calculate() {
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const depositPeriod = parseInt(document.getElementById('deposit-period').value);

    const interest = initialAmount * (1 + interestRate / 100) ** depositPeriod - initialAmount;
    const finalAmount = initialAmount + interest;

    document.getElementById('result-amount').innerText = finalAmount.toFixed(2);
    document.getElementById('result-profit').innerText = interest.toFixed(2);

    // creation du graphique
    const ctx = document.getElementById('chart').getContext('2d');
    const data = {
        labels: Array.from({ length: depositPeriod }, (_, i) => i + 1),
        datasets: [{
            label: 'Сумма на вкладе',
            data: Array.from({ length: depositPeriod }, (_, i) => (initialAmount * (1 + interestRate / 100) ** (i + 1)).toFixed(2)),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

