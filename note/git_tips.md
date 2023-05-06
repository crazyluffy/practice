### rebase  修正历史提交

rebase 基本作用为 以某次提交作为基准对比提交本地文件，一般是以某一分支最后一次提交为基准。  
rebase -i 即 rebase --interactive  
    可以以本分支某次commit作为基准，该commit之后的提交根据选择进行相应处理  
    
```
edit: 使用本次提交，在rebase到这次提交时候，会暂停下来等待修正
pick:使用本次提交，不操作修改
drop:删除这次提交
```
git rebase -i *commit* 后 git会暂停，并弹出文本提示需要怎样处理。  编辑文本，决定 具体分支是否修改、删除  
截取样例：  

```

$ git rebase -i HEAD~2

edit e47fa58 提交11
pick 338955c 提交12

# Rebase 7f83da3..338955c onto 7f83da3 (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
~                                            
```

文件保存后，git在需要edit的commit出暂停，等待此次修改，如补充该次提交遗漏的文件。  
使用 git commit --amend 提交变更  
之后使用 git rebase --continue 继续进行rebase  

```
Stopped at e47fa58...  提交11
You can amend the commit now, with

  git commit --amend 

Once you are satisfied with your changes, run

  git rebase --continue
```

[原文链接](https://www.jianshu.com/p/d4466fad6162)  


