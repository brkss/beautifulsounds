import React from 'react'
import { Center, Box } from '@chakra-ui/react';
import { BsCloudRain } from 'react-icons/bs';
import Sound from 'react-sound';
import { Volume } from './Volume';

export const SoundBox : React.FC = () => {

    const [status, SetStatus] = React.useState('PAUSED');

    const handleStatus = () => {
        if(status == 'PAUSED')
            SetStatus('PLAYING');
        else
            SetStatus('PAUSED');
    }

    return(
        <Center onClick={() => handleStatus()} borderRadius={'15px'} bg={status == 'PAUSED' ? '#f7f4f4' : '#d4f5ce'} height={'100%'}>
            <Box w={'100%'} p={'10px'}>
            <BsCloudRain size={30} style={{margin: 'auto', marginBottom: '10px'}} />
            <Sound playStatus={status as any} url={'/sounds/rain-03.mp3'} onLoading={() => console.log("Loading !")}
      onPlaying={() => console.log("playing sound !")} />
            <Volume />
            </Box>
        </Center>
    );
}

