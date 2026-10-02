export const dynamic = "force-dynamic";

export default function TimePage() {
  const currentTime =
    new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Current Time</h1>

      <p>{currentTime}</p>
    </div>
  );
}