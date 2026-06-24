export default function WinterLeaguePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-5xl font-bold">Winter League</h1>

        <p className="mb-12 max-w-3xl text-lg text-slate-600">
          Club Birdie offers two winter golf leagues. Both leagues are
          handicapped, so golfers of all skill levels have an equal chance to
          compete. Each week is played on a random course, matching the same
          courses the pros are playing.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-3 text-3xl font-bold">
              November - January League
            </h2>

            <p className="mb-6 text-lg text-slate-600">
              12-week league
            </p>

            <ul className="space-y-3 text-slate-700">
              <li>• 2-person teams</li>
              <li>• Play your own ball</li>
              <li>• Handicapped format</li>
              <li>• $20 per golfer</li>
              <li>• All entry money is paid out</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-3 text-3xl font-bold">
              February - March League
            </h2>

            <p className="mb-6 text-lg text-slate-600">
              8-week league
            </p>

            <ul className="space-y-3 text-slate-700">
              <li>• 2-person scramble</li>
              <li>• Handicapped format</li>
              <li>• Random course each week</li>
              <li>• $20 per golfer</li>
              <li>• All entry money is paid out</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-3 text-2xl font-bold">Sign Up</h2>
          <p className="mb-6 text-slate-600">
            Contact Club Birdie to sign up for winter league.
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