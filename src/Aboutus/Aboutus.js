import { AboutUsString } from "../Commons/AboutUsComponentString";

export default function AboutUs() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-6">
          About Us
        </h2>

        {/* Content */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed font-montserrat text-gray-700 text-center whitespace-pre-line">
          {AboutUsString.Abouts_Content}
        </p>
      </div>
    </section>
  );
}
