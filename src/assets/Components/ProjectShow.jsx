import { useState, useRef, useEffect } from 'react';
import php from '../Images/Php.mp4';

const ProjectShow = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const project = {
    id: 1,
    title: "Project One",
    description: "A modern web application with interactive features",
    videoUrl: php,
    thumbnail: "/project1-thumbnail.jpg"
  };

  // Intersection Observer for auto-play when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVideoActive) {
          setIsVideoActive(true);
          videoRef.current.play().catch(e => console.log(e));
        } else if (!entry.isIntersecting && isVideoActive) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsVideoActive(false);
        }
      },
      { threshold: 0.7 } // 70% of the video visible
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [isVideoActive]);

  const handleVideoClick = () => {
    if (isVideoActive) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoActive(false);
    } else {
      setIsVideoActive(true);
      videoRef.current.play().catch(e => console.log(e));
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="w-full bg-white px-4 py-12 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
          My Project Showcase
        </h2>

        {/* Audio controls - More transparent */}
        <div className="flex justify-center mb-6 md:mb-8">
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 py-2 rounded-full transition-all backdrop-blur-sm"
          >
            {isMuted ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
                Unmute
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Mute
              </>
            )}
          </button>
        </div>
        
        {/* Single video project - More transparent container */}
        <div 
          ref={videoContainerRef}
          className="relative w-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 backdrop-blur-sm"
          onClick={handleVideoClick}
        >
          {/* Video container */}
          <div className="relative w-full aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-xl"
              muted={isMuted}
              loop
              poster={project.thumbnail}
              playsInline
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Close button (visible when video is active) */}
            {isVideoActive && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoClick();
                }}
                className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full p-2 hover:bg-black transition-all"
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            {/* Project info overlay - More transparent */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${isVideoActive ? 'opacity-100' : 'opacity-90'}`}>
              <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-1 text-sm md:text-base">{project.description}</p>
            </div>
            
            {/* Play icon (visible when video is not active) */}
            {!isVideoActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full p-3 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;