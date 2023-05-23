import { Popover } from '@headlessui/react';
import Header from '../components/header';

export default function Example() {
  return (
    <div className="bg-gothicblue">
      <Header />
      <div className="relative bg-rosebrown">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/img/JG.png"
              alt=""
            />
            <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
              <div className="lg:text-center">
                <h2 className="text-5xl font-semibold text-white uppercase">Industrial Wastewater</h2>
                <p className="mt-2 text-3xl font-medium text-white">Services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="text-indigo-600 mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                We cater to the following industries: 
              </h3>
              <ul className="list-disc mt-4 text-2xl text-gray-500">
                <li>Beverage and Food</li>
                <li>Industrial and Municipal Wastewater</li>
                <li>Meat and Poultry</li>
              </ul>
              <p className="mt-8 text-lg text-gray-500">
                Innovations in Technology: We stay abreast of the latest advancements in the industry, ensuring our methods evolve with new and emerging technologies.
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <h3>Ozone Treatment</h3>
                <p>
                  First conceived in the mid-1800s, ozone treatment is gaining renewed interest for its robust pollutant-removal capabilities. This technology excels in disinfecting water, eliminating stubborn pollutants, and neutralizing potential carcinogens.
                </p>
                <h3>Membrane Filtration</h3>
                <p>
                  This process employs physical filters to remove particles based on size. A pressure differential propels the liquid through the filter, screening out contaminants. The scale of filtration ranges from particle filtration with 10-micrometer pores to reverse osmosis with pores less than 1 nanometer.
                </p>
                <h3>Nanotechnology</h3>
                <p>
                  Our nanomembrane filtration is a fine example of nanotechnology in action. This filtration process, utilizing pores around one nanometer in size, effectively removes total dissolved solids and organic materials from water.
                </p>
                <h3>Natural Treatment Systems</h3>
                <p>
                  Echoing nature’s own methods, our natural treatment systems create ideal, controlled conditions for wastewater treatment. We use a variety of methods, including wetlands applications, land application methods, peat moss bio-filtration, and microalgae aquaculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
