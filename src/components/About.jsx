import React from 'react'
import { Highlight } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const About = () => {
    return (
        <div>
            <Heading lineHeight='tall'>
                <Highlight query='50 años de experiencia ' styles={{ px: '2', py: '1', bg: 'orange.100' }}>
                    Somos una empresa dedicada a la venta de productos informaticos con 50 años de experiencia en el rubro de tecnologia
                </Highlight>
            </Heading>
 
        </div>
    )
}

export default About