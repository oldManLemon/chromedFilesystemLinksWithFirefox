# Local Links Open
Chrome and Firefox want local links to be hadled differently 

https://support.mozilla.org/en-US/questions/1098980

https://support.mozilla.org/en-US/questions/1185059

kb.mozillazine.org/Links_to_local_pages_do_not_work

Basically I needed to add two '/'s to each of a certain type of link. In my case I had a folder icon from FA so I could use that to find all the links to the local server. Sadly we have no company wide browser. My users tend to like thier own browsers so to get around that I wrote this script. It simply adds the extras slashes to the file link. 

**NOTE:** It is lazy and doesn't bother to look if the link has file in it. It just assumes you are using it right.