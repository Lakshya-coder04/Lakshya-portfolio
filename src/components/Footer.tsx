import { Download, Mail } from 'lucide-react';
import { contacts } from '../data/data';

export default function Footer() {
  return (
    <footer className='mx-auto max-w-6xl px-5 pb-12 pt-6 text-sm text-neutral-500'>
      <div className='flex flex-col items-center justify-between gap-3 sm:flex-row'>
        <p>
          © {new Date().getFullYear()} Lakshya Birla. Built with React,
          TypeScript, Tailwind v4.
        </p>
        <div className='flex items-center gap-3'>
          <a
            className='inline-flex items-center gap-2 hover:underline'
            href={contacts.resume}
          >
            <Download className='h-4 w-4' /> Resume
          </a>
          <a
            className='inline-flex items-center gap-2 hover:underline'
            href={`mailto:${contacts.email}`}
          >
            <Mail className='h-4 w-4' /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
