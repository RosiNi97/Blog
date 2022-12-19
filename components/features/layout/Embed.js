import React from "react";
import PropTypes from "prop-types";
import "../styles/embed.css";

const YoutubeEmbed =({embedId})=>(
    <div className="video-responsive">
    <iframe
    width="853"
    height="480"
    src={'https://www.youtube.com/watch?v=OP6_VTvSuqI&ab_channel=RainyGuy/embed/${embedId}'}
    frameBorder="0"
    allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
    />
    </div>
);

YoutubeEmbed.protypes={
    embedId:PropTypes.string.isRequired
};
 export default function();