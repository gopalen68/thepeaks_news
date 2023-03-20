import Head from "next/head";
import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import SearchResult from "./SearchResult";

interface LayoutProps {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
}

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = async (e: any) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        searchQuery={searchQuery}
      />
      {isActive ? (
        <SearchResult />
      ) : (
        <React.Fragment>
          <main>{children}</main>
        </React.Fragment>
      )}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "ThePeaks News",
  description: "News Page for The Peaks",
  keywords: "The Peaks, ThePeaks, Blogs, News",
};
