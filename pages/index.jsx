import Alert from '../components/_/alert';
import ButtonBlock1 from '../components/_/button-block-1';
import ButtonBlock2 from '../components/_/button-block-2';
import Container from '../components/_/container';
import Donations from '../components/_/sponsors';
import EventsWidget from '../components/_/events-widget';
import Footer from '../components/_/footer';
import Gallery from '../components/_/gallery';
import Head from 'next/head';
import Header from '../components/_/header';
import Hero from '../components/_/hero';
import Meta from '../components/_/meta';
import Navigation from '../components/_/navigation';
import Stats from '../components/_/stats';
import TextBlock1 from '../components/_/text-block-1';
import TextBlock2 from '../components/_/text-block-2';
import ToolsAndServices from '../components/_/tools-and-services';
import Prices from '../components/_/prices';
import Location from '../components/_/address';

import ContentImage from '../components/_/content-image';
import ContentMarkdown from '../components/_/content-markdown';

import Link from 'next/link';

export default function Index({}) {
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>Artifactory</title>
        <Meta />
      </Head>
      <div className="bg-primary-2">
        {/* ALERT */}
        <Alert />

        {/* Navigation Component */}
        <Navigation />

        {/* HEADER */}
        <Header>
          {/* HEADER - LOGO */}
          {/* HEADER - CONTACT */}
        </Header>
        {/* MAIN */}
        <Container>
          {/* DEBUG */}
          {/* <ContentImage /> */}
          {/* <ContentMarkdown /> */}

          {/* MAIN - HERO */}
          <Hero />
          {/* MAIN - TEXT */}
          <TextBlock1 />
          {/* MAIN - STATS */}
          <Stats />
          {/* MAIN - EVENTS LIST */}
          <EventsWidget />
          {/* MAIN - BUTTONS */}
          <ButtonBlock1 />
          {/* MAIN - SERVICES */}
          <ToolsAndServices />
          {/* MAIN - GALLERY */}
          <Gallery />
          {/* MAIN - PRICES */}
          <Prices />
          {/* MAIN - TEXT */}
          <TextBlock2 />
          {/* MAIN - LOCAIONT */}
          <Location />
          {/* MAIN - DONATIONS */}
          <Donations />
          {/* FOOTER */}
        </Container>
        <Footer>
          {/* FOOTER - MORE INFO */}
          {/* FOOTER - SITEMAP */}
        </Footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
