/**
 * Created by cmontone on 4/24/17.
 */
import React from 'react';
import Moment from 'moment';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoFromDate = Moment(video.snippet.publishedAt, 'YYYYMMDD').fromNow();

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <strong>{video.snippet.title}</strong>
                    </div>
                    <div>
                        <em>{video.snippet.channelTitle}, {videoFromDate}</em>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;