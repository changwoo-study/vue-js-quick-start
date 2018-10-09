import {expect} from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'

import store from '@/store'
import List from '@/components/List'
import Constant from '@/Constants'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('List.vue', () => {
    let wrapper;

    before(() => {
        wrapper = mount(List, {store, localVue});
    });

    it('초기 렌더링 화면 테스트', (done) => {
        Vue.nextTick().then(() => {
            expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4);
            done();
        }).catch(done);
    });

    it('새로운 todo 추가 후 목록 확인', (done) => {
        wrapper.vm.$store.dispatch(Constant.ADD_TODO, {todo: '스쿼시'});
        wrapper.vm.$store.dispatch(Constant.ADD_TODO, {todo: '수영'});
        Vue.nextTick().then(() => {
            let list = wrapper.vm.$el.querySelectorAll('li');
            expect(list[list.length - 1].textContent).to.contain('수영');
            expect(list[list.length - 2].textContent).to.contain('스쿼시');
            expect(list.length).to.equal(6);
            done();
        }).catch(done);
    });
});