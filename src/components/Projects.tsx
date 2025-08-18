import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { projects } from '../data/data';
import Card from '../utils/Card';
import Badge from '../utils/Badge';
import { fadeUp } from '../utils/Animations';

export default function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-6xl px-5 py-12'>
      <div className='mb-6 flex items-center gap-2'>
        <Code2 className='h-5 w-5' />
        <h2 className='text-2xl font-semibold tracking-tight'>Projects</h2>
      </div>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p, i) => (
          <motion.div key={p.title} {...fadeUp(i)}>
            <Card className='overflow-hidden p-0'>
              <img
                src={p.image}
                alt={p.title}
                loading='lazy'
                className='aspect-[16/10] w-full object-cover transition-transform duration-300 hover:scale-105'
              />
              <div className='p-5'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-lg font-semibold leading-tight'>
                    {p.title}
                  </h3>
                  <div className='flex items-center gap-2'>
                    <a
                      href={p.links.live}
                      className='inline-flex'
                      target='_blank'
                      aria-label='Live demo'
                    >
                      <ExternalLink className='h-4 w-4' />
                    </a>
                    <a
                      href={p.links.repo}
                      className='inline-flex'
                      target='_blank'
                      aria-label='Source code'
                    >
                      <Code2 className='h-4 w-4' />
                    </a>
                  </div>
                </div>
                <p className='mt-2 text-sm text-neutral-600 dark:text-neutral-300'>
                  {p.desc}
                </p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {p.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
