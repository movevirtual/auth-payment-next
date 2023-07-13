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

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-y-5 border rounded-lg p-10">
        <h1 className=" text-primary text-xl font-bold">
          Your new account is being created
        </h1>
        <p className=" dark:text-slate-500/50 text-slate-600/80 text-sm font-medium ">
          {" "}
          Thank you, we will redirect you to the payment page in a few seconds
          and after the successful payment, you will be redirected to the
          dashboard.
        </p>
        <AlertDialogTrigger asChild>
          <Button className="w-full" variant="outline">
            Continue
          </Button>
        </AlertDialogTrigger>
      </div>

      <AlertDialogContent className="gap-y-7 max-w-md mx-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>
            We are redirecting you to the payment page
          </AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the dahsboard after the successful
            payment. Happy journey!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-auto w-full gap-x-2">
          <AlertDialogCancel className="w-full bg-destructive text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="w-full">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
