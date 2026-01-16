frontend/package.json
{
  "name": "ai-dashboard",
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "recharts": "^2.8.0"
  }
}

frontend/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">AI Business Assistant</h1>
      <Link href="/dashboard" className="text-blue-500">
        Go to Dashboard →
      </Link>
    </main>
  );
}


frontend/app/dashboard/page.tsx
"use client";
import Chart from "../components/Chart";
import VoiceButton from "../components/VoiceButton";

export default function Dashboard() {
  return (
    <div className="p-8 grid gap-6">
      <h2 className="text-2xl font-semibold">Business Insights</h2>
      <Chart />
      <VoiceButton />
    </div>
  );
}


frontend/components/Chart.tsx
import { LineChart, Line, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", sales: 200 },
  { day: "Tue", sales: 400 },
  { day: "Wed", sales: 300 },
];

export default function Chart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Line dataKey="sales" />
    </LineChart>
  );
}


frontend/components/VoiceButton.tsx
"use client";

export default function VoiceButton() {
  const startListening = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.onresult = (e: any) => {
      alert("You said: " + e.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <button
      onClick={startListening}
      className="bg-black text-white px-4 py-2 rounded"
    >
      🎤 Voice Command
    </button>
  );
}


Run Frontend
cd frontend
npm install
npm run dev
