```
## Task Description 
Build a regression model that predicts CYP3A4 enzyme inhibition (%)  values from canonical smiles. 

## Metric
Final Score = 0.5 * (1-min(Normalized RMSE, 1)) + 0.5 * Clipped Pearson Correlation Coefficient


## Dataset
1681 Canonical smiles with corresponding inhibition values
```

Can you assist me in identifying the current state-of-the-art for this task?

I encountered a few questions during this task. Would you be able to assist me with generating some ideas?

Q1. Is 1681 samples enough to use pre-trained models, or is it too small?
Q2. There is a data imbalance, with approximately 200 samples labeled as 0.0. Is this typical in the context of CYP3A4 enzyme inhibition, or should I take steps to address this imbalance?
Q3. What can I do to improve the model’s performance — should I add more layers or consider implementing other techniques