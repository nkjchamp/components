import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';


const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>
				Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					timeAgo={"Today at 4:45pm"} 
					content={faker.lorem.sentence()}
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					timeAgo="Today at 2:00am" 
					content={faker.lorem.sentence()}
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					timeAgo="Yesterday at 5:00pm" 
					content={faker.lorem.sentence()}
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>
		</div>

	)
};

ReactDOM.render(<App />, document.querySelector('#root'))