---
id: 202504262211
lang: ko
tags: [ai/prompting]
status: false
---
## 상황
인풋 언어에 맞춰 답변할 수 있도록 프롬프트에 기능 추가함.
(e.g., 한국어 -> 한국어, English -> English)
Instruction 은 영어로 작성했음.

## 문제
- 한국어 인풋이어도 아웃풋이 계속 영어로 나옴.
- 분명 액션 단위로 1) 인풋 언어 파악하고, 2) 그 언어로 아웃풋 작성하라고 지시했었음.
  (e.g., *If the input text is in Korean, then convert your note in Korean*)
- 심지어 성능 저하도 체감됨.
- 언어 사용을 지도하는 부분에서 바틀넥이 생긴 걸로 추정됨.

## 해결
- 결국 LLM 은 Next Token Prediction 구조.
- Instruction 에 직접 한글 토큰을 사용해서 한글 토큰 생성 확률을 높여줬음.
- 결과적으로 다음 토큰 예측 시 한국어 토큰을 더 자연스럽게 선택하도록 유도할 수 있었음.
- 수정 예시:
  (Before) *If the input is in Korean, then convert your note in Korean*
  (After) *If the input is in 한국어, 노트를 한국어로 작성해줘.*
