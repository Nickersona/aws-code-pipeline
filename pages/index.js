import React from 'react'
import contentful from '../utils/contentful'

export default class Page extends React.Component {
  static getInitialProps() {
    return contentful.getEntry('25sw6ImvveQW44Mom4gEw')
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h1>{this.props.fields.title}</h1>
        <p>{this.props.fields.body}</p>
      </div>
    )
  }
} 