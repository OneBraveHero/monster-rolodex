// import { Component } from 'react'
import {useState,useEffect} from 'react'
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.component'
import './App.css';
// import {react, super} from "@babel/types/lib";


//Whit Hooks***********************************
const App = () => {
    console.log("render");
    const [searchField, setSerachField] = useState('');  //[Value,setValue}
    const [monsters,setMonsters] = useState([]);
    const [filterMonster,SetFilterMonster] = useState(monsters);
    console.log(searchField);

    const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchField = event.target.value.toLocaleLowerCase();

        setSerachField(searchField);
    };

useEffect(()=>{
    console.log('Effect Fire');
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(user => setMonsters(user));
},[]);

useEffect(()=>{
    console.log('Effect 2 Fire');
    const newFilterMonster = monsters.filter( (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
    });
    SetFilterMonster(newFilterMonster);

},[monsters,searchField]);





    return (
        <div className="App">

            <h1 className="app-title"> Monster Rolodex </h1>
            <SearchBox onChangeHandler={onSearchChange} newplaceholder={"Search Monsters"}
                       ClassName={"monster-search-Box"}/>
            <CardList monsters={filterMonster}/>
        </div>
    )
};


// Whit Classes***********************************

// class App extends Component {
//
//   constructor(){
//     super();
//
//     this.state = {
//       monsters: [],
//         searchField: "",
//     };
//     // console.log("1- Constructor");
//   }
//
// componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(user => this.setState(()=>{
//           return {monsters: user}},()=>{
//           // console.log(this.state);
//         }));
//
// // console.log("3-ComponentDidMount");
// }
//
//     onSearchChange =(event)=>{
//         console.log(event.target.value);
//         const searchField = event.target.value.toLocaleLowerCase();
//
//         this.setState(()=>{
//             return {searchField}
//         })
//     };
//   render() {
//       // console.log("2-Render");
//
//       const {monsters,searchField} = this.state;
//       const {onSearchChange} = this;
//
//       const filterMonster = monsters.filter( (monster) => {
//           return monster.name.toLocaleLowerCase().includes(searchField);
//       });
//
//     return (
//         <div className="App">
//
//             <h1 className="app-title"> Monster Rolodex </h1>
//             <SearchBox onChangeHandler={onSearchChange} newplaceholder={"Search Monsters"} ClassName={"monster-search-Box"}/>
//           <CardList monsters={filterMonster}/>
//         </div>
//     );
//   }
//   }


export default App;
