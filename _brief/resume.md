# Resume — Source of Truth

> Extracted from the resume PDF provided by the user on 2026-07-29 (now shipped as `public/resume.pdf`).
> This is the neutral content that gets persona-ified into both A (Maester) and B (HIMYM) voices.

## Contact

- **Name**: Venkata Abhishek Gullipalli
- **Email (resume)**: abhishek.gullipalli1345@gmail.com
- **Phone**: 713-539-9097
- **Location**: Houston, TX, USA
- **LinkedIn**: https://www.linkedin.com/in/abhishek-gv/
- **GitHub**: https://github.com/Venkata1345

## Summary

AI Engineer and Software Developer with 4+ years of experience architecting AI systems and backend services across healthcare and financial services using Python, Java, TypeScript, PyTorch, LangChain, LangGraph, FastAPI, Spring Boot, React, Azure, Docker, and Kubernetes, delivering RAG pipelines, LLM fine-tuning, compliance workflow automation, and containerized microservices with CI/CD, automating 500+ hours of manual data processing monthly across audit and patient support workflows.

## Technical Skills

- **Programming Languages**: Python, Java, TypeScript, JavaScript, Node.js, SQL
- **AI/ML Frameworks**: PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, OpenCV, ONNX Runtime, CUDA
- **LLM & GenAI Tools**: LangChain, LangGraph, LlamaIndex, CrewAI, OpenAI API, Anthropic Claude API, FAISS, Reciprocal Rank Fusion, LoRA
- **Vector Databases**: Pinecone, Weaviate, Chroma, Qdrant
- **Model Evaluation & Observability**: Ragas, LLM-as-a-Judge, DeepEval, LangSmith, MLflow, TensorBoard, PromptFlow
- **Backend & API Development**: FastAPI, Java Spring Boot, RESTful APIs, GraphQL, React
- **Cloud Platforms**: Azure Machine Learning, Azure OpenAI, Azure AI Search, Azure Document Intelligence, Azure Functions, Azure Kubernetes Service, Azure Data Factory, Azure Blob Storage, Amazon SageMaker, AWS (Bedrock, Lambda, S3, Glue)
- **Data Engineering**: Apache Spark, Apache Kafka, Apache Airflow, Databricks, dbt
- **CI/CD & DevOps**: Docker, Kubernetes, Terraform, GitHub Actions, Azure DevOps
- **Databases & Data Quality**: PostgreSQL, Snowflake, MongoDB, Redis, Great Expectations

## Professional Experience

### AI Engineer — Optum
**06/2025 – Present | USA**

- Built a multi-agent patient-support system using LangGraph, LangChain, and FastAPI to orchestrate tool-calling across inquiry resolution and healthcare knowledge retrieval workflows, reducing request handling from 6 steps to 2 automated actions.
- Designed a hybrid RAG pipeline using BM25, Azure OpenAI text-embedding-3-large, and Reciprocal Rank Fusion over 85K+ provider guidelines and ICD-10 documents, improving retrieval precision by 18 points over vector-only search.
- Built document-ingestion pipelines using Azure Document Intelligence for OCR preprocessing and metadata validation across 40K+ protected healthcare records from 3 enterprise repositories, reducing ingestion error rate from 12% to under 2%.
- Developed an LLM evaluation framework using Ragas, LLM-as-a-Judge, and MLflow across 120+ healthcare test scenarios, enforcing answer faithfulness scores above 0.85 as a hard production release gate.
- Configured CI/CD and monitoring pipelines using Azure Machine Learning and Azure AI Search across 3 healthcare business units, enabling model releases with automated drift detection and 4-hour rollback SLA.

### AI Research Assistant — University of Houston
**05/2024 – 02/2025 | USA**

- Architected a computer vision pipeline using PyTorch and OpenCV to automate frame extraction, bounding box alignment, and edge detection across 2,000+ video frames for university research projects.
- Standardized a scikit-learn preprocessing framework for 30K+ multimodal records by handling missing values, reducing feature noise, and preparing datasets for deep learning model training.
- Fine-tuned Hugging Face Transformer models using PyTorch, LoRA, and mixed-precision training on academic conversational datasets across 2 university research benchmarks, improving semantic response relevance during internal evaluations.
- Optimized Transformer training workflows using Hugging Face and CUDA kernel tuning to reduce gradient allocation bottlenecks, decreasing multi-epoch training time by 18 hours across 2 shared GPU nodes.
- Spearheaded development of NeuroChat, a conversational RAG system using FAISS vector search and TensorBoard experiment tracking to support dense retrieval workflows while supporting 4 junior researchers with containerized development environments.
- Integrated a conversational memory pipeline using ONNX Runtime and semantic sentence re-ranking to maintain session context across a 10,000-document technical knowledge base, improving evaluation MRR by 0.24 across 2 validation benchmarks.

### Software Developer — KPMG
**01/2022 – 12/2023 | India**

- Developed a backend data ingestion service using Python and Azure Functions to validate and process 1.5M+ financial transaction records monthly, reducing manual review effort by 60% across 3 audit engagement teams.
- Built RESTful APIs using Java Spring Boot and PostgreSQL to automate 8 SOX compliance workflows, streamlining assessment processing for 20K+ control test cases quarterly and eliminating 3 spreadsheet-based audit tools.
- Implemented automated data quality validation using Python and Great Expectations across 6 audit pipelines, defining 120+ business rules to catch anomalies early and cutting analyst escalations from ~25 issues/week to under 5.
- Deployed containerized microservices on Azure Kubernetes Service using Docker and Azure DevOps, supporting 15+ production releases per quarter with automated rollback policies and under 2% deployment failure rate.
- Refactored a legacy compliance dashboard into modular React components with TypeScript and Node.js, consolidating 8 compliance modules and reducing average page load time from 8s to under 5s during peak year-end close.

## Resume Projects

> These are the two projects listed on the PDF. The **site** deliberately shows a
> different, stronger set (Nexus, NeuroChat, Nutri-Grade, ScaleVision) because those
> have live demos and public repos. See `_brief/profile.md`.

### Enterprise Knowledge Assistant using LLMs & Retrieval-Augmented Generation (RAG)

- Engineered an enterprise AI Knowledge Assistant using Python, LangChain, LLMs, RAG, FAISS, and prompt engineering, indexing 250K+ technical documents to provide context-aware responses, reducing internal knowledge search time by 65 hours per month across engineering teams.
- Developed vector embeddings, FastAPI, Docker, and Redis based retrieval pipelines with automated document ingestion and semantic search, supporting 8,000+ user queries while improving answer relevance and minimizing hallucinations through citation-based responses.

### Predictive Healthcare Risk Analytics Platform

- Built an end-to-end ML pipeline using Python, scikit-learn, XGBoost, pandas, feature engineering, and hyperparameter tuning to analyze 1.2M+ electronic health records, identifying 4,800+ high-risk patients for early clinical intervention and resource prioritization.
- Implemented MLflow, SHAP explainable AI, Apache Airflow, and FastAPI to automate model training, versioning, deployment, and real-time inference, reducing prediction processing time from 95 minutes to 28 minutes while providing transparent risk explanations for healthcare analysts.

## Education

- **MS, Engineering Data Science** — University of Houston, Houston, TX | 01/2024 – 12/2025

## Retained from the prior resume (not on the current PDF)

> The 2026-07-29 PDF trims these for length. They stay here because the site's
> Education and Archives sections still source from them — the omission is a
> resume-length decision, not a deletion. Confirmed with the user 2026-07-29.

- **B.Tech, Computer Science and Engineering** — GITAM University, Visakhapatnam, India | GPA 9.01/10
- MS GPA: 3.9/4.0
- Certificates: Academy Accreditation — Generative AI Fundamentals; Oracle Cloud Infrastructure 2025 Certified Data Science Professional; Oracle Cloud Infrastructure 2025 Certified Generative AI Professional; AI Agents Fundamental; NVIDIA Deep Learning; Neural Networks and Deep Learning; Transfer Learning for NLP with TensorFlow Hub
- *Publication*: An Experimental Study on Denoising the Images with Autoencoders
- Applied math & statistics depth: probability theory, Bayesian inference, hypothesis testing, causal inference (propensity, DAG reasoning), time-series modeling, Markov processes, convex / non-convex optimization, Bayesian hyperparameter optimization (Optuna), simulation-based evaluation
- Compliance exposure: HIPAA, SOC 2, IT risk controls
