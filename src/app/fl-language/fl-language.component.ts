import { Component, ElementRef, HostListener, inject, LOCALE_ID, signal } from '@angular/core';
import { environments } from "../../environments/environments";

@Component({
  selector: 'fl-language',
  templateUrl: './fl-language.component.html',
  styleUrl: './fl-language.component.scss',
  standalone: true
})

export class FlLanguageComponent {
  protected menuOpen = signal(false);
  protected languages = environments.languages;
  protected activeLocale = inject(LOCALE_ID);
  protected activeLanguage = this.languages.find(l => l.code === this.activeLocale)?.name;
  protected elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      this.menuOpen.set(false);
    }
  }

  changeLanguage(lang: {url: string}): void {
    window.location.href = lang.url;
  }
}
