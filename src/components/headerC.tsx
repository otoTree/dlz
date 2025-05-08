'use client';

import Link from 'next/link';
import Image from 'next/image';

const SmoothScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

const Header = () => {
  const mobileMenuOpen = false;
  const scrolled = false;

  return (
    <header className={`sticky top-0 z-50 w-full bg-white border-b transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <link rel="icon" href="/images/ico.jpg" type="image/jpeg" />
      <div className="container-wrapper flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="UNIGRACE"
              width={207}
              height={52}
              className="logo"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex">
          <ul className="main-nav">
            <li>
              <Link href="/" className="text-sm hover:text-[#4baaa4] transition-colors">
                首页
              </Link>
            </li>
            <li>
              <SmoothScrollLink href="#capabilities" className="text-sm hover:text-[#4baaa4] transition-colors">
                公司目标
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink href="#showroom" className="text-sm hover:text-[#4baaa4] transition-colors">
                展厅
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink href="#ContactUs" className="text-sm hover:text-[#4baaa4] transition-colors">
                联系我们
              </SmoothScrollLink>
            </li>
            <li>
              <Link href="/" className="text-sm hover:text-[#4baaa4] transition-colors">
                ENGLISH
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <span className="sr-only">打开主菜单</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4baaa4] hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <SmoothScrollLink
              href="#capabilities"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4baaa4] hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Capabilities
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#showroom"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4baaa4] hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Showroom
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#ContactUs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4baaa4] hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </SmoothScrollLink>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4baaa4] hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              中文
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
