import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()

export class BooksService{
  private url = 'http://localhost:8081/livro/getAll';


  httpOptions={
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }
  constructor(private http: HttpClient){}

  getBook(){
    return this.http.get(this.url)
  }
}
