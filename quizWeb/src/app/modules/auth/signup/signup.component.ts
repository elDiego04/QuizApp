import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService
  ) { }

    validateForm!: FormGroup;

    ngOnInit(){
      this.validateForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
        name: [null, [Validators.required]]
    })
  }
  submitForm(){
    this.authService.register(this.validateForm.value).subscribe(res=>{
      this.message
      .success(
        `Singup succesful`,
        {nzDuration:5000}
      );
      this.router.navigateByUrl("/login");
    }, error=>{
      this.message
      .error(
        `${error.error}`,
        {nzDuration: 5000}
      )
    })
  }
}
