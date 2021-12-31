import React from 'react'
import { Content, Box } from './loadingElements'

import roll from '../../images/roll.svg'

const Loading = () => {
    return (
        <>
            <Content>
                <Box src={roll}/>
            </Content>
        </>
    )
}

export default Loading
