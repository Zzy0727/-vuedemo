var app = new Vue({
    el : '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'study JavaScript' },
            { text: 'study vue'},
            { text: 'entire project'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data:{
        message: 'Hello Vue.js!'
    },
    methods: {
        // 更改了应用的状态，但没有触碰DOM
        reverseMeassage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var ap6 = new Vue({
    el: '#app-6',
    data:{
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    // todo-item 组件现在接受一个“prop”，类似于一个自定义attribute
    // 这个prop名为todo
    props: ['todo'],
    template: '<li>{{ todo.text}}</li>'
})
// 将应用分割成了两个更小的单元。子单元通过prop接口与父单元进行良好的结耦

var app7 = new Vue({
    el: '#app-7',
    data:{
        groceryList: [
            {id:0, text: 'vegetable'},
            {id:1, text: 'cheese'},
            {id:3, text: 'anything which can eat'}
        ]
    }
})