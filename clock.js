document.addEventListener('DOMContentLoaded', () => { 
  const clockContainer = document.getElementById("time");
  const date = document.getElementById("date");
  const timeFormatButton = document.getElementById("set-time-format");
  let timeFormat = 12; 

  timeFormatButton.addEventListener('click', event => { 
    if (timeFormat === 12 ) { 
      timeFormat = 24;
      event.target.innerHTML = 'Standard Time';
    } else { 
      timeFormat = 12;
      event.target.innerHTML = 'Military Time';
    }
    
  })
  
  let now = new Date();
  setCurrentClockTime(clockContainer, now, timeFormat);
  date.innerHTML = now.toDateString();

  window.setInterval(() => { 
    let now = new Date();
    setCurrentClockTime(clockContainer, now, timeFormat);
  }, 1000)

})

let setCurrentClockTime = (clock, now, timeFormat) => { 
  let hrs = now.getHours(); 
  
  clock.innerHTML = `${hours(hrs, timeFormat)}:${minutes(now)}:${seconds(now)}` + addAmOrPM(hrs, timeFormat)
}

let addAmOrPM = (hrs, timeFormat) => { 
  let AM_OR_PM = hrs >= 12 ? ' PM' : ' AM';
  return timeFormat === 24 ? '' : AM_OR_PM
}


let hours = (hrs, timeFormat) => { 
  if (hrs === 0 && timeFormat === 12) { 
    return 12;
  } else { 
    return hrs <= 12 ? hrs : hrs % timeFormat; 
  }
}

let minutes = (time) => {
  let minutes = time.getMinutes();
  return minutes < 10 ? '0' + minutes : minutes;
}

let seconds = (time) => { 
  let seconds = time.getSeconds();
  return seconds < 10 ? '0' + seconds : seconds;
}