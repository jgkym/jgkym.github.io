---
created: 2025-05-04
modified: 2025-05-14
lang: ko
tags: [ai/alignment, ai/reinforcement-learning]
status: true
---
## Equation for Bradley-Terry (BT) Model
$$
p^{*}(y_{1}>y_{2}|x) = {\frac{\exp(r(x,y_{1}))}{\exp(r(x,y_{1}))+\exp(r(x,y_{2}))}}
$$

## Interpretation:
- 어떤 프롬프트 $x$ 에 대한 가능한 두 가지 답변 $y_{1}$ 과 $y_{2}$ 중에서, 사람들이 어떤 답변을 선호하는지 확률로 나타냄
- A latent (unknown) reward function $r^{*}(x,y)$: 프롬프트 $x$ 에 대한 답변 $y$ 가 얼마나 좋은지 (How 'good') 를 표현함
- Exponential transformation: Reward 가 항상 positive score 임을 보장
- Softmax: 값을 $[0, 1]$ 사이의 확률 형태로 나타낼 수 있음

[@RafailovEtAl2024Direct{3}]

## Reference
