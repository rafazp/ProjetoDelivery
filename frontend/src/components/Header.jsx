import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Foody_Logo.png'; 
import cartIcon from '../assets/cart_icon.png';

// Recebe as props user, logout, searchTerm e setSearchTerm do App.jsx
const Header = ({ user, logout, toggleCart, cartItemCount, searchTerm, setSearchTerm }) => {
    const navigate = useNavigate();
    
    // estado para controlar a visibilidade do menu suspenso
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    // Funções para exibir ou esconder o menu ao passar o mouse
    const handleMouseEnter = () => setIsProfileMenuOpen(true);
    const handleMouseLeave = () => setIsProfileMenuOpen(false);

    const handleLogout = () => {
        logout(); 
        navigate('/'); // Redireciona para a home após logout
    };

    return (
        <header className="main-header">
            <div className="header-top-bar">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Foody Logo" className="logo" />
                </Link>

                <div className="center-section">
                    <div className="location-bar">
                        <input type="text" placeholder="Endereço" className="location-input" />
                    </div>
                    <div className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Buscar restaurante" 
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="search-btn">🔍</button>
                    </div>
                </div>

                <div className="right-section">
                    <button className="cart-btn" onClick={toggleCart}>
                        <img src={cartIcon} alt="Carrinho" className="cart-icon" />
                        {cartItemCount > 0 && (
                            <span className="cart-count">{cartItemCount}</span>
                        )}
                    </button>

                    {user ? (
                        // Container para o menu suspenso
                        <div 
                            className="profile-menu-container"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="welcome-msg">
                                Olá, {user.name || user.email}!
                            </span>

                            {/* Menu suspenso que aparece ao passar o mouse */}
                            {isProfileMenuOpen && (
                                <div className="profile-dropdown-menu">
                                    <button onClick={() => { 
                                        navigate('/perfil');
                                        setIsProfileMenuOpen(false);
                                    }}>Minha Conta</button>
                                    
                                    <button onClick={() => {
                                        navigate('/minhas-compras'); 
                                        setIsProfileMenuOpen(false);
                                    }}>Minhas Compras</button>

                                    <button onClick={handleLogout}>Sair</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button className="login-btn" onClick={() => navigate("/login")}>
                                Entrar
                            </button>
                            <button className="cadastro-btn" onClick={() => navigate("/cadastro")}>
                                Cadastrar
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;