import ApplicationLayout from "~/components/ApplicationLayout";

export default function Index() {
  return (
    <ApplicationLayout activeModule="api">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </ApplicationLayout>
  );
}
