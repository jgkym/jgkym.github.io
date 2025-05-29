---
created: 2025-05-25 23:46:53
modified: 2025-05-28 01:51:34
tags:
  - alignment
  - reinforcement-learning
  - dpo
---
>[!tldr] 
> While the formula for the optimal policy is known, the normalization constant (partition function) makes its computation prohibitively complex, making it impractical for real-world application.

### Partition Function
The optimal solution for the RLHF objective takes the following form:

$$
\pi_{r}(y|x) = \frac{1}{Z(x)}\pi_{\text{ref}}(y|x)\exp\left( \frac{1}{\beta}r(x,y) \right),
$$
Here, $Z(x)$ represents the **partition function** (or normalization constant).
- Calculating $Z(x)$ is **extremely computationally expensive** because it requires summing over all possible responses $y$.
- Even with relatively efficient methods like Maximum Likelihood Estimation (MLE), the computation of $Z(x)$ remains costly.
- Therefore, while an optimal policy theoretically exists, the significant computational burden makes its direct application challenging in practice.

[@RafailovEtAl2024Direct{4}]

 
### Reference