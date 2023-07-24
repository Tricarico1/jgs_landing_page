/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react';
import Header from '../components/header';

const navigation = [
  { name: 'Treatment Chemicals', href: '/treatment-chemicals' },
  { name: 'Municipal Wastewater', href: '/municipal-wastewater' },
  { name: 'Industrial Wastewater', href: '#industrial-wastewater' },
  { name: 'Pump Station Maintenance', href: '#pump-station-maintenance' },
  { name: 'Blog', href: '#blog' },
  { name: 'Our Story', href: '#our-story' },
];

const metrics = [
  { id: 1, stat: '+', emphasis: 'Many times', rest: 'utility operators accept the idea that nothing can be done to fix either grease or odor problems that are often times found at pump stations.' },
  { id: 2, stat: '+', emphasis: 'Odor,', rest: 'can be fixed as well if it becomes a problem.  If physical pump station changes can not fix this problem, either deodorants or an oxygen source will often times help.  Deodorants are just that, deodorants, while the oxygen source is often times hydrogen peroxide.  As flow volumes through the pump station increase, odor issues from low flow conditions may improve enough to make deodorants or additional oxygen sources unnecessary.' },
  { id: 3, stat: '+', emphasis: 'Grease problems', rest: 'can cause pumps to become clogged or reduce the volume of the discharge line to the treatment plant.  This problem can be fixed by either de-greasing chemicals or with biological treatment, depending on the wet well detention time, severity and how quickly the problem needs to be fixed.  The force mains leaving the pump station can transition to gravity flow through larger pipes.  These larger pipes allow water speed to slow allowing grease to build up in these sections.' },
];

export default function Example() {
  return (
    <div className="bg-gothicblue">
      <Header />
      
      <img
        className="h-full w-full object-cover opacity-25 absolute inset-0"
        src="/img/pipes.png"
        alt="People working on laptops"
      />
      
      <div className="bg-rosebrown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-xl font-semibold text-indigo-500 tracking-wide uppercase">Odor Control</h2>
            <p className="mt-3 text-5xl font-extrabold text-black">
              Pump Station Maintenance and Odor Control
            </p>

            <div className="mt-12 grid grid-cols-3 gap-y-12 gap-x-20">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-black">{item.stat}</span>
                  <span className="mt-1 block text-xl text-black">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
