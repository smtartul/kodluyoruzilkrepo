import PropTypes from "prop-types"

function User({name,surname,isLogged,friends,adress}) {
    return (
        <>
            <h2>
            {
                isLogged ? `${name} ${surname} giriş yaptı`:"giriş yapınız"
            }
            </h2>
            {adress.title}{adress.zip}
            <br/>
            <br/>
            {
              friends.map((friends,index)=>
              <div key={friends.id}>
                  {index}-
                  {friends.name}
              </div>
              )  
            }
        </>
    )
}

User.propTypes = {
    name:PropTypes.string.isRequired,
    surname:PropTypes.string,
    isLogged:PropTypes.bool,
    friends:PropTypes.array,
    adress:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })
}
User.defaultProps={
    isLogged:false
}
export default User;