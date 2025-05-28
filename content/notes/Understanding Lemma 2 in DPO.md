---
created: 2025-05-14 12:54:03
modified: 2025-05-28 01:51:34
tags: [alignment, reinforcement-learning]
---
> ***Lemma 2.** Two reward functions from the same equivalence class induce the same optimal policy under the constrained RL problem.* — @RafailovEtAl2024Direct, p. 5

According to the [[Understanding The Equivalence Between Two Reward Models in DPO|Definition]], two reward functions, $r$ and $r'$, belong to the **same equivalence class** if they differ only by a baseline function $f(x)$. In simpler terms, $r'(x,y)=r(x,y)+f(x)$.

Let's look at Eq. 4 [@RafailovEtAl2024Direct{4}], which describes the optimal policy derived under the Plackett-Luce (specifically, Bradley-Terry) Preference framework:
$$
\pi_{r'}(y|x) = {\frac{1}{\sum_{y}\pi_{\text{ref}}(y|x)\exp\left( {\frac{1}{\beta}r'(x,y)} \right)}}\pi_{\text{ref}}(y|x)\exp\left( {\frac{1}{\beta}r'(x,y)} \right)
$$ 
When we substitute $r'(x,y)$ with $r(x,y)+f(x)$, we can demonstrate that $\pi_{r'}=\pi_{r}$ by leveraging the properties of exponential functions [@RafailovEtAl2024Direct{18}].

This means that even if equivalent reward functions have different absolute reward values, their **relative reward relationships** between answers remain identical. Consequently, they will lead to the exact same optimal policy.

### Reference