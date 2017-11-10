import {Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {
    constructor(
    private el: ElementRef,
    private renderer: Renderer2) {}

    ngOnInit() {
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('Йух-ууу!');

      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.el.nativeElement, div);
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('16px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('14px');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', val);
  }
}
