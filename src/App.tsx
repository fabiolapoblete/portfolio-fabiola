import { AnimatePresence } from 'framer-motion';
import { AppRoutes } from '@portfolio/router';
import './App.scss';

export function App() {
  return (
    <div className='App'>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode='wait'>
        <AppRoutes />
      </AnimatePresence>
    </div>
  );
}
