---
id: 202504251354
lang: ko
tags: [cs/devops]
status: false
---
## Exposing 이란?
 → 애플리케이션을 인터넷 등 **외부 네트워크에 노출**하는 행위

## 관련 개념
- **Public Endpoint**
	→ 사용자가 접속하는 **URL 또는 IP 주소**, 앱의 "출입문"
- **Load Balancer**
	→ 여러 서버 (백엔드) 로 트래픽을 자동 분산해 **성능과 안정성 유지**

> [!note] Key Insight
> 
> ‘Exposing’은 내부에서 돌고 있는 앱이 **세상과 연결되는 순간**을 의미하며, 
> 그 지점에서의 안정성과 유연성을 위한 구성 요소가 **Public Endpoint 와 Load Balancer**다.

