import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { education } from '../data/data';
import Card from '../utils/Card';
import { fadeUp } from '../utils/Animations';

export default function Education() {
  return (
    <section id='education' className='mx-auto max-w-6xl px-5 py-12'>
      <div className='mb-6 flex items-center gap-2'>
        <Award className='h-5 w-5' />
        <h2 className='text-2xl font-semibold tracking-tight'>
          Certifications
        </h2>
      </div>
      <div className='space-y-4'>
        {education.map((e, i) => (
          <motion.div key={e.school} {...fadeUp(i)}>
            <Card>
              <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-center'>
                <div>
                  <h3 className='text-lg font-semibold'>{e.school}</h3>
                  <p className='text-sm text-neutral-500'>{e.major}</p>
                </div>
                <p className='text-sm text-neutral-500'>{e.period}</p>
              </div>
              <ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
