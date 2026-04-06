import React from 'react';
import { Search, Bell, User, RefreshCcw } from 'lucide-react';

const Header: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // ── Intentional Logic Bug ── 
    // This will throw a ReferenceError, which the console interceptor will catch.
    setTimeout(() => {
      try {
        // @ts-ignore: Intentionally using undefined variable
        const data = rawData.items; 
        console.log('Success!', data);
      } catch (err: any) {
        console.error('Failed to refresh data:', err.message);
        throw err; // Re-throw to make it show in console
      } finally {
        setIsRefreshing(false);
      }
    }, 800);
  };

  return (
    <header className="sticky top-0 z-10 w-full h-20 bg-background/80 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
        <input 
          type="text" 
          placeholder="Search products, orders, customers..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={handleRefresh}
          className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
          title="Refresh Data (Bugs Inside!)"
        >
          <RefreshCcw size={20} />
        </button>

        <button className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>

        <div className="h-8 w-px bg-white/10 mx-2"></div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right">
            <p className="text-sm font-semibold">Pranav</p>
            <p className="text-xs text-white/40">Premium Merchant</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center border border-white/10 overflow-hidden shadow-sm">
             <User size={20} className="text-white/80" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
