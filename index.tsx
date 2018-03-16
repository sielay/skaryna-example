import * as React from "react";
import Default from "./_layouts/default";
import { ISkarynaPageProps } from "../skaryna/lib/generator/skaryna";

const postList = (props: ISkarynaPageProps) =>
    <div className="posts">
        {
            props.paginator.posts.map(post =>
                <div className="post py3">
                    <p className="post-meta">{post.date}</p>
                    {/* TODO: use props.date_format */}
                    <a
                        href={props.baseurl + post.url}
                        className="post-link">
                        <h3 className="h1 post-title">{post.title}</h3>
                    </a>
                    <span className="post-summary">
                        {post.summary || post.excerpt}
                    </span>
                </div>
            )
        }
    </div>;

export default (props: ISkarynaPageProps) => {
    const posts_count = (props.paginator && props.paginator.posts.length) || 0;
    return <Default {...props}>
        <div className="home">
            {posts_count > 0
                ? postList(props)
                : <h1 className="center">{props.text.index.coming_soon}</h1>
            }
        </div>
    </Default>;
}
