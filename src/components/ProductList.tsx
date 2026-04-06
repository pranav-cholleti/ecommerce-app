import React from 'react';
import { MoreVertical, Trash2, RefreshCw } from 'lucide-react';

const products = [
  { id: 1, name: 'Silk Evening Gown', price: '$1,299', stock: 12, category: 'Luxury' },
  { id: 2, name: 'Cashmere Overcoat', price: '$2,450', stock: 5, category: 'Apparel' },
  { id: 3, name: 'Leather Satchel', price: '$850', stock: 24, category: 'Accessories' },
];

const ProductList: React.FC = () => {
  const [syncing, setSyncing] = React.useState(false);

  const handleSync = async () => {
    setSyncing(true);
    // ── Intentional Network Failure ──
    // This will trigger a captured network error in the reporter.
    try {
      await fetch('https://api.pranavfashions.com/v1/stock/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token-12345'
        },
        body: JSON.stringify({ items: products.map(p => p.id) })
      });
    } catch (err: any) {
      console.error('Network error during sync:', err.message);
    } finally {
      setTimeout(() => setSyncing(false), 1500);
    }
  };

  return (
    <div className="bg-card border border-white/5 rounded-2xl overflow-hidden shadow-sm">
      <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-lg font-bold">Latest Products</h3>
        <button 
          onClick={handleSync}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-xs font-semibold hover:bg-primary/20 transition-all disabled:opacity-50"
          disabled={syncing}
        >
          <RefreshCw size={14} className={syncing ? 'animate-spin' : ''} />
          {syncing ? 'Syncing...' : 'Sync Stock'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-white/40 border-b border-white/5 uppercase text-xs tracking-wider">
              <th className="px-6 py-4 font-semibold">Product</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Stock</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {products.map((p) => (
              <tr key={p.id} className="group hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-5 font-medium text-white">{p.name}</td>
                <td className="px-6 py-5">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/60">
                    {p.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-white/80">{p.price}</td>
                <td className="px-6 py-5">
                   <div className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full ${p.stock < 10 ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.3)]' : 'bg-emerald-400'}`}></div>
                     {p.stock} in stock
                   </div>
                </td>
                <td className="px-6 py-5 text-right relative">
                  <div className="flex items-center justify-end gap-2">
                    {/* ── Intentional UI Bug: CSS Overlap ── */}
                    {/* These two buttons will overlap slightly to demo the visual picker's selector extraction */}
                    <button 
                      className="p-1.5 text-rose-400/60 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors z-0"
                      title="Delete Product"
                    >
                      <Trash2 size={18} />
                    </button>
                    
                    <button 
                      className="p-1.5 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-colors z-10 bg-card/50"
                      title="More Options"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
