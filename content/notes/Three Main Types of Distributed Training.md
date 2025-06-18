---
created: 2025-06-04 12:14:44
modified: 2025-06-18 12:39:36
tags:
  - ai-training
---
- **Data Parallelism:** A lot of data. Split the *data* into chunks, give each chunk to a different machine, and each machine trains a **full copy of the model** on its chunk. All model updates are then synced up.
	*"Multiple students each reading a different chapter of the same book, then sharing notes to get the full story."*

- **Model Parallelism:** Too big model for one machine. Split the *model* itself into pieces, and each machine handles a **specific part of the model**.
	*"An F1 pic crew, where each person has a dedicated task (like changing a tire) on the **same car**"*

- **Pipeline Parallelism:** Like an assembly line. Different stages of your model's computation are assigned to different machines. Data flows sequentially through the machines, with each one performing its specialized step.
	*"A conveyor belt where each station does a specific task before passing the item to the next station."*

[@Huyen2022Designing{168-172}]


### Reference
