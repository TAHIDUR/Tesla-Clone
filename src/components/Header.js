import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)

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
                <MenuIconContainer onClick={()=>setBurgerStatus(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer>
                    <Close onClick={()=>setBurgerStatus(false)}/>
                </CloseContainer>
                <li><a>Model S</a></li>
                <li><a>MOdel Y</a></li>
                <li><a>Existing Inventory</a></li>
                <li><a>Used Inventory</a></li>
                <li><a>Trade-in</a></li>
                <li><a>Cybertruck</a></li>
                <li><a>RoadSter</a></li>
                <li><a>Semi</a></li>
                <li><a>Charging</a></li>
            </BurgerNav>
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
    z-index: 10;
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
const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Close = styled(CloseIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    li
    {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a
        {
            font-weight: 600;
        }
    }
`