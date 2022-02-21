import type { NextPage } from 'next'
import { Container, Heading, Box, Grid, GridItem } from '@chakra-ui/react';
import { SoundBox } from '../components';
import { sounds } from '../utils/sounds.data';

const Home: NextPage = () => {
  return (
    <Container maxW={'container.lg'} pt={'30px'}>
      <Heading>Sounds</Heading>
      <Grid templateColumns='repeat(5, 1fr)' gap={4} mt={10}>
        
         {
           sounds.map((sound, key) => (
            <GridItem key={key} w='100%' h='130' >
              <SoundBox {...sound}  /> 
            </GridItem>
           ))
         }
         
        
        
      </Grid>
    </Container>
  )
}

export default Home
