---
created: 2025-04-25
modified: 2025-05-14
lang: ko
tags: [devops]
---
**문제점**
- 서버 용량을 수동으로 할당 → 유저 수 예측 어려움
- 배포 시 서버를 꺼야 함 → 서비스 중단 발생
	- 문제가 생기면 개발자는 새벽 일어나서 고쳐야 되기도

**개선**
1. **Auto-Scaling**
	→ 트래픽에 따라 서버 자원을 자동으로 조절 (수요 대응 유연성 확보)
2. **Zero Downtime Deployments**
    → 서비스 중단 없이 안전하게 배포 가능
3. **Self-Healing Systems**
    → 장애 발생 시 자동 복구로 운영 안정성 향상
