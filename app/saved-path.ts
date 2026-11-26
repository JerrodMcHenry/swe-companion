// The learner's last selected employer and role, kept only in this browser (no account).
const KEY = "swe-apprenticeship-path";

export type SavedPath = { target: string; role: string };

export function readSavedPath(): SavedPath | null {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? "null");
    return value && typeof value.target === "string" && typeof value.role === "string" ? value : null;
  } catch {
    return null;
  }
}

export function writeSavedPath(path: SavedPath) {
  try {
    localStorage.setItem(KEY, JSON.stringify(path));
  } catch {
    // Storage can be unavailable (private browsing); the app works without it.
  }
}
