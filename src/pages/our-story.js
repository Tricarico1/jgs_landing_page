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
  { id: 1, stat: '', emphasis: '', rest: 'Our journey began in an era when only customers making large-scale purchases received adequate service, including chemical delivery. Smaller orders were often overlooked by suppliers who deemed the profit margins insufficient to warrant their attention. During that time, we operated a modest facility, seemingly deemed inconsequential by larger suppliers. Nonetheless, we faced numerous challenges, including the scarcity of technical guidance to optimize chemical usage within our processes. Fortunately, we encountered a dedicated chemical supplier who became our invaluable mentor, guiding us towards effective solutions. As we overcame these obstacles, we recognized the need to extend our assistance to others encountering similar struggles. This marked the initial step towards broadening our impact, offering technical support and delivering the necessary products to enhance operational efficiency across diverse conditions, thereby alleviating the stress faced by operators.' },
  { id: 2, stat: '', emphasis: 'In the Berks and Lehigh County areas,', rest: 'we have earned a reputation as a prominent local leader by providing top-quality chemicals to previously underserved utilities and industries, all while maintaining a cost-effective approach. However, it is important to note that the cornerstone of our success lies in the trust and recommendations of our satisfied clients, as a substantial portion of our business originates from referrals.' },
];

export default function Example() {
  return (
    <div className="bg-gothicblue">
      <Header />
      
      <img
            className="h-full w-full object-cover opacity-25 absolute inset-0"
            src="/img/pump.png"
            alt="People working on laptops"
          />
      <div className="bg-rosebrown">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <p className="mt-3 text-5xl font-extrabold text-black">
            Our Story
            </p>

            <div className="mt-12 grid grid-cols-2 gap-y-12 gap-x-20">

              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-black">{item.stat}</span>
                  <span className="mt-1 block text-xl text-black">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                  </span>
                  
                </p>
              ))}
            <img className="locations-img" src="/img/locations.png"/>
            <p className="mt-3 text-4xl font-extrabold text-black">
                { '"Our enduring aspiration is to continuing assist others in the same manner in which we were once aided."' }
            </p>


            </div>
            </div>
            </div>
      </div>
    </div>
  );
}
