import Head from 'next/head';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(
  faLinkedin,
  faFacebookSquare
)


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
  `;


const Body = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;

animation: ${fadeIn} 2s;
background: #f5f5f5;
height: 90vh;
width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`;



const Heading = styled.h1`
  background: url("https://thumbs.gfycat.com/AdeptFalseJunco-size_restricted.gif");
  -webkit-background-clip: text;
  background-position: 40% 50%;

  filter: grayscale(100%);
  color: rgba(0, 0, 0, 0.0);
  text-shadow: 0 0 60px rgba(255, 255, 255, 100);

  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 10px;
  
  @media (max-height: 720px) {
    font-size: 3rem;
  }

`;


const Heading3 = styled.h3`
  margin:0px;
  text-align:center;
  color: #000;
  font-size: 1em;
  font-weight: 300;
`;

const WindowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 1vw;
`;

const WindowFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #C0C0C0;
  height: 350px;
  width: 350px;

  border-top: solid 2.5px #fff;
  border-right: solid 2.5px #000;
  border-bottom: solid 2.5px #000;
  border-left: solid 2.5px #fff;
`;

const Window = styled.div`
  background: #C0C0C0;
  height: 128px;
  width: 30vw;

  border-top: solid 2.5px #fff;
  border-right: solid 2.5px #000;
  border-bottom: solid 2.5px #000;
  border-left: solid 2.5px #fff;
`;

const WindowTitle = styled.div`
  letter-spacing: 5px;
  color: #fff;
  background: linear-gradient(90deg, #000, #c0c0c0);
  font: 400 1rem "DotGothic16";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  height: 32px;

`;

const WindowBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;

`;

const BtnClose = styled.div`
  &{
  height: 25px;
  width: 32px;
  color: #000;
  background: #C0C0C0;
  text-align: center;
  border: 1px solid #000;
  position: relative;
  padding-left: 10px;
  
  
  border-top: solid 1px #fff;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  border-left: solid 1px #fff;

  }
  &:hover {
  background: #f0f0f0;
  }
`;


const Shadow = styled.div`
background: url("https://lh3.googleusercontent.com/proxy/Mi9EqDeXC7SEJbmsxFSR6Hnj3DkE_AQBeJWtDtE1F0upXm8VW_eX3Q265NcwPvTXAlAOolLZhs0ZCILDuHfKEWtmp4dodHA4D8gVSiGmE-lQakogNCAHWSL4vq2xYwiv9DADwMBVibp775oWzuCmENdsNmBSq6Q") repeat;
background-size: 100%;
opacity: 25%;
height: 40px;
width: 500px;
  
`;


export default function About() {
  return (
    <>
      <Head>
        <title>Contact</title>
        
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
        <Container>
          <Heading>CONTACT</Heading>
        

  <WindowFrame>
  <WindowTitle>🔗 contactMe.exe<BtnClose>X</BtnClose></WindowTitle>
  <Heading3><br />feel free to invite me to help with open source and personal projects
  <br />or you can send job offers, i am available for freelancing :)</Heading3>

    <WindowContainer>
      
      <Window as='a' href='https://www.linkedin.com/in/wmanzoli/'>
        <WindowTitle>Linkedin</WindowTitle>
          <WindowBody>
            <FontAwesomeIcon icon={faLinkedin} style={{width: '64px', opacity: '50%'}} />
          </WindowBody>
      </Window>

      <Window as='a' href='mailto:WilliamManzoli@gmail.com'>
        <WindowTitle>E-Mail</WindowTitle>
          <WindowBody>
            <FontAwesomeIcon icon={faEnvelope} style={{width: '75px', opacity: '50%'}} />
          </WindowBody>
      </Window>
      
      <Window as='a' href='https://www.facebook.com/WManzoli/'>
        <WindowTitle>Facebook</WindowTitle>
          <WindowBody>
            <FontAwesomeIcon icon={faFacebookSquare} style={{width: '64px', opacity: '50%'}} />
          </WindowBody>
      </Window>
      
    </WindowContainer>

  </WindowFrame>
  <Shadow />
  </Container>
      </Body>
    </>
  );
}
