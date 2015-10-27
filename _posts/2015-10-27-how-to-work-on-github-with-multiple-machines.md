---
layout: blog
title: How to Work on GitHub with Multiple Machines
location: Redwood Shores
---
<blockquote>
<q>Talk is cheap. Show me the code.</q> - Linus Torvalds
</blockquote>

Not until now did I realize the importance of maintaining the repo of yourself. Good developers are never referenced by their schools, and I've see quite a few smart geeks with high school or community colledge degrees while doing amazing jobs at work/leisure. As for me, the ordinary myself, I always take the excuse that most of the time I spend is with my company mac, thus it is hard to find a specific time working on my for-fun-only PC. After trying with several articles (I will list them below for further reading), I finally worked out an easy to deal with it. So here, I am going to list the steps which help you push commits to your own GitHub accounts without worrying about which machine you are using. Before trying, make you created two accounts at GitHub, one for work and one for personal, and your goal is to make your work machine be able to push code to your personal account's (which links to your personal machine) repositories. All steps below should happen on your work machine.
<br /><br />
1. Go to the folder where holds keys (normally <span class="file-name">~/.ssh/</span>, all commands happen there), and generate a new SSH key:
<pre>
  <code class="bash">
    ssh-keygen -t rsa -C "{YOUR EMAIL}"
  </code>
</pre>
You will be prompted to enter the file name for it, make sure not overwrite the existing one, save it as <span class="file-name">id_rsa_personal</span>.
<br /><br />
2. Log in to GitHub with personal account, go to "SSH Keys" under "Personal Settings", add a new one with content from <span class="file-name">id_rsa_personal.pub</span>. Then go back to console, type:
<pre>
  <code class="bash">
    ssh-add ~/.ssh/id_rsa_personal
  </code>
</pre>
You should see something like "Identity Added".
<br /><br />
3. Now we need to register another login option when talking to GitHub. Open/create the file called <span class="file-name">config</span>, paste below:
<pre>
  <code class="bash">
    Host github-personal
      HostName github.com
      User git
      IdentityFile ~/.ssh/id_rsa_personal
  </code>
</pre>
And that's it for configure!
<br /><br />
4. Time to see if it works, let's take my blog repo for example:
<pre>
  <code class="bash">
    git clone git@github.com:MuhanZou/muhanzou.github.io.git
    git clone git@github-personal:MuhanZou/muhanzou.github.io.git
  </code>
</pre>
Both should do the clone job. However, whenever you push code, the default user is still your work account. Why I mention this? Because you want to see your own commits dashboard, rather than lots of commits from OTHER user, which would not count for the Contribution UI. To fix this, we can set the user/email locally (or global) at the repo root:
<pre>
  <code class="bash">
    git config user.name "PERSONAL NAME"
    git config user.email "PERSONAL EMAIL"
  </code>
</pre>
Now you push code, the commit author would be your personal one, time to let people see how hard-working you are at leisure time!
<br /><br />
Please check these two pages for detailed information.
<p class="reference">
  <a href="http://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574" target="_blank">A blog by Jeffrey Way</a>
  <a href="http://stackoverflow.com/questions/4220416/can-i-specify-multiple-users-for-myself-in-gitconfig" target="_blank">A question from StackOverflow</a>
</p>