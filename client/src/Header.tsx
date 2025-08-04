function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Mi Sitio</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    );
}
export default Header;