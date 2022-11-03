Meeting held on 10/30/22:

> We should always use svn commands, not git anymore and should aggregate this to the others.

> Look into hosting repo on one of the WEB machines to have easy access to svn repo.
	- Alternatively we could stick with github but we'd need to be added as collaborators,
	  which gets tedious after a while.


> Look up how to use svn checkout
        - The Subversion Book says to use command 'svn checkout schema://repo.link/ <working dir>'
        - If our repo is hosted on a WEB machine, we'd have to use svn+shh:// as the schema,
	  followed by the ip and location of the repo.
