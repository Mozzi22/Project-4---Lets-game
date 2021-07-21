import { useContext } from 'react';
import { colors } from 'src/components/UI/themeStyles';
import { Theme } from '../Hocs';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
