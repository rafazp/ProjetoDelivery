// src/components/MenuContent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';    
import './MenuContent.css';

const MenuContent = ({ dishesByCategory, addToCart }) => {
    const { user } = useAuth();       
    const navigate = useNavigate(); 

    const handleAddToCart = (dish) => {
        if (user) {
            // Se o usuário estiver logado, adiciona ao carrinho normalmente
            addToCart(dish);
        } else {
            // Se não estiver logado, redireciona para a página de login
            alert("Você precisa estar logado para adicionar itens ao carrinho."); 
            navigate('/login');
        }
    };

    return (
        <main className="menu-content">
            {Object.entries(dishesByCategory).map(([category, dishes]) => (
                <section key={category} id={category} className="menu-section">
                    <h2>{category}</h2>
                    <div className="menu-grid">
                        {dishes.map(dish => (
                            <div key={dish.id} className="menu-item-card">
                                <img src={dish.image} alt={dish.name} className="item-image" />
                                <h3 className="item-name">{dish.name}</h3>
                                <p className="item-price">R$ {dish.price}</p>
                                <button className="add-to-cart-btn" onClick={() => handleAddToCart(dish)}>
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
};

export default MenuContent;