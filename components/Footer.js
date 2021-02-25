import styled from 'styled-components';

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>© 2021 William Manzoli</p>
    </FooterSection>
  );
};

export default Footer;
