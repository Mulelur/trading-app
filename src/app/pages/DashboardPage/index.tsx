import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Projects } from './Projects';
import { PageWrapper } from 'app/components/PageWrapper';
import { NavBar } from 'app/components/NavBar';

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
        <meta name="Dashboard" content="Dashboard page for web porfirio." />
      </Helmet>
      <PageWrapper>
        <NavBar />
        {/* <Masthead />
        <Features /> */}
        <Container>
          <Projects />
        </Container>
      </PageWrapper>
    </>
  );
}

const Container = styled.div`
  position: relative;
`;
