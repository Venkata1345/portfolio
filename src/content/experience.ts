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
    company: "Optum",
    start: "06/2025",
    location: "USA",
    achievements: [
      "Built a multi-agent patient-support system using LangGraph, LangChain, and FastAPI to orchestrate tool-calling across inquiry resolution and healthcare knowledge retrieval workflows, reducing request handling from 6 steps to 2 automated actions.",
      "Designed a hybrid RAG pipeline using BM25, Azure OpenAI text-embedding-3-large, and Reciprocal Rank Fusion over 85K+ provider guidelines and ICD-10 documents, improving retrieval precision by 18 points over vector-only search.",
      "Built document-ingestion pipelines using Azure Document Intelligence for OCR preprocessing and metadata validation across 40K+ protected healthcare records from 3 enterprise repositories, reducing ingestion error rate from 12% to under 2%.",
      "Developed an LLM evaluation framework using Ragas, LLM-as-a-Judge, and MLflow across 120+ healthcare test scenarios, enforcing answer faithfulness scores above 0.85 as a hard production release gate.",
      "Configured CI/CD and monitoring pipelines using Azure Machine Learning and Azure AI Search across 3 healthcare business units, enabling model releases with automated drift detection and 4-hour rollback SLA.",
    ],
  },
  {
    title: "AI Research Assistant",
    company: "University of Houston",
    start: "05/2024",
    end: "02/2025",
    location: "USA",
    achievements: [
      "Architected a computer vision pipeline using PyTorch and OpenCV to automate frame extraction, bounding box alignment, and edge detection across 2,000+ video frames for university research projects.",
      "Standardized a scikit-learn preprocessing framework for 30K+ multimodal records by handling missing values, reducing feature noise, and preparing datasets for deep learning model training.",
      "Fine-tuned Hugging Face Transformer models using PyTorch, LoRA, and mixed-precision training on academic conversational datasets across 2 university research benchmarks, improving semantic response relevance during internal evaluations.",
      "Optimized Transformer training workflows using Hugging Face and CUDA kernel tuning to reduce gradient allocation bottlenecks, decreasing multi-epoch training time by 18 hours across 2 shared GPU nodes.",
      "Spearheaded development of NeuroChat, a conversational RAG system using FAISS vector search and TensorBoard experiment tracking to support dense retrieval workflows, while supporting 4 junior researchers with containerized development environments.",
      "Integrated a conversational memory pipeline using ONNX Runtime and semantic sentence re-ranking to maintain session context across a 10,000-document technical knowledge base, improving evaluation MRR by 0.24 across 2 validation benchmarks.",
    ],
  },
  {
    title: "Software Developer",
    company: "KPMG",
    start: "01/2022",
    end: "12/2023",
    location: "India",
    achievements: [
      "Developed a backend data ingestion service using Python and Azure Functions to validate and process 1.5M+ financial transaction records monthly, reducing manual review effort by 60% across 3 audit engagement teams.",
      "Built RESTful APIs using Java Spring Boot and PostgreSQL to automate 8 SOX compliance workflows, streamlining assessment processing for 20K+ control test cases quarterly and eliminating 3 spreadsheet-based audit tools.",
      "Implemented automated data quality validation using Python and Great Expectations across 6 audit pipelines, defining 120+ business rules to catch anomalies early and cutting analyst escalations from ~25 issues/week to under 5.",
      "Deployed containerized microservices on Azure Kubernetes Service using Docker and Azure DevOps, supporting 15+ production releases per quarter with automated rollback policies and under 2% deployment failure rate.",
      "Refactored a legacy compliance dashboard into modular React components with TypeScript and Node.js, consolidating 8 compliance modules and reducing average page load time from 8s to under 5s during peak year-end close.",
    ],
  },
];
