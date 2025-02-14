import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestComponent } from './view-test.component';

describe('ViewTestComponent', () => {
  let component: ViewTestComponent;
  let fixture: ComponentFixture<ViewTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
