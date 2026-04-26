/**
 * experience.ts — neutral, recruiter-facing role facts. Pulled from
 * _brief/resume.md (the source of truth). Section labels and the
 * "currently sworn / Currently" present-label come from copy.ts and
 * get persona-flavored at render. The role facts themselves stay
 * neutral per Rule R2 (recruiter legibility outranks voice).
 */

export type Role = {
  title: string;
  company: string;
  start: string;
  /** Omit for the current role; the UI swaps in the presentLabel from copy.ts. */
  end?: string;
  location: string;
  achievements: string[];
};

export const roles: Role[] = [
  {
    title: "AI Engineer",
    company: "ECare Medical Group",
    start: "06/2025",
    location: "TX, USA",
    achievements: [
      "Established an AI evaluation framework using Ragas and LLM-as-a-judge methods, achieving 92% accuracy and reducing hallucinations by 15% through continuous testing pipelines.",
      "Implemented Responsible AI and safety protocols including crisis-detection escalation, anti-empathy testing, and HITL checkpoints, reducing unsafe responses by 24% and ensuring 99% compliance adherence.",
      "Engineered an advanced RAG pipeline using hybrid BM25 + vector retrieval with Reciprocal Rank Fusion, enhanced by Azure Semantic Ranker, improving retrieval precision by 8%.",
      "Architected a high-precision RAG ingestion pipeline using FastAPI with 1:1 page mapping and 100% metadata accuracy across medical manuals, reducing ingestion errors by 23%.",
      "Developed an agentic orchestrator to structure LLM outputs into JSON for deep-linked Quick Review features, optimized Azure AI Search with custom embedding batching, and built scalable ingestion APIs with automated evaluation suites.",
    ],
  },
  {
    title: "AI Research Assistant",
    company: "University of Houston",
    start: "05/2024",
    end: "02/2025",
    location: "TX, USA",
    achievements: [
      "Architected NeuroChat, a context-aware conversational system combining hybrid reasoning, semantic retrieval, and adaptive response generation, improving multi-turn coherence by 28% and contextual accuracy by 22%.",
      "Developed a context-persistent chatbot framework using vector embeddings, semantic re-ranking, and session memory, increasing document retrieval precision by 31%.",
      "Engineered scalable, low-latency inference pipelines using async processing, intelligent caching, and model optimization, reducing response latency by 5% under high concurrent load.",
    ],
  },
  {
    title: "AI/ML Engineer",
    company: "Salesforce India",
    start: "06/2021",
    end: "12/2023",
    location: "Remote, Andhra Pradesh, India",
    achievements: [
      "Architected a predictive CRM analytics platform integrating Salesforce Sales Cloud, Service Cloud, and external marketing data into Snowflake, enabling real-time lead scoring, opportunity forecasting, and anomaly detection.",
      "Built scalable data pipelines using Apache NiFi, Kafka, and Azure Data Factory, streaming customer interactions, engagement events, and sales metrics, improving predictive insights for sales teams by 18%.",
      "Engineered feature-extraction workflows with PySpark, dbt, and embedded Tableau/Grafana metrics to capture customer behavior and engagement patterns, improving lead-conversion predictions by 12% and churn detection by 10%.",
      "Developed ML models using XGBoost, Elastic Net, and Transformers to forecast pipeline revenue and detect churn, reducing forecast error by 5% and improving upsell recommendations across global accounts.",
      "Enhanced model explainability using SHAP, tuned via Optuna, validated with rolling time-series methods (RMSE 5.9, AUC 0.91), and deployed via Azure ML for transparent insights into marketing campaigns.",
      "Deployed predictive services using Docker, Kubernetes, KServe, and Azure Functions, automating retraining via Airflow and monitoring with Evidently AI, improving actionable recommendations by 21%.",
    ],
  },
];
