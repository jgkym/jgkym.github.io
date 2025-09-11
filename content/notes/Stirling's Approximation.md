---
created: 2025-09-11 05:27:56
modified: 2025-09-11 06:39:22
tags:
  - probability
---
**Purpose:** Stirling's approximation is used to approximate the factorial of large numbers, which are computationally infeasible to calculate directly.

**The Approximation:** For a large number $n$, the factorial function is approximated as:

$$
n! \simeq \sqrt{2\pi n}\left(\frac{n}{e}\right)^n
$$

Taking the natural logarithm yields:

$$
\ln n! \simeq n\ln n - n + \frac{1}{2}\ln(2\pi n)
$$

The most significant part of the approximation, known as the **leading-order behavior**, is:
$$
n! \simeq \left(\frac{n}{e}\right)^n
$$

The term $\sqrt{2\pi n}$ is the **first-order correction**, which provides a more precise approximation.

### Derivation using the Poisson Distribution

The approximation can be derived from the Poisson distribution, which for large mean $\lambda$ can be approximated by a Gaussian distribution.

The Poisson distribution is given by:
$$
P(r|\lambda) = e^{-\lambda}\frac{\lambda^r}{r!}
$$
For large $\lambda$, the distribution is centered around $r=\lambda$ and is well-approximated by a Gaussian with mean $\lambda$ and variance $\lambda$:
$$
P(r|\lambda) \simeq \frac{1}{\sqrt{2\pi\lambda}}e^{-\frac{(r-\lambda)^2}{2\lambda}}
$$
By setting $r=\lambda$, we find the peak probability:
$$
P(\lambda|\lambda) = e^{-\lambda}\frac{\lambda^\lambda}{\lambda!} \simeq \frac{1}{\sqrt{2\pi\lambda}}
$$
Rearranging this equation gives Stirling's approximation for $\lambda!$:
$$
\lambda! \simeq \sqrt{2\pi\lambda}\left(\frac{\lambda}{e}\right)^\lambda
$$

### Application: Approximating the Binomial Coefficient

Stirling's approximation is particularly useful for approximating the logarithm of the binomial coefficient, $\ln\binom{N}{r}$.

Using only the leading-order behavior of Stirling's approximation, we get:
$$
\ln\binom{N}{r} = \ln\frac{N!}{(N-r)!r!} \simeq N\ln N - (N-r)\ln(N-r) - r\ln r
$$
This expression can be rewritten by factoring out $N$ and applying logarithm properties:
$$
\ln\binom{N}{r} \simeq N\left[\frac{N\ln N - (N-r)\ln(N-r) - r\ln r}{N}\right]
$$
$$
= N\left[\frac{N-r}{N}\ln\left(\frac{N}{N-r}\right)+\frac{r}{N}\ln\left(\frac{N}{r}\right)\right]
$$
Let $x = r/N$. The expression becomes:
$$
\ln\binom{N}{r} \simeq N\left[(1-x)\ln\left(\frac{1}{1-x}\right)+x\ln\left(\frac{1}{x}\right)\right]
$$
This result is directly related to the **binary entropy function** (often used in information theory), which is defined as:
$$
H_2(x) = -x\log_2 x - (1-x)\log_2(1-x) = x\log_2\left(\frac{1}{x}\right) + (1-x)\log_2\left(\frac{1}{1-x}\right)
$$
Thus, the approximation for the binomial coefficient can be expressed concisely as:
$$
\ln\binom{N}{r} \simeq N H_2\left(\frac{r}{N}\right)
$$
A more accurate approximation, including the first-order correction, is:
$$
\ln\binom{N}{r} \simeq N H_2\left(\frac{r}{N}\right) - \frac{1}{2}\ln\left[2\pi N\left(1-\frac{r}{N}\right)\left(\frac{r}{N}\right)\right]
$$

[@MacKay2003Information{1-2}]


## Reference
