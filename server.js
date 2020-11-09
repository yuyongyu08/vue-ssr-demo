const Vue = require('vue');
const render = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
});
const server = require('express')();

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The visited URL is: {{ url }}</div>`
    });

    const context = {
        title: 'Hello Vue SSR',
        metas: `
            <meta name="keyword" content="vue,ssr">
            <meta name="description" content="vue srr demo">
        `,
    }

    render.renderToString(app, context).then(html => {
        res.end(html)
    }).catch(err => {
        console.log(err);
        res.status(500).end('Internal Server Error')
        return
    })
})

server.listen(8080)
