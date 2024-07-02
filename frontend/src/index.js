import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import ChatProvider from './Context/ChatProvider';
import { BrowserRouter } from 'react-router-dom';

// Consider using a performance monitoring library like React DevTools Profiler
// for in-depth analysis (https://reactjs.org/blog/2018/09/devtools-profiling.html)

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 approach

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);
