<template>
    <div id="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
    name: 'ScrollView',
    mounted () {
        this.iscroll = new IScroll(this.$refs.wrapper, {
            mouseWheel: true,
            scrollbars: false,
            probeType: 3, // 经测试, 2不卡
            // 解决拖拽卡顿问题
            scrollX: false,
            scrollY: true
        })
        // 通过定时器刷新滚动范围的方法并不合理
        /* setTimeout(() => {
            console.log(this.iscroll.maxScrollY)
            this.IScroll.refresh()
            console.log(this.iscroll.maxScrollY)
        }, 200) */
        // 1.创建一个观察者对象
        /*
        const observer = new MutationObserver((mutationList, observer) => {
        })
        MutationObserver构造函数只要监听到了指定内容发生了变化, 就会执行传入的回调函数
        mutationList: 发生变化的数组
        observer: 观察者对象
        * */
        const observer = new MutationObserver(() => {
            this.iscroll.refresh()
        })
        // 2.告诉观察者对象我们需要观察什么内容
        const config = {
            childList: true, // 观察目标子节点的变化，添加或者删除
            subtree: true, // 默认为 false，设置为 true 可以观察后代节点
            attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
        }
        // 3.告诉观察者对象, 我们需要观察谁, 需要观察什么内容
        /*
        第一个参数: 告诉观察者对象我们需要观察谁
        第二个参数: 告诉观察者对象我们需要观察什么内容
        * */
        observer.observe(this.$refs.wrapper, config)
    },
    methods: {
        scrolling (fn) {
            this.iscroll.on('scroll', function () {
                fn(this.y)
            })
        },
        refresh () {
            setTimeout(() => {
                this.iscroll.refresh()
            })
        },
        scrollTo (x, y, time) {
            this.iscroll.scrollTo(x, y, time)
        }
    }
}
</script>

<style lang="scss">
#wrapper{
    width: 100%;
    height: 100%;
}
</style>
