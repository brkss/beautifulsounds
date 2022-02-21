import React from 'react'
//import { NextPage } from 'next';
import { Center } from '@chakra-ui/react';
import { BsCloudRain } from 'react-icons/bs';
import Sound from 'react-sound';
//import RainSound from "../public/sound/rain-03.mp3"

export const SoundBox : React.FC = () => {

    const [status, SetStatus] = React.useState('PAUSED');

    const handleStatus = () => {
        if(status == 'PAUSED')
            SetStatus('PLAYING');
        else
            SetStatus('PAUSED');
    }

    return(
        <Center onClick={() => handleStatus()} height={'100%'}>
            <BsCloudRain />
            <Sound playStatus={status as any} url={'/sounds/rain-03.mp3'} onLoading={() => console.log("Loading !")}
      onPlaying={() => console.log("playing sound !")} />
        </Center>
    );
}

