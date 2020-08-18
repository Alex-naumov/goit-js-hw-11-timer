class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
  }
  timerStart() {
    const timerHtml = document.querySelector(this.selector);

    const render = () => {
      const dateNow = new Date();
      const time = this.targetDate - dateNow;
      const days = Math.floor(time / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, 0);
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, 0);
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, 0);
      const secs = Math.floor((time % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, 0);
      console.log(timer);
      timerHtml.innerHTML = `
        <div class="field">
          <span class="value" data-value="days">${days}</span><br />
          <span class="label">Days</span>
        </div>
  
        <div class="field">
          <span class="value" data-value="hours">${hours}</span><br />
          <span class="label">Hours</span>
        </div>
  
        <div class="field">
          <span class="value" data-value="mins">${mins}</span><br />
          <span class="label">Minutes</span>
        </div>
  
        <div class="field">
          <span class="value" data-value="secs">${secs}</span><br />
          <span class="label">Seconds</span>
        </div>
      `;
    };
    render();
    setInterval(() => {
      render();
    }, 1000);
  }
}
let timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("09/1/2020"),
});

timer.timerStart();
