'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './globals.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { SidebarProvider } from '../Context/SidebarContext';
import { Suspense } from 'react';
import Loading from './loading';
import { ProfileProvider } from '../Context/ProfileContext'; // Adjust the path

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <Suspense fallback={<Loading />}>
                        <ProfileProvider> 
                            <SidebarProvider>
                                <div className="body-wrapper">
                                    <Header />
                                    {children}
                                </div>
                            </SidebarProvider>
                        </ProfileProvider>
                    </Suspense>
                </QueryClientProvider>
            </body>
        </html>
    );
}