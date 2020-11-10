//step 1
const Vue = require('vue');
const app = new Vue({
    template: 'Hello Vue SSR!'
})

//step 2 
const render = require('vue-server-renderer').createRenderer()


//step3 

render.renderToString(app).then(html => {
    console.log(html);
}).catch(err => {
    console.log(err);
})