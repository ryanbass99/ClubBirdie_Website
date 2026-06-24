export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-5xl font-bold">About Club Birdie</h1>

        <div className="space-y-6 text-lg text-slate-600">
          <p>
            Club Birdie was created to give golfers in and around Coon Rapids a
            convenient place to practice, play, and compete year-round.
          </p>

          <p>
            Featuring two premium simulator bays powered by Uneekor technology,
            Club Birdie provides golfers of all skill levels with an accurate and
            enjoyable indoor golf experience.
          </p>

          <p>
            Members enjoy 24/7 access, online tee time reservations, and winter
            golf leagues. Guests are always welcome and can reserve simulator
            time by the hour.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-4 text-3xl font-bold">Why Golfers Choose Club Birdie</h2>

          <ul className="space-y-3 text-slate-700">
            <li>• Two premium indoor simulator bays</li>
            <li>• Uneekor launch monitor technology</li>
            <li>• 24/7 member access</li>
            <li>• Online tee time reservations</li>
            <li>• Winter leagues for all skill levels</li>
            <li>• Friendly, local atmosphere</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Location</h2>
          <p className="text-lg text-slate-600">517 Main St - Back Alley</p>
          <p className="text-lg text-slate-600">Coon Rapids, IA 50058</p>
        </div>
      </div>
    </main>
  );
}