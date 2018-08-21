import { createLocalVue, mount } from '@vue/test-utils'
import { assert } from 'chai'
import sinon from 'sinon'

import MpMap from '@/components/MpMap.vue'
import MapFactory from '@/services/map.service.js'
import GrpcService from '@/services/grpc.service.js'

import GrpcServiceClientMock from '~/mocks/grpc.mock.js'

const sandbox = sinon.createSandbox();

describe('MpMap.vue', function () {

    let wrapper

    const vm = createLocalVue()

    window.exports = {
        MapService: {
            List: () => true
        }
    }

    beforeEach(() => {
        sandbox.stub(MapFactory, 'build').returns({})
        sandbox.stub(GrpcService, 'client').returns(new GrpcServiceClientMock)

        wrapper = mount(MpMap, {
            vm
        })
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('mounts the component', () => {
        assert.isOk(wrapper) 
    });

    it('has a map container', () => {
        assert.isOk(wrapper.find('#map-container').exists())
    })
});
