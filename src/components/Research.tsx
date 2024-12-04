import React from 'react';
import { TestTube, Target, Users } from 'lucide-react';

export function Research() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research & Development</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to discovering breakthrough treatments through innovative research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <TestTube className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clinical Trials</h3>
            <p className="text-gray-600">
              Over 50 ongoing clinical trials across multiple therapeutic areas
            </p>
          </div>

          <div className="text-center p-6">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Medicine</h3>
            <p className="text-gray-600">
              Developing targeted therapies for better patient outcomes
            </p>
          </div>

          <div className="text-center p-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Collaboration</h3>
            <p className="text-gray-600">
              Partnering with leading research institutions worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}