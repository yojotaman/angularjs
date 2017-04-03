import { PrimercomponentePage } from './app.po';

describe('primercomponente App', () => {
  let page: PrimercomponentePage;

  beforeEach(() => {
    page = new PrimercomponentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
