import { render, RenderOptions } from '@testing-library/react';
// import defaultStrings from 'i18n/en-x-default';
// import { TranslationProvider } from 'my-i18n-lib';
// import { ThemeProvider } from 'my-ui-lib';
import React, { FC, PropsWithChildren, ReactElement } from 'react';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>{children}</TranslationProvider>
  //   </ThemeProvider>
  // );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
