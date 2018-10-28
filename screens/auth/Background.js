import React from 'react';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

const Background = props => {
    const {
        children,
    } = props;

    return (
        <ImageBackground source={require('../../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                style={{ flex: 1, padding: 15, alignItems: 'center', backgroundColor: 'transparent' }}>
                {children}
            </LinearGradient>
        </ImageBackground>
    )
}

export default Background;