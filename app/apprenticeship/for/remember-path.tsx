"use client";

import { useEffect } from "react";
import { writeSavedPath } from "../../saved-path";

// Remembers the apprenticeship the learner opened, so My Apprenticeship reopens it next time.
export default function RememberPath({ target, role }: { target: string; role: string }) {
  useEffect(() => writeSavedPath({ target, role }), [target, role]);
  return null;
}
