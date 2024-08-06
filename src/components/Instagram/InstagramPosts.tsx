import React, { useEffect, useState } from "react";

interface Post {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  permalink: string;
}

const InstagramPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const accessToken = "292175c203d0aaa6cc05744de485309c"; // Replace with your long-lived access token

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchPosts();
  }, [accessToken]);

  return (
    <div>
      <h2>Latest Instagram Posts</h2>
      <div className="instagram-posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {post.media_type === "IMAGE" && (
              <img src={post.media_url} alt={post.caption} />
            )}
            {post.media_type === "VIDEO" && (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{post.caption}</p>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              View on Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
