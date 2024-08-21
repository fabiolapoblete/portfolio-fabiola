import './App.scss';

import { AnimatePresence } from 'framer-motion';
import { AppRoutes } from '@portfolio/router';

export function App() {
  return (
    <div className='App'>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode='wait'>
        <AppRoutes />
      </AnimatePresence>
    </div>
  );
}
