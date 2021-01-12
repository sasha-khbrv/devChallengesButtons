import React from 'react';
import Button from './Button/Button';


function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className="row">
      <div className="cell">
        <p className="cell-title">&lt;Button color='btn--default'/&gt;</p>
        <Button color='btn--default'>Default</Button>
      </div>
      <div className="cell">
        <p className="cell-title">&lt;Button color='btn--primary'/&gt;{"{children}"}&lt;/Button&gt;</p>
        <Button color='btn--primary'>Primary</Button>
      </div>
      <div className="cell">
        <p className="cell-title">&lt;Button color='btn--secondary'/&gt;{"{children}"}&lt;/Button&gt;</p>
        <Button color='btn--secondary'>Secondary</Button>
      </div>
      <div className="cell">
        <p className="cell-title">&lt;Button color='btn--danger'/&gt;{"{children}"}&lt;/Button&gt;</p>
        <Button color='btn--danger'>Danger</Button>
      </div>
    </div>
      <div className="row">
        <div className="cell">
          <p className="cell-title">&lt;Button color='btn--default--outline'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button color='btn--default--outline'>Default</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button color='btn--primary--outline'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button color='btn--primary--outline'>Primary</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button color='btn--secondary--outline'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button color='btn--secondary--outline'>Secondary</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button color='btn--danger--outline'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button color='btn--danger--outline'>Danger</Button>
        </div>
    </div>         
      <div className="row">
        <div className="cell">
          <p className="cell-title">&lt;Button variant='btn--default--text'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button variant='btn--default--text'>Default</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button variant='btn--primary--text'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button variant='btn--primary--text'>Primary</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button variant='btn--secondary--text'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button variant='btn--secondary--text'>Secondary</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button variant='btn--danger--text'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button variant='btn--danger--text'>Danger</Button>
        </div>
      </div>
      <div className="row">
        <div className="cell">
          <p className="cell-title">&lt;Button disableShadow/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button disableShadow>Default</Button>
        </div>
      </div> 
      <div className="row">
        <div className="cell">
          <p className="cell-title">&lt;Button disable/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button disabled>Default</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button variant='btn--default--text' disable/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button variant='btn--default--text' disabled>Default</Button>
        </div>
      </div>
      <div className="row">
        <div className="cell">
          <p className="cell-title">&lt;Button icon='btn--icon--start' color='btn--primary'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button icon='btn--icon--start' color='btn--primary'>
            <span className="material-icons">local_grocery_store</span>
            Primary
          </Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button icon='btn--icon--end' color='btn--primary' /&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button icon='btn--icon--end' color='btn--primary'>
            Primary
            <span className="material-icons">local_grocery_store</span>            
          </Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button icon='btn--icon--start' color='btn--primary' /&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button icon='btn--icon--start' color='btn--primary--outline'>
            <span className="material-icons">local_grocery_store</span>
            Primary
          </Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button icon='btn--icon--start' variant='btn--primary--text' /&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button icon='btn--icon--start' variant='btn--primary--text'>
            <span className="material-icons">local_grocery_store</span>
            Primary
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="cell">
          <p className="cell-title">&lt;Button size='btn--size--sm' color='btn--primary'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button size='btn--size--sm'color='btn--primary'>Small</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button size='btn--size--md' color='btn--primary'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button size='btn--size--md'color='btn--primary'>Medium</Button>
        </div>
        <div className="cell">
          <p className="cell-title">&lt;Button size='btn--size--lg' color='btn--primary'/&gt;{"{children}"}&lt;/Button&gt;</p>
          <Button size='btn--size--lg'color='btn--primary'>Large</Button>
        </div>
      </div>
      <div>
        <p className="cell-title">
          Made for <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">DevChallenges</a> by <a href="https://github.com/sasha-khbrv?tab=repositories" target="_blank" rel="noreferrer">Sasha Khbrv</a>
        </p>
      </div>
    </div>
  );
}

export default App;
