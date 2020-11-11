const render = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
});
const server = require('express')();
const entry = require('./entry-server')

server.get('*', (req, res) => {
    const context = {
        url: req.url,
        title: 'Hello Vue SSR',
        metas: `
            <meta name="keyword" content="vue,ssr">
            <meta name="description" content="vue srr demo">
        `,
    }

    render.renderToString(entry()).then(html => {
        res.end(html)
    }).catch(err => {
        console.log(err);
        res.status(500).end('Internal Server Error')
        return
    })
})

server.listen(8080)
