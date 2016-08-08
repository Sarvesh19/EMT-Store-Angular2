import { EMTStoreAngular2Page } from './app.po';

describe('emt-store-angular2 App', function() {
  let page: EMTStoreAngular2Page;

  beforeEach(() => {
    page = new EMTStoreAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
