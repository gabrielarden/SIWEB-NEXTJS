import dynamic from 'next/dynamic';

const TabelProduk = dynamic(() => import('./TabelProduk'), { ssr: false });

export default function ProdukPage() {
  return (
    <div>
      {/* Kalau kamu punya form tambah produk, boleh taruh di sini */}
      <TabelProduk />
    </div>
  );
}

