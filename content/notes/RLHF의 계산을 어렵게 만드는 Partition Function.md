---
created: 2025-05-12
modified: 2025-05-14
lang: ko
tags: [alignment, reinforcement-learning]
---
**TL;DR**
Optimal policy 에 대한 수식은 알려져 있지만, 정규화 상수 때문에 계산이 너무 복잡해서 실제로 쓰기 어려움.

**The optimal solution for the RLHF objective takes the following form:**

$$
\pi_{r}(y|x) = \frac{1}{Z(x)}\pi_{\text{ref}}(y|x)\exp\left( \frac{1}{\beta}r(x,y) \right),
$$

- 여기서 $Z(x)$ 는 partition function (정규화 상수)
- $Z(x)$ 는 모든 가능한 응답 $y$ 에 대해 계산해야 해서 비용이 매우 큼
- 심지어 MLE(Maximum Likelihood Estimation) 같은 상대적으로 효율적인 방법을 써도 $Z(x)$ 계산은 여전히 비쌈
- 따라서 이론상으로는 optimal policy 가 존재하지만, 계산 부담 때문에 실제로 적용하긴 어려움

[@RafailovEtAl2024Direct{4}]

## Reference