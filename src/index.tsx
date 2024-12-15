// Import global styles
import '@node_modules/@module/fe-core/src/styles/globals.css';

import { AppContainer } from '@/components/app-container';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
