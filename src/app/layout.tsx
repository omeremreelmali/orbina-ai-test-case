"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ToastProvider } from "@/providers/ToastProvider";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <AuthProvider>
            <Theme>
              <ToastProvider>{children}</ToastProvider>
            </Theme>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
