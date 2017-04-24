/**
 * Created by cmontone on 4/24/17.
 */
import React from 'react';
import Moment from 'moment';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div className="col-md-8">Loading...</div>
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const videoDate = Moment(video.snippet.publishedAt).format('llll');

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={videoUrl} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div className="row">
                    <div className="col-md-8"><strong>{video.snippet.title}</strong></div>
                    <div className="col-md-4">{videoDate}</div>
                </div>
                <br />
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;