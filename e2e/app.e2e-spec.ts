import { RomannumeralKataPage } from './app.po';

describe('romannumeral-kata App', function() {
  let page: RomannumeralKataPage;

  beforeEach(() => {
    page = new RomannumeralKataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
