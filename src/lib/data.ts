import { Experience, Project, SkillGroup } from "./types";

export const profile = {
  name: "Pallavi Sharma",
  roleGeneral: "ML Engineer building agentic systems that know when they're wrong",
  roleHealthcare: "ML Engineer building clinical AI that clinicians can actually trust",
  credential: "MS Data Science, University of Wisconsin–Madison — 2026",
  email: "pallavi6802@gmail.com",
  linkedin: "https://www.linkedin.com/in/pallavisharma6802/",
  github: "https://github.com/pallavisharma6802",
  location: "Madison, WI",
};

export const narrative = {
  general: {
    kicker: "Verification · Agents · LLM Safety",
    hook: "I build agentic and LLM systems, with a focus on evaluation, verification, and failure modes.",
    body:
      "Current work spans multi-agent pipelines (LangGraph, CRAG, Self-RAG), hallucination and manipulation-resistance research, and inference infrastructure. Most of it is empirical: build the system, red-team or benchmark it, fix what the numbers show is actually broken.",
  },
  healthcare: {
    kicker: "Clinical ML · Verification · HIPAA-Compliant Infrastructure",
    hook: "I build ML systems for clinical and biomedical settings — imaging, survival modeling, and clinical-trial data pipelines.",
    body:
      "Current work: fine-tuning vision-language models on quantitative phase imaging to identify cancer biomarkers, and prior work on survival modeling validated across six hospital systems, HIPAA-compliant ETL over terabyte-scale clinical data, and evaluation designed to separate real biological signal from acquisition noise.",
  },
};

export const research = {
  title: "Graduate Research — Prof. Fred Sala, UW–Madison",
  body:
    "Modeling how patient preferences evolve over time so LLM-based care systems can adapt proactively instead of reacting after the fact. Linear-probed transformer layers to locate where preference is encoded, then red-teamed the resulting reward model with directed adversarial search — cutting its apparent 94.8% discrimination accuracy down to a 53.3% attack-success rate. That gap is the finding: a model can look well-calibrated and still be exploitable. Targeting academic publication.",
  safety:
    "WAISI Technical AI Safety Fundamentals Fellow (Feb 2026). The research question underneath this work is an alignment question: when should a system hold firm on what a user said, versus treat it as a transient, fear-driven artifact of the moment?",
};

export const experience: Experience[] = [
  {
    role: "Machine Learning Engineer",
    org: "UW–Madison School of Medicine and Public Health, Dept. of Anesthesiology",
    location: "Madison, WI",
    dates: "Sep 2026 — Present",
    lens: "healthcare",
    bullets: [
      "Fine-tune vision-language models on large-scale quantitative phase imaging (QPI) data to identify skin biomarkers of systemic cancer for early detection.",
      "Recast the task from single-label classification to comparison across three-image sets, to learn similarities and differences rather than a single noisy label.",
      "Built cell-free background controls to reject optical and capture artifacts and prevent shortcut learning.",
      "Designed evaluation around the same comparison setup and artifact controls, to separate biological signal from acquisition noise.",
    ],
  },
  {
    role: "Graduate Researcher",
    org: "UW–Madison Dept. of Computer Sciences — Prof. Fred Sala",
    location: "Madison, WI",
    dates: "Nov 2025 — May 2026",
    lens: "both",
    bullets: [
      "Developed preference adaptation for Meditron-7B that forecasts a patient's next preference from visit history and adapts before drift occurs rather than after; targeting academic publication.",
      "Ruled out per-patient fine-tuning (too costly at inference; preferences drift continuously) and REINFORCE (high compute, weak gains); moved to inference-time adaptation instead.",
      "Located where preference is encoded with linear probes (LinearSVC, stratified 5-fold CV) across 33 transformer layers; attached a forecasting head to the selected layers.",
      "Tuned two activation-steering strategies between no effect and output degradation; best moved outputs 0.0236 closer to target.",
    ],
  },
  {
    role: "Software Developer (started as Help Desk Agent)",
    org: "UW–Madison Division of Information Technology (DoIT)",
    location: "Madison, WI",
    dates: "Oct 2025 — May 2026",
    lens: "general",
    bullets: [
      "Started on the Help Desk answering tickets directly; moved into the Software Developer role in Oct 2025 and built the agent that automates that same job — a LangGraph assistant over 392 knowledge base articles (ChromaDB, NetworkX), live in production.",
      "Raised Recall@3 from 89.9% (semantic baseline) to 95.4% (104/109 queries) using deterministic routing with citation grounding.",
      "Llama 3.1 8B classifies, Llama 3.3 70B generates; Langfuse traces cost, latency, and routing per step (first token under 2s, ~$0.003/session).",
      "Maintained internal Help Desk applications in React, Node.js, PHP, and MySQL with code review and CI/CD.",
    ],
  },
  {
    role: "Machine Learning Research Intern",
    org: "UW–Madison School of Medicine and Public Health — IDiA Lab (PI Dr. Pallavi Tiwari)",
    location: "Madison, WI",
    dates: "Oct 2024 — Oct 2025",
    lens: "healthcare",
    bullets: [
      "Raised concordance index from 0.74 to 0.82 by replacing CoxNet with DeepHit (PyTorch); validated across 6 hospital sites with Kaplan-Meier and log-rank tests.",
      "Extracted PyRadiomics features from DICOM imaging and applied LASSO selection across 20 clinical features.",
      "Built HIPAA-compliant ETL pipelines over terabyte-scale clinical data from 6 hospital systems, with harmonization, age normalization, and full per-record lineage via Globus and Research Drive.",
    ],
  },
  {
    role: "Data Scientist",
    org: "SCL IT Technologies Pvt Ltd (clinical trials, unpaid)",
    location: "Hyderabad, India",
    dates: "Aug 2023 — Aug 2024",
    lens: "healthcare",
    bullets: [
      "Engineered end-to-end ML data pipelines in Apache Airflow, automating daily ingestion of clinical trial metrics from AWS S3 and Medidata Rave EDC.",
      "Tuned LightGBM and Random Forest models to forecast patient dropout risk and screen failures (0.79 C-index).",
      "Built distributed NLP pipelines with PySpark and Spark NLP to parse unstructured EHR data into regulatory-compliant variables mapped to Veeva Vault, cutting harmonization time-to-insight 75%.",
      "Designed an ML-driven anomaly detection framework (XGBoost, unsupervised clustering) that caught 94% of complex rule violations before Pinnacle 21 compliance audits.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Persistent Systems (parallel internship, remote)",
    location: "Bengaluru, India",
    dates: "Jan 2024 — Apr 2024",
    lens: "general",
    bullets: [
      "Architected production-ready CLV and churn models on a large-scale automotive/insurance portfolio with Apache Spark and Databricks; fine-tuned DistilBERT for sentiment, improving recall from 0.61 to 0.86.",
      "Cut inference latency 40% via batch inference and AWS S3 caching; delivered predictions through a React/Next.js frontend backed by a FastAPI microservice.",
      "Audited data across 4 SQL databases with automated validation scripts; tracked experiment lifecycles in MLflow and ran A/B tests across 3 competing pipelines.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "multi-cloud-agent",
    title: "Agentic Multi-Cloud Ticket Resolution",
    blurb:
      "A cyclic LangGraph of six agents — intent/priority classification, CRAG document grading, a Self-RAG faithfulness critic, and a Continuation Agent that replaces every fixed retry-cap/threshold with a reasoned rewrite/proceed/escalate decision. Rebuilt from an earlier keyword-heuristic version specifically to make that change measurable, not asserted — runs against a real, labeled IT/SaaS domain pack with a from-scratch eval harness and a BigQuery + Grafana analytics layer, swappable to new domains via config.",
    metrics: ["Migrated Ollama→Bedrock: 44s → 1.5s latency", "Full eval harness, not just an assertion of ‘agentic’", "Runs free on a laptop via Docker Compose"],
    stack: ["LangGraph", "AWS Bedrock", "Azure Text Analytics", "Pinecone + BM25", "BigQuery", "Grafana", "Terraform", "Next.js"],
    repoUrl: "https://github.com/pallavisharma6802/Multi-Cloud-AI-Agent-for-Ticket-Resolution",
    lens: "general",
    featured: true,
  },
  {
    slug: "trust-under-pressure",
    title: "Trust Under Pressure: Manipulation Resistance in LLM Agents",
    blurb:
      "8 empirical studies of tool-calling and multi-agent systems across 4 models — tool-vs-memory override, jailbreak framing, compounding pressure, peer-channel propagation, multilingual refusal, firewall layering — scored deterministically with Wilson confidence intervals, no LLM judge.",
    metrics: ["Majority-vote defense: 33% → 61% attack success once attacker controls peer channels", "Translation bypass: ~0% → 75% compliance"],
    stack: ["Groq API", "gpt-oss-120b/20b", "Qwen3", "Deterministic scoring", "Wilson CIs"],
    repoUrl: "https://github.com/pallavisharma6802/Trust-Under-Pressure-Manipulation-Resistance-in-LLM-Agents",
    lens: "general",
    featured: true,
  },
  {
    slug: "procedural-intelligence",
    title: "Procedural Intelligence: OR Case Reconstruction",
    blurb:
      "Reconstructs a procedural state timeline from an OR transcript or recording, then generates a handoff note, operative-note draft, and family update as three projections of one shared, append-only CaseState — so the three documents can't disagree with each other. Every state field keeps provenance back to the transcript lines that produced it. Phase vocabulary, handoff format (I-PASS/SBAR/SOAP), and terminology live in a swappable JSON site profile, so the same pipeline runs an OR case, a cath-lab case, or a primary-care consult. A critic pass flags only invented facts (vitals, labs, doses) and drives one bounded revision round.",
    metrics: ["9-node LangGraph pipeline: ingest → roles → context → extract → reduce → handoff/opnote/family → critic", "4/4 synthetic cases pass evaluation"],
    stack: ["LangGraph", "Groq Whisper", "FastAPI", "MCP"],
    repoUrl: "https://github.com/pallavisharma6802/Procedural-Intelligence-prototype",
    lens: "healthcare",
    featured: true,
  },
  {
    slug: "llm-sentinel",
    title: "LLM Sentinel: Hallucination Detection Platform",
    blurb:
      "An LLM observability platform logging real inference traces with 10 custom NLP checks, including atomic claim decomposition and ungrounded-claim scoring, surfaced through a Next.js dashboard.",
    metrics: ["Precision 1.0 on fabricated-entity detection (12/12)", "1,044 inference traces across 306 sessions"],
    stack: ["Gemini 2.5 Pro", "FastAPI", "PostgreSQL", "Airflow", "Next.js"],
    repoUrl: "https://github.com/pallavisharma6802/LLM_Sentinel_Hallucination_Detection_Platform",
    lens: "general",
    featured: true,
  },
  {
    slug: "tissue-motion-forecasting",
    title: "Probabilistic 3D Tissue Motion Forecasting",
    blurb:
      "Forecasts future disparity maps from stereo surgical video to compensate for AR-overlay latency during minimally invasive surgery. UNet and Swin-UNETR backbones, with a diffusion head for uncertainty quantification and a multi-horizon prediction head (3/5/7/9 frames ahead) sharing one feature extractor. Trained on the SCARED stereo endoscopy dataset.",
    metrics: ["Cut latency-induced disparity drift 40–50px → 3–5px", "Depth MAE 1.03–1.60px"],
    stack: ["PyTorch", "UNet", "SCARED dataset", "Ray"],
    repoUrl: "https://github.com/pallavisharma6802/Probabilistic-3D-Tissue-Motion-Forecasting-from-Stereo-Surgical-Video",
    lens: "healthcare",
    featured: true,
  },
  {
    slug: "critic-guided-continual-learning",
    title: "Critic-Guided Multilingual Continual Learning",
    blurb:
      "A critic-filtered continual learning pipeline for Qwen2.5-7B (LoRA) across 3 phases and 15 languages; a Gemini-2.5-flash critic scores synthetic data and only samples above a quality threshold enter training.",
    metrics: ["Representation anchoring: TyDiQA F1 12.66 vs 11.24 without it", "DPO extension failed from critic bias — documented, not hidden"],
    stack: ["Qwen2.5-7B", "LoRA/PEFT", "Gemini critic", "HuggingFace", "Ray"],
    repoUrl: "https://github.com/sbnikhil/critic-guided-self-adaptation",
    lens: "general",
  },
  {
    slug: "breast-cancer-optimization",
    title: "Breast Cancer Treatment Optimization",
    blurb:
      "A mathematical-programming framework (Gamspy) that personalizes breast cancer treatment plans by explicitly balancing survival time against relapse risk, using METABRIC clinical data.",
    metrics: ["Built on real METABRIC clinical cohort data"],
    stack: ["Gamspy", "Mathematical Programming", "METABRIC"],
    repoUrl: "https://github.com/pallavisharma6802/Breast-Cancer-Treatment-Optimization-Using-Mathematical-Programming",
    lens: "healthcare",
  },
  {
    slug: "llm-serving-tradeoffs",
    title: "LLM Serving Tradeoff Analyzer",
    blurb:
      "Benchmarks any Hugging Face model's real inference cost, latency, and throughput across four serving backends — HF naive, ONNX Runtime, vLLM, SGLang — on live GPU hardware.",
    metrics: ["Throughput, TTFT, and latency across concurrency and batch sizes"],
    stack: ["vLLM", "SGLang", "ONNX Runtime", "Grafana"],
    repoUrl: "https://github.com/pallavisharma6802/LLM-Serving-Tradeoff-Analyzer",
    lens: "general",
  },
  {
    slug: "policy-aware-rag",
    title: "Policy-Aware RAG System",
    blurb:
      "A Google Ads policy Q&A agent that retrieves policy chunks, answers with citations, and refuses when sources are weak. Built locally first (Postgres + Weaviate + Ollama via Docker Compose), then re-architected onto the Databricks agent lifecycle — Unity Catalog for policy chunks, an MLflow ResponsesAgent calling tools over MCP, and MLflow Tracing plus offline/online eval scorers on every turn.",
    metrics: ["90 tests, 100% pass rate", "Local dev stack + a production Databricks-App deployment path"],
    stack: ["Weaviate", "LangChain", "Databricks", "MLflow", "MCP", "Unity Catalog", "FastAPI", "Docker"],
    repoUrl: "https://github.com/pallavisharma6802/Policy-Aware-RAG-System",
    lens: "general",
  },
  {
    slug: "fraud-detection-mlops",
    title: "Fraud Detection MLOps System",
    blurb:
      "An end-to-end MLOps system on the IEEE-CIS fraud dataset (590,540 transactions, 434 features, 3.5% fraud rate): training, a serving API, post-deployment drift monitoring, and automated retraining when drift crosses threshold. Missingness is encoded as a feature (-999 placeholder, not imputed) since missing card/email fields are themselves predictive of fraud; drift is tracked with Wasserstein and Chi-squared distance, retraining auto-triggers at a 30% threshold.",
    metrics: ["ROC-AUC 95.5%", "F1 34.7% → 49.8%"],
    stack: ["XGBoost", "Evidently", "MLflow", "Docker"],
    repoUrl: "https://github.com/pallavisharma6802/Self-Healing-Fraud-Detection-System",
    lens: "general",
  },
  {
    slug: "doit-kb-agent",
    title: "DoIT Knowledge-Base Agentic Assistant",
    story:
      "I started at DoIT answering Help Desk tickets myself — NetID resets, Duo lockouts, VPN, O365. In Oct 2025 I moved into the Software Developer role, and kept the thing I'd learned on the phones: most of what an agent does is look up the same ~400 KB articles and decide how confident to be. So I built the agent that does that part.",
    blurb:
      "A 4-node LangGraph pipeline over 392 scraped DoIT KB articles: classify (simple vs. complex), retrieve top-3 unseen articles from ChromaDB, generate with citations, then route — simple queries resolve in one turn, complex ones loop up to 4 turns before escalating to a human agent with the best answer still attached (not thrown away). A NetworkX similarity graph over the KB is wired into re-retrieval for complex queries, and a delta-context scheme avoids re-sending already-seen articles across turns to keep token cost down.",
    metrics: ["Recall@3: 95.4% (104/109 queries)", "392 KB articles indexed across 30 categories", "Classifier latency under 500ms, TTFT under 2s"],
    stack: ["LangGraph", "ChromaDB", "NetworkX", "Groq", "Langfuse", "FastAPI", "React"],
    repoUrl: "https://github.com/pallavisharma6802/DoIT-Help-Desk-Agent",
    liveUrl: "https://doit-help-desk-agent-1.onrender.com/",
    lens: "general",
    featured: true,
  },
  {
    slug: "edge-ai-sentiment",
    title: "High-Efficiency Edge-AI Sentiment Engine",
    blurb:
      "DistilBERT fine-tuned on the full 25K-review IMDB corpus (87.4% accuracy, F1 0.880), exported to ONNX, graph-optimized, and INT8-quantized for PyTorch-free serving. Benchmarked honestly across 4 backends: PyTorch stays faster on Apple Silicon's Metal backend, but the quantized ONNX model is 74% smaller with a flat P95 latency curve and a production image that ships with zero PyTorch dependency.",
    metrics: ["74% size reduction (255MB → 65.8MB)", "P95 latency 81.6ms, near-zero tail variance"],
    stack: ["ONNX Runtime", "DistilBERT", "FastAPI", "Docker"],
    repoUrl: "https://github.com/pallavisharma6802/High-Efficiency-Edge-AI-Sentiment-Engine",
    lens: "general",
  },
  {
    slug: "spending-forecast",
    title: "Spending Forecast & Recommendation Platform",
    blurb:
      "Personal-finance analytics on a shared PySpark core: per-category forecasting (recency-weighted baseline, hierarchical shrinkage, SARIMAX, and an inverse-error ensemble), picked per category by walk-forward backtest; collaborative-filtering budget recommendations with cold-start handling; z-score/isolation-forest anomaly detection; a composite 0–100 financial-health score; and percentile peer benchmarking. A tool-calling chat agent answers spending questions grounded in real tool calls, not model guesses, and a Kafka consumer maintains rolling 7/30/365-day windows for streaming ingestion.",
    metrics: ["23K transactions across 13 categories", "Model choice per category selected by backtest, not fixed"],
    stack: ["PySpark", "SARIMAX", "Kafka", "Anthropic SDK", "Dash"],
    repoUrl: "https://github.com/pallavisharma6802/Spending-Forecast-Platform",
    lens: "general",
  },
  {
    slug: "travel-desk",
    title: "Travel Desk: Trip Planner with Hard Verification",
    blurb:
      "A multi-agent trip planner that runs four hard-verification checks on flight-hotel pairs — arrival vs. check-in time, combined budget, amenity availability, room capacity — as a pass/fail gate before surfacing any result.",
    metrics: ["4 hard-verification gates, pass/fail before results surface"],
    stack: ["LangGraph", "AWS Bedrock", "SerpApi", "FastAPI", "PostgreSQL"],
    repoUrl: "https://github.com/pallavisharma6802/travel_desk",
    lens: "general",
  },
];

export const skills: SkillGroup[] = [
  { label: "LLMs & Agents", items: ["LangGraph", "LangChain", "AWS Bedrock", "Groq", "vLLM", "SGLang", "Langfuse", "LangSmith", "MCP", "RAG", "CRAG", "Self-RAG", "Reflexion"] },
  { label: "ML & Deep Learning", items: ["PyTorch", "HuggingFace Transformers", "LoRA/PEFT", "XGBoost", "Scikit-learn", "DistilBERT", "Mechanistic Interpretability"] },
  { label: "Clinical & Healthcare", items: ["HIPAA-Compliant ETL", "PyRadiomics", "DeepHit / Survival Modeling", "DICOM", "Quantitative Phase Imaging", "Veeva Vault", "Medidata Rave EDC", "CDISC (SDTM/ADaM)"] },
  { label: "Data & Engineering", items: ["PySpark", "Kafka", "PostgreSQL", "BigQuery", "SARIMAX", "Prophet", "MLflow", "Evidently"] },
  { label: "Cloud & MLOps", items: ["AWS", "GCP", "Azure", "Docker", "Terraform", "GitHub Actions", "Kubernetes"] },
];
