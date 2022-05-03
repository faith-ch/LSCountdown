let timeivTat = document.getElementById("ivTatCountdown");
let ivTatInterval1;
let ivTatInterval2;

let countivTat;
const ivTatday = document.getElementById("ivTatday");

async function getivTatCurrentDayTime() {
  const request = await fetch(
    "https://worldtimeapi.org/api/timezone/Europe/Sofia"
  );
  const data = await request.json();

  console.log(data.datetime);
  console.log(data.day_of_week);

  let set1 = data.datetime.split("-");
  let set2 = set1[2].split(".");
  let set3 = set2[0].split("T");
  let set4 = set3[1];

  const curretnivTatTime = `Aug ${data.day_of_week}, 2022 ${set4}`;
  let targetivTatTime;

  console.log(curretnivTatTime);

  if (data.day_of_week === 2) {
    if (
      new Date(curretnivTatTime).getTime() >
        new Date("Aug 2, 2022 18:30:00").getTime() &&
      new Date(curretnivTatTime).getTime() < new Date("Aug 2, 2022 20:00:00")
    ) {
      return false;
    } else {
      if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 2, 2022 18:30:00")
      ) {
        targetivTatTime = "Aug 2, 2022 18:30:00";
        ivTatday.innerText = "Вторник 18:30";
      } else if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 4, 2022 18:30:00")
      ) {
        targetivTatTime = "Aug 4, 2022 18:30:00";
        ivTatday.innerText = "Четвъртък 18:30";
      } else if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 7, 2022 10:00:00")
      ) {
        targetivTatTime = "Aug 7, 2022 10:00:00";
        ivTatday.innerText = "Неделя 10:00";
      } else {
        targetivTatTime = "Aug 9, 2022 18:30:00";
        ivTatday.innerText = "Вторник 18:30";
      }
      return {
        dayivTat: data.day_of_week,
        timeivTat: set4,
        curretnivTatTimevar: curretnivTatTime,
        targetivTatTimevar: targetivTatTime,
        ivTatF: true,
      };
    }
  } else if (data.day_of_week === 4) {
    if (
      new Date(curretnivTatTime).getTime() >
        new Date("Aug 4, 2022 18:30:00").getTime() &&
      new Date(curretnivTatTime).getTime() < new Date("Aug 4, 2022 20:00:00")
    ) {
      return false;
    } else {
      if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 2, 2022 18:30:00")
      ) {
        targetivTatTime = "Aug 2, 2022 18:30:00";
        ivTatday.innerText = "Вторник 18:30";
      } else if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 4, 2022 18:30:00")
      ) {
        targetivTatTime = "Aug 4, 2022 18:30:00";
        ivTatday.innerText = "Четвъртък 18:30";
      } else if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 7, 2022 10:00:00")
      ) {
        targetivTatTime = "Aug 7, 2022 10:00:00";
        ivTatday.innerText = "Неделя 10:00";
      } else {
        targetivTatTime = "Aug 9, 2022 18:30:00";
        ivTatday.innerText = "Вторник 18:30";
      }
      return {
        dayivTat: data.day_of_week,
        timeivTat: set4,
        curretnivTatTimevar: curretnivTatTime,
        targetivTatTimevar: targetivTatTime,
        ivTatF: true,
      };
    }
  } else if (data.day_of_week === 7) {
    if (
      new Date(curretnivTatTime).getTime() >
        new Date("Aug 7, 2022 10:00:00").getTime() &&
      new Date(curretnivTatTime).getTime() < new Date("Aug 7, 2022 12:00:00")
    ) {
      return false;
    } else {
      if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 2, 2022 18:30:00")
      ) {
        targetivTatTime = "Aug 2, 2022 18:30:00";
        ivTatday.innerText = "Вторник 18:30";
      } else if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 4, 2022 18:30:00")
      ) {
        targetivTatTime = "Aug 4, 2022 18:30:00";
        ivTatday.innerText = "Четвъртък 18:30";
      } else if (
        new Date(curretnivTatTime).getTime() < new Date("Aug 7, 2022 10:00:00")
      ) {
        targetivTatTime = "Aug 7, 2022 10:00:00";
        ivTatday.innerText = "Неделя 10:00";
      } else {
        targetivTatTime = "Aug 9, 2022 18:30:00";
        ivTatday.innerText = "Вторник 18:30";
      }
      return {
        dayivTat: data.day_of_week,
        timeivTat: set4,
        curretnivTatTimevar: curretnivTatTime,
        targetivTatTimevar: targetivTatTime,
        ivTatF: true,
      };
    }
  } else {
    if (
      new Date(curretnivTatTime).getTime() < new Date("Aug 2, 2022 18:30:00")
    ) {
      targetivTatTime = "Aug 2, 2022 18:30:00";
      ivTatday.innerText = "Вторник 18:30";
    } else if (
      new Date(curretnivTatTime).getTime() < new Date("Aug 4, 2022 18:30:00")
    ) {
      targetivTatTime = "Aug 4, 2022 18:30:00";
      ivTatday.innerText = "Четвъртък 18:30";
    } else if (
      new Date(curretnivTatTime).getTime() < new Date("Aug 7, 2022 10:00:00")
    ) {
      targetivTatTime = "Aug 7, 2022 10:00:00";
      ivTatday.innerText = "Неделя 10:00";
    } else {
      targetivTatTime = "Aug 9, 2022 18:30:00";
      ivTatday.innerText = "Вторник 18:30";
    }
    return {
      dayivTat: data.day_of_week,
      timeivTat: set4,
      curretnivTatTimevar: curretnivTatTime,
      targetivTatTimevar: targetivTatTime,
      ivTatF: true,
    };
  }
}

async function pathivTatset() {
  const resultivTat = await getivTatCurrentDayTime();
  if (!resultivTat) {
    timeivTat.innerText = "Излъчваме на живо";
    setivTatLiveCheckInterval();
  } else {
    getivTatTimeVars(resultivTat);
  }
}

async function getivTatTimeVars(ivTatA) {
  const getivTatCurrentDayTimevar = ivTatA;
  const curretnivTat = getivTatCurrentDayTimevar.curretnivTatTimevar;
  const targetivTat = getivTatCurrentDayTimevar.targetivTatTimevar;
  console.log(curretnivTat);
  // Set the date we're counting down to
  let countDownDate = new Date(targetivTat).getTime();

  // Update the count down every 1 second
  // Get today's date and time
  let now = new Date(curretnivTat).getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let daysivTat = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursivTat = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesivTat = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsivTat = Math.floor((distance % (1000 * 60)) / 1000);

  setivTatsetInterval(daysivTat, hoursivTat, minutesivTat, secondsivTat);
}

function setivTatsetInterval(...ivTatArgs) {
  countivTat = ivTatArgs;
  let ivtatH;
  let ivtatM;
  let ivtatS;

  ivTatInterval1 = setInterval(() => {
    if (countivTat[0] + countivTat[1] + countivTat[2] + countivTat[3] === 0) {
      pathivTatset();
      clearInterval(ivTatInterval1);
      return;
    } else if (countivTat[1] + countivTat[2] + countivTat[3] === 0) {
      setivTatDaysHoursMinutesSeconds();
    } else if (countivTat[2] + countivTat[3] === 0) {
      setivTatHoursMinutesSeconds();
    } else if (countivTat[3] === 0) {
      setivTatMinutesSeconds();
    } else {
      setivTatSeconds();
    }

    if (countivTat[1] < 10) {
      ivtatH = `0${countivTat[1]}`;
    } else {
      ivtatH = countivTat[1];
    }
    if (countivTat[2] < 10) {
      ivtatM = `0${countivTat[2]}`;
    } else {
      ivtatM = countivTat[2];
    }
    if (countivTat[3] < 10) {
      ivtatS = `0${countivTat[3]}`;
    } else {
      ivtatS = countivTat[3];
    }

    timeivTat.innerText = `${countivTat[0]}:${ivtatH}:${ivtatM}:${ivtatS}`;
  }, 999);
}

function setivTatLiveCheckInterval() {
  ivTatInterval2 = setInterval(async () => {
    //TODO
    const resultivTat = await getivTatCurrentDayTime();
    if (resultivTat) {
      console.log("nope interval");
      getivTatTimeVars(resultivTat);
      clearInterval(ivTatInterval2);
    }
  }, 2000);
}

function setivTatSeconds() {
  countivTat[3] -= 1;
}

function setivTatMinutesSeconds() {
  countivTat[2] -= 1;
  countivTat[3] = 59;
}

function setivTatHoursMinutesSeconds() {
  countivTat[1] -= 1;
  countivTat[2] = 59;
  countivTat[3] = 59;
}

function setivTatDaysHoursMinutesSeconds() {
  countivTat[0] -= 1;
  countivTat[1] = 23;
  countivTat[2] = 59;
  countivTat[3] = 59;
}

if (timeivTat) {
  pathivTatset();
}
