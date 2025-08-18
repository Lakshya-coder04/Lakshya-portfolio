import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, Download, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import Card from '../utils/Card';
import { contacts } from '../data/data';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className='relative mx-auto max-w-6xl px-5 py-16'>
      <motion.div
        className='grid items-center gap-8 md:grid-cols-2'
        initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <motion.h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Building crisp, accessible UIs
          </motion.h1>
          <p className='mt-4 max-w-prose text-neutral-600 dark:text-neutral-300'>
            I’m Lakshya, a React + TypeScript developer focused on performance
            and crafting pixel-perfect UI's. I craft scalable front-ends with
            clean architecture, modern tooling, and thoughtful
            micro-interactions.
          </p>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-900 px-4 py-2 text-white shadow-sm hover:opacity-90 dark:border-neutral-800 dark:bg-white dark:text-neutral-900'
            >
              <Rocket className='h-4 w-4' /> View Projects
            </a>
            <a
              href={contacts.resume}
              className='inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900'
            >
              <Download className='h-4 w-4' /> Resume
            </a>
            <a
              href={`mailto:${contacts.email}`}
              className='inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900'
            >
              <Mail className='h-4 w-4' /> Contact
            </a>
          </div>
          <div className='mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400'>
            <span className='inline-flex items-center gap-2'>
              <MapPin className='h-4 w-4' /> {contacts.location}
            </span>
            <a
              className='inline-flex items-center gap-2 hover:underline'
              href={contacts.github}
            >
              <Github className='h-4 w-4' /> GitHub
            </a>
            <a
              className='inline-flex items-center gap-2 hover:underline'
              href={contacts.linkedin}
            >
              <Linkedin className='h-4 w-4' /> LinkedIn
            </a>
          </div>
        </div>
        <motion.div
          className='relative'
          initial={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
          animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className='p-0'>
            <img
              src='/images/ai-summarizer.png'
              alt='AI Summarizer'
              loading='lazy'
              className='aspect-[16/10] w-full object-cover transition-transform duration-300 hover:scale-105'
            />
            <div className='p-5'>
              <p className='text-sm text-neutral-500'>Featured</p>
              <h3 className='mt-1 text-lg font-semibold'>AI Summarizer</h3>
              <p className='mt-1 text-sm text-neutral-600 dark:text-neutral-300'>
                SPA that fetches articles and produces concise summaries with
                caching, retry logic, and offline UX using Redux Toolkit.
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
