import React from 'react';
import lawyer from '../../image/lawyer.png'

const AboutUs = () => {
    return (
        <div className='p-5'>
            <div className='container fs-4 text my-5'>
                <p>My Name is <strong>Zibonanando Das</strong></p>
                <p><strong>My Goal:</strong> My goal is to be a professional web programmer.</p>
                <p>For achieving my goal I doing hard work. It is not easy to me because i am govt. service holder and also a married person. I have one child. after done all my duties I do practices on web programming. In my office I have to spend 8-9 hours and also spend time for my family. Then I learning web programming. after complete this course i will try to do work in market place. I have an account on upwork and do some work on others platform. I will try to create a professional career on web programming.</p>
            </div>
            <div className='row'>
                <h1 className='text-center my-lg-5 fw-bolder'>About Lawyer</h1>

                <div className='col-6'>
                    <img className='img-fluid' src={lawyer} alt="" />
                </div>
                <div className='col-6'>
                    
                    <p style={{textAlign :'justify'}} className='lead'>
                        <h5>Passion for the Job</h5>
                        As a starting point, successful lawyers almost always have a true passion for their job. You have probably heard popular cliches like “choose a job you love and you will never work a day in your life”. Of course, we all know that in the real world it’s not quite that simple. At the same time, there is a wide body of scientific evidence that demonstrates the importance of passion for your work. Some have an already developed enthusiasm for lifelong learning, but as noted by Deloitte, one of the keys to talent development is cultivating worker passion. In other words, people who are passionate about what they are doing are happier, more fulfilled, and they perform better. If you have a passion for serving people and an interest in the law, you should consider applying for admission into law school.
                        <br /> <br />

                        <h5>Compassion for Clients</h5>
                        Without compassion for their clients, a lawyer will never reach their true professional potential. The top legal minds in the field almost invariably highlight compassion and service when they offer advice to law students and aspiring lawyers. For example, as reported by the Columbia Daily Spectator, Supreme Court Justice Ruth Bader Ginsburg told law students that they should try to use their degree to “make things a little better for other people”. A lawyer who is committed to representing and helping their clients is likely to find meaning and success in their professional life. <br /><br />

                        <h5>Great Communication Skills</h5>
                        On a fundamental level, attorneys are communicators. They communicate with their clients, they communicate with other parties to the case, and they communicate with the court. Beyond that, lawyers communicate in a wide range of different ways. A great lawyer knows how to get important ideas across in formal legal writing, in informal emails, in phone conversations, through discussions in official legal settings, and in private conversations. Law students and aspiring lawyers should never miss an opportunity to sharpen their communication skills. It’s not just about the law, it’s also about the business. As noted by the American Bar Association (ABA), the average American law firm spends a considerable amount of time attracting and retaining clients. Lawyers need to know how to network with potential clients and how to demonstrate their professional capabilities in consultations with prospective clients. Remember, the greatest legal mind in the world will not be able to use their skills until they get hired.<br /> <br />

                        <h5>Willingness to Listen</h5>
                        One of the most underrated traits shared by almost every successful attorney is a strong ability and willingness to listen. Although strong listening is a part of overall communication skills, it’s important to highlight listening as its own professional trait. Effective communication is a two-way street. Too many people fail to put in the time and energy to fully understand and comprehend what the other party is saying. When you truly open up your ears, you will probably recognize that people are giving you even more information that you thought. Listening to your clients, listening to witnesses, listening to your opposing counsel, and listening to the court can be the difference between winning and losing a case. Great lawyers take in all relevant information, analyze it, and create a plan of action.<br /> <br />

                        <h5>Knowledge of the Law</h5>
                        Imagine that you were hurt in a truck accident on a local highway. You would probably want to turn to an experienced personal injury lawyer. If you’re considering starting a company and want guidance on corporate formation, you will undoubtedly want to find an experienced business attorney. While successful lawyers share many common traits, they may rely on a distinct body of law. The legal knowledge needed to be an effective corporate litigator is far different than the legal knowledge needed to help a California couple pursue a private adoption. Great lawyers know their area of practice. Some of this knowledge comes from experience. Some of it comes from education. If you are currently pursuing your legal education, you will want to find the right law school classes that will be the most useful for you in your future practice.<br /> <br />

                        <h5>Strong Writing Ability</h5>
                        One of the single defining traits that all successful attorneys share is excellent writing skills. Don’t be fooled by the flashy procedurals that are ever popular on television, the vast majority of lawyers spend far more time writing than they do in oral arguments. Successful lawyers must be able to prepare effective, clear, and well-reasoned legal documents. If you want to take action now that will help you become a better lawyer in the future, focus on sharpening your writing skills. An attorney who can tell a compelling story that weaves in all of the relevant facts and arguments is an attorney that will be successful for a long time.<br /> <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;