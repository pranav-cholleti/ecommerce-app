import React from 'react';
import { Home, BarChart2, ShoppingBag, Users, Settings, LogOut } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <Home size={20} />, active: true },
    { name: 'Analytics', icon: <BarChart2 size={20} />, active: false },
    { name: 'Products', icon: <ShoppingBag size={20} />, active: false },
    { name: 'Customers', icon: <Users size={20} />, active: false },
    { name: 'Settings', icon: <Settings size={20} />, active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-white/5 flex flex-col p-6 z-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 rounded-lg bg-primary shadow-lg shadow-primary/30 flex items-center justify-center">
          <ShoppingBag size={18} className="text-white" />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Pranav Fashions
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active 
                ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 transition-colors w-full">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
