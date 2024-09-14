import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGodComponent } from './main-god.component';

describe('MainGodComponent', () => {
  let component: MainGodComponent;
  let fixture: ComponentFixture<MainGodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
