export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>

        <p className="mb-12 max-w-3xl text-lg text-slate-600">
          Have questions about memberships, guest reservations, leagues, or tee
          times? Contact Club Birdie and we’ll help you get started.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-4 text-3xl font-bold">Club Birdie</h2>

            <p>517 Main St - Back Alley</p>
            <p>Coon Rapids, IA 50058</p>

            <p className="mt-6 font-semibold">Phone</p>
<a
  href="sms:7123690507"
  className="text-red-700 hover:underline"
>
  712-369-0507
</a>

<p className="mt-6 font-semibold">Email</p>
<a
  href="mailto:ryan@clubbirdie.golf"
  className="text-red-700 hover:underline"
>
  ryan@clubbirdie.golf
</a>

            <p className="mt-6 font-semibold">Access</p>
            <p>Members: 24/7 Access</p>
            <p>Guests: By Reservation</p>
          </div>

          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              title="Club Birdie Location"
              src="https://www.google.com/maps?q=41.871279222390264,-94.67835322264865&t=k&z=20&output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}