import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    return (
        <Container>
            <a href="#">
                <img alt="logo" src="/images/logo.svg"/>
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model X</div>
                <div>Model Y</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">shop</a>
                <a href="#">Tesla Account</a>
                <MenuIconContainer>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div
    {
        padding: 0 20px;
        font-weight: 600;
        cursor: pointer;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a
    {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
`
const MenuIconContainer = styled.div`
    display: center;
    align-items: center;
    cursor: pointer;
`