import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { NavBar as Nav } from './NavBar';
import Menu from './Menu';
import { Logo } from '../SideBar/Logo';
import { SearchComp } from './Search';

type Props = {
  logo?: boolean;
  menu?: boolean;
};

export function NavBar({ logo, menu }: Props) {
  const [isSelected, setIsSelected] = React.useState(false);

  const path = '/project';

  return (
    <Wrapper
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      <Menu />
      {logo && path !== '/project' ? <Logo /> : <SearchComp />}
      {menu && <Nav />}
    </Wrapper>
  );
}

NavBar.defaultProps = {
  logo: true,
  menu: true,
};

const Wrapper = styled.div`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  width: 100%;
  padding-left: 10rem;
  padding-right: 10rem;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {
  padding-left: 1rem;
  padding-right: 3rem;
  }

  // Small devices (portrait tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {
  padding-left: 5rem;
  padding-right: 5rem;
  }

  // Medium devices (landscape tablets, 768px and up)
  @media only screen and (min-width: 768px) {
  padding-left: 7rem;
  padding-right: 7rem;
  }

  // Large devices (laptops/desktops, 992px and up)
  @media only screen and (min-width: 992px) {
  padding-left: 18rem;
  padding-right: 8rem;
  }
`;
