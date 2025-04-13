import React, { useEffect, useState, useTransition } from 'react';
import { countryApiData } from '../api/postApi';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    startTransition(() => {
      const mainData = countryApiData;
      console.log('API ALL DATA ---', mainData);
      setCountryData(mainData);
    });
  }, []);

  useEffect(() => {
    console.log('API country ---', countryData);
  }, [countryData]);

  return (
    <div>
      <h1 style={{ color: 'red', backgroundColor: 'white' }}>This is a Country</h1>
      {isPending && <p>Loading...</p>}
      
    </div>
  );
};

export default Country;
