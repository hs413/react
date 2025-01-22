## Hooks

### useState
- 함수컴포넌트 내부의 상태를 정의하고 관리하는 훅
- 상태를 변경할 때마다 컴포넌트가 재렌더링 됨

**게으른 초기화**
- useState 초기값으로 리터럴 대신 함수를 전달하는 것
- 무거운 연산이 요구될 경우 사용
```javascript
const [value, setValue] = useState(() => {
  // ... 무거운 어쩌구 연산
})
```

### useEffect
- 부수효과를 일으키기 위한 훅
- state나 props의 변화로 일어나는 렌더링에서 발생하는 부수효과를 핸들링한다.

**클린업 함수**
- useEffect의 콜백 함수를 실행하기 전에 실행되는 함수
- 이벤트를 등록할 경우 클린업 함수로 이전 이벤트를 지워줘야한다.

### useReducer
- 복잡한 state를 사전에 정의된 dispatcher로만 수정할 수 있게 하여 관리를 쉽게 해줌 

```javascript
function init(count) {
  return count;
}

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'up':
      return { count: state.count + 1}
    case 'down':
      return { count: state.count - 1 > 0 ? state.count - 1 : 0 }
    case 'reset':
      return init(action.payload || { count: 0 })
    default:
      // error
  }
}

function App() {
  const [state, dispatcher] = useReducer(reducer, initialState, init);
  
  function handleUp() {
    dispatcher({ type: 'up' })
  }
  
  function handleDown() {
    dispatcher({ type: 'down' })
  }
  
  function handleReset() {
    dispatcher({ type: 'reset', payload: { count: 1 } })
  }
  
  return (
      <div className="App">
        <h1>{state.count}</h1>
        <button onClick={handleUp}>+</button>
        <button onClick={handleDown}>-</button>
        <button onClick={handleReset}>reset</button>
      </div>
  )
}
```
- 반환값
  - state: useReducer가 가지고 있는 값
  - dispatcher: state 업데이트 함수, 단순 값이 아닌 action을 넘겨준다
- 인수
  - reducer: reducer의 action을 정의하는 함수
  - initialState: 초기값
  - init: 지연 초기화 함수

### useLayoutEffect
- useEffect와 유사
- 실행순서
  - dom 업데이트
  - useLayoutEffect 실행
  - 브라우저에 변경 사항 반영
  - useEffect 실행
- 실행이 종료될 때까지 기다린 다음 화면을 그리기 때문에 성능 문제가 발생할 수 있어 반드시 필요한 경우에만 사용 
  - dom 요소 기반의 애니메이션, 스크롤 위치 제어 등

### useDebugValue
- 개발 과정에서 사용하며 리액트 개발자 도구에서 볼 수 있음
```javascript
function useDate() {
  const date = new Date()
  useDebugValue(date, (date) => `현재 시간: ${date.toISOString()}`);
  return date;
}

function App() {
  const date = useDate();
  // ...
}
```
- 두 번째 인수는 포메팅 함수
- 다른 훅 내부에서만 실행 가능, 컴포넌트 레벨에서 실행 불가능 

### 훅의 규칙
- 최상위에서만 훅을 호출해야 한다
  - 반복문, 조건문, 중첩 함수에서 실행 불가능 
- 훅의 호출은 함수 컴포넌트, 사용자 정의 훅에서만 가능
  - 일반 JS 함수에서 호출 불가능















