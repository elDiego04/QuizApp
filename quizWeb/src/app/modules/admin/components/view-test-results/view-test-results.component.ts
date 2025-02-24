import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminModule } from '../../admin.module';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-test-results',
  imports: [SharedModule],
  templateUrl: './view-test-results.component.html',
  styleUrl: './view-test-results.component.scss'
})
export class ViewTestResultsComponent {

  resultsData: any;

  constructor(private testService: AdminService){}

  ngOnInit(){
    this.getTestResults();
  }
  getTestResults(){
    this.testService.getTestResults().subscribe(res => {
      this.resultsData = res;
      console.log(this.resultsData);
    })
  }
}
