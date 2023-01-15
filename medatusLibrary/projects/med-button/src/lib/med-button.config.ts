export class MedButtonConfig {
  primaryColor: MedButtonColor = {
    backgroundColor: '#3F4FA0',
    hoverStateBackgroundColor: '#394892',
    activeStateBackgroundColor: '#2D3872',
    textColor: '#FFFFFF'
  };
  secondaryColor: MedButtonColor = {
    backgroundColor: '#ECEDF6',
    hoverStateBackgroundColor: '#D9DCEC',
    activeStateBackgroundColor: '#C5CAE3',
    textColor: '#3F4FA0'
  };
  destructiveColor: MedButtonColor = {
    backgroundColor: '#FFEAE9',
    hoverStateBackgroundColor: '#394892',
    activeStateBackgroundColor: '#FFE2E0',
    textColor: '#FA6E6B'
  };
  disabledColor: MedButtonColor = {
    backgroundColor: '#E4E4E4',
    hoverStateBackgroundColor: '#394892',
    activeStateBackgroundColor: '#2D3872',
    textColor: '#A2A2A2'
  };
  mediumButtonPadding: string = '';
  largeButtonPadding: string = '';
}

//
// export interface MedButtonConfig {
//   primaryColor: MedButtonColor;
//   secondaryColor: MedButtonColor;
//   destructiveColor: MedButtonColor;
//   disabledColor: MedButtonColor;
//   mediumButtonPadding: string;
//   largeButtonPadding: string;
// }

export interface MedButtonColor {
  backgroundColor: string;
  textColor: string;
  activeStateBackgroundColor?: string;
  hoverStateBackgroundColor: string;
  border?: string;
}

export enum MedButtonColorType {
  Primary = 'primaryColor',
  Secondary = 'secondaryColor',
  Destructive = 'destructiveColor'
}
