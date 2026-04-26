/**
 * skills.ts — recruiter-facing technical items, untouched per Rule R2.
 * Category keys match copy.ts skills.categories so headers stay in sync.
 */

export type SkillCategoryKey =
  | "programming"
  | "ml"
  | "agents"
  | "cloud"
  | "math"
  | "compliance";

export const skillItems: Record<SkillCategoryKey, string[]> = {
  programming: [
    "Python", "PyMuPDF", "Pydantic", "pandas", "spaCy",
    "PyTorch", "TensorFlow", "scikit-learn", "XGBoost",
    "LSTM", "ARIMA", "Prophet",
    "SQL", "PostgreSQL", "MySQL", "Hive", "PySpark",
    "ETL workflows", "Airflow", "real-time pipelines", "data drift monitoring",
  ],
  ml: [
    "Hugging Face Transformers", "DeBERTa-V3", "Longformer",
    "LoRA", "PEFT", "Optuna", "MLflow", "LangChain",
    "hyperparameter tuning", "Bayesian optimization", "k-fold CV",
    "reinforcement learning", "few-shot / zero-shot learning",
    "self-supervised learning", "SHAP", "explainable AI",
    "RAG", "synthetic data generation", "AutoML", "NAS",
  ],
  agents: [
    "RAG architecture", "LangChain", "LangGraph", "FAISS", "ChromaDB",
    "ViT", "GPT-4", "PubMed search integration",
    "AI chatbots", "speech-to-text", "contextual QA",
    "medical research agents", "real-time SOAP note generation",
  ],
  cloud: [
    "AWS", "Azure", "GCP", "Docker", "Kubernetes",
    "REST APIs", "AWS Lambda", "Azure Functions", "Kafka",
    "Prometheus", "Grafana", "Streamlit", "Plotly",
    "low-latency inference pipelines",
  ],
  math: [
    "Probability theory", "Bayesian inference", "hypothesis testing",
    "causal inference", "DAG reasoning", "time-series modeling",
    "Markov processes", "convex / non-convex optimization",
    "Bayesian hyperparameter optimization", "simulation-based evaluation",
  ],
  compliance: [
    "HIPAA", "SOC 2", "IT risk controls",
    "stakeholder communication", "requirement gathering",
    "ethical AI practices",
  ],
};

/** Order in which categories render. */
export const skillOrder: SkillCategoryKey[] = [
  "programming",
  "ml",
  "agents",
  "cloud",
  "math",
  "compliance",
];
