import { createLocalVue, mount } from '@vue/test-utils'
import { assert } from 'chai'

import MpHeader from '@/components/MpHeader.vue'

describe('MpHeader.vue', function () {

    it('mounts the component', () => {

        const vm = createLocalVue()
        const wrapper = mount(MpHeader, {
            vm
        })

        assert.isOk(wrapper) 
    });
});
