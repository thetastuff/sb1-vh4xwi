import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { objectionsData } from '../data/objections';
import { Lock, ArrowLeft, Copy, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '@/lib/utils';

export function WatchRoom() {
  const { id } = useParams();
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(`notes-${id}`);
    return saved || '';
  });
  
  // Find the objection and its category
  const currentObjId = Number(id);
  let currentCategory = null;
  const objection = objectionsData.categories.find(category => {
    const obj = category.objections.find(o => o.id === currentObjId);
    if (obj) {
      currentCategory = category;
      return true;
    }
    return false;
  })?.objections.find(o => o.id === currentObjId);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (id) {
      localStorage.setItem(`notes-${id}`, notes);
    }
  }, [notes, id]);

  const copyNotes = async () => {
    try {
      await navigator.clipboard.writeText(notes);
      alert('Notes copied to clipboard!');
    } catch (err) {
      alert('Failed to copy notes');
    }
  };

  const downloadNotes = () => {
    const element = document.createElement('a');
    const file = new Blob([notes], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `objection-notes-${objection?.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!objection || !currentCategory) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-950 text-dark-50">
        <p>Objection not found</p>
      </div>
    );
  }

  if (objection.isPro) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-950">
        <div className="text-center p-8">
          <Lock className="w-16 h-16 text-accent-purple mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-dark-50 mb-4">Premium Content</h2>
          <p className="text-dark-200 mb-6">
            Upgrade to Pro to access this advanced objection handling strategy
          </p>
          <Button size="lg">Upgrade to Pro</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 pt-16">
      {/* Mobile Back Button */}
      <div className="md:hidden p-4 border-b border-dark-800">
        <Link 
          to="/categories"
          className="inline-flex items-center text-dark-100 hover:text-dark-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-80 border-r border-dark-800 bg-dark-900/50 overflow-y-auto">
          <div className="p-4 border-b border-dark-800">
            <h2 className="text-lg font-semibold text-dark-50">{currentCategory.name}</h2>
            {currentCategory.description && (
              <p className="text-sm text-dark-300 mt-1">{currentCategory.description}</p>
            )}
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {currentCategory.objections.map((obj) => (
                <Link
                  key={obj.id}
                  to={`/watch-room/${obj.id}`}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-md transition-colors",
                    obj.id === currentObjId
                      ? "bg-accent-purple/20 text-accent-purple"
                      : "text-dark-100 hover:bg-dark-800"
                  )}
                >
                  <span className="flex-1">{obj.title}</span>
                  {obj.isPro && <Lock className="w-4 h-4 flex-shrink-0 ml-2" />}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-dark-50 mb-6">{objection.title}</h1>
            
            <div className="aspect-video mb-8 bg-dark-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${objection.videoId}`}
                title={objection.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="bg-dark-900 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-dark-50">Notes</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyNotes}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadNotes}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-48 bg-dark-800 text-dark-50 rounded-lg p-4 border border-dark-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple outline-none resize-none"
                placeholder="Take notes about this objection handling strategy..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}