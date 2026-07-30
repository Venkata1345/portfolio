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

/**
 * The resume lists 10 skill categories; the site renders 6, because each key
 * has a hand-written persona header in copy.ts. Mapping (decided 2026-07-29):
 *   programming ← Programming Languages + Data Engineering + Databases & Data Quality
 *   ml          ← AI/ML Frameworks + Model Evaluation & Observability
 *   agents      ← LLM & GenAI Tools + Vector Databases
 *   cloud       ← Backend & API Development + Cloud Platforms + CI/CD & DevOps
 *   math        ← retained from the prior resume (current PDF drops the section)
 *   compliance  ← retained, plus SOX/audit work from the KPMG role
 */
export const skillItems: Record<SkillCategoryKey, string[]> = {
  programming: [
    "Python", "Java", "TypeScript", "JavaScript", "Node.js", "SQL",
    "pandas", "PostgreSQL", "Snowflake", "MongoDB", "Redis",
    "Apache Spark", "Apache Kafka", "Apache Airflow", "Databricks", "dbt",
    "Great Expectations", "ETL workflows", "feature engineering",
  ],
  ml: [
    "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face Transformers",
    "OpenCV", "ONNX Runtime", "CUDA", "XGBoost",
    "LoRA", "mixed-precision training", "hyperparameter tuning",
    "SHAP", "explainable AI",
    "Ragas", "LLM-as-a-Judge", "DeepEval", "LangSmith",
    "MLflow", "TensorBoard", "PromptFlow",
  ],
  agents: [
    "LangChain", "LangGraph", "LlamaIndex", "CrewAI",
    "OpenAI API", "Anthropic Claude API", "Azure OpenAI",
    "RAG architecture", "hybrid retrieval", "BM25",
    "Reciprocal Rank Fusion", "semantic re-ranking",
    "multi-agent orchestration", "tool-calling",
    "FAISS", "Pinecone", "Weaviate", "Chroma", "Qdrant",
  ],
  cloud: [
    "FastAPI", "Java Spring Boot", "RESTful APIs", "GraphQL", "React",
    "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps",
    "Azure Machine Learning", "Azure AI Search", "Azure Document Intelligence",
    "Azure Functions", "Azure Kubernetes Service", "Azure Data Factory",
    "Azure Blob Storage", "Amazon SageMaker",
    "AWS (Bedrock, Lambda, S3, Glue)",
  ],
  math: [
    "Probability theory", "Bayesian inference", "hypothesis testing",
    "causal inference", "DAG reasoning", "time-series modeling",
    "Markov processes", "convex / non-convex optimization",
    "Bayesian hyperparameter optimization", "simulation-based evaluation",
  ],
  compliance: [
    "HIPAA", "SOC 2", "SOX compliance workflows", "IT risk controls",
    "data quality validation",
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
