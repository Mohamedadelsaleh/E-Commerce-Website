import { Search } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 60px;

`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

//Left Side in NaveBar ******************************

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items:center;
    margin-left:25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

//Center Side in NaveBar *****************************

const Center = styled.div`
    flex: 1;
    text-align: center;

`;

const Logo = styled.h1`
    font-weight: bold;
`;

//Right Side in NaveBar *******************************

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;

`;


const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{
                            color: 'grey',
                            fontSize:16
                        }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo> MGN Store </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={100} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar