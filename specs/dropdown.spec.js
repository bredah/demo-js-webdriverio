import DropdownPage from '../pages/dropdownPage';

describe('Dropdown', () => {
  beforeEach(() => {
    DropdownPage.open();
  });

  afterEach(() => {});

  it('Select by index', () => {
    DropdownPage.dropdownElement.selectByIndex(1);
    let result = DropdownPage.dropdownElement.getValue();
    expect(result).toBe('1');

    DropdownPage.dropdownElement.selectByIndex(2);
    result = DropdownPage.dropdownElement.getValue();
    expect(result).toBe('2');
  });

  it('Select by visible text', () => {
    DropdownPage.dropdownElement.selectByVisibleText('Option 1');
    let result = DropdownPage.dropdownElement.getValue();
    expect(result).toBe('1');

    DropdownPage.dropdownElement.selectByVisibleText('Option 2');
    result = DropdownPage.dropdownElement.getValue();
    expect(result).toBe('2');
  });

  it('Select by attribute', () => {
    DropdownPage.dropdownElement.selectByAttribute('value', '1');
    let result = DropdownPage.dropdownElement.getValue();
    expect(result).toBe('1');

    DropdownPage.dropdownElement.selectByAttribute('value', '2');
    result = DropdownPage.dropdownElement.getValue();
    expect(result).toBe('2');
  });
});
