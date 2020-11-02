import {Component, OnInit} from '@angular/core';
import {select, State, Store} from '@ngrx/store';
import { increment, decrement, reset } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  counter = 0;

  constructor(public state: Store<{ count: number }>) {}

  ngOnInit(): void {
    this.state.pipe(select('count'))
        .subscribe((count) => {
          this.counter = count;
        });
  }

  increment(): void {
    this.state.dispatch(increment());
  }

  decrement(): void {
    this.state.dispatch(decrement());
  }

  reset(): void {
    this.state.dispatch(reset());
  }
}
