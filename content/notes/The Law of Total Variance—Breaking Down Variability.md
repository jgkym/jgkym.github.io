---
created: 2025-05-29 06:42:52
modified: 2025-05-29 08:50:01
tags:
  - probability
---
> [!tldr] 
> The total variability of a random variable can be split into the average variability within different conditions and the variability of the averages across those conditions.

The **Law of Total Variance** states that the total variance of a random variable $X$ can be expressed as:
$$
\mathbb{V}[X] = \mathbb{E}_{Y}[\mathbb{V}[X|Y]] + \mathbb{V}_{Y}[\mathbb{E}[X|Y]]
$$
1. **The average spread *within* groups**: $\mathbb{E}_{Y}[\mathbb{V}[X|Y]]$, it quantifies the average variance of $X$ when you consider specific conditions or groups defined by $Y$.
2. **The spread *between* the averages of the groups**: $\mathbb{V}_{Y}[\mathbb{E}[X|Y]]$, it measures how much the conditional means of $X$ (the average of $X$ for each group of $Y$) vary from each other.

The power of the Law of Total Variance (LOTV) lies in its ability to decompose variances, offering a deeper understandings of the factors contributing to overall variability.

For instance, consider the variance of heights of all students in a school. Using LOTV, we can decompose this total variance into:
- The average variance of heights *within* each grade level.
- The variance *between* the average heights of each grade level.

This decomposition allows us to discern whether the overall variability in student heights is more influenced by difference between grades (e.g., seniors are generally taller than freshmen) or by the natural height variations within each grade (e.g., some freshmen are taller than others). This provides valuable insights into the primary drivers of variability.

[@Murphy2022Probabilistic{42-43}]

### Reference