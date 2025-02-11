import React from "react";

function About() {
  return (
    <section className="p-10 text-center bg-gray-800">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-3">I am a passionate full-stack developer with experience in modern web technologies.</p>
    </section>
  );
}

export default About;


// az ad sp create-for-rbac --name "demo-test-v2" --role contributor --scopes /subscriptions/c8a714bf-4d3e-4840-bdda-3724531bd469/resourceGroups/demo-test-v2/providers/Microsoft.Web/sites/demo-test-v2 --json-auth