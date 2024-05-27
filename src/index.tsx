import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import AppThemeProvider from './providers/theme';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
);
