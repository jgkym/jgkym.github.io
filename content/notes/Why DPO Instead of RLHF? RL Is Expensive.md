---
created: 2025-05-25 23:48:32
modified: 2025-05-28 01:51:34
tags:
  - finetuning
  - reinforcement-learning
  - dpo
---
Reinforcement Learning from Human Feedback (RLHF) requires two main stages, both of which come with significant costs:
1. **Training a Reward Model**: First, you need to train a separate reward model that accurately reflects human preferences.
2. **Optimizing the Language Model with RL**: Then, you use this learned reward model to optimize the language model itself through reinforcement learning algorithms like PPO.

As highlighted in [[The Partition Function—Making RLHF Computations Difficult|here]], applying reinforcement learning to large-scale models like LLMs presents several challenges:
- **High Computational Cost**: The process is extremely resource-intensive.
- **Training Instability**: The learning process can often be unstable and difficult to manage.

 [@RafailovEtAl2024Direct{4}]

### Reference