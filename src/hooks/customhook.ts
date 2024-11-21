import { useState, useEffect } from 'react';

interface Price {
  buy: number;
  sell: number;
  dollar: number;
}

interface ChartData {
  [key: string]: string;
}

interface Chart {
  changes: string;
  changes_percentage: number;
  data: ChartData;
}

interface Cryptocurrency {
  symbol: string;
  name: string;
  title: string;
  service_id: number;
  rank: number;
  price: Price;
  chart: Chart;
  decimal_digit: string;
  market_cap: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  base_icon: string;
  icon: string;
}

interface Prices {
  [key: string]: Cryptocurrency;
}

interface PricesObject {
  prices: Prices;
}

const useFetchData = (url: string) => {
  const [data, setData] = useState<PricesObject | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('An error occured fetching prices data');
        }
        const data: PricesObject = await response.json();
        setData(data);
        setStatus('success');
        /* eslint-disable  @typescript-eslint/no-explicit-any */
      } catch (error:any) {
        setError(error?.message || '');
        setStatus('error');
      }
    };

    fetchData();  

    const interval = setInterval(fetchData, 60000); 

    return () => clearInterval(interval);  
  }, [url]);

  return { data, status, error };
};

export default useFetchData;