"use client";

import { useState } from "react";
import AnimatedElement from "@/components/animation/AnimatedElements";
import { Mail, Send } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const jsonData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset the form
        (e.target as HTMLFormElement).reset();

        // Show success toast
        toast({
          title: "Success!",
          description: "Thanks for your message! I'll get back to you soon.",
          variant: "default",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error toast
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='section-padding bg-dark text-light relative overflow-hidden'>
      <div className='container-width'>
        <AnimatedElement delay={0.1} once>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-12'>
            <span className='gradient-text'>Get in Touch</span>
          </h2>
        </AnimatedElement>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          <AnimatedElement delay={0.1} once>
            <div className='glass-morph p-6 md:p-8'>
              <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
              <p className='text-light/80 mb-6'>
                If you&apos;re looking for a designer/developer who understands the full journey — from user experience
                to final deployment — I&apos;d love to connect. Whether it&apos;s a freelance opportunity, full-time
                role, or collaboration, feel free to reach out. I&apos;m always open to a conversation.
              </p>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <Mail className='w-5 h-5 mr-3 text-highlight mt-1' />
                  <div>
                    <h4 className='font-medium'>Email</h4>
                    <a
                      href='mailto:daniel.wilkey@gmail.com'
                      className='text-light/70 hover:text-highlight transition-colors duration-300'
                    >
                      daniel.wilkey@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <GithubIcon className='w-5 h-5 mr-3 text-highlight mt-1' />
                  <div>
                    <h4 className='font-medium'>GitHub</h4>
                    <a
                      href='https://github.com/Vader1970'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-light/70 hover:text-highlight transition-colors duration-300'
                    >
                      github.com/Vader1970
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <LinkedinIcon className='w-5 h-5 mr-3 text-highlight mt-1' />
                  <div>
                    <h4 className='font-medium'>LinkedIn</h4>
                    <a
                      href='https://www.linkedin.com/in/danielwilkey/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-light/70 hover:text-highlight transition-colors duration-300'
                    >
                      linkedin.com/in/danielwilkey
                    </a>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <h3 className='text-xl font-bold mb-4'>Location</h3>
                <p className='text-light/70'>Based in Christchurch, New Zealand</p>
                <p className='text-light/70 mt-2'>Available for remote work worldwide</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2} once>
            <form onSubmit={handleSubmit} className='glass-morph p-6 md:p-8'>
              <h3 className='text-xl font-bold mb-6'>Send a Message</h3>

              <div className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block text-light/80 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50 text-light'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-light/80 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50 text-light'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-light/80 mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50 text-light resize-none'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='flex items-center justify-center w-full px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight/80 transition-colors duration-300 disabled:opacity-50'
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} className='ml-2' />
                </button>
              </div>
            </form>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
