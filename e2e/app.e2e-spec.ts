import { PORTALFEPage } from './app.po';

describe('portal-fe App', function() {
  let page: PORTALFEPage;

  beforeEach(() => {
    page = new PORTALFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
