import { InertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { InertiaProgress } from '@inertiajs/progress';
import Calendar from './Pages/Calendar';

InertiaProgress.init();

const app = document.getElementById('app');

const Root = () => (
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={(name) => {
      switch (name) {
        case 'Calendar':
          return Calendar;
        default:
          return null;
      }
    }}
  />
);

createRoot(app).render(<Root />);
