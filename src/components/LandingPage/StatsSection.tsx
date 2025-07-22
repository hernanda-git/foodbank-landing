import React from 'react';

const StatsSection: React.FC = () => (
  <section className="w-full py-12 bg-gray-100 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4">Impact Highlights</h2>
    <div className="flex gap-8">
      <div className="text-center">
        <div className="text-3xl font-bold">8591+</div>
        <div>Beneficiaries</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">100+</div>
        <div>Volunteers</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">10+</div>
        <div>Communities</div>
      </div>
    </div>
  </section>
);

export default StatsSection;
