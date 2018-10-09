import {expect} from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'

import store from '@/store'
import TodoList from '@/components/TodoList'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoList.vue', () => {
    let wrapper;

    before(() => {
        wrapper = mount(TodoList, {store, localVue});
    });

    beforeEach(() => {
        // NOTE: 테스트가 겹치면 vuex 상태가 그대로 유지된다. 초기화하는 액션을 별개로 넣어 주었다.
        store.commit('resetTodo');
    });

    it('TodoList 초기 렌더링 화면 테스트', (done) => {
        Vue.nextTick().then(() => {
            expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4);
            done();
        }).catch(done);
    });

    it('클릭이벤트 후 렌더링 결과 확인', (done) => {
        // 입력값을 TodoList의 첫번째 자식 컴포넌트인
        // InputTodo 컴포넌트의 로컬 데이터에 새로운 todo 입력
        wrapper.vm.$children[0].$data.todo = '피겨강습';

        const evtClick = new window.Event('click');
        let addbutton = wrapper.vm.$el.querySelector('span.addButton');

        addbutton.dispatchEvent(evtClick);
        wrapper.vm._watcher.run();

        Vue.nextTick().then(() => {
            let list = wrapper.vm.$el.querySelectorAll('li');
            expect(list[list.length - 1].textContent).to.contain('피겨강습');
            expect(list.length).to.equal(5);
            done();
        }).catch(done);
    });
});
