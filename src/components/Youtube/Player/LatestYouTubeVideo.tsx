import React, { useState, useEffect } from "react";
import styles from "./LatestYouTubeVideo.module.css";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCmNQ0iGSq8rpSJT893QNEZg";

interface YouTubeVideo {
  videoId: string;
  title: string;
}

export const LatestYouTubeVideo: React.FC = () => {
  const [latestVideo, setLatestVideo] = useState<YouTubeVideo | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.items.length > 0) {
          const video = data.items[0];
          setLatestVideo({
            videoId: video.id.videoId,
            title: video.snippet.title,
          });
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching the latest video:", error);
        setError(true);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <div className={styles.player}>
      {latestVideo ? (
        <div>
          <h2>{latestVideo.title}</h2>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
            title={latestVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          src="https://placehold.co/900x500?text=?"
          alt="No video available"
          style={{ position: "relative", top: 50 }}
        />
      )}
      {error && (
        <p>Unable to fetch the latest video. Please try again later.</p>
      )}
    </div>
  );
};
