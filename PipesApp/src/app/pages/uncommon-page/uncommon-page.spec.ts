import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonPage } from './uncommon-page';

describe('UncommonPage', () => {
  let component: UncommonPage;
  let fixture: ComponentFixture<UncommonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncommonPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
