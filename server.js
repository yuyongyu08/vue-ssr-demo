const render = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
});
const server = require('express')();
const createApp = require('./entry-server')

server.get('*', (req, res) => {
    const context = {
        url: req.url
    }

    createApp(context).then(app => {
        render.renderToString(app).then((err, html) => {
            if (err) {
                if (err.code === 404) {
                    res.status(404).end('Page not found')
                } else {
                    res.status(500).end('Internal Server Error')
                }
            } else {
                res.end(html)
            }
        })
    })
})

server.listen(8080)
