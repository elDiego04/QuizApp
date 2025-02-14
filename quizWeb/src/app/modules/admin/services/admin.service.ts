import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  createTest(testDto): Observable<any> {
    return this.http.post(BASIC_URL + `api/test`, testDto)
  }
  getAllTests(): Observable<any> {
    return this.http.get(BASIC_URL + `api/test`)
  }
  addQuestionInTest(questionDto): Observable<any> {
    return this.http.post(BASIC_URL + `api/test/question`, questionDto)
  }

  getTestQuestions(id: number): Observable<any> {
    return this.http.get(BASIC_URL + `api/test/${id}`)
  }
}

