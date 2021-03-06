import Vue from 'vue';
import Home from '../../../src/components/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Coming Soon - Crafts Storefront Manager');
  });
});
