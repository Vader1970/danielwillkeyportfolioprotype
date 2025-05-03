//About Section
import AnimatedElement from "@/components/animation/AnimatedElements";
import TiltCard from "@/components/animation/TiltCard";
import { skills } from "@/constants/skills";

const About = () => {
  return (
    <section id='about' className='section-padding bg-dark text-light relative overflow-hidden'>
      <div className='container-width'>
        <AnimatedElement delay={0.1} once>
          <h2 className='section-heading'>
            <span className='gradient-text'>About Me</span>
          </h2>
        </AnimatedElement>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start'>
          <AnimatedElement delay={0.1} once>
            <TiltCard className='card'>
              <h3 className='text-xl md:text-2xl font-bold mb-4'>UX/UI Designer & Web Developer</h3>
              <p className='text-muted mb-4'>
                Hi there, I&apos;m Daniel, a UX/UI Designer and Web Developer based in Christchurch, New Zealand. I
                focus on creating digital experiences that are both easy to use and visually appealing, always putting
                the user first and aiming for great performance.
              </p>
              <p className='text-muted mb-4'>
                With experience in every stage of development, I turn ideas into reality - from doing research and
                sketching wireframes to building responsive, ready-to-launch websites. I like blending creativity with
                logic, making sure every pixel serves a purpose and every interaction feels smooth.
              </p>
              <p className='text-muted'>
                Whether I&apos;m working with a team or managing a project on my own, I take pride in writing clean
                code, developing user-friendly design systems, and delivering user experiences that truly matter.
              </p>

              <div className='mt-6 sm:mt-6'>
                <h4 className='font-semibold text-lg mb-2'>Education</h4>
                <ul className='space-y-2 text-muted'>
                  <li>• Diploma in Web Design & Production - Yoobee Colleges</li>
                  <li>• Certificate in UX Design - Yoobee Colleges</li>
                  <li>• Certificate in Web Development - Yoobee Colleges</li>
                  <li>• Certificate in Business Studies (Information Systems) - Massey University</li>
                </ul>
              </div>

              <div className='mt-6'>
                <h4 className='font-semibold text-lg mb-2'>Experience</h4>
                <ul className='space-y-2 text-muted'>
                  <li>• UX/UI Designer & Web Developer - Chance Voight Investment Corporation (May 2024-Present)</li>
                  <li>• Freelance Web Developer - Self-employed (2022-Present)</li>
                  <li>• Pixel Perfect Web Designs - Web Designer & Developer (2022-2024)</li>
                </ul>
              </div>
            </TiltCard>
          </AnimatedElement>

          <div className='space-y-8'>
            <AnimatedElement delay={0.2} once>
              <h3 className='text-xl md:text-2xl font-bold mb-6 mt-6 sm:mt-0'>My Skills</h3>
            </AnimatedElement>

            <div className='space-y-8'>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <AnimatedElement key={skill.category} delay={0.3 + index * 0.1} once>
                    <TiltCard className='card-sm'>
                      <div className='flex items-center mb-3'>
                        <div className='mr-3 text-highlight'>
                          <IconComponent className='icon' />
                        </div>
                        <h4 className='font-bold'>{skill.category}</h4>
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {skill.items.map((item) => (
                          <span key={item} className='tag'>
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
