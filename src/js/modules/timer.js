const targetDate = new Date("2023-12-31 00:00:00").getTime();
const timer = document.getElementById("timer");

if (timer) {
   const timeInterval = setInterval(function() {
      var currentDate = new Date().getTime();
      var timeLeft = targetDate - currentDate;
    
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
      document.getElementById("timer").innerHTML = `${days} днів ${hours} годин ${minutes} хвилин`;
    
      if (timeInterval < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Время истекло!";
      }
    }, 1000);
}
