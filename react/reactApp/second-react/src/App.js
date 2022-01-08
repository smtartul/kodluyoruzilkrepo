import { useState } from "react";

function App() {
  const [name,setName]=useState("Samet")
  const [age,setAge]=useState(32)
  const [friends,setFriends]=useState(["Ali","Veli"])
  const [adress,setAdress]=useState({title:"Giresun",zip:28000})
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>Yaş: {age}</h1>
      <button onClick={()=> setName("Cansu")}>İsim Değiştir</button>
      <button onClick={()=> setAge(29)}>Yas Değiştir</button>
      <br />
      <hr />

      <h2>Friends</h2>
      {friends.map((friend,index)=>(
        <div key={index}>
          {friend}
        </div>
      ))}

      <br />
      <button onClick={()=> setFriends([...friends,"Ayşe"])}>
        Yeni Kişi Ekle</button>

        <br />
        <hr />
        <h2>Adress:</h2>
        {adress.title} {adress.zip}
        <br />
        <br />
        <button onClick={()=> setAdress({...adress,title:"Bulancak",zip:28300})}>
        Adres Değiştir</button>
        <hr />

    </div>
  );
}

export default App;
