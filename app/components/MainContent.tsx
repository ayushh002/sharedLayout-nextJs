// app/components/MainContent.tsx
"use client";

interface MainContentProps {
  selectedPrimary: string | null;
  selectedSubItem: string | null;
}

export default function MainContent({
  selectedPrimary,
  selectedSubItem,
}: MainContentProps) {
  const getContent = () => {
    if (!selectedPrimary) {
      return {
        title: "Welcome to Platinum RX",
        description:
          "Select any option from the left sidebar to open the secondary panel. Hover over any menu item to see the orange highlight effect.",
        details:
          "🎯 This demo showcases: primary sidebar, secondary sidebar that opens on click, hover highlights (white/orange theme), and dynamic content.",
      };
    }

    const primaryLabel =
      {
        dashboard: "Dashboard",
        messages: "Messages",
        analytics: "Analytics",
        tasks: "Tasks",
        settings: "Settings",
      }[selectedPrimary] || selectedPrimary;

    const subSection = selectedSubItem
      ? ` / ${selectedSubItem}`
      : " — no sub-item selected";

    return {
      title: `${primaryLabel}${subSection}`,
      description: `You are viewing the ${primaryLabel} section.`,
      details: `This area displays real-time content based on your selection. ${
        selectedSubItem
          ? `Currently showing: ${selectedSubItem} view.`
          : "Click any item from the secondary sidebar to see more details."
      }`,
    };
  };

  const { title, description, details } = getContent();

  return (
    <main className="flex-1 bg-white overflow-y-auto">
      <div className="max-w-4xl mx-auto py-10 px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            {title}
          </h1>
          <div className="h-1 w-16 bg-orange-500 mt-3 rounded-full"></div>
        </div>

        <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-100 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
          <div className="mt-6 pt-4 border-t border-orange-100 text-gray-500">
            <p className="text-sm">{details}</p>
          </div>
        </div>

        {!selectedPrimary && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="font-medium text-orange-600">✨ Hover highlight</span>
              <p className="mt-1">Any sidebar item turns light orange on hover</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="font-medium text-orange-600">📂 Dynamic sidebar</span>
              <p className="mt-1">Click main option → second sidebar appears</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}