import React from 'react';
import { IAppDiv } from 'src/components/App/styled';

export interface IForm {
  children: React.ReactNode;
}

export interface IStFormDiv extends IAppDiv {
  backgroundColor?: string;
  transition?: string;
}
