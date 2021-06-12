import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section
                title="Model S"
                description= "Order Online for Touchless Delivery"
                bg_img="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description= "Order Online for Touchless Delivery"
                bg-img="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description= "Order Online for Touchless Delivery"
                bg-img="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description= "Order Online for Touchless Delivery"
                bg-img="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
        </div>
    )
}

export default Home
