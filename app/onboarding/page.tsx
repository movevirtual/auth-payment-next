"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import AlertDialogDemo from "@/components/paymentpopup";
import { AlertDialogDemoAlreadyOnboarded } from "@/components/onboarded";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("newsignup");
  const [showPopup, setShowPopup] = useState(search === "true");

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="flex items-center justify-center h-[80vh]">
      {search === "true" ? (
        <AlertDialogDemo />
      ) : (
        <AlertDialogDemoAlreadyOnboarded />
      )}
    </main>
  );
}
