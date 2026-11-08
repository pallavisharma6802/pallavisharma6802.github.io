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
    "I'm an ML engineer with 4+ years building AI products end to end: agents, LLM pipelines, full-stack apps, and ML systems across financial services, enterprise applications, and healthcare research. I build beyond the model: the data pipelines, APIs, and applications that make it useful. I thrive in cross-functional, collaborative teams, and I lean toward customer-facing roles where I can work directly with the people using what I build. I pick up a new domain fast, and I'm focused on ML and AI work broadly.",
};


export const experience: Experience[] = [
  {
    "role": "Machine Learning Engineer",
    "org": "University of Wisconsin–Madison · School of Medicine and Public Health, Department of Anesthesiology",
    "category": "Healthcare ML",
    "employmentType": "",
    "location": "Madison, Wisconsin",
    "workMode": "",
    "dates": "Sep 2026 – Present",
    "duration": "",
    "summary": [
      "I work with clinical researchers to investigate whether quantitative phase imaging of skin tissue can reveal biomarkers for early cancer detection.",
      "I fine-tune vision-language models in PyTorch on 100K+ QPI samples across 8+ tissue and cell categories. I redesigned single-image classification into a three-image comparative learning framework, with tissue-level sampling, input standardization, and data-quality checks.",
      "Cell-free background controls help separate biological signals from optical artifacts. In comparisons of the single-image and three-image architectures, AUROC improved from 0.85 to 0.91, sensitivity from 82% to 89%, and specificity from 84% to 90%."
    ],
    "skills": [
      "PyTorch",
      "Vision-Language Models",
      "Comparative Learning",
      "Quantitative Phase Imaging",
      "Hypothesis Testing"
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
      "Engineering logs contain the clues to an incident, but finding and connecting them takes time. I built an agentic RAG assistant for log analysis and root-cause investigation across 500K+ historical records.",
      "The system combined LangGraph and Amazon Bedrock with OpenSearch retrieval, reaching 91% Recall@5. Supervised fine-tuning on engineering incident data improved root-cause classification accuracy from 68% to 84%.",
      "BigQuery-backed analytical tools correlated incident patterns across 25+ variables, reducing manual investigation time by 30% in benchmark workflows. I deployed the Docker and FastAPI application on AWS EC2 with S3 storage and CloudWatch monitoring; 97% of evaluated agent workflows executed successfully."
    ],
    "skills": [
      "LangGraph",
      "Amazon Bedrock",
      "OpenSearch",
      "LLM Fine-Tuning",
      "BigQuery",
      "FastAPI",
      "Docker"
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
      "At the IDiA Lab, led by Dr. Pallavi Tiwari, I worked on survival prediction using clinical data and medical images from six hospital systems.",
      "I developed a PyTorch-based DeepHit model that improved C-index from 0.74 to 0.82 over CoxNet, with survival stratification evaluated using Kaplan–Meier curves and log-rank tests. I extracted radiomic features with PyRadiomics and used LASSO-based selection alongside clinical features.",
      "The work also involved terabyte-scale ETL, cross-site harmonization, DICOM metadata processing, and record-level lineage. I managed secure data transfer and storage using Globus and ResearchDrive to support HIPAA-compliant research workflows."
    ],
    "skills": [
      "PyTorch",
      "DeepHit",
      "Survival Analysis",
      "PyRadiomics",
      "DICOM",
      "HIPAA-Compliant ETL"
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
      "Fraud detection means finding high-risk activity while keeping legitimate payments moving. I developed and benchmarked 6+ classification models on more than 2 million financial transactions.",
      "Using Python, SQL, XGBoost, PySpark, and Azure Databricks, I engineered behavioral features and tuned models for imbalanced data. Precision improved from 81% to 88%, recall from 72% to 79%, and F1 from 0.76 to 0.83.",
      "I automated ETL and feature pipelines with Airflow and Databricks, reducing processing time by 30%, and tracked 20+ experiments with MLflow. Power BI dashboards helped monitor performance and prediction drift, supporting threshold adjustments that reduced false positives by 12%."
    ],
    "skills": [
      "Python",
      "SQL",
      "XGBoost",
      "PySpark",
      "Azure Databricks",
      "Airflow",
      "MLflow",
      "Power BI"
    ]
  }
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
  },
  {
    "label": "Healthcare & Imaging",
    "description": "Work with clinical outcomes, medical images, and multi-site research data.",
    "items": [
      {
        "name": "Survival Analysis"
      },
      {
        "name": "Medical Imaging"
      },
      {
        "name": "PyRadiomics"
      },
      {
        "name": "DICOM"
      },
      {
        "name": "Quantitative Phase Imaging"
      },
      {
        "name": "Artifact Detection"
      },
      {
        "name": "Comparative Sampling"
      },
      {
        "name": "Cross-Site Data Harmonization"
      },
      {
        "name": "HIPAA-Compliant Data Pipelines"
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
  "I'm originally from Hyderabad, India, and have been in Madison, Wisconsin since 2024.",
  "I finished my MS in Data Science at UW–Madison in 2026. Before that, I studied Computer Science with a focus on AI and ML in Bengaluru.",
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
