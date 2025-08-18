import { Sun, Moon } from 'lucide-react';
import useThemeToggle from '../utils/useThemeToggle';

export default function Header() {
  const { dark, setDark } = useThemeToggle();

  return (
    <header className='sticky top-0 z-50 border-b border-transparent bg-neutral-50/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/50 dark:bg-neutral-950/60'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4'>
        <div className='flex items-center gap-3'>
          <div className='h-3 w-3 rounded-full bg-neutral-900 dark:bg-white' />
          <span className='font-semibold tracking-tight'>Lakshya Birla</span>
          <span className='hidden text-sm text-neutral-500 sm:inline'>
            — FrontEnd Developer
          </span>
        </div>
        <nav className='hidden gap-6 text-sm sm:flex'>
          <a href='#projects' className='hover:underline'>
            Projects
          </a>
          <a href='#skills' className='hover:underline'>
            Skills
          </a>
          <a href='#experience' className='hover:underline'>
            Experience
          </a>
          <a href='#contact' className='hover:underline'>
            Contact
          </a>
        </nav>
        <button
          aria-label='Toggle theme'
          onClick={() => setDark(!dark)}
          className='cursor-pointer inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-3 py-2 text-sm shadow-sm hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900'
        >
          {dark ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
          <span className='hidden sm:inline'>Theme</span>
        </button>
      </div>
    </header>
  );
}
