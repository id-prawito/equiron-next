// app/page.js
import About from "@/components/about";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Process from "@/components/process";
import Teams from "@/components/teams";
import Article from "@/components/article";
import Clients from "@/components/clients";

export const metadata = {
  title: "Home | Equiron and Co.",
  description:
    "Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya.",
  keywords: ["hukum", "bisnis", "konsultasi", "pengacara", "notaris"],
  authors: [{ name: "Equiron and Co." }],
  openGraph: {
    title: "Equiron and Co. | Trust - Commitment - Accesible",
    description:
      "Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya.",
    url: "https://equironandco.com",
    type: "website",
    images: [
      {
        url: "https://equironandco.com/img/background-og.png",
        width: 1200,
        height: 630,
        alt: "Equiron and Co.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equiron and Co. | Trust - Commitment - Accesible",
    description:
      "Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya.",
    images: ["https://equironandco.com/img/background-og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Teams />
      <Article />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
