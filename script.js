function calculateBudget() {
    var currency = document.getElementById('currency').value;
    var totalBudget = 0;
    // Perform currency conversion for each expense
    // Calculate total expenses for each category
    // Calculate overall budget
    // Update summary section with calculated totals
    document.getElementById('total_budget').textContent = 'Overall Budget: $' + totalBudget.toFixed(2) + ' ' + currency;
}

document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', event => {
        var subdivisions = item.querySelector('.subdivisions');
        subdivisions.style.display = subdivisions.style.display === 'none' ? 'block' : 'none';
    });
});

