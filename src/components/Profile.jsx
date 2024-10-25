//  import styles from './Profile.modules.css';

const mailStyle = {
  color: "blue",
  fontSize: 2 + 'rem'
}

export const Profile = (props) => {

  let user = props.function();
  console.log(user);
  return (
    <>
<h3>Профиль пользователя</h3>
<div className="row">
  <div className="col-md-4">
    <h4 >1 <span>{user.name}</span></h4>
    <p >2 <span>{user.lastname}</span></p>
    <p style={mailStyle}>3 <span>3</span></p>
    <p style={{color: "red", fontStyle: "italic", fontSize: 24}}>4 <span>4</span></p>
  </div>
  <div className="col-md-8">
    <img src="/src/3d.jpg" alt="" width="150px"/>
  </div>


</div>
</>
  )

};