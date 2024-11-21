import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

interface Colors {
  stroke:string,
  top:string,
  bottom:string
}


 

const SplineAreaChart = ({data,colors,id}:{data:DataPoint[],colors:Colors,id:number}) => {
 

  return (
    <ResponsiveContainer width="60%" height={50}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id={`color-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={colors.top} stopOpacity={0.8} />
          <stop offset="95%" stopColor={colors.bottom} stopOpacity={0.8} />
        </linearGradient>
      </defs>
        <Area type="monotone" dataKey="value" stroke={colors.stroke} fill={`url(#color-${id})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SplineAreaChart;
