import { LozungPage } from './app.po';

describe('lozung App', () => {
  let page: LozungPage;

  beforeEach(() => {
    page = new LozungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
