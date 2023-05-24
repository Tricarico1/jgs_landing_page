/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
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
        'Magnesium Hydroxide'
      ],      
      items2: [
        'Polyamine', 
        'Aluminum Sulfate', 
        'Aluminum Chloride',
        'Sodium Aluminate',
        'Sulfuric Acid (Aid)'
      ],
      icon: CloudUploadIcon,
      tooltip: 'Chemicals directly or  indirectly used to begin allowing stuff in water that would not come together under normal circumstances.  Their use depends on how acidic or basic the water is, the types of stuff to be removed, temperature, etc. ',
    },
    {
      name: 'Flocculants',
      items: [
        'Dry and Emulsion Cationic Polymers', 
        'Dry and Emulsion Anionic Polymers', 
      ],      
      items2: [
        'Monomers', 
        'DADMAC', 
        'Dry and Emulsion Nonionic Polymers'
      ],      icon: LockClosedIcon,
      tooltip: 'Normally, once coagulants  begin bringing stuff in the water together, flocculants are added to make those particles both bigger and stronger to make their removal easier.  One exception to this is dewatering sludge.  Often times sludge is dewatered with flocculants only , though the use of a coagulant may result in less sludge particles returned to the treatment system and/or drier sludge with less water in it.',
    },
    {
      name: 'Bio-augmentation',
      items: [
        'Treatment System (Nitrifiers)', 
        'Methanol (Aid)', 
        'Aerobic (Sludge Reduction and Stabilization)',
        'Anaerobic Food Supplement (Sludge Reduction and Stabilization)', 

      ],      
      items2: [
        
        'Collection System (Degreaser - Control Grease Before Treatment Plant)', 
        'Enzymes',
        'Anaerobic Micronutrients'

      ],      icon: RefreshIcon,
      tooltip: 'This is used mostly to help biological processes to begin, be more complete or to help processes become more economical.   The microbes that make up the bio-augmentation aids are typically those same microbes that are normally occurring in nature, these microbes are just more concentrated. ',
    },
    {
      name: 'Final Effluent Disinfection and De-chloriation',
      items: [
        'Sodium Hypochlorite (Bleach)', 
        'Sodium Bisulfite', 
        'HTH (Granular - Calcium Hypochlorite)'
      ],      
      items2: [
        'Chlorine Tablets (Tablet - Calcium Hypochlorite)', 
        'De-Chlor Tablets (Tablet - Calcium Bisulfite)', 
        'Defoamer (Aid)'
      ],      icon: ShieldCheckIcon,
      tooltip: 'These chemicals are added to inactivate many of the pathogenic bacteria.  Once disinfection is completed, de-chlorination chemicals are added to remove enough of the excess chlorine to make the water less hazardous to the things living in the receiving waters.',

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
        'Potash - Potassium Hydroxide (Dry)'
      ],      
      items2: [
        'Potash - Potassium Hydroxide (Liquid)', 
        'Magnesium Sulfate', 
        'Sodium Hydroxide (Caustic)',
        'Calcium Hydroxide',
        'Calcium Oxide (Quicklime)',
        'Calcium Carbonate',
        'Sodium Bicarbonate',
        'Lime'
      ],      icon: CogIcon,
      tooltip: 'Many times chemicals added to water to treat or remove pollutants cause the pH to either decrease or increase to the point where it has a negative effect on the receiving waters.  To help fix this problem, chemicals are added to increase or decrease the pH as needed.  Another use for pH adjustments is to make conditions more consistent with the pH range that the treatment chemicals work best. ',
    },
    {
      name: 'General and Industrial Treatment',
      items: [
        'Sludge Conditioners', 
        'Activated Carbon', 
        'Odor Control Agents',
        'Surfactants',
        'Phosphates'
      ],      
      items2: [
        'Hydrogen Peroxide', 
        'Diatomaceous Earth', 
        'Calcium Chloride',
        'Solvents'
      ],      icon: ServerIcon,
      tooltip: 'These are somewhat general and are used to fix some very specific issues that may help some of the other treatment chemical groups.',
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
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                  features.map((feature) => (
                      <div key={feature.name} className="pt-6 group relative">
                          <div className="flow-root rounded-lg bg-gray-50 px-4 pb-8">
                              <div className="-mt-6">
                                  {/* Tooltip */}
                                  <div className="hidden group-hover:block absolute z-10 w-64 p-2 bg-gray-300 bg-opacity-90 text-gray-700 rounded-md shadow-lg">
                                    {feature.tooltip}
                                  </div>
                                  {/* End Tooltip */}
                                  <div>
                                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                      </span>
                                  </div>
                                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                                  <div className="mt-8 grid grid-cols-2 gap-4">
                                      <ul className="list-disc list-inside">
                                          {feature.items.map((item, index) => (
                                              <li key={index} className="text-base text-gray-500 text-left">{item}</li>
                                          ))}
                                      </ul>
                                      <ul className="list-disc list-inside">
                                          {feature.items2.map((items2, index) => (
                                              <li key={index} className="text-base text-gray-500 text-left">{items2}</li>
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
  