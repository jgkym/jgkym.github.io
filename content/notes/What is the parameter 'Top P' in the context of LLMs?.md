---
created: 2025-05-25 23:48:47
modified: 2025-05-28 01:51:34
tags: [llm]
---
**Top P** is a hyperparameter often used in Large Language Models (LLMs) for **sampling techniques**, also known as **nucleus sampling**. It restricts the model to select the next token only from the **top P% of the cumulative probability distribution** of candidate tokens.

It's typically used alongside **Temperature** to control the **randomness of the generated output**.
- **Lower Top P values:**
    - Consider only a small number of high-probability tokens.
    - Tend to produce **more deterministic and factual** responses.
- **Higher Top P values:**    
    - Consider a wider range of candidate tokens.
    - Can lead to the generation of **more creative and diverse responses**.

### Reference
https://www.promptingguide.ai/introduction/settings
