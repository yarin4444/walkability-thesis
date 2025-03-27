import { ArrowDown } from "lucide-react";

export default function WalkabilityFlow() {
  const steps = [
    {
      title: "Participant Walking Experiment",
      icon: "🚶",
      description: "A person walks along a real or simulated urban path."
    },
    {
      title: "Wearable Sensing System",
      icon: "📡",
      description: "IMU (motion), GPS, GSR (skin stress), HRV (heart rate variability), body temperature sensors."
    },
    {
      title: "Data Collection & Tagging",
      icon: "📋",
      description: "Collects timestamp, location, physiological readings, and optionally user-reported comfort."
    },
    {
      title: "Motion Analysis",
      icon: "📈",
      description: "Analyzes speed, stride, acceleration, balance, and walking patterns."
    },
    {
      title: "Physiological Stress Analysis",
      icon: "💓",
      description: "Extracts HRV metrics (RMSSD, slope), GSR spikes, stress level indicators."
    },
    {
      title: "Environmental Context Mapping",
      icon: "🗺️",
      description: "Correlates data with GIS layers: heat zones, noise, infrastructure quality."
    },
    {
      title: "Advanced Analytics",
      icon: "🧠",
      description: "Applies models: Logit for route choice, Drift-Diffusion for decisions, Mixed Effects for variation."
    },
    {
      title: "Personalized Walkability Score",
      icon: "📊",
      description: "Combines physical, physiological, and environmental indicators into a custom walkability map."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <h1 className="text-2xl font-bold text-center">
        Experimental System Diagram – \"Walkability: Sense and Analyze\"
      </h1>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-[320px] bg-white rounded-2xl border border-blue-300 shadow-xl p-4 text-center">
            <div className="text-3xl mb-2">{step.icon}</div>
            <h2 className="font-semibold text-lg mb-1">{step.title}</h2>
            <p className="text-sm text-gray-700">{step.description}</p>
          </div>
          {index < steps.length - 1 && <ArrowDown className="my-4 text-blue-400" />}
        </div>
      ))}
    </div>
  );
}