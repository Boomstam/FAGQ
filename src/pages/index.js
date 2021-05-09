import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
//import NavBar from "../components/navbar"

const IndexPage = () => (
  <Layout>
    <StaticImage
      src="../images/homeImage.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF", "JPG"]}
      alt="Four Aces Belgica"
      style={{ height: `100vh`, position: `absolute`, left: `0`, top: `0`, zIndex : `-1`, filter: `brightness(75%)` }}
    />
    <HomeTitle>FOUR ACES</HomeTitle>
    <HomeSubTitle>Guitar Quartet</HomeSubTitle>
  </Layout>
)
//<Seo title="Home" />
// <NavBar></NavBar>
/*
<StaticImage
      src="../images/homeImage.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF", "JPG"]}
      alt="Four Aces Belgica"
      style={{ height: `100vh`, position: `absolute`, left: `0`, top: `0`, zIndex : `-1`, filter: `brightness(75%)` }}
    />
    */

/*
import Socials from "../components/socials"
import Language from "../components/language"
*/

/*<p>
  <Link to="/page-2/">Go to page 2</Link> <br />
  <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
</p>*/

export default IndexPage

const HomeTitle = styled.div`
  width: 100%;
  font-weight: 1000;
  text-align : center;
  position: absolute;
  font-size: 100px;
  top: calc(40% - 100px);
`

const HomeSubTitle = styled.div`
  width: 100%;
  font-weight: 800;
  text-align : center;
  position: absolute;
  font-size: 50px;
  top: calc(45% - 50px);
`