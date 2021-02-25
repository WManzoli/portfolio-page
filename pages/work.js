import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBehance
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faGithub,
  faBehance
)


const spinner = keyframes`
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
  `;

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
  align-items: center;
  height: 90vh;
  width: 100vw;
  

  animation: ${fadeIn} 2s;
  background: #f5f5f5;

  overflow: hidden;
  position: relative;
`;

const Spinner = styled.div`
height: 40vh;
  width: 100%;

  overflow: hidden;
  position: relative;

  @media (max-width: 1300px) {
    width: 170%;
  }
`;

const Spinnerdiv = styled.div`
  display: block;
  width: 200%;

  position: absolute;
  overflow: hidden;

  animation: ${spinner} 40s linear infinite;
  font-size: 8vh;
  
  @media (max-width: 1300px) {
      animation: ${spinner} 20s linear infinite;
      font-size: 5vh;
  }
`;

const SpinnerSpan = styled.div`
  background: url("https://i.pinimg.com/originals/3a/71/28/3a7128cd1b40cf4b20619eb737247f52.gif") repeat;
  -webkit-background-clip: text;
  margin:0px;
  color: rgba(0, 0, 0, 0.9);

  font-family: Roboto;
  font-weight: 800;
  float: left;
  width: 50%;

`;



const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const WindowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 32px;
`;

const Window = styled.div`
  background: #C0C0C0;
  height: 180px;
  width: 160px;

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
  margin: 32px;

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
height: 16px;
width: 180px;
  
`;

export default function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
        
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>

      <Spinner>
      <Spinnerdiv>
      <SpinnerSpan>Check my codes at GITHUB,</SpinnerSpan>
    <SpinnerSpan>Check my codes at GITHUB,</SpinnerSpan>
    <SpinnerSpan><br />     I have some projects on BEHANCE.</SpinnerSpan>
    <SpinnerSpan><br />     I have some projects on BEHANCE.</SpinnerSpan>
      </Spinnerdiv>
    </Spinner>


      <WindowContainer>
      <Column>
      <Window as='a' href='https://github.com/WManzoli'>
        <WindowTitle>GitHub<BtnClose>X</BtnClose></WindowTitle>
          <WindowBody>
            <FontAwesomeIcon icon={faGithub} style={{width: '128px'}} />
          </WindowBody>
      </Window>
      <Shadow />
      </Column>


      <Column>
      <Window as='a' href='https://www.behance.net/WManzoli'>
        <WindowTitle>Behance<BtnClose>X</BtnClose></WindowTitle>
          <WindowBody>
            <FontAwesomeIcon icon={faBehance} style={{width: '128px'}} />
          </WindowBody>
      </Window>
      <Shadow />
      </Column>
      
    </WindowContainer>

      </Body>
    </>
  );
}
