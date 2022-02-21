import React from 'react'
import { Center, Box, Text } from '@chakra-ui/react';
import Sound from 'react-sound';
import { Volume } from './Volume';
import { ISound } from '../utils/Sound';

export const SoundBox : React.FC<ISound> = ({name, path, Icon}) => {

    const [status, SetStatus] = React.useState('PAUSED');
    const [volume, SetVolume] = React.useState(0);

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
            <Icon size={30} style={{margin: 'auto', marginBottom: '10px'}} />
            <Sound 
                playStatus={status as any} 
                volume={volume} 
                loop={true} 
                url={path} 
                onLoading={() => console.log("Loading !")}
                onPlaying={() => console.log("playing sound !")} 
            />
            <Text textAlign={'center'} fontWeight={'blod'} fontSize={'14px'}>{name}</Text>
            <Volume change={(v) => handleVolumeChange(v)} />
            </Box>
        </Center>
    );
}

