import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css'],
})
export class OfOperatorComponent implements OnInit, OnDestroy {
  simpleStream$!: Observable<any>;
  marbles: any[] = [];
  subscription!: Subscription;

  constructor() {}
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.simpleStream$ = of(10, 20, 30);

    this.simpleStream$.subscribe({
      next: (value) => {
        this.marbles.push('next: ' + value);
        console.log('next:', value);
      },
      error: (err) => {
        this.marbles.push('error: ' + err);
        console.log('error:', err);
      },
      complete: () => {
        this.marbles.push('completed')
        console.log('completed');
      },
    });
  }
}
