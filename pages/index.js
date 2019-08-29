import 'isomorphic-fetch';
import Link from 'next/link'
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
          <div key={ story.url + 123}>
            <h3><a href={ story.url }>{ story.title }</a></h3>
            <p><Link href={ `/story?id=${story.id}` }><a>
              { story.comments_count } comments
            </a></Link></p>
          </div>
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

