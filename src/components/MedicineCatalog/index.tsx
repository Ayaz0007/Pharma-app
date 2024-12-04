import React, { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { MedicineGrid } from './MedicineGrid';
import { categories, medicines } from './medicineData';

export function MedicineCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medicine Catalog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our complete range of pharmaceutical products
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <MedicineGrid medicines={filteredMedicines} />
      </div>
    </section>
  );
}