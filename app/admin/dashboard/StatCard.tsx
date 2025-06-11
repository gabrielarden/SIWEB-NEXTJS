interface StatCardProps {
  label: string;
  value: number;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-bold">{value.toLocaleString()}</p>
    </div>
  );
}
