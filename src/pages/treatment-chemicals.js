/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
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
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-rosebrown py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Treatment Chemicals
            </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Hover for description of treatment chemicals and their applications.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                        <div className="flow-root rounded-lg bg-gray-50 px-4 pb-8">
                            <div className="-mt-6">
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
    )
  }
  