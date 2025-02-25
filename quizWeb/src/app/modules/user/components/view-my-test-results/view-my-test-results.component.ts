import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-view-my-test-results',
  imports: [SharedModule],
  templateUrl: './view-my-test-results.component.html',
  styleUrl: './view-my-test-results.component.scss'
})
export class ViewMyTestResultsComponent {

  dataSet: any;

  constructor(private testService: TestService){}

  ngOnInit(){
    this.getTestResults();
  }
  getTestResults(){
    this.testService.getMyTestResults().subscribe(res => {
      this.dataSet = res;
      console.log(this.dataSet);
    })
  }
}
