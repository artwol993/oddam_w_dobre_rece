import React, { Component } from 'react';
import "../../../../scss/components/WwhList.scss";



class WwhList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentPageElements: [],
        }

    }

    fetchRemoteList() {
        return fetch('http://localhost:3000/foundations/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list: data
                }
        }       )
    }

    componentDidMount() {
        this.fetchRemoteList()
    }

    render() {
        if (this.state.list.length > 0) {
            console.log(this.state.list)
        }
        return ""
    }

}






// const PAGE = 1;

// const ITEMS = 3;

// const extractItemsList = () => {

// }

// const fetchRemoteList = () => {
//     const [list, setList] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:3000/foundations/')
//             .then(res => res.json())
//             .then(data => setFoundations(data))
//     }, [])

//     return list;
// }

// function WwhList() {


//     return (
//         <>
//             <div className="wwh-slide" id="wwh-foundation">

//                 <div className="wwh-slide-row" >

//                     {/* <div className="wwh-slide-row-box1">

//                         <h3 className="company">Fundacja: {foundations.map(el => (
//                             <p key={el.id}>{el.company}</p>
//                         ))}</h3>

//                         <div className="objective"> Cel i misja: {foundations.map(el => (
//                             <p key={el.id}>{el.objective}</p>
//                         ))}</div>

//                     </div>
//                     <div className="wwh-slide-row-box2">
//                         <div className="items">{foundations.map(el => (
//                             <p key={el.id}>{el.items}</p>
//                         ))}</div>
//                     </div> */}
//                 </div>
//                 <div className="decoration-line"></div>

//             </div>

//         </>
//     )

// }

export default WwhList;































// export default WwhSlider;