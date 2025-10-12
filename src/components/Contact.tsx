"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedElement from "@/components/animation/AnimatedElements";
import { Mail, Send } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import { useToast } from "@/hooks/use-toast";

// Google reCAPTCHA site key (safe to expose on client)
const RECAPTCHA_SITE_KEY = "6Lc6-uYrAAAAAJd0FcYVIBxnsvlYhcMAuq9mTmHv";

// Extend Window interface for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: string | HTMLElement, parameters: {
        sitekey: string;
        callback?: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
        theme?: "light" | "dark";
        size?: "normal" | "compact";
      }) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Load reCAPTCHA script
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("recaptcha-script")) {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.id = "recaptcha-script";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setRecaptchaLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById("recaptcha-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Initialize reCAPTCHA widget
  useEffect(() => {
    if (recaptchaLoaded && recaptchaRef.current && window.grecaptcha && recaptchaWidgetId.current === null) {
      try {
        window.grecaptcha.ready(() => {
          if (recaptchaRef.current) {
            recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
              sitekey: RECAPTCHA_SITE_KEY,
              callback: (token: string) => {
                setRecaptchaToken(token);
              },
              "expired-callback": () => {
                setRecaptchaToken(null);
              },
              "error-callback": () => {
                setRecaptchaToken(null);
                toast({
                  title: "Error",
                  description: "reCAPTCHA error. Please try again.",
                  variant: "destructive",
                });
              },
              theme: "dark",
              size: "normal",
            });
          }
        });
      } catch (error) {
        console.error("Error initializing reCAPTCHA:", error);
      }
    }
  }, [recaptchaLoaded, toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate reCAPTCHA
      if (!recaptchaToken) {
        toast({
          title: "Verification Required",
          description: "Please complete the reCAPTCHA verification.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData(e.currentTarget);
      const jsonData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        recaptchaToken: recaptchaToken,
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

        // Reset reCAPTCHA
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
        setRecaptchaToken(null);

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

      // Reset reCAPTCHA on error
      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }
      setRecaptchaToken(null);
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

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-start'>
          <AnimatedElement delay={0.1} once>
            <div className='card'>
              <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
              <p className='text-muted mb-1'>
                If you&apos;re looking for a designer and developer who understands the entire process - from early user research and wireframes to polished, responsive builds and successful launches - I&apos;d love to hear from you. Whether you&apos;re after a freelance designer or developer for a short project, seeking ongoing website updates, or exploring a full-time creative partnership, I&apos;m always open to new opportunities.
              </p>
              <p className='text-muted mb-6'>
                Let&apos;s connect and see how I can help turn your ideas into something people will love to use.
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
                <h3 className='text-xl font-bold mb-2'>Location</h3>
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
                  <input type='text' id='name' name='name' required className='form-input' autoComplete='name' />
                </div>

                <div>
                  <label htmlFor='email' className='block text-muted mb-2'>
                    Email
                  </label>
                  <input type='email' id='email' name='email' required className='form-input' autoComplete='email' />
                </div>

                <div>
                  <label htmlFor='message' className='block text-muted mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    className='form-input resize-none'
                    autoComplete='off'
                  ></textarea>
                </div>

                {/* reCAPTCHA v2 Checkbox */}
                <div className='flex flex-col items-start'>
                  <label htmlFor='recaptcha-container' className='sr-only'>
                    Complete reCAPTCHA verification
                  </label>
                  <div
                    id='recaptcha-container'
                    ref={recaptchaRef}
                    className='transform scale-100 origin-left'
                    role='presentation'
                    aria-label='reCAPTCHA verification'
                  />
                  {!recaptchaLoaded && (
                    <p className='text-sm text-muted mt-2' aria-live='polite'>
                      Loading verification...
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting || !recaptchaToken}
                  className='btn-primary flex-center w-full disabled:opacity-50 disabled:cursor-not-allowed'
                  aria-disabled={isSubmitting || !recaptchaToken}
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
