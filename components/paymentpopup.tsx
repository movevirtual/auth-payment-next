import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

async function handlePayNow() {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const checkoutUrl = await res.json();

  return checkoutUrl;
}

export default async function AlertDialogDemo() {
  const handleClick = async (e: any) => {
    e.preventDefault();
    const result = await handlePayNow();
    const checkoutUrlPath = result.url;
    window.location.href = checkoutUrlPath;
  };
  return (
    <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-y-5 border rounded-lg p-10">
      <div className="border border-slate-500/50 rounded-full p-5">
        <img
          src={
            "https://lottie.host/355cbdd4-c82e-4618-a807-122ef6bf0a37/yyRUnRilPT.json"
          }
          alt=""
        />
        <PenTool className="h-7 w-7 text-primary" />
      </div>
      <h1 className="text-primary text-xl font-bold">
        Your new account has been created
      </h1>
      <Button
        className="w-full text-base font-bold"
        variant="destructive"
        onClick={handleClick}
      >
        Pay Now
      </Button>
    </div>
  );
}
