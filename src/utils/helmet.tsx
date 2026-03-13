import type { ComponentType, ReactNode } from 'react';
import * as ReactHelmetAsync from 'react-helmet-async';

type HelmetComponent = ComponentType<{ children?: ReactNode }>;

const {
  HelmetProvider,
  Helmet,
} = (ReactHelmetAsync as unknown as {
  HelmetProvider: HelmetComponent;
  Helmet: HelmetComponent;
});

export { HelmetProvider, Helmet };
