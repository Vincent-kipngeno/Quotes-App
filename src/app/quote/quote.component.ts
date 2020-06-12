import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote ("Be yourself; everyone else is already taken.", "Oscar Wilde", "Vincent Kipngeno", 0, 0, new Date(2020, 3, 12)),
    new Quote ("Be the change that you wish to see in the world.", " Mahatma Gandhi", "Vincent Kipngeno", 0, 0, new Date(2020, 3, 12)),
    new Quote ("No one can make you feel inferior without your consent.", "Eleanor Roosevelt", "Vincent Kipngeno", 0, 0, new Date(2020, 3, 12)),
    new Quote ("Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi", "Vincent Kipngeno", 0, 0, new Date(2020, 3, 12))
  ]
  addNewQuote(quote){
    this.quotes.push(quote);
  }
  toggler(index){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  addUpVote(upVoting, index){
    if (upVoting) {
      this.quotes[index].upVote += 1;
    }
  }

  addDownVote(downVoting, index){
    if (downVoting) {
      this.quotes[index].downVote += 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
