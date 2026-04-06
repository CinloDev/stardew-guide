import fs from "fs";
import path from "path";

const filesToUpdate = [
  "src/data/villagers.json",
  "src/app/page.tsx",
  "src/features/calendar/components/CalendarDay.tsx",
  "src/features/calendar/components/CalendarEventModal.tsx"
];

const workspaceRoot = process.cwd();

for (const relPath of filesToUpdate) {
  const absolutePath = path.join(workspaceRoot, relPath);
  let content = fs.readFileSync(absolutePath, "utf-8");
  
  // Replace all occurrences
  content = content.replace(/\/images\/villagers\//g, "/images/items/");
  content = content.replace(/\/images\/events\//g, "/images/items/");
  
  fs.writeFileSync(absolutePath, content, "utf-8");
  console.log(`Updated paths in ${relPath}`);
}
