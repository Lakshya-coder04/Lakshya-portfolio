import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { skills } from '../data/data';
import Card from '../utils/Card';
import Badge from '../utils/Badge';
import { fadeUp } from '../utils/Animations';

export default function Skills() {
  return (
    <section id='skills' className='mx-auto max-w-6xl px-5 py-12'>
      <div className='mb-6 flex items-center gap-2'>
        <Star className='h-5 w-5' />
        <h2 className='text-2xl font-semibold tracking-tight'>Skills</h2>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        {skills.map((s, i) => (
          <motion.div key={s.group} {...fadeUp(i)}>
            <Card>
              <h3 className='text-base font-semibold'>{s.group}</h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {s.items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
