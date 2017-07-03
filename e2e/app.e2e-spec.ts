import { MEANProjectPage } from './app.po';

describe('meanproject App', () => {
  let page: MEANProjectPage;

  beforeEach(() => {
    page = new MEANProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
