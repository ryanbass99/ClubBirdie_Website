const sections = [
  {
    title: "Simulator",
    questions: [
      {
        q: "What launch monitor do you use?",
        a: "We use the Uneekor QED Refine launch monitor.",
      },
      {
        q: "How accurate is the monitor?",
        a: "The QED Refine is extremely accurate and provides instant feedback on both good shots and bad shots.",
      },
      {
        q: "What data is measured?",
        a: "Ball speed, ball spin, launch angle, angle of descent, flight time, club speed, smash factor, club path, club face angle, overhead impact view, and more.",
      },
      {
        q: "Can I just practice and not play a course?",
        a: "Absolutely. You can use the range, swing video, putting practice, and short game practice areas.",
      },
      {
        q: "How long does it take to play 18 holes?",
        a: "We recommend one hour for one golfer, two hours for two golfers, and three hours for three to four golfers.",
      },
    ],
  },
  {
    title: "Membership",
    questions: [
      {
        q: "What are the benefits of being a member?",
        a: "Members get 24/7/365 simulator access, seven-day advance booking, and the ability to play in winter leagues.",
      },
      {
        q: "Why are memberships limited?",
        a: "Memberships are limited so members and guests still have available tee times.",
      },
      {
        q: "Is it a yearly membership?",
        a: "No. Memberships are month to month. You can cancel anytime by notifying us 7 days before your monthly renewal.",
      },
      {
        q: "Are summer rates the same?",
        a: "No. April 1 through September 30 rates are cheaper. Contact us to see what rate you qualify for.",
      },
      {
        q: "Can members bring non-members?",
        a: "Yes. Please notify us first. We will charge your card on file $20 for any golfers you bring with you.",
      },
      {
        q: "Who is included on a family membership?",
        a: "A family membership includes parents or guardians and all children under 18 or still in high school.",
      },
      {
        q: "What is the minimum age for a single membership?",
        a: "Single members must be at least 16 years old.",
      },
      {
        q: "Can I bring my underage children with a single membership?",
        a: "Yes. Youth ages 0-15 can accompany their parent or guardian at no extra cost. The member must be with them at all times.",
      },
      {
        q: "How many days in advance can I reserve a tee time?",
        a: "Members can reserve a bay seven days in advance.",
      },
    ],
  },
  {
    title: "Guest Pricing",
    questions: [
      {
        q: "How many golfers can use a bay at once?",
        a: "We recommend up to four golfers per bay.",
      },
      {
        q: "Is it $35 per golfer per hour?",
        a: "No. It is $35 per hour per bay. If four golfers reserve a bay for three hours, it is $105 total.",
      },
      {
        q: "Am I guaranteed to finish 18 holes?",
        a: "No. Once your reserved time is up, you must stop where you are unless the bay is available and you extend your time.",
      },
      {
        q: "Why are tee times greyed out?",
        a: "That means both simulators are already reserved or you are trying to book too far in advance. Reservations can be made seven days ahead.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-5xl font-bold">Frequently Asked Questions</h1>

        <p className="mb-12 max-w-3xl text-lg text-slate-600">
          Find answers about the simulator, memberships, guest pricing, and tee
          time reservations.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-5 text-3xl font-bold">{section.title}</h2>

              <div className="space-y-4">
                {section.questions.map((item) => (
                  <details
                    key={item.q}
                    className="rounded-2xl border bg-white p-6 shadow-sm"
                  >
                    <summary className="cursor-pointer text-lg font-semibold">
                      {item.q}
                    </summary>

                    <p className="mt-4 text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}