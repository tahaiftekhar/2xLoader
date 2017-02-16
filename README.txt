# 2xLoader
2xLoader divides your webpage loading into 2 groups. Firstly, the webpage is loaded. Secondly the resources are loaded (images, videos, gifs, CSS files, JS files etc) of your choosing.

HOW TO USE:

It's fairly simple to use. Only the file '2xLoader.js' in 'js' folder is the real deal.
1. Download '2xLoader.js' (or hopefully CDN in future) and link it in your project.
2. Change the attributes in your resources. (see down there for more info)
3. Call the function twoXLoad() anywhere (or on any event) you want.

HOW TO CHANGE ATTRIBUTES:

Resources like images, videos, CSS files, JS files are linked in the project using attributes like src, href, etc.
Change the link from 'src' or 'href' to 'data-load' and then provide 'src' or 'href' in 'data-load-type' attribute. Simple as that !!

---Example 1:
-Change,
-<img src="1.jpg">
-to
-<img data-load="1.jpg" data-load-type="src">

---Example 2:
-Change,
-<link rel="stylesheet" href="css/styles.css">
-to
-<link rel="stylesheet" data-load="css/styles.css" data-load-type="href">