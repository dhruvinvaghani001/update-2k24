import Image from "next/image";
import Link from "next/link";
import SiginInButton from "./_components/SiginInButton";
import GradientAnimatedText from "@/components/GradientAnimatedText";

function Signin() {
  return (
    <div className="w-full relative lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] pt-28 md:pt-0">
      <div className="flex relative items-center justify-center py-12">
        <div className="w-[400px] -z-10 sm:w-[600px] h-[600px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-3xl bg-gradient-to-br from-slate-900 to-violet-900 opacity-30"></div>
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <GradientAnimatedText className="font-bold tracking-tighter sm:text-3xl xl:text-4xl/none  text-center pt-4 pb-2">
              Sign in
            </GradientAnimatedText>
            <p className="text-balance text-muted-foreground">
              Sign in and be a part of Updates 2k24.
            </p>
          </div>
          {/* <div className="grid gap-4"></div> */}
          <SiginInButton className="w-full" text="Sign in with google" />
          <div className="mt-4 text-center text-sm">
            Navigate back to{" "}
            <Link href="/" className="underline">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default Signin;
