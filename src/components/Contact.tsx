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
          <h2 className='section-heading'>
            <span className='gradient-text'>Get in Touch</span>
          </h2>
        </AnimatedElement>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          <AnimatedElement delay={0.1} once>
            <div className='card'>
              <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
              <p className='text-muted mb-6'>
                If you&apos;re looking for a designer and developer who understands the entire process - from user
                experience to final launch - I&apos;d love to hear from you. Whether it&apos;s a freelance project, a
                full-time role, or a collaboration, feel free to get in touch. I&apos;m always happy to chat.
              </p>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <Mail className='icon-highlight mr-3 mt-1' />
                  <div>
                    <h4 className='font-medium'>Email</h4>
                    <a
                      href='mailto:daniel.wilkey@gmail.com'
                      className='text-muted-alt hover:text-highlight transition-colors duration-300'
                    >
                      daniel.wilkey@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <GithubIcon className='icon-highlight mr-3 mt-1' />
                  <div>
                    <h4 className='font-medium'>GitHub</h4>
                    <a
                      href='https://github.com/Vader1970'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-alt hover:text-highlight transition-colors duration-300'
                    >
                      github.com/Vader1970
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <LinkedinIcon className='icon-highlight mr-3 mt-1' />
                  <div>
                    <h4 className='font-medium'>LinkedIn</h4>
                    <a
                      href='https://www.linkedin.com/in/danielwilkey/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-alt hover:text-highlight transition-colors duration-300'
                    >
                      linkedin.com/in/danielwilkey
                    </a>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <h3 className='text-xl font-bold mb-4'>Location</h3>
                <p className='text-muted-alt'>Based in Christchurch, New Zealand</p>
                <p className='text-muted-alt mt-2'>Available for remote work worldwide</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2} once>
            <form onSubmit={handleSubmit} className='card'>
              <h3 className='text-xl font-bold mb-6'>Send a Message</h3>

              <div className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block text-muted mb-2'>
                    Name
                  </label>
                  <input type='text' id='name' name='name' required className='form-input' />
                </div>

                <div>
                  <label htmlFor='email' className='block text-muted mb-2'>
                    Email
                  </label>
                  <input type='email' id='email' name='email' required className='form-input' />
                </div>

                <div>
                  <label htmlFor='message' className='block text-muted mb-2'>
                    Message
                  </label>
                  <textarea id='message' name='message' required rows={5} className='form-input resize-none'></textarea>
                </div>

                <button type='submit' disabled={isSubmitting} className='btn-primary flex-center w-full'>
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
