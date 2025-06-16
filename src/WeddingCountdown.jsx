import React, { useState, useEffect, useRef } from 'react';

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const weddingDate = new Date('2025-07-12T18:00:00');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

   const TimeUnit = ({ value, label, delay }) => (
    <div className={`text-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="bg-rose-950/30 backdrop-blur-sm rounded-xl p-5 border border-rose-300/20 hover:border-rose-300/30 transition-colors duration-300">
        <div className="text-5xl font-light text-rose-100 tracking-tighter">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-rose-300/80 mt-2 uppercase tracking-[0.2em]">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-rose-900/80 to-rose-800/90 p-8 flex items-center justify-center">
      <div ref={containerRef} className="space-y-16 max-w-4xl w-full px-4">
        {/* Countdown Title */}
        <div className={`text-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '100ms' }}>
          <h3 className="text-3xl font-normal text-rose-100 tracking-widest">
            ĐẾM NGƯỢC NGÀY THÀNH HÔN
          </h3>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent mx-auto mt-8 mb-2"></div>
          <p className="text-sm text-rose-300/60 tracking-widest mt-4">
            Chúng tôi sắp bắt đầu hành trình mới
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-5 max-w-3xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Ngày" delay="200" />
          <TimeUnit value={timeLeft.hours} label="Giờ" delay="300" />
          <TimeUnit value={timeLeft.minutes} label="Phút" delay="400" />
          <TimeUnit value={timeLeft.seconds} label="Giây" delay="500" />
        </div>


        {/* Special Message */}
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
          <div className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '700ms' }}>
            <div className="mt-16">
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-rose-300/40 to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-rose-100 tracking-widest mb-2">
                CHÚC MỪNG LỄ THÀNH HÔN
              </p>
              <p className="text-sm text-rose-300/70 tracking-widest">
                HẠNH PHÚC VẸN TRÒN
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingCountdown;
