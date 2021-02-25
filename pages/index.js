import Head from 'next/head';
import styled, { keyframes } from 'styled-components';

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
  letter-spacing: 10px;
  font-family: Roboto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Heading = styled.h1`
  background: url("https://thumbs.gfycat.com/AdeptFalseJunco-size_restricted.gif");
  -webkit-background-clip: text;
  background-position: 40% 50%;

  filter: grayscale(100%);
  color: rgba(0, 0, 0, 0.0);
  text-shadow: 0 0 60px rgba(255, 255, 255, 100);

  font-size: 4rem;
  font-weight: 900;
  

`;

const Heading2 = styled.h2`
  margin:0px;
  color: #666;
  font-size: 1.5em;
  font-weight: 200;
`;

const Strong = styled.h2`
  margin:0px;
  color: #666;
  font-size: 2em;
  font-weight: 300;
`;

const Heading3 = styled.h3`
  margin:0px;
  text-align:center;
  font-size: 1em;
  font-weight: 300;
`;

const Shadow = styled.div`
background: url("https://lh3.googleusercontent.com/proxy/Mi9EqDeXC7SEJbmsxFSR6Hnj3DkE_AQBeJWtDtE1F0upXm8VW_eX3Q265NcwPvTXAlAOolLZhs0ZCILDuHfKEWtmp4dodHA4D8gVSiGmE-lQakogNCAHWSL4vq2xYwiv9DADwMBVibp775oWzuCmENdsNmBSq6Q") repeat;
background-size: 100%;
opacity: 5%;
height: 40px;
width: 500px;
  
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>William Manzoli</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
      <Container>
        <Row>
        <Heading2>Hello, i am</Heading2><Strong> William</Strong>
        </Row>
        <Row>
          <Heading2>aka.</Heading2><Heading>Manzoli</Heading>
        </Row>

        <Column>
        <Heading3>FullStack Web Developer</Heading3>
        <Heading3>&amp; Game Designer</Heading3>
        </Column>
        <Shadow />
      </Container>
      </Body>
    </>
  );
}
