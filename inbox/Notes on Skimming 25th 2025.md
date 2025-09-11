### Monday
[The Rise of AI Companions: How Human-Chatbot Relationships Influence Well-Being](https://arxiv.org/abs/2506.12605)
-  **Research Question:** How AI companions influence psychological well-being, specifically examining the impact of user-chatbot relationship nature, interaction intensity, self-disclosure, and real-life social support.
- **Conclusion:** 
	- Companionship-oriented chatbot usage is consistently associated with lower psychological well-being, especially with more intensive engagement
	- Deep self-disclosure to chatbots is risky, correlating with the lowest levels of well-being, particularly for sensitive topics like emotional distress or suicidal thoughts, as chatbots lack true reciprocity and understanding.
	- Users with smaller social networks are more prone to seeking chatbot companionship and self-disclosing, but this compensatory use does not mitigate negative outcomes and may reinforce social isolation, aligning with the Social Substitution Hypothesis. **Chatbots cannot adequately replace human connection.**
- **Limitation:** The study's cross-sectional design prevents establishing causality between chatbot use and mental health, highlighting the possibility of reverse causation or confounding.
 - **My Thought:** The results are the opposite of what many people believe about chatbots helping with mental health.

[Learning Distribution-Wise Control in Representation Space for Language Models](https://arxiv.org/abs/2506.06686)
- **Research Question:** How to effectively explore the continuous concept space, which leads to the proposal of replacing deterministic intervention nodes with stochastic ones to learn latent distributions directly.
- **Conclusion:** Distribution-wise interventions (D-Interventions), which explore the surrounding regions of the concept subspace by learning latent distributions, consistently outperform pointwise interventions in controllability and robustness, particularly when applied to the early layers of language models, with a mixed strategy yielding optimal results.



## Wednesday
[Drag-and-Drop LLMs: Zero-Shot Prompt-to-Weights](https://arxiv.org/abs/2506.16406)
- Research Question: Modern PEFT methods such as LoRA still require a separate optimization run for every downstream dataset.
- Drag-and-Drop LLMs (DnD): A prompt-conditioned parameter generator -> remove per-task training 



## 대회 설명
화합물의 구조 및 CYP3A4 효소 저해율(%inhibition)에 대한 학습용 데이터 1,681종을 이용해 예측 모델을 개발. 개발한 예측 모델로 경진대회 평가 데이터를 사용하여 예측한 값을 제출.

## 평가지표
- A = Inhibition(%)의 Normalized RMSE
$$
\text{Normalized RMSE}= \frac{\text{RMSE}}{\text{max}(y)-\text{min}(y)}
$$
- B = 예측값과 실제값 간의 선형 상관관계를 측정, 예측값이 실제값의 변화 경향성을 잘 반영하는지 측정
$$
\text{Pearson Correlation Coefficient} = \text{clip}\left( \frac{\text{Cov}(y,\hat{y})}{\delta_{y}\cdot\delta_{\hat{y}}} \right),0,1
$$
- Final Score: $0.5 \times(1-\text{min(A, 1)}) +0.5\times B$

## 데이터
- `train.csv`
	- CYP3A4 효소 저해 관련 데이터 1,681종
	- ID : 고유 ID
	- Canonical_Smies : 분자구조 데이터
	- Inhibition : 저해율(단위 : %)
	
- `test.csv`
	- ID : 고유 ID
	- Canonical_Smies : 분자구조 데이터