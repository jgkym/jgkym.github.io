---
created: 2025-05-04
modified: 2025-05-14
lang:
tags: [ai/finetuning, ai/reinforcement-learning]
---
## RL Is Expensive
- RLHF 는 다음 두 단계 필요함:
	1. 사람의 선호도를 반영한 reward model 을 먼저 학습시켜야 함
	2. 학습된 reward model 을 기반으로 언어 모델을 강화학습 (PPO 등) 으로 최적화해야 함
- [[RLHF의 계산을 어렵게 만드는 Partition Function|LLM 같은 대규모 모델에 강화학습 적용하려면 문제 많음]]:
	- 계산 비용 매우 많이 듬
	- 학습 과정 불안정함 (unstable)

 [@RafailovEtAl2024Direct{4}]

## Reference
