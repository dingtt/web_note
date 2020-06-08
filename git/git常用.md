Git使用   

#### 恢复本地删除文件

语法：git checkout <filename/dirname>    示例： git checkout file.js

### 分支

- ###### 关联分支

语法：git branch --set-upstream-to=<branchname> <branchname>

实例：git branch  --set-upstream-to=origin/master master

- ###### 删除远程分支

git push origin  --delete  <branchname>   实例： git push origin --delete  fearute/test

- ###### 删除本地分支关联

git branch --unset-upstream <branchname>  实例： git branch -unset-upstream featrue/test1

- ###### 查看本地分支与远程分支关联

  git branch -vv

#### 修改提交时的备注内容 ？？？

修改最近一次提交的comment，git commit --amend ，此命令会修改提交时的commit-id，既会覆盖原来的commitid

git log --pretty=oneline  查看内容  在同一行内查看内容

#### 修改分支名，实现无缝连接

语法 git branch -m <oldbranch> <newbranch>

实例： git branch -m featrue/test1 featrue/test2

#### 撤回文件提交

- 需求变更导致的撤销

  进行了某些改动，之前的提交已经不合适，撤回改动后重新提交，以增加每一次提交的连续性和单次提交的完整性

  语法： git reset --soft [<<commit-id>/HEAD~n>]  命令： git reset --soft HEAD~1 

  结果：暂存区的文件内荣未发生任何变化，与撤销未提交时的文档变更记录一致

  只是撤销了commit，文件扔在工作区存在

  本地不想删除不能删除，又不能提交的，添加到gitignore

- 代码重构原因导致的撤销

  本地需要某些优化，对于单次上传的文件需要有不同的处理需要，为使提交去更易于阅读和便于区分

  语法：git reset --mixd [<<commit-id>/HEAD~1>] 命令：git reset --mixd HEAD~1

  结果：修改和删除的文件未添加到暂存区，新增的文件未追踪，同样未添加到暂存区，

  已变更的文件都未添加到怎存区，说明撤销了add和commit

- 个人疏忽导致的错误提交

  不应该被提交的内容，需要进行撤销

  语法： git reset --hard [<<commit-id>/HEAD~1>] 命令：git reset --hard HEAD~1

  结果：原本追踪的修改和删除的文件内容未发生变更，新增文件未追踪，工作区文件内容仍然保留。撤销了commit和add的操作，同时撤销的本地已追踪内容的修改，未追踪的内容不会被改变，文件的修改都会被撤销掉，--hard模式下需要谨慎操作。

#### 撤销本地分支的合并

撤销合并 语法：git revert <commit-id> 命令:  git revert  8dsh8w

revert执行之后会在原本的提交记录中新增一条提交记录

reset如上“本地文件撤销”例子所述，会删掉原本已有的提交记录，在合并分支中，会删除原本合并分支的记录。revert则有不同，会保留原本合并分支的记录，在其上新增一条提交记录，便于之后有需要仍能够回溯苏revert之前的状态。

reset能够毁尸灭迹，revert则会将合并分支和撤回记录一并显示咋远提交记录上。

从代码撤销之后仍需要合并的角度来讲，revert能够实现多分支合并之后，仍然能够只撤销本合并分支的内容，reset则需要使用git reflog 命令reset到第一个没有出错的内容的commit-id，然后再逐个进行合并，（前提是这些分支的合并是有顺序要求的）

换而言之，需要合并多个分支，如果合并的某个分支在操作过程中修改了内容，revert能够实现仍然合并修改之前的所有分支，reset则只能合并某一个修改之前的分支。

#### 恢复误删除的分支

本地分支被拉出之后，由于误操作删除了，并且本地的分支没有被同步到远程分支，此时想要恢复本地的分支。git reflog 命令可查看该仓库下的所有历史记录。![7(1).png](D:\wwwroot\web_learn\git\1)

语法： git checkout -b <branch-name> <commit-id> 命令：git checkout -b featrue/delete HEAD@{2}  

命令执行完后，分支恢复到HEAD@{2}，使用 git reset --hard HEAD@{1} 即可实现硬性覆盖本地工作区内容的目的

git reflog 命令获取到的内容为本地仓库所有发生过的变更，可谓恢复利器，即可向前追溯，亦可向后调整。

#### 不确定哪个分支有自己提交的commit

需要首先确定有问题的commit-id，然后查看本地所有的分支 git 

语法 git branch --contains <commit-id>  命令:git branch --contains u8fej2



#### 





