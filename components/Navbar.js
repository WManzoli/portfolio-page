import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background: #fff;
  color: #000;
  font-family: Roboto;
`;

const StyledLink = styled.a`
  padding: 0rem 0.8rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>WM</StyledLink>
        </Link>
      </div>
      <div>
      <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
        <Link href='/work' passHref>
          <StyledLink>Works</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
