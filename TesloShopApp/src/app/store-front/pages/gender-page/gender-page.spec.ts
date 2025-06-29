import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPage } from './gender-page';

describe('GenderPage', () => {
  let component: GenderPage;
  let fixture: ComponentFixture<GenderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
