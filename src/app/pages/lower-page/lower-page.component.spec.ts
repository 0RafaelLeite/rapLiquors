import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerPageComponent } from './lower-page.component';

describe('LowerPageComponent', () => {
  let component: LowerPageComponent;
  let fixture: ComponentFixture<LowerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
