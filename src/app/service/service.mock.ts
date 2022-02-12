import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './modals/modals.module';
import { ITodoService } from './service.interface';

@Injectable({
  providedIn: 'root'
})
export class Service  implements ITodoService{

    getBookDetails(): Observable<Todo[]> {
        return of([
          {
            id: 0,
            name: 'Web Development',
            author_name: 'Arun Kumar Tamirisa',
            img_url: '../assets/images/book 1.webp',
            description: 'Enterprise Application Development with C# 9 and .NET 5: Enhance your C# and .NET skills by mastering the process of developing professional-grade web applications',
            date_dt: 'Mar 19, 2021',
            price: '90',
            qty: 0
        },
        {
            id: 1,
            name: 'Djanjo',
            author_name: 'Ben Shaw , Saurabh Badhwar',
            img_url: '../assets/images/book 2.webp',
            description: 'Web Development with Django: Learn to build modern web applications with a Python-based framework',
            date_dt: 'Feb 25, 2021',
            price: '80',
            qty: 0
        },
        {
            id: 2,
            name: 'Web Coding & Development',
            author_name: 'Paul McFedries',
            img_url: '../assets/images/book 3.webp',
            description: 'Web Coding & Development All-in-One For Dummies (For Dummies (Computer/Tech))',
            date_dt: 'May 15, 2018',
            price: '100',
            qty: 0
        },
        {
            id: 3,
            name: 'Flask Web Development',
            author_name: 'Miguel Grinberg',
            img_url: '../assets/images/book 4.webp',
            description: 'Flask Web Development: Developing Web Applications with Python',
            date_dt: 'Apr 10, 2018',
            price: '120',
            qty: 0
        },
    ]);
    }
}