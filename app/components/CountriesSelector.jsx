"use client"

import React, { useState } from 'react';
import Flag from 'react-world-flags';

const countriesByRegion = {
  Europe: [
    { name: 'Belgium', code: 'BE' },
    { name: 'Denmark', code: 'DK' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'Greece', code: 'GR' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Italy', code: 'IT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Spain', code: 'ES' },
    { name: 'Portugal', code: 'PT' },
  ],
  'North America': [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Costa Rica', code: 'CR' },
  ],
  Asia: [
    { name: 'China', code: 'CN' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Japan', code: 'JP' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'UAE', code: 'AE' },
  ],
  'Latin America': [
    { name: 'Mexico', code: 'MX' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Peru', code: 'PE' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Paraguay', code: 'PY' },
  ],
  Oceania: [
    { name: 'Australia', code: 'AU' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Palau', code: 'PW' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Micronesia', code: 'FM' },
    { name: 'Marshall Islands', code: 'MH' },
  ],
  Africa: [
    { name: 'Egypt', code: 'EG' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Zimbabwe', code: 'ZW' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Senegal', code: 'SN' },
  ],
};

export default function CountrySelector() {
  const [activeRegion, setActiveRegion] = useState('Europe');
  const [isFading, setIsFading] = useState(false);

  const regions = Object.keys(countriesByRegion);

  const handleRegionChange = (newRegion) => {
    if (newRegion === activeRegion) {
      return; 
    }

    setIsFading(true); 

    setTimeout(() => {
      setActiveRegion(newRegion);
      setIsFading(false);
    }, 200); 
  };

  return (
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
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
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
              {/* REPLACED IMG WITH REACT-WORLD-FLAGS COMPONENT */}
              <div className="w-8 h-6 md:w-10 md:h-8 mr-3 relative shrink-0">
                <Flag 
                  code={country.code} 
                  className="w-full h-full object-cover rounded-[1px] shadow-sm"
                  fallback={<span>🏳️</span>}
                />
              </div>
              
              <span className="text-lg md:text-xl font-medium text-gray-800">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}