<script>
  export let segment;
  import { page } from '$app/stores';
</script>

<style>
  nav {
    border-bottom: 1px solid #eee;
    font-weight: 300;
    padding: 0 .5em;
    font-size: 14px;
    font-weight: 600;
  }

  ul {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: "";
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 3px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: 0.1em;
  }

  a.routes {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: #333 !important;
  }

  .bx {
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
    color: #333 !important;
  }

  .bx:hover {
    opacity: 0.7;
  }

  li.media {
		padding: 1em 0.5em;
  }

  li.media + li.media {
    margin-left: 10px;
  }
</style>

<nav>
  <ul>
    <li>
      <a sveltekit:prefetch class:selected={$page.url.pathname==='/' || $page.url.pathname.startsWith('/blog')} href="/" class="routes">Home</a>
    </li>
    <li>
      <a class:selected={$page.url.pathname==='/about'} href="/about" class="routes">
        About me
      </a>
    </li>
    <li>
      <a href="https://yafkari.dev" target="_blank" rel="noopener" class="routes">
        Portfolio
      </a>
    </li>
  </ul>
  <ul style="float:right;">
    <li class="media">
      <a href="https://twitter.com/yafkari2000" target="_blank" rel="noopener" class="bx bxl-twitter">
      </a>
    </li>
    <li class="media">
      <a href="https://dev.to/yafkari" target="_blank" rel="noopener" class="bx bxl-dev-to">
      </a>
    </li>
  </ul>
</nav>
