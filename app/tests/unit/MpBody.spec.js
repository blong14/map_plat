import { createLocalVue, shallowMount } from '@vue/test-utils'
import { assert, expect } from 'chai'
import sinon from 'sinon'

import MpBody from '@/components/MpBody.vue'
import GrpcService from '@/services/grpc.service.js'

import GrpcServiceClientMock from '~/mocks/grpc.mock.js'

const sandbox = sinon.createSandbox();

describe('MpBody.vue', function () {

    let wrapper

    const vm = createLocalVue()

    beforeEach(() => {
        sandbox.stub(GrpcService, 'client').returns(new GrpcServiceClientMock)

        wrapper = shallowMount(MpBody, {
            vm
        })
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('mounts the component', () => {
        assert.isOk(wrapper) 
    });

    it('sets fetching on clear', () => {
        wrapper.setData({ fetching: false })

        expect(wrapper.vm.fetching).to.be.false

        wrapper.vm.onInitialize()

        expect(wrapper.vm.fetching).to.be.true
    })

    it('sets fetching on submit', () => {
        wrapper.setData({ fetching: false })

        expect(wrapper.vm.fetching).to.be.false

        wrapper.vm.onSubmit()

        expect(wrapper.vm.fetching).to.be.true
    })

    it('ressets fetching on update', () => {
        wrapper.setData({ fetching: true })

        expect(wrapper.vm.fetching).to.be.true

        wrapper.vm.onUpdate()

        expect(wrapper.vm.fetching).to.be.false
    })
});
