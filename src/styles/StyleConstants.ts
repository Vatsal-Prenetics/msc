export const StyleConstants: StyleConstant = {
  font: {
    regular: 'Circular Std',
  },
  fontSize: {
    xSmall: '12px',
    small: '14px',
    medium: '16px',
    mediumLarge: '24px',
    large: '32px',
  },

  color: {
    PreneticsGreen: 'rgba(82, 156, 110, 1)',
    PreneticsBlack: 'rgba(51, 51, 51, 1)',
    PreneticsGray: 'rgba(130, 130, 130, 1)',
    ModalWhite: 'rgba(255,255,255,1)',
    PreneticsRed: 'rgba(235, 87, 87, 1)',
    ModalGray: 'rgba(242, 242, 242)',
  },
};

interface StyleConstant {
  font: {
    regular: string;
  };
  fontSize: {
    xSmall: string;
    small: string;
    medium: string;
    mediumLarge: string;
    large: string;
  };
  color: {
    PreneticsGreen: string;
    PreneticsBlack: string;
    PreneticsGray: string;
    ModalWhite: string;
    PreneticsRed: string;
    ModalGray: string;
  };
}
