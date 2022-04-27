import { BooksService } from './../../../service/product-list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  p: number = 1;

  constructor(private bookService: BooksService) {

    this.bookService = bookService;
   }

  ngOnInit(): void {
  this.livros = this.bookService.getBook().subscribe((data =>{
    this.livros = data;
    console.log(this.livros);
  }))
  }
}
