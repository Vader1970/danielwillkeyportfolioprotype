import AnimatedElement from "@/components/animation/AnimatedElements";
// import AnimatedText from "@/components/animation/AnimatedText"; // Removed import
import TiltCard from "@/components/animation/TiltCard";
import { skills } from "@/constants/skills";

const About = () => {
  return (
    <section id='about' className='section-padding bg-dark text-light relative overflow-hidden'>
      <div className='container-width'>
        <AnimatedElement delay={0.1} once>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-12'>
            <span className='gradient-text'>About Me</span>
          </h2>
        </AnimatedElement>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <AnimatedElement delay={0.1} once>
            <TiltCard className='p-6 md:p-8'>
              <h3 className='text-xl md:text-2xl font-bold mb-4'>UX/UI Designer & Web Developer</h3>
              <p className='text-light/80 mb-4'>
                I&apos;m Daniel Wilkey, a UX/UI Designer & Web Developer based in Christchurch, New Zealand. With a
                passion for crafting beautiful, functional digital experiences, I specialize in end-to-end web
                development.
              </p>
              <p className='text-light/80'>
                My approach combines creative design thinking with technical expertise to build websites and
                applications that not only look stunning but also perform exceptionally well.
              </p>

              <div className='mt-6'>
                <h4 className='font-semibold text-lg mb-2'>Education</h4>
                <ul className='space-y-2 text-light/80'>
                  <li>• Diploma in Web Design & Production – Yoobee Colleges</li>
                  <li>• Certificate in UX Design – Yoobee Colleges</li>
                  <li>• Certificate in Web Development – Yoobee Colleges</li>
                  <li>• Certificate in Business Studies (Information Systems) – Massey University</li>
                </ul>
              </div>

              <div className='mt-6'>
                <h4 className='font-semibold text-lg mb-2'>Experience</h4>
                <ul className='space-y-2 text-light/80'>
                  <li>• UX/UI Designer & Web Developer – Chance Voight Investment Corporation (May 2024–Present)</li>
                  <li>• Freelance Web Developer – Self‑employed (2023–Present)</li>
                </ul>
              </div>
            </TiltCard>
          </AnimatedElement>

          <div className='space-y-8'>
            <AnimatedElement delay={0.2} once>
              <h3 className='text-xl md:text-2xl font-bold mb-6'>My Skills</h3>
            </AnimatedElement>

            <div className='space-y-6'>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <AnimatedElement key={skill.category} delay={0.3 + index * 0.1} once>
                    <TiltCard className='p-4 md:p-6'>
                      <div className='flex items-center mb-3'>
                        <div className='mr-3 text-highlight'>
                          <IconComponent className='w-5 h-5' />
                        </div>
                        <h4 className='font-bold'>{skill.category}</h4>
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {skill.items.map((item) => (
                          <span key={item} className='inline-block px-3 py-1 bg-white/10 rounded-full text-sm'>
                            {item}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </AnimatedElement>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
