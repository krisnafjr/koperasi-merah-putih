import Image from "next/image";
import { urlFor } from "@/sanity/lib/ImageUrl";

interface Pendiri {
  _id: string;
  nama: string;
  jabatan: string;
  foto: any;
}

interface Props {
  data: Pendiri[];
}

export default function PendiriGrid({ data }: Props) {
  return (
    <section className="bg-gray-50 pb-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
            Tentang Kami
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
          Struktural Pendiri Koperasi Merah Putih
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Para pendiri yang menjadi fondasi awal terbentuknya Koperasi Merah Putih.
        </p>
        <div className="h-1 w-16 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data.map((pendiri) => (
          <div
            key={pendiri._id}
            className="p-4 bg-white border border-gray-300 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
              <Image
                src={urlFor(pendiri.foto).width(300).height(300).url()}
                alt={pendiri.nama}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">{pendiri.nama}</h3>
              <p className="text-sm text-gray-500 mt-1">{pendiri.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
