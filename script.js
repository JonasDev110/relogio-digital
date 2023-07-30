function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const hourRotation = (360 / 12) * (now.getHours() % 12) + (360 / 12) * (now.getMinutes() / 60);
    const minuteRotation = (360 / 60) * now.getMinutes() + (360 / 60) * (now.getSeconds() / 60);
    const secondRotation = (360 / 60) * now.getSeconds();
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
    const digitalHour = document.getElementById('hour');
    const digitalMinute = document.getElementById('minute');
    const digitalSecond = document.getElementById('second');
  
    digitalHour.textContent = hours;
    digitalMinute.textContent = minutes;
    digitalSecond.textContent = seconds;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  