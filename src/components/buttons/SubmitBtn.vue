<template>
    <button class="btn-submit" :disabled="disabled" :type="type">{{label}}<img src="https://img.icons8.com/carbon-copy/50/ffffff/girl-running.png"/></button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: 'submit'
        },
        label: {
            required: true,
            type: String
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
    .btn-submit {
        padding: 10px 40px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        outline: none;
        border: none;
        border-radius: 2px;
        box-shadow: 0px 0px 3px var(--shadow);
        background: var(--primary);
        margin-bottom: 15px;
        color: var(--font-color-light);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform .2s;
        &:hover {
            filter: brightness(1.1);
        }
        &:active {
            transform: scale(0.95);
        }
        &:disabled {
            filter: brightness(0.7);
        }
    }
    img {
        margin-left: 0.25rem;
        width: 30px;
        height: 30px;
    }
</style>