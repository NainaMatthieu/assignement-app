import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]',
  standalone: true
})
export class RenduDirective {

  // L'element à modifer, si on le mets dans un <p> par exemple ça récupère le <p>
  constructor(el : ElementRef) {
    el.nativeElement.style.color = 'green';
   }

}
