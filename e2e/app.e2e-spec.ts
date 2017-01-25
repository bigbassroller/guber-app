import { GuberAppPage } from './app.po';

describe('guber-app App', function() {
  let page: GuberAppPage;

  beforeEach(() => {
    page = new GuberAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
