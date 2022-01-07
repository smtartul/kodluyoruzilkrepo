
import './App.css';
import Header from './components/Header'
import User from "./components/User";

const name="Samet"
const surname="ARTUL"
const isLogged=false;
const friendsData=[
  {
    id:1,
    name:"Veli"
  },
  {
    id:2,
    name:"Ali"
  },
  {
    id:3,
    name:"Kamil"
  }
]

function App() {
  return (
    <div>
      
      <Header/>
      <h1>{`Benim adım:${name} soyadım ${surname}`}</h1>
      <h2>{isLogged ? `${name} has logged` :'Giriş yapmadınız'}</h2>


      {/* props kullanımı */}
      {/* <User name="Samet" surname="Artul" isLogged={true}/> */}

      
      {/* key kullanımı */}
      <User name="Samet" surname="Artul" isLogged={true} friends={friendsData} 
      adress={{
        title:'Bulancak/Giresun',
        zip:28300
      }}/>
    </div>
  );
}

export default App;
