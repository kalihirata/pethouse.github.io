import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoajudarComponent } from './comoajudar.component';

describe('ComoajudarComponent', () => {
  let component: ComoajudarComponent;
  let fixture: ComponentFixture<ComoajudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoajudarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoajudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
