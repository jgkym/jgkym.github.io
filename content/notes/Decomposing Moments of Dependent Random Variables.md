> [!tldr]
> When random variables are dependent, we can use information from one to understand the moments (like expected value and variance) of another. This allows us to break down overall summary statistics by considering different conditions or subgroups within a sample space.

If you have two or more dependent random variables, you can leverage the information from one random variable to calculate the moments (like expected value or variance) of another. This is incredibly useful for gaining deeper insights into your data.

Imagine your sample space can be divided into various related "conditions" or subgroups. The key idea here is that the overall summary statistics for the entire space can be explained or understood through the summary statistics of its constituent parts.
- **[[The Law of Total Expectation—The Averaging of Averages|The Law of Total Expectation (LOTE)]]** allows us to express the expected value of a random variable as the sum (or average) of its expected values under different conditions. It essentially breaks down the overall expectation into parts based on those conditions.
- **[[The Law of Total Variance—Breaking Down Variability|The Law of Total Variance (LOTV)]]** allows us to decompose the variance of a random variable based on specific conditions. This means we can understand how much variability comes from within these conditions versus how much comes from the differences between the conditions' averages.

The primary reason for performing such decomposition is to:
1. **Gain Deeper Insight:** It helps us understand the sources of variability or the contributing factors to an overall average. Instead of just knowing a single number, we can see *why* that number is what it is by breaking it down into components related to different conditions or groups.
2. **Identify Key Drivers:** It allows us to pinpoint which factors or conditions have the most significant impact on the overall moment (e.g., whether differences between groups or variations within groups are more influential).
3. **Simplify Complex Problems:** By conditioning on another variable, we can sometimes simplify the calculation of moments for a complex random variable.
4. **Model Building and Analysis:** In statistical modeling, this decomposition is fundamental for building more accurate models and understanding the relationships between variables.

[@Murphy2022Probabilistic{41}]


### Reference