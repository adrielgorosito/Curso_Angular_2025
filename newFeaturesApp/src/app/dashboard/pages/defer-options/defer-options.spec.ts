import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOptions } from './defer-options';

describe('DeferOptions', () => {
  let component: DeferOptions;
  let fixture: ComponentFixture<DeferOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
