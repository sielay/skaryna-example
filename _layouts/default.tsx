import * as React from "react";
import { Skaryna, ISkarynaPageProps } from "../../skaryna/lib/generator/skaryna"; // TODO
import Header from "../_includes/header";
import Footer from "../_includes/footer";

export default (props: ISkarynaPageProps) => <React.Fragment>
    {props.facebook_comments && [
        <div id="fb-root" />,
        Skaryna.script(`(function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=${ props.facebook_appid}";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`)
    ]}
    <div className="site-wrap">
        <Header {...props} />
        <div className="post p2 p-responsive wrap" role="main">
            <div className="measure">
                {props.children}
            </div>
        </div>
        <Footer {...props} />
    </div>
</React.Fragment>;
