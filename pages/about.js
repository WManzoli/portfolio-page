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
  
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Roboto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Heading2 = styled.h2`
padding-left: 6%;
  background: url("http://mrwgifs.com/wp-content/uploads/2014/05/Beavis-Typing-Random-Characters-On-The-Computer-On-Mike-Judges-Beavis-and-Butt-Head.gif") no-repeat center;
  background-size: 400px;
  filter: brightness(95%);
  background-position: clip;
  -webkit-background-clip: text;
  letter-spacing: -3px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.0);
`;

const Heading3 = styled.h3`
  margin:-5px 0px 0px 0px;
  text-align:center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1rem;
  font-weight: 300;
`;


const WindowContainer = styled.div`
  filter: grayscale(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 0px;
  gap: 32px;
`;

const WindowFrame = styled.div`
  display: flex;
  flex-direction: column;

  background: #C0C0C0;
  height: 350px;
  width: 350px;

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
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
      <Container>
        <Heading>ABOUT ME</Heading>
        <Column>
        <Heading3>Brazilian enthusiastic student at technology field </Heading3>
        <Heading3>Currently at web development using JAMSTACK </Heading3>
        <Heading3>I love contribute to Open-Source and participate in </Heading3>
        <Heading3>projects that use new technologies, but, </Heading3>
        <Heading3>the mainly objective is to study programming</Heading3>
        <Heading3>I like to be always learning new softwares, </Heading3>
        <Heading3>frameworks, languages and their good practices </Heading3>
        </Column>
        
       
        
   
 

    <WindowContainer>
      <WindowFrame>
      <WindowTitle>readMe.txt<BtnClose>X</BtnClose></WindowTitle>
        <Heading2><br />
        01000010 01110010 01100001 01111010 01101001 01101100<br />
        01101001 01100001 01101110 00100000 01100101 01101110<br />
        01110100 01101000 01110101 01110011 01101001 01100001<br />
        01110011 01110100 01101001 01100011 00100000 01110011<br />
        01110100 01110101 01100100 01100101 01101110 01110100<br />
        00100000 01100001 01110100 00100000 01110100 01100101<br />
        01100011 01101000 01101110 01101111 01101100 01101111<br />
        01100111 01111001 00100000 01100110 01101001 01100101<br />
        01101100 01100100 00100000 00001010 01000011 01110101<br />
        01110010 01110010 01100101 01101110 01110100 01101100<br />
        01111001 00100000 01100001 01110100 00100000 01110111<br />
        01100101 01100010 00100000 01100100 01100101 01110110<br />
        01100101 01101100 01101111 01110000 01101101 01100101<br />
        01101110 01110100 00100000 01110101 01110011 01101001<br />
        01101110 01100111 00100000 01001010 01000001 01001101<br />
        01010011 01010100 01000001 01000011 01001011 00100000<br />
        00111010 00101001<br />
        </Heading2>
        
      </WindowFrame>
      
       
    </WindowContainer>
    <Shadow />
    </Container>
    
  



      </Body>
    </>
  );
}
