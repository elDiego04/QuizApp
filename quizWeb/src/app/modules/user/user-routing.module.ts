import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeTestComponent } from './components/take-test/take-test.component';
import { ViewMyTestResultsComponent } from './components/view-my-test-results/view-my-test-results.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'view-test-results', component: ViewMyTestResultsComponent},
  {path: 'take-test/:id', component: TakeTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
