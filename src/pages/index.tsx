import React from 'react'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

import Hero from '../components/Hero'
import { motion, Variants } from 'framer-motion'
import { mq, breakpoints } from '../theme/theme'

const Container = styled.main({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  maxWidth: breakpoints.lg,
  margin: 'auto',
})

const baseHeaderStyle: CSSObject = {
  display: 'flex',
  color: 'white',
  textAlign: 'center',
  zIndex: 100,
  textShadow: '0px 0px 10px red, 0px 0px 4px yellow',
  flex: '0 0 5%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1%',
}

const Title = styled(motion.h1)(
  mq({
    ...baseHeaderStyle,
    fontSize: ['28px', '33px', '38px'],
    letterSpacing: '3px',
    textTransform: 'uppercase',
  }),
)

const Results = styled(motion.div)(
  mq({
    ...baseHeaderStyle,
    fontSize: ['28px', '33px', '38px'],
  }),
)

const Guaranteed = styled(motion.div)(
  mq({
    ...baseHeaderStyle,
    fontSize: ['31px', '36px', '41px'],
  }),
)

const Description = styled(motion.p)(
  mq({
    ...baseHeaderStyle,
    flexDirection: 'column',
    marginTop: '1%',
    fontSize: ['18px', '20px', '22px'],
    lineHeight: ['25px', '29px', '33px'],
    li: {
      listStyle: 'none',
    },
    textShadow: 'none',
  }),
)

const BookNowButton = styled(motion.button)({
  minWidth: '40%',
  alignSelf: 'center',
  textTransform: 'uppercase',
  color: 'white',
  backgroundColor: '#99000044',
  border: '1px solid white',
  padding: '10px',
  borderRadius: '5px',
  margin: '5%',
  fontSize: '16px',
  transition:
    'border-color 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out',
  '&:hover': {
    boxShadow: 'rgb(255, 255, 0) 0px 0px 2px 1px',
    borderColor: 'white',
    backgroundColor: '#99000099',
  },
})

const Home: React.FC<PageProps> = () => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  const subHeaderVariant: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  const buttonVariant: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <>
      <Hero />
      <Container>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={variants}
          css={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Title variants={variants}>
            Ken Masters
            <br />
            Personal Trainer
          </Title>
          <Results variants={subHeaderVariant}>RESULTS.</Results>
          <Guaranteed variants={subHeaderVariant}>GUARANTEED.</Guaranteed>
          <Description variants={subHeaderVariant}>
            FREE FIRST SESSION
            <ul>
              <li>Includes:</li>
              <li>Free meal plan</li>
              <li>Free workout schedule</li>
              <li>50% signup discount. Valid for 3 months</li>
            </ul>
          </Description>
          <BookNowButton variants={buttonVariant}>
            Book free session now
          </BookNowButton>
        </motion.section>
      </Container>
    </>
  )
}

export default Home
