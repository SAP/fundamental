import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fl-used',
  templateUrl: './fl-used.component.html',
  styleUrls: ['./fl-used.component.scss']
})
export class FlUsedComponent implements OnInit{
  quotes = [
    { text: 'The fundamentals team is amazing to work with! They were willing to work with our existing stack, and continue to go above and beyond to help us meet our consistency goals. They are a true asset and incredibly responsive!', author: '~ SAP Fieldglass' },
    { text: 'Our solution employs a modern, reactive stack with micro frontend UI patterns, allowing independent development and rapid deployment. Although this approach enhances team agility, ensuring a unified user experience across the web application suite poses challenges. Fundamental libraries address this by providing consistent design elements, examples, and documentation, streamlining our daily design and development processes.', author: '~ SAP FSM' },
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
