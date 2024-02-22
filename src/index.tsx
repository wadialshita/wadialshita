import React from 'react';
import { RouterProvider } from 'react-router5';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from 'app/App';
import { store, persistor, router } from 'app/store';
import { I18nProvider } from './locales';
import 'theme/theme.scss';
import '@radix-ui/themes/styles.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <RouterProvider router={router}>
                    <I18nProvider>
                        <App />
                    </I18nProvider>
                </RouterProvider>
            </PersistGate>
        </Provider>
    </>,
);
