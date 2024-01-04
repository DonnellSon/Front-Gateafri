import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const CircleLoader = () => {
    return (
        <ColorRing
            visible={true}
            height="25"
            width="25"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#ffffff', '#ffffffcf', '#ffffffab', '#ffffff78', '#ffffff4d']}
        />
    )
}

export default CircleLoader
