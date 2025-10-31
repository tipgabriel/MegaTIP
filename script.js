// Função para copiar chave PIX
function copiarPix(event) {
    if (event) event.preventDefault();
    
    const pixKey = "00020126580014br.gov.bcb.pix01365ba9125c-f301-48ef-9f7f-d4508777bd830225MegaTIP - Mega da Virada 52040000530398654056.005802BR5924Gabriel da Paz Silva San6009Sao Paulo61080540900062250515MegaTIP2025122152040000530398654046.005802BR5913Gabriel Silva6009Sao Paulo62070503***6304E2CD";
    
    navigator.clipboard.writeText(pixKey).then(() => {
        const btn = document.querySelector('#pix-code-container .copy-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-check mr-1"></i>Copiado!';
        btn.style.background = '#10b981';
        
        const pixCodeElement = document.getElementById('pix-code-container');
        pixCodeElement.style.border = '2px solid #10b981';
        pixCodeElement.style.background = '#1a472a';
        
        const floatingMessage = document.createElement('div');
        floatingMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Chave PIX copiada com sucesso!';
        floatingMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(floatingMessage);
        
        setTimeout(() => {
            floatingMessage.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (floatingMessage.parentNode) {
                    floatingMessage.parentNode.removeChild(floatingMessage);
                }
            }, 300);
        }, 3000);
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#d4af37';
            pixCodeElement.style.border = '1px dashed #d4af37';
            pixCodeElement.style.background = '#0f172a';
        }, 2000);
        
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        const btn = document.querySelector('#pix-code-container .copy-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-times mr-1"></i>Erro!';
        btn.style.background = '#dc2626';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#d4af37';
        }, 2000);
    });
}

// Função para copiar chave PIX da seção de contato
function copiarPixContato(event) {
    if (event) event.preventDefault();
    
    const pixKey = "00020126580014br.gov.bcb.pix01365ba9125c-f301-48ef-9f7f-d4508777bd830225MegaTIP - Mega da Virada 52040000530398654056.005802BR5924Gabriel da Paz Silva San6009Sao Paulo61080540900062250515MegaTIP2025122152040000530398654046.005802BR5913Gabriel Silva6009Sao Paulo62070503***6304E2CD";
    
    navigator.clipboard.writeText(pixKey).then(() => {
        const btn = document.querySelector('#pix-code-contato .copy-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-check mr-1"></i>Copiado!';
        btn.style.background = '#10b981';
        
        const pixContainer = document.getElementById('pix-code-contato');
        pixContainer.style.border = '2px solid #10b981';
        pixContainer.style.background = '#1a472a';
        
        const floatingMessage = document.createElement('div');
        floatingMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Chave PIX copiada com sucesso!';
        floatingMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(floatingMessage);
        
        setTimeout(() => {
            floatingMessage.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (floatingMessage.parentNode) {
                    floatingMessage.parentNode.removeChild(floatingMessage);
                }
            }, 300);
        }, 3000);
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#d4af37';
            pixContainer.style.border = '1px dashed #d4af37';
            pixContainer.style.background = '#0f172a';
        }, 2000);
        
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        const btn = document.querySelector('#pix-code-contato .copy-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-times mr-1"></i>Erro!';
        btn.style.background = '#dc2626';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#d4af37';
        }, 2000);
    });
}

// ========== CONFIGURAÇÃO SIMPLES DO VÍDEO MOBILE ==========
function initMobileVideo() {
    const videoContainer = document.querySelector('.video-container');
    const youtubeIframe = document.getElementById('youtube-video');
    
    if (!videoContainer || !youtubeIframe) return;
    
    // Remover completamente qualquer overlay
    const videoOverlay = document.getElementById('video-overlay');
    if (videoOverlay) {
        videoOverlay.style.display = 'none';
    }
    
    // Aplicar estilos responsivos
    if (window.innerWidth < 768) {
        // Configurar container do vídeo para mobile
        videoContainer.style.cssText = `
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            padding: 0 12px;
            box-sizing: border-box;
        `;
        
        // Configurar iframe para mobile - perfeito para a tela
        youtubeIframe.style.cssText = `
            width: 100%;
            height: 220px;
            border-radius: 12px;
            border: 2px solid #d4af37;
            box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
            display: block;
        `;
        
        // Ajustar altura em diferentes orientações
        function adjustVideoHeight() {
            const isLandscape = window.innerWidth > window.innerHeight;
            youtubeIframe.style.height = isLandscape ? '200px' : '220px';
        }
        
        window.addEventListener('resize', adjustVideoHeight);
        adjustVideoHeight();
        
    } else {
        // Estilos para desktop
        videoContainer.style.cssText = `
            position: relative;
            width: 100%;
            max-width: 640px;
            margin: 0 auto;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `;
        
        youtubeIframe.style.cssText = `
            width: 100%;
            height: 360px;
            border: none;
            border-radius: 16px;
            display: block;
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ========== INICIALIZAR VÍDEO ==========
    initMobileVideo();

    // ========== VARIÁVEIS GLOBAIS ==========
    let numerosSorteados = [0, 0, 0, 0, 0, 0];
    let bilheteVencedor = null;
    let grupoGanhou = false;

    // ========== MENU MOBILE DEFINITIVO ==========
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Abrir menu
            mobileMenu.classList.add('active');
            mobileMenuButton.classList.add('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
            
            // Bloquear scroll do body
            document.body.classList.add('menu-open');
        } else {
            // Fechar menu
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Restaurar scroll do body
            document.body.classList.remove('menu-open');
        }
    }

    function closeMobileMenu() {
        if (isMenuOpen) {
            toggleMobileMenu();
        }
    }

    // Event listeners apenas para mobile
    if (window.innerWidth < 768) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });

        // Fechar menu ao clicar em qualquer link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Fechar menu com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMobileMenu();
            }
        });
    }

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMobileMenu();
        }
        
        // Re-aplicar estilos do vídeo ao redimensionar
        initMobileVideo();
    });

    // ========== COPYRIGHT ==========
    const year = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = `&copy; ${year} MegaTIP. Não somos filiados à Caixa Econômica Federal.`;

    // ========== SISTEMA DE VERIFICAÇÃO ==========
    const btnVerificarBilhetes = document.getElementById('btn-verificar-bilhetes');
    const statusSorteio = document.getElementById('status-sorteio');
    const resultadoVerificacao = document.getElementById('resultado-verificacao');
    const bilheteVencedorElement = document.getElementById('bilhete-vencedor');
    const totalAcertosElement = document.getElementById('total-acertos');
    const statusGrupoElement = document.getElementById('status-grupo');
    const tituloResultado = document.getElementById('titulo-resultado');
    const mensagemResultado = document.getElementById('mensagem-resultado');
    const resultadoCards = document.getElementById('resultado-cards');
    const detalhesAcertos = document.getElementById('detalhes-acertos');
    const listaBilhetesAcertos = document.getElementById('lista-bilhetes-acertos');

    function temNumerosValidos(numeros) {
        return numeros.some(num => num > 0);
    }

    function atualizarNumerosOficiais(novosNumeros) {
        numerosSorteados = novosNumeros;
        const numerosElementos = document.querySelectorAll('.numero-oficial');
        
        numerosElementos.forEach((elemento, index) => {
            if (index < novosNumeros.length) {
                elemento.textContent = novosNumeros[index].toString().padStart(2, '0');
                if (novosNumeros[index] > 0) {
                    elemento.classList.add('sorteado');
                } else {
                    elemento.classList.remove('sorteado');
                }
            }
        });
        
        if (temNumerosValidos(novosNumeros)) {
            statusSorteio.innerHTML = '<p class="text-[#10b981]"><i class="fas fa-check mr-2"></i>Sorteio oficial realizado!</p>';
        } else {
            statusSorteio.innerHTML = '<p class="text-[#d4af37]"><i class="fas fa-clock mr-2"></i>Aguardando sorteio oficial da Caixa</p>';
        }
    }

    function verificarVencedor(bilheteNumeros) {
        if (!temNumerosValidos(numerosSorteados)) return 0;
        
        const numerosBilhete = bilheteNumeros.split(',').map(num => parseInt(num.trim()));
        return numerosBilhete.filter(num => numerosSorteados.includes(num)).length;
    }

    function atualizarInterfaceResultados(grupoGanhou, bilheteVencedor, maxAcertos, bilhetesComAcertos) {
        listaBilhetesAcertos.innerHTML = '';
        
        if (grupoGanhou && bilheteVencedor) {
            tituloResultado.innerHTML = '🎉 PARABÉNS! VOCÊS GANHARAM! 🎉';
            tituloResultado.className = 'text-xl font-bold mb-4 text-center text-[#10b981]';
            
            bilheteVencedorElement.textContent = `#${bilheteVencedor.id.toString().padStart(4, '0')} - ${bilheteVencedor.assignedName}`;
            totalAcertosElement.textContent = "6 ACERTOS!";
            statusGrupoElement.textContent = "VENCEDOR!";
            statusGrupoElement.className = "text-2xl text-[#10b981]";
            
            resultadoCards.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 resultado-vencedor p-4 rounded-lg';
            
            mensagemResultado.innerHTML = `
                <p class="text-center font-bold text-2xl text-[#10b981]">🏆 PARABÉNS A TODOS DO GRUPO! 🎉</p>
                <p class="text-center mt-4 text-lg">🎯 <strong>${bilheteVencedor.assignedName}</strong> acertou os 6 números!</p>
                <p class="text-center mt-2">🎉 O grupo inteiro comemora! Cada participante recebe seu prêmio individual!</p>
                <p class="text-center mt-4 text-[#d4af37] font-bold">💰 PRÊMIO GARANTIDO! 💰</p>
            `;
            mensagemResultado.className = 'mt-4 p-6 rounded-lg mensagem-vencedor';
            
            detalhesAcertos.classList.add('hidden');
        } else {
            tituloResultado.innerHTML = '📊 RESULTADO DA VERIFICAÇÃO';
            tituloResultado.className = 'text-xl font-bold mb-4 text-center text-[#d4af37]';
            
            bilheteVencedorElement.textContent = "Nenhum bilhete com 6 acertos";
            totalAcertosElement.textContent = `${maxAcertos} acertos (máximo)`;
            statusGrupoElement.textContent = "Aguardando próximo sorteio";
            statusGrupoElement.className = "text-2xl text-[#d4af37]";
            
            resultadoCards.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 resultado-perdedor p-4 rounded-lg';
            
            mensagemResultado.innerHTML = `
                <p class="text-center font-bold text-xl text-[#d4af37]">😔 INFELIZMENTE NÃO FOI DESSA VEZ</p>
                <p class="text-center mt-2">Nenhum bilhete acertou os 6 números sorteados.</p>
                <p class="text-center mt-4 text-[#10b981]">📈 Continue participando para aumentar suas chances!</p>
            `;
            mensagemResultado.className = 'mt-4 p-6 rounded-lg mensagem-perdedor';
            
            if (bilhetesComAcertos.length > 0) {
                detalhesAcertos.classList.remove('hidden');
                
                bilhetesComAcertos.forEach(bilhete => {
                    const bilheteItem = document.createElement('div');
                    bilheteItem.className = 'bg-[#374151] p-4 rounded-lg bilhete-acertou border border-gray-600';
                    bilheteItem.innerHTML = `
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="font-bold">${bilhete.assignedName}</p>
                                <p class="text-sm">Bilhete #${bilhete.id.toString().padStart(4, '0')}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-[#10b981] font-bold text-lg">${bilhete.acertos} acerto(s)</p>
                                <p class="text-xs">Números: ${bilhete.numbers}</p>
                            </div>
                        </div>
                    `;
                    listaBilhetesAcertos.appendChild(bilheteItem);
                });
            } else {
                detalhesAcertos.classList.add('hidden');
            }
        }
    }

    btnVerificarBilhetes.addEventListener('click', function() {
        if (!temNumerosValidos(numerosSorteados)) {
            statusSorteio.innerHTML = '<p class="text-[#dc2626]"><i class="fas fa-exclamation-triangle mr-2"></i>Aguardando sorteio oficial da Caixa!</p>';
            return;
        }

        bilheteVencedor = null;
        grupoGanhou = false;
        let maxAcertos = 0;
        let bilhetesComAcertos = [];

        sampleTickets.forEach(ticket => {
            const acertos = verificarVencedor(ticket.numbers);
            if (acertos > maxAcertos) {
                maxAcertos = acertos;
            }
            if (acertos === 6) {
                bilheteVencedor = ticket;
                grupoGanhou = true;
            }
            if (acertos > 0) {
                bilhetesComAcertos.push({
                    ...ticket,
                    acertos: acertos
                });
            }
        });

        bilhetesComAcertos.sort((a, b) => b.acertos - a.acertos);
        atualizarInterfaceResultados(grupoGanhou, bilheteVencedor, maxAcertos, bilhetesComAcertos);
        resultadoVerificacao.classList.remove('hidden');
        atualizarBilhetes();
    });

    // ========== GALERIA DE BILHETES ==========
    const ticketsGallery = document.getElementById('tickets-gallery');
    const loadMoreButton = document.getElementById('load-more');

    const sampleTickets = [
        { id: 1, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Ana Paula" },
        { id: 2, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Beatriz" },
        { id: 3, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Bryan" },
        { id: 4, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Erlinda" },
        { id: 5, event: "Mega da Virada", date: "31/12/2025", numbers: "31, 17, 34, 24, 09, 47", assignedName: "Elton" },
        { id: 6, event: "Mega da Virada", date: "31/12/2025", numbers: "01, 03, 33, 50, 47, 42", assignedName: "Gabriel" },
        { id: 7, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Guedes" },
        { id: 8, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "John" },
        { id: 9, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Kimyo" },
        { id: 10, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Lora" },
        { id: 11, event: "Mega da Virada", date: "31/12/2025", numbers: "45, 30, 21, 40, 60, 10", assignedName: "Melissa" },
        { id: 12, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Mufasa Empório" },
        { id: 13, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Olivier" },
        { id: 14, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Paloma" },
        { id: 15, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Ronaldo" },
        { id: 16, event: "Mega da Virada", date: "31/12/2025", numbers: "10, 19, 05, 34, 27, 25", assignedName: "TH Romerito" },
        { id: 17, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Tiago" },
        { id: 18, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Vitória Mandy" },
        { id: 19, event: "Mega da Virada", date: "31/12/2025", numbers: "00, 00, 00, 00, 00, 00", assignedName: "Willian" }
    ];

    let displayedTickets = window.innerWidth < 768 ? 6 : 8;
    let filteredTickets = [...sampleTickets];

    // ========== SISTEMA DE BUSCA ==========
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResultsInfo = document.getElementById('search-results-info');
    let searchTimeout;

    function filtrarBilhetes(termo) {
        if (!termo) {
            return [...sampleTickets];
        }
        
        const termoLower = termo.toLowerCase();
        return sampleTickets.filter(ticket => {
            return ticket.assignedName.toLowerCase().includes(termoLower);
        });
    }

    function executarBusca() {
        const termo = searchInput.value.trim();
        filteredTickets = filtrarBilhetes(termo);
        displayedTickets = filteredTickets.length;
        atualizarBilhetes();
    }

    function atualizarBilhetes() {
        ticketsGallery.innerHTML = '';

        if (filteredTickets.length === 0) {
            ticketsGallery.innerHTML = `
                <div class="no-results col-span-full">
                    <i class="fas fa-search text-4xl mb-4"></i>
                    <p>Nenhum bilhete encontrado para sua busca.</p>
                    <p class="text-sm mt-2">Tente buscar por nome do participante</p>
                </div>
            `;
            loadMoreButton.style.display = 'none';
            return;
        }

        for (let i = 0; i < displayedTickets && i < filteredTickets.length; i++) {
            const ticket = filteredTickets[i];
            const acertos = verificarVencedor(ticket.numbers);
            const isVencedor = grupoGanhou && bilheteVencedor && bilheteVencedor.id === ticket.id;
            const isGrupoVencedor = grupoGanhou;

            const ticketElement = document.createElement('div');
            ticketElement.className = `ticket card-hover ${isGrupoVencedor ? 'premiado' : ''}`;
            
            const numerosArray = ticket.numbers.split(', ');
            const numerosHTML = numerosArray.map(num => {
                const numero = parseInt(num);
                const isAcerto = temNumerosValidos(numerosSorteados) && numerosSorteados.includes(numero);
                return `<span class="numero-sorteio ${isAcerto ? 'numero-acerto' : ''}">${num.padStart(2, '0')}</span>`;
            }).join('');

            const ticketCode = Math.random().toString(36).substring(2, 10).toUpperCase();

            ticketElement.innerHTML = `
                <div class="ticket-stripes"></div>
                ${isVencedor ? '<div class="badge-vencedor">🎯 BILHETE VENCEDOR</div>' : ''}
                ${isGrupoVencedor && !isVencedor ? '<div class="badge-premiado">🏆 GRUPO VENCEDOR</div>' : ''}
                
                <div class="ticket-header">
                    <div class="ticket-logo">
                        <i class="fas fa-clover"></i>
                    </div>
                    <div class="ticket-title">Mega Sena</div>
                    <div class="ticket-subtitle">Da Virada 2025</div>
                    <div class="ticket-concurso">Concurso Especial</div>
                </div>
                
                <div class="ticket-body">
                    <div class="ticket-watermark">MEGATIP</div>
                    
                    <div class="ticket-participante">
                        <p class="font-bold text-lg text-[#fefefe]">${ticket.assignedName}</p>
                        <p class="text-sm text-gray-600">Participante #${ticket.id.toString().padStart(4, '0')}</p>
                    </div>
                    
                    <div class="ticket-numeros-title">Números da Sorte</div>
                    <div class="numeros-container">
                        ${numerosHTML}
                    </div>
                    
                    ${acertos > 0 ? `<p class="text-center mt-4 text-green-600 font-bold text-lg">${acertos} ACERTO(S)!</p>` : ''}
                    
                    <div class="ticket-divider"></div>
                    
                    <div class="ticket-data">
                        <p>Sorteio: <strong>31/12/2025</strong></p>
                        <p class="mt-2">Valor: <span class="ticket-valor">R$ 6,00</span></p>
                    </div>
                    
                    <div class="ticket-codigo">
                        Código: ${ticketCode}
                    </div>
                    
                    <div class="ticket-garantia">
                        Participação garantida no bolão coletivo MegaTIP
                    </div>
                </div>
                
                <div class="ticket-footer">
                    Bolão Coletivo • MegaTIP
                </div>
            `;

            ticketsGallery.appendChild(ticketElement);
        }

        if (searchInput.value.trim() !== '') {
            searchResultsInfo.textContent = `${filteredTickets.length} bilhete(s) encontrado(s) para "${searchInput.value}"`;
        } else {
            searchResultsInfo.textContent = '';
        }

        if (searchInput.value.trim() === '' && displayedTickets < sampleTickets.length) {
            loadMoreButton.style.display = 'block';
        } else {
            loadMoreButton.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', function() {
        const termo = this.value.trim();
        
        clearTimeout(searchTimeout);
        
        if (termo === '') {
            filteredTickets = [...sampleTickets];
            displayedTickets = 8;
            atualizarBilhetes();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            executarBusca();
        }, 300);
    });

    searchBtn.addEventListener('click', function() {
        executarBusca();
    });

    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            executarBusca();
        }
    });

    loadMoreButton.addEventListener('click', function() {
        displayedTickets = sampleTickets.length;
        atualizarBilhetes();
    });

    filteredTickets = [...sampleTickets];
    atualizarBilhetes();

    // ========== SCROLL SUAVE ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.id === 'mobile-menu-button') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
