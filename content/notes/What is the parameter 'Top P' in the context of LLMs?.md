---
created: 2024-10-14
modified: 2025-05-14
lang: ko
tags: [llm]
---
**Top P**는 LLM 에서 자주 사용되는 **샘플링 기법의 하이퍼파라미터** 중 하나로, **nucleus sampling**이라고도 불린다. 이는 모델이 다음 토큰을 생성할 때 사용할 후보 토큰의 **누적 확률 분포 상위 P%** 내에서만 선택하도록 제한하는 방식이다.

Temperature 와 함께 사용되며, **생성 결과의 Randomness**를 조절하는 데 쓰인다.
- **Top P 가 낮을수록**
	-> 상위 소수의 확률이 높은 토큰만 고려하게 되어,
	-> **더 결정적이고 사실 기반**의 응답 경향을 보인다.
- **Top P 가 높을수록**
	-> 더 많은 후보 토큰을 고려하게 되어,
	-> **더 창의적이고 다양한 응답**이 생성될 수 있다.

## Reference
https://www.promptingguide.ai/introduction/settings
