import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
