import { useContext } from 'react';

import { colors } from 'src/components/UI/baseLayout';
import { Theme } from '../Hocs';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
