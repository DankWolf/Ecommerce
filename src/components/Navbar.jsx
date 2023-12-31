import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link, Navigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  @media only screen and (max-width: 380px) {
    ${mobile({ height: "50px", marginBottom: "20px" })}
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Language = styled.span`
  font-size: 13;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const navigate = (event) => {
  event.preventDefault();
  return <Navigate to={"/cart"} />;
};

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          {" "}
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Logo>Novel.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to={"/Register"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to={"/Login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to={"/cart"}>
                <ShoppingCartOutlinedIcon color="action" />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
