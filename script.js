function toggleAppliance(appliance) {
    const button = event.target;
    if (button.innerHTML === 'ON/OFF') {
        button.innerHTML = 'OFF';
        alert(`${appliance.charAt(0).toUpperCase() + appliance.slice(1)} is turned ON`);
    } else {
        button.innerHTML = 'ON/OFF';
        alert(`${appliance.charAt(0).toUpperCase() + appliance.slice(1)} is turned OFF`);
    }
}

function controlACTemperature(value) {
    alert(`Air Conditioner temperature set to ${value} °C`);
}

function controlFanSpeed(value) {
    alert(`Fan speed set to level ${value}`);
}

function adjustBrightness(value) {
    alert(`Brightness adjusted to ${value}%`);
}

function changeLightColor(value) {
    alert(`Light color changed to ${value}`);
}
