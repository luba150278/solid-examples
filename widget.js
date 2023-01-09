class Rate {
  constructor(selector) {
    const element = document.querySelector(selector);
    if (!element) throw `Element '${selector}' not found`;
    this.element = element;
  }

  render() {

    fetch('https://api.exchangerate.host/latest?base=BTC&amp;symbols=USD')
      .then(r => r.json())
      .then(j => {
        const rate = Math.round(j.rates.USD);
        const div = document.createElement('DIV');
        div.style.border = "2px solid gold";
        div.style.display = "inline-block";
        div.style.padding = "4px";
        div.style.height = "100%";
        div.style.textAlign = "center";
        div.innerHTML = `<span class="widget-img-wrap"><img src='bitcoin.png' class='widget-img' /><br/><i>$ ${rate}</i></span>`;
        this.element.appendChild(div);
      });
  }
}

class Moon {
  constructor(selector) {
    const element = document.querySelector(selector);
    if (!element) throw `Element '${selector}' not found`;
    this.element = element;
  }

  render() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    fetch(`https://www.icalendar37.net/lunar/api/?year=${year}&month=
             ${month}&shadeColor=gray&size=50&texturize=true`)
      .then(r => r.json())
      .then(j => {
        const part = Math.round(j.phase[day].lighting * 100) / 100;
        const div = document.createElement('DIV');
        div.className = "moon-wrap";
        div.style.border = "2px solid lightgray";
        div.style.display = "inline-block";
        div.style.padding = "4px";
        div.style.textAlign = "center";
        div.innerHTML = `<div>${j.phase[day].svg}</div><b>${part} %</b>`;
        this.element.appendChild(div);
      });
  }
}

class WidgetMaker {
  constructor(...widgets) {
    this.widgets = widgets;
  }
  render() {
    this.widgets.forEach(w => w.render());
  }
}

class RateBE extends Rate {
  constructor(selector) {
    super(selector)
  }
  render() {
    super.render();
    
    fetch('https://api.exchangerate.host/latest?base=EUR&amp;symbols=USD')
      .then(r => r.json())
      .then(jE => {
        const rateE = Math.round(jE.rates.USD * 100) / 100;
        const div = document.createElement('DIV');
        div.style.float = "right";
        div.style.padding = "0 10px";
        div.style.textAlign = "center";
        div.innerHTML = `<img src='euro.png' class='widget-img' /><br/><b>$${rateE}</b>`;
        console.log(this.element.firstChild)
        this.element.firstChild.insertBefore(div, this.element.firstChild.firstChild);
      });
  }
}