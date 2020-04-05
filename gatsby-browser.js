/* 
|-----------------------------------------------
|  Import React and Providers Context
|-----------------------------------------------
| Importamos Providers Context,
| contendran los datos globales necesarios
|
*/
import React from 'react';
import { MainProvider } from '@providers'
/* 
|-----------------------------------------------
|  Import Tailwindcss y custom CSS
|-----------------------------------------------
*/
import './src/css/tailwind.css'
import './src/css/style.css'

export const wrapRootElement = ({ element }) => (
    <MainProvider>{element}</MainProvider>
)

