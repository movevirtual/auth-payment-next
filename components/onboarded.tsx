import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AlertDialogDemoAlreadyOnboarded() {
  return (
    <AlertDialog>
      <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-y-5 border rounded-lg p-10">
        <h1 className=" text-primary text-xl font-bold">
          Your account is already created
        </h1>
        <p className=" dark:text-slate-500/50 text-slate-600/80 text-sm font-medium ">
          Do you want us to redirect you to the dashboard?
        </p>
        <AlertDialogTrigger asChild>
          <Button className="w-full" variant="outline">
            Click to continue
          </Button>
        </AlertDialogTrigger>
      </div>

      <AlertDialogContent className="gap-y-7 max-w-md mx-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>
            We are redirecting you to the dashboard
          </AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the dahsboard and start your contract
            journey!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-auto w-full gap-x-2">
          <AlertDialogCancel className="w-full bg-destructive text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="w-full">
            <Link href={"/"}>Continue</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
