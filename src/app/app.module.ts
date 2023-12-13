import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlCardComponent } from './fl-card/fl-card.component';
import { FlIntroComponent } from './fl-intro/fl-intro.component';
import { FlPurposeComponent } from './fl-purpose/fl-purpose.component';
import { FlUsedComponent } from './fl-used/fl-used.component';
import { FlConferenceComponent } from './fl-conference/fl-conference.component';
import { FlDesignComponent } from './fl-design/fl-design.component';
import { FlFooterComponent } from './fl-footer/fl-footer.component';
import { FlLanguageComponent } from "./fl-language/fl-language.component";

@NgModule({
    declarations: [
        AppComponent,
        FlCardComponent,
        FlIntroComponent,
        FlPurposeComponent,
        FlUsedComponent,
        FlConferenceComponent,
        FlDesignComponent,
        FlFooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlLanguageComponent
    ]
})
export class AppModule { }
