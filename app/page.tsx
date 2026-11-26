import TargetPicker from "./target-picker";
import { pickerCompanies, pickerEmployerTypes, pickerRoles } from "./picker-data";

export default function HomePage() {
  return (
    <>
      <div className="narrow">
        <div className="eyebrow">Your software engineering apprenticeship</div>
        <h1 className="title" style={{ marginTop: 10 }}>
          Stop searching. Start learning.
          <br />
          Get hired.
        </h1>
        <p className="lead">
          Choose where you want to work and your role. You get one clear learning path for that target — what to study, in what order, how
          deeply, and when you are ready.
        </p>
      </div>
      <TargetPicker companies={pickerCompanies} employerTypes={pickerEmployerTypes} roles={pickerRoles} />
    </>
  );
}
