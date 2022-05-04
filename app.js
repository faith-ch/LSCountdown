let time = document.getElementById("Countdown");
const day = document.getElementById("day");
let Interval1;
let Interval2;
let count;

async function getCurrentDayTime() {
  const request = await fetch(
    "https://worldtimeapi.org/api/timezone/Europe/Sofia"
  );
  const data = await request.json();

  let currentTime = data.datetime.split("-")[2].split(".")[0].split("T")[1];

  const currentDate = `Aug ${data.day_of_week}, 2022 ${currentTime}`;
  let targetDate;

  console.log(currentDate);

  function check(){
    if (
      new Date(currentDate).getTime() < new Date("Aug 2, 2022 18:30:00")
    ) {
      targetDate = "Aug 2, 2022 18:30:00";
      day.innerText = "Вторник 18:30";
    } else if (
      new Date(currentDate).getTime() < new Date("Aug 4, 2022 18:30:00")
    ) {
      targetDate = "Aug 4, 2022 18:30:00";
      day.innerText = "Четвъртък 18:30";
    } else if (
      new Date(currentDate).getTime() < new Date("Aug 7, 2022 10:00:00")
    ) {
      targetDate = "Aug 7, 2022 10:00:00";
      day.innerText = "Неделя 10:00";
    } else {
      targetDate = "Aug 9, 2022 18:30:00";
      day.innerText = "Вторник 18:30";
    }
    return {
      currentDate,
      targetDate
    };
  }

  if (data.day_of_week === 2) {
    if (
      new Date(currentDate).getTime() >
        new Date("Aug 2, 2022 18:30:00").getTime() &&
      new Date(currentDate).getTime() < new Date("Aug 2, 2022 20:00:00")
    ) {
      return false;
    } else {
      return check()
    }
  } else if (data.day_of_week === 4) {
    if (
      new Date(currentDate).getTime() >
        new Date("Aug 4, 2022 18:30:00").getTime() &&
      new Date(currentDate).getTime() < new Date("Aug 4, 2022 20:00:00")
    ) {
      return false;
    } else {
      return check()
    }
  } else if (data.day_of_week === 7) {
    if (
      new Date(currentDate).getTime() >
        new Date("Aug 7, 2022 10:00:00").getTime() &&
      new Date(currentDate).getTime() < new Date("Aug 7, 2022 12:00:00")
    ) {
      return false;
    } else {
      return check()
    }
  } else {
    return check()
  }
}

async function optionSwitch() {
  const res = await getCurrentDayTime();
  if (!res) {
    time.innerText = "Излъчваме на живо";
    setLiveCheckInterval();
  } else {
    getTimeVars(res);
  }
}

async function getTimeVars(ctVars) {
  const currentD = ctVars.currentDate;
  const targetD = ctVars.targetDate;
  console.log(currentD);
  // Set the date we're counting down to
  let countDownDate = new Date(targetD).getTime();

  // Get today's date and time
  let now = new Date(currentD).getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  setCountdown(days, hours, minutes, seconds);
}

function setCountdown(...args) {
  count = args;
  let H;
  let M;
  let S;

  Interval1 = setInterval(() => {
    if (count[0] + count[1] + count[2] + count[3] === 0) {
      optionSwitch();
      clearInterval(Interval1);
      return;
    } else if (count[1] + count[2] + count[3] === 0) {
      setDaysHoursMinutesSeconds();
    } else if (count[2] + count[3] === 0) {
      setHoursMinutesSeconds();
    } else if (count[3] === 0) {
      setMinutesSeconds();
    } else {
      setSeconds();
    }

    if (count[1] < 10) {
      H = `0${count[1]}`;
    } else {
      H = count[1];
    }
    if (count[2] < 10) {
      M = `0${count[2]}`;
    } else {
      M = count[2];
    }
    if (count[3] < 10) {
      S = `0${count[3]}`;
    } else {
      S = count[3];
    }

    time.innerText = `${count[0]}:${H}:${M}:${S}`;
  }, 999);
}

function setLiveCheckInterval() {
  Interval2 = setInterval(async () => {
    const res = await getCurrentDayTime();
    if (res) {
      console.log("nope interval");
      getTimeVars(res);
      clearInterval(Interval2);
    }
  }, 2000);
}

function setSeconds() {
  count[3] -= 1;
}

function setMinutesSeconds() {
  count[2] -= 1;
  count[3] = 59;
}

function setHoursMinutesSeconds() {
  count[1] -= 1;
  count[2] = 59;
  count[3] = 59;
}

function setDaysHoursMinutesSeconds() {
  count[0] -= 1;
  count[1] = 23;
  count[2] = 59;
  count[3] = 59;
}

if (time) {
  optionSwitch();
}
