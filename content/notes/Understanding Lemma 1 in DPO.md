---
created: 2025-05-14 12:13:10
modified: 2025-05-28 01:51:34
tags: [alignment, reinforcement-learning]
---
>***Lemma 1.** Under the Plackett-Luce, and in particular the Bradley-Terry, preference framework, two reward functions from the same class induce the same preference distribution.* — @RafailovEtAl2024Direct, p. 5

The Plackett-Luce preference framework, including the Bradley-Terry model, is used to model the probability of preferring a specific item (e.g., a response $y$) among several options. This framework typically derives preference patterns based on the differences in reward function values. For instance, in the Bradley-Terry model, the probability $p(y_1>y_{2}∣x)$ that response $y_{1}$ is preferred over $y_{2}$ for a given prompt $x$ is calculated as follows:
$$
p(y_{1}>y_{2}|x) = \sigma(r(x,y_{1})-r(x,y_{2}))
$$
This equation shows that the greater the difference in reward values between two responses, $y_{1}$ and $y_{2}$, the higher the probability that $y_{1}$ will be preferred.

According to the [[Understanding The Equivalence Between Two Reward Models in DPO|Definition]], if two reward functions $r(x,y)$ and $r'(x,y)$ are equivalent, then $r'(x,y)$ can be expressed as:
$$
r'(x,y) = r(x,y) + f(x)
$$
When using two equivalent reward functions, $r$ and $r'$, the difference in reward values between two responses, $y_{1}$ and $y_{2}$, is calculated as:
$$
\begin{align}
r'(x,y_{1})-r'(x,y_{2}) &= (r(x,y_{1})+f(x))-(r(x,y_{2})+f(x)) \\
&= r(x,y_{1})-r(x,y_{2}) + f(x) - f(x) \\
&= r(x,y_{1})-r(x,y_{2})
\end{align}
$$
As the result shows, the reward difference between the two responses is the same whether calculated with $r$ or $r'$.

Since the Plackett-Luce framework is based on this **'reward difference'** to determine preference patterns, reward functions belonging to the same equivalence class will ultimately induce identical preference probability distributions.

### See also
@RafailovEtAl2024Direct, p. 17

### Reference
