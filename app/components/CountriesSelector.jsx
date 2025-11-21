"use client"

import React, { useState } from 'react';

const countriesByRegion = {
  Europe: [
    { name: 'Belgium', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/be.svg' },
    { name: 'Denmark', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/dk.svg' },
    { name: 'France', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fr.svg' },
    { name: 'Germany', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/de.svg' },
    { name: 'Greece', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gr.svg' },
    { name: 'Hungary', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hu.svg' },
    { name: 'Iceland', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/is.svg' },
    { name: 'Ireland', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ie.svg' },
    { name: 'Italy', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/it.svg' },
    { name: 'Luxembourg', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/lu.svg' },
    { name: 'Spain', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/es.svg' },
    { name: 'Portugal', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pt.svg' },
  ],
  'North America': [
    { name: 'United States', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg' },
    { name: 'Canada', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ca.svg' },
    { name: 'Mexico', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mx.svg' },
    { name: 'Cuba', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cu.svg' },
    { name: 'Jamaica', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jm.svg' },
    { name: 'Haiti', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ht.svg' },
    { name: 'Dominican Republic', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/do.svg' },
    { name: 'Guatemala', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gt.svg' },
    { name: 'Honduras', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hn.svg' },
    { name: 'El Salvador', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sv.svg' },
    { name: 'Nicaragua', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ni.svg' },
    { name: 'Costa Rica', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cr.svg' },
  ],
  Asia: [
    { name: 'China', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cn.svg' },
    { name: 'Thailand', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/th.svg' },
    { name: 'Japan', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jp.svg' },
    { name: 'Malaysia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/my.svg' },
    { name: 'Vietnam', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vn.svg' },
    { name: 'South Korea', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kr.svg' },
    { name: 'Singapore', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sg.svg' },
    { name: 'Indonesia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/id.svg' },
    { name: 'Philippines', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ph.svg' },
    { name: 'Turkey', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tr.svg' },
    { name: 'Saudi Arabia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sa.svg' },
    { name: 'UAE', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ae.svg' },
  ],
  'Latin America': [
    { name: 'Mexico', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mx.svg' },
    { name: 'Dominican Republic', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/do.svg' },
    { name: 'Colombia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/co.svg' },
    { name: 'Argentina', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ar.svg' },
    { name: 'Brazil', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/br.svg' },
    { name: 'Chile', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cl.svg' },
    { name: 'Peru', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pe.svg' },
    { name: 'Cuba', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cu.svg' },
    { name: 'Uruguay', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/uy.svg' },
    { name: 'Ecuador', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ec.svg' },
    { name: 'Bolivia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bo.svg' },
    { name: 'Paraguay', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/py.svg' },
  ],
  Oceania: [
    { name: 'Australia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/au.svg' },
    { name: 'New Zealand', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nz.svg' },
    { name: 'Fiji', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fj.svg' },
    { name: 'Papua New Guinea', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pg.svg' },
    { name: 'New Caledonia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/nc.svg' },
    { name: 'Samoa', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ws.svg' },
    { name: 'Vanuatu', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vu.svg' },
    { name: 'Palau', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pw.svg' },
    { name: 'Tonga', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/to.svg' },
    { name: 'Solomon Islands', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sb.svg' },
    { name: 'Micronesia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fm.svg' },
    { name: 'Marshall Islands', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mh.svg' },
  ],
  Africa: [
    { name: 'Egypt', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/eg.svg' },
    { name: 'Morocco', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ma.svg' },
    { name: 'Tunisia', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tn.svg' },
    { name: 'South Africa', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/za.svg' },
    { name: 'Algeria', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/dz.svg' },
    { name: 'Kenya', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ke.svg' },
    { name: 'Tanzania', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tz.svg' },
    { name: 'Zimbabwe', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/zw.svg' },
    { name: 'Rwanda', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/rw.svg' },
    { name: 'Nigeria', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ng.svg' },
    { name: 'Ghana', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gh.svg' },
    { name: 'Senegal', flagSrc: 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sn.svg' },
  ],
};

export default function CountrySelector() {
  const [activeRegion, setActiveRegion] = useState('Europe');
  const [isFading, setIsFading] = useState(false);

  const regions = Object.keys(countriesByRegion);

  const handleRegionChange = (newRegion) => {
    if (newRegion === activeRegion) {
      return; // Don't animate if it's the same region
    }

    setIsFading(true); // Start fade-out

    // Wait for fade-out, then swap content and fade-in
    setTimeout(() => {
      setActiveRegion(newRegion);
      setIsFading(false);
    }, 200); // This duration should match the Tailwind class below
  };

  return (
    // {/* //   CHANGED: Added 'w-full' and 'overflow-x-hidden' to the root element.
    //   This ensures the component itself never overflows its parent.
    // */}
    <div className="font-sans w-full overflow-x-hidden bg-gray-50 pt-8 pb-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap lg:flex-nowrap justify-between items-start gap-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#2f486b] mb-4">Make Your Choice for the <br />Preferred Nation</h2>
        <div className="w-full lg:w-1/2 text-[#2f486b] text-lg">
          <p>Choose the ideal destination for your next vacation. </p>
        </div>
        </div>
      </div>

      {/* Region Tabs */}
      {/* CHANGED: Removed padding 'px-4 sm:px-6 lg:px-8' from this container.
        We will move it to the child div to allow the scrollbar to be full-width.
      */}
      <div className="max-w-7xl mx-auto mt-12">
        {/* CHANGED: 
          1. Added 'overflow-x-auto' to allow horizontal scrolling.
          2. Added 'whitespace-nowrap' to keep all tabs on a single line.
          3. Added the padding 'px-4 sm:px-6 lg:px-8' here so the scrolling
             content starts with the correct page padding.
        */}
        <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
              // {/* //   CHANGED: 
              //   1. Replaced 'flex-1' with 'flex-none' so buttons take their natural width.
              //   2. Added 'px-5' to give each button horizontal padding.
              // */}
              className={`flex-none py-3 px-5 text-lg font-medium rounded-t-lg transition-all duration-200 text-center ${
                activeRegion === region
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Countries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 transition-opacity duration-200 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {countriesByRegion[activeRegion] && countriesByRegion[activeRegion].map((country) => (
            <div
              key={country.name}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <img
                src={country.flagSrc}
                alt={`${country.name} flag`}
                className="w-8 h-8 md:w-10 md:h-10 object-contain mr-3"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/F0F0F0/000000?text=NA'; }}
              />
              <span className="text-lg md:text-xl font-medium text-gray-800">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}