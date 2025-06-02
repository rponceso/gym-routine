function Login(){
    return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <h2>Iniciar Sesión</h2>        
        <input type="text" placeholder="Usuario"/>
        <input type="password" placeholder="Password"/>
        <button type="submit">Acceder</button>
    </form>)
}
export default Login;