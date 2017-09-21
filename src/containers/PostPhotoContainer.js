import React from 'react';
import PostPhotoComponent from '../components/PostPhotoComponent';

export default class PostPhotoContainer extends React.Component{
  constructor(props,context){
    super(props, context);
  }

  render(){
    return(
      <div>
        <PostPhotoComponent/>
      </div>
    );
  }
}
