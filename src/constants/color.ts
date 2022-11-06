export const COLORS = {
  Black: '#000000',
  Black1: '#474849',
  Black2: '#1E1E1E',
  Black3: '#7F7F7F',
  Black4: '#161616',
  CoolGray1: '#D3D5E6',
  CoolGray2: '#68669A',
  CoolGray3: '#8583A8',
  CoolGray4: '#EEF2F9',
  CoolGray5: '#E0E0F1',
  WarmGray1: '#E5E5E5',
  WarmGray2: '#CECECE',
  PlaceholderGray: '#D9D9D9',
  White: '#FFFFFF',
  LinkBlue: '#1DA1F2',
  Green: '#00D76D',
  Red1: '#E74444',
  Red2: '#C84343',
  Blue: '#4D48F1',
  Purple1: '#E7E6FF',
  Purple2: '#DCD9FF',
  Purple3: '#F1F0FF',
};

export type ColorsType = keyof typeof COLORS;

export const BACKGROUND_COLORS = {
  BlueGradient: `linear-gradient(120deg, ${COLORS.Blue} 31.7%, #f100ff 156.6%)`,
};
