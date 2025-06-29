import React, { useState } from 'react';
import '../Precos.css';

export default function Precos() {
  const [selectedCategory, setSelectedCategory] = useState('individual');

  const pricingData = {
    individual: {
      title: 'Individual',
      subtitle: 'Passeio para uma pessoa',
      plans: [
        {
          id: 'individual-basico',
          name: 'Básico',
          price: 'R$ 35,00',
          description: 'Inclui um bilhete ida e volta para uma pessoa',
          features: ['Transporte ida e volta', 'Seguro básico']
        },
        {
          id: 'individual-padrao',
          name: 'Padrão',
          price: 'R$ 55,00',
          description: 'Um bilhete de ida e volta para uma pessoa + lanche',
          features: ['Transporte ida e volta', 'Seguro completo', 'Lanche incluso']
        },
        {
          id: 'individual-luxo',
          name: 'Luxo',
          price: 'R$ 85,00',
          description: 'Um bilhete de ida e volta para uma pessoa + refeição completa',
          features: ['Transporte premium', 'Seguro completo', 'Refeição completa', 'Guia exclusivo']
        }
      ]
    },
    casal: {
      title: 'Casal',
      subtitle: 'Passeio para duas pessoas',
      plans: [
        {
          id: 'casal-basico',
          name: 'Básico',
          price: 'R$ 65,00',
          description: 'Inclui bilhetes ida e volta para duas pessoas',
          features: ['Transporte ida e volta', 'Seguro básico']
        },
        {
          id: 'casal-padrao',
          name: 'Padrão',
          price: 'R$ 100,00',
          description: 'Bilhetes de ida e volta para duas pessoas + lanches',
          features: ['Transporte ida e volta', 'Seguro completo', 'Lanches inclusos']
        },
        {
          id: 'casal-luxo',
          name: 'Luxo',
          price: 'R$ 150,00',
          description: 'Bilhetes de ida e volta para duas pessoas + jantar romântico',
          features: ['Transporte premium', 'Seguro completo', 'Jantar romântico', 'Brinde especial']
        }
      ]
    },
    familia: {
      title: 'Família',
      subtitle: 'Passeio para até 4 pessoas',
      plans: [
        {
          id: 'familia-basico',
          name: 'Básico',
          price: 'R$ 120,00',
          description: 'Inclui bilhetes ida e volta para até 4 pessoas',
          features: ['Transporte ida e volta', 'Seguro básico']
        },
        {
          id: 'familia-padrao',
          name: 'Padrão',
          price: 'R$ 180,00',
          description: 'Bilhetes de ida e volta para até 4 pessoas + lanches',
          features: ['Transporte ida e volta', 'Seguro completo', 'Lanches para todos', 'Atividades infantis']
        },
        {
          id: 'familia-luxo',
          name: 'Luxo',
          price: 'R$ 280,00',
          description: 'Bilhetes de ida e volta para até 4 pessoas + refeição completa',
          features: ['Transporte premium', 'Seguro completo', 'Refeição completa', 'Atividades infantis', 'Guia família']
        }
      ]
    }
  };

  const handleSelect = (planId) => {
    console.log(`Plano selecionado: ${planId}`);
    // Aqui você pode adicionar a lógica de seleção
  };

  const currentData = pricingData[selectedCategory];

  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {/* Header */}
        <div className="pricing-header">
          <h1 className="pricing-title">Preços do passeio</h1>
          <p className="pricing-description">
            Lorem ipsum dolor sit amet consectetur faucibus augue arcu, viate quisque pe 
            a aenea pretium praesent, aptent dictum fac.
          </p>

          {/* Category Selector */}
          <div className="category-selector">
            {Object.keys(pricingData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {pricingData[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Info */}
        <div className="category-info">
          <h2 className="category-title">{currentData.title}</h2>
          <p className="category-subtitle">{currentData.subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {currentData.plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card ${index === 1 ? 'popular' : ''}`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="popular-badge">
                  Mais Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="plan-name">{plan.name}</h3>

              {/* Price */}
              <div className="plan-price">{plan.price}</div>

              {/* Description */}
              <p className="plan-description">{plan.description}</p>



              {/* Select Button */}
              <button
                onClick={() => handleSelect(plan.id)}
                className={`select-btn ${index === 1 ? 'primary' : 'secondary'}`}
              >
                Selecionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}