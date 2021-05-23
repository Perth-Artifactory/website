import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div
        id="menu-close"
        className="fixed text-highlight-2 p-3 bg-primary-1 top-2 right-2 z-10 border-1 border-nav shadow-xl"
        onClick={closeNavigation}>
        <AiOutlineClose />
      </div>
      <div
        id="menu-open"
        className="fixed text-highlight-2 p-3 bg-primary-2 top-2 right-2 z-10 border-2 border-nav shadow-xl"
        onClick={openNavigation}>
        <AiOutlineMenu />
      </div>
      {/* Container */}
      <div
        id="menu-navigation"
        className="hidden top-0 bg-primary-2 w-full h-screen sm:w-1/2 sm:border-2 sm:border-white sm:right-0"
        style={{zIndex: 9}}>
        <span className="block text-highlight-2 mt-2 ml-4 text-3xl mb-8">Navigation</span>
        <ul className="block text-highlight-2 text-sm w-full">
          <li className="w-full block">
            <Link href="/">
              <a className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">Home</a>
            </Link>
          </li>
          <hr />
          {process.env.menu.map((item) => (
            <li className="w-full block" key={item.link}>
              <Link href={item.link}>
                <a className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">{item.name}</a>
              </Link>
            </li>
          ))}
          <hr />
          <li className="w-full block">
            <a
              href="https://wiki.artifactory.org.au/doku.php"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              Wiki
            </a>
          </li>
          <li className="w-full block">
            <a
              href="https://space.artifactory.org.au/"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              Webcams
            </a>
          </li>
          <li className="w-full block">
            <a
              href="https://space.artifactory.org.au/slack/"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              Slack
            </a>
          </li>
          <li className="w-full block">
            <a
              href="https://m.facebook.com/perthartifactory/"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              Facebook
            </a>
          </li>
          <li className="w-full block">
            <a
              href="https://www.instagram.com/theperthartifactory/"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              Instagram
            </a>
          </li>
          <li className="w-full block">
            <a
              href="https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA/"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              Youtube
            </a>
          </li>
          <li className="w-full block">
            <a
              href="https://www.meetup.com/Perth-Artifactory/"
              className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">
              MeetUp
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

const openNavigation = function () {
  let menuNavigation = document.getElementById('menu-navigation');
  let menuClose = document.getElementById('menu-close');
  let menuOpen = document.getElementById('menu-open');
  let body = document.getElementById('app');
  if (menuNavigation.classList.contains('hidden')) {
    menuNavigation.classList.remove('hidden');
    menuNavigation.classList.add('fixed');
    //
    menuOpen.classList.remove('fixed');
    menuOpen.classList.add('hidden');
    //
    menuClose.classList.remove('hidden');
    menuClose.classList.add('fixed');
    //
    body.classList.add('overflow-hidden');
  }
};

const closeNavigation = function () {
  let menuNavigation = document.getElementById('menu-navigation');
  let menuClose = document.getElementById('menu-close');
  let menuOpen = document.getElementById('menu-open');
  let body = document.getElementById('app');
  if (menuNavigation.classList.contains('fixed')) {
    menuNavigation.classList.remove('fixed');
    menuNavigation.classList.add('hidden');
    //
    menuClose.classList.remove('fixed');
    menuClose.classList.add('hidden');
    //
    menuOpen.classList.remove('hidden');
    menuOpen.classList.add('fixed');
    //
    body.classList.remove('overflow-hidden');
  }
};
