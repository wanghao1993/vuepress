#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
sudo rm -rf .vuepress/dist

# 生成静态文件
sudo npm run build

# 进入生成的文件夹

cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.ilosts.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:wanghao1993/vuepress.git master:gh-pages


cd -