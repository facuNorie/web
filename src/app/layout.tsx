import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Facunorie',
    description: 'Portfolio web by facundo noriega frontend developer.',
    icons: {
        icon: '/images/profile.jpg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
