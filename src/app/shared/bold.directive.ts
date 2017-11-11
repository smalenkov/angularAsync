import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {

  @Input() selectedFontSize;
  @Input() defaultFontSize;
  private fontSize: string;
  private defaultColor: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit() {
    this.fontSize = this.defaultFontSize;
    this.defaultColor = '#b7b7b7';
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Этот блок и текст были запилены средствами Angular! Ох**ть...');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'color', this.defaultColor);
  }

  @HostBinding('style.fontSize') get getFontSize() {
    return this.fontSize;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('#000000');
    this.fontSize = this.selectedFontSize;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('#b7b7b7');
    this.fontSize = this.defaultFontSize;
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
