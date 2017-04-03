import { DoggitPage } from './app.po';

describe('doggit App', function() {
  let page: DoggitPage;

  beforeEach(() => {
    page = new DoggitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
