import { Book } from './../../../models/Book';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  livroList : Book[] = [];
  livros: any;
  livro!: Book;

  filters = {
    keyword: ''
  }
  constructor(public bookService: BooksService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {

  }

  listLivros(){
    this.bookService.getBook().subscribe(
      data =>  this.livros = this.filterslivroList(data)
    )
  }
  filterslivroList(livroList: Book[]){
    return livroList.filter((e) =>{
      return e.book.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

}
