class Rate {
  element;
  constructor(selector) {
    const element = document.querySelector(selector)
    if (!element) {
      throw `This element ${element} not found`;
    }
    this.element = element
  }
  render() {
    fetch('https://api.exchangerate.host/latest?base=BTC&amp;symbols=USD')
      .then(r => r.json())
      .then(j => {
        const rate = Math.round(j.rates.USD);
        const div = document.createElement('div');
        div.className = "widget";
        div.innerHTML = `<img src='bitcoin.png' class='widget-img'/><br/>
        <b>$ ${rate}</b>`
        this.element.appendChild(div);
      })
  }
}