import * as React from "react";
import { Skaryna, ISkarynaPageProps } from "../../skaryna/lib/generator/skaryna"; // TODO
import gtm from "./gtm";

const canonical = (config: ISkarynaPageProps) =>
    config.baseurl
    + config.url.replace("index.html", "");

export default (props: ISkarynaPageProps) =>
    <React.Fragment>
        {props.google_tag_manager && Skaryna.script(gtm)}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{props.title}</title>
        <link rel="dns-prefetch" href="//maxcdn.bootstrapcdn.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description} />
        <meta name="robots" content={props.robots || "all"} />
        <meta name="author" content={props.author} />
        {props.fb_page && <meta property="fb:pages" content={props.fb_page_id} />}
        {props.categories && <meta name="keywords" content={props.categories.join(", ")} /> }
        <link rel="canonical" href={canonical(props)} />
        <link rel="alternate" type="application/rss+xml" title={"RSS Feed for " + props.title} href={props.baseurl + "/feed.xml"} />
        <link rel="stylesheet" href={props.baseurl + "/css/style.min.css?" + props.time} type="text/css" />
        <link
            href={"//fonts.googleapis.com/css?family=Merriweather:900,900italic,300,300italic" + (props.extended_fonts ? "&amp;subset=latin-ext,latin" : "")}
            rel='stylesheet' type='text/css' />
        <link
            href={"//fonts.googleapis.com/css?family=Lato:900,300" + (props.extended_fonts ? "&amp;subset=latin-ext,latin" : "")}
            rel='stylesheet' type='text/css' />
        {props.show_social_icons && <link href="//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />}
        {props.enable_mathjax && Skaryna.asyncScript("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML")}
        {props.google_verification && <meta name="google-site-verification" content={props.google_verification} />}
        {props.bing_verification && <meta name="msvalidate.01" content={props.bing_verification} />}

        { /* From: https://github.com/mmistakes/hpstr-jekyll-theme/blob/master/_includes/head.html */}
        <meta property="og:locale" content={props.text.og_locale} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.baseurl + props.url} />
        <meta property="og:site_name" content={props.original.title} />
        {props.post_preview_image && <meta property="og:image" content={props.thumbnail} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        {props.twitter_username && [
            <meta name="twitter:site" content={"@" + props.twitter_username} />,
            <meta name="twitter:creator" content={"@" + props.twitter_username} />
        ]
        }

        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:url" content={props.baseurl + props.url} />
        {props.post_preview_image && <meta property="twitter:image" content={props.thumbnail} />}

        {/* Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />

        { props.google_analytics && Skaryna.script(`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', '${props.google_analytics}', 'auto');
ga('send', 'pageview');`)
        }
    </React.Fragment>;
