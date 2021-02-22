import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
