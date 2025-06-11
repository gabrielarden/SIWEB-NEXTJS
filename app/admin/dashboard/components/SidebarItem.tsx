import { ReactNode } from 'react';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2 rounded hover:bg-gray-700 transition ${
        active ? 'bg-pink-600 text-white' : 'text-gray-300'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </button>
  );
}