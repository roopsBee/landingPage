import React from 'react'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import Hero from '../components/Hero'

const Container = styled.main({
  display: 'flex',
  flexDirection: 'column',
})

const Home: React.FC<PageProps> = () => (
  <Container>
    <Hero />
  </Container>
)

export default Home
