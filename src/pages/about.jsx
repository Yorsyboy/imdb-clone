import Header from "components/Header";
import Navbar from "components/Navbar";
import PageContent from "components/PageContent";
import React from "react";
import Providers from "./Providers";

export default function about() {
  return (
    <Providers>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <PageContent />
    </Providers>
  );
}
