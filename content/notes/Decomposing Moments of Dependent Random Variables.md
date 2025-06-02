---
created: 2025-05-29 08:48:41
modified: 2025-05-29 09:38:54
tags: [probability]
---
> [!tldr]
> When dealing with dependent random variables, we can use information from one to calculate the moments (like expectation and variance) of anohter. This allows us to break down overall statistical summaries into summaries of conditional parts.

Imagine you have two or more random variables that are linked. The cool thing is, you can actually use the information from one of these dependent variables to help you calculate the "moments" of another.

You can divide your entire sample space into different conditions. The "Law of Total Expectation" (LOTE) lets us express the expected value of a random variable as the sum of its expected values under these specific conditoins. Similarly, the "Law of Total Variance" (LOTV) allows us to break down the variance of a variable based on these same conditions.
  
### Why Go Through The Trouble of This "Decomposition"?
The main reason we do this decomposition is to simplify things. When random variables are dependent, directly calculating their moments can get pretty complicated. By conditioning on other variables and breaking down the problem, we can often make the calucations much more manageable and gain deeper insights into the relationships between the variables. It's all about making complex statistical analysis a bit more intuitive and clearer.


[@Murphy2022Probabilistic{41}]


### Reference