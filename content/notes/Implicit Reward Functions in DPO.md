---
created: 2025-05-25 23:48:13
modified: 2025-05-28 01:51:34
tags:
  - alignment
  - reinforcement-learning
  - dpo
---
> [!tldr] 
> DPO employs a clever trick to enable the training of an optimal policy without needing a separate reward model. The core idea is to express the reward function indirectly.

### How DPO Enables Learning Without a Reward Model
DPO re-formulates the equations so that the same learning can occur without directly using a reward model. It uses a technique called **change of variables** to express the reward function solely in terms of three components:
- **Optimal policy**: The policy capable of generating responses we prefer.
- **Reference policy**: The existing baseline policy.
- **Partition function**: The normalization constant, which is typically challenging to compute.

### Why This is Important
This approach is crucial because it allows us to optimize a policy using only **preference data**, without needing to explicitly train or evaluate a reward model. This makes the entire process significantly **simpler and more efficient**.

[@RafailovEtAl2024Direct{4}]

### Reference