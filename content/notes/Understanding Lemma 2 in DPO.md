---
created: 2025-05-14 12:54:03
modified: 2025-05-18 15:15:14
lang: ko
tags: [alignment, reinforcement-learning]
status: false
---
> ***Lemma 2.** Two reward functions from the same equivalence class induce the same optimal policy under the constrained RL problem.* — @RafailovEtAl2024Direct, p. 5

[[Understanding The Equivalence Between Two Reward Models in DPO|Definition]]에 따르면, same equivalence class 에 있는 두 reward function $r, r'$ 은 baseline 이 $f(x)$ 만큼 차이나는 관계에 있다.

Eq. 4 [@RafailovEtAl2024Direct{4}] 를 다시 살펴보면, Plackett-Luce (특히 Bradley-Terry) Preference framework 하에서 도출되는 optimal policy 는 다음과 같다:
$$
\pi_{r'}(y|x) = {\frac{1}{\sum_{y}\pi_{\text{ref}}(y|x)\exp\left( {\frac{1}{\beta}r'(x,y)} \right)}}\pi_{\text{ref}}(y|x)\exp\left( {\frac{1}{\beta}r'(x,y)} \right)
$$ 
$r'(x,y)$ 을 $r(x,y) + f(x)$ 로 대체하게 되면, 지수 함수의 성질을 활용하여 $\pi_{r'}=\pi_{r}$ 임을 보일 수 있다 [@RafailovEtAl2024Direct{18}].

즉, equivalent 한 reward function 들은 비록 reward 의 절대값에서는 차이가 있더라도, 답변들 사이의 **상대적인 reward 관계**는 동일하기 때문에, 결국 똑같은 optimal policy 를 찾을 수 있다는 의미.

## Reference