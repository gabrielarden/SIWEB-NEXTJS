interface StatCardProps {
  label: string;
  value: number;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <div className="text-2xl font-bold">{value.toLocaleString()}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-white p-4 rounded shadow text-center animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
    </div>
  );
}