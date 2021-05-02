import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "前端监控简介",
        "link": "web-monitor/web-monitor.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "git/git.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "git/git.html",
    'title': "Git使用",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Git使用</h1>\n<h3 id="%E6%81%A2%E5%A4%8D%E6%9C%AC%E5%9C%B0%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6">恢复本地删除文件<a class="anchor" href="#%E6%81%A2%E5%A4%8D%E6%9C%AC%E5%9C%B0%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6">§</a></h3>\n<p>语法：git checkout &lt;filename/dirname&gt;    示例： git checkout file.js</p>\n<h2 id="%E5%88%86%E6%94%AF">分支<a class="anchor" href="#%E5%88%86%E6%94%AF">§</a></h2>\n<ul>\n<li>\n<h5 id="%E5%85%B3%E8%81%94%E5%88%86%E6%94%AF">关联分支<a class="anchor" href="#%E5%85%B3%E8%81%94%E5%88%86%E6%94%AF">§</a></h5>\n</li>\n</ul>\n<p>语法：git branch --set-upstream-to=<branchname> <branchname></p>\n<p>实例：git branch  --set-upstream-to=origin/master master</p>\n<ul>\n<li>\n<h5 id="%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">删除远程分支<a class="anchor" href="#%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">§</a></h5>\n</li>\n</ul>\n<p>git push origin  --delete  <branchname>   实例： git push origin --delete  fearute/test</p>\n<ul>\n<li>\n<h5 id="%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">删除本地分支关联<a class="anchor" href="#%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">§</a></h5>\n</li>\n</ul>\n<p>git branch --unset-upstream <branchname>  实例： git branch -unset-upstream featrue/test1</p>\n<ul>\n<li>\n<h5 id="%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E4%B8%8E%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">查看本地分支与远程分支关联<a class="anchor" href="#%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E4%B8%8E%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">§</a></h5>\n<p>git branch -vv</p>\n</li>\n</ul>\n<h3 id="%E4%BF%AE%E6%94%B9%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E5%A4%87%E6%B3%A8%E5%86%85%E5%AE%B9-">修改提交时的备注内容 ？？？<a class="anchor" href="#%E4%BF%AE%E6%94%B9%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E5%A4%87%E6%B3%A8%E5%86%85%E5%AE%B9-">§</a></h3>\n<p>修改最近一次提交的comment，git commit --amend ，此命令会修改提交时的commit-id，既会覆盖原来的commitid</p>\n<p>git log --pretty=oneline  查看内容  在同一行内查看内容</p>\n<h3 id="%E4%BF%AE%E6%94%B9%E5%88%86%E6%94%AF%E5%90%8D%E5%AE%9E%E7%8E%B0%E6%97%A0%E7%BC%9D%E8%BF%9E%E6%8E%A5">修改分支名，实现无缝连接<a class="anchor" href="#%E4%BF%AE%E6%94%B9%E5%88%86%E6%94%AF%E5%90%8D%E5%AE%9E%E7%8E%B0%E6%97%A0%E7%BC%9D%E8%BF%9E%E6%8E%A5">§</a></h3>\n<p>语法 git branch -m <oldbranch> <newbranch></p>\n<p>实例： git branch -m featrue/test1 featrue/test2</p>\n<h3 id="%E6%92%A4%E5%9B%9E%E6%96%87%E4%BB%B6%E6%8F%90%E4%BA%A4">撤回文件提交<a class="anchor" href="#%E6%92%A4%E5%9B%9E%E6%96%87%E4%BB%B6%E6%8F%90%E4%BA%A4">§</a></h3>\n<ul>\n<li>\n<p>需求变更导致的撤销</p>\n<p>进行了某些改动，之前的提交已经不合适，撤回改动后重新提交，以增加每一次提交的连续性和单次提交的完整性</p>\n<p>语法： git reset --soft [&lt;<commit-id>/HEAD~n&gt;]  命令： git reset --soft HEAD~1</p>\n<p>结果：暂存区的文件内荣未发生任何变化，与撤销未提交时的文档变更记录一致</p>\n<p>只是撤销了commit，文件扔在工作区存在</p>\n<p>本地不想删除不能删除，又不能提交的，添加到gitignore</p>\n</li>\n<li>\n<p>代码重构原因导致的撤销</p>\n<p>本地需要某些优化，对于单次上传的文件需要有不同的处理需要，为使提交去更易于阅读和便于区分</p>\n<p>语法：git reset --mixd [&lt;<commit-id>/HEAD~1&gt;] 命令：git reset --mixd HEAD~1</p>\n<p>结果：修改和删除的文件未添加到暂存区，新增的文件未追踪，同样未添加到暂存区，</p>\n<p>已变更的文件都未添加到怎存区，说明撤销了add和commit</p>\n</li>\n<li>\n<p>个人疏忽导致的错误提交</p>\n<p>不应该被提交的内容，需要进行撤销</p>\n<p>语法： git reset --hard [&lt;<commit-id>/HEAD~1&gt;] 命令：git reset --hard HEAD~1</p>\n<p>结果：原本追踪的修改和删除的文件内容未发生变更，新增文件未追踪，工作区文件内容仍然保留。撤销了commit和add的操作，同时撤销的本地已追踪内容的修改，未追踪的内容不会被改变，文件的修改都会被撤销掉，--hard模式下需要谨慎操作。</p>\n</li>\n</ul>\n<h3 id="%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6">强制覆盖本地文件<a class="anchor" href="#%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6">§</a></h3>\n<h3 id="%E6%92%A4%E9%94%80%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E7%9A%84%E5%90%88%E5%B9%B6">撤销本地分支的合并<a class="anchor" href="#%E6%92%A4%E9%94%80%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E7%9A%84%E5%90%88%E5%B9%B6">§</a></h3>\n<p>撤销合并 语法：git revert <commit-id> 命令:  git revert  8dsh8w</p>\n<p>revert执行之后会在原本的提交记录中新增一条提交记录</p>\n<p>reset如上“本地文件撤销”例子所述，会删掉原本已有的提交记录，在合并分支中，会删除原本合并分支的记录。revert则有不同，会保留原本合并分支的记录，在其上新增一条提交记录，便于之后有需要仍能够回溯苏revert之前的状态。</p>\n<p>reset能够毁尸灭迹，revert则会将合并分支和撤回记录一并显示咋远提交记录上。</p>\n<p>从代码撤销之后仍需要合并的角度来讲，revert能够实现多分支合并之后，仍然能够只撤销本合并分支的内容，reset则需要使用git reflog 命令reset到第一个没有出错的内容的commit-id，然后再逐个进行合并，（前提是这些分支的合并是有顺序要求的）</p>\n<p>换而言之，需要合并多个分支，如果合并的某个分支在操作过程中修改了内容，revert能够实现仍然合并修改之前的所有分支，reset则只能合并某一个修改之前的分支。</p>\n<h3 id="%E6%81%A2%E5%A4%8D%E8%AF%AF%E5%88%A0%E9%99%A4%E7%9A%84%E5%88%86%E6%94%AF">恢复误删除的分支<a class="anchor" href="#%E6%81%A2%E5%A4%8D%E8%AF%AF%E5%88%A0%E9%99%A4%E7%9A%84%E5%88%86%E6%94%AF">§</a></h3>\n<p>本地分支被拉出之后，由于误操作删除了，并且本地的分支没有被同步到远程分支，此时想要恢复本地的分支。git reflog 命令可查看该仓库下的所有历史记录。<img src="D:%5Cwwwroot%5Cweb_learn%5Cgit%5C1" alt="7(1).png"></p>\n<p>语法： git checkout -b <branch-name> <commit-id> 命令：git checkout -b featrue/delete HEAD@{2}</p>\n<p>命令执行完后，分支恢复到HEAD@{2}，使用 git reset --hard HEAD@{1} 即可实现硬性覆盖本地工作区内容的目的</p>\n<p>git reflog 命令获取到的内容为本地仓库所有发生过的变更，可谓恢复利器，即可向前追溯，亦可向后调整。</p>\n<h3 id="%E4%B8%8D%E7%A1%AE%E5%AE%9A%E5%93%AA%E4%B8%AA%E5%88%86%E6%94%AF%E6%9C%89%E8%87%AA%E5%B7%B1%E6%8F%90%E4%BA%A4%E7%9A%84commit">不确定哪个分支有自己提交的commit<a class="anchor" href="#%E4%B8%8D%E7%A1%AE%E5%AE%9A%E5%93%AA%E4%B8%AA%E5%88%86%E6%94%AF%E6%9C%89%E8%87%AA%E5%B7%B1%E6%8F%90%E4%BA%A4%E7%9A%84commit">§</a></h3>\n<p>需要首先确定有问题的commit-id，然后查看本地所有的分支 git</p>\n<p>语法 git branch --contains <commit-id>  命令:git branch --contains u8fej2</p>\n<h3 id=""><a class="anchor" href="#">§</a></h3>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Git\u4F7F\u7528"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E6%81%A2%E5%A4%8D%E6%9C%AC%E5%9C%B0%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6">恢复本地删除文件<a class="anchor" href="#%E6%81%A2%E5%A4%8D%E6%9C%AC%E5%9C%B0%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6">§</a></h3>\n<p>语法：git checkout &lt;filename/dirname&gt;    示例： git checkout file.js</p>\n<h2 id="%E5%88%86%E6%94%AF">分支<a class="anchor" href="#%E5%88%86%E6%94%AF">§</a></h2>\n<ul>\n<li>\n<h5 id="%E5%85%B3%E8%81%94%E5%88%86%E6%94%AF">关联分支<a class="anchor" href="#%E5%85%B3%E8%81%94%E5%88%86%E6%94%AF">§</a></h5>\n</li>\n</ul>\n<p>语法：git branch --set-upstream-to=<branchname> <branchname></p>\n<p>实例：git branch  --set-upstream-to=origin/master master</p>\n<ul>\n<li>\n<h5 id="%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">删除远程分支<a class="anchor" href="#%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">§</a></h5>\n</li>\n</ul>\n<p>git push origin  --delete  <branchname>   实例： git push origin --delete  fearute/test</p>\n<ul>\n<li>\n<h5 id="%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">删除本地分支关联<a class="anchor" href="#%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">§</a></h5>\n</li>\n</ul>\n<p>git branch --unset-upstream <branchname>  实例： git branch -unset-upstream featrue/test1</p>\n<ul>\n<li>\n<h5 id="%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E4%B8%8E%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">查看本地分支与远程分支关联<a class="anchor" href="#%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E4%B8%8E%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF%E5%85%B3%E8%81%94">§</a></h5>\n<p>git branch -vv</p>\n</li>\n</ul>\n<h3 id="%E4%BF%AE%E6%94%B9%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E5%A4%87%E6%B3%A8%E5%86%85%E5%AE%B9-">修改提交时的备注内容 ？？？<a class="anchor" href="#%E4%BF%AE%E6%94%B9%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E5%A4%87%E6%B3%A8%E5%86%85%E5%AE%B9-">§</a></h3>\n<p>修改最近一次提交的comment，git commit --amend ，此命令会修改提交时的commit-id，既会覆盖原来的commitid</p>\n<p>git log --pretty=oneline  查看内容  在同一行内查看内容</p>\n<h3 id="%E4%BF%AE%E6%94%B9%E5%88%86%E6%94%AF%E5%90%8D%E5%AE%9E%E7%8E%B0%E6%97%A0%E7%BC%9D%E8%BF%9E%E6%8E%A5">修改分支名，实现无缝连接<a class="anchor" href="#%E4%BF%AE%E6%94%B9%E5%88%86%E6%94%AF%E5%90%8D%E5%AE%9E%E7%8E%B0%E6%97%A0%E7%BC%9D%E8%BF%9E%E6%8E%A5">§</a></h3>\n<p>语法 git branch -m <oldbranch> <newbranch></p>\n<p>实例： git branch -m featrue/test1 featrue/test2</p>\n<h3 id="%E6%92%A4%E5%9B%9E%E6%96%87%E4%BB%B6%E6%8F%90%E4%BA%A4">撤回文件提交<a class="anchor" href="#%E6%92%A4%E5%9B%9E%E6%96%87%E4%BB%B6%E6%8F%90%E4%BA%A4">§</a></h3>\n<ul>\n<li>\n<p>需求变更导致的撤销</p>\n<p>进行了某些改动，之前的提交已经不合适，撤回改动后重新提交，以增加每一次提交的连续性和单次提交的完整性</p>\n<p>语法： git reset --soft [&lt;<commit-id>/HEAD~n&gt;]  命令： git reset --soft HEAD~1</p>\n<p>结果：暂存区的文件内荣未发生任何变化，与撤销未提交时的文档变更记录一致</p>\n<p>只是撤销了commit，文件扔在工作区存在</p>\n<p>本地不想删除不能删除，又不能提交的，添加到gitignore</p>\n</li>\n<li>\n<p>代码重构原因导致的撤销</p>\n<p>本地需要某些优化，对于单次上传的文件需要有不同的处理需要，为使提交去更易于阅读和便于区分</p>\n<p>语法：git reset --mixd [&lt;<commit-id>/HEAD~1&gt;] 命令：git reset --mixd HEAD~1</p>\n<p>结果：修改和删除的文件未添加到暂存区，新增的文件未追踪，同样未添加到暂存区，</p>\n<p>已变更的文件都未添加到怎存区，说明撤销了add和commit</p>\n</li>\n<li>\n<p>个人疏忽导致的错误提交</p>\n<p>不应该被提交的内容，需要进行撤销</p>\n<p>语法： git reset --hard [&lt;<commit-id>/HEAD~1&gt;] 命令：git reset --hard HEAD~1</p>\n<p>结果：原本追踪的修改和删除的文件内容未发生变更，新增文件未追踪，工作区文件内容仍然保留。撤销了commit和add的操作，同时撤销的本地已追踪内容的修改，未追踪的内容不会被改变，文件的修改都会被撤销掉，--hard模式下需要谨慎操作。</p>\n</li>\n</ul>\n<h3 id="%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6">强制覆盖本地文件<a class="anchor" href="#%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6">§</a></h3>\n<h3 id="%E6%92%A4%E9%94%80%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E7%9A%84%E5%90%88%E5%B9%B6">撤销本地分支的合并<a class="anchor" href="#%E6%92%A4%E9%94%80%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E7%9A%84%E5%90%88%E5%B9%B6">§</a></h3>\n<p>撤销合并 语法：git revert <commit-id> 命令:  git revert  8dsh8w</p>\n<p>revert执行之后会在原本的提交记录中新增一条提交记录</p>\n<p>reset如上“本地文件撤销”例子所述，会删掉原本已有的提交记录，在合并分支中，会删除原本合并分支的记录。revert则有不同，会保留原本合并分支的记录，在其上新增一条提交记录，便于之后有需要仍能够回溯苏revert之前的状态。</p>\n<p>reset能够毁尸灭迹，revert则会将合并分支和撤回记录一并显示咋远提交记录上。</p>\n<p>从代码撤销之后仍需要合并的角度来讲，revert能够实现多分支合并之后，仍然能够只撤销本合并分支的内容，reset则需要使用git reflog 命令reset到第一个没有出错的内容的commit-id，然后再逐个进行合并，（前提是这些分支的合并是有顺序要求的）</p>\n<p>换而言之，需要合并多个分支，如果合并的某个分支在操作过程中修改了内容，revert能够实现仍然合并修改之前的所有分支，reset则只能合并某一个修改之前的分支。</p>\n<h3 id="%E6%81%A2%E5%A4%8D%E8%AF%AF%E5%88%A0%E9%99%A4%E7%9A%84%E5%88%86%E6%94%AF">恢复误删除的分支<a class="anchor" href="#%E6%81%A2%E5%A4%8D%E8%AF%AF%E5%88%A0%E9%99%A4%E7%9A%84%E5%88%86%E6%94%AF">§</a></h3>\n<p>本地分支被拉出之后，由于误操作删除了，并且本地的分支没有被同步到远程分支，此时想要恢复本地的分支。git reflog 命令可查看该仓库下的所有历史记录。<img src="D:%5Cwwwroot%5Cweb_learn%5Cgit%5C1" alt="7(1).png"></p>\n<p>语法： git checkout -b <branch-name> <commit-id> 命令：git checkout -b featrue/delete HEAD@{2}</p>\n<p>命令执行完后，分支恢复到HEAD@{2}，使用 git reset --hard HEAD@{1} 即可实现硬性覆盖本地工作区内容的目的</p>\n<p>git reflog 命令获取到的内容为本地仓库所有发生过的变更，可谓恢复利器，即可向前追溯，亦可向后调整。</p>\n<h3 id="%E4%B8%8D%E7%A1%AE%E5%AE%9A%E5%93%AA%E4%B8%AA%E5%88%86%E6%94%AF%E6%9C%89%E8%87%AA%E5%B7%B1%E6%8F%90%E4%BA%A4%E7%9A%84commit">不确定哪个分支有自己提交的commit<a class="anchor" href="#%E4%B8%8D%E7%A1%AE%E5%AE%9A%E5%93%AA%E4%B8%AA%E5%88%86%E6%94%AF%E6%9C%89%E8%87%AA%E5%B7%B1%E6%8F%90%E4%BA%A4%E7%9A%84commit">§</a></h3>\n<p>需要首先确定有问题的commit-id，然后查看本地所有的分支 git</p>\n<p>语法 git branch --contains <commit-id>  命令:git branch --contains u8fej2</p>\n<h3 id=""><a class="anchor" href="#">§</a></h3>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%81%A2%E5%A4%8D%E6%9C%AC%E5%9C%B0%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6" }, "\u6062\u590D\u672C\u5730\u5220\u9664\u6587\u4EF6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%88%86%E6%94%AF" }, "\u5206\u652F"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BF%AE%E6%94%B9%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E5%A4%87%E6%B3%A8%E5%86%85%E5%AE%B9-" }, "\u4FEE\u6539\u63D0\u4EA4\u65F6\u7684\u5907\u6CE8\u5185\u5BB9 \uFF1F\uFF1F\uFF1F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BF%AE%E6%94%B9%E5%88%86%E6%94%AF%E5%90%8D%E5%AE%9E%E7%8E%B0%E6%97%A0%E7%BC%9D%E8%BF%9E%E6%8E%A5" }, "\u4FEE\u6539\u5206\u652F\u540D\uFF0C\u5B9E\u73B0\u65E0\u7F1D\u8FDE\u63A5")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%92%A4%E5%9B%9E%E6%96%87%E4%BB%B6%E6%8F%90%E4%BA%A4" }, "\u64A4\u56DE\u6587\u4EF6\u63D0\u4EA4")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6" }, "\u5F3A\u5236\u8986\u76D6\u672C\u5730\u6587\u4EF6")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%92%A4%E9%94%80%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF%E7%9A%84%E5%90%88%E5%B9%B6" }, "\u64A4\u9500\u672C\u5730\u5206\u652F\u7684\u5408\u5E76")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%81%A2%E5%A4%8D%E8%AF%AF%E5%88%A0%E9%99%A4%E7%9A%84%E5%88%86%E6%94%AF" }, "\u6062\u590D\u8BEF\u5220\u9664\u7684\u5206\u652F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%B8%8D%E7%A1%AE%E5%AE%9A%E5%93%AA%E4%B8%AA%E5%88%86%E6%94%AF%E6%9C%89%E8%87%AA%E5%B7%B1%E6%8F%90%E4%BA%A4%E7%9A%84commit" }, "\u4E0D\u786E\u5B9A\u54EA\u4E2A\u5206\u652F\u6709\u81EA\u5DF1\u63D0\u4EA4\u7684commit")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" })))))),
    'author': "dingdtt",
    'contributors': [
        "dingdtt",
        "dingtt"
    ],
    'date': "2020-06-08T03:38:58.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "恢复本地删除文件 语法：git checkout <filename/dirname> 示例： git checkout file.js 分支 - 关联分支 语法：git branch --set-upstream-to= 实例：git branch --set-upstream-to=origin/master master - 删除远程分支 git ...",
    'cover': "D:\\wwwroot\\web_learn\\git\\1",
    'sidebar': [
        {
            "text": "Hello world",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "link": "WebAPI/README.md",
            "children": [],
            "text": "WebAPI/README.md"
        },
        {
            "link": "HTTP/index.html",
            "children": [
                {
                    "text": "浏览器",
                    "link": "HTTP/browser.html",
                    "pagePath": "HTTP/browser.md"
                },
                {
                    "text": "HTTP协议请求方法和状态码",
                    "link": "HTTP/HTTP.html",
                    "pagePath": "HTTP/HTTP.md"
                },
                {
                    "text": "网络硬件",
                    "link": "HTTP/internet-hardware.html",
                    "pagePath": "HTTP/internet-hardware.md"
                }
            ],
            "pagePath": "HTTP/README.md",
            "text": "HTTP协议与浏览器"
        },
        {
            "link": "js/todo.md",
            "children": [
                {
                    "text": "JavaScript基础",
                    "link": "js/basics.html",
                    "pagePath": "js/basics.md"
                },
                {
                    "text": "基础",
                    "link": "js/Object.html",
                    "pagePath": "js/Object.md"
                },
                {
                    "text": "执行上下文",
                    "link": "js/context.html",
                    "pagePath": "js/context.md"
                },
                {
                    "text": "闭包和面向对象",
                    "link": "js/closure.html",
                    "pagePath": "js/closure.md"
                },
                {
                    "text": "正则",
                    "link": "js/regex.html",
                    "pagePath": "js/regex.md"
                },
                {
                    "text": "算法",
                    "link": "js/algo.html",
                    "pagePath": "js/algo.md"
                },
                {
                    "text": "JS设计模式",
                    "link": "js/design-patterns.html",
                    "pagePath": "js/design-patterns.md"
                }
            ],
            "text": "js/todo.md"
        },
        {
            "link": "TS/index.html",
            "children": [
                {
                    "text": "TS基础",
                    "link": "TS/basics.html",
                    "pagePath": "TS/basics.md"
                },
                {
                    "text": "TS枚举 类型 接口 泛型",
                    "link": "TS/enum.html",
                    "pagePath": "TS/enum.md"
                }
            ],
            "pagePath": "TS/README.md",
            "text": "TS"
        },
        {
            "link": "vue/index.html",
            "children": [
                {
                    "text": "Vue开发技巧",
                    "link": "vue/vue-skills.html",
                    "pagePath": "vue/vue-skills.md"
                },
                {
                    "text": "Vue组件通信",
                    "link": "vue/vue-communication.html",
                    "pagePath": "vue/vue-communication.md"
                },
                {
                    "text": "Vue路由",
                    "link": "vue/vue-router/vue-router.html",
                    "pagePath": "vue/vue-router/vue-router.md"
                }
            ],
            "pagePath": "vue/README.md",
            "text": "Vue"
        },
        {
            "text": "React的生命周期",
            "link": "react/lifecycle.html",
            "pagePath": "react/lifecycle.md"
        },
        {
            "link": "webpack/index.html",
            "children": [
                {
                    "text": "webpack的使用",
                    "link": "webpack/webpack-use.html",
                    "pagePath": "webpack/webpack-use.md"
                },
                {
                    "text": "Webpack打包原理解析",
                    "link": "webpack/webpack-principle.html",
                    "pagePath": "webpack/webpack-principle.md"
                },
                {
                    "text": "生产环境配置",
                    "link": "webpack/webpack-dev-config.html",
                    "pagePath": "webpack/webpack-dev-config.md"
                },
                {
                    "text": "实现自己的loader",
                    "link": "webpack/webpack-custom-loader.html",
                    "pagePath": "webpack/webpack-custom-loader.md"
                },
                {
                    "text": "实现自己的plugin",
                    "link": "webpack/webpack-custom-plugin.html",
                    "pagePath": "webpack/webpack-custom-plugin.md"
                },
                {
                    "text": "webpack代码分片",
                    "link": "webpack/webpack-split-chunks.html",
                    "pagePath": "webpack/webpack-split-chunks.md"
                },
                {
                    "text": "webpack-dev-server 与 HMR",
                    "link": "webpack/webpack-dev-server-hmr.html",
                    "pagePath": "webpack/webpack-dev-server-hmr.md"
                }
            ],
            "pagePath": "webpack/README.md",
            "text": "Webpack"
        },
        {
            "text": "前端监控简介",
            "link": "web-monitor/web-monitor.html",
            "pagePath": "web-monitor/web-monitor.md"
        },
        {
            "text": "Git使用",
            "link": "git/git.html",
            "pagePath": "git/git.md"
        }
    ]
};
