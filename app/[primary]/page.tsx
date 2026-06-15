interface PrimaryPageProps {
  params: Promise<{ primary: string }>;
}

export default async function PrimaryPage({ params }: PrimaryPageProps) {
  const { primary } = await params;
  const primaryLabel = primary.charAt(0).toUpperCase() + primary.slice(1);

  return (
    <div className="max-w-4xl mx-auto py-10 px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          {primaryLabel}
        </h1>
        <div className="h-1 w-16 bg-orange-500 mt-3 rounded-full"></div>
      </div>
      <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-100 shadow-sm">
        <p className="text-gray-700 text-lg leading-relaxed">
          You are viewing the <strong>{primaryLabel}</strong> section.
        </p>
        <p className="mt-4 text-gray-500">
          Click any item from the secondary sidebar to see detailed content and a
          more specific URL (e.g., <code>/{primary}/selectedSubItem</code>).
        </p>
      </div>
    </div>
  );
}