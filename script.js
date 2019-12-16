function countdown(dateEnd) {
  var days, hours, minutes, seconds;

//number of milliseconds since January 01, 1970, 00:00:00 UTC for dateEnd
  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

//checking
  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);


  function calculate() {
    var dateStart = new Date();
        
      dateStart = new Date(dateStart.getUTCFullYear(),dateStart.getUTCMonth(),//current number month(for Poland +1)
      dateStart.getUTCDate(),//current number day(for Poland +1)
      dateStart.getUTCHours() + 1, //current Hours(for Poland +1)
      dateStart.getUTCMinutes(),//current minutes
      dateStart.getUTCSeconds());//current seconds

      Month = dateStart.getUTCMonth();
      switch (Month)
      {
        case 0: fMonth="января"; break;
        case 1: fMonth="февраля"; break;
        case 2: fMonth="марта"; break;
        case 3: fMonth="апреля"; break;
        case 4: fMonth="мае"; break;
        case 5: fMonth="июня"; break;
        case 6: fMonth="июля"; break;
        case 7: fMonth="августа"; break;
        case 8: fMonth="сентября"; break;
        case 9: fMonth="октября"; break;
        case 10: fMonth="ноября"; break;
        case 11: fMonth="декабря"; break;
      }

    var element = document.querySelector('#currdate');
    element.innerHTML = "Сегодня: "+ dateStart.getUTCDate() +" "+ fMonth +" "+ dateStart.getUTCFullYear() +" года " + ", " + "время: " + (dateStart.getUTCHours() + 1) + "." + dateStart.getUTCMinutes() + "." + dateStart.getUTCSeconds();

    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)  //time remaining (rest time)
    //parseInt - function parses a string and returns an integer.
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400); //sec in a day
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600); //sec in a hour
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);// sec in a min
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);


      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2); //2 last numb
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }  
}
countdown ('01/01/2021 00:00:00 AM');
