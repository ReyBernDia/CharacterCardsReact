class TradingCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h2>Name: {this.props.name}</h2>
				<img src={this.props.imgUrl} />
				<h2>Skill: {this.props.skill}</h2>
			</div>
		);
	}
}

{/*ReactDOM.render(
	<TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />, 
	document.getElementById('balloonicorn') 
);

ReactDOM.render(
	<TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
	document.getElementById('float')
);

ReactDOM.render(
	<TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
	document.getElementById('llambda')
);

ReactDOM.render(
	<TradingCard name="Merge" skill="Talking to fish" imgUrl="/static/img/merge.jpg" />,
	document.getElementById('merge')
);

ReactDOM.render(
	<TradingCard name="Off-by-one" skill="Singing under the sea." imgUrl="/static/img/off-by-one.jpg" />,
	document.getElementById('off-by-one')
);

ReactDOM.render(
	<TradingCard name="Polymorphism" skill="Being King." imgUrl="/static/img/polymorphism.jpg" />,
	document.getElementById('polymorphism')
);*/}

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

{/*class TradingCardContainer extends React.Component{
	render(){
		const paragraphs = [];

	    for (const currentCard of tradingCardData) {
	      paragraphs.push(<p>{currentCard.name}</p>);
	    }

	    return (
	      <div>
	        {paragraphs}
	      </div>
	    );
	}
}*/}

class TradingCardContainer extends React.Component {
  render() {
    const tradingCards = [];

    for (const currentCard of tradingCardData){
      tradingCards.push(
        <TradingCard
          name={currentCard.name}
          skill={currentCard.skill}
          imgUrl={currentCard.imgUrl}
        />
      );
    }

    return (
      <div>
        {tradingCards}
      </div>
    );
  }
}

ReactDOM.render(
	<TradingCardContainer />,
	document.getElementById('loop')
);

{/*for (const card of tradingCardData){
	console.log(card.name, card.skill)
}*/}