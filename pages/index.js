import React from 'react';
import 'isomorphic-fetch';

import Layout from '../components/Layout';

export default class IndexPage extends React.Component {

  static async getInitialProps() {
    const request = await fetch('https://api.hackerwebapp.com/news');
    const stories = await request.json();
    return { stories };
  };

  render() {
    console.log('this.props', this.props);
    return (
      <Layout title='Latest News!'>
        <h1> Hello !</h1>
        <p>Isn't Nextjs super cool?</p>
        {this.props.stories.map(story => (
          <h3 key={story.url}><a href={ story.url }>{story.title}</a></h3>
        ))}

        <style jsx>{`
         h1 {
           font-family: system-ui;
           font-weight: 300;
           color: #333;

         }
  
         p {
          color: green;
          font-size: 24px;
         }

         h3 {
         }
       `}</style>
      </Layout>
    );
  };
};

