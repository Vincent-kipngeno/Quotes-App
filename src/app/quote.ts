export class Quote {
  public showQuoteDetails: boolean;
  constructor (public quoteValue: string, public authorName: string, public userName: string, public upVote: number, public downVote: number, public date: Date) {
    this.showQuoteDetails = false;
  }
}
