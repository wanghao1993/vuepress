module.exports = {
    title: 'vuepress-demo',  // 设置网站标题
    dest: './vuepress/dist',    // 设置输出目录
    base: '/vuepress/',
    themeConfig: {
        nav: [
          { text: 'Web', link: '/web/html' },
          { text: 'App', link: '/app/nav' },
          { text: 'Github', link: 'https://github.com/' },
        ],
        // sidebar: [
        //     {
        //         title: 'Web',
        //         collapsable: false,
        //         children: [
        //             ['web/html', 'HTML'],
        //             ['web/css', 'CSS']
        //         ]
        //     }
        // ]
       
        // sidebar: [
        //     ['web/html', 'HTML'],
        //     ['web/css', 'CSS']
        // ],
        sidebar: {
            '/web/': [['html', 'HTML'], ['css', 'CSS'], ['js', 'JS']],
            '/app/': [['content', 'CONTENT'], ['nav', 'NAV'], ['header', 'HEADER']]
        }
    }
}