import { ISound } from "./Sound"
import { BsCloudRain, BsTsunami, BsWater, BsFillPeopleFill } from 'react-icons/bs';
import { HiFire } from 'react-icons/hi';
import { GiKidSlide } from 'react-icons/gi'

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
    {
        Icon: BsFillPeopleFill,
        name: "People",
        path: '/sounds/food-court-1.mp3'
    },
    {
        Icon: GiKidSlide,
        name: "Kids Playing",
        path: '/sounds/kids-playing-1.mp3'
    }, 
]