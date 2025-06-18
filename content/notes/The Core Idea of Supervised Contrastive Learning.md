---
created: 2025-06-08 14:32:49
modified: 2025-06-18 12:51:36
tags:
  - loss-function
  - ai-training
---
***Supervised Contrastive Learning enhances traditional contrastive loss by incorporating class label information.***

In **Self-Supervised Learning**, the model typically infers positive pairs based on augmented views of the same instance, making it unaware of how many other truly positive samples (from the same class) might exist within a given batch. It primarily focuses on distinguishing an anchor from negative samples, and only implicitly learns about "positive" by treating augmented views of the anchor as positive.

In **Supervised Contrastive Learning**, however, since class labels are provided, the model can precisely identify all samples belonging to the same class within a batch. This allows it to explicitly pull together all "in-class" samples (positives) and push away "out-of-class" samples (negatives), leading to more discriminative feature learning.


### Bibliography
Khosla, P., Teterwak, P., Wang, C., Sarna, A., Tian, Y., Isola, P., Maschinot, A., Liu, C., & Krishnan, D. (2021). _Supervised Contrastive Learning_ (No. arXiv:2004.11362). [https://doi.org/10.48550/arXiv.2004.11362](https://doi.org/10.48550/arXiv.2004.11362)