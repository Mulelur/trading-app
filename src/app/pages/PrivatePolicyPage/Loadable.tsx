/**
 * Asynchronously loads the component for ProfilePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const ProfilePage = lazyLoad(
  () => import('./index'),
  module => module.PrivatePolicyPage,
  {
    fallback: <LoadingIndicator />,
  },
);
