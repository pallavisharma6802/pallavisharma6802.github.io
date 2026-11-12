import { Experience, Project, SkillGroup } from "./types";

export const profile = {
  name: "Pallavi Sharma",
  title: "ML Engineer",
  credential: "MS, Data Science, University of Wisconsin–Madison, 2026",
  email: "sharmapallavi6802@gmail.com",
  linkedin: "https://www.linkedin.com/in/pallavisharma6802/",
  github: "https://github.com/pallavisharma6802",
  location: "Dearborn, Michigan",
  photo: "/profile.jpeg",
};

export const bio = {
  greeting: "Hi, I'm Pallavi.",
  body:
    "I'm an ML engineer with 4+ years building AI products end to end: agents, LLM pipelines, full-stack apps, and ML systems across financial services, enterprise applications, and healthcare research. I build beyond the model: the data pipelines, APIs, and applications that make it useful. I thrive in cross-functional, collaborative teams, and I lean toward customer-facing roles where I can work directly with the people using what I build. I pick up a new domain fast, and I'm focused on ML and AI work broadly.",
};


export const experience: Experience[] = [
  {
    "role": "Machine Learning Engineer",
    "org": "University of Wisconsin–Madison · School of Medicine and Public Health",
    "category": "Healthcare ML",
    "employmentType": "",
    "location": "Michigan, United States",
    "workMode": "Remote",
    "dates": "Sep 2026 – Present",
    "duration": "",
    "summary": [
      "I work with clinical researchers to investigate whether quantitative phase imaging of skin tissue can reveal early cancer biomarkers. I handle the technical side of the project, from preparing imaging data to training models and evaluating their results.",
      "I fine-tune vision-language models in PyTorch on 100K+ QPI images, using Google Cloud Vertex AI and Cloud Storage for training and data management. I also redesigned our original single-image classification approach into a three-image comparative learning framework to help models distinguish meaningful biological differences from imaging variations.",
      "The new approach improved AUROC from 0.85 to 0.91, sensitivity from 82% to 89%, and specificity from 84% to 90%. I work directly with clinicians on research requirements, experiments, and understanding where the models succeed or fall short."
    ],
    "skills": [
      "PyTorch",
      "Vision-Language Models",
      "Vertex AI",
      "GCP",
      "Comparative Learning",
      "Model Evaluation"
    ]
  },
  {
    "role": "AI/ML Engineer",
    "org": "Qualcomm",
    "category": "Agents & RAG",
    "employmentType": "",
    "location": "Wisconsin, USA",
    "workMode": "",
    "dates": "Jan 2026 – May 2026",
    "duration": "5 mos",
    "summary": [
      "Engineering logs contain a lot of information about why something failed, but finding the relevant details and connecting them can take hours. I built a full-stack AI troubleshooting application that helps engineers investigate incidents, search historical records, and review evidence-backed diagnoses.",
      "The application used React, TypeScript, Node.js, and Flask, with LangGraph coordinating the AI workflows. Gemini handled initial triage, Amazon Bedrock supported diagnostic reasoning, and OpenAI API-based evaluation helped assess response quality. I also fine-tuned a domain-specific incident classifier, improving accuracy from 68% to 84%, and built an OpenSearch retrieval pipeline that reached 91% Recall@5 across 500K+ records.",
      "I deployed the services using Docker on AWS EC2, with S3 storage and CloudWatch monitoring. I worked directly with troubleshooting engineers to investigate incorrect diagnoses and improve the application based on their feedback. In benchmark workflows, manual investigation time dropped by 30%."
    ],
    "skills": [
      "React",
      "TypeScript",
      "Flask",
      "LangGraph",
      "Amazon Bedrock",
      "Gemini",
      "OpenSearch",
      "RAG",
      "AWS",
      "LLM Evaluation"
    ]
  },
  {
    "role": "Machine Learning Researcher",
    "org": "University of Wisconsin–Madison · School of Medicine and Public Health, IDiA Lab",
    "category": "Healthcare ML",
    "employmentType": "",
    "location": "Madison, Wisconsin",
    "workMode": "",
    "dates": "Oct 2024 – Oct 2025",
    "duration": "1 yr 1 mo",
    "summary": [
      "At the IDiA Lab, led by Dr. Pallavi Tiwari, I worked on predicting patient survival outcomes using clinical data and medical images collected from six hospital systems.",
      "I developed a DeepHit survival prediction model in PyTorch, improving C-index from 0.74 to 0.82 compared with CoxNet. I also extracted radiomic features from medical images, combined them with clinical variables, and evaluated survival predictions using Kaplan–Meier curves and log-rank tests.",
      "A large part of the work involved making datasets from different hospitals usable together. I built data-processing pipelines, standardized imaging metadata, investigated differences in acquisition settings, and managed secure clinical data transfers using Globus and ResearchDrive."
    ],
    "skills": [
      "PyTorch",
      "DeepHit",
      "Survival Analysis",
      "PyRadiomics",
      "DICOM",
      "ETL",
      "Clinical Data"
    ]
  },
  {
    "role": "Data Scientist",
    "org": "Mastercard",
    "category": "Forecasting & MLOps",
    "employmentType": "",
    "location": "India",
    "workMode": "",
    "dates": "Apr 2022 – Aug 2024",
    "duration": "2 yrs 5 mos",
    "summary": [
      "Fraud detection is a balancing act: catching suspicious transactions without unnecessarily blocking legitimate payments. I worked with fraud operations teams to develop, deploy, and monitor machine learning models across more than 2 million transactions.",
      "I built fraud-scoring models using XGBoost, worked with behavioral transaction features, and used SHAP to explain model predictions. Precision improved from 81% to 88%, recall from 72% to 79%, and F1 from 0.76 to 0.83. I also developed production data pipelines using Azure Databricks, PySpark, SQL, and Airflow, reducing processing time by 30%.",
      "I built interactive Plotly Dash applications so fraud teams could investigate flagged transactions, understand model predictions, and review false positives. MLflow helped track model experiments and updates, while feedback from fraud analysts informed threshold adjustments that reduced false-positive alerts by 12%."
    ],
    "skills": [
      "Python",
      "SQL",
      "XGBoost",
      "SHAP",
      "Azure Databricks",
      "PySpark",
      "Plotly Dash",
      "MLflow",
      "MLOps"
    ]
  }
];

export const categories = ["All", "Agents & RAG", "LLM Evaluation", "Healthcare ML", "Forecasting & MLOps", "Inference & Infra"];

export const projects: Project[] = [
  {
    "slug": "multi-cloud-agent",
    "title": "Agentic Multi-Cloud Ticket Resolution",
    "category": "Agents & RAG",
    "blurb": "Built and deployed an eight-agent AI troubleshooting platform with RAG, automated evaluations, and multi-cloud integrations.",
    "description": [
      "What started as a simple ticket classification and retrieval system grew into a full-stack application with a Next.js frontend, FastAPI backend, and an eight-agent LangGraph workflow.",
      "The agents handle incident classification, document retrieval, relevance grading, response generation, verification, and escalation. Pinecone provides hybrid search over a real VS Code documentation knowledge base, while Amazon Bedrock Nova Lite powers the LLM workflows. CRAG and Self-RAG help assess whether retrieved documents and generated answers are trustworthy before a ticket is resolved.",
      "The application also uses Azure AI Text Analytics for entity extraction, PostgreSQL for ticket history, and BigQuery with Grafana for analytics. I built an evaluation pipeline to measure retrieval quality, response faithfulness, and agent behavior, with Docker and GitHub Actions supporting testing and deployment."
    ],
    "metrics": [],
    "stack": [
      "LangGraph",
      "AWS Bedrock",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Azure AI",
      "Pinecone",
      "PostgreSQL",
      "GCP BigQuery",
      "Grafana",
      "LangSmith",
      "Docker"
    ],
    "liveUrl": "https://multi-cloud-ai-agent-for-ticket-res.vercel.app/",
    "repoUrl": "https://github.com/pallavisharma6802/Multi-Cloud-AI-Agent-for-Ticket-Resolution",
    "featured": true
  },
  {
    slug: "doit-kb-agent",
    title: "DoIT Knowledge Base Agent",
    category: "Agents & RAG",
    story:
      "IT support questions often come back to the same knowledge base articles. I built this project to explore how an agent can retrieve the right sources, provide cited answers, and escalate when the available information is insufficient.",
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
    "label": "Data & Analytics",
    "description": "Prepare, validate, and understand the data behind a model.",
    "items": [
      {
        "name": "Python"
      },
      {
        "name": "SQL"
      },
      {
        "name": "R"
      },
      {
        "name": "pandas"
      },
      {
        "name": "NumPy"
      },
      {
        "name": "PostgreSQL"
      },
      {
        "name": "PySpark"
      },
      {
        "name": "Airflow"
      },
      {
        "name": "Kafka"
      },
      {
        "name": "ETL Pipelines"
      },
      {
        "name": "Data Validation"
      },
      {
        "name": "Power BI"
      },
      {
        "name": "Data Visualization"
      }
    ]
  },
  {
    "label": "Machine Learning & Statistics",
    "description": "Build baselines, test hypotheses, and evaluate predictions.",
    "items": [
      {
        "name": "scikit-learn"
      },
      {
        "name": "XGBoost"
      },
      {
        "name": "Feature Engineering"
      },
      {
        "name": "Feature Selection"
      },
      {
        "name": "Statistical Modeling"
      },
      {
        "name": "Hypothesis Testing"
      },
      {
        "name": "A/B Testing"
      },
      {
        "name": "Hyperparameter Tuning"
      },
      {
        "name": "Cross-Validation"
      },
      {
        "name": "Imbalanced Learning"
      },
      {
        "name": "Time-Series Forecasting"
      },
      {
        "name": "Survival Analysis"
      }
    ]
  },
  {
    "label": "Deep Learning & Adaptation",
    "description": "Train models for language and images, and adapt them to new tasks.",
    "items": [
      {
        "name": "PyTorch"
      },
      {
        "name": "Hugging Face Transformers"
      },
      {
        "name": "NLP"
      },
      {
        "name": "Computer Vision"
      },
      {
        "name": "Vision-Language Models"
      },
      {
        "name": "Comparative Learning"
      },
      {
        "name": "Continual Learning"
      },
      {
        "name": "Fine-Tuning"
      },
      {
        "name": "LoRA"
      },
      {
        "name": "QLoRA"
      }
    ]
  },
  {
    "label": "Agents & Retrieval",
    "description": "Connect models to knowledge, tools, and structured workflows.",
    "items": [
      {
        "name": "LangGraph"
      },
      {
        "name": "LangChain"
      },
      {
        "name": "Multi-Agent Systems"
      },
      {
        "name": "RAG"
      },
      {
        "name": "Graph RAG"
      },
      {
        "name": "CRAG"
      },
      {
        "name": "Self-RAG"
      },
      {
        "name": "Embeddings"
      },
      {
        "name": "Semantic Search"
      },
      {
        "name": "Vector Databases"
      },
      {
        "name": "Neo4j"
      },
      {
        "name": "Tool Calling"
      },
      {
        "name": "MCP"
      },
      {
        "name": "Prompt Engineering"
      }
    ]
  },
  {
    "label": "Evaluation & Efficient Inference",
    "description": "Measure model behavior and balance quality against serving constraints.",
    "items": [
      {
        "name": "LLM Evaluation"
      },
      {
        "name": "Mechanistic Interpretability"
      },
      {
        "name": "vLLM"
      },
      {
        "name": "Ray"
      },
      {
        "name": "ONNX Runtime"
      },
      {
        "name": "Quantization"
      },
      {
        "name": "Knowledge Distillation"
      },
      {
        "name": "Langfuse"
      },
      {
        "name": "LangSmith"
      }
    ]
  },
  {
    "label": "Applications & MLOps",
    "description": "Build usable applications, deploy models, and monitor their behavior.",
    "items": [
      {
        "name": "FastAPI"
      },
      {
        "name": "REST APIs"
      },
      {
        "name": "React"
      },
      {
        "name": "Next.js"
      },
      {
        "name": "Node.js"
      },
      {
        "name": "Docker"
      },
      {
        "name": "Kubernetes"
      },
      {
        "name": "Terraform"
      },
      {
        "name": "MLflow"
      },
      {
        "name": "GitHub Actions"
      },
      {
        "name": "Model Monitoring"
      }
    ]
  },
  {
    "label": "Cloud Platforms",
    "description": "Services used for retrieval, analytics, storage, and deployment.",
    "items": [
      {
        "name": "Bedrock",
        "subgroup": "AWS"
      },
      {
        "name": "S3",
        "subgroup": "AWS"
      },
      {
        "name": "EC2",
        "subgroup": "AWS"
      },
      {
        "name": "ECS",
        "subgroup": "AWS"
      },
      {
        "name": "Lambda",
        "subgroup": "AWS"
      },
      {
        "name": "SageMaker",
        "subgroup": "AWS"
      },
      {
        "name": "OpenSearch",
        "subgroup": "AWS"
      },
      {
        "name": "RDS",
        "subgroup": "AWS"
      },
      {
        "name": "CloudWatch",
        "subgroup": "AWS"
      },
      {
        "name": "BigQuery",
        "subgroup": "Google Cloud"
      },
      {
        "name": "Vertex AI",
        "subgroup": "Google Cloud"
      },
      {
        "name": "Cloud Storage",
        "subgroup": "Google Cloud"
      },
      {
        "name": "Azure Machine Learning",
        "subgroup": "Azure"
      },
      {
        "name": "Azure OpenAI",
        "subgroup": "Azure"
      },
      {
        "name": "Azure Databricks",
        "subgroup": "Azure"
      }
    ]
  }
];

export const whatIDo = [
  {
    title: "Start with the data",
    detail: "I look at every problem through the data: how it was collected, what it represents, and what it leaves out. Data quality, sampling, and useful features matter as much as model architecture.",
    icon: "data",
  },
  {
    title: "Fit the system to the problem",
    detail: "Choose the model, data, and pipeline together, based on who will use the system and what they need from it. Weigh quality, latency, memory, and cost against the end result.",
    icon: "stack",
  },
  {
    title: "Can a model learn without forgetting?",
    detail: "Explore how models adapt to new tasks, languages, and data while retaining what they already know. Test both what improves and what gets lost along the way.",
    icon: "agents",
  },
  {
    title: "Does the result hold up?",
    detail: "Check beyond a headline metric: compare baselines, investigate errors, and test across sites, populations, and changing conditions. Ask whether the improvement matters in the setting where the system will be used.",
    icon: "forecast",
  },
];

export const facts = [
  "I used to answer IT support tickets. Eventually, I built an agent around the part that kept repeating: finding the right article and figuring out whether it actually answered the question.",
  "I’ve spent time making a model smaller just to see how much capability I could keep. One of those experiments became a sentiment model that runs on a regular CPU.",
  "I’m drawn to results that need explaining. In one experiment, giving agents a majority vote made them easier to manipulate. Understanding why was more interesting than the score itself.",
  "My projects often cross into each other: a question about evaluation becomes a training experiment, and a training experiment becomes a question about deployment."
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
