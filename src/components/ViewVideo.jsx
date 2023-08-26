import { useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";

import styleView from "./styles/ViewVideo.css";

const ViewVideo = ({url}) => {
	return (
		<div className="video">
			<ReactPlayer 
			url={url}
			width="100%"
			height="100%"
			controls
			/>
		</div>
	)
}

export default ViewVideo;