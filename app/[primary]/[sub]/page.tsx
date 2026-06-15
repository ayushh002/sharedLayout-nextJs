interface SubPageProps {
  params: Promise<{ primary: string; sub: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SubPage({ params, searchParams }: SubPageProps) {
  const { primary, sub } = await params;
  const query = await searchParams;

  const primaryLabel = primary.charAt(0).toUpperCase() + primary.slice(1);
  const subLabel = sub.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto py-10 px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          {primaryLabel} / {subLabel}
        </h1>
        <div className="h-1 w-16 bg-orange-500 mt-3 rounded-full"></div>
      </div>
      <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-100 shadow-sm">
        <p className="text-gray-700 text-lg leading-relaxed">
          You are viewing <strong>{subLabel}</strong> inside <strong>{primaryLabel}</strong>.
        </p>
        {Object.keys(query).length > 0 && (
          <pre className="mt-4 p-2 bg-gray-100 text-xs rounded">
            Query params: {JSON.stringify(query, null, 2)}
          </pre>
        )}
        <div id="read-here" className="mt-6 p-4 bg-orange-100 rounded-lg border border-orange-200">
          📍 This is the <code>#read-here</code> target. If you visit <code>/{primary}/{sub}#read-here</code>,
          the browser will scroll to this element automatically.
        </div>
      </div>
    </div>
  );
}