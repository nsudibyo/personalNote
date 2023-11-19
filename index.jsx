import React from 'react';
import { createRoot } from 'react-dom/client';
import PersonalNotesApp from './PersonalNotesApp';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<PersonalNotesApp/>);