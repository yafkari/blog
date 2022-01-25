<script>
  export let post;
</script>

<style>
  .social-bar {
    margin: 2% 0;
    background-color: white;
    padding: 1.5%;
  }

  .social-media-buttons {
    margin: 1.5em 2em .5em 2em;
  }

  .social-media-buttons ul {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    display: inline-block;
    width: 100%;
  }

  .social-media-buttons ul li {
    margin-right: 2%;
    margin-bottom: 1em;
    margin-left: 0 !important;
    float: left;
    overflow: hidden;
    -moz-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    list-style-type: none !important;
  }

  .social-media-buttons ul li a {
    letter-spacing: 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    position: relative;
    display: block;
    text-decoration: none !important;
    text-transform: unset !important;
    height: 40px;
    min-width: 40px;
    font-family: Arial;
    font-weight: 700;
    font-size: 14px;
    line-height: 36px;
    padding: 0 10px 0 8px;
    border: 2px solid;
    max-height: 40px;
    width: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: all 0.15s ease-in;
    -webkit-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    box-shadow: none;
    cursor: pointer;
  }

  .social-media-buttons ul li a.twitter {
    border-color: #00abf0;
    background: #00abf0;
    color: #fff !important;
  }

  .social-media-buttons ul li a.linkedin {
    border-color: #2867b2;
    background: #2867b2;
    color: #fff !important;
  }

  .social-media-buttons ul li a.email {
    border-color: #27ae60;
    background: #27ae60;
    color: #fff !important;
  }
</style>

<div class="social-bar">
  <h3 style="letter-spacing: 1.2px;">
    <b>Share:</b>
  </h3>
  <div class="social-media-buttons">

    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener nofollow"
          href="https://twitter.com/intent/tweet?text={post.title
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')}&amp;url=https://blog.yafkari.dev/blog/{post.slug
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')}&amp;via=yafkari2000"
          class="twitter"
          title="Share on Twitter">
          <span class="icon fa fa-twitter" />
          <span class="wrapper">
            <span class="label">Twitter</span>
          </span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener nofollow"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://blog.yafkari.dev/blog/{post.slug}&title=Younes Afkari - Blog&summary=blog.yafkari.dev&source=yafkari.dev" 
          onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"
          class="linkedin"
          title="Share on LinkedIn">
          <span class="icon fa fa-linkedin" />
          <span class="wrapper">
            <span class="label">LinkedIn</span>
          </span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener nofollow"
          href="mailto:?subject={post.title
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')}&amp;body=https://blog.yafkari.dev/blog/{post.slug
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')}"
          class="email"
          title="Send over email">
          <span class="icon fa fa-envelope" />
          <span class="wrapper">
            <span class="label">Email</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
