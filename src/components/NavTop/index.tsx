import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import githubIcon from '../../assets/github.svg';
import darkmodeIcon from '../../assets/darkmode.svg';

import { useSideMenu } from '../../context/SidemenuContext';

import { Icon, Button } from '..';
import { CloseIcon, MenuIcon } from '../../icons';

const Header = styled.header`
  flex-direction: 'row';
  justify-content: center;
  grid-area: header;
  display: flex;
  align-items: center;
  width: calc(100% - 5px);
  min-height: 50px;
  position: fixed;
  z-index: 1;
  color: var(--clr-foreground);
  padding: 0 2rem;
  border-bottom: 1px solid var(--border-color);
  background: white;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo span {
    font-weight: 600;
  }
  .logo .icon {
    fill: var(--clr-foreground);
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    padding: 0 4rem 0 4rem;
  }

  .headerLeft {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .headerLeft > .close-btn,
  .headerLeft > .menu-btn {
    border-radius: 0;
    padding: 1rem 2rem;
    display: fixed;
    position: absolute;
    left: 0;
    background: transparent;

    @media (min-width: 768px) {
      display: none;
    }
    @media (min-width: 1024px) {
    }
  }

  .headerRight {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    @media (min-width: 1024px) {
    }
  }
`;

export const NavTop = () => {
  const { isOpen, toggleMenu, closeMenu } = useSideMenu();
  const navigate = useNavigate();

  return (
    <Header>
      <div className="headerLeft">
        {!isOpen ? (
          <Button className="menu-btn" intent="icon" onClick={toggleMenu}>
            <Icon size="20px">
              <MenuIcon />
            </Icon>
          </Button>
        ) : (
          <Button className="close-btn" intent="icon" onClick={toggleMenu}>
            <Icon size="20px">
              <CloseIcon />
            </Icon>
          </Button>
        )}
        <div className="logo">
          <Button intent="plain" padding="none" className="gap-2" onClick={() => navigate('/')}>
            <Icon className="icon" size="25px">
              <img src={logo} alt="logo" />
            </Icon>
            <span>SWAGFINGER-UI</span>
          </Button>
        </div>
      </div>
      <div className="headerRight">
        <Link to="https://github.com/swagfinger/swagfinger-ui" target="_blank" aria-label="github repo">
          <Icon size="20px" fillOpacity="1" fill="#FFF" stroke="#FFF">
            <img src={githubIcon} alt="github" />
          </Icon>
        </Link>

        <Icon size="20px">
          <img src={darkmodeIcon} alt="darkmode" />
        </Icon>
      </div>
    </Header>
  );
};
