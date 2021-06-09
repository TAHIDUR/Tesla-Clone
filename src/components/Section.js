import React from 'react'
import styled, { keyframes } from 'styled-components'

function Section() {
    return (
        <Container>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
            <DownArrrow src="/images/down-arrow.svg" />     
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-color: blue;
    height: 100vh;
    width: 100%;
    background-image: url('/images/model-s.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: .85;
    margin: 8px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: .65;
`
const DownArrrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 20px;
`