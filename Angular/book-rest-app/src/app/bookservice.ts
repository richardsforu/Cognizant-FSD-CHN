import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BookService{

    apiUrl='http://localhost:8080/getBooks';

    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http:Http){}

    listAllBooks():Promise<Book[]>{
        return this.http.get(this.apiUrl)
        .toPromise().then(response=> response.json() as Book)
        .catch(this.handleError);
    }

   addBook(book:Book):Promise<Book>{
    const url='http://localhost:8080/saveBook';
    return this.http
    .post(url,book)	
    .toPromise()
    .catch(this.handleError);
   }

   findBook(id:number):Promise<Book>{
   
    const url=`http://localhost:8080/findBook/${id}`;

    //const url = `${this.apiUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Book)
        .catch(this.handleError);
   }

   updateBook(book: Book): Promise<Book> {
   const url=`http://localhost:8080/updateBook/${book.id}`;
    console.log('--service: id: '+book.id+" and title "+book.title);
    return this.http
      .put(url,book)
      .toPromise()
      .then(() => book)
      .catch(this.handleError);
  }

  deleteBook(book: Book): Promise<void> {
    const url=`http://localhost:8080/deleteBook/${book.id}`;

    //const url = `${this.apiUrl}/${book.id}`;
    console.log('---> Delete: '+url);
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  findBooks(title:string):Promise<Book[]>{
    const url=`http://localhost:8080/findBooks?title=${title}`;
    return this.http.get(url)
    .toPromise().then(response=> response.json() as Book)
    .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }

}