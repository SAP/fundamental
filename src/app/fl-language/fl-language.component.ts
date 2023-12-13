import { Component, ElementRef, HostListener, Inject, LOCALE_ID, signal } from '@angular/core';
import { environments } from "../../environments/environments";
import { Router } from '@angular/router';
import { PopoverTriggerDirective, PopoverComponent, PopoverModule } from '@fundamental-ngx/core/popover';

@Component({
  selector: 'fl-language',
  templateUrl: './fl-language.component.html',
  styleUrl: './fl-language.component.scss',
  imports: [PopoverModule, PopoverTriggerDirective, PopoverComponent],
  standalone: true
})

export class FlLanguageComponent {
  languages = environments.languages;
  menuOpen = signal(false);
  activeLanguage: string | undefined;  
  elementRef: ElementRef;

  constructor(@Inject(LOCALE_ID) protected activeLocale: string,
              private router: Router,
              elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.activeLanguage = this.languages.find(l => l.code === this.activeLocale)?.name;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      this.menuOpen.set(false);
    }
  }

  changeLanguage(lang: {url: string}): void {
    window.location.href = lang.url;
    //this.router.navigateByUrl(lang.url);
  }

  trackByCode(index: number, language: any): string {
    return language.code;
  }
}
