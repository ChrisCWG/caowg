import { CaowgPage } from './app.po';

describe('caowg App', () => {
  let page: CaowgPage;

  beforeEach(() => {
    page = new CaowgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
