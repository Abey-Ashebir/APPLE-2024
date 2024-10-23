import { useEffect, useState } from 'react';
import './Youtube.css';

function Youtube() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=9&order=date&key=AIzaSyCnTZgnSX7nMZEmOPU3R5j7hyOL6alT5qk'
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubeVideos(data.items);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load videos');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className='youtubeVideoWrapper'>
      <div className='allVideoWrapper'>
        <div className='title-wrapper'>
          <h1>Latest Videos</h1>
        </div>

        {/* Video Content in 3-column layout */}
        <div className='videoGrid'>
          {youtubeVideos?.map((video) => (
            <div key={video.id.videoId} className='videoCard'>
              <div className='videoThumbnail'>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target='_blank' rel='noreferrer'>
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                </a>
              </div>
              <div className='videoDetails'>
                <h2>{video.snippet.title}</h2>
                <p>{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
              </div>
              <div className='videoDescription'>
                <p>{video.snippet.description}</p> {/* Corrected description access */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Youtube;
