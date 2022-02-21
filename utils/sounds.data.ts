import { ISound } from "./Sound"
import { BsCloudRain } from 'react-icons/bs';
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
    }
]