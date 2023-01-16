import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnInit
} from '@angular/core';
import {
  MedButtonGroupConfig,
  MedButtonGroupDirection
} from './med-button-group.config';
import { MED_BUTTON_GROUP_CONFIG } from './med-button-group.config.token';

@Directive({
  selector: '[medMedButtonGroup]',
  host: {
    class: 'med-button-group'
  }
})
export class MedButtonGroupDirective implements OnInit {
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';

  constructor(private elementRef: ElementRef, @Inject(MED_BUTTON_GROUP_CONFIG) private medButtonGroupConfig: MedButtonGroupConfig) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add(this.direction);

    const css = `.med-button-group {display: flex; width: fit-content;} .med-button-group .med-button {border-radius: 0;}`;
    const directionCss = this.getButtonGroupStyle();
    const style = document.createElement('style');

    if (style.textContent) {
      style.textContent = `${css} ${directionCss}`;
    } else {
      style.appendChild(document.createTextNode(`${css} ${directionCss}`));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
  }

  private getButtonGroupStyle(): string {
    switch (this.direction) {
      case MedButtonGroupDirection.Horizontal:
        return this.getHorizontalStyles();
      case MedButtonGroupDirection.Vertical:
        return this.getVerticalStyles();
      default:
        return this.getHorizontalStyles();
    }
  }

  private getHorizontalStyles(): string {
    const firstChild = `.horizontal .med-button:first-child {border-top-left-radius: ${this.medButtonGroupConfig.horizontalBorderRadius};border-bottom-left-radius: ${this.medButtonGroupConfig.horizontalBorderRadius};}`
    const lastChild = `.horizontal .med-button:last-child {border-top-right-radius: ${this.medButtonGroupConfig.horizontalBorderRadius};border-bottom-right-radius: ${this.medButtonGroupConfig.horizontalBorderRadius};}`

    return `${firstChild} ${lastChild}`;
  }

  private getVerticalStyles(): string {
    const firstChild = `.vertical .med-button:first-child {border-top-left-radius: ${this.medButtonGroupConfig.verticalBorderRadius};border-top-right-radius: ${this.medButtonGroupConfig.verticalBorderRadius};}`
    const lastChild = `.vertical .med-button:last-child {border-bottom-left-radius: ${this.medButtonGroupConfig.verticalBorderRadius};border-bottom-right-radius: ${this.medButtonGroupConfig.verticalBorderRadius};}`

    return `.vertical {flex-direction: column;} ${firstChild} ${lastChild}`;
  }
}
