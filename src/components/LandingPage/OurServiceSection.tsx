
const services = [
  {
    img: '/images/photos/photo_3.png',
    title: 'Rumah Amal Lot G-18',
    desc: '500 Penerima Bantuan Khas Foodbank DMDI di Rumah Amal Lot G-18, Bangunan Kota Cmerlang, Ayer Keroh.'
  },
  {
    img: '/images/photos/1.png',
    title: 'Program Sumbangan Bakul Ramadhan',
    desc: 'Sumbangan dari Speedmart 99 di Bangunan Kota Cemerlang, Ayer Keroh. Untuk sambutan Aidil-fitri.'
  },
  {
    img: '/images/photos/4.png',
    title: 'Sumbangan Pasca Banjir',
    desc: 'Bantuan darurat berupa makanan, kebutuhan pokok, dan dukungan moral bagi korban banjir untuk membantu mereka bangkit kembali.'
  },
  {
    img: '/images/photos/8.png',
    title: 'Food Bank DMDI Negeri Johor',
    desc: 'Program distribusi makanan oleh DMDI Negeri Johor untuk membantu keluarga kurang mampu dan memastikan akses pangan yang layak bagi masyarakat yang membutuhkan.'
  }
];

const OurServiceSection = () => {
  return (
    <section className="w-full py-12 sm:py-24 bg-white flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-8 px-4 sm:px-0">
        <div className="w-full sm:w-1/4 flex flex-col justify-start items-start pr-0 sm:pr-6 mb-8 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">Our Activities</h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">Helping families thrive through our foodbank and charitable services.</p>
        </div>
        <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg shadow flex flex-col overflow-hidden h-auto min-h-[240px] sm:min-h-[320px]"
            >
              <div className="w-full flex items-center justify-center aspect-[4/3] bg-gray-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex flex-col justify-start p-3 sm:p-4 flex-1">
                <h3 className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
