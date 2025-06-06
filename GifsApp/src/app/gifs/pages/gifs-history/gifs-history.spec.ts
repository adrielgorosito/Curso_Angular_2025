import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsHistory } from './gifs-history';

describe('GifsHistory', () => {
  let component: GifsHistory;
  let fixture: ComponentFixture<GifsHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
