import React, { Component } from 'react';
import './Results.css';

export class Results extends Component {
  render() {
    return (
      <section className='results-container'>
        <>
          {this.props.results.length === 0 ? (
            <p>Nothing Found</p>
          ) : (
            this.props.results.map((item) => (
              <div
                key={item.name ? item.name : item.title}
                className='items-container'
              >
                <p>
                  {item.name ? `Name : ${item.name}` : `Title : ${item.title}`}
                </p>
                <p>
                  {item.birth_year ? `Birth Year : ${item.birth_year}` : ''}
                </p>
                <p>{item.gender ? `Sex : ${item.gender}` : ''}</p>
                <p>
                  {item.hair_color ? `Hair Color : ${item.hair_color}` : ''}
                </p>
              </div>
            ))
          )}
        </>
      </section>
    );
  }
}

export default Results;
