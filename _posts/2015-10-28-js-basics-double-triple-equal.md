---
layout: blog
title: JS Basics#1&#58 '==' v.s. '===' (Diff in Double/Triple Equal)
location: Redwood Shores
---
Telling the difference between double-equal and triple-equal is a frequently asked question on web-dev interviews to test the candidate's fundamental knowledge on JavaScript. A common OK anwser would be: <span class="file-name">==</span> compares the value of two variables while <span class="file-name">===</span> compares both value and type. Or you can mention the word <i>strictly equal</i>. However, an answer like this won't make you any different compared with others, b/c we could go much deeper in this topic, so what happened behind the scene?
<br /><br />
We probably can say that JS will convert these two variables into the same type and do the comparision, and that's true. The term is called <i>Coercion</i>, similar to <i>Cast</i> in C++. Like many other languages, we can either use coercion explicitly or implicitly in JavaScript.
<pre>
  <code class="javascript">
     1 == '1' // true, implicit coercion
     1 === '1' // false, no coercion happened
     1 === Number('1') // true, explicit coercion
    '1' === String(1) // true, explicit coercion
  </code>
</pre>
With above snippet, I believe a better answer would be:
<blockquote>
<span class="file-name">==</span> checks for the value equality with coercion (implicit) allowed while <span class="file-name">===</span> checks for the value equality without allowing coercion.
</blockquote>
Another follow-up question could be asking you either number coerced to string or vice versa. The answer is that string type would be converted to number, and you can get the exact rules from ES5 specification. Well since we know these rules of operators are quite following the same spec, so we can use <span class="file-name">&lt;</span> or <span class="file-name">&gt;</span> to prove the answer.
<pre>
  <code class="javascript">
    '2' < '1' // false, either-way coercion could work
    '2' < 1 // false, either-way coercion could work
    '2' > '10' // true, as '2' > '1'
    '2' > 10 // false, '2' => 2 < 10
     2 > 10 // false
  </code>
</pre>
From the code, we can see when comparing between '2' and 10, output shows 10 is greater than '2', so string type is coerced into number, 2 greater than 10 would turn out falsy. Otherwise, '2' should be greater than '10' when using String/ASCII comparision rules.
<br /><br />
We should not say NO to <span class="file-name">==</span> in JS, though it could produce surpursing results to developers sometimes, well people tend to leverage it to do the loose-type equality checks. Especially in web world, people are not so concerned about the ID #1 is either in number or string. Another interesting fact is that Array will be coerced in to a string by joining each element with a <span class="file-name">,</span> when doing the double-equal checks.
<pre>
  <code class="javascript">
    [1,2,3].join(",") // => "1,2,3"
    [1,2,3] == "1,2,3" // true
  </code>
</pre>