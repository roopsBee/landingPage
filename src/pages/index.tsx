import React from 'react'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

const Container = styled.main({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

const Title = styled(motion.h1)({
  color: 'white',
  textAlign: 'center',
  margin: 35,
  padding: '10px',
  fontSize: '25px',
  border: '1px solid white',
  borderRadius: '10px',
  backgroundColor: '#ff000033',
  zIndex: 100,
})

const Home: React.FC<PageProps> = () => (
  <Container>
    <Hero />
    <Title
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      Ken Masters
      <br /> Personal Trainer
    </Title>
  </Container>
)

export default Home
