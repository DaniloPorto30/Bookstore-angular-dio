import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  livroDetail !: FormGroup;
  livroObjt : Book = new Book();
  livroList : Book[] = [];

  constructor(private formBuilder : FormBuilder, private service : BooksService ) { }

  ngOnInit(): void {
    this.livroDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      price: [''],
      quantity: [''],
      category: [''],
      image: [''],
    });
   this.getBook();
  }

  addLivro() {
    console.log(this.livroDetail);
    this.livroObjt.id = this.livroDetail.value.id;
    this.livroObjt.name = this.livroDetail.value.name;
    this.livroObjt.price = this.livroDetail.value.price;
    this.livroObjt.quantity = this.livroDetail.value.quantity;
    this.livroObjt.category = this.livroDetail.value.category;
    this.livroObjt.image = this.livroDetail.value.image;

    this.service.addLivro(this.livroObjt).subscribe(res=>{
        console.log(res);
 alert('Livro adicionado com Sucesso!');

      let ref = document.getElementById('clear');
        ref?.click();

        this.livroDetail.reset();
        this.getBook();

    },err=>{
    alert(' Erro ao adicionar livro!');
    });

  }
  getBook() {
    this.service.getBook().subscribe(
      (res : Book[])=>{
        this.livroList = res;
    },err=>{
      console.log("error while fetching data.")
     alert('Erro ao Buscar Livros!');
    });
  }

  clickAddLivro() {
    this.livroDetail.reset();
  }

}
