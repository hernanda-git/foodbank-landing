'use client';

import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { galleryGroups } from '@/lib/galleryData';
import locales from '../../locales/locales.json';

interface GallerySectionProps {
  lang?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ lang = 'en' }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  // @ts-expect-error: locales not typed
  const t = locales[lang]?.s || locales['en'].s;

  // List of all folders and their images
  const galleryGroups = [
    {
      name: '01',
      images: [
        'DSC04994.jpg','DSC04996.jpg','DSC04997.jpg','DSC04998.jpg','DSC05001.jpg','DSC05002.jpg','DSC05003.jpg','DSC05007.jpg','DSC05009.jpg','DSC05010.jpg','DSC05011.jpg','DSC05013.jpg','DSC05016.jpg','DSC05019.jpg','DSC05020.jpg','DSC05022.jpg','DSC05024.jpg','DSC05025.jpg','DSC05028.jpg','DSC05029.jpg','DSC05030.jpg','DSC05031.jpg','DSC05035.jpg','DSC05039.jpg','DSC05044.jpg','DSC05049.jpg','DSC05051.jpg','DSC05055.jpg'
      ]
    },
    {
      name: '02',
      images: [
        'DSC01296.jpg','DSC01299.jpg','DSC01302.jpg','DSC01304.jpg','DSC01306.jpg','DSC01308.jpg','DSC01310.jpg','DSC01320.jpg','DSC01322.jpg','DSC01324.jpg','DSC01329.jpg','DSC01331.jpg','DSC01334.jpg','DSC01337.jpg','DSC01339.jpg','DSC01341.jpg','DSC01342.jpg','DSC01343.jpg','DSC01349.jpg','DSC01352.jpg','DSC01355.jpg','DSC01357.jpg','DSC01361.jpg','DSC01362.jpg','DSC01363.jpg','DSC01365.jpg','DSC01369.jpg','DSC01370.jpg'
      ]
    },
    {
      name: '03',
      images: [
        'DSC02657.jpg','DSC02658.jpg','DSC02659.jpg','DSC02661.jpg','DSC02664.jpg','DSC02666.jpg','DSC02668.jpg','DSC02671.jpg','DSC02674.jpg','DSC02676.jpg','DSC02677.jpg','DSC02679.jpg','DSC02681.jpg','DSC02683.jpg','DSC02685.jpg','DSC02687.jpg','DSC02689.jpg','DSC02692.jpg','DSC02693.jpg','DSC02696.jpg','DSC02698.jpg','DSC02700.jpg','DSC02702.jpg','DSC02704.jpg','DSC02706.jpg','DSC02708.jpg','DSC02710.jpg','DSC02711.jpg','DSC02714.jpg'
      ]
    },
    {
      name: '04',
      images: [
        'DSC08821.jpg','DSC08823.jpg','DSC08825.jpg','DSC08826.jpg','DSC08828.jpg','DSC08830.jpg','DSC08834.jpg','DSC08837.jpg','DSC08841.jpg','DSC08843.jpg','DSC08845.jpg','DSC08847.jpg','DSC08851.jpg','DSC08853.jpg','DSC08856.jpg','DSC08860.jpg','DSC08861.jpg','DSC08864.jpg','DSC08866.jpg','DSC08868.jpg','DSC08872.jpg','DSC08874.jpg','DSC08878.jpg','DSC08880.jpg','DSC08882.jpg','DSC08885.jpg','DSC08887.jpg','DSC08888.jpg','DSC08890.jpg','DSC08893.jpg','DSC08896.jpg','DSC08899.jpg','DSC08902.jpg','DSC08906.jpg'
      ]
    },
    {
      name: '05',
      images: [
        'DSC03332.jpg','DSC03333.jpg','DSC03336.jpg','DSC03339.jpg','DSC03341.jpg','DSC03343.jpg','DSC03345.jpg','DSC03347.jpg','DSC03348.jpg','DSC03350.jpg','DSC03352.jpg','DSC03354.jpg','DSC03356.jpg','DSC03358.jpg','DSC03360.jpg'
      ]
    }
  ];

  return (
    <section className="min-h-screen mt-18 bg-gradient-to-br from-white via-gray-100 to-white text-gray-800">
      <div className="text-center mb-12 px-4 py-16">
        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full mx-auto mb-4" />
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <i className="fas fa-image text-orange-500" />
          {t?.title || 'Gallery Showcase'}
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          {t?.description ||
            'Explore curated visual groups. Each section is a distinct collection without labels — experience the story visually.'}
        </p>
      </div>

      <div className="grid gap-12 px-4 pb-16">
        {galleryGroups.map((group) => (
          <div key={group.name} className="rounded-xl shadow-xl overflow-hidden p-[2px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-[10px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.images.map((filename, i) => (
                  <div key={filename} className="aspect-square overflow-hidden rounded-lg group">
                    <img
                      src={`/images/recently_added/${group.name}/${filename}`}
                      alt={`${group.name} - ${i + 1}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
