---
created: 2025-05-29 05:52:50
modified: 2025-05-29 08:49:44
tags:
  - probability
---
> [!tldr] 
> The Law of Total Expectation states that the expected value of a random variable can be found by averaging the conditional expected values over different conditions or groups. 

The **Law of Total Expectation**, also known as the **Law of Iterated Expectations** or the **Tower Property**, states:
$$
\mathbb{E}[X] = \mathbb{E}_{Y}[\mathbb{E}[X|Y]]
$$
In simpler terms,***"The overall average of something is the average of the averages within different groups"***

For example, imagine you want to find the average of all students in a school. You could directly calculate the average height by measuring every student. Alternatively, you could find the average height for each grade level (e.g., average height for 1st graders, 2nd graders, etc.) and then take a weighted average of those individual grade averages (weighted by the number of students in each grade). Both methods will yield the same overall average height.

**Where is the Law of Total Expectation (LOTE) required?**
As illustrated by the example, it can simplify complex calculations by breaking down a large problem into smaller, more manageable parts. This is particularly useful when direct calculation of $\mathbb{E}[X]$ is difficult, but conditional expectations $\mathbb{E}[X|Y]$ are easier to determine.

[@Murphy2022Probabilistic{41-42}]


### Reference
