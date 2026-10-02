export default async function SlowComponent() {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  return (
    <div>
      <h2>Slow Content Loaded!</h2>

      <p>
        This component took 3 seconds to load.
      </p>
    </div>
  );
}