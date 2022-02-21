import type { NextPage } from 'next'
import { Container, Heading, Box, Grid, GridItem } from '@chakra-ui/react';
import { SoundBox } from '../components';

const Home: NextPage = () => {
  return (
    <Container maxW={'container.lg'} pt={'30px'}>
      <Heading>Sounds</Heading>
      <Grid templateColumns='repeat(5, 1fr)' gap={4} mt={10}>
        <GridItem w='100%' h='10' bg='blue.500'>
         <SoundBox /> 
        </GridItem>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </Container>
  )
}

export default Home
