import styled from "styled-components";

export const AboutUsBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding:40px;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #adebc5;
`;

export const SubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-bottom: 50px;
`;

export const Signature = styled.p`
  -ms-transform: skewY(-5deg); /* IE 9 */
  transform: skewY(-5deg);
  font-family: "Herr Von Muellerhoff", cursive;
  font-size: 30px;
  float: right;
  right: 20%;
  position: relative;

  @media only screen and (max-width: 500px) {
    right: 20px;
  }
`;

export const SubMainInfoBlock = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubMainInfoBlockH5 = styled.h5`
  font-size: 20px;
  text-align: center;
`;

export const MainInfoBlock = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

export const MainInfoBlockIMG = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IMG = styled.img`
  transition: transform 0.2s;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin: auto;

  @media only screen and (max-width: 350px) {
    max-width: 95%;
  }
`;