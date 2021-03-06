import React, { Component } from 'react';
import DonutChart from '../../components/Charts/Donut.js';
import Modal from '../../components/Modal/Modal.js';
import './Schedule.scss';

import config from 'speakersConfig';

//this 2019 carry-over hack still seems horrible, there still must be a better way...
import tossaway01 from '../../files/K2020_ceagle.pdf';
import tossaway02 from '../../files/K2020_dlindner.pdf';
import tossaway03 from '../../files/K2020_jlagorio.pdf';
import tossaway04 from '../../files/K2020_kphan.pdf';
import tossaway05 from '../../files/K2020_mbenoit.pdf';
import tossaway06 from '../../files/K2020_oparkins.pdf';
import tossaway07 from '../../files/K2020_rwoerner.pdf';
import tossaway08 from '../../files/K2020_cwright.pdf';
import tossaway09 from '../../files/K2020_hlawrence.pdf';
import tossaway10 from '../../files/K2020_jmaguire.pdf';
import tossaway11 from '../../files/K2020_kphan.pdf';
import tossaway12 from '../../files/K2020_mborn.pdf';
import tossaway13 from '../../files/K2020_rgeorge.pdf';
import tossaway14 from '../../files/K2020_scurry.pdf';
import tossaway15 from '../../files/K2020_rmacababbad.pdf';


class TalksSchedule extends Component {
  static displayName = 'TalksSchedule';

  constructor(props) {
  	super(props);
  	this.state = {
  		isOpen: false,
  		showFriday: true,
  		showSaturday: false,
  		title: '',
  		startTime: '',
  		endTime: '',
  		description: '',
  		technical: ''
  	};
  }

  getTalks() {
  	// Order Alphabetically
  	const talksOrdered = config.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

  	const talks = talksOrdered.map((ele, idx) => {
  		const percentTechnical = (ele.technical / 5) * 100;

  		const speakers = ele.speaker.map((el, idx) => {
  			const twitterUrl = el.twitter.replace('@', '');

  			return (
  				<div className='single-speaker'
  					key={idx}>
            <div className='speaker-name'>
            	{el.name}
            </div>
            {(el.twitter || el.github || el.linkedin) && <div className='speaker-icon-bar'>
              {el.twitter && <span className='speaker-icons'>
                <a href={`https://twitter.com/${twitterUrl}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='twitter-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='twitter-icon'>Twitter icon</title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'/>
                  </svg>
                </a>
              </span>}
              {el.linkedin && <span className='speaker-icons'>
                <a href={`https://www.linkedin.com${el.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='linkedin-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='linkedin-icon'>LinkedIn icon</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                </a>
              </span>}
              {el.github && <span className='speaker-icons'>
                <a href={el.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='github-icon'
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </span>}
            </div>}
          </div>
  			)
  		});


			const speakerLines = (
        <div className='talk-sub-title'>
        	{speakers}

          <div className='length'>{`${ele.length} minutes`}</div>

          {(ele.video || ele.pdf) && <div className='talk-icon-bar'>
           {ele.video && <span className='talk-icons'>
             <a href={ele.video}
               target='_blank'
               rel='noopener noreferrer'>
               <svg className='talk-icons'
                 fill="#FF0000"
                 aria-labelledby='youtube-icon'
                 role="img"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                 <title>YouTube icon</title>
                 <path d="M23 7a2.88 2.88 0 0 0-2-2c-1.79-.48-9-.48-9-.48S4.81 4.51 3 5a2.88 2.88 0 0 0-2 2 29.93 29.93 0 0 0-.5 5.56A29.93 29.93 0 0 0 1 18.1a2.88 2.88 0 0 0 2 2c1.79.48 9 .48 9 .48s7.19 0 9-.48a2.88 2.88 0 0 0 2-2 29.93 29.93 0 0 0 .48-5.54A29.93 29.93 0 0 0 23 7zM9.7 16V9.11l6 3.45z"/>
               </svg>
             </a>
             </span>}

              {ele.pdf && <span className='talk-icons'>
                <a href={`cfp/${ele.pdf}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='talk-icons'
                    aria-labelledby='pdf-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='pdf-icon'>PDF icon</title>
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
                  </svg>
                </a>
              </span>}


          </div>}

          {ele.technical && <div className='technical'>
            <DonutChart value={percentTechnical} />
            <span className='tech-label'>% technical</span>
          </div>}
        </div>
			);


  		return (
  			<div id={ele.talk_id}
  				key={idx}
  				className='single-talk'
  			>
          <div className='talk-title'>{ele.title}</div>
          {speakerLines}
          <div className='abstract'>
            {ele.abstract}
          </div>
  			</div>
  		)
  	});

  	return talks;
  }

  popModal = (title, startTime, endTime, description, talkTitle, speaker, technical) => e => {
  	this.setState({
  		title: title,
  		startTime: startTime,
  		endTime: endTime,
  		description: description,
  		talkTitle: talkTitle,
  		speaker: speaker,
  		technical: technical
  	});

  	this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDate(date) {
    if (date === 'Friday') {
      this.setState({
        showFriday: true,
        showSaturday: false
      });
    } else {
      this.setState({
        showFriday: false,
        showSaturday: true
      });
    }
  }

  render() {
  	const talks = this.getTalks();
    const day = this.state.showFriday ? 'Friday ' : 'Saturday ';
  	const percentTechnical = this.state.technical ? (this.state.technical / 5) * 100 : '';


    return (
    	<div className='schedule-talks'>
    		<Modal show={this.state.isOpen}
    			onClose={this.toggleModal}
    			title={this.state.title}
    		>
    			<div className='modal-content'>
    				{this.state.talkTitle && 
    				<div className='modal-talk-title'>
    					{this.state.talkTitle}
    				</div>}
    				{this.state.speaker && 
    				<div className='modal-speaker'>
    					{this.state.speaker}
    				</div>}
    				<div className='modal-headline'>
	    				<div className='modal-time'>
	    					{this.state.startTime} - {this.state.endTime}
	    				</div>
		    			{this.state.technical && <div className='modal-tech'>
		            <DonutChart value={percentTechnical} />
		            <span className='tech-label'>% technical</span>
		          </div>}
		        </div>
    				<div className='modal-description'>
    					{this.state.description}
    				</div>
    			</div>
    		</Modal>
        <ul className='tabs'>
          <li>
            <input type='radio'
              onChange={() => {this.toggleDate('Friday')}}
              name='tabs'
              id='tab1'
              checked={this.state.showFriday} />
            <label htmlFor='tab1'>Friday<span>27</span></label>
          </li>
        
          <li>
            <input type='radio'
              onChange={() => {this.toggleDate('Saturday')}}
              name='tabs'
              id='tab2' 
              checked={this.state.showSaturday} />
            <label htmlFor='tab2'>Saturday<span>28</span></label>
          </li>
        </ul>

        {this.state.showFriday &&
        	<div>
        	<div className='schedule'>{`Tentative ${day} Speaking Schedule`}</div>
            <div className='tz-note'>Note: All times listed are in Central Time.</div>
	        	<div className='grid-wrapper-friday'>
	            <div className="track">Stream: Bat of Doom</div>
	            <div className="track">Stream: Terrified Chipmunk</div>
	            <a className="both-tracks"
	            	onClick={this.popModal('Stream Opens', '0830', '0900', 'Follow the instructions in your inbox to join the chat and start your day with hundreds of like-minded folks!')}>
	              <div className="box">
	                <span className="talk-time">0830</span>
	                <span>Stream Opens</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Opening Remarks', '0900', '0915', 'Opening Remarks from Kernelcon Organizers.')}>
	              <div className="box">
	                <span className="talk-time">0900</span>
	                <span>Opening Remarks</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Keynote', '0915', '1015', 'Over the past two years we have see a perceptible shift in security issues.  Traditional architectures like AD and DMZs are falling away and are being replaced with Cloud and IoT.  So, how do we approach this new world? In this talk, John will cover some core tools and techniques we use at BHIS every day to attack organizations.  We will also use these tools and techniques to help frame attendees in their approach and mindset to testing these technologies.', 'Now, For Something Completely Different', 'John Strand')}>
	              <div className="box">
	                <span className="talk-time">0915</span>
	                <span>Keynote: John Strand</span>
	              </div>
	            </a>
	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1015</span>
	                <span>Break</span>
	              </div>
	            </a>
	            <a onClick={this.popModal('Talk', '1030', '1130', "Password security is getting out of hand. You only need to watch the latest news stories about large-scale breaches or visit the haveibeenpwned site to see the current state of password security. Expecting end users to invent complex passwords for every web site they visit is untenable. Wouldn't it be great if there was some new technology that uses public key exchange and biometrics to get rid of passwords all together?  Well, that technology is here. WebAuthn (Web Authentication) is a web standard published in 2019 by the World Wide Web Consortium (W3C). The goal of the project is to standardize an interface for authenticating users to web-based applications and services using public-key cryptography instead of passwords. Despite being an emerging technology, this standard has already been adopted by leading browsers and platforms.  This talk aims to shed light the technical details of what WebAuthn is and how it works. We will also cover the security pros and cons of this new standard and make predictions about what this may mean for the future of web application security. This is an introductory talk. You do not need any prior knowledge of web authentication or cryptography to benefit from this talk.", 'Passwords are dead? Long live WebAuthn!', 'Alex Lauerman and Matt South', '3')}>
		            <div className="box">
		              <span className="talk-time">1030</span>
		              <span>Passwords are dead? Long live WebAuthn!</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1030', '1130', "Let's learn how to attack “Modern Desktop” applications. Specifically we will look at the blurring lines between desktop and web applications, and how embedded (browsers) renders can be exploited, the methods for discovering exploits, and how they can be fixed. On this journey we go over remote code execution vulnerabilities I discovered in apps like Teams, Outlook, Facebook Workplace, chat apps like Slack and Google Chat, and even a Docker sandbox escape. I will also be introducing a new IAST (interactive application security testing) tool I developed to help find these issues. Last and most importantly look at how to prevent / fix these issues in your applications.", 'Exploiting Modern Desktop Applications', 'Matt Austin', '4')}>
	            	<div className="box">
	              	<span className="talk-time">1030</span>
	              	<span>Exploiting Modern Desktop Applications</span>
	            	</div>
	            </a>

              <a onClick={this.popModal('Talk', '1130', '1150', "A lot of work has gone into breaking out the stages of an attack. Unfortunately, many security teams focus on the detection of infiltration, data loss, or response after an attack. This focus skips over a more proactive approach to preventing the attack during the planning stages. There is a plethora of information publically available about a company and its employees that is collected prior to an attack. This information is used to find vulnerabilities in information systems. The information is also used to plan out social engineering which is used to gain system credentials or additional information about a company.", 'A Hacker’s Viewpoint: Planning the Attack', 'Robert George and Kristina Krasnolobova', '3')}>
                <div className="box">
                  <span className="talk-time">1130</span>
                  <span>A Hacker’s Viewpoint: Planning the Attack</span>
                </div>
              </a>
							<a onClick={this.popModal('Talk', '1130', '1150', "Smart homes can be a highly contested cybersecurity topic. Some professionals are fearful of the technology that can be too close to home - and for good reason. With the current political climate regarding foreign made devices, many devices are not safe to have in the home. This should not stop professionals from gaining more experience with a rapidly expanding technology and figuring out a way to use it effectively. This talk describes a design and implementation of a secure smart home.", 'A Secure Design and Implementation of a Smart Home', 'Owen Parkins', '2')}>
		            <div className="box">
		              <span className="talk-time">1130</span>
		              <span>A Secure Design and Implementation of a Smart Home</span>
		            </div>
	            </a>
              <a onClick={this.popModal('Talk', '1150', '1210', "This talk will be an introduction into of amateur robotic astronomy for imaging and science and will discuss the challenges and solutions for building robotic telescopes.", 'Astrophotography - Backyard Robotics for Art and Science', 'Seth Eddy', '1')}>
                <div className="box">
                  <span className="talk-time">1150</span>
                  <span>Astrophotography - Backyard Robotics for Art and Science</span>
                </div>
              </a>
							<a onClick={this.popModal('Talk', '1150', '1210', "The DOE CyberForce Competition is an annual college event where student defenders compete against each other, defending their systems from red teams. The goal of this competition is to improve the technical skill sets of the students to prepare them for the work force. However, just randomly throwing red and blue teams together hoping that magic will happen is a recipe for disaster. But it’s hard to correct deep-seated wrong views about these cyber competitions.  So this year, at the Albuquerque site, we developed a process and automated tooling to collect data during the competition to answer questions such as the average number of vulnerabilities patched before game start time, ability for lateral movement without initial access, detection rate of more advanced C2, etc.  This data is really important for us to get insights about the competition so that we can improve it for the students. Hopefully, more competitions will start collecting these types of metrics so that we can improve the state of cyber education events.", 'Dispelling myths of red/blue cyber competition through metrics', 'Kandy Phan', '1')}>
		            <div className="box">
		              <span className="talk-time">1150</span>
		              <span>Dispelling myths of red/blue cyber competition through metrics</span>
		            </div>
	            </a>


	            <a className="both-tracks" onClick={this.popModal('Break', '1210', '1230', "", '')}>
		            <div className="box">
		              <span className="talk-time">1210</span>
		              <span>Break</span>
		            </div>
	            </a>
							
							<a onClick={this.popModal('Talk', '1230', '1330', "Have you ever seen someone just walking around with a key hanging on thier belt? How about a wall of keys behind a security desk? Better yet, has anyone you know every posted a picture of the keys to the new home they just bought? Well, what if you could take a picture and easily duplicate that key with a 3D Printer? Sound like something from a James Bond film? Well it's not! Better yet, if you can just get a moment alone with a key, you can get an imprint of it in less than 2 minutes, return the key to the owner and then cast a duplicate of that key for later use.", "Key Duplication - It's not just for the movies!", 'Tony Virelli', '2')}>
		            <div className="box">
		              <span className="talk-time">1230</span>
		              <span>Key Duplication - It's not just for the movies!</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1230', '1330', "Cannon Hack Development (CHDK) was initially created to allow features in Canon Cameras such as RAW image output to be available on cameras that came without them.  Since then additional features have been added to CHDK that have made it more useful to many people.  Some of these features are: scripting, high speed photography, 3d pictures, live histograms and many more.  This talk will cover all the steps needed to create an SD card with the CHDK software and show some of the features that makes available.  We'll also talk about some of the other free firmwares available such as 400plus, Spy Lantern and Magic Lantern.", "Unleash your Camera with CHDK", 'Aaron Grothe', '3')}>
								<div className="box">
	              	<span className="talk-time">1230</span>
	              	<span>Unleash your Camera with CHDK</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1330', '1430', "Anyone that knows me also knows that I'm a huge IDA Pro fanboy. Ghidra, the NSA's answer to IDA, has been in the public's hands for about a year now, so where does that leave me?  Still solidly in the IDA camp, but that doesn't mean that Ghidra hasn't had an impact on my life. Thanks to the magic of open source we can take one of Ghidra's nicest features and bolt it onto IDA to fill some gaps in IDA coverage. In this talk, I'll introduce the 'Binary Lifting Component' (it's kinder name), or just blc for short, plugin for IDA.  blc takes the core of Ghidra's decompiler capability and builds an IDA plugin around it to add decompilation capability to IDA for all processors supported by Ghidra.", "How Ghidra changed my life", 'Chris Eagle', '4')}>
								<div className="box">
	              	<span className="talk-time">1330</span>
	              	<span>How Ghidra changed my life</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1330', '1430', "The Ketogenic diet has taken form over the past few years and it actually works. So how can we apply something similar to our application security practices? Application security traditionally focuses on tools or manual testing. We traditionally do “static (SAST)” or “dynamic (DAST)” tool assessments and label them as a “full” or “time-boxed” assessment. The driving force is usually budget or lack thereof, so how do we trim down our assessment methodologies yet be efficient, precise and beneficial? There are many ways to be more efficient in the way we AppSec to get the most benefit out of the time we have. Whether it be making risk-based decisions, looking for patterns, understanding frameworks and their built-in protections, we can make intelligent choices and guesses. David Lindner will walk through some tips and tricks that will help consultants and internal testers alike focus on the fat of applications in a shortened timeframe.", "KetoAppSec: It’s All about the FATS", 'David Lindner', '3')}>
								<div className="box">
	              	<span className="talk-time">1330</span>
	              	<span>KetoAppSec: It’s All about the FATS</span>
	            	</div>
	            </a>

	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1430</span>
	                <span>Break</span>
	              </div>
	            </a>

							<a onClick={this.popModal('Talk', '1445', '1545', "Technology to manage diabetes revolves around stagnated tech from the 80s and 90s. Hackers took their lives into their own hands by developing open source hardware and software to augment inadequate products. Developing and building a DIY artificial pancreas, its iterations, and real-life examples of will be discussed and at least one will be working on the presenter. Taking the human out of the loop and replacing them with technology increases quality of life. See what happens when hackers decide they’re not waiting around for government and the MedTech industry to do better.  Managing diabetes revolves around stagnated tech from the 80s and 90s. Hackers took their lives into their hands by augmenting inadequate products after market. Building iterations of a DIY artificial pancreas and real-life examples of will be discussed and at least one will be working on the presenter. Replacing human intervention with technology betters quality of life. See what happens when hackers decide they’re not waiting around for government and the MedTech industry to do better.", "The DIY Artificial Pancreas: Hacking Wetware with Open Source Software and Hardware", 'Jay Lagorio', '3')}>
								<div className="box">
	              	<span className="talk-time">1445</span>
	              	<span>The DIY Artificial Pancreas: Hacking Wetware with Open Source Software and Hardware</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1445', '1545', "How blue teamers and red teamers think is fundamentally different. This talk will delve into some of those details from a perspective of appreciating the differences – but it will not focus exclusively on them, as it is geared towards how to build a strong security team in general. Some of the aspects of a good blue team is Incident Response team, tuning a SIEM, solidifying network security and other opportunities for a better overall security posture. It will not focus on KU Health system and our systems/solutions, but instead will involve leadership strategies, technical details, and security posturing areas to consider.", "A Red-Teamer's Guide to Building a Blue Team", 'Mark Bayley', '3')}>
								<div className="box">
	              	<span className="talk-time">1445</span>
	              	<span>A Red-Teamer's Guide to Building a Blue Team</span>
	            	</div>
	            </a>
              <a onClick={this.popModal('Talk', '1545', '1645', "The computer security industry several huge problems. These problems routinely coagulate together to from 'digital binary explosives' - naturally, in the wild. We can use these to gain access to places we shouldn't be able to reach. Imagine being able to have access to every spy satellite at once. How many barriers could you see past? What could you assert about a place? Could digital binary explosives get you past any of those barriers? It's broadly known just how ineffective the security industry is right now - but we're all happy living in denial about it. The security posture of large companies who were recently breached and did huge public DFIR campaigns are great examples, and live demos are even better examples - we're doing both. Live, on-stage, we'll discover some companies who have not yet been breached, but are candidates for a breach based on their security posture, and we'll cover how the current 'curriculum' of  'how to get a job in infosec' is partially to blame.", "Anybody wanna launch some missiles?", 'Dan Tentler', '3')}>
                <div className="box">
                  <span className="talk-time">1545</span>
                  <span>Anybody wanna launch some missiles?</span>
                </div>
              </a>
              <a onClick={this.popModal('Talk', '1545', '1645', "Charles Dickens is quoted as saying, 'A very little key will open a very heavy door.' Physical penetration testing is often overlooked when it comes time for a company's annual security assessment. Oftentimes, physical is left out for even a full-scope Red Team exercise. I've heard all of the reasons (excuses) why: 'we have guards,' 'we have locks,' 'card reader access,' 'we know it's an issue, just not a priority,' or 'it seems like cheating,' and the list goes on. I am here to discuss why Physical Penetration Testing/Physical Red Teaming is not only beneficial, but also crucial to a company's security well-being. I will review what physical red teaming is, how physical red teaming differs from traditional physical penetration tests, some of the tactics used in bypassing physical security controls, how closely tied physical security is to the overall posture and effectiveness of security training programs and policies, and will give several scenarios in which a physical intrusion opened several more doors (pun intended) during Red Team excursions.", "Let The Right One In", 'David Boyd', '2')}>
                <div className="box">
                  <span className="talk-time">1545</span>
                  <span>Let The Right One In</span>
                </div>
              </a>

              <a onClick={this.popModal('Talk', '1645', '1745', "While the foray to apply machine learning to information security is new, there remain challenges to creating and accessing datasets that are beneficial to security research. This talk is going to discuss our journey in creating an open-source network security dataset, the community-accepted guidelines to creating good data, and the challenges we faced. Moreover, this talk examines the gap between academic datasets and data released by the professional community before providing resources to new datasets that have been released in neighboring areas.", "Adventures in Creating a Cybersecurity Dataset", 'Heather Lawrence', '2')}>
                <div className="box">
                  <span className="talk-time">1645</span>
                  <span>Adventures in Creating a Cybersecurity Dataset</span>
                </div>
              </a>
              <a onClick={this.popModal('Talk', '1645', '1745', "Messages transmitted about privacy and security over the past 200 years or so haven’t always been very friendly or accessible and many are in direct contrast to today’s definitions, expectations, and requirements. We’ll take a fast but memorable stroll through history to illuminate a new path forward lit by some quick-win hacks to address these cultural challenges and elevate our understanding of, interest in, and ability to hack how our families, friends, colleagues, clients, and - potentially - how the world-at-large thinks about, understands, and values privacy and information security.", "How to Pave a Path Forward for InfoSec by Hacking Hearts and Minds", 'Chad Calease', '1')}>
                <div className="box">
                  <span className="talk-time">1645</span>
                  <span>How to Pave a Path Forward for InfoSec by Hacking Hearts and Minds</span>
                </div>
              </a>
            </div>
        	</div>
        }


        {this.state.showSaturday &&
        	<div>
        		<div className='schedule'>{`Tentative ${day} Speaking Schedule`}</div>
            <div className='tz-note'>Note: All times listed are in Central Time.</div>
        		<div className='grid-wrapper-saturday'>
              <div className="track">Stream: Bat of Doom</div>
              <div className="track">Stream: Terrified Chipmunk</div>
              <a className="both-tracks"
                onClick={this.popModal('Stream Opens', '0830', '0900', 'Follow the instructions in your inbox to join the chat and start your day with hundreds of like-minded folks!')}>
                <div className="box">
                  <span className="talk-time">0830</span>
                  <span>Stream Opens</span>
                </div>
              </a>

	            <a className="both-tracks"
	            	onClick={this.popModal('Opening Remarks', '0900', '0915', 'Opening Remarks from Kernelcon Organizers.')}>
	              <div className="box">
	                <span className="talk-time">0900</span>
	                <span>Opening Remarks</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Keynote', '0915', '1015', "Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks. There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it. However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly. To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.", 'In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains', "Sophia d'Antoine")}>
	              <div className="box">
	                <span className="talk-time">0915</span>
	                <span>Keynote: Sophia d'Antoine</span>
	              </div>
	            </a>
	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1015</span>
	                <span>Break</span>
	              </div>
	            </a>


	            <a onClick={this.popModal('Talk', '1030', '1130', "Building a vulnerability management program often feels like eating an elephant that’s guarded by sharks — every time you try to take a bite, you’re dodging someone that’s trying to take a bite out of you. I am going to walk you through building an effective vulnerability management program: avoiding and mitigating common problems, navigating the organizational waters, and getting the most bang for your buck when it comes to reducing your risk. Vulnerability management is more than just running a scan and putting in tickets for remediation — it’s about managing the people involved in the scanning and remediation processes and finding a middle ground that reduces your risk and makes operations happy.", 'Building a Vulnerability Management Program - Avoiding Pitfalls, Managing Risk, and Mastering CYA', 'Megan Benoit', '3')}>
								<div className="box">
	              	<span className="talk-time">1030</span>
	              	<span>Building a Vulnerability Management Program - Avoiding Pitfalls, Managing Risk, and Mastering CYA</span>
	            	</div>
	            </a>
	            <a onClick={this.popModal('Talk', '1030', '1130', "As organizations move their traditional on-prem environments to the cloud, penetration testing tools and techniques must also adapt. This talk will highlight the top 10 tools every penetration tester should add to their arsenal when performing a penetration assessment against a cloud environment. Tools covered will work against Azure/Office 365, Google Cloud/G Suite, and AWS.", 'The Top 10 Tools For Cloud Penetration Testing', 'Michael Born', '2')}>
								<div className="box">
	              	<span className="talk-time">1030</span>
	              	<span>The Top 10 Tools For Cloud Penetration Testing</span>
	            	</div>
	            </a>


              <a onClick={this.popModal('Talk', '1130', '1150', "Ever wanted to steal passwords and run other programs in seconds with only a small USB sized tool? No? Well, now you can! The Bash Bunny will allow you to program keystroke attacks, which then are executed at lightning speed once you plug it in. In this talk you will learn the basics of this device and a few programs.", 'Bash Bunny Basics', 'Anthony Bernard', '1')}>
                <div className="box">
                  <span className="talk-time">1130</span>
                  <span>Bash Bunny Basics</span>
                </div>
              </a>
							<a onClick={this.popModal('Talk', '1130', '1150', "'How do I find a job in cybersecurity?' This is an issue for both new and experienced professionals. There continues to be a disconnect between those hiring and those looking.  This session explains solutions to overcome the cybersecurity hiring gap. Whether attendees are looking to break into cybersecurity or land their next job, they can use hacker skills to make it happen. In this session, I’ll explain three traits of a well-rounded cybersecurity professional, three areas for balanced learning, and steps for hacking your career including visualizing your goals, knowing the best path for you, social engineering your next boss, active learning and keeping your skills sharp. This session also presents the difference cybersecurity career paths based on the NIST National Initiative for Cybersecurity Education (NICE). To get the right job, use hacking techniques to break through the hiring process.  Learn how here.", 'Hacking your Cybersecurity Career', 'Ron Woerner', '1')}>
	            	<div className="box">
	              	<span className="talk-time">1130</span>
	              	<span>Hacking your Cybersecurity Career</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1150', '1210', "For the hobbyist, radio is technically fascinating.  For the uninitiated, black-magical.  What they both have in common? The FCC will be happy to fine the S#!& out of you if you violate the law regarding illegal uses of reserved bands, particularly commercial FM frequencies.  We'll talk about why \"pirates\" pirate on FM, affordable gear options, and how to experiment with the technology without being fined back to the stoneage.", 'Pirate Radio: Riding the Ragged Edges', 'Michael Tomasiewicz', '2')}>
		            <div className="box">
		              <span className="talk-time">1150</span>
		              <span>Pirate Radio: Riding the Ragged Edges</span>
		            </div>
	            </a>

							<a onClick={this.popModal('Talk', '1150', '1210', "Ever wonder how to build a worm?  Mike will demonstrate how to build a ghetto worm using wanna cry.  He's also going to talking about some of his work with large scale emulation using the government funded Open Source tool Minimega.  Combining the two, he'll use Minimega to run the worm.", 'WannaWorm', 'Michael Kunz', '5')}>
		            <div className="box">
		              <span className="talk-time">1150</span>
		              <span>WannaWorm</span>
		            </div>
	            </a>

	            <a className="both-tracks"
                onClick={this.popModal('Break', '1210', '1230', "", '')}>
		            <div className="box">
		              <span className="talk-time">1210</span>
		              <span>Break</span>
		            </div>
	            </a>

							
							<a onClick={this.popModal('Talk', '1230', '1330', "This talk explores attacking various 'secondary contexts' in web applications where data is being passed to an underlying internal HTTP server.  We will explore the different approaches to targeting limited-access/internal APIs, the very strange interactions between different servers within the stack, and lastly the different types of vulnerabilities present in second stage HTTP services.", "Attacking Secondary Contexts in Web Applications", 'Sam Curry', '3')}>
		            <div className="box">
		              <span className="talk-time">1230</span>
		              <span>Attacking Secondary Contexts in Web Applications</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1230', '1330', "The first step of a Penetration Test is often called Reconnaissance, Information Gathering or OSINT. During this step, Penetration Testers attempt to gather as much information as they can about a target environment by using publicly available information. Unfortunately, this step may be ignored or not completed thoroughly.  This is intended to be a 101-level presentation in which we discuss how an attacker may conduct reconnaissance against a target, and what specific information they might be interested in gathering. We will cover specific tools including theHarvester, Shodan, Recon-ng and more. This presentation is intended to give Security Professionals and Administrators an understanding of how attackers conduct information gathering against environments. Audience members will see specific examples of tools and techniques that they can apply to their own environments. We will not cover any new or novel techniques, but my goal is to provide the audience with the knowledge to gather meaningful information quickly.", "Getting started with OSINT", 'Jamie Maguire', '2')}>
								<div className="box">
	              	<span className="talk-time">1230</span>
	              	<span>Getting started with OSINT</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1330', '1430', "These days, everyone is looking for the phish that is either a generic drive-by or a more targeted campaign, such as a weaponized ransomware attack. Blue teams are smarter, instrumentation is smarter, and detection capabilities have advanced; especially in enterprise networks.  Further, set aside all of the click-through/pre-manufactured commodity phishing security awareness services for a moment. The real question, what happens when adversaries aren’t so brazen with their tactics and take smarter steps to counter detection?  Pre-emptive strike campaigns that are both innocuous (almost forgettable) to glean target details before the real attack, the correct tooling to prevent prying defenders from reaching the command and control redirectors or malware servers, blacklists and whitelists, domain registration misdirection, and quite possibly peering into the void of the vast amounts of signal-to-noise honeypot data trawling the Internet while using it to become more situationally aware.  The operators at STACKTITAN will discuss all of these topics and how proprietary tooling has helped shift their perspective on effective phishing techniques. Additionally, REAL mitigation techniques will be discussed to better prepare organizations to defend against these attack campaigns. In conclusion, the presentation will be informative with plenty of opportunity for collaborative discussion.", "Better Phishing through Smarter Infrastructure", 'Chris Patten and Dan Kottmann', '3')}>
								<div className="box">
	              	<span className="talk-time">1330</span>
	              	<span>Better Phishing through Smarter Infrastructure</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1330', '1430', "Small and Medium businesses are prime targets for malicious actors. Lacking the budgetary freedom that larger businesses may have for cyber security and limited personnel resources presents a large bullseye on many small and medium business. This talk addresses various free or built-in options for an organization to use to protect their systems from cyber attacks and reduce their attackable surface.", "Protecting your Small or Medium Business from Cyber Attacks", 'Jeff Struik', '2')}>
								<div className="box">
	              	<span className="talk-time">1330</span>
	              	<span>Protecting your Small or Medium Business from Cyber Attacks</span>
	            	</div>
	            </a>

	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1430</span>
	                <span>Break</span>
	              </div>
	            </a>


							<a onClick={this.popModal('Talk', '1445', '1545', "Barriers can slow us down from reaching our goals but they don’t have to block us. The key is not letting the gates stop you in your tracks and instead finding a way around or through them. This is hard enough without throwing in the introversion and imposter syndrome common to our industry.  Join me while I walk through my journey overcoming the challenges of being an introvert trying to learn while overcoming the imposter syndrome that says I can't. You'll walk away with strategies to create opportunities that will showcase your strengths and ways to overcome the internal monologue that forever tells us we can't.", "Breaking barriers: An introvert's story to InfoSec", 'Ryen Macababbad', '1')}>
								<div className="box">
	              	<span className="talk-time">1445</span>
	              	<span>Breaking barriers: An introvert's story to InfoSec</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1445', '1545', "Having to start over again after being fired from a 5-year job, I saw the trend of hacks and saw that cybersecurity was going to be a low unemployment industry. I went back to college and started this new career path at the age of 34. This presentation will showcase the path I have made going from graduating college with a BSIT degree and zero industry experience to getting a SoC analyst job to becoming a project engineer inside of 1 year from date of hire.", "Bit to Byte", 'Christopher Wright', '1')}>
								<div className="box">
	              	<span className="talk-time">1445</span>
	              	<span>Bit to Byte</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1545', '1645', "Cyber Security is an exceedingly complex space that requires extreme levels of investment in people, processes, and technology to make a large impact on an organization. Despite the investment, we often sit in the 'spin zone' and accept the status quo and lack of progress. However, there are parallels we can draw from other complex fields (in this case healthcare) to help us consider fundamental or alternative methods for solving the complex security issues we face. Join me in understanding the similarities between patient wellness and Cyber Security and the opportunities that lie ahead for us to improve our capabilities.", "Bio Hack: How Integrative Medicine principles can change the game in Cyber Security", 'Joseph Wilson', '3')}>
								<div className="box">
	              	<span className="talk-time">1545</span>
	              	<span>Bio Hack: How Integrative Medicine principles can change the game in Cyber Security</span>
	            	</div>
	            </a>
              <a onClick={this.popModal('Talk', '1545', '1645', "Ever been curious about how electronic badges, or printed circuit boards (PCB) in general, get made? Come ride along with this year's Kernelcon badge makers, @zonksec and @scotchsec, as they explain the rollercoaster of turning the Hack-Master badge idea into a reality!", "Kernelcon2020 Badge: nonononoyes", 'Tyler Rosonke and Aaron Gunning', '3')}>
                <div className="box">
                  <span className="talk-time">1545</span>
                  <span>Kernelcon2020 Badge: nonononoyes</span>
                </div>
              </a>

	            <a className="both-tracks"
	            	onClick={this.popModal('Closing Ceremonies', '1645', '1745', "Join us for closing ceremonies where we award our Eternal Kernel badges and celebrate the con that was.", "Own the Con", 'Kernelcon Organizers')}>
	              <div className="box">
	                <span className="talk-time">1645</span>
	                <span>Own the Con, Closing Ceremonies, and Awards</span>
	              </div>
	            </a>

	          </div>
        	</div>
        }




				<div className='talks'>
					<h2>Talks</h2>
					{talks}
				</div>
			</div>
    );
  }
}

export default TalksSchedule;

