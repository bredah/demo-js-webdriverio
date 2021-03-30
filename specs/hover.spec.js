import HoverPage from '../pages/hoverPage';

describe('Hover', () => {
  beforeEach(() => {
    HoverPage.open();
  });

  afterEach(() => {});

  it('Focus', () => {
    let result = HoverPage.cardUser.length;
    expect(result).toBe(3);

    result = HoverPage.getUserName();
    expect(result).toBe('name: user1');
  });
});
