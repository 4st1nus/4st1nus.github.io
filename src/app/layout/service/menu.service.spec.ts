import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [MenuService]
  }));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  describe('getMenus', () => {
    it('should return 6 menu items', () => {
      const service = TestBed.get(MenuService);

      expect(service.getMenus().length).toEqual(6);
    });
  });
});
