import { Slider, SliderMark, SliderTrack, SliderFilledTrack, Tooltip, SliderThumb } from '@chakra-ui/react';
import React from 'react';


export const Volume : React.FC = () => {

    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return(

    <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='blackAlpha'
      onChange={(v) => setSliderValue(v)}
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