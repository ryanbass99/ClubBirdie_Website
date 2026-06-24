export default function MembershipsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-5xl font-bold">Memberships</h1>

        <p className="mb-12 max-w-3xl text-lg text-slate-600">
          Club Birdie memberships include 24/7 access, easy tee time booking,
          and year-round indoor golf. Contact us to get started.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-2 text-3xl font-bold">Single Membership</h2>
            <p className="mb-6 text-5xl font-bold text-red-700">$60</p>
            <p className="mb-6 text-slate-600">per month</p>

            <ul className="space-y-3 text-slate-700">
              <li>• 24/7 member access</li>
              <li>• Unlimited Usage</li>
              <li>• Access to both simulator bays</li>
              <li>• Year-round indoor golf</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-2 text-3xl font-bold">Family Membership</h2>
            <p className="mb-6 text-5xl font-bold text-red-700">$100</p>
            <p className="mb-6 text-slate-600">per month</p>

            <ul className="space-y-3 text-slate-700">
              <li>• 24/7 family member access</li>
              <li>• Unlimited Usage</li>
              <li>• Access to both simulator bays</li>
              <li>• Great for families who play together</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-3 text-2xl font-bold">Interested in joining?</h2>
          <p className="mb-6 text-slate-600">
            Memberships are handled directly through Club Birdie. Contact Ryan
            to get started.
          </p>

          <a
  href="sms:7123690507"
  className="block font-semibold text-red-700 hover:underline"
>
  712-369-0507
</a>

<a
  href="mailto:ryan@clubbirdie.golf"
  className="block font-semibold text-red-700 hover:underline"
>
  ryan@clubbirdie.golf
</a>
        </div>
      </div>
    </main>
  );
}