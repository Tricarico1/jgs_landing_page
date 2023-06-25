import { Popover } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/', size: 22 },
  { name: 'Treatment Chemicals', href: '/treatment-chemicals', size: 18 },
  { name: 'Municipal Wastewater', href: '/municipal-wastewater', size: 18 },
  { name: 'Industrial Wastewater', href: '/industrial-wastewater', size: 18 },
  { name: 'Pump Station Maintenance', href: '/pump-station-maintenance', size: 18 },
  { name: 'Blog', href: '/blog', size: 22 },
  { name: 'Our Story', href: '/our-story', size: 22 },
];

export default function Header() {
  const [dropdownState, setDropdownState] = useState(false);
  return (
    // Apply fixed, top-0 and z-50 classes here
    <Popover as="header" className="w-full">
      <div className="w-screen bg-gothicblue">
        <nav
          className="navbar relative max-w-7xl mx-auto flex items-center justify-between"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 justify-center">
            <div className="nav-items-container">
              <a key={'home'} href="/" className="nav-item">
                <span className="text-base font-medium hover:text-gray-300">
                  Home
                </span>
              </a>

              <button onClick={(e) => {
                setDropdownState(!dropdownState);
                e.stopPropagation();
              }} key={'solutions'} href="/" className="nav-drop-trigger hover:text-gray-300">
                <span>Solutions</span>
                {dropdownState ? <ChevronUpIcon /> : <ChevronDownIcon />}

                <div className={`nav-dropdown-container bg-gothicblue ${dropdownState ? 'active' : ''}`}>
                  <a className="nav-dropdown-item" href='/treatment-chemicals'>
                    Treatment Chemicals
                  </a><a className="nav-dropdown-item" href='/municipal-wastewater'>
                    Municipal Wastewater
                  </a><a className="nav-dropdown-item" href='/industrial-wastewater'>
                    Industrial Wastewater
                  </a><a className="nav-dropdown-item" href='/pump-station-maintenance'>
                    Pump Station Maintenance
                  </a>
                </div>
              </button>
            
            
              <a key={'home'} href="/blog" className="nav-item">
                <span className="text-base font-medium hover:text-gray-300">
                  Blog
                </span>
              </a>
              
              <a key={'home'} href="/our-story" className="nav-item">
                <span className="text-base font-medium hover:text-gray-300">
                  Our Story
                </span>
              </a>
              
              {/* {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='nav-item'
                >
                  <span className="text-base font-medium hover:text-gray-300" style={{fontSize: item.size}}>
                    {item.name}
                  </span>
                </Link>
              ))} */}
            </div>
          </div>
        </nav>
      </div>
    </Popover>
  );
}
