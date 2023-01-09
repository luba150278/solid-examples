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
    
  }
}