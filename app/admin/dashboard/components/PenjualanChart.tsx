import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartData {
  bulan: string;
  total: number;
}

interface PenjualanChartProps {
  data: ChartData[];
}

export default function PenjualanChart({ data }: PenjualanChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bulan" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#ec4899" />
      </BarChart>
    </ResponsiveContainer>
  );
}