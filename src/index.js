import React from 'react';
import * as ReactDomClient from 'react-dom/client'
import Menu from "./Menu";
import { BrowserRouter } from 'react-router-dom';
const app = ReactDomClient.createRoot(document.getElementById('app'));
app.render(
<BrowserRouter>
    <Menu />
</BrowserRouter>

);

