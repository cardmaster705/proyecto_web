import { SassyChatbotPage } from './app.po';

describe('sassy-chatbot App', () => {
  let page: SassyChatbotPage;

  beforeEach(() => {
    page = new SassyChatbotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
