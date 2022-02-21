import { ISound } from "./Sound"
import { BsCloudRain, BsTsunami, BsWater } from 'react-icons/bs';
import { HiFire } from 'react-icons/hi';

export const sounds : ISound[] = [
    {
        Icon: BsCloudRain,
        name: "Rain",
        path: "/sounds/rain-03.mp3"
    },
    {
        Icon: HiFire,
        name: "Fire",
        path: "/sounds/campfire-1.mp3"
    },
    {
        Icon: BsTsunami,
        name: "Ocean",
        path: '/sounds/ocean-waves-1.mp3'
    },
    {
        Icon: BsWater,
        name: "River",
        path: '/sounds/stream-3.mp3'
    }, 
]