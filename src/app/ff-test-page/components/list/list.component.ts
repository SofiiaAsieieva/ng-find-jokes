import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() jokes: Joke[];
  @Output() loadPage: Output;

  page = 1;
  pageSize = 20;
}
