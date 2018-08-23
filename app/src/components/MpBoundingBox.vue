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
            <h3>Bounding Box</h3>
            <div class="flex flex-wrap -mx-3 mb-6 mt-6 qa--box-form">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-x-min">
                        lower left latitude
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
                        lower left longitude
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
                        upper right latitude
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
                        upper right longitude
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
                    yMin: "-120", // Default values
                    yMax: "-90",
                    xMin: "30",
                    xMax: "60"
                },
                isOpen: true,
            }
        },

        methods: {
            onSubmit: function() {
                this.$emit('click', this.input)
            },
            onClear: function() {
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
