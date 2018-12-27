import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

return (
<div className="ui container comments">

<CommentDetail 
    author="Sam" 
    timeAgo="Today 4:00pm" 
    text="Good blog dude!" 
    img={faker.image.avatar()}
/>
<CommentDetail 
    author="Alex" 
    timeAgo="Today 3:00pm" 
    text="Rad writing bro!" 
    img={faker.image.avatar()}
/>
<CommentDetail 
    author="Boyuan" 
    timeAgo="Today 6:00pm" 
    text="Groovy post my man!" 
    img={faker.image.avatar()}
/>

</div>
);
};

ReactDOM.render (<App />, document.querySelector('#root'));