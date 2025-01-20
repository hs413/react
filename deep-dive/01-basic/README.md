## JS 동등 비교
- props의 동등 비교는 컴포넌트의 렌더링이 일어나는 이유 중 하나이다.
- props의 동등 비교는 객체의 얕은 비교를 기반으로한다.

### JS의 데이터 타입 
- bigint
  ```javascript
  const bigInt = 1191919n;
  const bigInt2 = BigInt(19119);
  ```
  - number의 한계를 극복하기 위해 도입
- symbol
  - 중복되지 않는 고유한 값을 나타내기 위한 타입 
  ```javascript
  const key = Symbol('key');
  const key2 = Symbol('key');
  
  key === key2 // false
  
  Symbol.for('key') === Symbol.for('key') // true
   
  ```

### Object.is
- '===' 비교가 갖는 한계를 극복하기 위해 도입 
```javascript
-0 === +0 // true
Object.is(-0, +0) // false

Number.NaN === NaN // false
Object.is(Number.NaN, NaN) // true

NaN === 0 / 0 // false
Object.is(NaN, 0 / 0) // true
```
- 리액트에서 동등 비교 시 Object.is를 사용한다.
- 리액트는 객체의 얕은 비교만 구현한다.
  - 기본적으로 props의 값을 기준으로 렌더링을 수행하기 때문에 일반적으로 얕은 비교로 충분하다
  - props에 다른 객체를 넘겨주면 예상치 못한 작동을 할 수 있다.

### 함수
- 함수는 일급객체이다
  - 변수나 데이터 구조에 담을 수 있다. 
  - 함수의 인자로 전달할 수 있다.
  - 함수의 반환값으로 사용할 수 있다.
  - 런타임에 동적으로 생성할 수 있다.
