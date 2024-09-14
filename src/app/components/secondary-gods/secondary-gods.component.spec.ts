import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGodsComponent } from './secondary-gods.component';

describe('SecondaryGodsComponent', () => {
  let component: SecondaryGodsComponent;
  let fixture: ComponentFixture<SecondaryGodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryGodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
