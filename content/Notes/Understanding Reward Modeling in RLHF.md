---
id: 202505041019
lang:
tags: [ai/finetuning, ai/reinforcement-learning]
status: false
---
1. 파인튜닝 모델 $\pi^{\text{SFT}}$ + a prompt $x$ -> 두 개의 서로 다른 답변 $y_{1}, y_{2}$ 
$$
(y_{1}, y_{2}) \sim \pi^{\text{SFT}}(y|x)
$$
2. Human labeler. 두 답변 중에 어떤 답변이 더 나은지 사람이 직접 평가. $(y_{1}, y_{2})\to(y_{w}, y_{l})$
	여기에 나타난 패턴을 바탕으로 reward model 앞으로 선호도 점수를 메길 것임
3. Reward model
	- 선호도를 모델링하는 방법은 여러가지. 걔 중 BT가 가장 대중적.
	- [[Interpreting The Bradley-Terry Model for Preferences|Bradley-Terry Model]]:
$$
p^{*}(y_{1}>y_{2}|x)=\frac{{\exp(r^{*}(x,y_{1}))}}{\exp(r^{*}(x,y_{1}))+\exp(r^{*}(x,y_{2}))}
$$

4. Maximum Likelihood Estimation
	1. reward 모델 $r_{\phi}$ 를 학습시키기 위해 MLE 사용
	2. A binary classification
	3. Minimizing the negative log-likelihood function:
$$
\mathcal{L}_{R}(r_{\phi},D) = -\mathbb{E}_{(x,y_{w},y_{l})\sim D}[\log\sigma(r_{\phi}(x,y_{w})-r_{\phi}(x,y_{l}))]
$$

[@RafailovEtAl2024Direct{3}]

## Reference
