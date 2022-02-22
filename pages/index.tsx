import type { NextPage } from 'next'
import { Container, Heading, Box, Grid, GridItem, Center, Link } from '@chakra-ui/react';
import { SoundBox } from '../components';
import { sounds } from '../utils/sounds.data';
import { FiGithub } from 'react-icons/fi'; 

const Home: NextPage = () => {
  return (
    <Container maxW={'container.lg'} >
      <Center h={'100vh'}>
      <Box>
      
      <Grid templateColumns='repeat(6, 1fr)' gap={4} mb={'40px'} >
        
         {
           sounds.map((sound, key) => (
            <GridItem colSpan={{md: 1, base: 3}} key={key} w='100%' h='130' >
              <SoundBox {...sound}  /> 
            </GridItem>
           ))
         }
         
        
        
      </Grid>
      <Link textAlign={'center'} w={'100%'}  href='https://github.com/brkss/beautifulsounds' isExternal>
          <FiGithub size={25} style={{margin: 'auto', opacity: .8}} />  
      </Link>
      </Box>
      </Center>
    </Container>
  )
}

export default Home
