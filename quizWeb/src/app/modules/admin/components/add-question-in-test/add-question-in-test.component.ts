import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-question-in-test',
  imports: [SharedModule],
  templateUrl: './add-question-in-test.component.html',
  styleUrl: './add-question-in-test.component.scss'
})
export class AddQuestionInTestComponent {

  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  id: number | null;
  questionForm!: FormGroup;

  ngOnInit(){
    this.questionForm = this.fb.group({
      questionText: [null, Validators.required],
      optionA: [null, Validators.required],
      optionB: [null, Validators.required],
      optionC: [null, Validators.required],
      optionD: [null, Validators.required],
      correctOption: [null, Validators.required],
    });
    this.id = this.activatedRoute.snapshot.params["id"];
  }
}
