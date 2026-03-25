"use client" 

import React, { useState, useEffect } from "react";
import { PageSection } from '@pixelated-tech/components';
import { Hero } from '@pixelated-tech/components';

export default function Home() {

	const videos = [
		"/videos/0_Welding_Metal_3840x2160.mp4",
	];
	const [heroVideo, setHeroVideo] = useState<string>();
	useEffect(() => {
		setHeroVideo(videos[Math.floor(Math.random() * videos.length)]);
	}, []);

  return (
    <>

		<Hero 
			variant="video"
			// video="/videos/GettyImages-1251562713.mp4"
			video={heroVideo}
			height="40vh"
		/>


		<PageSection columns={1} maxWidth="1024px" id="header-section">
			<h1>Manning Metalworks</h1>
			<p>Welcome to Manning Metalworks</p>
		</PageSection>
    </>
  )
}
