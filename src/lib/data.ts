import { Experience, Project, SkillGroup } from "./types";

export const profile = {
  name: "Pallavi Sharma",
  title: "ML Engineer",
  credential: "MS, Data Science, University of Wisconsin–Madison, 2026",
  email: "sharmapallavi6802@gmail.com",
  linkedin: "https://www.linkedin.com/in/pallavisharma6802/",
  github: "https://github.com/pallavisharma6802",
  location: "Madison, WI",
  photo: "/profile.jpeg",
};

export const bio = {
  greeting: "Hi, I'm Pallavi.",
  body:
    "I'm an ML engineer with 3+ years building AI products end to end: agents, LLM pipelines, full-stack apps, and ML systems in healthcare and IT. My work is in production, used by real teams and real patients, not sitting in a notebook. I thrive in cross-functional, collaborative teams, and I lean toward customer-facing roles where I can work directly with the people using what I build. I pick up a new domain fast, and I'm focused on ML and AI work broadly. The title matters less than the problem.",
};


export const experience: Experience[] = [
  {
    role: "Machine Learning Engineer",
    org: "UW School of Medicine and Public Health",
    category: "Healthcare ML",
    employmentType: "Full-time",
    location: "Madison, Wisconsin",
    workMode: "Hybrid",
    dates: "Sep 2026 – Present",
    duration: "3 mos",
    summary: [
      "Cancer often shows up systemically before it's caught locally: a visible change somewhere else in the body, a sense that something is off, even before a diagnosis exists. I'm working on whether that shows up measurably in the skin.",
      "I work with clinical researchers on quantitative phase imaging (QPI), studying how dry mass, refractive index, and cell morphology in skin tissue could serve as a biomarker for systemic cancer, building PyTorch-based image analysis pipelines and using distributed computing to process large imaging datasets while testing whether the patterns hold up across samples.",
      "The goal is a real, skin-visible biomarker for early, non-invasive cancer detection, not a pattern a model memorized.",
    ],
    skills: ["Computer Vision", "PyTorch", "Distributed Computing", "Medical Imaging"],
  },
  {
    role: "Graduate Researcher",
    org: "UW–Madison Computer Sciences",
    category: "LLM Evaluation",
    employmentType: "Part-time",
    location: "Madison, Wisconsin",
    workMode: "Hybrid",
    dates: "Nov 2025 – May 2026",
    duration: "7 mos",
    summary: [
      "Most LLM personalization research assumes preferences are stable. My research asks what happens when they aren't: when a stated preference in a moment of fear or stress isn't what someone actually wants. That question sits at the intersection of preference modeling and AI alignment.",
      "The work spans synthetic simulation, mechanistic interpretability, and inference-time adaptation via activation steering. The most interesting finding so far: the strongest in-distribution forecasting model degraded the most under distribution shift, a reminder that clean leaderboard results don't always mean robust systems. Targeting publication.",
    ],
    skills: ["In-Context Learning", "Model Evaluation", "Mechanistic Interpretability", "LLMs"],
  },
  {
    role: "Software Developer",
    org: "UW–Madison Division of Information Technology (DoIT)",
    category: "Agents & RAG",
    employmentType: "Part-time",
    location: "Madison, Wisconsin",
    workMode: "Hybrid",
    dates: "Apr 2025 – May 2026",
    duration: "1 yr 2 mos",
    summary: [
      "I used to answer IT support tickets manually. Then I built a system to do it.",
      "The interesting engineering problem wasn't retrieval; it was knowing when the system genuinely found an answer versus when it was guessing. The solution was an external grounding check the model couldn't override, combined with graph-augmented retrieval that walks semantic neighbors when the first pass misses.",
      "The system is live, handling real queries, and when it can't answer, it says so and hands off to a human.",
    ],
    skills: ["React.js", "Node.js", "LangGraph", "Retrieval"],
  },
  {
    role: "Machine Learning Research Intern",
    org: "UW School of Medicine and Public Health",
    category: "Healthcare ML",
    employmentType: "",
    location: "Madison, Wisconsin",
    workMode: "Hybrid",
    dates: "Oct 2024 – Oct 2025",
    duration: "1 yr 1 mo",
    summary: [
      "Clinical ML is unforgiving because the cost of a wrong prediction is a person, not a metric.",
      "Built survival models across 6 hospital systems and replaced CoxNet with a DeepHit-based deep neural network. Midway through, I found a data prep bug quietly biasing feature selection toward scanner artifacts instead of disease signal, caught because I questioned a result that looked too clean; fixing it changed the model substantially.",
    ],
    skills: ["Deep Neural Networks (DNN)", "Survival Analysis", "PyRadiomics", "HIPAA-Compliant ETL"],
  },
  {
    role: "Data Scientist",
    org: "SCL IT Technologies",
    category: "Healthcare ML",
    employmentType: "",
    location: "India",
    workMode: "Remote",
    dates: "Aug 2023 – Aug 2024",
    duration: "1 yr 1 mo",
    summary: [
      "Clinical trial data is only useful if it's complete and trustworthy before it reaches a statistician.",
      "I built the pipeline end to end: Airflow jobs that pulled raw trial data from AWS S3 and Medidata Rave EDC every day, PySpark and Spark NLP to turn unstructured EHR and claims text into regulatory-compliant variables mapped to Veeva Vault (75% less time to harmonize), and an XGBoost anomaly detector that caught 94% of rule violations before Pinnacle 21 audits. Dataset completeness went from 92% to 99.8%.",
      "I also modeled patient dropout and screen failures with LightGBM (0.79 C-index) and put predicted adverse events in Power BI for the clinical data managers.",
    ],
    skills: ["Data Science", "Apache Airflow", "PySpark", "XGBoost"],
  },
  {
    role: "Machine Learning Intern",
    org: "Persistent Systems",
    category: "Forecasting & MLOps",
    employmentType: "Internship",
    location: "Bengaluru, Karnataka, India",
    workMode: "Remote",
    dates: "Jan 2024 – Apr 2024",
    duration: "4 mos",
    summary: [
      "Standard churn prediction on this dataset used structured features only. I added customer service text, fine-tuned DistilBERT for sentiment and urgency, fused the embeddings with the structured features, and compared both versions properly.",
      "The NLP features moved recall from 0.61 to 0.86, a gap large enough to suggest other structured-only datasets are leaving real signal untapped simply because no one tried the text.",
    ],
    skills: ["Data Analytics", "Machine Learning", "DistilBERT", "NLP"],
  },
];

export const categories = ["All", "Agents & RAG", "LLM Evaluation", "Healthcare ML", "Forecasting & MLOps", "Inference & Infra"];

export const projects: Project[] = [
  {
    slug: "multi-cloud-agent",
    title: "Agentic Multi-Cloud Ticket Resolution",
    category: "Agents & RAG",
    blurb:
      "A cyclic LangGraph of six agents for IT ticket resolution: intent and priority classification, CRAG document grading, a Self-RAG faithfulness critic, and a Continuation Agent that replaces every fixed retry cap with a reasoned decision. Runs against a real, labeled IT/SaaS domain pack with a from-scratch eval harness and a BigQuery and Grafana analytics layer.",
    metrics: ["Migrated Ollama to Bedrock: 44s to 1.5s latency", "Full eval harness measuring the agentic pipeline, not just claiming it"],
    stack: ["LangGraph", "AWS Bedrock", "Azure Text Analytics", "Pinecone", "BigQuery", "Grafana", "Terraform", "Next.js"],
    repoUrl: "https://github.com/pallavisharma6802/Multi-Cloud-AI-Agent-for-Ticket-Resolution",
    featured: true,
  },
  {
    slug: "doit-kb-agent",
    title: "DoIT Knowledge Base Agent",
    category: "Agents & RAG",
    story:
      "I started at DoIT answering Help Desk tickets myself: NetID resets, Duo lockouts, VPN, O365. I moved into the Software Developer role, and kept the thing I'd learned on the phones: most of what an agent does is look up the same ~400 KB articles and decide how confident to be. So I built the agent that does that part.",
    blurb:
      "A 4-node LangGraph pipeline over 392 scraped DoIT KB articles. Classify (simple vs. complex), retrieve the top 3 unseen articles from ChromaDB, generate an answer with citations, then route: simple queries resolve in one turn, complex ones loop up to 4 turns before escalating to a human agent with the best answer still attached.",
    metrics: ["Recall@3: 95.4% (104/109 queries)", "392 KB articles indexed across 30 categories"],
    stack: ["LangGraph", "ChromaDB", "NetworkX", "Groq", "Langfuse", "FastAPI", "React"],
    repoUrl: "https://github.com/pallavisharma6802/DoIT-Help-Desk-Agent",
    liveUrl: "https://doit-help-desk-agent-1.onrender.com/",
    featured: true,
  },
  {
    slug: "trust-under-pressure",
    title: "Trust Under Pressure: Manipulation Resistance in LLM Agents",
    category: "LLM Evaluation",
    blurb:
      "8 empirical studies of tool-calling and multi-agent systems across 4 models: tool vs. memory override, jailbreak framing, compounding pressure, peer-channel propagation, multilingual refusal, firewall layering. Scored deterministically with Wilson confidence intervals, no LLM judge.",
    metrics: ["Majority-vote defense: 33% to 61% attack success once the attacker controls peer channels", "Translation bypass: about 0% to 75% compliance"],
    stack: ["Groq API", "gpt-oss-120b/20b", "Qwen3", "Deterministic scoring"],
    repoUrl: "https://github.com/pallavisharma6802/Trust-Under-Pressure-Manipulation-Resistance-in-LLM-Agents",
    featured: true,
  },
  {
    slug: "procedural-intelligence",
    title: "Procedural Intelligence: OR Case Reconstruction",
    category: "Healthcare ML",
    blurb:
      "Reconstructs a procedural state timeline from an OR transcript or recording, then generates a handoff note, operative-note draft, and family update as three projections of one shared case state, so the three documents can't disagree with each other. Phase vocabulary and handoff format live in a swappable site profile, so the same pipeline runs an OR case, a cath-lab case, or a primary-care consult.",
    metrics: ["9-node LangGraph pipeline with a critic pass for fabricated facts", "4/4 synthetic cases pass evaluation"],
    stack: ["LangGraph", "Groq Whisper", "FastAPI", "MCP"],
    repoUrl: "https://github.com/pallavisharma6802/Procedural-Intelligence-prototype",
    featured: true,
  },
  {
    slug: "llm-sentinel",
    title: "LLM Sentinel: Hallucination Detection Platform",
    category: "LLM Evaluation",
    blurb:
      "An LLM observability platform logging real inference traces with 10 custom NLP checks, including atomic claim decomposition and ungrounded-claim scoring, surfaced through a Next.js dashboard.",
    metrics: ["Precision 1.0 on fabricated-entity detection (12/12)", "1,044 inference traces across 306 sessions"],
    stack: ["Gemini 2.5 Pro", "FastAPI", "PostgreSQL", "Airflow", "Next.js"],
    repoUrl: "https://github.com/pallavisharma6802/LLM_Sentinel_Hallucination_Detection_Platform",
  },
  {
    slug: "tissue-motion-forecasting",
    title: "Probabilistic 3D Tissue Motion Forecasting",
    category: "Healthcare ML",
    blurb:
      "Forecasts future disparity maps from stereo surgical video to compensate for AR-overlay latency during minimally invasive surgery. UNet and Swin-UNETR backbones, with a diffusion head for uncertainty quantification. Trained on the SCARED stereo endoscopy dataset.",
    metrics: ["Cut latency-induced disparity drift from 40 to 50px down to 3 to 5px"],
    stack: ["PyTorch", "UNet", "SCARED dataset", "Ray"],
    repoUrl: "https://github.com/pallavisharma6802/Probabilistic-3D-Tissue-Motion-Forecasting-from-Stereo-Surgical-Video",
  },
  {
    slug: "fraud-detection-mlops",
    title: "Fraud Detection MLOps System",
    category: "Forecasting & MLOps",
    blurb:
      "An end-to-end MLOps system on the IEEE-CIS fraud dataset (590,540 transactions, 434 features, 3.5% fraud rate): training, a serving API, post-deployment drift monitoring, and automated retraining when drift crosses threshold.",
    metrics: ["ROC-AUC 95.5%", "F1 improved from 34.7% to 49.8%"],
    stack: ["XGBoost", "Evidently", "MLflow", "Docker"],
    repoUrl: "https://github.com/pallavisharma6802/Self-Healing-Fraud-Detection-System",
  },
  {
    slug: "spending-forecast",
    title: "Spending Forecast & Recommendation Platform",
    category: "Forecasting & MLOps",
    blurb:
      "Personal spending analytics on a shared PySpark core: per-category forecasting picked by walk-forward backtest, collaborative-filtering budget recommendations, anomaly detection, and a composite spending-health score. A tool-calling chat agent answers spending questions grounded in real tool calls, and a Kafka consumer maintains rolling windows for streaming ingestion.",
    metrics: ["23K transactions across 13 categories"],
    stack: ["PySpark", "SARIMAX", "Kafka", "Dash"],
    repoUrl: "https://github.com/pallavisharma6802/Spending-Forecast-Platform",
  },
  {
    slug: "critic-guided-continual-learning",
    title: "Critic-Guided Multilingual Continual Learning",
    category: "LLM Evaluation",
    blurb:
      "A critic-filtered continual learning pipeline for Qwen2.5-7B (LoRA) across 3 phases and 15 languages. A Gemini-2.5-flash critic scores synthetic data, and only samples above a quality threshold enter training.",
    metrics: ["Representation anchoring: TyDiQA F1 12.66 vs. 11.24 without it"],
    stack: ["Qwen2.5-7B", "LoRA/PEFT", "Gemini critic", "HuggingFace", "Ray"],
    repoUrl: "https://github.com/sbnikhil/critic-guided-self-adaptation",
  },
  {
    slug: "policy-aware-rag",
    title: "Policy-Aware RAG System",
    category: "Agents & RAG",
    blurb:
      "A Google Ads policy Q&A agent that retrieves policy chunks, answers with citations, and refuses when sources are weak. Built locally first with Postgres and Weaviate, then re-architected onto the Databricks agent lifecycle with Unity Catalog, an MLflow ResponsesAgent, and MLflow Tracing on every turn.",
    metrics: ["90 tests, 100% pass rate"],
    stack: ["Weaviate", "LangChain", "Databricks", "MLflow", "FastAPI", "Docker"],
    repoUrl: "https://github.com/pallavisharma6802/Policy-Aware-RAG-System",
  },
  {
    slug: "breast-cancer-optimization",
    title: "Breast Cancer Treatment Optimization",
    category: "Healthcare ML",
    blurb:
      "A mathematical-programming framework that personalizes breast cancer treatment plans by explicitly balancing survival time against relapse risk, using real METABRIC clinical cohort data.",
    metrics: ["Built on real METABRIC clinical cohort data"],
    stack: ["Gamspy", "Mathematical Programming"],
    repoUrl: "https://github.com/pallavisharma6802/Breast-Cancer-Treatment-Optimization-Using-Mathematical-Programming",
  },
  {
    slug: "llm-serving-tradeoffs",
    title: "LLM Serving Tradeoff Analyzer",
    category: "Inference & Infra",
    blurb:
      "Benchmarks any Hugging Face model's real inference cost, latency, and throughput across four serving backends (naive HF, ONNX Runtime, vLLM, SGLang) on live GPU hardware.",
    metrics: ["Throughput, TTFT, and latency across concurrency and batch sizes"],
    stack: ["vLLM", "SGLang", "ONNX Runtime", "Grafana"],
    repoUrl: "https://github.com/pallavisharma6802/LLM-Serving-Tradeoff-Analyzer",
  },
  {
    slug: "edge-ai-sentiment",
    title: "High-Efficiency Edge-AI Sentiment Engine",
    category: "Inference & Infra",
    blurb:
      "DistilBERT fine-tuned on the full 25K-review IMDB corpus, exported to ONNX, and INT8-quantized for PyTorch-free serving on commodity CPU.",
    metrics: ["74% size reduction (255MB to 65.8MB)", "Accuracy 87.4%, F1 0.880"],
    stack: ["ONNX Runtime", "DistilBERT", "FastAPI", "Docker"],
    repoUrl: "https://github.com/pallavisharma6802/High-Efficiency-Edge-AI-Sentiment-Engine",
  },
  {
    slug: "travel-desk",
    title: "Travel Desk: Trip Planner with Hard Verification",
    category: "Agents & RAG",
    blurb:
      "A multi-agent trip planner that runs four hard-verification checks on flight-hotel pairs, such as arrival time vs. check-in time and combined budget, as a pass/fail gate before surfacing any result.",
    metrics: ["4 hard-verification gates, pass/fail before results surface"],
    stack: ["LangGraph", "AWS Bedrock", "SerpApi", "FastAPI"],
    repoUrl: "https://github.com/pallavisharma6802/travel_desk",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "LLMs & GenAI Engineering",
    items: [
      { name: "Agent Orchestration (LangGraph)", level: 90 },
      { name: "Multi-Agent Systems", level: 88 },
      { name: "RAG / CRAG / Self-RAG", level: 90 },
      { name: "LLM Evaluation & Evals", level: 90 },
      { name: "Fine-Tuning (LoRA/PEFT)", level: 85 },
      { name: "Vector Databases", level: 85 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Tool / Function Calling", level: 85 },
      { name: "Anthropic / Gemini / Groq APIs", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "Observability (Langfuse/LangSmith)", level: 80 },
      { name: "MCP", level: 70 },
    ],
  },
  {
    label: "ML & Deep Learning",
    items: [
      { name: "PyTorch", level: 90 },
      { name: "Model Training & Experimentation", level: 88 },
      { name: "Computer Vision", level: 85 },
      { name: "HuggingFace Transformers", level: 85 },
      { name: "NLP", level: 83 },
      { name: "XGBoost", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "Feature Engineering", level: 85 },
    ],
  },
  {
    label: "Full-Stack Engineering",
    items: [
      { name: "Python", level: 92 },
      { name: "FastAPI", level: 90 },
      { name: "React / Next.js", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "TypeScript / JavaScript", level: 80 },
      { name: "WebSockets", level: 78 },
      { name: "Microservices", level: 78 },
      { name: "Node.js", level: 76 },
    ],
  },
  {
    label: "AWS",
    items: [
      { name: "S3", level: 90 },
      { name: "Bedrock", level: 88 },
      { name: "Lambda", level: 82 },
      { name: "SageMaker", level: 82 },
      { name: "EC2", level: 80 },
      { name: "ECS", level: 76 },
      { name: "Glue", level: 76 },
      { name: "Rekognition", level: 72 },
    ],
  },
  {
    label: "Google Cloud",
    items: [
      { name: "BigQuery", level: 85 },
      { name: "Vertex AI", level: 82 },
      { name: "GCS", level: 80 },
      { name: "Dataflow", level: 74 },
      { name: "Cloud TPUs", level: 72 },
    ],
  },
  {
    label: "Azure",
    items: [
      { name: "Azure Machine Learning", level: 82 },
      { name: "Azure OpenAI Service", level: 82 },
      { name: "Azure Databricks", level: 78 },
      { name: "Cognitive Services", level: 76 },
      { name: "AI Foundry", level: 76 },
      { name: "AKS", level: 74 },
      { name: "Azure AI Language", level: 72 },
      { name: "Computer Vision", level: 72 },
      { name: "Speech", level: 70 },
    ],
  },
  {
    label: "MLOps & Infra",
    items: [
      { name: "Docker", level: 85 },
      { name: "MLflow", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    label: "Data & Systems",
    items: [
      { name: "SQL / PostgreSQL", level: 88 },
      { name: "PySpark", level: 85 },
      { name: "ETL / Data Pipelines", level: 85 },
      { name: "Time-Series Forecasting", level: 83 },
      { name: "Kafka", level: 75 },
      { name: "Airflow", level: 78 },
    ],
  },
  {
    label: "Collaboration & Delivery",
    items: [
      { name: "Cross-Functional Collaboration", level: 90 },
      { name: "Customer-Facing Communication", level: 85 },
      { name: "Stakeholder Management", level: 82 },
      { name: "Technical Documentation", level: 85 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Jira", level: 75 },
    ],
  },
  {
    label: "Clinical & Healthcare Domain",
    items: [
      { name: "HIPAA-Compliant ETL", level: 90 },
      { name: "Survival Modeling", level: 85 },
      { name: "Medical Imaging (PyRadiomics/DICOM)", level: 80 },
      { name: "Quantitative Phase Imaging", level: 80 },
    ],
  },
];

export const whatIDo = [
  {
    title: "Agentic AI Systems",
    detail: "Multi-agent pipelines with LangGraph: retrieval, grading, critics, and escalation that know when to stop.",
    icon: "agents",
  },
  {
    title: "ML & Forecasting",
    detail: "Production ML systems: fraud detection, demand forecasting, churn, and drift-aware retraining.",
    icon: "forecast",
  },
  {
    title: "Healthcare ML",
    detail: "Survival modeling, medical imaging, and HIPAA-compliant pipelines validated across hospital systems.",
    icon: "health",
  },
  {
    title: "Full-Stack AI Products",
    detail: "APIs, dashboards, and frontends around ML systems, from FastAPI backends to React/Next.js UIs.",
    icon: "stack",
  },
];

export const facts = [
  "I started on a Help Desk answering IT tickets, then built the agent that automates that job.",
  "I'm originally from Hyderabad, India, and have been in Madison, Wisconsin since 2024.",
  "My graduate research is a side quest into AI alignment: when should a model trust what a user says?",
  "Outside of production ML, I build small edge-AI side projects, shrinking models to run without a GPU.",
  "I finished my MS in Data Science at UW–Madison in 2026 with a 3.95 GPA.",
  "I've worked across healthcare and IT operations, and I pick up new domains fast.",
];

export const toolLogos = [
  { name: "AWS", textOnly: true, color: "232F3E" },
  { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
  { name: "Azure", textOnly: true, color: "0078D4" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Terraform", slug: "terraform", color: "844FBA" },
  { name: "Jira", slug: "jira", color: "0052CC" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Apache Spark", slug: "apachespark", color: "E25A1C" },
  { name: "Apache Kafka", slug: "apachekafka", color: "231F20" },
  { name: "Apache Airflow", slug: "apacheairflow", color: "017CEE" },
  { name: "Grafana", slug: "grafana", color: "F46800" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
];

export const methodologies = ["Agile / Scrum", "CI/CD", "Code Review", "Cross-Functional Collaboration", "Technical Documentation"];

export const education = [
  {
    degree: "MS, Data Science",
    org: "University of Wisconsin–Madison",
    dates: "2024 – 2026",
    detail: "GPA 3.95/4.0",
  },
  {
    degree: "BE, Computer Science (AI/ML)",
    org: "New Horizon College of Engineering, Bengaluru",
    dates: "2020 – 2024",
    detail: "GPA 9.85/10",
  },
];
