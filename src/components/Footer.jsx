import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <div>
      <Container>
        <Left>
          <Logo>Fuck Yeah.</Logo>
          <Desc>
            We stand above the rest. True to our natural born selves. We create
            our futures. We define our image.
          </Desc>
          <SocialContainer>
            <SocialIcon color="#385999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="#E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="#55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="#E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
      </Container>
    </div>
  );
};

export default Footer;
