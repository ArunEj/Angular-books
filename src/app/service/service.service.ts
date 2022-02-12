import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './modals/modals.module';
import { ITodoService } from './service.interface';

@Injectable({
  providedIn: 'root'
})
export class Service  implements ITodoService{

  constructor(private httpClient: HttpClient) { }

  getBookDetails(){
    return this.httpClient.get('api/todo') as Observable<Todo[]>; 
  }
}
