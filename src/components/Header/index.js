import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, NavBar, Title } from './styles';

import logoImg from '../../assets/images/logo.svg';

function Header(props) {
  const { title, linkTo, linkIcon: LinkIcon, linkText } = props;

  return (
    <Container>
      <NavBar>
        <img src={logoImg} alt="Sponte" />
        <Link to={linkTo}>
          <LinkIcon />
          {linkText}
        </Link>
      </NavBar>

      <Title>
        <strong>{title}</strong>
      </Title>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkIcon: PropTypes.element.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Header;
