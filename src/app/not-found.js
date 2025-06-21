// app/not-found.js
import { Header404 } from "@/components/header";
import NotFoundContent from "@/components/error/NotFoundContent"; // ⬅️ komponen client yang tadi

export default function NotFound() {
  return (
    <>
      <Header404 />
      <NotFoundContent />
    </>
  );
}
