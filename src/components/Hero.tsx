import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MyImageQuery } from '../../graphql-types'
import { CSSObject } from '@emotion/styled'

interface Props {
  css?: CSSObject
}

const Hero: React.FC<Props> = ({ children, ...props }) => {
  const imgData: MyImageQuery = useStaticQuery(graphql`
    query MyImage {
      file(relativePath: { eq: "dumbell.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            quality: 60
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `)

  const pluginImage = imgData.file.childImageSharp.gatsbyImageData

  return (
    <>
      <GatsbyImage
        style={{ position: 'absolute' }}
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          '&::after': {
            content: '""',
            background:
              'linear-gradient(130deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.90) 50%, rgba(0,0,0,0) 100%)',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          },
        }}
        {...props}
        alt="gym"
        image={pluginImage}
      />
    </>
  )
}

export default Hero
