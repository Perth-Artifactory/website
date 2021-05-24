import ButtonBlock1 from '../components/_/button-block-1';
import Donations from '../components/_/sponsors';
import EventsWidget from '../components/_/events-widget';
import Events from '../components/_/events2';
import Gallery from '../components/_/gallery';
import Hero from '../components/_/hero';
import Location from '../components/_/address';
import Prices from '../components/_/prices';
import Stats from '../components/_/stats';
import TextBlock1 from '../components/_/text-block-1';
import TextBlock2 from '../components/_/text-block-2';
import ToolsAndServices from '../components/_/tools-and-services';

export default function HomepageLayout({}) {
  return (
    <>
      {/* MAIN - HERO */}
      <Hero />
      {/* MAIN - TEXT */}
      <TextBlock1 />
      {/* MAIN - STATS */}
      <Stats />
      {/* MAIN - EVENTS LIST */}
      {/* <EventsWidget /> */}
      <Events />
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
      {/* MAIN - LOCATION */}
      <Location />
      {/* MAIN - DONATIONS */}
      <Donations />
    </>
  );
}
