import { TemplateClientSimplePage } from './app.po';

describe('template-client-simple App', () => {
  let page: TemplateClientSimplePage;

  beforeEach(() => {
    page = new TemplateClientSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
