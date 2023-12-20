import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fl-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fl-language.component.html',
  styleUrl: './fl-language.component.scss'
})

export class FlLanguageComponent {
  @ViewChild('dropdown') dropdown!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const select = this.dropdown.nativeElement.querySelector('.select');
    const caret = this.dropdown.nativeElement.querySelector('.caret');
    const menu = this.dropdown.nativeElement.querySelector('.menu');
    const options = this.dropdown.nativeElement.querySelectorAll('.menu li');
    const selected = this.dropdown.nativeElement.querySelector('.selected');

    select.addEventListener('click', () => {
      const isMenuOpen = menu.classList.contains('menu-open');

      if (isMenuOpen) {
        this.renderer.removeClass(select, 'select-clicked');
        this.renderer.removeClass(caret, 'caret-rotate');
        this.renderer.removeClass(menu, 'menu-open');
      } else {
        this.renderer.addClass(select, 'select-clicked');
        this.renderer.addClass(caret, 'caret-rotate');
        this.renderer.addClass(menu, 'menu-open');
      }
    });

    options.forEach((option: HTMLElement) => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;

        this.renderer.removeClass(caret, 'caret-rotate');
        this.renderer.removeClass(menu, 'menu-open');

        options.forEach((opt: HTMLElement) => {
          this.renderer.removeClass(opt, 'active');
        });
      });
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;

    if (!this.dropdown.nativeElement.contains(clickedElement)) {
      const select = this.dropdown.nativeElement.querySelector('.select');
      const caret = this.dropdown.nativeElement.querySelector('.caret');
      const menu = this.dropdown.nativeElement.querySelector('.menu');

      this.renderer.removeClass(select, 'select-clicked');
      this.renderer.removeClass(caret, 'caret-rotate');
      this.renderer.removeClass(menu, 'menu-open');
    }
  }
}