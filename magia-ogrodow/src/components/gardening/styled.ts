import styled from "styled-components";

export const GardeningBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
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

export const BlockWithExampleGardensForPC = styled.div`
`;

export const SubBlockWithExampleGarden = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
`;

export const SubBlockWithExampleGardenForMobile = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const ImageForExampleGarden = styled.img`
  width: 250px;
  height: 250px;
`;

export const BlockWithImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 5px;
    margin: auto;
    transition: transform 0.2s;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
  
  img:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
  }
`;

export const BlockWithImageForMobile = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
  border-radius: 5px;
  margin: auto;
  transition: transform 0.2s;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}

img:hover {
  transform: scale(1.1);
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
}
`;

export const BlockWithTextAndButton = styled.div`
  width: 50%;
  justify-content: center;
  text-align: center;

  p {
    text-align: left;
  }

  button {
    transition: transform 0.2s;
    max-width: 200px;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export const BlockWithTextAndButtonForMobile = styled.div`
  justify-content: center;
  text-align: center;

  p {
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  button {
    transition: transform 0.2s;
    max-width: 200px;
    margin-bottom: 50px;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export const BlockRecordForBorder = styled.div`
border-bottom: 1px solid rgb(198, 198, 198);
padding: 40px;
padding-top: 70px;
padding-bottom: 70px;
`;

export const BlockWithExampleGardensForMobile = styled.div``;
