Distributed training 의 3가지 유형

- data parallelism: 데이터를 겹치지지 않게 나누어 여러 머신에게 분배함.
- model parallelism: 모델을 겹치지 않게 나누어 여러 머신이 각자 담당함. 마치 F1의 피트인.
- pipeline parallelism: 앞에 머신이 어떤 작업을 수행하면, 다음 사람이 그 다음 작업을 수행하는 방식. e.g., 컨베이어 벨트