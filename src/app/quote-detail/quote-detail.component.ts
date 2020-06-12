import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() upVoting = new EventEmitter<boolean>();
  @Output() downVoting = new EventEmitter<boolean>();

  upVotes(vote: boolean){
    this.upVoting.emit(vote);
  }

  downVotes(vote: boolean){
    this.downVoting.emit(vote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
