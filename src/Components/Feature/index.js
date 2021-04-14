import React from 'react'
import {FeatureContainer, FeatureButton} from "./FeatureElements"

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Prizza of the day</h1>
            <p>Pizza with meat</p>
            <FeatureButton>Order now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
