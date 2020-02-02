<template>
    <div class="box__container">
        <div class="box__container-toggle" 
            :class="{'toggled': isOpen}"
            v-on:click="onToggle()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <form class="w-full max-w-md bg-secondary p-4 rounded" :class="{'hide': !isOpen}">
            <h3>Census Data</h3>
            <div class="flex flex-wrap -mx-3 mb-6 mt-6 qa--box-form">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block text-gray-500 font-bold">
                        <input 
                            class="mr-2 leading-tight"
                            type="checkbox"
                            id="state" 
                            value="true" 
                            v-model="input.state">
                        <span class="text-sm">
                            State Block Data
                        </span>
                    </label>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block text-gray-500 font-bold">
                        <input 
                            class="mr-2 leading-tight"
                            type="checkbox"
                            id="population"
                            value="true"
                            v-model="input.population">
                        <span class="text-sm">
                            Population Density
                        </span>
                    </label>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block text-gray-500 font-bold">
                        <input 
                            class="mr-2 leading-tight"
                            type="checkbox"
                            id="agencies"
                            value="true"
                            v-model="input.agencies">
                        <span class="text-sm">
                            Atlas Agencies
                        </span>
                    </label>
                </div>
                <div class="w-full mt-6">
                    <button 
                        class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none qa--submit"
                        :class="{'opacity-50 cursor-not-allowed': isDisabled}"
                        @click="onSubmit()"
                        :disabled="isDisabled"
                        type="button">
                            Submit
                    </button>
                    <button 
                        class="text-white font-bold py-2 px-4 rounded focus:outline-none qa--clear"
                        :class="{'opacity-50 cursor-not-allowed': isDisabled}"
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
    export default {
        name: 'mpBoundingBox',

        props: {
            isDisabled: Boolean
        },
        
        data: function() {
            return {
                input: {
                    state: false,
                    population: false,
                    agencies: false
                },
                isOpen: false,
            }
        },

        methods: {
            onSubmit: function() {
                this.$emit('click', this.input)
            },
            onClear: function() {
                this.input.state = false;
                this.input.population = false;
                this.input.agencies = false;
                this.$emit('clear')
            },
            onToggle: function() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hide {
        display: none;
    }

    .box {
    
        &__container {
            z-index: 1000;

            &-toggle {
                cursor: pointer;
                display: inline-block;
                position: absolute;
                margin: 1rem;
                right: 0;

                .bar1, .bar2, .bar3 {
                    width: 35px;
                    height: 5px;
                    background-color: black;
                    margin: 6px 0;
                    transition: 0.4s;
                }

                &.toggled {

                    display: block;

                    .bar1 {
                        background-color: white;
                        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                        transform: rotate(-45deg) translate(-9px, 6px);
                    }

                    .bar2 {opacity: 0;}

                    .bar3 {
                        background-color: white;
                        -webkit-transform: rotate(45deg) translate(-8px, -8px);
                        transform: rotate(45deg) translate(-8px, -8px);
                    }
                }
            }
        }
    }
</style>