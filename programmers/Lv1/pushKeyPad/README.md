# [카카오 인턴] 키패드 누르기 (Lv1)
- - -
<img src="https://user-images.githubusercontent.com/29765842/196465537-9e186b0d-afd1-414d-b8a2-fadda61fdc56.png" width=400px height=400px>

+ 1, 4, 7은 무조건 왼손이

+ 3, 6, 9는 무조건 오른손이

+ 2, 5, 8, 0은 왼손과 오른손이 전에 있던 위치에서 각각 가로거리와 세로거리의 합을 고려하여 더 가까운 쪽이 누르게 된다.

+ 왼손의 처음 위치는 * 키패드에, 오른손의 처음 위치는 # 키패드에 있다.
- - -

+ 오른손과 왼손, 그리고 누르게 될 가운데의 2, 5, 8, 0의 위치를 x, y좌표 프로퍼티를 가진 객체로 생각하고 풀었다.

+ 처음에 인자로 주는 배열에서 0이라는 원소를 11로 교체하고 문제풀이를 진행했다.

+ 조건문을 너무 많이 쓰고, 거리계산을 위해 특정 코드를 너무 길게 써서 가독성이 좋지 않다.

+ 하나의 테스트 케이스 : `console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));`