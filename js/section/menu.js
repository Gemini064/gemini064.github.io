const menuBlock = document.querySelector('#menu');
const { Menu, Segment, Dropdown } = semanticUIReact;

class MenuExampleSecondaryPointing extends React.Component {
  constructor(props) {
  	super(props);
  	this.visible = true;
  	this.state = { activeItem: 'About Me', activeSeg: profileSection };
  	this.handleItemClick = (e, { name, seg }) => {
  		this.setState({ activeItem: name, activeSeg: seg });
  	}
  }
	
	componentDidUpdate() {
		try{
			adjustProfileImg();
		} catch(e) {}
	}

  render() {
    const { activeItem } = this.state;

    return React.createElement(
		'div',
		null,
		React.createElement(
			Menu,
			{ secondary: 'secondary',
			  id: 'menuBlock' },
			React.createElement(
				Menu.Menu,
				{ position: 'right' },
				React.createElement(Menu.Item, {
				  name: 'About Me',
				  seg: profileSection,
				  active: activeItem == 'About Me',
				  onClick: this.handleItemClick,
				}),
				React.createElement(Menu.Item, {
				  name: 'My Works',
				  seg: projectSection,
				  active: activeItem === 'My Works',
				  onClick: this.handleItemClick,
				}),
				React.createElement(Button, {
					id: 'goBackBtn',
					as: 'a',
					href: './index.html',
				}, 'Go Back'),
			)
		),
		React.createElement(
			Segment,
			{ id: 'mainBlock'},
			this.state.activeSeg
		)
	);
  }
}

ReactDOM.render(
  React.createElement(MenuExampleSecondaryPointing, null, null)
, menuBlock);

window.onresize=function (){
	try{
		adjustProfileImg();
	} catch(e) {
	}
}
window.onload=function (){
	try{
		adjustProfileImg();
	} catch(e) {
	}
}