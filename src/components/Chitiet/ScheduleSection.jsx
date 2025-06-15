import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, Home } from 'lucide-react';

const ScheduleSection = ({ getSectionClass }) => {
  // Simplified container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Simplified item animation - reduced spring complexity
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="schedule"
      data-animate
      className={`mb-24 sm:mb-36 ${getSectionClass('schedule')}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16 sm:mb-20"
        variants={itemVariants}
      >
        <div className="inline-block mb-6">
          <h2 className="text-5xl sm:text-7xl font-serif bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent relative">
            Lịch Trình Lễ Cưới
            <span className="absolute -top-2 -right-4 text-2xl">✨</span>
          </h2>
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ngày thiêng liêng với hôn lễ được cử hành tại tư gia
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8 rounded-full" />
      </motion.div>
      
      {/* Single Day Container */}
      <motion.div 
        className="flex justify-center"
        variants={containerVariants}
      >
        <WeddingDay itemVariants={itemVariants} />
      </motion.div>
    </motion.div>
  );
};

const WeddingDay = ({ itemVariants }) => {
  const detailsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative max-w-4xl w-full"
      variants={itemVariants}
    >
      {/* Static background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-cyan-50/30 rounded-3xl -m-8 -z-10" />
      
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center">
        
        {/* Left - Day Number & Badge */}
        <motion.div 
          className="text-center lg:text-right space-y-8"
          variants={detailsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative inline-block"
            variants={detailItemVariants}
          >
            <div className="text-[8rem] sm:text-[10rem] font-black bg-gradient-to-br from-blue-200 to-cyan-200 bg-clip-text text-transparent leading-none select-none">
              12
            </div>
            <span className="absolute top-4 right-4 text-3xl">💍</span>
          </motion.div>
          
          <motion.div 
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full shadow-lg"
            variants={detailItemVariants}
          >
            <Heart className="w-8 h-8" />
            <span className="text-2xl font-bold">Tháng 7</span>
          </motion.div>
        </motion.div>

        {/* Center - Timeline dot */}
        <div className="flex justify-center">
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Simplified dot with subtle pulse */}
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg relative z-10 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white text-xl">💒</span>
            </motion.div>
            
            {/* Static outer ring */}
            <div className="absolute inset-0 w-12 h-12 border-4 border-blue-200 rounded-full animate-pulse" />
          </motion.div>
        </div>
        
        {/* Right - Event Details */}
        <motion.div 
          className="space-y-6"
          variants={detailsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100"
            variants={detailItemVariants}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <Calendar className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-lg font-bold text-gray-800">Thứ 7, ngày 12</p>
                  <p className="text-sm text-gray-600">Tháng 7 (Nhâm ngày 18 tháng 6 năm Ất Tỵ)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-lg font-bold text-gray-800">18:00 PM</p>
                  <p className="text-sm text-gray-600">Thời gian</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <Home className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-lg font-bold text-gray-800">Số nhà 218, Tổ 6</p>
                  <p className="text-sm text-gray-600">Ấp Phụng Xoài, Xã Châu Phong, Tx Tân Châu, Tỉnh AG</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScheduleSection;