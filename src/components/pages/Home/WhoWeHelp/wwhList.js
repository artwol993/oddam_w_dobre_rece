import React, { Component } from 'react';
import "../../../../scss/components/wwhList.scss";

const LOAD_ROWS = 3;

class WwhList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentPageElements: [],
      renderComponent: false,
    }
  }

  fetchRemoteList() {
    return fetch('http://localhost:3000/foundations/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data
        })

        this.setCurrentPageElements()
      })
  }

  fetchRemoteListNonProfit() {
    return fetch('http://localhost:3000/non-profit/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data
        })

        this.setCurrentPageElements()
      })
  }

  fetchRemoteListLocal() {
    return fetch('http://localhost:3000/local/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data
        })

        this.setCurrentPageElements()
      })
  }

  setCurrentPageElements() {
    for (let i = 0; i < LOAD_ROWS; i++) {
      this.state.currentPageElements.push(this.state.list[i])
    };
    this.setState({
      renderComponent: true
    })
  }

  componentDidMount() {
    this.fetchRemoteList()
  }

  renderFoundations() {
    console.log(this.state.currentPageElements);
    let paragraphs = [];
    this.state.currentPageElements.forEach(el => {
      console.log(el);
      paragraphs.push(
        <div className="wwh-list-row">
          <div className="wwh-list-row-container">
            <div className="wwh-list-row-box1">
              <h3 key={el.id}>Fundacja: {el.company}</h3>
              <div key={el.id}>{el.objective}</div>
            </div>
            <div className="wwh-list-row-box2" key={el.id}>{el.items}</div>
          </div>
          <div className="decoration-line"></div>
        </div>
      )
    })
    return paragraphs;
  }

  setPaginationElements() {
    const paginationElements = []
    const paginationTotalElements = Math.ceil(this.state.list.length / LOAD_ROWS)
    for (let i = 0; i < paginationTotalElements; i++) {
      paginationElements.push(
        <li className="pagination-element" key={i}>
          {i + 1}
        </li>
      )
    }
    return (
      <ul className="pagination-elements">
        {paginationElements}
      </ul>

    )
  }

  renderCurrentPageList() {
    return (
      <div className="wwh-list-container" id="wwh-foundation">
        <div>
          {this.renderFoundations()}

        </div>
      </div>
    )

  }
  render() {
    if (!this.state.renderComponent) {
      return ""
    }
    return (
      <>
        {
          this.renderCurrentPageList()
        },
        {
          this.setPaginationElements()
        }
      </>
    )
  }

}

export default WwhList;