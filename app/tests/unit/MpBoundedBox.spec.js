import { shallowMount } from '@vue/test-utils'
import { assert, expect } from 'chai'

import MpBoundingBox from '@/components/MpBoundingBox.vue'

describe('MpBoundedBox.vue', function () {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(MpBoundingBox)
    })

    it('mounts the component', () => {
        assert.isOk(wrapper) 
    });

    it('disables submit button', () => {
        const btn = wrapper.find('.qa--submit')

        expect(btn.classes()).to.not.include('cursor-not-allowed')

        wrapper.setProps({ isDisabled: true })

        expect(btn.classes()).to.include('cursor-not-allowed')
    })

    it('disables clear button', () => {
        const btn = wrapper.find('.qa--clear')

        expect(btn.classes()).to.not.include('cursor-not-allowed')

        wrapper.setProps({ isDisabled: true })

        expect(btn.classes()).to.include('cursor-not-allowed')
    })

    it('emits a submit event', () => {
        const btn = wrapper.find('.qa--submit')

        btn.trigger('click')

        expect(wrapper.emitted().click).to.be.an('array').that.is.not.empty;
    })

    it('emits a clear event', () => {
        const btn = wrapper.find('.qa--clear')

        btn.trigger('click')

        expect(wrapper.emitted().clear).to.be.an('array').that.is.not.empty;
    })
});
