import{_ as t,c as a,a0 as s,o}from"./chunks/framework.CGHvQLJz.js";const h=JSON.parse('{"title":"Collaboration & Review using Pull Request","description":"","frontmatter":{},"headers":[],"relativePath":"guide/pull-request-workflow.md","filePath":"guide/pull-request-workflow.md"}'),i={name:"guide/pull-request-workflow.md"};function n(r,e,l,c,m,p){return o(),a("div",null,e[0]||(e[0]=[s(`<h1 id="collaboration-review-using-pull-request" tabindex="-1"><img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="50"> Collaboration &amp; Review using <em>Pull Request</em> <a class="header-anchor" href="#collaboration-review-using-pull-request" aria-label="Permalink to &quot;&lt;img src=&quot;https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif&quot; width=&quot;50&quot;&gt; Collaboration &amp; Review using *Pull Request*&quot;">​</a></h1><p><a href="./en-README.html">Back to Home</a></p><p>This section contains the <em>Pull Request</em> process that runs on Arch Public Website Dev, the procedures and agreements that apply.</p><hr><h3 id="main-cast" tabindex="-1"><em>Main Cast</em> <a class="header-anchor" href="#main-cast" aria-label="Permalink to &quot;*Main Cast*&quot;">​</a></h3><p>In the <em>Pull Request</em> process there are 2 main roles, namely:</p><ul><li><strong>Reviewer</strong>: <em>Code reviewer &amp; decision maker</em> (main developer).</li></ul><ul><li><strong>Member</strong>: <em>Developer</em> (developer).</li></ul><p><img src="https://static.pbahotels.com/Assets/images/Hotel/exterior/d62e3d6a1766e1d3c8a7e478bddd78a3cd3f8fae.png" alt=""></p><h3 id="pull-request-manifesto-arch-public-website-dev" tabindex="-1"><em>Pull Request Manifesto @ Arch Public Website Dev</em> <a class="header-anchor" href="#pull-request-manifesto-arch-public-website-dev" aria-label="Permalink to &quot;*Pull Request Manifesto @ Arch Public Website Dev*&quot;">​</a></h3><ol><li>There must be no development process in the <code>master</code> <em>branch</em> - this <em>branch</em> only functions to <code>merge, test &amp; release</code> stable features</li><li>Immediately create a <em>Pull Request</em> after the <em>branch</em> is created and the <em>remote push</em> has been carried out.</li><li><em>Pull Request</em> will be rejected if a conflict is found in the code. Developers must resolve these conflicts and ensure there are no conflicts in <em>Pull Request</em></li><li>Name <em>branches</em> according to mutual agreement (see <em>Branching</em> Terms)</li><li><em>Branch</em> <code>hotfix</code> will generate a <em>Pull Request</em> to <em>branch</em> <code>master</code> and <em>branch</em> <code>develop</code></li><li>The main developer should perform the <code>merge</code> process on the local repository. Especially for the <code>develop</code> branch, it is best to <em>preserve commit history</em> by carrying out the <code>git merge --no-ff</code> process. For other branches, please <code>merge &amp; squash</code> using <code>git merge --squash</code></li><li>The main developer who has push access to master and develop must set up the application release process and allow it to create a release branch with several additional work requests before merging it into develop. <code>and</code>master\`</li></ol><h3 id="terms-of-branching" tabindex="-1">Terms of <em>Branching</em> <a class="header-anchor" href="#terms-of-branching" aria-label="Permalink to &quot;Terms of *Branching*&quot;">​</a></h3><p>The <em>branch</em> name options that can be used are</p><ul><li><strong>story</strong>/[Ora number] [description]</li></ul><blockquote><p>For <em><strong>Story</strong></em> that you feel is too big, break it into smaller <em>Tasks</em> and then merge them into <em>branch</em> <code>story</code> before doing a <em>Pull Request</em> to <em>branch</em> <code>develop</code></p></blockquote><ul><li><strong>task</strong>/[Ora number] [description]</li><li><strong>improvement</strong>/[Ora number] [description]</li><li><strong>bug</strong>/[Ora number] [description]</li><li><strong>hotfix</strong>/[Ora number] [description]</li></ul><p><strong>Notes</strong></p><p>For repositories that will not undergo much development (one and done), please use the following branching</p><ul><li><strong>master</strong> : quite clear</li><li><strong>develop</strong>: development results before <code>merge</code> to <code>master</code></li></ul><h3 id="git-concepts" tabindex="-1">Git Concepts <a class="header-anchor" href="#git-concepts" aria-label="Permalink to &quot;Git Concepts&quot;">​</a></h3><ul><li>Use relevant <em>commit</em> messages and insert appropriate <em>tags</em>.</li><li>[add] description of the file additions made</li><li>[change] description of <em>update</em> made</li><li>[style] description for additions or improvements to the <em>style</em> section</li><li>[fix] description of the improvements made</li><li>[refact] more optimized change description </li><li><a href="https://www.git-tower.com/blog/git-cheat-sheet/" target="_blank" rel="noreferrer">Git Cheatsheet</a></li><li><a href="https://git-scm.com/book/id/v2/Git-Tools-Rewriting-History" target="_blank" rel="noreferrer">Rewrite Commit History</a></li><li><a href="https://stackoverflow.com/questions/5667884/how-to-squash-commits-in-git-after-they-have-been-pushed" target="_blank" rel="noreferrer">Squash Published Commits</a></li></ul><h4 id="template-pull-request" tabindex="-1">Template Pull Request <a class="header-anchor" href="#template-pull-request" aria-label="Permalink to &quot;Template Pull Request&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## Explain what your PR does</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## To which Ora&#39;s link&#39; ticket is PR dedicated?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## How should one manually test this ticket?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Deployment notes (migrations, envs, etc.)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Screenshots (postman, feature, or anything related.)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Others?</span></span></code></pre></div>`,23)]))}const u=t(i,[["render",n]]);export{h as __pageData,u as default};
