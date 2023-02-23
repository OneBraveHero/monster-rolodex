//Whit Classes********************************

// import {Component} from 'react';
// import "./search-box.css";
//
// class SearchBox extends Component {
//     render() {
//         const {onChangeHandler,newplaceholder,ClassName} = this.props;
//          return (
//              <input
//                  type="search"
//                  className={`search-box ${ClassName}`}
//                  placeholder={newplaceholder}
//                  onChange={onChangeHandler}
//              />
//
//          )
//     }
// }
//
//  export default SearchBox;

//Whit Hooks*************************************

import "./search-box.css";

const SearchBox =({onChangeHandler,newplaceholder,ClassName})=>{

        return (
            <input
                type="search"
                className={`search-box ${ClassName}`}
                placeholder={newplaceholder}
                onChange={onChangeHandler}
            />

        )

};

export default SearchBox;
