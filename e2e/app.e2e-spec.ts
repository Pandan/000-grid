import { GridPage } from './app.po';

describe('pages App', function() {
  let page: GridPage;

  beforeEach(() => {
    page = new GridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
