function Login() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "300px",
                    gap: "10px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    textAlign: "center",
                }}
            >
                <img
                src="/gym-icon.png"
                alt="Icono de gimnasio"
                style={{ width: "80px", marginBottom: "1px" }}
                />
                <h2 style={{ margin: "0 0 10px" }}>Iniciar Sesión</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Password" />
                <button type="submit">Acceder</button>
            </form>
        </div>
    );
}
export default Login;
