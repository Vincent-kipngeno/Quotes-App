import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})



export class QuoteFormComponent implements OnInit {

  newQuote = new Quote (" ", " ", " ", 0, 0, new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    alert("Your Quote has been added. You can also add another one.");
    this.newQuote = new Quote (" ", " ", " ", 0, 0, new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
