export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow ring-1 ring-gray-200 text-center mt-24">
      <h1 className="text-3xl font-extrabold text-gray-900">
        Thank you!
      </h1>

      <p className="mt-3 text-gray-600">
        We received your message. A TruePath Advocate will reach out within 1 business day.
      </p>

      <a
        href="/#contact"
        className="mt-6 inline-block rounded-2xl bg-gray-900 px-5 py-3 text-white shadow hover:-translate-y-0.5 transition"
      >
        Back to Contact Form
      </a>
    </div>
  );
}
