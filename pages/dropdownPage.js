import Page from './page';

class DropdownPage extends Page {
  constructor() {
    super();
  }

  get dropdownElement() {
    return $('#dropdown');
  }

  open() {
    super.open('/dropdown');
  }
}

export default new DropdownPage();
