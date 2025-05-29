---
created: 2025-05-25 23:49:04
modified: 2025-05-28 01:51:34
tags:
  - alignment
  - reinforcement-learning
  - dpo
---
### Bradley-Terry (BT) Model
$$
p^{*}(y_{1}>y_{2}|x) = {\frac{\exp(r(x,y_{1}))}{\exp(r(x,y_{1}))+\exp(r(x,y_{2}))}}
$$
### Interpretation
This equation models the **probability** that people prefer one response ($y_{1}$) over another ($y_{2}$​) when given a specific prompt ($x$).
- **A latent (unknown) reward function $r^{*}(x,y)$**: This function quantifies "how good" a response $y$ is for a given prompt $x$. This underlying "goodness" is what the model tries to estimate.
- **Exponential transformation**: The $\exp(\cdot)$ function ensures that the reward values are always positive. This is important because probabilities must be non-negative.
- **Softmax**: The overall structure of the equation resembles a softmax function, which takes the exponentially transformed reward values and normalizes them into a probability ranging between 0 and 1. This allows us to interpret the output as a clear preference probability.

[@RafailovEtAl2024Direct{3}]

### Reference