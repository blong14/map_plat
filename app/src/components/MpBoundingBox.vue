<template>
    <div class="container">
        <form class="w-full max-w-md bg-secondary p-4 rounded">
            <h3>Bounding Box</h3>
            <div class="flex flex-wrap -mx-3 mb-6 mt-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-x-min">
                        x-min
                    </label>
                    <input 
                        class="w-full bg-grey-lightest border border-grey-lighter rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-primary" 
                        id="grid-x-min" 
                        type="text"
                        v-model="input.xMin"
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-y-min">
                        y-min
                    </label>
                    <input
                        class="w-full bg-grey-lightest border border-grey-lighter rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-primary" 
                        id="grid-y-min" 
                        type="text"
                        v-model="input.yMin"
                    />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-x-max">
                        x-max
                    </label>
                    <input 
                        class="w-full bg-grey-lightest border border-grey-lighter rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-primary" 
                        id="grid-x-max"
                        type="text"
                        v-model="input.xMax"
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-y-max">
                        y-max
                    </label>
                    <input 
                        class="w-full bg-grey-lightest border border-grey-lighter rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-primary" 
                        id="grid-y-min"
                        type="text"
                        v-model="input.yMax" 
                    />
                </div>
                <div class="w-full mt-6">
                    <button 
                        class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none qa--submit"
                        :class="{'cursor-not-allowed': isDisabled}"
                        @click="onSubmit()"
                        :disabled="isDisabled"
                        type="button">
                            Submit
                    </button>
                    <button 
                        class="bg-secondar text-white font-bold py-2 px-4 rounded focus:outline-none qa--clear"
                        :class="{'cursor-not-allowed': isDisabled}"
                        @click="onClear()"
                        :disabled="isDisabled"
                        type="button">
                            Reset
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    const messages = require('@/proto/map_service_pb');

    export default {
        name: 'mpBoundingBox',

        props: {
            isDisabled: Boolean
        },
        
        data: function() {
            return {
                input: {
                    yMin: "",
                    yMax: "",
                    xMin: "",
                    xMax: ""
                }
            }
        },

        methods: {
            onSubmit: function() {
                this.$emit('click', this.input)
            },
            onClear: function() {
                this.$emit('clear')
            }
        }
    }
</script>
