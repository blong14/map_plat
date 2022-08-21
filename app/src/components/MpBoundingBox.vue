<template>
    <div class="box__container">
        <div class="box__container-toggle" 
            :class="{'toggled': isOpen}"
            v-on:click="onToggle()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <form :class="{'hide': !isOpen}">
            <article>
                <header>
                    <h3>Bounding Box</h3>
                </header>
                <label for="grid-x-min">
                    lower left latitude
                </label>
                <input
                    id="grid-x-min"
                    type="text"
                    v-model="input.xMin"
                />
                <label for="grid-y-min">
                    lower left longitude
                </label>
                <input
                    id="grid-y-min"
                    type="text"
                    v-model="input.yMin"
                />
                <label for="grid-x-max">
                    upper right latitude
                </label>
                <input
                    id="grid-x-max"
                    type="text"
                    v-model="input.xMax"
                />
                <label for="grid-y-max">
                    upper right longitude
                </label>
                <input
                    id="grid-y-min"
                    type="text"
                    v-model="input.yMax"
                />
                <footer>
                    <button
                        @click="onSubmit()"
                        :disabled="isDisabled"
                        type="button">
                            Submit
                    </button>
                    <button
                        @click="onClear()"
                        :disabled="isDisabled"
                        type="button">
                            Reset
                    </button>
                </footer>
            </article>
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
            position: absolute;
            right: 0;
            background: white;
            border-radius: 3px;


            &-toggle {
                cursor: pointer;
                display: inline-block;
                position: absolute;
                margin: 1rem;
                right: 0;

                .bar1, .bar2, .bar3 {
                    width: 35px;
                    height: 5px;
                    background-color: white;
                    margin: 6px 0;
                    transition: 0.4s;
                }

                &.toggled {

                    display: block;

                    .bar1 {
                        background-color: black;
                        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                        transform: rotate(-45deg) translate(-9px, 6px);
                    }

                    .bar2 {opacity: 0;}

                    .bar3 {
                        background-color: black;
                        -webkit-transform: rotate(45deg) translate(-8px, -8px);
                        transform: rotate(45deg) translate(-8px, -8px);
                    }
                }
            }
        }
    }
</style>
