import React from 'react';
import './index.css'
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

const App = () =>

    <QueryClientProvider client={queryClient}>
        <Home />
    </QueryClientProvider>;

export {
    App
}