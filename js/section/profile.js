const { Grid, Image, Card, Button, Popup } = semanticUIReact;
// const profileSection = React.createElement('p', null, 'name');

const profileSection = React.createElement('div', {id: 'profileSection'}, 
	React.createElement(
	  Grid,
	  null,
	  React.createElement(
	  	Grid.Row,
	  	{ style: {padding: '13px 0px'} },
	  	React.createElement(
		    Grid.Column,
		    { id: 'greetImgDiv', mobile: 16, tablet: 16, computer: 8, style: {display: 'flex', alignItems: 'flex-start', padding: '0px'} },
		    React.createElement('img', { class: 'topLeft animate__animated animate__fadeIn', src: './pattern/pattern1.svg' }),
		    React.createElement('img', { id: 'greetImg', src: './img/greeting.gif' }),
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 16, computer: 8, style: {display: 'flex', alignItems: 'flex-start', flexDirection: 'row-reverse', padding: '0px'} },
				React.createElement('img', { class: 'topRight animate__animated animate__fadeIn', src: './pattern/pattern2.svg' }),
				React.createElement('div', { id: 'descDiv', style: {position: 'absolute', width: '70%', left: '15%'} }, 
					React.createElement('h1', { class: 'headerArea' }, 'Hello.'),
					React.createElement('p', { style:  {fontSize: '20px'}}, "I'm Yutien Huang (Skylar), a programmer and a graphic designer! \
												As a programmer, I love applying knowledge and skills I gain to build clean and attractive websites. \
												As a graphic designer, I get inspired from anything in my life for illustration design. \
												I have passions in learning and trying new things! Now, I also make some stop motions."),
				)
			)
	  ),
	  React.createElement(
	  	Grid.Row,
	  	{style: {padding: '13px 0px', background: '#F1E9DE', overflow: 'hidden'}, centered: 'centered' },
	  	React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 16, computer: 16 },
				React.createElement('img', { class: 'bottomRight', src: './pattern/pattern3.svg' }),
			),
	  	React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 16, computer: 16 },
		    React.createElement('h1', { style: {padding: '100px 0px 70px 70px', fontSize: '35px'} }, 'Relevant Experiences'),
			),
			React.createElement(
			    Grid.Column,
			    { mobile: 16, tablet: 8, computer: 5, style: {display: 'flex', justifyContent: 'center', padding: '0px 0px 70px 0px'} },
			    React.createElement('a', {
			    	href: 'https://insidesherpa.s3.amazonaws.com/completion-certificates/Electronic%20Arts/x4KPrqxMDS4a5isKe_Electronic%20Arts_NYtMyfQgGgxqmC5vv_1625281138192_completion_certificate.pdf',
			    	target: '_blank',
			    	class: 'cardLink animate__animated animate__bounceIn'},  
			    	React.createElement(Card, {
					    header: 'Software Engineering Virtual Experience Program Participant',
		    			meta: 'Electronic Arts. July 2021',
		    			description: React.createElement('div', {style: {color: 'black'}}, 
		    				React.createElement( "ul", null,
								  React.createElement( "li", null, "Python" ),
								  React.createElement( "li", null, "C++"  ),
								  React.createElement( "li", null, "Game Engine Technology" ),
								  React.createElement( "li", null, "Mitigating Cyber Vulnerabilities" )
								),
								React.createElement("p", null, "Click to view the certificate...") 
							)
						})
					),
			),
	  	React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 5, style: {display: 'flex', justifyContent: 'center', padding: '0px 0px 70px 0px'} },
		    React.createElement('a', {
		    	href: 'https://www.rushbit.net/',
		    	target: '_blank',
		    	class: 'cardLink animate__animated animate__bounceIn'}, 
		    	React.createElement(Card, {
				    header: 'Front-End Web Developer Intern',
				    meta: 'RushBit, Taiwan. Jun - Nov 2020.',
				    description: React.createElement('div', {style: {color: 'black'}}, 
	    				React.createElement( "ul", null,
							  React.createElement( "li", null, "Improved UI of Official Website" ),
							  React.createElement( "li", null, "Migrated Website to WordPress"  ),
							  React.createElement( "li", null, "Generate Revenue Table(back-end development involved)" ),
							  React.createElement( "li", null, "Html/CSS/JavaScript/JQuery/PHP" )
							),
							React.createElement("p", null, "Click to visit the company's website...") 
						)
					})
				)
			),
			React.createElement(
			    Grid.Column,
			    { mobile: 16, tablet: 8, computer: 5, style: {display: 'flex', justifyContent: 'center', padding: '0px 0px 70px 0px'} },
				React.createElement('a', {
					href: 'https://meichu-hackathon.github.io/MC_Hackathon-2018/#/', 
					target: '_blank',
			    class: 'cardLink animate__animated animate__bounceIn'}, 
					React.createElement(Card, {
		    			header: 'Graphic Designer of MEI CHU Hackathon',
		    			meta: 'MEI CHU Hackthon Team, Taiwan. Jul - Oct 2018',
		    			description: React.createElement('div', {style: {color: 'black'}}, 
		    				React.createElement( "ul", null,
								  React.createElement( "li", null, "Logo Design" ),
								  React.createElement( "li", null, "Booklet Design"  ),
								  React.createElement( "li", null, "Certificate of Merit Design" ),
								  React.createElement( "li", null, "Character Design" ),
								  React.createElement( "li", null, "Adobe - Illustrator" ),
								),
								React.createElement("p", null, "Click to visit the registration website...") 
							)
					})
				)
			),
			React.createElement(
			    Grid.Column,
			    { mobile: 16, tablet: 8, computer: 5, style: {display: 'flex', justifyContent: 'center', padding: '0px 0px 70px 0px'} },
			    React.createElement('a', {
			    	href: 'https://github.com/mzshieh/i2cs',
			    	target: '_blank',
			    	class: 'cardLink animate__animated animate__bounceIn'}, 
			    	React.createElement(Card, {
					    header: 'Teaching Assistant of Python course',
		    			meta: 'National Chiao Tung University, Taiwan. Apr - May 2018',
		    			description: React.createElement('div', {style: {color: 'black'}}, 
		    				React.createElement( "ul", null,
								  React.createElement( "li", null, "Prepare teaching materials" ),
								  React.createElement( "li", null, "Prepare exercises/assignments"  ),
								  React.createElement( "li", null, "Problem-solving" ),
								  React.createElement( "li", null, "Python" )
								),
								React.createElement("p", null, "Click to view the lecture content...") 
							)
					})
				)
			),
			React.createElement(
			    Grid.Column,
			    { mobile: 16, tablet: 8, computer: 5, style: {display: 'flex', justifyContent: 'center', padding: '0px 0px 70px 0px'} },
			    React.createElement('a', {
			    	href: 'https://www.youtube.com/watch?v=GV3WDvtMBGE',
			    	target: '_blank',
			    	class: 'cardLink animate__animated animate__bounceIn'}, 
			    	React.createElement(Card, {
					    header: 'Leader of Stage Props',
		    			meta: 'National Taitung Girls\' Senior High School, Taiwan. Oct - Dec 2014',
		    			description: React.createElement('div', {style: {color: 'black'}}, 
		    				React.createElement( "ul", null,
								  React.createElement( "li", null, "Painting/Stage Props Design" ),
								  React.createElement( "li", null, "Teamwork"  ),
								  React.createElement( "li", null, "Leadership" ),
								),
								React.createElement("p", null, "Click to view the stage play...") 
							)
					})
				)
			),
			React.createElement(
		    Grid.Column,
		    { id: 'contactBtnDiv', mobile: 16, tablet: 16, computer: 16,  style: {display: 'flex', justifyContent: 'center'}},
		    React.createElement(Popup, { 
		    	content: 'LinkedIn', 
		    	trigger: React.createElement(Button, { href: 'https://www.linkedin.com/in/skylar64/' }, 
		    						React.createElement('i', {class: "fab fa-linkedin-in"})),
		    }),
		    React.createElement(Popup, { 
		    	content: 'GitHub', 
		    	trigger: React.createElement(Button, { href: 'https://github.com/Gemini064?tab=repositories' },
		    						React.createElement('i', {class: "fab fa-github"})),
		    }),
		    React.createElement(Popup, { 
		    	content: 'Gmail', 
		    	trigger: React.createElement(Button, { href: 'mailto:10099candy@gmail.com' },
		    						React.createElement('i', {class: "fas fa-envelope"})),
		    }),
		    React.createElement(Popup, { 
		    	content: 'YouTube', 
		    	trigger: React.createElement(Button, { href: 'https://www.youtube.com/channel/UCZhUPKVdCFU-wJWZ_352vjw/videos' },
		    						React.createElement('i', {class: "fab fa-youtube"})),
		    }),
			),
			React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 16, computer: 16, style: {display: 'flex', justifyContent: 'center'} },
		    React.createElement('p', { style: {color: '#593546'} }, 'Get In Touch'),
			),
	  ),
	)
);


function adjustProfileImg() {
	const greetImgDiv = document.querySelector('#greetImgDiv');
	const greetImg = document.querySelector('#greetImg');
	const greetImgTop = greetImg.offsetTop;
	const greetImgHeight = greetImg.offsetHeight;
	greetImgDiv.style.height = greetImgTop + greetImgHeight + 50 + 'px';

	const descDiv = document.querySelector('#descDiv');
	descDiv.style.top = (greetImgTop + greetImgHeight + 50 - descDiv.offsetHeight)/2 + 'px';
}