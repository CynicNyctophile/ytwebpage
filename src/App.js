import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/playlistItems',
                    {
                        params: {
                            part: 'snippet',
                            playlistId: 'PLs8RoxteNbu7-VY7TIEFk1T2HhKBsoX_H', // Replace with your playlist ID
                            maxResults: 40, // Set the maximum number of videos to display
                            key: 'AIzaSyA-hPMi-kBnTCtQrNdtZBOTvlXzAisZBf8', // Replace with your YouTube Data API key without spaces
                        },
                    }
                );
                setVideos(response.data.items.reverse());
            } catch (error) {
                console.log('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="app">
            <header>
                {/* Logo and Banner wrapper */}
                <div className="logo-banner-wrapper">
                    <img src="https://yt3.googleusercontent.com/72HCy_6YAR5vLAnnVu8PCrznS9qJJ_Q_8GSU3-q3kqK_0lFjbjuLznvY8Xn2_tBZlIsfHl2Fkw=s176-c-k-c0x00ffffff-no-rj" alt="Bengali Mom Barna Logo" className="logo" />
                    <img src="https://yt3.googleusercontent.com/FI14fyj0v5VOdhOrrDlUcgShZjVFbxVg0CJP0HTptnIjScXhPlDPS-hsZ3OkAZFXX3VZ19tjrA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="Bengali Mom Barna Banner" className="banner" />
                </div>
                <p className="description">A Bengali mom enjoying a healthy life with food, gardening and exploring hobbies with family and friends!!</p>
            </header>

            <section className="content">
                <h2>Videos</h2>
                {/* Render short videos here */}
                <div className="short-videos">
                    {videos.map((video) => (
                        <div key={video.id} className="video">
                            <a
                                href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {video.snippet.thumbnails && video.snippet.thumbnails.medium && (
                                    <img
                                        src={video.snippet.thumbnails.medium.url}
                                        alt={video.snippet.title}
                                        className="thumbnail"
                                    />
                                )}
                            </a>
                            <p className="video-title">{video.snippet.title}</p>
                        </div>
                    ))}

                </div>
            </section>

            <footer>
                <div className="social-media">
                    <a href="https://www.facebook.com/barna.kundudas" target="_blank" rel="noopener noreferrer">
                        <img src="https://uploads-ssl.webflow.com/5d408888ad57b83c43784c92/5e9c175a2afc3c493331001f_Facebook.png" alt="Facebook" className="social-logo" />
                    </a>
                    <a href="https://www.instagram.com/bengali_mom_barna/" target="_blank" rel="noopener noreferrer">
                        <img src="https://psfonttk.com/wp-content/uploads/2020/09/Instagram-Logo-Transparent-1024x987.png" alt="Instagram" className="social-logo" />
                    </a>
                    <a href="https://www.youtube.com/@Bengali_Mom_Barna" target="_blank" rel="noopener noreferrer">
                        <img src="https://pngimg.com/uploads/youtube/youtube_PNG102351.png" alt="YouTube" className="social-logo" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
