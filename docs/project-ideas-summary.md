# Project Suggestions Context

## Available Projects

1. Optimal Country Relocation Model
2. Wikipedia Clickstream & ChatGPT Topic Trends
3. AI Bias Auditor
4. Representation of Women in Knowledge Sources
5. Titanic Survival Prediction
6. TripAdvisor Sentiment Classifier
7. Football Match Outcome Predictor
8. Open Project (Build Your Own)

---

## Project Progression Path

Each project can follow the following progression:

**Level 1 — Data Exploration**
- Clean the data
- Visualise the data
- Understand the characteristics of the dataset

**Level 2 — Statistical Modelling**
- Build a statistical model
- Use linear regression or logistic regression depending on the task

**Level 3 — Advanced Methods**
- Use machine learning or more advanced modelling approaches
- Improve the evaluation metrics of your Level 2 model

---

# Project 1: Optimal Country Relocation Model

**Domain:** Economics / Data Science / Public Policy  

**Core Question:**  
Which country maximises quality of life while minimising tax burden?

## Data Sources
- World Bank
- OECD
- Numbeo
- Tax Foundation

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| EDA | Compare tax rates, median salaries, and cost of living |
| Statistical Analysis | Analyse correlation between tax and quality of life |
| Modelling | Multi-objective scoring model |
| ML Extension | Cluster countries into relocation profiles |

## Possible Models

- Linear regression
- Weighted scoring model
- K-means clustering

**Evaluation:**  
Develop your own custom utility score for determining the best country.

---

# Project 2: Wikipedia Clickstream & ChatGPT Topic Trends

Based loosely on large-scale topic analysis papers:  
https://arxiv.org/html/2405.10205v1

**Domain:** NLP / Data Science

**Core Question:**  
What topics are most frequently associated with ChatGPT discussions?

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| Data Cleaning | Process clickstream data |
| Network Analysis | Graph of topic relationships |
| Regression | Predict topic popularity |
| ML Extension | Topic modelling (LDA) |
| Advanced | Graph embeddings |

## Possible Models

- Linear regression
- TF-IDF
- LDA topic modelling
- Graph centrality measures

## Evaluation

- R² for regression
- Custom coherence score for topic modelling

---

# Project 3: AI Bias Auditor

**Domain:** AI Ethics / Responsible Machine Learning

**Core Question:**  
Can we measure and quantify bias in AI systems?

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| Dataset Analysis | Analyse gender / racial distribution |
| Statistical Test | Compute disparate impact ratio |
| ML Evaluation | Compare model fairness |
| Advanced | Fairness-constrained optimisation |

## Possible Models

- Logistic regression
- Random forest
- Fairness-aware ML models

## Evaluation Metrics

- Accuracy
- Demographic parity
- Equal opportunity difference
- Custom fairness score

---

# Project 4: Representation of Women in Knowledge Sources

**Domain:** Social Data Science / Web Scraping

**Core Question:**  
How well are women represented in educational or public knowledge platforms?

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| Scraping | Extract names and roles |
| Classification | Gender detection |
| Statistical Comparison | Percentage representation |
| ML Extension | Named Entity Recognition |

## Possible Models

- NLP classification
- Regex-based extraction
- BERT NER (advanced)

## Visual Output

Build a tool that scrapes a source such as:

- Wikipedia
- News websites
- Textbooks

Then quantify representation of women and display it in an **interactive dashboard** using tools like:

- Plotly
- Streamlit

---

# Project 5: Titanic Survival Prediction

**Domain:** Classification / Supervised Learning

**Core Question:**  
Which features most strongly predict survival?

Dataset:  
https://www.kaggle.com/competitions/titanic

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| EDA | Survival rates by gender and class |
| Feature Engineering | Family size, title extraction |
| Modelling | Compare classifiers |
| Advanced | SHAP explainability |

## Models to Compare

- Logistic regression
- Random forest
- XGBoost

## Evaluation Metrics

- Accuracy
- ROC-AUC
- Confusion matrix

---

# Project 6: TripAdvisor Sentiment Classifier

**Domain:** NLP / Deep Learning

**Core Question:**  
Can we classify hotel reviews by sentiment?

Dataset:  
https://www.kaggle.com/datasets/joebeachcapital/hotel-reviews/data

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| Text Cleaning | Tokenisation |
| Baseline Model | Naive Bayes |
| ML Model | Logistic regression |
| Advanced | Fine-tuned transformer |

## Evaluation Metrics

- F1 score
- Precision
- Recall
- Confusion matrix

## Extension

Visualise sentiment trends across:

- Different locations
- Ratings
- Hotels

---

# Project 7: Football Match Outcome Predictor

Dataset:  
https://www.kaggle.com/datasets/martj42/womens-international-football-results

**Domain:** Sports Analytics

## Suggested Workflow

| Stage | Suggested Work |
|------|----------------|
| EDA | Win/loss distribution |
| Feature Engineering | Elo ratings |
| Modelling | Classification |
| Advanced | Time-series modelling |

## Possible Models

- Logistic regression
- Gradient boosting
- Bayesian rating model

## Evaluation Metrics

- Accuracy
- Log-loss

---

# Project 8: Open Project (Build Your Own)

Participants should define their own project.

## 1. Problem Definition

Clearly state:

- What question are you trying to answer?
- Is the task:
  - Prediction
  - Classification
  - Optimisation
  - Causal inference
  - Pattern discovery

Also explain:

- Why is the problem interesting?
- Is it socially, economically, scientifically, or mathematically relevant?

---

## 2. Dataset

Participants must specify:

- Source of dataset (include public link)
- Dataset size and structure
- Number and type of features
- Any anomalies or assumptions

Also discuss:

- Data type (tabular, text, time series, image, graph)
- Data limitations
- Ethical considerations
- Bias and fairness concerns

Questions to consider:

- Why is this dataset suitable?
- What preprocessing is required?
- What are possible sources of noise?

---

## 3. Modelling Approach

Explain and justify your modelling approach.

Examples:

- Linear regression
- Logistic regression
- Tree-based models
- Neural networks
- NLP models
- Bayesian models
- Time-series models
- Graph models
- Clustering / unsupervised methods

Example progression:

1. Baseline model (e.g. ARMA time-series model)
2. Improved model (e.g. GARCH volatility model)
3. Advanced extension
4. Evaluation and comparison

---

## 4. Evaluation Metrics

Define:

- What metric determines success?
- Why this metric is appropriate?

Possible metrics:

- Accuracy
- F1 score
- ROC-AUC
- RMSE / MAE
- Log-loss
- Fairness metrics
- Custom utility score

---

## 5. Impact of the Analysis

Consider the potential impact of your work:

- Society
- Individuals
- Policy
- Business decisions
- Scientific understanding
- Environmental sustainability
- AI fairness
- Resource allocation