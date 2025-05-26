---
created: 2025-05-12 14:13:00
modified: 2025-05-12
lang: ko
tags: [alignment, reinforcement-learning]
status: false
---
1. Bradley-Terry Preference Model: 
$$
p^{*}(y_{1} > y_{2}|x) = \sigma(r^{*}(x,y_{1})-r^{*}(x,y_{2})), \tag{a}
$$
2. Optimal Policy in RLHF: 
$$
\pi_{r}(y|x) = \frac{1}{Z(x)}\pi_{\text{ref}}(y|x)\exp\left( \frac{1}{\beta}r(x,y) \right), \tag{b}
$$

**DPO Method**
- 수식 (b) 의 양변에 log 를 취하면 reward model $r$ 을 optimal policy $\pi_{r}$, reference policy $\pi_{\text{ref}}$, 그리고 partition function $Z(x)$ 로 나타낼 수 있음: 
$$
r(x,y)= \beta \log{\frac{\pi_{r}(y|x)}{\pi_{\text{ref}}(y|x)}} + \beta \log Z(x), \tag{c}
$$
- (c)에서 얻은 $r$을 ground-truth $r^{*}$ 또는 $\pi^{*}$에 적용할 수 있음.
	- 운이 좋게도, BT model은 $r^{*}$만으로 preference를 계산함
- (c)의 결과를 (a)에 적용하면 partition function $Z$가 사라지게 됨: 
$$
p^{*}(y_{1}>y_{2}|x) = \sigma\left( \beta \log{\frac{\pi^{*}(y_{1}|x)}{\pi_{\text{ref}}(y_{1}|x)}-\beta \log {\frac{\pi^{*}(y_{2}|x)}{\pi_{\text{ref}}(y_{2}|x)}}} \right)
$$

- 결국 reward function 을 따로 사용하지 않고 preference 가 반영된 optimal policy 를 직접 구할 수 있음.

**Bonus**
BT 를 포함하여, 보다 일반적으로 Plackett-Luce 모델이라면 이와 같은 방법을 적용할 수 있음.

[@RafailovEtAl2024Direct{4–5}]

## Reference
