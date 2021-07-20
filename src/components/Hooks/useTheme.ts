import { useContext } from 'react';

import { colors } from '../UI/themeStyles';
import { Theme } from '../Hocs';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
