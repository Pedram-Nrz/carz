interface Price {
  buy: number;
  sell: number;
  dollar: number;
}

interface ChartData {
  [key: string]: string;
}

interface Chart {
  changes: 'up' | 'down';
  changes_percentage: number;
  data: ChartData;
}

export interface Cryptocurrency {
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

export interface Prices {
  [key: string]: Cryptocurrency;
}

export interface PricesObject {
  prices?: Prices;
}