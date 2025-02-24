import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestResultsComponent } from './view-test-results.component';

describe('ViewTestResultsComponent', () => {
  let component: ViewTestResultsComponent;
  let fixture: ComponentFixture<ViewTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTestResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
