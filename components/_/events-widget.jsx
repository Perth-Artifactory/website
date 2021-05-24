import Link from 'next/link';

export default function EventsWidget() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-3 sm:p-6 text-maintext mb-2 sm:mb-10">
        <h3 className="text-center text-2xl sm:text-3xl mb-4 sm:mb-10 sm:mt-4">Events</h3>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Australia%2FPerth&amp;src=cTliczh1bDd1bWZubTRtMDJlcTUzNTExNG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showTitle=0&amp;showDate=1&amp;showPrint=0&amp;showCalendars=0"
          width="100%"
          height="600"
          frameBorder="0"></iframe>
      </div>
    </>
  );
}
