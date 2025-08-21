import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurificationComponent } from './purification.component';

describe('PurificationComponent', () => {
  let component: PurificationComponent;
  let fixture: ComponentFixture<PurificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
