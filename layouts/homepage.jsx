import ButtonBlock1 from '../components/_/button-block-1';
import Sponsors from '../components/_/sponsors';
import GoogleCalendar from '../components/_/calendar-google';
import Events from '../components/_/events2';
import Gallery from '../components/_/gallery';
import Hero from '../components/_/hero';
import Location from '../components/_/address';
import Prices from '../components/_/prices';
import Stats from '../components/_/stats';
import TextBlock1 from '../components/_/text-block-1';
import TextBlock2 from '../components/_/text-block-2';
import ToolsAndServices from '../components/_/tools-and-services';
import front_meta from '../components/_/front_meta';
import { Helmet } from 'react-helmet';

export default function HomepageLayout({}) {
  return (
    <>
      <Hero />
      <TextBlock1 />
      <Stats />
      <GoogleCalendar />
      <ToolsAndServices />
      <Prices />
      <ButtonBlock1 />
      <TextBlock2 />
      <Location />
      <Gallery />
      <Sponsors />
      <front_meta />
      <div>elephant test</div>
    </>

  );
}
