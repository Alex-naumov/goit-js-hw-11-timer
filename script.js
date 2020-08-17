refs = {
  days: document.querySelector(`span[data-value="days"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  mins: document.querySelector(`span[data-value="mins"]`),
  secs: document.querySelector(`span[data-value="secs"]`),
};
dateEnd = new Date("09/1/2020");
dateStart = new Date();
setInterval(() => {
  dateEnd = new Date("09/1/2020");
  dateStart = new Date();
  Timer();
}, 1000);

const Timer = () => {
  let diff = dateEnd - dateStart;
  let days = diff / 1000 / 3600 / 24;
  let hours = (days % 1) * 24;
  let mins = (hours % 1) * 60;
  let secs = (mins % 1) * 60;

  refs.days.textContent = Math.floor(days).toString().padStart(2, 0);
  refs.hours.textContent = Math.floor(hours).toString().padStart(2, 0);
  refs.mins.textContent = Math.floor(mins).toString().padStart(2, 0);
  refs.secs.textContent = Math.floor(secs).toString().padStart(2, 0);
};
Timer();
