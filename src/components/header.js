import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link';

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
  return (
    // Apply fixed, top-0 and z-50 classes here
    <Popover as="header" className="w-full">
      <div className="w-screen bg-gothicblue">
        <nav
          className="navbar relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 justify-center">
            <div className="nav-items-container">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='nav-item'
                >
                  <span className="text-base font-medium hover:text-gray-300" style={{fontSize: item.size}}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </Popover>
  );
}
