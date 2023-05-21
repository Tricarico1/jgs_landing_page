import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Treatment Chemicals', href: '/treatment-chemicals' },
  { name: 'Municipal Wastewater', href: '/municipal-wastewater' },
  { name: 'Industrial Wastewater', href: '#industrial-wastewater' },
  { name: 'Pump Station Maintenance', href: '#pump-station-maintenance' },
  { name: 'Blog', href: '#blog' },
  { name: 'Our Story', href: '#our-story' },
];

export default function Header() {
  return (
    <Popover as="header" className="relative">
      <div className="w-screen pt-6 pb-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 justify-center">
            <div className="hidden space-x-10 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  <span className="text-base font-medium text-black hover:text-gray-300">
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

