"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

type Booking = {
  bayId: string;
  startAt: Date;
  endAt: Date;
};

const bays = [
  { id: "bay1", name: "Bay 1" },
  { id: "bay2", name: "Bay 2" },
];

const durations = [1, 2, 3];



function formatDateKey(date: Date) {
  return date.toISOString().split("T")[0];
}

function getDateOptions() {
  const dates = [];
  const today = new Date();

  for (let i = 0; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    dates.push({
      label: d.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      value: formatDateKey(d),
    });
  }

  return dates;
}

function createDateFromKeyAndHour(dateKey: string, hour: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day, hour, 0, 0, 0);
}

function overlaps(startA: Date, endA: Date, startB: Date, endB: Date) {
  return startA < endB && endA > startB;
}

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function BookPage() {
  const dateOptions = useMemo(() => getDateOptions(), []);

  const [dateKey, setDateKey] = useState(dateOptions[0].value);
  const [bayId, setBayId] = useState("bay1");
  const [durationHours, setDurationHours] = useState(1);
  const [startHour, setStartHour] = useState(10);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestNotes, setGuestNotes] = useState("");
  const [message, setMessage] = useState("");
  const [bookingComplete, setBookingComplete] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreedToPolicies, setAgreedToPolicies] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);

  const startHours = Array.from({ length: 12 }, (_, i) => i + 10);

  useEffect(() => {
    async function loadBookings() {
      setLoading(true);
      setMessage("");

      try {
        const q = query(
          collection(db, "bookings"),
          where("dateKey", "==", dateKey),
          where("status", "==", "active")
        );

        const snap = await getDocs(q);

        const existing = snap.docs.map((doc) => {
          const data = doc.data();

          return {
            bayId: data.bayId,
            startAt: data.startAt.toDate(),
            endAt: data.endAt.toDate(),
          };
        });

        setBookings(existing);
      } catch (error) {
        console.error(error);
        setMessage("Unable to load tee times. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, [dateKey]);

  const availableHours = startHours.filter((hour) => {
    const start = createDateFromKeyAndHour(dateKey, hour);
    const end = new Date(start);
    end.setHours(start.getHours() + durationHours);

    return !bookings.some(
      (booking) =>
        booking.bayId === bayId &&
        overlaps(start, end, booking.startAt, booking.endAt)
    );
  });

  async function submitBooking() {
    setSubmitted(true);
    setMessage("");

    if (!guestName.trim() || !guestPhone.trim() || !guestEmail.trim()) {
  setMessage("Please enter your name, phone number, and email address.");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(guestEmail.trim())) {
  setMessage("Please enter a valid email address.");
  return;
}

if (!agreedToPolicies) {
  setMessage("Please agree to Club Birdie policies before booking.");
  return;
}

    const startAt = createDateFromKeyAndHour(dateKey, startHour);
    const endAt = new Date(startAt);
    endAt.setHours(startAt.getHours() + durationHours);

    const isTaken = bookings.some(
      (booking) =>
        booking.bayId === bayId &&
        overlaps(startAt, endAt, booking.startAt, booking.endAt)
    );

    if (isTaken) {
      setMessage("That tee time is no longer available. Please choose another time.");
      return;
    }

    setSaving(true);

    try {
      await addDoc(collection(db, "bookings"), {
        bayId,
        createdAt: Timestamp.now(),
        createdByRole: "guest",
        createdByUserId: null,
        customerName: guestName.trim(),
        customerType: "guest",
        dateKey,
        durationHours,
        endAt: Timestamp.fromDate(endAt),
        guestEmail: guestEmail.trim() || null,
        guestName: guestName.trim(),
        guestNotes: guestNotes.trim() || null,
        guestPhone: guestPhone.replace(/\D/g, ""),
        isGuest: true,
        notes: null,
        startAt: Timestamp.fromDate(startAt),
        status: "active",
        userId: null,
      });

      setBookingComplete(true);

      setBookings((prev) => [
        ...prev,
        {
          bayId,
          startAt,
          endAt,
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessage("Booking failed. Please call or text 712-369-0507.");
    } finally {
      setSaving(false);
    }
  }

  
    if (bookingComplete) {
    return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border bg-green-50 p-10 shadow-sm">
          <h1 className="mb-6 text-4xl font-bold text-green-700">
            Tee Time Confirmed
          </h1>

          <div className="space-y-3 text-lg">
            <p>
              <strong>Name:</strong> {guestName}
            </p>

            <p>
              <strong>Bay:</strong> {bayId === "bay1" ? "Bay 1" : "Bay 2"}
            </p>

            <p>
              <strong>Date:</strong> {dateKey}
            </p>

            <p>
              <strong>Start Time:</strong>{" "}
              {new Date(2026, 0, 1, startHour).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>

            <p>
              <strong>Duration:</strong> {durationHours} hour
              {durationHours > 1 ? "s" : ""}
            </p>
          </div>

          <div className="mt-8 border-t pt-6">
            <p className="font-semibold">Questions?</p>
            <p>712-369-0507</p>
            <p>ryan@clubbirdie.golf</p>
          </div>
        </div>
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-red-700">Book Tee Time</h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
          Book a guest tee time online. Guests may reserve Bay 1 or Bay 2 from
          10:00 AM through 9:00 PM, up to 7 days in advance.
        </p>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Choose Your Tee Time</h2>

            <label className="mb-2 block font-semibold">Date</label>
            <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {dateOptions.map((date) => (
                <button
                  key={date.value}
                  type="button"
                  onClick={() => setDateKey(date.value)}
                  className={`rounded-xl border-2 p-3 text-sm font-semibold transition ${
                    dateKey === date.value
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-gray-300 bg-white text-black hover:border-red-400"
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>

            <label className="mb-2 block font-semibold">Bay</label>
            <div className="mb-5 grid grid-cols-2 gap-3">
              {bays.map((bay) => (
                <button
                  key={bay.id}
                  type="button"
                  onClick={() => setBayId(bay.id)}
                  className={`rounded-xl border-2 p-4 font-semibold transition ${
                    bayId === bay.id
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-gray-300 bg-white text-black hover:border-red-400"
                  }`}
                >
                  {bay.name}
                </button>
              ))}
            </div>

            <label className="mb-2 block font-semibold">Duration</label>
            <div className="mb-5 grid grid-cols-3 gap-3">
              {durations.map((duration) => (
                <button
                  key={duration}
                  type="button"
                  onClick={() => setDurationHours(duration)}
                  className={`rounded-xl border-2 p-3 text-sm font-semibold transition ${
                    durationHours === duration
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-gray-300 bg-white text-black hover:border-red-400"
                  }`}
                >
                  {duration} hour{duration > 1 ? "s" : ""}
                </button>
              ))}
            </div>

            <label className="mb-2 block font-semibold">Start Time</label>
            <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {availableHours.map((hour) => (
                <button
                  key={hour}
                  type="button"
                  onClick={() => setStartHour(hour)}
                  className={`rounded-xl border-2 p-3 text-sm font-semibold transition ${
                    startHour === hour
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-gray-300 bg-white text-black hover:border-red-400"
                  }`}
                >
                  {new Date(2026, 0, 1, hour).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </button>
              ))}
            </div>

            {loading && <p className="text-slate-600">Loading tee times...</p>}

            {!loading && availableHours.length === 0 && (
              <p className="font-semibold text-red-700">
                No available times for this bay and duration.
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Your Information</h2>

            <label className="mb-2 block font-semibold">Name</label>
            <input
  value={guestName}
  onChange={(e) => setGuestName(e.target.value)}
  className={`mb-5 w-full rounded-lg border p-3 ${
    submitted && !guestName.trim()
      ? "border-red-500 bg-red-50"
      : ""
  }`}
/>

            <label className="mb-2 block font-semibold">Phone</label>
            <input
  value={guestPhone}
  onChange={(e) => setGuestPhone(formatPhoneNumber(e.target.value))}
  className={`mb-5 w-full rounded-lg border p-3 ${
    submitted && !guestPhone.trim()
      ? "border-red-500 bg-red-50"
      : ""
  }`}
/>

            <label className="mb-2 block font-semibold">Email</label>
            <input
  value={guestEmail}
  onChange={(e) => setGuestEmail(e.target.value)}
  className={`mb-5 w-full rounded-lg border p-3 ${
    submitted && !guestEmail.trim()
      ? "border-red-500 bg-red-50"
      : ""
  }`}
/>

            <label className="mb-2 block font-semibold">Notes</label>
            <textarea
              value={guestNotes}
              onChange={(e) => setGuestNotes(e.target.value)}
              className="mb-6 min-h-28 w-full rounded-lg border p-3"
            />

            <div className={`mb-6 flex items-start gap-3 rounded-lg border p-3 text-sm font-semibold ${
              submitted && !agreedToPolicies
                ? "border-red-500 bg-red-50 text-red-700"
                : "border-slate-200 bg-white text-slate-900"
            }`}>
              <input
                id="agreeToPolicies"
                type="checkbox"
                checked={agreedToPolicies}
                onChange={(e) => setAgreedToPolicies(e.target.checked)}
                className="mt-1 h-4 w-4"
              />

              <div>
                <label htmlFor="agreeToPolicies" className="cursor-pointer">
                  I agree to{" "}
                </label>

                <button
                  type="button"
                  onClick={() => setShowPolicies(true)}
                  className="cursor-pointer border-0 bg-transparent p-0 font-semibold text-red-700 underline hover:text-red-800"
                >
                  Club Birdie Policies
                </button>
              </div>
            </div>

            <button
              onClick={submitBooking}
              disabled={saving || loading || availableHours.length === 0}
              className="w-full rounded-xl bg-red-700 px-8 py-4 font-semibold text-white hover:bg-red-800 disabled:bg-slate-400"
            >
              {saving ? "Booking..." : "Book Tee Time"}
            </button>

            {message && (
              <p className="mt-5 font-semibold text-slate-800">{message}</p>
            )}
          </div>
        </div>
      </div>

        {showPolicies && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
              <button
                type="button"
                onClick={() => setShowPolicies(false)}
                className="absolute right-5 top-4 text-3xl font-bold text-slate-600 hover:text-red-700"
                aria-label="Close policies"
              >
                ×
              </button>

              <h2 className="mb-4 pr-10 text-3xl font-bold text-red-700">
                Club Birdie Policies
              </h2>

              <div className="space-y-5 text-slate-700">
                <section>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Booking & Cancellation Policy
                  </h3>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Tee times are subject to availability.</li>
                    <li>Guests may book Bay 1 or Bay 2 for 1, 2, or 3 hours.</li>
                    <li>Reservations may be cancelled up to 24 hours before the scheduled tee time.</li>
                    <li>No-shows may be charged the full booking amount.</li>
                    <li>Club Birdie reserves the right to cancel or adjust reservations due to maintenance, weather, technical issues, or unforeseen circumstances.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Facility Rules
                  </h3>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Please respect the simulators, hitting bays, equipment, furniture, and facility.</li>
                    <li>Guests are responsible for damage caused by misuse, negligence, or failure to follow posted rules.</li>
                    <li>Only one person should swing in a bay at a time.</li>
                    <li>Children must be supervised by an adult.</li>
                    <li>Club Birdie may refuse service or remove guests who act unsafely or disrespectfully.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Liability
                  </h3>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Golf activities involve inherent risk, including injury from clubs, balls, equipment, or other participants.</li>
                    <li>By booking a tee time, guests assume responsibility for their own safety and the safety of anyone in their group.</li>
                    <li>Club Birdie is not responsible for lost, stolen, or damaged personal property.</li>
                    <li>Guests agree to use the facility and equipment in a safe and responsible manner.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Privacy Policy
                  </h3>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Information submitted through the website is used for reservations and communication related to bookings.</li>
                    <li>Club Birdie does not sell guest booking information.</li>
                    <li>Guests may be contacted by phone, text, or email regarding their reservation.</li>
                  </ul>
                </section>
              </div>

              <button
                type="button"
                onClick={() => setShowPolicies(false)}
                className="mt-6 w-full rounded-xl bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800"
              >
                Close Policies
              </button>
            </div>
          </div>
        )}
    </main>
  );
}