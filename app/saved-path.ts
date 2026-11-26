// The learner's last selected employer and role, kept only in this browser (no account).
import { roleCards, targetCards } from "./targets";

const KEY = "swe-apprenticeship-path";

export type SavedPath = { target: string; role: string };

export function readSavedPath(): SavedPath | null {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? "null");
    // A selection that no longer matches a published employer and role is ignored, never followed.
    return value && Object.hasOwn(targetCards, value.target) && Object.hasOwn(roleCards, value.role) ? value : null;
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
