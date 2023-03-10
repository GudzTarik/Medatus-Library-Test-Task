import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnInit
} from '@angular/core';

import {
  MedButtonColorType,
  MedButtonConfig
} from './med-button.config';

import { MED_BUTTON_CONFIG } from './med-button.config.token';

@Directive({
  selector: '[medButton]',
  host: {
    class: 'med-button'
  }
})
export class MedButtonDirective implements OnInit {
  @Input() size: 'medium' | 'large' = 'medium';
  @Input() color: 'primary' | 'secondary' | 'destructive' = 'primary';
  @Input() disabled: boolean = false;

  constructor(private elementRef: ElementRef, @Inject(MED_BUTTON_CONFIG) private medButtonConfig: MedButtonConfig) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add(this.color);
    this.elementRef.nativeElement.classList.add(this.size);

    this.setButtonStyles();
  }

  private setButtonStyles(): void {
    const css = this.getButtonStyle();
    const style = document.createElement('style');

    if (style.textContent) {
      style.textContent = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
  }

  private getButtonStyle(): string {
    switch (this.color) {
      case 'primary':
        return this.createButtonClass(MedButtonColorType.Primary);
      case 'secondary':
        return this.createButtonClass(MedButtonColorType.Secondary);
      case 'destructive':
        return this.createButtonClass(MedButtonColorType.Destructive);
      default:
        return this.createButtonClass(MedButtonColorType.Primary);
    }
  }

  private createButtonClass(medButtonColorType: MedButtonColorType): string {
    const medButton = '.med-button {display: flex; align-items: center; font-family: "Manrope", sans-serif; font-weight: 700; font-size: 16px; line-height: 24px; border: none; border-radius: 100px; gap: 8px; cursor: pointer;}'
    const activeStateStyles = `.${ this.color }:active {background-color: ${ this.medButtonConfig[medButtonColorType].activeStateBackgroundColor };}`;
    const hoverStateStyles = `.${ this.color }:hover {background-color: ${ this.medButtonConfig[medButtonColorType].activeStateBackgroundColor };}`;
    const buttonPudding = this.size === 'medium' ? this.medButtonConfig.mediumButtonPadding : this.medButtonConfig.largeButtonPadding;

    let buttonStyles = `.${ this.color } { background-color: ${ this.medButtonConfig[medButtonColorType].backgroundColor }; color: ${ this.medButtonConfig[medButtonColorType].textColor }; ${ buttonPudding }}`;

    if (this.medButtonConfig[medButtonColorType].border) {
      buttonStyles += `border: ${ this.medButtonConfig[medButtonColorType].border }`;
    }


    return `${medButton} ${buttonStyles} ${activeStateStyles} ${hoverStateStyles}`;
  }
}
