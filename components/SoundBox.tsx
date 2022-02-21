import React from 'react'
//import { NextPage } from 'next';
import { Center } from '@chakra-ui/react';
import { BsCloudRain } from 'react-icons/bs';
import Sound from 'react-sound';

export const SoundBox : React.FC = () => {

    const [status, SetStatus] = React.useState('PAUSED');

    return(
        <Center onClick={() => {SetStatus('PLAYING')}} height={'100%'}>
            <BsCloudRain />
            <Sound playStatus={status as any} url={'/rain-03.mp3'} onLoading={() => console.log("Loading !")}
      onPlaying={() => console.log("playing sound !")} />
        </Center>
    );
}

