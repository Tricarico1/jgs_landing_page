/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    EyeIcon,
    MenuAlt1Icon,
    MenuAlt2Icon,
    MenuAlt3Icon,
    MenuAlt4Icon
  } from '@heroicons/react/outline'

  import Header from '../components/header';
  
  const features = [
    {
      name: 'Coagulants',
      items: [
        'PAC (poly-aluminum chloride)', 
        'Ferric chloride', 
        'Ferric Sulfate',
        'Sodium Hydroxide',
        'Magnesium Hydroxide',
        'Polyamine', 
        'Aluminum Sulfate', 
        'Aluminum Chloride',
        'Sodium Aluminate',
        'Sulfuric Acid (Aid)'
      ],      

      icon: MenuAlt2Icon,
      tooltip: 'Chemicals directly or  indirectly used to begin allowing stuff in water that would not come together under normal circumstances.  Their use depends on how acidic or basic the water is, the types of stuff to be removed, temperature, etc. ',
    },
    {
      name: 'Bio-augmentation',
      items: [
        'Treatment System (Nitrifiers)', 
        'Methanol (Aid)', 
        'Aerobic (Sludge Reduction and Stabilization)',
        'Anaerobic Food Supplement (Sludge Reduction and Stabilization)', 
        'Collection System (Degreaser - Control Grease Before Treatment Plant)', 
        'Enzymes',
        'Anaerobic Micronutrients'

      ],      
     icon: MenuAlt4Icon,
      tooltip: 'This is used mostly to help biological processes to begin, be more complete or to help processes become more economical.   The microbes that make up the bio-augmentation aids are typically those same microbes that are normally occurring in nature, these microbes are just more concentrated. ',
    },
    {
      name: 'Flocculants',
      items: [
        'Dry and Emulsion Cationic Polymers', 
        'Dry and Emulsion Anionic Polymers',         
        'Monomers', 
        'DADMAC', 
        'Dry and Emulsion Nonionic Polymers'
      ],      
     icon: MenuAlt3Icon,
      tooltip: 'Normally, once coagulants  begin bringing stuff in the water together, flocculants are added to make those particles both bigger and stronger to make their removal easier.  One exception to this is dewatering sludge.  Often times sludge is dewatered with flocculants only , though the use of a coagulant may result in less sludge particles returned to the treatment system and/or drier sludge with less water in it.',
    },

    {
      name: 'pH Adjustment',
      items: [
        'Soda Ash', 
        'Phosphoric Acid', 
        'Hydrochloric Acid',
        'Acetic Acid',
        'Citric Acid',
        'Nitric Acid',
        'Potash - Potassium Hydroxide (Dry)',
        'Potash - Potassium Hydroxide (Liquid)', 
        'Magnesium Sulfate', 
        'Sodium Hydroxide (Caustic)',
        'Calcium Hydroxide',
        'Calcium Oxide (Quicklime)',
        'Calcium Carbonate',
        'Sodium Bicarbonate',
        'Lime'
      ],      
       icon: MenuAlt2Icon,
      tooltip: 'Many times chemicals added to water to treat or remove pollutants cause the pH to either decrease or increase to the point where it has a negative effect on the receiving waters.  To help fix this problem, chemicals are added to increase or decrease the pH as needed.',
    },
    {
      name: 'General and Industrial Treatment',
      items: [
        'Sludge Conditioners', 
        'Activated Carbon', 
        'Odor Control Agents',
        'Surfactants',
        'Phosphates',
        'Hydrogen Peroxide', 
        'Diatomaceous Earth', 
        'Calcium Chloride',
        'Solvents'
      ],      
     icon: MenuAlt4Icon,
      tooltip: 'These are somewhat general and are used to fix some very specific issues that may help some of the other treatment chemical groups.',
    },
    {
      name: 'Final Effluent Disinfection and De-chloriation',
      items: [
        'Sodium Hypochlorite (Bleach)', 
        'Sodium Bisulfite', 
        'HTH (Granular - Calcium Hypochlorite)',
        'Chlorine Tablets (Tablet - Calcium Hypochlorite)', 
        'De-Chlor Tablets (Tablet - Calcium Bisulfite)', 
        'Defoamer (Aid)'
      ],      
     icon: MenuAlt3Icon,
      tooltip: 'These chemicals are added to inactivate many of the pathogenic bacteria.  Once disinfection is completed, de-chlorination chemicals are added to remove enough of the excess chlorine to make the water less hazardous to the things living in the receiving waters.',

    },
  ]
  
  
  export default function Example() {
    return (
      <>
      <div className="bg-gothicblue">
        <Header/>
        <div className="relative bg-rosebrown sm:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-5xl  font-extrabold text-gray-900">Municipal Wastewater Treatment</h2>
            <h2 className="text-2xl sm:py-6 font-extrabold text-blue-900">Hover for the description</h2>

            {/* your other elements */}
            <div className="mt-12">
            <div className="mt-12 flex gap-5 flex-wrap justify-center">
              {
                  features.map((feature) => (
                      <div key={feature.name} className="pt-6 group relative">
                          <div className="flow-root rounded-lg bg-gray-50 px-4 pb-8">
                              <div className="-mt-6">
                                  {/* Tooltip */}
                                  <div className="hidden group-hover:block fixed z-10 w-64 p-2 bg-gray-300 bg-opacity-90 text-gray-700 rounded-md shadow-lg top-15 right-0">
                                      {feature.tooltip}
                                  </div>
                                  {/* End Tooltip */}
                                  <div>
                                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                      </span>
                                  </div>
                                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                                  <div className="mt-8">
                                      <ul className="list-disc list-inside">
                                          {feature.items.map((item, index) => (
                                              <li key={index} className="text-base text-gray-500 text-left">{item}</li>
                                          ))}
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
              }
  
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    )
  }
  