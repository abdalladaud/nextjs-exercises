import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export default function StreamingPage() {
  return (
    <div>
      <h1>Streaming Exercise</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}