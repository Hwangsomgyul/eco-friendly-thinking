- 주말내로 어느정도 작업 완료 및 구현하고자 하는 부분을 연습삼아 가장 익숙한 자바스크립트로 구현 후 리액트로 넘어가려 하였으나 문제점 및 처리가 되지 않는 부분 즉,
에로사항이 많아서 계획과 다르게 자바스크립트로 밖에 못 보여드린다는 점 양해 드립니다.
- 또한, 추후 일부가 변경될 것 임을 알려드립니다.

- issue -
1. 로컬 스토리지로 로그인을 구현하여 토큰을 담을 수 있게 설정하려 하였으나 로그아웃이 되지 않는 상황(이 부분은 프론트 팀들과 상의 결과 추후에 처리하기로 함)
2. 첫 페이지에서 graph가 나오도록 구현을 하였으나, 나오지 않는 현상
3. mainPage에서 해당 위치 클릭 및 검색창에 검색 입력 후 해당 지점 클릭시 창이 뜨도록 하는 것을 구현하려 했으나 못함
4. body, container 등 크기가 정확하지 않는 점 페이지의 면적 1920px중 body container는 1400px로 하려 하였으나, 문제점이 많음 크기 및 면적의 문제
5. mainPage 중앙부 이미지 화살표 부분 원래 의도는 자동으로 스무스하게 넘어가고 마우스 hover 시 멈추는 동작을 구현을 하고 싶었으나 해결하지 못하여
차선책으로 이미지가 계속 나올수 있게 ex- 8개의 이미지가 있다고 가정한다면 8번쨰 이미지가 끝남과 동시에 1번 이미지가 나오도록 하면서 버튼 클릭시 지속적으로 나오게
구현하고자 하였으나 이 역시 실패하여 현재 상태로 되었음
6. 현재 카카오 맵 api 부분을 이해를 하고자 주말간 맵 제작 api부터 마커, 오버레이 등 하나씩 구현을 하면서 이해를 하고자 직접 작성을 해보았으나,
실상 현재 원하고자 하는 결과물을 넣으려고 하게 되면 즉, 여러 기술들을 넣게되면 지도가 나오지 않는다던지 혹은 검색창이 나오지 않는다던지, 지점을 클릭시 아무런 효과가 나타나지 않는 등의 이슈가 발생하여 chatGPT의 도움으로 일단 구현을 해놓은 상태
7. 마찬가지로 pagination도 구글링을 하면서 주말간 연습을 하였으나, 그 조차도 구현이 되지 않아 chatGPT의 도움을 받아 구현을 일부 한 상태
8. 개인적으로 궁금한 것: UI를 구현을 한 후 api를 백엔드와 연결을 하여야 하는 걸로 아는데 이걸 어떻게 구현을 하여야할지?? 현재는 작업을 시작하는 시점이라 아직은 api가 연결없이 UI만 구성하게 하는 것으로 벅차긴 하지만, 후반부에 돌입하게 되면 api를 다루게 될 것이고 현재 이부분을 전혀 다루지를 못함
9. 추가적으로 로그인한 아이디 혹은 데이터를 다른 페이지에 나타낼 수 있도록 하는 구현부분은 어떻게 처리해야 하고 어떻게 검색하여 데이터를 연결을 하고 UI를 구현을 할 수 있는지 이 부분 역시 다루지 못함