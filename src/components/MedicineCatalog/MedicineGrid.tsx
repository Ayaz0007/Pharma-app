import React from 'react';
import { MedicineCard } from '../BestSellers/MedicineCard';
import { Medicine } from './types';

interface MedicineGridProps {
  medicines: Medicine[];
}

export function MedicineGrid({ medicines }: MedicineGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medicines.map((medicine, index) => (
        <MedicineCard key={index} {...medicine} />
      ))}
    </div>
  );
}