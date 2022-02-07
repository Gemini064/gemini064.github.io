const { Modal, Icon } = semanticUIReact;
const projectSection = React.createElement('div', {id: 'projectSection'},
	React.createElement(
		'div',
		null,
		React.createElement(
	  	Grid,
	  	{ id: 'webGameCard' },
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {display: 'flex', justifyContent: 'center', alignItems: 'center'} },
		    React.createElement(Image, { 
		    	src: './img/project/webGame.png', 
		    	href: './webGame/webGame.html', 
		    	target: '_blank', 
		    	as: 'a',
		    })
		  ),
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {position: 'relative'}  },
		    React.createElement(
					'div',
					{ class: 'rightRect', style: {background: '#c9918c' }}
				),
		    React.createElement(
		      'h1',
		      { style: {textAlign: 'center', position: 'relative', fontSize: '2.5rem'} },
		      React.createElement(
		      	'a', { href: "./webGame/webGame.html", target: '_blank' }, "Web Game"
		      )
		    ),
		    React.createElement('p', { class: 'descTitle' }, '2021 & 2022 | CSS, JavaScript'),
				React.createElement(
					"p",
					null,
					"Learned JavaScript thoroughly from ebook ",
					React.createElement(
						"a",
						{ href: "https://eloquentjavascript.net/" },
						"Eloquent JavaScript"
					),
					" myself and then apply JS to build this web game. The idea of the game is from one of my favourite online games - ",
					React.createElement(
						"a",
						{ href: "https://www.miniclip.com/games/square-meal/en/" },
						"Square Meal"
					),
					", I used pure JS combined with a little CSS to build a web version. ",
					React.createElement("br", null),
					"- This game requires users to have keyboard to play! ",
					React.createElement("br", null),
					React.createElement("br", null),
					"Click the title/image and enjoy playing."
				)
		  )
		)
	),
	React.createElement(
		'div',
		{ style: {display: 'flex', flexDirection: 'row-reverse'} },
		React.createElement(
		  Grid,
		  { id: 'appCard' },
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {display: 'flex', justifyContent: 'center', alignItems: 'center'} },
		    React.createElement(Image, {
		    	src: './img/project/weatherApp.png',
		    	href: 'https://www.youtube.com/watch?v=SA5Q1ho9-JA',
		    	target: '_blank'
		    })
		  ),
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {position: 'relative'} },
		    React.createElement(
					'div',
					{ class: 'leftRect', style: {background: '#679c95'} }
				),
		    React.createElement(
		      'h1',
		      { style: {textAlign: 'center', position: 'relative', fontSize: '2.5rem'} },
		      React.createElement(
		      	'a', { href: "https://www.youtube.com/watch?v=SA5Q1ho9-JA", target: '_blank' }, "Weather App"
		      )
		    ),
		    React.createElement('p', { class: 'descTitle' }, '2021 | Java, IDE - Android Studio'),
		    React.createElement(
					"p",
					null,
					"Worked with team members to finish a weather app. Functions includes utilising GPS to locate users, voice detection when it comes to location searching, sign up/login/logout, \
					adding/removing location to/from user's favourite list, alerting users with the current weather (e.g., it's cloudy, remember to bring umbrella!), \
					allowing users to schedule a reminder. I am responsible for the UI, voice detection function, debugging, testing, and the final vedio presentation. ",
					React.createElement("br", null),
					React.createElement("br", null),
					"Click the title/image to view the demo."
				)
		  )
		)
	),
	React.createElement(
		'div',
		null,
		React.createElement(
		  Grid,
		  { id: 'mjWebCard' },
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {display: 'flex', justifyContent: 'center', alignItems: 'center'} },
		    React.createElement(Image, { src: './img/project/rwdPractice.png', href: './MJwebsite/MJwebsite.html', target: '_blank', as: 'a' })
		  ),
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {position: 'relative'} },
		    React.createElement(
					'div',
					{ class: 'rightRect', style: {background: '#f1be50'} }
				),
		    React.createElement(
		      'h1',
		      { style: {textAlign: 'center', position: 'relative', fontSize: '2.5rem'} },
		      React.createElement(
		      	'a', { href: "./MJwebsite/MJwebsite.html", target: '_blank' }, "MJ Website"
		      )
		    ),
		    React.createElement('p', { class: 'descTitle' }, '2020 | Html, CSS, JavaScript/Jquery, BootStrap'),
		    React.createElement(
					"p",
					null,
					"Learned how important RWD(Responsive Web Design) is and build a RWD website displaying Michael Jackson's pictures, albums and quotes. ",
					React.createElement("br", null),
					React.createElement("br", null),
					"Click the title/image to visit the website."
				)
		  )
		)
	),
	React.createElement(
		'div',
		{ style: {display: 'flex', justifyContent: 'center'} },
		React.createElement(
		  Grid,
		  { id: 'beeCard'},
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'} },
		    React.createElement(Image, { src: './img/project/bee_cover.jpg' }),
		    React.createElement('div', {id: "beeRect"})
		  ),
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {position: 'relative'} },
		    React.createElement(
		      'h1',
		      { style: {textAlign: 'center', position: 'relative', fontSize: '2.5rem'} },
		      'Graphic Design - Story Telling'
		    ),
		    React.createElement('p', { class: 'descTitle' }, '2019 | Adobe-Illustrator'),
		    React.createElement(
					"p",
					null,
					"Used few colors to finish a short story - The Magic Pollens. Telling a story without any words! Do you know how magic the pollnes are :) ",
					React.createElement("br", null),
					React.createElement("br", null),
					"Click the image to view the whole story."
				)
		  )
		),
	),
	React.createElement(
		'div',
		{ style: {display: 'flex', justifyContent: 'center'} },
		React.createElement(
		  Grid,
		  { id: 'beeCard', style: {background: '#245061'} },
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'} },
		    React.createElement(Image, { 
		    	src: './img/project/LineSticker/02.png', 
		    	href: 'https://store.line.me/stickershop/product/10965820?ref=Chrome', 
		    	target: '_blank',
		    	as: 'a'
		    }),
		    React.createElement('div', {id: "beeRect", style: {background: '#f1be50'} })
		  ),
		  React.createElement(
		    Grid.Column,
		    { mobile: 16, tablet: 8, computer: 8, style: {position: 'relative'} },
		    React.createElement(
		      'h1',
		      { style: {textAlign: 'center', position: 'relative', fontSize: '2.5rem'} },
		       React.createElement(
		      	'a', { href: "https://store.line.me/stickershop/product/10965820?ref=Chrome", target: '_blank' }, "Line Stickers Design"
		      )
		    ),
		    React.createElement('p', { class: 'descTitle' }, '2018 | Medibang, PhotoPea'),
		    React.createElement(
					"p",
					{ style: {color: 'white'} },
					"Brainstormed with one friend and come up with several ideas, I designed and drew them.",
					React.createElement("br", null),
					React.createElement("br", null),
					"Click the title/image to shop in the LINE STORE."
				)
		  )
		),
	),

	// mei chu hackathon
	React.createElement('h1', { style: {textAlign: 'center'} }, 'Design for Mei Chu Hackathon'),
	React.createElement(
		'div',
		{ class: 'designBlock' },
		React.createElement(
			Grid,
			{},
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon_baby.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon_booklet.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon1.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon_logo.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon_certificate.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon_post1.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hackathon_post2.png' })
			)
		),
	),

	// design for school magazine
	React.createElement('h1', { style: {textAlign: 'center'} }, 'Design for School Magazine'),
	React.createElement(
		'div',
		{ class: 'designBlock' },
		React.createElement(
			Grid,
			{},
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine1.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine2.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine3.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine4.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine5.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine6.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/magazine7.png' })
			),
		),
	),

	// daily artworks
	React.createElement('h1', { style: {textAlign: 'center'} }, 'Daily Artworks'),
	React.createElement(
		'div',
		{ class: 'designBlock' },
		React.createElement(
			Grid,
			{},
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/adam.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/emma.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/legolas.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/kabu.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/anita.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/rose.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/flowerGirl.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/tattoo.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/hair.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/turn.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/surprised.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/guardianAngel.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/little_mermaid.png' })
			),
			React.createElement(
				Grid.Column,
				{ mobile: 16, tablet: 8, computer: 4 },
				React.createElement(Image, { src: './img/project/squareVersion/robbie.png' })
			),
		),
	),

	// get in touch
	React.createElement(
    Grid.Column,
    { id: 'contactBtnDiv', mobile: 16, tablet: 16, computer: 16,  style: {display: 'flex', justifyContent: 'center', paddingTop: '30px'}},
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

);
