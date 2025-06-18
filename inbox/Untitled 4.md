ROI를 찾는 방법 

2 dimensional 을 가정, 즉 HW
cartesian grid를 통해 bins 만들 수 있음
bins의 가능한 모든 조합이 바로 ROIs
가장 쉬운 예로는, bin의 top-left 좌표를 기준으로 stride만큼 x 혹은 y축 방향으로 area를 키워나갈 수 있음


$$
f_{t} = \sum_{u=1}^{n\times|\mathcal{R}|}\sigma(z_{u}^{(l)}\mathbf{W}_{2}+\mathbf{b}_{2})\odot (z_{u}^{(l)}\mathbf{W}_{3}+\mathbf{b}_{3})
$$
