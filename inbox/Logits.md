logits play crucial role in deep learning. every neural network spits out logits as their outputs.
it's used in every task such like regression, classification even text generation whatsover. 
what are logits? why we use them? I will answer that questions with two main phases. first I will dig into where they are originated and then how they applied in the AI field 

logistic regression 



The Relationship between the logistic function and the logit function

The standard sigmoid (logistic) function
$$
f(x) = \frac{1}{1+e^{-x}} = \frac{e^{x}}{e^{x}+1} = \frac{e^{x/2}}{e^{x/2}+e^{-x/2}}
$$
로지스틱 함수는 인구의 성장을 모델링하기 위해 벨기에 수학자에 의해 처음으로 고안됨.
지수적으로 인구가 증가하다가도 성장률을 꺾이는 변곡점을 갖는 것이 특징임.

특히 0과 1사이의 값을 갖는 '표준' 로지스틱 함수의 경우, 확률적인 해석이 가능하여, 확률 및 통계 분야에서 많이 사용됨. 





The **logit** of the probability is the logarithm of the odds, and is also called the **log-odds**
$$
\text{logit}(p) = \ln\left( \frac{p}{1-p} \right)
$$

