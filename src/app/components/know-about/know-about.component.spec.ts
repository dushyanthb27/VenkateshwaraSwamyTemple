import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowAboutComponent } from './know-about.component';

describe('KnowAboutComponent', () => {
  let component: KnowAboutComponent;
  let fixture: ComponentFixture<KnowAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
