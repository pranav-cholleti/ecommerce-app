import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Stats from './components/Stats';
import SalesChart from './components/SalesChart';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <div className="flex bg-background text-white min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen">
        <Header />

        <div className="p-8 max-w-7xl mx-auto">
          {/* Dashboard Welcome */}
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              Welcome back, Pranav
            </h2>
            <p className="text-white/40 text-lg">
              Here is what happened with your fashion empire today.
            </p>
          </div>

          {/* Metrics & KPIs */}
          <Stats />

          {/* Charts & Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SalesChart />
              <ProductList />
            </div>

            {/* Quick Actions Sidebar */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl shadow-indigo-500/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                 <h3 className="text-xl font-bold mb-2">Upgrade to Pro</h3>
                 <p className="text-white/80 text-sm mb-6 leading-relaxed">
                   Get premium analytics, custom themes, and AI-powered recommendations.
                 </p>
                 <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-white/90 transition-all shadow-md shadow-black/10">
                   Get Started Early
                 </button>
              </div>

              <div className="p-6 bg-card border border-white/5 rounded-2xl shadow-sm">
                 <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Activity Log</h3>
                 <ul className="space-y-4">
                   {[
                     { user: 'Sarah K.', action: 'Purchased Silk Gown', time: '12m ago' },
                     { user: 'System', action: 'Daily report generated', time: '1h ago' },
                     { user: 'James W.', action: 'New account created', time: '3h ago' }
                   ].map((log, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <span className="text-[10px] font-bold text-white/50">{log.user[0]}</span>
                       </div>
                       <div>
                         <p className="text-sm font-medium">{log.action}</p>
                         <p className="text-xs text-white/30">{log.time}</p>
                       </div>
                     </li>
                   ))}
                 </ul>
                 <button className="w-full mt-6 py-2.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                   View Full History →
                 </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
