import { createLocalVue, mount } from '@vue/test-utils'
import { assert } from 'chai'

import MpFooter from '@/components/MpFooter.vue'

describe('MpFooter.vue', function () {

    it('mounts the component', () => {

        const vm = createLocalVue()
        const wrapper = mount(MpFooter, {
            vm
        })

        assert.isOk(wrapper) 
    });
});
