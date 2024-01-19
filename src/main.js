import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// app.provide('app-message', 'app message입니다.');
// app.config.globalProperties.msg = 'hello';

// 컴포넌트 전역등록 예시
// import AppCard from '@/components/AppCard.vue';
// App.components('AppCard', AppCard);
// 전역 등록의 단점 : 빌드시스템 사용 시 컴포넌트를 사용하지 않더라도 계속해서 최종 빌드에 해당 컴포넌트가 포함되는것을 의미한다.
// 컴포넌트간의 종속관계를 확인하기 힘들어진다. 유지보수 차원에서도 힘들어짐

import 'bootstrap/dist/js/bootstrap.js';
