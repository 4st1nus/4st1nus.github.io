import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuService } from '../service/menu.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { menuItems } from '../service/menu-items';
import { MenuItem } from '../model/menu-item';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockMenuService;

  beforeEach(async(() => {
    mockMenuService = jasmine.createSpyObj('MenuService', ['getMenus']);
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{
        provide: MenuService,
        useValue: mockMenuService
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const menuServiceSpy = TestBed.get(MenuService);
    menuServiceSpy.getMenus.and.returnValue(menuItems);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke getMenus method of menuService', () => {
    expect(mockMenuService.getMenus).toHaveBeenCalled();
  });

  it('should populate menuItems attribute with 6 menus', () => {
    expect(fixture.componentInstance.menuItems.length).toBe(6);
  });

  describe('template', () => {

    it('shoud have a fixed-top container', () => {
      expect(fixture.nativeElement.firstChild.className).toContain('fixed-top');
      expect(fixture.nativeElement.firstChild.className).toContain('container');
    });

    it('should have one bootstrap navbar', () => {
      expect(fixture.debugElement.query(By.css('.navbar'))).toBeTruthy();
    });

    it('should have My Blog as navbar-brand', () => {
      expect(fixture.debugElement.query(By.css('.navbar-brand')).nativeElement.textContent).toContain('My Blog');
    });

    it('should have 6 main navigation links as dropdown', () => {
      expect(fixture.debugElement.queryAll(By.css('li.nav-item.dropdown')).length).toBe(6);
    });

  });
});
