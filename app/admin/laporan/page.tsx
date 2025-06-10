'use client';

import { lusitana } from '@/app/ui/fonts';

export default function LaporanPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className={`${lusitana.className} text-2xl font-bold`}>Laporan</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Monthly Sales Report</h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Sales Chart Visualization</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white">
              Download PDF
            </button>
          </div>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Customer Analytics</h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Customer Chart Visualization</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white">
              Download PDF
            </button>
          </div>
        </div>
        
        <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Revenue Breakdown</h2>
          <div className="mb-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left font-medium">Month</th>
                  <th className="pb-2 text-right font-medium">Revenue</th>
                  <th className="pb-2 text-right font-medium">Expenses</th>
                  <th className="pb-2 text-right font-medium">Profit</th>
                  <th className="pb-2 text-right font-medium">Growth</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { month: 'January', revenue: '$12,500', expenses: '$8,000', profit: '$4,500', growth: '+5%' },
                  { month: 'February', revenue: '$15,000', expenses: '$9,200', profit: '$5,800', growth: '+10%' },
                  { month: 'March', revenue: '$18,500', expenses: '$11,000', profit: '$7,500', growth: '+15%' },
                  { month: 'April', revenue: '$22,000', expenses: '$12,500', profit: '$9,500', growth: '+20%' },
                ].map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3">{item.month}</td>
                    <td className="py-3 text-right">{item.revenue}</td>
                    <td className="py-3 text-right">{item.expenses}</td>
                    <td className="py-3 text-right">{item.profit}</td>
                    <td className="py-3 text-right text-green-600">{item.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white">
              View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}