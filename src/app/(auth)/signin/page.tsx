import Image from "next/image";
import Link from "next/link";
import SiginInButton from "./_components/SiginInButton";

function Signin() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] pt-28 md:pt-0">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-balance text-muted-foreground">
              Sign in to participate in Updates 2k24.
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
