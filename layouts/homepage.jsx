import ButtonBlock1 from '../components/_/button-block-1';
import Sponsors from '../components/_/sponsors';
import GoogleCalendar from '../components/_/calendar-google';
import Events from '../components/_/events2';
import Calendar from '../components/_/calendar';
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
      <Hero />
      <TextBlock1 />
      <Stats />
      //<Calendar />
      <GoogleCalendar />
      //<Events />
      <ToolsAndServices />
      <Prices />
      <ButtonBlock1 />
      <TextBlock2 />
      <Location />
      <Gallery />
      <Sponsors />
    </>
  );
}
