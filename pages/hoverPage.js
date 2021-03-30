import Page from './page';

class HoverPage extends Page {
  constructor() {
    super();
  }

  get cardUser() {
    return $$('.figure');
  }
  get labelCardUser() {
    return '.figcaption > h5';
  }

  open() {
    super.open('/hovers');
  }

  getUserName(card = 0) {
    this.cardUser[card].moveTo();
    return this.cardUser[card].$(this.labelCardUser).getText();
  }
}

export default new HoverPage();
