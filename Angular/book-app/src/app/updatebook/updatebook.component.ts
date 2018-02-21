import { BookService } from './../bookservice';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  public findResult=false;
  constructor(private bookService:BookService) { }
  public oldBook:Book;
  public tobeUpdatedBook:Book;
  name:'Praveen';
  findBook(id:number){
     this.findResult=true;
     this.bookService.getBook(id).then(oldBook=>this.oldBook=oldBook);
    // this.bookService.updateBook(this.oldBook).then(tobeUpdatedBook=>this.tobeUpdatedBook=tobeUpdatedBook);
  }


  ngOnInit() {
      
    //
  }

}