import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const SalesChart: React.FC = () => {
  return (
    <div className="p-6 bg-card border border-white/5 rounded-2xl mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Revenue Growth</h3>
          <p className="text-sm text-white/40">Weekly performance overview</p>
        </div>
        <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white/60 focus:outline-none">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1E1B2E', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: '#fff' 
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke="#6366f1" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorSales)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
