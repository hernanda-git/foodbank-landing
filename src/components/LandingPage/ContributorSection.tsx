import locales from '../../locales/locales.json';

interface ContributorSectionProps {
  lang?: string;
}

const logos = [
  '99_SpeedMart.png',
  'BernasPadiberasNasionalBerhad.jpeg',
  'DewanPerniagaanMelayuMalaysia.jpeg',
  'JabatanSukarelawanMalaysia.jpeg',
  'KLCMarketingSales.jpeg',
  'Mamee.jpeg',
  'MohdChan.jpeg',
  'MTPN.jpeg',
  'MyDin.jpeg',
  'MyKasih.jpeg',
  'PBRealty.jpeg',
  'TeobrosGroup.jpeg',
  'TheBudimasCharitableFoundation.jpeg',
  'Yayasan_FoodBank_Malaysia.jpeg',
];

const ContributorSection: React.FC<ContributorSectionProps> = ({ lang = 'en' }) => {
  // @ts-expect-error: JSON import is not typed, fallback to 'en' if lang missing
  const t = (locales[lang]?.contributors) || locales['en'].contributors;
  return (
    <section className="min-w-screen w-screen py-10 bg-white flex flex-col items-center">
      <div className="text-sm text-gray-600 font-medium mb-8">
        {t.title}
      </div>
      <div className="w-full max-w-5xl">
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((file, index) => (
            <div
              key={`${file}-${index}`}
              className="w-24 h-24 flex items-center justify-center bg-white"
              style={{ padding: '4px' }}
            >
              <img
                src={`/images/contributors/${file}`}
                alt={file.replace(/\.[^.]+$/, '').replace(/_/g, ' ')}
                className="max-h-full max-w-full object-contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorSection;