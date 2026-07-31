type SettingsDrawerProps = {
  open: boolean;
};

function SettingsDrawer({ open }: SettingsDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <aside
      className="
        fixed
        top-16
        right-0
        w-50
        m-5
        rounded-lg 
        shadow-md
        h-150
        bg-background
        border
        border-selection
        p-6
      "
    >
      <h2 className="text-xl font-bold text-primary">Settings</h2>

      <hr className="my-4 " />

      <section className="mb-8">
        <h3 className="mb-4 text-pink font-semibold">Algorithm</h3>

        <p className="text-muted">Speed</p>

        <p className="text-muted">Array Size</p>
      </section>

      <section>
        <h3 className="mb-4 text-pink font-semibold">Appearance</h3>
        <p>Funtionality soon</p>

        <p className="text-muted">Theme</p>

        <p className="text-muted">Show Values</p>
      </section>
    </aside>
  );
}

export default SettingsDrawer;
