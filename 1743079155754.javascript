document.getElementById('price-form').addEventListener('change', function() {
    const washType = document.getElementById('wash-type').value;
    const vehicleType = document.getElementById('vehicle-type').value;
    
    let price = 0;

    if (washType === 'basic') {
        if (vehicleType === 'sedan') price = 80;
        if (vehicleType === 'suv') price = 100;
        if (vehicleType === 'truck') price = 120;
    }
    if (washType === 'deluxe') {
        if (vehicleType === 'sedan') price = 150;
        if (vehicleType === 'suv') price = 180;
        if (vehicleType === 'truck') price = 220;
    }
    if (washType === 'premium') {
        if (vehicleType === 'sedan') price = 250;
        if (vehicleType === 'suv') price = 300;
        if (vehicleType === 'truck') price = 350;
    }

    document.getElementById('total-price').textContent = 'R' + price;
});
