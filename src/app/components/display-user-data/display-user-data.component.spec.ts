import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserDataComponent } from './display-user-data.component';

describe('DisplayUserDataComponent', () => {
  let component: DisplayUserDataComponent;
  let fixture: ComponentFixture<DisplayUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayUserDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
