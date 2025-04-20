import AnimatedElement from "@/components/animation/AnimatedElements";
// import AnimatedText from "@/components/animation/AnimatedText"; // Removed import
import TiltCard from "@/components/animation/TiltCard";
import { skills } from "@/constants/skills";

const About = () => {
  return (
    <section id='about' className='section-padding bg-dark text-light relative overflow-hidden'>
      <div className='container-width'>
        <AnimatedElement delay={0.1} once>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 md:mb-12'>
            <span className='gradient-text'>About Me</span>
          </h2>
        </AnimatedElement>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <AnimatedElement delay={0.1} once>
            <TiltCard className='p-6 md:p-8'>
              <h3 className='text-xl md:text-2xl font-bold mb-4'>UX/UI Designer & Web Developer</h3>
              <p className='text-light/80 mb-4'>
                Hi there, I&apos;m Daniel - a UX/UI Designer and Web Developer living in Christchurch, New Zealand. I
                specialize in crafting functional, elegant digital experiences that are both user-centered and
                performance-driven.
              </p>
              <p className='text-light/80 mb-4'>
                With a background in end-to-end development, I bring ideas to life - from initial research and
                wireframes to responsive, production-ready websites. I enjoy combining logic with creativity, making
                sure every pixel has a purpose and every interaction feels natural.
              </p>
              <p className='text-light/80'>
                Whether it&apos;s collaborating with a team or owning a project from start to finish, I take pride in
                writing clean code, creating thoughtful design systems, and delivering meaningful user experiences that
                make a real impact.
              </p>

              <div className='mt-6'>
                <h4 className='font-semibold text-lg mb-2'>Education</h4>
                <ul className='space-y-2 text-light/80'>
                  <li>• Diploma in Web Design & Production - Yoobee Colleges</li>
                  <li>• Certificate in UX Design - Yoobee Colleges</li>
                  <li>• Certificate in Web Development - Yoobee Colleges</li>
                  <li>• Certificate in Business Studies (Information Systems) - Massey University</li>
                </ul>
              </div>

              <div className='mt-6'>
                <h4 className='font-semibold text-lg mb-2'>Experience</h4>
                <ul className='space-y-2 text-light/80'>
                  <li>• UX/UI Designer & Web Developer - Chance Voight Investment Corporation (May 2024-Present)</li>
                  <li>• Freelance Web Developer - Self-employed (2022-Present)</li>
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
