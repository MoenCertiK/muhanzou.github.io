---
layout: blog
title: JS Basics#1&#58 Traps in JS - Understanding 'this'#1
location: Redwood Shores
---
I have to admit the fact that JavaScript is extremely surprising, especially when comparing with school languages such as C++ and Java. Whenever I wrote some shitty codes and it worked as what I expected, I felt like I conquered JS, but later on it would go against me with crazy results. So now I just ease my mind and start learn again JavaScript basics, and will use this blog series to record what I learned and reference for future.
<br /><br />
<span class="file-name">this</span> is a hard-core topic in JS, as it applies different rules when binding contexts. In most cases, when we have a object <span class="file-name">person</span> containing a <span class="file-name">name</span> property and a function <span class="file-name">printName</span>, in which logs data like <span class="file-name">this.name</span>, invoking it by <span class="file-name">person.printName()</span> will make the <span class="file-name">this</span> keyword implicitly binding to that obj(the owner in a way) context. The left side of the dot function would normally be the binding to <span class="file-name">this</span> in such invoking way, but things may turn weird when you reference to that function and then invoke.
<pre>
  <code class="javascript">
    var person = {
      name: "Person",
      printName: function() {
        console.log(this.name);
      }
    };
    name="Global";
    person.printName(); // => Person
    var printNameRef = person.printName;
    printNameRef(); // => Global
  </code>
</pre>
<i>Function Reference</i> is the explanation for above strange output, <span class="file-name">printNameRef</span> is purely an alias, or reference to that function <span class="file-name">printName</span>, without any object related, thus <span class="file-name">this</span> will be the default binding of the global.
