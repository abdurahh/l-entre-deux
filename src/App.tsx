/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Inspiration from './pages/Inspiration';
import Collections from './pages/Collections';
import Journal from './pages/Journal';
import About from './pages/About';
import { ROUTES } from './types';

export default function App() {
  return (
    <Routes>
      <Route path="journal" element={<Navigate to={ROUTES.comfort} replace />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inspiration" element={<Inspiration />} />
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:series" element={<Collections />} />
        <Route path="comfort" element={<Journal />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
}
