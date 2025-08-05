import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 0,
    title: 'XLR8 Oreo',
    description: 'Form your team and register through the official portal to participate in XLR8.',
    date: 'Aug 9, 2025',
  },
  {
    id: 1,
    title: 'Hardware',
    description: 'HArdware session and soldering session.',
    date: 'Aug 15–18, 2025',
  },
  {
    id: 2,
    title: 'Software sessions',
    description: 'Join interactive sessions with experts to prepare for the final event.',
    date: 'Aug 22–24, 2025',
  },
  {
    id: 3,
    title: 'XLR8 Main Event',
    description: 'On-campus hackathon & hardware challenges push your skills to the limit.',
    date: 'Aug 30-31, 2025',
  },
  {
    id: 4,
    title: 'Closing Ceremony',
    description: 'Winners are announced and prizes distributed with celebration!',
    date: 'Sept 6-7, 2025',
  },
];

const TimelineSection = () => {
  return (
    <section className="relative py-20 text-white">

      {/* vertical white center line */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white/30" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4">
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-24 relative min-h-[160px]"
            >
              {/* white dot */}
              {/* white dot (centered on timeline) */}
              <div className="w-4 h-4 rounded-full bg-white absolute top-2 left-1/2 -translate-x-1/2" />

            
              {/* orange box */}
              <div
                className={`max-w-md rounded-xl bg-orange-500 p-6 shadow-lg absolute ${
                  isLeft
                    ? 'left-1/2 -translate-x-[calc(100%+40px)]'  // Left side: offset box left of center
                    : 'left-1/2 translate-x-[40px]'              // Right side: offset box right of center
                }`}
              >

                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-sm opacity-80">{event.date}</p>
                <p className="mt-2 text-base">{event.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
