---
id: 202505041047
lang: ko
tags: [ai/finetuning, ai/reinforcement-learning]
status: true
---
## Optimization Objective
$$
\mathbb{E}_{{x \sim D}, {y \sim \pi_{\theta}(y|x)}}[r_{\phi}(x,y)] - \beta \mathbb{D}_{\text{KL}}[\pi_{\theta}(y|x)\|\pi_{\text{ref}}(y|x)]
$$

- $\mathcal{D}$: 주어진 데이터의 분포
- $\pi_{\theta}$: 강화학습 중인 LM (or policy). 대개 $\pi^{\text{SFT}}$ 로 초기화
- $\pi_{\text{ref}}$: 주로 $\pi^{\text{SFT}}$
- $x \sim \mathcal{D}$: 프롬프트 $x$ 는 주어진 데이터 분포를 따른다. 즉, 새로 입력되는 프롬프트 또한 기존과 크게 다른 모습은 아닐 것.
- $y \sim \pi_{\theta}(y|x)$: 답변 $y$ 는 현재 강화학습 중인 LM $\pi_{\theta}$
- $r_{\phi}(x,y)$: 프롬프트 x 에 대한 답변으로 $y$ 가 얼마나 좋은지를 점수 메기는 reward model function
- $\mathbb{D}_{\text{KL}}[\pi_{\theta}(y|x)\|\pi_{\text{ref}}(y|x)]$: 현재 강화학습 중인 LM $\pi_{\theta}$ 가 생성하는 답변이 우리가 참고하는 LM $\pi_{\text{ref}}$ 의 답변과 얼마나 동떨어져 있는지를 가늠.
	-> $\pi_{\theta}$ 가 선호도 학습에 치우게 된다면 (즉, 오버피팅), 오히려 학습된 LM 의 답변 생성 능력을 잃을 수 있음 (e.g., 답변의 정확성)
- $\beta$: $\pi_{\theta}$ 가 $\pi_{\text{ref}}$ 과 멀어졌을 때, 패널티를 얼마나 줄 것인지 조절하는 파라미터

> [!abstract] 
>
> 답변에 대한 선호도를 평균적으로 끌어올릴 것임. 과정에서, 답변 품질을 등한시하고 너무 모양새에만 치중하지 않도록 제약을 둘 것임.

[@rafailov2023{3–4}]

## Reference
