import React from 'react';

const ContributorSection: React.FC = () => (
  <section className="w-full py-10 bg-white flex flex-col items-center">
    <h2 className="text-xl font-bold font-montserrat mb-12 text-slate-800">List of Contributors</h2>
    <div className="flex flex-wrap gap-6 justify-center">
     
      {/* Contributor logos */}
      {[
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
      ].map((file, i) => (
        <div
          key={file}
          className="w-24 h-24 flex items-center justify-center bg-white"
          style={{ padding: '4px' }}
        >
          <img
            src={`/src/assets/images/contributors/${file}`}
            alt={file.replace(/\.[^.]+$/, '').replace(/_/g, ' ')}
            className="max-h-full max-w-full object-contain"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default ContributorSection;
