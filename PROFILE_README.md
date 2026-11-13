<div align="center">

# Hi, I’m Pallavi.

**ML Engineer · Data Scientist · Madison, Wisconsin**

MS in Data Science, University of Wisconsin–Madison

[![Portfolio](https://img.shields.io/badge/Explore_my_portfolio-c6708a?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pallavisharma6802.github.io/)
[![LinkedIn](https://img.shields.io/badge/Let’s_connect-725b53?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pallavisharma6802/)
[![Email](https://img.shields.io/badge/Say_hello-d99a3c?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sharmapallavi6802@gmail.com)

**Clinical data → Models → Evaluation → Working products**

</div>

I build AI systems across healthcare and IT, from medical imaging and survival models to agents, evaluation tools, and inference services. I like following a problem all the way through: understanding the domain, testing the approach, and building something people can use.

I started on a help desk answering support tickets, then built an agent for that same workflow. Today, my work at UW’s School of Medicine and Public Health explores whether changes in skin tissue can help identify systemic cancer.

## Pick a thread

[![Agents](https://img.shields.io/badge/01_Agents_&_Evaluation-c6708a?style=flat-square)](#agents-and-evaluation)
[![Research](https://img.shields.io/badge/02_Learning_&_Adaptation-725b53?style=flat-square)](#learning-and-adaptation)
[![Healthcare](https://img.shields.io/badge/03_Healthcare_ML-d99a3c?style=flat-square)](#healthcare-ml)
[![Inference](https://img.shields.io/badge/04_Efficient_Inference-725b53?style=flat-square)](#efficient-inference)

*Expand a project to see the engineering behind it.*

### Agents and evaluation

<details open>
<summary><b>DoIT Knowledge Base Agent</b> — from answering tickets to building the assistant</summary>

An IT support agent over 392 knowledge base articles, with cited answers, graph-augmented retrieval, and escalation to a human. Retrieval reached **95.4% Recall@3 on 109 evaluation queries**.

`LangGraph` `ChromaDB` `NetworkX` `Langfuse` `FastAPI` `React`

[Explore the project →](https://github.com/pallavisharma6802/DoIT-Help-Desk-Agent)

</details>

<details>
<summary><b>Trust Under Pressure</b> — what happens when agents are manipulated?</summary>

Eight empirical studies across four models, covering tool and memory overrides, peer-channel attacks, multilingual bypasses, and layered defenses. Uses deterministic scoring and Wilson confidence intervals.

`LLM Evaluation` `Multi-Agent Systems` `Groq` `Deterministic Scoring`

[Explore the studies →](https://github.com/pallavisharma6802/Trust-Under-Pressure-Manipulation-Resistance-in-LLM-Agents)

</details>

### Learning and adaptation

<details>
<summary><b>Critic-Guided Multilingual Continual Learning</b> — learning across 15 languages</summary>

A continual learning pipeline for Qwen2.5-7B across three training phases. A Gemini critic filters synthetic examples before LoRA fine-tuning, while representation anchoring helps preserve knowledge across phases.

**TyDiQA F1: 12.66 with representation anchoring vs. 11.24 without it.**

`Qwen2.5-7B` `LoRA / PEFT` `Hugging Face` `Ray` `Gemini`

[Explore the project →](https://github.com/sbnikhil/critic-guided-self-adaptation)

</details>

My graduate research at UW–Madison explored how language models should adapt when user preferences change, combining preference modeling, mechanistic interpretability, and activation steering.

### Healthcare ML

<details>
<summary><b>3D Tissue Motion Forecasting</b> — anticipating motion in surgical video</summary>

Forecasting future disparity maps from stereo surgical video to compensate for latency in augmented-reality overlays. Combines UNet and Swin-UNETR backbones with a diffusion head for uncertainty estimation, using the SCARED dataset.

`PyTorch` `Computer Vision` `Medical Imaging` `Ray`

[Explore the project →](https://github.com/pallavisharma6802/Probabilistic-3D-Tissue-Motion-Forecasting-from-Stereo-Surgical-Video)

</details>

<details>
<summary><b>Procedural Intelligence</b> — one clinical timeline, multiple documents</summary>

Reconstructs a procedure’s state from a transcript or recording, then generates a handoff, operative-note draft, and family update from the same shared case state. Includes a critic pass for fabricated facts.

`LangGraph` `Groq Whisper` `FastAPI` `MCP`

[Explore the prototype →](https://github.com/pallavisharma6802/Procedural-Intelligence-prototype)

</details>

### Efficient inference

<details>
<summary><b>LLM Serving Tradeoff Analyzer</b> — measuring the cost of an answer</summary>

Benchmarks serving backends on GPU hardware, measuring throughput, time to first token, and latency across concurrency and batch sizes.

`vLLM` `SGLang` `ONNX Runtime` `Grafana`

[Explore the benchmarks →](https://github.com/pallavisharma6802/LLM-Serving-Tradeoff-Analyzer)

</details>

<details>
<summary><b>Edge-AI Sentiment Engine</b> — smaller models for CPU serving</summary>

Fine-tuned DistilBERT exported to INT8 ONNX for PyTorch-free inference. Reduced model size from **255 MB to 65.8 MB**, with **87.4% accuracy**.

`DistilBERT` `ONNX Runtime` `Quantization` `FastAPI` `Docker`

[Explore the project →](https://github.com/pallavisharma6802/High-Efficiency-Edge-AI-Sentiment-Engine)

</details>

## Under the hood

<details>
<summary><b>Open my toolkit</b></summary>

| Area | Tools & techniques |
| --- | --- |
| Models & learning | PyTorch, Hugging Face, scikit-learn, XGBoost, LoRA/PEFT |
| Agents & evaluation | LangGraph, LangChain, RAG, MCP, Langfuse, LangSmith |
| Inference & optimization | vLLM, Ray, ONNX Runtime, quantization, knowledge distillation |
| Data & applications | SQL, PySpark, Airflow, Kafka, FastAPI, React, Next.js |
| Cloud & deployment | AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform, MLflow |
| Healthcare | Survival modeling, medical imaging, quantitative phase imaging, clinical data pipelines |

</details>

---

**Open to AI/ML engineering and data science roles.**

[See all my work](https://pallavisharma6802.github.io/work) · [Explore my experience](https://pallavisharma6802.github.io/experience) · [Get in touch](mailto:sharmapallavi6802@gmail.com)
