import React from 'react'
import { Center, Box } from '@chakra-ui/react';
import { BsCloudRain } from 'react-icons/bs';
import Sound from 'react-sound';
import { Volume } from './Volume';

export const SoundBox : React.FC = () => {

    const [status, SetStatus] = React.useState('PAUSED');
    const [volume, SetVolume] = React.useState(0);

    const handleStatus = () => {
        if(status == 'PAUSED')
            SetStatus('PLAYING');
        else
            SetStatus('PAUSED');
    }

    const handleVolumeChange = (v: number) => {
        if(v <= 0)
            SetStatus('PAUSED'); 
        else
            SetStatus('PLAYING'); 
        SetVolume(v);
    }

    return(
        <Center borderRadius={'15px'} bg={status == 'PAUSED' ? '#f7f4f4' : '#d4f5ce'} height={'100%'}>
            <Box w={'100%'} p={'10px'}>
            <BsCloudRain size={30} style={{margin: 'auto', marginBottom: '10px'}} />
            <Sound playStatus={status as any} volume={volume} url={'/sounds/rain-03.mp3'} onLoading={() => console.log("Loading !")}
      onPlaying={() => console.log("playing sound !")} />
            <Volume change={(v) => handleVolumeChange(v)} />
            </Box>
        </Center>
    );
}

