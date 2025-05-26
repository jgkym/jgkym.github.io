---
created: 2025-05-14 12:13:10
modified: 2025-05-18 13:28:51
lang: ko
tags: [alignment, reinforcement-learning]
status: false
---
>***Lemma 1.** Under the Plackett-Luce, and in particular the Bradley-Terry, preference framework, two reward functions from the same class induce the same preference distribution.* — @RafailovEtAl2024Direct, p. 5

BT 를 비롯한 Plackett-Luce preference framework 는 여러 항목 (e.g., response $y$) 중 특정 항목을 선호할 확률을 모델링하는데 사용된다. 이 프레임워크는 일반적으로 reward function 값의 차이를 기반으로 preference pattern 을 도출함. 예를 들어, Bradley-Terry 모델에서 프롬프트 $x$ 에 대해 답변 $y_{1}$ 이 $y_{2}$ 보다 선호될 확률 $p(y_{1}>y_{2}|x)$ 는 다음과 같이 계산됨.
$$
p(y_{1}>y_{2}|x) = \sigma(r(x,y_{1})-r(x,y_{2}))
$$
즉, 두 답변 $y_{1}$ 과 $y_{2}$ 에 대한 reward 값의 차이가 클수록 $y_{1}$ 을 더 선호할 확률이 높아짐.

[[Understanding The Equivalence Between Two Reward Models in DPO|Definition]]을 통해 두 reward function $r(x,y)$ 와 $r'(x,y)$ 가 equivalent 하다면 $r'(x,y)$ 를 다음과 같이 표현할 수 있음.
$$
r'(x,y) = r(x,y) + f(x)
$$

Equivalent 한 두 reward function $r$ 과 $r'$ 를 사용할 때, 두 답변 $y_{1}, y_{2}$ 에 대한 reward 값의 차이는 아래와 같음.
$$
\begin{align}
r'(x,y_{1})-r'(x,y_{2}) &= (r(x,y_{1})+f(x))-(r(x,y_{2})+f(x)) \\
&= r(x,y_{1})-r(x,y_{2}) + f(x) - f(x) \\
&= r(x,y_{1})-r(x,y_{2})
\end{align}
$$
결과에서 보듯이, $r$ 과 $r'$ 이 각자 계산하는 답변 간의 reward 차이가 동일함.

Plackett-Luce 프레임워크는 이 **'reward 차이 '** 에 기반하여 선호 패턴을 발견하므로, 같은 class 에 있는 reward function 들은 결국 완전히 동일한 선호 확률 분포를 유도하게 됨.

## See also
@RafailovEtAl2024Direct, p. 17

## Reference
