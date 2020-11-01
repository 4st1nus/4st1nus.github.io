import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div>Header</div>'
})
export class HeaderComponent { }

@Component({
  selector: 'app-footer',
  template: '<div>Footer</div>'
})
export class FooterComponent { }

describe('LayoutComponent', () => {
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent, FooterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  describe('template', () => {
    it('should have an element with class container as the first child', () => {
      expect(fixture.nativeElement.firstChild.className).toContain('container');
    });

    it('should have header section with app-header component', () => {
      expect(fixture.debugElement.query(By.directive(HeaderComponent))).toBeTruthy();
    });

    it('should have content section', () => {
      expect(fixture.debugElement.queryAll(By.css('.content'))[0]).toBeTruthy();
    });

    it('should have footer section with app-footer component', () => {
      expect(fixture.debugElement.query(By.directive(FooterComponent))).toBeTruthy();
    });
  });
});
