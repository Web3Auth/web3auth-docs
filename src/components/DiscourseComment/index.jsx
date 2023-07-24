import { useEffect } from "react";

export default function DiscourseComment(props) {
  // eslint-disable-next-line react/prop-types
  const { topicId } = props;
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: "https://web3auth.io/community/",
      topicId,
    };

    const d = document.createElement("script");
    d.type = "text/javascript";
    d.async = true;
    d.src = `${window.DiscourseEmbed.discourseUrl}javascripts/embed.js`;
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(d);
  }, []);

  return <div id="discourse-comments" />;
}
