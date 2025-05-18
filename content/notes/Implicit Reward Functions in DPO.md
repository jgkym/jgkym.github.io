---
created: 2025-05-12
modified: 2025-05-14
lang: ko
tags: [ai/alignment, ai/reinforcement-learning]
status: false
---
## TL;DR
DPO 는 reward model 없이도 optimal policy 를 학습할 수 있게 해주는 트릭을 씀. 핵심은 reward function 을 간접적으로 표현하는 것.

## Reward Model 없이도 학습 가능하게 만드는 원리
- DPO 는 reward model 을 직접 쓰지 않고도 똑같은 학습이 가능하게끔 수식을 바꿈.
- **Change of variables** 기법을 써서 reward function 을 다음 세 가지로만 표현함:
  - **optimal policy** (우리가 선호하는 답변을 생성할 수 있는 정책)
  - **reference policy** (기준이 되는 기존 정책)
  - **partition function** (정규화 상수, 보통 계산은 어려움)

## 왜 중요한가
- 이 방식 덕분에 실제 reward model 이 없어도 preference 데이터만으로 정책을 최적화할 수 있음.
- 보상 모델을 따로 훈련하거나 평가하지 않아도 되기 때문에 훨씬 간단하고 효율적임.

[@RafailovEtAl2024Direct{4}]

## Reference
