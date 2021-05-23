import Link from 'next/link';

export default function EventsWidget() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-6 text-white mb-2 sm:mb-20">
        <h3 className="text-center text-2xl sm:text-3xl mb-4 sm:mb-10 sm:mt-4">Events</h3>
        <iframe
          src="http://space.artifactory.org.au/calendar/calendar.html"
          width="100%"
          height="600"
          frameBorder="0"></iframe>
      </div>
    </>
  );
}
