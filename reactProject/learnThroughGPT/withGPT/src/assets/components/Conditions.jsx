function Conditions({user}) {
    
    user = {isAdmin:false, isEditor:true}
    return(<>
        {user.isAdmin && <h1>Admin</h1>}
        {user.isEditor && <h1>Editor</h1>}
    </>)

}
export default Conditions