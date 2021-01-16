import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div
        id="menu-close"
        className="fixed text-secondary-1 p-3 bg-primary-1 top-2 right-2 z-10 border-2 border-primary-2 shadow-xl"
        onClick={closeNavigation}>
        <AiOutlineClose />
      </div>
      <div
        id="menu-open"
        className="fixed text-secondary-1 p-3 bg-primary-2 top-2 right-2 z-10 border-2 border-primary-1 shadow-xl"
        onClick={openNavigation}>
        <AiOutlineMenu />
      </div>
      {/* Container */}
      <div id="menu-navigation" className="hidden top-0 bg-primary-2 w-full h-screen">
        <span className="block text-secondary-1 mt-2 ml-4 text-3xl mb-8">Navigation</span>
        <ul className="block text-secondary-1 text-sm w-full">
          {process.env.menu.map((item) => (
            <li className="w-full block" key={item.link}>
              <Link href={item.link}>
                <a className="block px-4 py-2 w-full hover:bg-primary-1 hover:text-highlight-1">{item.name}</a>
              </Link>
            </li>
          ))}
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
        </ul>
      </div>
    </>
  );
}

const openNavigation = function () {
  let menuNavigation = document.getElementById('menu-navigation');
  let menuClose = document.getElementById('menu-close');
  let menuOpen = document.getElementById('menu-open');
  if (menuNavigation.classList.contains('hidden')) {
    menuNavigation.classList.remove('hidden');
    menuNavigation.classList.add('fixed');
    //
    menuOpen.classList.remove('fixed');
    menuOpen.classList.add('hiddent');
    //
    menuClose.classList.remove('hidden');
    menuClose.classList.add('fixed');
  }
};

const closeNavigation = function () {
  let menuNavigation = document.getElementById('menu-navigation');
  let menuClose = document.getElementById('menu-close');
  let menuOpen = document.getElementById('menu-open');
  if (menuNavigation.classList.contains('fixed')) {
    menuNavigation.classList.remove('fixed');
    menuNavigation.classList.add('hidden');
    //
    menuClose.classList.remove('fixed');
    menuClose.classList.add('hidden');
    //
    menuOpen.classList.remove('hidden');
    menuOpen.classList.add('fixed');
  }
};
