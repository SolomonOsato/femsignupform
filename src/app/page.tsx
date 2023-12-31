import Signup from "@/components/Signup";

export default function Home() {
  return (
    <main className="text-white font-normal bg-mobile bg-primary-red md:bg-desktop grid place-content-center items-center gap-16 md:gap-4 md:grid-cols-2 py-16 px-6 md:px-32 h-screen">
      <section className="grid gap-8 md:gap-20 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl font-bold">Learn to code by watching others</h1>
        <p className="text-white/90">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="grid gap-6 text-center">
        <h1 className="sr-only">sign-up section</h1>
        <p className="bg-accent-blue rounded-xl px-8 py-4 shadow-red">
          <span className="font-semibold">Try it free for 7 days</span>&nbsp;
          <span>then &#x24;20/mo. thereafter</span>
        </p>
        <Signup />
      </section>
    </main>
  );
}
