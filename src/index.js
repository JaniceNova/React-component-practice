import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

return (

<div className="ui container comments">
<ApprovalCard>
    <div> 
        <h4> Warning</h4>
        Are you sure you want to do this?
    </div>
</ApprovalCard>
<ApprovalCard>
    <CommentDetail 
        author="Sam" 
        timeAgo="Today 4:00pm" 
        text="Good blog dude!" 
        img={faker.image.avatar()}
    />
</ApprovalCard>
<ApprovalCard>
    <CommentDetail 
        author="Alex" 
        timeAgo="Today 3:00pm" 
        text="Rad writing bro!" 
        img={faker.image.avatar()}
    />
</ApprovalCard>
<ApprovalCard>
    <CommentDetail 
        author="Boyuan" 
        timeAgo="Today 6:00pm" 
        text="Groovy post my man!" 
        img={faker.image.avatar()}
    />
</ApprovalCard>
</div>

);
};

ReactDOM.render (<App />, document.querySelector('#root'));