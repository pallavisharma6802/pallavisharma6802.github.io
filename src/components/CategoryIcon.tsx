export const categoryGradients: Record<string, string> = {
  "Agents & RAG": "linear-gradient(135deg, #d98ca0, #a85a74)",
  "LLM Evaluation": "linear-gradient(135deg, #b08a9e, #7a5a70)",
  "Healthcare ML": "linear-gradient(135deg, #8fac97, #5c7a68)",
  "Forecasting & MLOps": "linear-gradient(135deg, #d9a855, #ab7a3a)",
  "Inference & Infra": "linear-gradient(135deg, #9aa0b0, #666c80)",
};

const paths: Record<string, React.ReactNode> = {
  "Agents & RAG": (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 7.5 10.5 16M16 7.5 13.5 16M8.5 6h7" strokeLinecap="round" />
    </>
  ),
  "LLM Evaluation": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3M8 10.5l1.8 1.8L13.5 8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "Healthcare ML": (
    <path
      d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 5.5 5.5 5.5 0 0 1 21.5 11c-2.5 4.6-9.5 9-9.5 9ZM4 12h3l1.5-3L10 15l2-5 1.5 2H20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Forecasting & MLOps": <path d="M3 18 9 11l4 4 8-9M15 6h6v6" strokeLinecap="round" strokeLinejoin="round" />,
  "Inference & Infra": (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function CategoryIcon({ category, className }: { category: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="white" strokeWidth="1.6">
      {paths[category]}
    </svg>
  );
}
