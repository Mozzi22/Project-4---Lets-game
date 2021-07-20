import { IAppDiv } from 'src/components/App/styled';
import { colors } from 'src/components/UI/themeStyles';

export interface IStFormDiv extends IAppDiv {
  backgroundColor?: string;
  transition?: string;
  theme: 'dark' | 'light';
  colors: typeof colors;
}

export interface IForm {
  children: React.ReactNode;
}
