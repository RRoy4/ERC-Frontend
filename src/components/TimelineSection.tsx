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
    title: 'Hardware Session',
    description: 'Session to design, build, and wire the hardware that brings your bot to life. (Electrical and mechanical)',
    date: 'Aug 16, 2025',
  },
  {
    id: 2,
    title: 'Soldering Session',
    description: 'A practical session where you’ll learn the essential techniques and skills needed to solder with confidence.',
    date: 'Aug 17, 2025',
  },
  {
    id: 3,
    title: 'Software Session',
    description: 'Hands-on workshop where you’ll learn to write and upload code to control your bot’s movements and actions.',
    date: 'Aug 22–24, 2025',
  },
  {
    id: 4,
    title: 'XLR8 Main Event',
    description: 'Race your bot through a challenging obstacle course and compete with the best teams!',
    date: 'Aug 30–31, 2025',
  },
];

const TimelineSection = () => {
  return (
    <section className="relative py-20 text-white">
      {/* vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/30" />

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
              className="mb-16 relative flex flex-col items-center md:items-stretch"
            >
              {/* dot */}
              <div className="w-4 h-4 rounded-full bg-white absolute left-1/2 -translate-x-1/2 z-10" />

              {/* card */}
              <div
                className={`
                  mt-6 md:mt-0 w-[90%] md:w-[45%] rounded-xl bg-orange-500 p-6 shadow-lg
                  ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}
                `}
              >
                <h3 className="text-xl font-heading">{event.title}</h3>
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
