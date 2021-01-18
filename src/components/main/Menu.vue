<template>
    <div class="header-menu">
        <button class="menu-item" @click="$emit('logout')">
            <p>logout</p>
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .header-menu {
        width: max-content;
        height: 100%;
    }
    .menu-item {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        outline: none;
        background: none;
        border: none;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        p {
            color: var(--font-color-inverse);
            transition: all .1s;
        }
        &:hover, &:focus {
            background: var(--darken);
            p {
                transform: scale(1.2);
            }
        }
        &:active {
            p {
                transform: scale(0.95);
            }
        }
    }

</style>