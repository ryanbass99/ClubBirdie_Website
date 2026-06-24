import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/BayArea.jpg"
            alt="Club Birdie simulator bays"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-7xl">
            Your game, upgraded.
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-white drop-shadow-md">
            Indoor golf in Coon Rapids, Iowa featuring two premium simulator
            bays, 24/7 member access, winter leagues, and easy tee time booking.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-red-700 px-8 py-4 font-semibold text-white hover:bg-red-800"
            >
              Become a Member
            </a>

            <a
              href="/guest-pricing"
              className="rounded-xl border border-red-700 bg-white px-8 py-4 font-semibold text-red-700 hover:bg-red-50"
            >
              View Guest Pricing
            </a>
          </div>
        </div>
      </section>
            <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold">2 Simulator Bays</h3>
              <p className="text-slate-600">
                Play, practice, and compete year-round with two indoor bays.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold">24/7 Member Access</h3>
              <p className="text-slate-600">
                Members can book tee times and play anytime.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold">Winter League</h3>
              <p className="text-slate-600">
                Stay sharp and compete during the off-season.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold">Easy Booking</h3>
              <p className="text-slate-600">
                Reserve tee times quickly through the Club Birdie app.
              </p>
            </div>
          </div>
        </div>
      </section>
<footer className="bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
  <Image
    src="/CB_Logo_Web.png"
    alt="Club Birdie"
    width={60}
    height={60}
    className="h-16 w-auto"
  />

  <div>
    <p className="text-xl font-bold">Club Birdie</p>
    <p className="text-sm text-slate-300">Your game, upgraded.</p>
  </div>
</div>

          <div className="text-sm text-slate-300">
            <p>517 Main St - Back Alley, Coon Rapids, IA 50058</p>
            <p>
              712-369-0507 •{" "}
              <a
                href="mailto:ryan@clubbirdie.golf"
                className="underline hover:text-white"
              >
                ryan@clubbirdie.golf
              </a>
            </p>
          </div>

          <a
  href="/policies"
  className="text-sm text-slate-300 hover:text-white"
>
  Privacy Policy
</a>
        </div>
      </footer>
    </main>
  );
}