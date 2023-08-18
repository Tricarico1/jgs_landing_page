import { Fragment, useState, useEffect, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import { Parallax, Background } from 'react-parallax';

import Link from 'next/link';
import TreatmentChemicals from './treatment-chemicals';
import Header from '../components/header';
import Footer from '@/components/footer';

export default function Homepage() {

  const parallaxSubtext = ['Municipal Wastewater', 'Industrial Wastewater', 'Pump Station Maintenance'];

  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1)%3);
    }, 5000);
  };

  const handleReset = (count) => {
    setCounter(count)
    clearInterval(intervalRef.current);
    startInterval();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <div className="bg-rosebrown">
      <div className="relative overflow-hidden">
        <Header />
      
        <main>
          <div className="parallax-container ">

            <Parallax className="w-full h-full" strength={500}>
              <Background className="image-container">
                <img className="max-w-full min-w-w-screen" src="/img/stockHeader.jpg"></img>
              </Background>

              <div className="parallax-foreground-container">
                <img className="jg-logo" src="/img/jgspecialty.png" />
                <span className='tagline'>Excellence in Chemistry, Affordable by Design</span>
                {/* insert here */}
                <div className="arrow bounce">
                  <ChevronRightIcon style={{ transform: 'rotate(90deg)', width: '75px', height: '75px' }} className="text-white" aria-hidden="true" />
                </div>
              </div>
              
              {/* <div class="gradient-black"/> */}
            </Parallax>
          </div>

          {/* <div className="static-container bg-gothicblue">
            <span>Serving Berks and Lehigh County, PA and Sanpete County, UT</span>
            <img className="locations-img" src="/img/locations.png"/>
          </div> */}


          
          

          <div className="static-container bg-white">
            <div className="parallax-container wide">
              <Parallax className="w-full h-full" strength={500}>
                <Background className="image-container">
                  <img className={`${counter===0 ? 'now-you-see-me' : 'now-you-dont'}`} src={`/img/stock1.bmp`}></img>
                  <img className={`${counter===1 ? 'now-you-see-me' : 'now-you-dont'}`} src={`/img/stock2.bmp`}></img>
                  <img className={`${counter===2 ? 'now-you-see-me' : 'now-you-dont'}`} src={`/img/stock3.bmp`}></img>
                </Background>

                <div className="parallax-foreground-container">
                  <div className="text-container">
                    {parallaxSubtext.map((text, index) => (
                      <span key={text} className={`maintext ${counter === index ? 'bright' : 'dimmed'}`} onMouseOver={() => handleReset(index)}>{text}</span>
                    ))}
                    <div className={`subtext-container ${counter === 0 ? 'now-you-see-me' : 'now-you-dont'}`}>
                      <span>We provide a number of chemicals and biological additives to help operation of  municipal wastewater treatment and sludge handling systems, including seasonal conditions.</span>
                    </div>
                    <div className={`subtext-container ${counter === 1 ? 'now-you-see-me' : 'now-you-dont'}`}>
                      <span>We provide a number of chemicals and biological additives to help operation of industrial wastewater treatment and sludge handling systems, including process upsets.</span>
                    </div>
                    <div className={`subtext-container ${counter === 2 ? 'now-you-see-me' : 'now-you-dont'}`}>
                      <span>We provide oil and grease control chemicals and biological additives to help reduce their effects on pump stations and/or collection systems as well as provide odor control.</span>
                    </div>
                  </div>
                </div>
                
                {/* <div class="gradient-black"/> */}
              </Parallax>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
    
  )
}
