<template>
    <Header class="header">
        <div slot="left" class="header-left" @click.stop="back"></div>
        <p slot="center" class="header-title">{{title}}</p>
        <div slot="right" class="header-right"></div>
    </Header>
</template>

<script>
import Header from '../Header'
export default {
    name: 'SubHeader',
    components: {
        Header
    },
    props: {
        title: {
            type: String,
            default: '',
            required: true
        }
    },
    methods: {
        back () {
            window.history.back()
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.header{
    position: relative;
    z-index: 99;
    .header-left{
        @include bg_img('../../assets/images/back');
    }
    .header-right{
        @include bg_img('../../assets/images/more');
    }
    .header-title{
        line-height: 100px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        @include font_size($font_small);
    }
}
</style>
