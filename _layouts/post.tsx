import * as React from "react";
import { ISkarynaPageProps, Markdown } from "../../skaryna/lib/generator/skaryna"; // TODO
import Default from "./default";
import ShareButtons from "../_includes/sharebuttons";
import PostFooter from '../_includes/postfooter';

export default (props: ISkarynaPageProps) => {
    const minutes = Math.max(1, Math.round(props.markdown.split(/[\n\r\s\t]+/).length / 180));

    return <Default {...props}>
        <div className="post-header mb2">
            <h1>{props.title}</h1>
            <span className="post-meta">{props.date}</span><br />
            {props.update_date && [<span className="post-meta">{props.text.post.updated}: {props.update_date}</span>, <br />]}
            <span className="post-meta small">
                {props.minutes || minutes} {props.text.post.minute_read}
            </span>
        </div>

        <article className="post-content">
            <Markdown source={this.props.markdown} />
        </article>

        { props.show_sharing_icons && <ShareButtons {...props}/> }

        {props.show_post_footers && <PostFooter {...props}/> }
  

        {% if txtpen.txtpen_sitename %}
  <script src="https://txtpen.com/embed.js?site={{txtpen.txtpen_sitename}}" />
        {% endif %}

        {% if site.disqus_shortname %}
  <div id="disqus_thread"></div>
        <script type="text/javascript">
            var disqus_shortname  = '{{ site.disqus_shortname }}';
    var disqus_identifier = '{{ page.id }}';
    var disqus_title      = {{ page.title | jsonify }};
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
          })();
  </script>
        <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        {% endif %}

        {% if site.facebook_comments %}
  <div class="fb-comments" data-href="{{ site.url }}{{ page.url }}" data-width="100%" data-numposts="{{ site.facebook_comments_number }}"></div>
        {% endif %}

        {% if site.show_related_posts %}
  <h3 class="related-post-title">{{ site.text.post.related_posts }}</h3>
        {% for post in site.related_posts %}
    <div class="post ml2">
            <a href="{{ post.url | prepend: site.baseurl }}" class="post-link">
                <h4 class="post-title">{{ post.title }}</h4>
                <p class="post-summary">{{ post.summary }}</p>
            </a>
        </div>
        {% endfor %}
        {% endif %}

        <Markdown source={this.props.markdown} />

    </Default>
