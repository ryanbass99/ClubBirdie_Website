"use client";

import { useRouter } from "next/navigation";

export default function PoliciesPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-4xl">
        

        <h1 className="mb-3 text-center text-4xl font-bold text-red-700">
          Club Birdie Policies
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
          Please review these policies before booking a tee time.
        </p>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <section>
            <h2 className="mb-3 text-2xl font-bold">Booking & Cancellation Policy</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>Tee times are subject to availability.</li>
              <li>Guests may book Bay 1 or Bay 2 for 1, 2, or 3 hours.</li>
              <li>Reservations may be cancelled up to 24 hours before the scheduled tee time.</li>
              <li>No-shows may be charged the full booking amount.</li>
              <li>Club Birdie reserves the right to cancel or adjust reservations due to maintenance, weather, technical issues, or unforeseen circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">Facility Rules</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>Please respect the simulators, hitting bays, equipment, furniture, and facility.</li>
              <li>Guests are responsible for damage caused by misuse, negligence, or failure to follow posted rules.</li>
              <li>Only one person should swing in a bay at a time.</li>
              <li>Children must be supervised by an adult.</li>
              <li>Club Birdie may refuse service or remove guests who act unsafely or disrespectfully.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">Liability</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>Golf activities involve inherent risk, including injury from clubs, balls, equipment, or other participants.</li>
              <li>By booking a tee time, guests assume responsibility for their own safety and the safety of anyone in their group.</li>
              <li>Club Birdie is not responsible for lost, stolen, or damaged personal property.</li>
              <li>Guests agree to use the facility and equipment in a safe and responsible manner.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">Privacy Policy</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>Information submitted through the website is used for reservations and communication related to bookings.</li>
              <li>Club Birdie does not sell guest booking information.</li>
              <li>Guests may be contacted by phone, text, or email regarding their reservation.</li>
            </ul>
          </section>

          <section className="border-t border-slate-200 pt-6">
            <h2 className="mb-3 text-2xl font-bold">Questions?</h2>
            <p className="text-slate-700">Call or text: 712-369-0507</p>
            <p className="text-slate-700">Email: ryan@clubbirdie.golf</p>
          </section>
        </div>
      </div>
    </main>
  );
}
