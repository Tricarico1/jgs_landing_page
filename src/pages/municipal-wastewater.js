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
  ]

const faqs = [
    {
      question: 'Why is there a growing public demand for cleaner water?',
      answer: 'Today, more than any other time in history there are ever increasing environmental concerns regarding water pollution in general and water scarcity as it relates to sources of “usable” water. Water resources are one of the top environmental concerns facing mankind today.',
    },
    {
      question: 'What is the regulatory history of water pollution control?',
      answer: 'Water pollution had become more of a public issue since shortly after WWII marked by the Federal Water Pollution Control Act (FWPCA) of 1948. The FWPCA became the basis for a later action by the newly founded Environmental Protection Agency (EPA) that resulted in broadening the FWPCA in 1972 into what is known today the Clean Water Act (CWA).',
    },
    {
      question: 'How have regulations become more restrictive?',
      answer: 'Similar to the changes in the regulatory environment that occurred between the end of WWII and the institution of the Clean Water Act, we are now seeing new NPDES permit requirements that are much restrictive when compared to those at the onset of this program. This shift towards a greater appreciation for clean water has is not based solely on consumption, included also is the effects to the ecosystem at large as well as well as agriculture and a large number of other uses.',
    },
    {
      question: 'How have operations improved over time, sometimes with the use of chemicals?',
      answer: 'Many of the treatment systems whose designs and expected treatment capabilities predated implementation of the more recent NPDES water quality standards are not equipped to provide treatment standards demanded of systems today. Today a lot of attention is being given to nutrient removal from waste streams prior to surface discharges. This nutrient group includes, but is not limited to; nitrogen, phosphorous and carbonaceous biochemical oxygen demand - 5 day (CBOD5). With that being said, the three primary options are treatment system upgrades, improved operational strategies and/or chemical programs.',
    },
    // More questions...
  ]
  
  export default function Example() {
    return (
      <>
        <div className="bg-gothicblue">
          <Header/>
          <div className="bg-rosebrown"> 
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Municipal Wastewater Treatment</h2>
                  <p className="mt-4 text-lg text-gray-500">
                  For further questions, contact our {' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      customer support
                    </a>{' '}
                    team.
                  </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <dl className="space-y-12">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                        <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
