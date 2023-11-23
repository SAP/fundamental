import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fl-used',
  templateUrl: './fl-used.component.html',
  styleUrls: ['./fl-used.component.scss']
})
export class FlUsedComponent implements OnInit{
  quotes = [
    { text: 'The fundamentals team is amazing to work with! They were willing to work with our existing stack, and continue to go above and beyond to help us meet our consistency goals. They are a true asset and incredibly responsive!', author: '~ SAP Fieldglass' },
    { text: 'Our solution is built on a modern, reactive stack - where micro frontend UI patterns are applied. By splitting monolithic UI into several micro apps, our teams are able to develop and ship things independently with high velocity. This is awesome as each team can deliver customer value fast, but at the same time this confronts us with challenges. Especially when it comes to ensuring a consistent user experience on the interface across the entire web application suite the Fundamental libraries have helped our teams to bring it all together in a nice, consistent way regardless of stack or framework. We use the Fundamental components, examples and documentation nearly every day as part of our design and development lifecycle.', author: '~ SAP FSM' },
  ];

  

  currentQuoteIndex = 0;
  currentQuote = this.quotes[this.currentQuoteIndex]

  ngOnInit(){

    this.updateCurrentQuote();
    
  }

  navigate(direction: 'previous' | 'next') {
    if (direction === 'previous') {
      this.currentQuoteIndex = (this.currentQuoteIndex - 1 + this.quotes.length) % this.quotes.length;
    } else if (direction === 'next') {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    }

    this.updateCurrentQuote();
  }

  updateCurrentQuote() {
    this.currentQuote = this.quotes[this.currentQuoteIndex];
  }

}
