import Vue from 'vue';
import ComingSoon from '../../../src/components/ComingSoon';

describe('ComingSoon.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ComingSoon);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Coming Soon - Crafts Storefront Manager');
  });
});
