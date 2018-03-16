import { ISkarynaPageProps } from "../../skaryna/lib/generator/skaryna"; // TODO

export default (props: ISkarynaPageProps) => {
    const url = encodeURIComponent(props.baseurl + props.url);
    const title = encodeURIComponent(props.title);

    return <div className="share-page">
        {props.text.share_buttons.text}

        <div className="share-links">
            {props.share_facebook && <a
                className="fa fa-facebook"
                href={`https://facebook.com/sharer.php?u=${url}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.facebook}>
            </a>
            }

            {props.share_twitter && <a
                className="fa fa-twitter"
                href={`https://twitter.com/intent/tweet?text=${title}&amp;url=${url}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.twitter}>
            </a>
            }

            {props.share_googleplus && <a
                className="fa fa-google-plus"
                href={`https://plus.google.com/share?url=${url}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.googleplus}>
            </a>
            }

            {props.share_linkedin && <a
                className="fa fa-linkedin"
                href={`http://www.linkedin.com/shareArticle?url=${url}&amp;title=${title}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.linkedin}>
            </a>
            }

            {props.share_digg && <a
                className="fa fa-digg"
                href={`http://digg.com/submit?url=${url}&amp;title=${title}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.digg}>
            </a>
            }

            {props.share_tumblr && <a
                className="fa fa-tumblr"
                href={`http://www.tumblr.com/share/link?url=${url}&amp;name=${title}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.tumblr}>
            </a>
            }

            {props.share_reddit && <a
                className="fa fa-reddit"
                href={`http://reddit.com/submit?url=${url}&amp;title=${title}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.reddit}>
            </a>
            }

            {props.share_stumbleupon && <a
                className="fa fa-stumbleupon"
                href={`http://www.stumbleupon.com/submit?url=${url}&amp;title=${title}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.stumbleupon}>
            </a>
            }

            {props.share_hackernews && <a
                className="fa fa-hacker-news"
                onClick={() => parent.postMessage("submit", "*")}
                href={`https://news.ycombinator.com/submitlink?u=${url}&amp;t=${title}`}
                rel="nofollow"
                target="_blank"
                title={props.text.share_buttons.hackernews}>
            </a>
            }
        </div>
    </div>;
}
