import React from 'react';
import { DollarSign, ShoppingCart, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { 
      name: 'Total Revenue', 
      value: '$128,430', 
      change: '+14.5%', 
      isUp: true, 
      icon: <DollarSign size={20} className="text-emerald-400" />,
      color: 'emerald'
    },
    { 
      name: 'Active Orders', 
      value: '294', 
      change: '+8.2%', 
      isUp: true, 
      icon: <ShoppingCart size={20} className="text-blue-400" />,
      color: 'blue'
    },
    { 
      name: 'New Customers', 
      value: '1,202', 
      change: '-2.4%', 
      isUp: false, 
      icon: <Users size={20} className="text-purple-400" />,
      color: 'purple'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.name} className="group p-6 bg-card border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
              {stat.icon}
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold ${stat.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
              {stat.change}
              {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            </div>
          </div>
          <p className="text-sm text-white/40 font-medium mb-1 uppercase tracking-wider">{stat.name}</p>
          <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
          
          <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
             <div className={`h-full bg-primary/40 rounded-full w-2/3`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
