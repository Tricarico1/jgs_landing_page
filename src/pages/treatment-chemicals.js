import {
  MenuAlt2Icon,
  MenuAlt3Icon,
  MenuAlt4Icon
} from '@heroicons/react/outline'

import Header from '../components/header';
import Footer from '@/components/footer';

const products = [
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


export default function Treatchems() {
  return (
    <div className="page-wrapper bg-gothicblue">
      <Header/>
      <div className="flippypage bg-rosebrown">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900">Treatment Chemicals</h2>
          <h2 className="text-2xl sm:py-6 font-extrabold text-blue-900">Hover for the description</h2>
        </div>

        <div className="content-container">
          {products.map( product => (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span className="card-header">{product.name}</span>
                  <p className="card-description">{product.tooltip}</p>
                </div>
                <div class="flip-card-back">
                  <p className="items-list">
                    {product.items.map(i => (<span>• {i}</span>))}
                  </p>
                </div>
              </div>
            </div> 
          ))}
        </div>
      </div>
      {/* <div className="relative bg-rosebrown sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl  font-extrabold text-gray-900">Treatment</h2>
          <h2 className="text-2xl sm:py-6 font-extrabold text-blue-900">Hover for the description</h2>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="img_avatar.png" alt="Avatar"/>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div> 
      </div> */}
      <Footer />
    </div>
  )
}
