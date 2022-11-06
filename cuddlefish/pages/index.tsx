import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Navbar,
  NavLink,
  Grid
} from '@mantine/core';
const Home: NextPage = () => {
  return (
    <div className="App">
  
      <div className={styles.titleDiv}>
          <h1 className={styles.titleDivHeading}>Cuddlefish</h1>
          <h2 className={styles.Titleheading}>A micropayment solution to help companies offset their carbon and ecological footprint by giving in Celo Dollars to climate, conservation, and ecological causes in proportion to their site traffic. </h2>
          <Link href='/#About'><Button style={{backgroundColor:"#F99C77", marginTop:"2%"}}>Read More</Button></Link>
      </div>
      <section id="About" className={styles.about}>
          <div className={styles.container}>
              <Grid>
                  <Grid.Col lg={4} sm={12}>
                    <div className={styles.LogoLink}>
                        <Image  width={500} height={500} src="/logo.png"></Image>
                     </div>
                  </Grid.Col>
                  <Grid.Col lg={8} sm={12}>
                    <h3 className={styles.aboutParagraph}>A business will visit our platform to browse and select a climate fund that aligns with their charitable goals. Once selected, they estimate the cost of their campaign and deposit cUSD. Our platform generates a JavaScript snippet, similar to a Google analytics link, that they can embed in their site. When a user visits the business's site, a small transaction is recorded on the L2 and the user receives a notification that a donation was given in their name. At the end of the campaign, the climate fund owner can withdraw the donations.</h3>
                  </Grid.Col>
              </Grid>
          </div>
      </section>
      <section>
          <div className={styles.container}>
              <Grid>
                <Grid.Col lg={4} sm={12}>
                <div className={styles.textSection}>
                    <Image src="/marketing.png" height={400} width={400}></Image>
                    <h4 className={styles.paragraphs}>Quick, easy setup for marketing teams.</h4>
                </div>
                </Grid.Col>
                <Grid.Col lg={4} sm={12}>
                <div className={styles.textSection}>
                    <Image src="/notification.png" height={400} width={400}></Image>
                    <h4 className={styles.paragraphs}>End user donation notifications help companies build a sustainable image the moment a new visitor arrives.</h4>
                </div>
                </Grid.Col>
                <Grid.Col lg={4} sm={12}>
                <div className={styles.textSection}>
                    <Image src="/watering.png" height={400} width={400}></Image>
                    <h4 className={styles.paragraphs}>Donating per page view allows teams to easily calculate and offset donation expenses based on their existing Pay-Per-Click and Cost-Per-Visit calculations.</h4>
                </div>
                </Grid.Col>
              </Grid>
          </div>
      </section>
      <Grid>
        <Grid.Col lg={5}></Grid.Col>
        <Grid.Col lg={2}>
            <div className={styles.FollowButton}><Link href='/#'><Button style={{backgroundColor:"#E88ACF", marginTop:"5%"}} >Follow Us</Button></Link></div>
        </Grid.Col>
        <Grid.Col lg={5}></Grid.Col>
      </Grid>
  </div>
  )
}

export default Home
