import { Link } from 'react-router-dom';
import { objectionsData } from '../data/objections';
import { Lock } from 'lucide-react';

export function Categories() {
  return (
    <div className="min-h-screen bg-dark-950 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-dark-50 mb-8">Objection Categories</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectionsData.categories.map((category) => (
            <div key={category.name} className="bg-dark-900 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-dark-50 mb-2">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-dark-300 text-sm mb-4">{category.description}</p>
              )}
              
              <ul className="space-y-3">
                {category.objections.map((objection) => (
                  <li key={objection.id}>
                    <Link
                      to={`/watch-room/${objection.id}`}
                      className="flex items-center justify-between p-3 rounded-md bg-dark-800 hover:bg-dark-700 transition-colors"
                    >
                      <span className="text-dark-100">{objection.title}</span>
                      {objection.isPro && (
                        <Lock className="w-4 h-4 text-accent-purple" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}