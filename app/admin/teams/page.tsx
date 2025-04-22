import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function TeamsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className={`${lusitana.className} text-2xl font-bold`}>Our Teams</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { id: 1, name: 'John Smith', role: 'CEO', image: '/api/placeholder/150/150' },
          { id: 2, name: 'Sarah Johnson', role: 'CTO', image: '/api/placeholder/150/150' },
          { id: 3, name: 'Michael Brown', role: 'Head of Design', image: '/api/placeholder/150/150' },
          { id: 4, name: 'Emily Davis', role: 'Marketing Director', image: '/api/placeholder/150/150' },
          { id: 5, name: 'David Wilson', role: 'Sales Manager', image: '/api/placeholder/150/150' },
          { id: 6, name: 'Jessica Taylor', role: 'Customer Support', image: '/api/placeholder/150/150' },
        ].map((member) => (
          <div key={member.id} className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image src={member.image} alt={member.name} width={150} height={150} />
              </div>
              <h3 className="mb-1 text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="mt-4 flex space-x-2">
                <button className="rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-600">Contact</button>
                <button className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600">Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}