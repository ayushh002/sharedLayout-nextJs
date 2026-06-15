export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Welcome to Platinum RX
        </h1>
        <div className="h-1 w-16 bg-orange-500 mt-3 rounded-full"></div>
      </div>
      <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-100 shadow-sm">
        <p className="text-gray-700 text-lg leading-relaxed">
          Select any option from the left sidebar. The URL will change to{" "}
          <code className="bg-gray-100 px-1 rounded">/dashboard</code> or{" "}
          <code className="bg-gray-100 px-1 rounded">/messages/inbox</code>. Try
          refreshing the page – you’ll stay on the same view.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <span className="font-medium text-orange-600">✨ Hover highlight</span>
          <p className="mt-1">Any sidebar item turns light orange on hover</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <span className="font-medium text-orange-600">📂 Dynamic routing</span>
          <p className="mt-1">Click main option → second sidebar appears and URL updates</p>
        </div>
      </div>
    </div>
  );
}