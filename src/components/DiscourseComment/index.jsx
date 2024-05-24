import { useEffect } from "react";

export default function DiscourseComment(props) {
  // Get the current page URL
  // const url = window.location.href;
  // eslint-disable-next-line react/prop-types
  const { postUrl } = props;
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: "https://web3auth.io/community/",
      discourseEmbedUrl: postUrl,
    };

    const d = document.createElement("script");
    d.type = "text/javascript";
    d.async = true;
    d.src = `${window.DiscourseEmbed.discourseUrl}javascripts/embed.js`;
    (
      document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]
    ).appendChild(d);
  }, []);

  return (
    <>
      <meta name="discourse-username" content="shahbaz"></meta>
      <div id="discourse-comments" />
    </>
  );
}
