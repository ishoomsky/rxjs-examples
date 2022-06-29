import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.css']
})
export class AjaxOperatorComponent implements OnInit {

  obs$!: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
      map((userResponse) => console.log('users: ', userResponse)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );

    this.obs$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

}
