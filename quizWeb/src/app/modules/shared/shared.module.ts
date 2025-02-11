import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { AuthService } from '../auth/services/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    DemoNgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    DemoNgZorroAntdModule
  ],
  providers: [AuthService]
})
export class SharedModule { }
