import type { Metadata } from "next";
import TargetPicker from "../target-picker";
import { pickerCompanies, pickerEmployerTypes, pickerRoles } from "../picker-data";

export const metadata: Metadata = { title: "My Apprenticeship" };

export default function ApprenticeshipPage() {
  return (
    <>
      <div className="narrow">
        <div className="eyebrow">My Apprenticeship</div>
        <h1 className="title" style={{ marginTop: 10 }}>
          Choose your target
        </h1>
        <p className="lead">Pick the employer and role you are preparing for. Your apprenticeship adapts to them; you can change them at any time.</p>
      </div>
      <TargetPicker companies={pickerCompanies} employerTypes={pickerEmployerTypes} roles={pickerRoles} />
    </>
  );
}
