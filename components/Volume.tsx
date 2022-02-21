import { Slider, SliderMark, SliderTrack, SliderFilledTrack, Tooltip, SliderThumb } from '@chakra-ui/react';
import React from 'react';

interface Props {
    change: (val: number) => void;
}

export const Volume : React.FC<Props> = ({change}) => {

    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    
    const handleVolumeChange = (v: number) => {
        setSliderValue(v);
        change(v);
    }

    return(
    <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='blackAlpha'
      onChange={(v) => handleVolumeChange(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='black'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
    )
}