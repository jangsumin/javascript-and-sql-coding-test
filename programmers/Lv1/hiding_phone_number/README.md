### 해결 과정
* 입력으로 주어진 phone_number라는 파라미터는 원시타입(string)이므로 값이 불변성(immutability)을 가지고 있고, 배열로 바꿔주는 과정이 필요했습니다. → `split('')`
* 전화번호의 길이가 어떻게 되든 뒤에 4개만 보이게 하고 나머지는 숨겨야 하므로, for문의 종료시점을 phone_number.length-4로 지정!
* 배열을 다시 문자열로 바꾸어서 반환해야 하므로 join() 메서드를 사용했습니다.
    + `join()` :  이대로 쓰면 기본 구분자인 ,을 사용하므로 *,… 이런식으로 출력되게 됩니다.
    + `join(’’)` : 정답