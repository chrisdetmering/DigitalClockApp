  const clockContainer = document.getElementById("time");
  const date = document.getElementById("date");
  const timeFormatButton = document.getElementById("set-time-format");
  let timeFormat = 12; 

  window.setInterval(() => { 
    let now = new Date();
    setCurrentClockTime(clockContainer, now);
    date.textContent = now.toDateString();
  }, 10)


const setCurrentClockTime = (clock, now) => { 
  let hrs = now.getHours(); 
  let min = addLeadingZero(now.getMinutes());
  let sec = addLeadingZero(now.getSeconds());
  clock.textContent = `${hours(hrs)}:${min}:${sec}` + addAmOrPM(hrs, timeFormat)
}

const addAmOrPM = (hrs) => { 
  let AM_OR_PM = hrs >= 12 ? ' PM' : ' AM';
  return timeFormat === 24 ? '' : AM_OR_PM
}


const hours = (hrs) => { 
  if (hrs === 0 && timeFormat === 12) { 
    return 12;
  } else { 
    return hrs <= 12 ? hrs : hrs % timeFormat; 
  }
}

const addLeadingZero = time => {
  return time < 10 ? '0' + time : time;
}


timeFormatButton.addEventListener('click', event => { 
  if (timeFormat === 12 ) { 
    timeFormat = 24;
    event.target.textContent = 'Standard Time';
  } else { 
    timeFormat = 12;
    event.target.textContent = 'Military Time';
  }
  
})