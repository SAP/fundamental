import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private translate: TranslateService) {
   
    translate.setDefaultLang('en');

    
    const browserLang = translate.getBrowserLang() || 'en'; 
    translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');
  }
}
