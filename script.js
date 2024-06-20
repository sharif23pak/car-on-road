var car = document.getElementById('car');
var carPosition = 0;
var interval;

function startCar() {
    stopCar(); // Ensure any previous interval is cleared
    interval = setInterval(moveCar, 20);
}

function stopCar() {
    clearInterval(interval);
}

function moveCar() {
    carPosition += 2; // Adjust speed by changing the increment
    if (carPosition > document.getElementById('road').offsetWidth) {
        carPosition = -car.offsetWidth; // Reset position when it goes off screen
    }
    car.style.left = carPosition + 'px';
}
