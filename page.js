export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white">

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Sofia DiFede
        </h1>

        <p className="text-gray-600">
          Tampa, FL • sofia.difede@gmail.com • (732) 580-0995
        </p>

        <p className="mt-4">
          Motivated finance and business analytics student with a strong interest in financial analysis, business strategy, and leveraging data to drive informed decision-making and organizational success.
        </p>
      </header>

      <section className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Education
        </h2>

        <h3 className="font-bold">
          University of South Florida
        </h3>

        <p>
          Bachelor of Science in Finance
          Bachelor of Science in Business Analytics and Information Systems
        </p>

        <p className="text-gray-500">
          Expected Graduation: 2027
        </p>
      </section>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Experience
        </h2>

        <div className="mb-5">
          <h3 className="font-bold">
            Summer Analyst
          </h3>

          <p>Citibank</p>

          <ul className="list-disc ml-6 mt-2">
            <li>Worked within the Chief Operating Office in the Enterprise Operations division.</li>
            <li>Collaborated across COO teams.</li>
            <li>Analyzed sourcing, procurement, and third-party management processes.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">
            Server Assistant
          </h3>

          <p>Three Oaks Hospitality- 1983</p>

          <ul className="list-disc ml-6 mt-2">
            <li>Provided customer service.</li>
            <li>Managed reservations and party needs at the table.</li>
            <li>Organized server station and hostess stand to ensure efficient and smooth operations.</li>
          </ul>
        </div>
      </section>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 px-3 py-1 rounded">
            Microsoft Excel
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded">
            PowerPoint
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded">
            Tableau
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded">
            Microsoft Office
          </span>

        </div>
      </section>

      <footer className="text-center mt-10 text-gray-500">
        © 2026 Sofia DiFede
      </footer>

    </main>
  );
}
