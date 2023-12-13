import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './fl-header.component.html',
    styleUrls: ['./fl-header.component.scss'],
    selector: 'fl-header'
})
export class FlHeaderComponent implements OnInit{
    isSmallScreen = false;

    ngOnInit() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        this.isSmallScreen = mediaQuery.matches;

        mediaQuery.addEventListener('change', e => this.isSmallScreen = e.matches);
    }

}