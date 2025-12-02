import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';
import { Home, Map } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-neutral-50 min-h-[80vh] flex items-center justify-center font-sans">
      <Container className="text-center">
        <div className="relative inline-block mb-8">
          <h1 className="text-9xl font-black text-neutral-200">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <Map className="w-24 h-24 text-secondary-500 opacity-80 animate-bounce" />
          </div>
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link to="/">
          <Button size="lg" className="shadow-xl">
            <Home className="w-5 h-5 mr-2" />
            Return to Campus
          </Button>
        </Link>
      </Container>
    </div>
  );
};