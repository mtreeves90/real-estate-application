import React from 'react';
import { FirebaseProvider } from 'providers/FirebaseProvider';

export const App = () => {
  return (
    <FirebaseProvider>
        <div>Hello World</div>
    </FirebaseProvider>
  );
}