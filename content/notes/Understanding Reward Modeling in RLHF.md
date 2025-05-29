---
created: 2025-05-25 23:48:28
modified: 2025-05-28 10:02:28
tags:
  - finetuning
  - reinforcement-learning
  - dpo
---
### 1. Generate Responses With a Fine-tuned Model
A fine-tuned model, $\pi^{\text{SFT}}$, is given a prompt $x$ to generate two distinct responses $y_{1}$ and $y_{2}$. 
$$
(y_{1}, y_{2}) \sim \pi^{\text{SFT}}(y|x)
$$

### 2. Human Labeling (Preference Collection) 
A human labeler evaluates the two responses $(y_{1},y_{2})$ and indicates which one is better, resulting in a preferred response $y_{w}$​ (winner) and a dispreferred response $y_{l}$​ (loser). This pattern of preferences will be used by the reward model to assign future preference scores.  
  
### 3. Reward Model
There are various methods for modeling preferences, with the Bradley-Terry (BT) model being the most popular. 
- **[[Interpreting The Bradley-Terry Model for Preferences|Bradley-Terry Model]]:** 
$$
p^{*}(y_{1}>y_{2}|x)=\frac{{\exp(r^{*}(x,y_{1}))}}{\exp(r^{*}(x,y_{1}))+\exp(r^{*}(x,y_{2}))}

$$ 
This equation calculates the probability that $y_{1}$​ is preferred over $y_{2}$​ given prompt $x$, based on their respective reward scores $r^{*}$.

### 4. Maximum Likelihood Estimation (MLE)
1. MLE is used to train the reward model $r_{\phi}$​
2. This can be framed as a binary classification problem (classifying which response is preferred).	
3. The training involves minimizing the negative log-likelihood function:
    $$
    \mathcal{L}_{R}(r_{\phi},\mathcal{D}) = -\mathbb{E}_{(x,y_{w},y_{l})\sim \mathcal{D}}[\log \sigma(r_{\phi}(x,y_{w})-r_{\phi}(x,y_{l}))]
    $$
    This loss function aims to maximize the probability of assigning a higher reward to the preferred response ($y_{w}$) compared to the dispreferred response ($y_{l}$) based on the collected dataset $D$.

[@RafailovEtAl2024Direct{3}]

### Reference