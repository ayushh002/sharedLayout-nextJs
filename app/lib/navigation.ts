export const PRIMARY_ITEMS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "messages", label: "Messages" },
  { id: "analytics", label: "Analytics" },
  { id: "tasks", label: "Tasks" },
  { id: "settings", label: "Settings" },
];

export const SECONDARY_ITEMS_MAP: Record<string, string[]> = {
  dashboard: ["Overview", "Analytics Hub", "Revenue Streams", "Team Pulse"],
  messages: ["Inbox", "Sent", "Drafts", "Archived"],
  analytics: ["Reports", "Charts & Metrics", "Conversion Funnel", "Export Data"],
  tasks: ["My Tasks", "Assigned to me", "Completed", "Calendar View"],
  settings: ["Profile", "Security", "Notifications", "Billing & API"],
};