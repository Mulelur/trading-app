import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from 'app/components/PageWrapper';
import { SignInForm } from './SignInForm';
import { NavBar } from 'app/components/NavBar';

export function SignInPage() {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign in page" />
      </Helmet>
      <NavBar logo={true} menu={false} />
      <PageWrapper>
        <SignInForm />
      </PageWrapper>
    </>
  );
}
