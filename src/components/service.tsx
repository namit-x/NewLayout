import { motion } from 'framer-motion';

const ServicesCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden shadow-2xl transition-all group border border-muted bg-background/80 backdrop-blur-md hover:scale-[1.03]"
      whileHover={{ y: -4 }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      <div className="relative z-20 h-full flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;