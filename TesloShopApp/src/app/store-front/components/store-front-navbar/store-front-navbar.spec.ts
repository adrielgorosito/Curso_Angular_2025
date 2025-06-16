import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontNavbar } from './store-front-navbar';

describe('StoreFrontNavbar', () => {
  let component: StoreFrontNavbar;
  let fixture: ComponentFixture<StoreFrontNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreFrontNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreFrontNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
