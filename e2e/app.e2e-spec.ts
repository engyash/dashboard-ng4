import { WidgetsPage } from './app.po';

describe('widgets App', () => {
  let page: WidgetsPage;

  beforeEach(() => {
    page = new WidgetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
