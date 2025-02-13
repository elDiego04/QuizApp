import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionInTestComponent } from './add-question-in-test.component';

describe('AddQuestionInTestComponent', () => {
  let component: AddQuestionInTestComponent;
  let fixture: ComponentFixture<AddQuestionInTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQuestionInTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuestionInTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
