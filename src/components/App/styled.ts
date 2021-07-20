import styled from 'styled-components';
import { colors } from 'src/components/UI/themeStyles';

export interface IAppDiv {
  theme: 'dark' | 'light';
  colors: typeof colors;
}

export const StAppDiv = styled.div < IAppDiv > `
  min-height: 100vh;
  ${({ url = 'heh' }) => url && `background: url(${url}) 100% 100% no-repeat`};
  background-size: cover;
  direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
  /* background-color: ${({ colors, theme }) => colors[theme].backgroundDefault}; */
`;
