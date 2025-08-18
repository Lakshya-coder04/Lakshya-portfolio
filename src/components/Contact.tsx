import { Mail, FileText, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { contacts } from '../data/data';
import Card from '../utils/Card';
import React, { useRef } from 'react';
import { useState } from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xrbldaay'); // your Formspree form ID
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // when form is successful, trigger modal
  React.useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      formRef.current?.reset();
    }
  }, [state.succeeded]);
  return (
    <section id='contact' className='mx-auto max-w-6xl px-5 py-12'>
      <div className='mb-6 flex items-center gap-2'>
        <Mail className='h-5 w-5' />
        <h2 className='text-2xl font-semibold tracking-tight'>Contact</h2>
      </div>
      <Card>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <p className='flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300'>
              <FileText className='h-4 w-4' /> {contacts.name}
            </p>
            <p className='flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300'>
              <MapPin className='h-4 w-4' /> {contacts.location}
            </p>
            <a
              className='flex items-center gap-2 text-sm text-neutral-600 hover:underline dark:text-neutral-300'
              href={`mailto:${contacts.email}`}
            >
              <Mail className='h-4 w-4' /> {contacts.email}
            </a>
            <p className='flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300'>
              <Phone className='h-4 w-4' /> {contacts.phone}
            </p>
            <div className='flex gap-3 pt-2'>
              <a
                className='inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900'
                href={contacts.github}
              >
                <Github className='h-4 w-4' /> GitHub
              </a>
              <a
                className='inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900'
                href={contacts.linkedin}
              >
                <Linkedin className='h-4 w-4' /> LinkedIn
              </a>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action='https://formspree.io/f/xrbldaay'
            method='POST'
            className='space-y-3'
          >
            <input
              name='name'
              id='name'
              type='text'
              placeholder='Your name'
              className='w-full rounded-xl border dark:placeholder:text-neutral-400 placeholder:text-neutral-400 border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none  focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:focus:ring-neutral-700'
            />
            <ValidationError prefix='Name' field='text' errors={state.errors} />
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email'
              className='w-full rounded-xl border dark:placeholder:text-neutral-400 placeholder:text-neutral-400 border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:focus:ring-neutral-700'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <textarea
              id='message'
              name='message'
              placeholder='Tell me about your project…'
              rows={4}
              className='w-full resize-none rounded-xl border dark:placeholder:text-neutral-400 placeholder:text-neutral-400 border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:focus:ring-neutral-700'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button
              type='submit'
              onClick={() => setShowModal(false)}
              disabled={state.submitting}
              className='disabled:text-gray-500 cursor-pointer hover:scale-105 hover:transition-all duration-150 w-full rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-neutral-900'
            >
              Send
            </button>
          </form>

          {/* Success Modal */}
          {showModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
              <div className='bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl max-w-sm w-full text-center'>
                <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
                  ✅ Message Sent!
                </h2>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  Thanks for reaching out. I’ll get back to you soon.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className='cursor-pointer mt-4 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-500 transition'
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
}
