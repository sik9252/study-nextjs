# Next.js를 익히기 위한 미니 프로젝트

### 해당 프로젝트에 필요한 페이지 계획하기

1. **'/'**: 클라이언트 시작시 보여지는 첫 페이지
2. **'/events'**: 앱에 존재하는 모든 이벤트들을 보여주는 페이지
3. **'/events/[eventId]**: 선택한 이벤트의 상세 정보를 보여주는 페이지
4. **'/events/[...slug]**: 필터링 된 특정 기간의 이벤트를 보여주는 페이지

이후, 계획한 페이지들을 바탕으로 /pages의 폴더 안에 알맞게 페이지 컴포넌트들을 생성한다.

/events는 하위 페이지들이 존재하기 때문에 events라는 폴더 자체를 생성하여 그 아래에 페이지들을 작성한다.

---

### 더미 데이터 생성하기

지금은 서버와의 연결은 하지 않을 것이므로 더미 데이터를 생성한다.

프로젝트의 root 부분에 dummy-data.js라는 파일의 이름으로 생성하였다.

---

### 페이지에 들어갈 컴포넌트 생성하기

Next.js에서 /pages는 라우팅을 위한 폴더이기 때문에 이 하위에 view 컴포넌트를 생성하게 된다면 의도하지 않은 기능이 발생하게 될 것이다. 따라서 view와 같은 렌더링 컴포넌트는 /components란 폴더를 생성해 이 곳에 작성해준다.

여기서는 이벤트 목록을 보여줄 컴포넌트인 EventList.js라는 파일과 각각의 이벤트 하나하나에 해당하는 컴포넌트인 EventItem.js라는 파일을 추가했다.

1. HomePage에서 dummy-data.js의 이벤트 데이터들을 불러온다.
2. HomePage에서 EventList 컴포넌트를 불러오고, EventList 컴포넌트로 받아온 이벤트 데이터 목록을 넘겨준다.
3. EventList에서 EventItem 컴포넌트를 불러오고, EventItem 컴포넌트로 이벤트 데이터를 넘겨준다. (이벤트 제목, 내용, 날짜 등...)
4. css를 적용한다.

이번에 css를 적용할때는 styled-components 대신 module.css를 사용해보았다. 사용방법은 아래와 같다.

1. `생성할파일명.module.css`를 생성한다.
2. 생성한 스타일 파일을 연결할 컴포넌트에 `import classes from "./생성할파일명.module.css";`를 적용한다.
3. module.css 파일 안에 원하는 class명과 css 코드로 스타일을 생성한다.
4. 생성한 스타일을 적용할 요소에 `className={classes.클래스명}`을 적용한다.

---

### 재사용 가능한 컴포넌트로 만들기

버튼과 같이 여러 페이지에서 공통으로 사용되는 컴포넌트들은 재사용이 가능하게 만들어주는 것이 좋다.

---

### 레이아웃 Wrapper 컴포넌트 추가하기

여기서는 헤더와 푸터처럼 여러 페이지에서 공통으로 보여져야할 컴포넌트를 포함한 Wrapper 레이아웃 컴포넌트들 생성했다.

\_app.js 파일이 root 컴포넌트로 이 컴포넌트를 이용해 여러 페이지를 렌더링하고 페이지 이동시 콘텐츠를 전달한다. 따라서 \_app.js의 Component 위에 Header 컴포넌트를 추가한다면 \_app.js가 렌더링하는 모든 페이지에서 Header를 볼 수 있을 것이다.

1. /components 안에 /layout을 만들고 공통 Wrapper로 사용할 Layout 컴포넌트와 공통 레이아웃 안에 들어갈 Header 컴포넌트를 생성한다.
2. Layout 안에 Header를 넣는다.
3. \_app.js에 Layout 컴포넌트를 넣는다.
4. \_app.js가 렌더링하는 모든 페이지에서 방금 적용한 공통 레이아웃이 보이게 된다.

---

### Event Search 컴포넌트 추가하기

이벤트를 검색할 수 있는 컴포넌트를 추가한다. EventSearch.js라는 파일을 만들고 안에 검색 UI를 위한 코드를 설계한다.
또한, 이전에 만든 버튼 컴포넌트를 재사용 할 것인데 기존의 버튼 컴포넌트는 페이지 이동만을 위한 버톤으로 제작되어 코드의 수정이 필요하다.
따라서 아래와 같이 수정했다.

1. props에 link가 있는 경우에만 페이지 이동을 위한 버튼 컴포넌트를 반환하도록 if문으로 조건을 나눈다.
2. link가 없는 경우에는 기본 버튼을 반환한다.

마지막으로 이렇게 생성한 EventSearch 컴포넌트를 /event 페이지의 상단에 넣어주었다.

---

### Event Search 기능 추가하기

UI만 만들어놨던 Event Search 컴포넌트에 년도와 월을 입력받아 해당 년도(year)와 월(month) 값을 가지고 useRouter()를 이용해 `/events/search/2021-03`의 형태를 가진 url로 넘겨주는 가능을 구현한다.

url에서 2021-03부분을 router.query.slug를 이용해 파싱해와 알맞게 split 한 뒤 year, month 값을 필터링된 이벤트 정보를 가져오는 getFilteredEvents() 함수로 전달해서 이벤트 데이터를 가져와 화면에 뿌려준다.

---

### Error Alert 컴포넌트 추가하기

실제 서버와 응답을 하지 않기 때문에 각 http 에러에 대한 정의를 한 에러 핸들링은 아니고, 그저 이벤트 데이터가 없거나 잘못된 필터링을 입력했을때 보여줄 에러 페이지 UI를 여러 페이지에서 재사용 가능하게 만들었다.

---
