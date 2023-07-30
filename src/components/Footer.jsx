import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { ContactMail } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
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
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-item: center;
`;

const Payment = styled.img`
  width: 50%;
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
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon style={{ marginRight: "10px" }}></RoomIcon>
            420 Mystic Road, Montana 98777
          </ContactItem>
          <ContactItem>
            <CallIcon style={{ marginRight: "10px" }}></CallIcon>
            +1 234 567 8910
          </ContactItem>
          <ContactItem>
            <EmailIcon style={{ marginRight: "10px" }}></EmailIcon>
            contact@whatever.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
