import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between">
        <nav>links</nav>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <div>
        <div>Aqui va ir la landing page probablemente</div>
      </div>
    </main>
  );
}
