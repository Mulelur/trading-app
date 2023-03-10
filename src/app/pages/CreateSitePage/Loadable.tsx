/**
 * Asynchronously loads the component for CreateSitePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const CreateSitePage = lazyLoad(
  () => import('./index'),
  module => module.CreateSitePage,
  {
    fallback: <LoadingIndicator />,
  },
);
