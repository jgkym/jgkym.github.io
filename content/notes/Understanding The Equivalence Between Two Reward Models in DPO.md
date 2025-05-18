---
created: 2025-05-14 11:58:33
modified: 2025-05-18 13:28:47
lang: ko
tags: [ai/alignment, ai/reinforcement-learning]
status: false
---
> ***Definition 1.** We say that two reward functions $r(x,y)$ and $r'(x,y)$ are equivalent iff $r(x,y)−r'(x,y) = f(x)$ for some function $f$.* — @RafailovEtAl2024Direct, p. 5

Definition 에 따르면, 두 reward function $r_{1}$ 과 $r_{2}$ 가 equivalent 하다는 것은 두 함수의 차이가 답변 $y$ 에 의존하지 않고 오직 프롬프트 $x$ 에 의해서만 결정되는 함수 $f(x)$ 로 표현된다는 것을 의미한다.

예를 들어, 어떤 프롬프트 $x$ 에 대해 가능한 답변 $y_{1},y_{2},\dots,y_{5}$ 가 있다면, equivalent 한 두 reward function $r_{1}, r_{2}$ 의 reward 차이가 가능한 모든 답변에 대해 아래처럼 모두 똑같게 나옴.
$$
\begin{align}
r_{1}(x,y_{1})-r_{2}(x,y_{1})&=f(x) \\
r_{1}(x,y_{2})-r_{2}(x,y_{2})&=f(x) \\
\vdots \\
r_{1}(x,y_{5})-r_{2}(x,y_{5})&=f(x) \\
\end{align}
$$
즉, 같은 프롬프트 $x$ 가 주어지면 어떤 답변이 생성되든 두 reward function 값의 차이는 늘 일정한 값 $f(x)$ 로 유지됨.

## See Also
[[Understanding Lemma 1 in DPO]]  
[[Understanding Lemma 2 in DPO]]

## Reference
