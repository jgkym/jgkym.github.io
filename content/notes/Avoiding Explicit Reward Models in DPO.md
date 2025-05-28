---
created: 2025-05-12 14:13:00
modified: 2025-05-28 01:51:34
tags: [alignment, reinforcement-learning]
---
1. **Bradley-Terry Preference Model:** 
$$
p^{*}(y_{1} > y_{2}|x) = \sigma(r^{*}(x,y_{1})-r^{*}(x,y_{2})), \tag{a}
$$
2. **Optimal Policy in RLHF:** 
$$
\pi_{r}(y|x) = \frac{1}{Z(x)}\pi_{\text{ref}}(y|x)\exp\left( \frac{1}{\beta}r(x,y) \right), \tag{b}
$$
  
### DPO Method
By taking the logarithm of both sides of equation (b), we can express the reward model $r$ in terms of the optimal policy $π_r$​, the reference policy $π_{\text{ref}}$​, and the partition function $Z(x)$:
$$
r(x,y)= \beta \log{\frac{\pi_{r}(y|x)}{\pi_{\text{ref}}(y|x)}} + \beta \log Z(x), \tag{c}
$$
This derived $r$ from (c) can then be applied to the ground-truth reward function $r^{*}$ or optimal policy $\pi^{*}$. Fortunately, the Bradley-Terry (BT) model calculates preference using only $r^{*}$.

When we apply the result from (c) to equation (a), the partition function $Z(x)$ conveniently cancels out:
$$
p^{*}(y_{1}>y_{2}|x) = \sigma\left( \beta \log{\frac{\pi^{*}(y_{1}|x)}{\pi_{\text{ref}}(y_{1}|x)}-\beta \log {\frac{\pi^{*}(y_{2}|x)}{\pi_{\text{ref}}(y_{2}|x)}}} \right)
$$
Ultimately, this means that DPO allows us to directly derive the optimal policy that reflects preferences **without the need for a separate reward function**.

### Bonus  
This method is not limited to the Bradley-Terry model; it can be applied more generally to any Plackett-Luce model.

[@RafailovEtAl2024Direct{4–5}]

### Reference
