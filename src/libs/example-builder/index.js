import React from "react";

const StepOne = () => (
  <div>
    <h3>Install the Stripe.net library</h3>
    <p>
      Install the package with dotnet or NuGet. Alternatively, if you are
      starting from scratch and need a .csproj file, download the files using
      the Download link in the code editor.
    </p>
    <pre>
      <code>npm i @toruslabs/torus-direct-web-sdk</code>
    </pre>
  </div>
);

export default function buildExample() {
  return (
    <div>
      <StepOne />
    </div>
  );
}
