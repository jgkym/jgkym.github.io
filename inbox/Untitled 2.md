Deformable ROI Pooling

이전 ROI Pooling 방식이 보인 한계점
-> 단순히 고정 크기로 ROI를 바꿔줌

geometric transformation 
feature map 안에 불규칙적으로 분포한 정보들을 캐치하는데 어려움
이를 해결하기 위해

ROI feature map의 그리드의 고정된 위치를 확인하는게 아니라
얘를 미세하게 움직임으로써 feature를 가장 잘 나타내는 위치를 찾고 거기에서 pooling

