import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  livroDetail !: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  clickAddlivros() {
    this.livroDetail.reset();
  }
}
