'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './globals.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { SidebarProvider } from '../Context/SidebarContext';

const queryClient = new QueryClient()

export default function RootLayout({ children }) {

    return (
        <html lang="en">

            <body>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <SidebarProvider>
                        <div className="body-wrapper">
                            <Header />
                            {children}
                        </div>
                    </SidebarProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
