export default function GuestPricingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-5xl font-bold">Guest Pricing</h1>

        <p className="mb-12 max-w-3xl text-lg text-slate-600">
          Guests are welcome at Club Birdie. Book online or contact us to reserve
          a simulator bay.
        </p>

        <div className="rounded-2xl border p-8 shadow-sm">
          <h2 className="mb-2 text-3xl font-bold">Simulator Bay Rental</h2>
          <p className="mb-3 text-5xl font-bold text-red-700">$35</p>
          <p className="mb-6 text-slate-600">per hour</p>

          <ul className="space-y-3 text-slate-700">
            <li>• Price is per bay, not per golfer</li>
            <li>• No strict player limit</li>
            <li>• We recommend up to 4 golfers per bay</li>
            <li>• Book online or call/text to reserve</li>
          </ul>
        </div>
      </div>
    </main>
  );
}