const BASE_URL = 'https://vtaglobal.in';

export default function sitemap() {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/services/flight-bookings`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/services/legalization`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/services/mea-attestation`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/services/translation`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/services/travel-insurance`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/services/visa-assistance`, lastModified: new Date(), priority: 0.9 },
  ];
}
