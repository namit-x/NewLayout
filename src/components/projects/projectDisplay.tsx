import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project, ProjectCategory, projects, categories } from '../../data/projectData';
import { Variants } from 'framer-motion';

export function ProjectDisplay() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const getCurrentMedia = () => {
    if (!selectedProject) return null;
    
    return [
      ...selectedProject.images.map(url => ({ type: 'image', url })),
    ];
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    const media = getCurrentMedia();
    if (!media || media.length <= 1) return;

    setCurrentMediaIndex(prev => 
      direction === 'prev' 
        ? (prev === 0 ? media.length - 1 : prev - 1)
        : (prev === media.length - 1 ? 0 : prev + 1)
    );
  };

  const isVideo = (url: string) => {
    return url.includes('.mp4') || url.includes('.webm') || url.includes('.mov');
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Your existing hero section and category filter */}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className="relative h-[400px] md:h-[500px] overflow-hidden group rounded-xl shadow-lg cursor-pointer"
            onClick={() => handleProjectClick(project)}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className={`
              absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
              transition-opacity duration-300
              md:opacity-0 md:group-hover:opacity-100
              flex flex-col justify-end p-8
            `}>
              <div className="transform transition-transform duration-300 md:translate-y-4 md:group-hover:translate-y-0">
                <span className="text-gray-300 text-sm uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-90">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Your existing philosophy section */}

      {/* Enhanced Image Display Dialog */}
      <AnimatePresence>
        {isDialogOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDialog}
          >
            <motion.div
              className="relative max-w-7xl w-full max-h-[90vh] bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dialog Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeDialog}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Media Display Area */}
              <div className="relative h-[70vh] flex items-center justify-center bg-black">
                {getCurrentMedia()?.[currentMediaIndex] && (
                  <>
                    {isVideo(getCurrentMedia()![currentMediaIndex].url) ? (
                      <video
                        src={getCurrentMedia()![currentMediaIndex].url}
                        controls
                        autoPlay
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <img
                        src={getCurrentMedia()![currentMediaIndex].url}
                        alt={`${selectedProject.title} - ${currentMediaIndex + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}

                    {/* Navigation Arrows */}
                    {getCurrentMedia() && getCurrentMedia()!.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateMedia('prev');
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateMedia('next');
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {getCurrentMedia() && getCurrentMedia()!.length > 1 && (
                <div className="p-4 border-t border-gray-700 bg-gray-900/50">
                  <div className="flex gap-2 overflow-x-auto py-2">
                    {getCurrentMedia()!.map((media, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentMediaIndex(index);
                        }}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                          currentMediaIndex === index
                            ? 'border-pink-500'
                            : 'border-transparent'
                        }`}
                      >
                        {isVideo(media.url) ? (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <span className="text-white text-xs">Video</span>
                          </div>
                        ) : (
                          <img
                            src={media.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="p-4 bg-gray-900">
                <p className="text-gray-300 mb-2">{selectedProject.description}</p>
                {(selectedProject.location || selectedProject.year) && (
                  <div className="flex gap-3 text-sm text-gray-400">
                    {selectedProject.location && <span>{selectedProject.location}</span>}
                    {selectedProject.location && selectedProject.year && <span>•</span>}
                    {selectedProject.year && <span>{selectedProject.year}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectDisplay;