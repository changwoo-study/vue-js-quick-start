# 디렉티브

## 기본 디렉티브

### v-text
innerText 속성에 연결됨.
```html
<div id="simple">
    <h2 v-text="message"></h2> <!-- message 와 바인딩 -->
</div>
```

### v-html
innerHTML 속성에 연결됨.
```html
<div id="simple">
    <h2 v-html="message"></h2> <!-- message 와 바인딩 -->
</div>
```

### v-bind
요소의 속성과 연결.
```html
<img v-bind:src="imagePath"> <!-- imagePath , img[src] 바인딩 -->
<img :src="imagePath">       <!-- 줄여쓰기 -->
<script>
  var model = {
      imagePath: 'http://sample.bmaster.kro.kr/photos/61.jpg'
  }
  ...
</script>

```

### v-model
양방향 데이터 바인딩

```html
<div id="simple">
  <input type="text" v-model="name" placeholder="이름을 입력하세요">
  <br>
  입력된 이름: <h2 v-html="name"></h2>
</div>
<script>
  var twoway = new Vue({
    el: '#simple',
    data: {
        name: ''
    }
  });
</script>
```


```html
<div id="simple1">
    <div>좋아하는 과일을 모두 골라주세요</div>
    <input type="checkbox" value="1" v-model="fruits">사과,
    <input type="checkbox" value="2" v-model="fruits">키위,
    <input type="checkbox" value="3" v-model="fruits">포도,
    <input type="checkbox" value="4" v-model="fruits">수박,
    <input type="checkbox" value="5" v-model="fruits">참외,
</div>
<hr>
<div id="simple2">
    선택한 과일들: <span v-html="fruits"></span>
</div>
<script>
var model = {
    fruits: []
};
var simple1 = new Vue({
    el: '#simple1',
    data: model
});
var simple2 = new Vue({
    el: '#simple2',
    data: model
});
</script>
```

#### v-model modifier
* lazy:   늦게 동기화
* number: 숫자 자동 형 변환
* trim: 문자열 앞 뒤 공백 제거

e.g. `<input type="text" v-model.lazy="name">`



### v-show, v-if, v-else, v-else-if 
* v-show: HTML 렌더링 후 조건에 맞지 않으면 display 속성으로 가림.
* v-if: 조건에 맞지 않으면 그리지 않음.

```html
<div id="account">
    예금액: <input type="text" v-model="amount">
    <img v-if="amount < 0" src="images/error.png" title="마이너스는 허용하지 않습니다.">
</div>
<script>
var account = new Vue({
    el: '#account',
    data: {
        amount: 0
    }
});
</script>
```

```html
<div id="account">
    잔고: <input type="text" v-model="balance">
    <br>
    회원님의 등급:
    <span v-if="balance >= 1000000">Gold</span>
    <span v-else-if="balance >= 500000">Silver</span>
    <span v-else-if="balance >= 200000">Bronze</span>
    <span v-else>Basic</span>
</div>
<script>
var account = new Vue({
    el: '#account',
    data: {
        balance: 0
    }
});
</script>
```



## 반복 렌더링 디렉티브

### v-for
`<tr v-for="contact in contacts"> ... </tr>`

`<option v-for="(v, label) in regions" v-bind:value="v">{{ label }}</option>`

`<option v-for="(v, label, index) in regions" ...> <!-- 인덱스를 얻을 수 있다. -->`



## 기타 디렉티브

### v-pre
텍스트 노드를 그대로 출력


### v-once
한 번만 렌더링하고 다시 수정하지 않음


### v-cloak
초기 컴파일되지 않은 템플릿은 나타나지 않도록 처리
