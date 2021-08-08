import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'
import { MyImageQuery } from '../../graphql-types'
import styled, { CSSObject } from '@emotion/styled'

const StyledBgImage = styled(BgImage)({
  width: '100%',
  height: '100vh',
})

interface Props {
  css?: CSSObject
}

const Hero: React.FC<Props> = ({ children }) => {
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

  const pluginImage = getImage(imgData.file.childImageSharp.gatsbyImageData)
  const imageStack = [
    'linear-gradient(130deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,117,0,0) 100%)',
    pluginImage,
  ]

  return (
    <>
      {/* @ts-ignore: incorrect types */}
      <StyledBgImage image={imageStack}>{children}</StyledBgImage>
    </>
  )
}

export default Hero
