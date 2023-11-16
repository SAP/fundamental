import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fl-used',
  templateUrl: './fl-used.component.html',
  styleUrls: ['./fl-used.component.scss']
})
export class FlUsedComponent implements OnInit{
  quotes = [
    { text: 'You may say I am a dreamer, but I am not the only one. I hope someday you will join us. And the world will live as one', author: '~ John Lennon' },
    { text: 'Your time i slimited, so dont waste it living someone else life. Dont be living with the results of other people thinking', author: '~ Steve Jobs' },
    { text: 'The greatest glory in living lies not in never falling, but rising everytime we fall', author: '~ Nelson Mandela' }
  ];

  currentQuoteIndex = 0;
  currentQuote = this.quotes[this.currentQuoteIndex]

  ngOnInit(){

    this.updateCurrentQuote();
    
  }

  navigate(direction: 'previous' | 'next') {
    if (direction === 'previous' && this.currentQuoteIndex > 0) {
      this.currentQuoteIndex--;
    } else if (direction === 'next' && this.currentQuoteIndex < this.quotes.length - 1) {
      this.currentQuoteIndex++;
    }

    this.updateCurrentQuote();
  }

  updateCurrentQuote() {
    this.currentQuote = this.quotes[this.currentQuoteIndex];
  }

}
