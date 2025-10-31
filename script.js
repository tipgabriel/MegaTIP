/* ESTILOS PARA OS ESTADOS DO JAVASCRIPT */

/* Estados do botão PIX */
.copy-btn.copied {
    background: #10b981 !important;
}

.copy-btn.error {
    background: #dc2626 !important;
}

.pix-code.copied {
    border: 2px solid #10b981 !important;
    background: #1a472a !important;
}

/* Mensagem flutuante */
.floating-message {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease;
}

.floating-message.success {
    background: #10b981;
    color: white;
}

.floating-message.slide-out {
    animation: slideOut 0.3s ease;
}

/* Estados dos resultados */
.titulo-vencedor {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    color: #10b981;
}

.titulo-normal {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    color: #d4af37;
}

.status-vencedor {
    font-size: 1.5rem;
    color: #10b981;
}

.status-normal {
    font-size: 1.5rem;
    color: #d4af37;
}

.resultado-vencedor-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: linear-gradient(135deg, #10b981, #059669);
    border: 2px solid #10b981;
    color: white;
}

@media (min-width: 768px) {
    .resultado-vencedor-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.resultado-normal-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: linear-gradient(135deg, #d4af37, #fbbf24);
    border: 2px solid #d4af37;
    color: #1e293b;
}

@media (min-width: 768px) {
    .resultado-normal-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.mensagem-vencedor {
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: rgba(16, 185, 129, 0.1);
    border-left: 4px solid #10b981;
    color: white;
}

.mensagem-normal {
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: rgba(212, 175, 55, 0.1);
    border-left: 4px solid #d4af37;
    color: white;
}

/* Animações */
@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}
