# Implementation Plan: Melhorias Interativas para Site de Aniversário

## Overview

Este plano de implementação converte o design técnico aprovado em tarefas incrementais de codificação. O objetivo é adicionar funcionalidades interativas e festivas ao site de aniversário existente, mantendo o estilo delicado (rosa/cream) e usando JavaScript vanilla.

A implementação seguirá uma abordagem modular, construindo componentes independentes que se integram ao site existente. Cada tarefa referencia requisitos específicos para rastreabilidade.

## Tasks

- [ ] 1. Preparar estrutura base e utilitários
  - Criar estrutura de pastas para assets (gallery/, music/)
  - Expandir CSS variables no style.css com novas cores e breakpoints
  - Criar módulo Utils em script.js com funções throttle, debounce, observeElements, prefersReducedMotion, randomInRange, shuffleArray
  - Adicionar classes utilitárias CSS (.container, .section-title)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 9.5_

- [ ] 2. Implementar galeria de fotos com polaroids
  - [ ] 2.1 Criar HTML da seção photo-gallery com polaroid-grid
    - Adicionar section com id="photoGallery" após message-section
    - Criar estrutura de 6 polaroids com img (loading="lazy"), caption
    - _Requirements: 1.1, 1.3, 1.4_
  
  - [ ] 2.2 Estilizar polaroids com CSS
    - Criar classes .photo-gallery, .polaroid-grid (grid responsivo: 1 col mobile, 2 tablet, 3 desktop)
    - Estilizar .polaroid com borda branca, sombra, rotação aleatória CSS
    - Adicionar hover effect (rotate(0deg), translateY(-10px), scale(1.05), sombra aumentada)
    - Criar @keyframes fadeInUp para reveal animation
    - _Requirements: 1.2, 1.3, 1.5, 1.6_
  
  - [ ] 2.3 Implementar PhotoGallery module em JavaScript
    - Criar objeto PhotoGallery com array de fotos {src, alt, caption}
    - Implementar init() para aplicar rotações aleatórias (-5° a +5°)
    - Implementar animateOnScroll() usando Utils.observeElements
    - Adicionar event listeners para click em polaroids (abre modal)
    - _Requirements: 1.1, 1.5, 1.6_

- [ ] 3. Implementar modal de visualização de fotos
  - [ ] 3.1 Criar HTML do modal
    - Adicionar div.modal com id="photoModal" no final do body
    - Incluir modal-overlay, modal-content, modal-close button, modal-image, modal-caption
    - _Requirements: 7.1, 7.2, 7.5, 7.6_
  
  - [ ] 3.2 Estilizar modal com CSS
    - Criar classes .modal (full-screen, display:none inicial), .modal-overlay (fundo escuro semi-transparente)
    - Estilizar .modal-content (centralizado), .modal-close (botão X)
    - Adicionar @keyframes fadeIn e @keyframes scaleIn para animações de entrada/saída
    - _Requirements: 7.2, 7.7_
  
  - [ ] 3.3 Implementar Modal module em JavaScript
    - Criar objeto Modal com referências aos elementos
    - Implementar init() com event listeners (overlay click, close button, ESC key)
    - Implementar open(imageSrc, caption) com animação, bloqueio de scroll, focus trap
    - Implementar close() com animação, restauração de scroll e foco
    - _Requirements: 7.1, 7.3, 7.4, 7.5, 7.7_

- [ ] 4. Implementar player de música de fundo
  - [ ] 4.1 Criar HTML do music player
    - Adicionar div.music-player com id="musicPlayer" (posição fixa)
    - Incluir elemento audio com id="bgMusic", preload="metadata", sources (MP3/OGG)
    - Adicionar button.music-toggle com ícones play/pause e span.music-icon decorativo
    - _Requirements: 2.1, 2.3, 2.6, 2.8_
  
  - [ ] 4.2 Estilizar music player com CSS
    - Criar classes .music-player (fixed, bottom-right), .music-toggle (botão circular rosa)
    - Estilizar ícones play/pause e music-icon
    - Adicionar hover effects
    - _Requirements: 2.6, 2.7_
  
  - [ ] 4.3 Implementar MusicPlayer module em JavaScript
    - Criar objeto MusicPlayer com referências ao audio element
    - Implementar init() com event listeners
    - Implementar toggle(), play(), pause() com atualização de ícones
    - Adicionar error handler para ocultar player se música não carregar
    - _Requirements: 2.2, 2.4, 2.5_

- [ ] 5. Checkpoint - Verificar componentes básicos
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Implementar seção de desejos de aniversário
  - [ ] 6.1 Criar HTML da seção wishes
    - Adicionar section.wishes-section com id="wishes"
    - Criar wishes-grid com 8-15 wish-cards
    - Cada card com wish-number, wish-emoji, wish-text
    - _Requirements: 3.1, 3.2, 3.4, 3.5, 3.7_
  
  - [ ] 6.2 Estilizar wishes section com CSS
    - Criar classes .wishes-section, .wishes-grid (grid responsivo: 1 col mobile, 2 tablet, 3 desktop)
    - Estilizar .wish-card (fundo branco, borda rosa, sombra suave)
    - Adicionar hover effect (translateY(-5px), sombra aumentada)
    - Criar @keyframes fadeIn para animação de entrada progressiva
    - _Requirements: 3.2, 3.3, 3.5, 3.6_
  
  - [ ] 6.3 Implementar WishesSection module em JavaScript
    - Criar objeto WishesSection com array de desejos e emojis ['🎂', '🎉', '🎈', '🌸', '✨', '🎁']
    - Implementar init() para renderizar cards e atribuir emojis aleatórios
    - Implementar animateOnScroll() usando Utils.observeElements com delay progressivo
    - _Requirements: 3.1, 3.3, 3.7_

- [ ] 7. Implementar linha do tempo de momentos especiais
  - [ ] 7.1 Criar HTML da timeline
    - Adicionar section.timeline-section com id="timeline"
    - Criar div.timeline com 4-8 timeline-items
    - Cada item com classes .left ou .right alternadas, timeline-marker (emoji), timeline-content (date, title, description)
    - _Requirements: 4.1, 4.2, 4.4, 4.6, 4.8_
  
  - [ ] 7.2 Estilizar timeline com CSS
    - Criar classes .timeline (linha vertical central), .timeline-item (.left/.right)
    - Estilizar .timeline-marker (círculo com emoji), .timeline-content (card)
    - Adicionar responsividade (centralizado em mobile, alternado em desktop)
    - _Requirements: 4.3, 4.4, 4.7_
  
  - [ ] 7.3 Implementar Timeline module em JavaScript
    - Criar objeto Timeline com array de momentos {date, title, description, emoji}
    - Implementar init() para renderizar timeline alternando left/right
    - Implementar animateOnScroll() usando Utils.observeElements com reveal sequencial
    - _Requirements: 4.1, 4.2, 4.5, 4.8_

- [ ] 8. Implementar surpresas interativas
  - [ ] 8.1 Criar HTML da seção surprises
    - Adicionar section.surprises-section com id="surprises"
    - Criar surprises-grid com 3-5 surprise-boxes
    - Cada box com surprise-icon (🎁, 🎈, 📦) e surprise-content (oculto inicialmente)
    - Adicionar hint text "Clique nos presentes para descobrir!"
    - _Requirements: 5.1, 5.2, 5.8_
  
  - [ ] 8.2 Estilizar surprises section com CSS
    - Criar classes .surprises-section, .surprises-grid (grid responsivo)
    - Estilizar .surprise-box (clicável), .surprise-icon, .surprise-content
    - Adicionar hover effect (cursor pointer, leve escala)
    - Criar @keyframes scaleIn para animação de revelação
    - _Requirements: 5.2, 5.5, 5.7_
  
  - [ ] 8.3 Implementar InteractiveSurprises module em JavaScript
    - Criar objeto InteractiveSurprises com array de surpresas {id, icon, content}
    - Implementar init() com event listeners e loadState() de sessionStorage
    - Implementar toggleSurprise(id) com animação e saveState()
    - Implementar saveState() e loadState() usando sessionStorage com try/catch
    - _Requirements: 5.3, 5.4, 5.6_

- [ ] 9. Implementar bolo virtual interativo
  - [ ] 9.1 Criar HTML do virtual cake
    - Adicionar section.cake-section com id="virtualCake"
    - Criar cake-container com div.cake e 3 candles (cada com flame)
    - Adicionar cake-instruction e cake-message (oculta inicialmente)
    - _Requirements: 6.1.1, 6.1.2, 6.1.6_
  
  - [ ] 9.2 Estilizar virtual cake com CSS
    - Criar classes .cake-section, .cake-container (centralizado), .cake
    - Estilizar .candle e .flame com @keyframes flicker (tremulação)
    - Criar classe .candle.blown com @keyframes fadeOut na chama
    - Estilizar cake-message
    - _Requirements: 6.1.2, 6.1.3_
  
  - [ ] 9.3 Implementar VirtualCake module em JavaScript
    - Criar objeto VirtualCake com totalCandles=3, blownCandles=0
    - Implementar init() com event listeners nas velas
    - Implementar blowCandle(index) para apagar vela e incrementar contador
    - Implementar checkAllBlown() para mostrar mensagem e disparar confetti
    - Implementar reset() para reacender velas
    - _Requirements: 6.1.3, 6.1.4, 6.1.5, 6.1.7_

- [ ] 10. Checkpoint - Verificar componentes interativos
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Implementar efeitos visuais festivos
  - [ ] 11.1 Implementar parallax effect
    - Criar initParallax() no VisualEffects module
    - Adicionar scroll listener com Utils.throttle (16ms para 60fps)
    - Aplicar transformações em backgrounds de seções
    - _Requirements: 6.1, 6.8_
  
  - [ ] 11.2 Implementar sparkles effect
    - Criar initSparkles() no VisualEffects module
    - Adicionar sparkles em hover de elementos decorativos
    - Criar @keyframes para animação de brilho
    - _Requirements: 6.2_
  
  - [ ] 11.3 Implementar floating balloons
    - Criar initFloatingBalloons() no VisualEffects module
    - Criar elementos de balão com CSS
    - Implementar animação de flutuação
    - _Requirements: 6.6_
  
  - [ ] 11.4 Melhorar função de confetti existente
    - Expandir launchConfetti() com variações (cores, formas, velocidades)
    - Criar createConfetti(x, y) para explosões em posições específicas
    - Adicionar limite MAX_PARTICLES para performance
    - _Requirements: 6.5, 6.8_
  
  - [ ] 11.5 Implementar scroll animations
    - Criar initScrollAnimations() no VisualEffects module
    - Usar Utils.observeElements para fade-in + slide-up em seções
    - Adicionar suporte a prefers-reduced-motion
    - _Requirements: 6.3, 6.8_

- [ ] 12. Implementar otimizações de performance
  - [ ] 12.1 Otimizar carregamento de imagens
    - Adicionar atributo loading="lazy" em todas as imagens da galeria
    - Implementar fallback para imagens quebradas (img.onerror)
    - Adicionar placeholder SVG para imagens não encontradas
    - _Requirements: 9.1, 9.2_
  
  - [ ] 12.2 Adicionar suporte a prefers-reduced-motion
    - Verificar Utils.prefersReducedMotion() em todos os módulos de animação
    - Adicionar classe .reduced-motion no body se preferência ativada
    - Criar regras CSS para desabilitar animações complexas
    - _Requirements: 9.4_
  
  - [ ] 12.3 Implementar cleanup de event listeners
    - Adicionar AbortController em event listeners onde apropriado
    - Implementar funções cleanup() em módulos que criam listeners
    - Verificar remoção de partículas/confetti após timeout
    - _Requirements: 6.8_

- [ ] 13. Implementar melhorias de acessibilidade
  - [ ] 13.1 Adicionar ARIA labels e atributos
    - Adicionar aria-label em todos os botões (music-toggle, modal-close, etc.)
    - Adicionar role="dialog" e aria-modal="true" no modal
    - Verificar alt text em todas as imagens
    - _Requirements: 8.6, 8.7_
  
  - [ ] 13.2 Implementar navegação por teclado
    - Adicionar event listeners para teclas (Enter, Space, ESC)
    - Implementar focus trap no modal (salvar previousFocus, restaurar ao fechar)
    - Verificar ordem lógica de foco (tabindex se necessário)
    - _Requirements: 8.7_
  
  - [ ] 13.3 Verificar contraste e áreas de toque
    - Revisar contraste de cores (mínimo 4.5:1) em todos os componentes
    - Garantir áreas de toque mínimas de 44x44px em mobile
    - Ajustar tamanhos de fonte para legibilidade (mínimo 14px em mobile)
    - _Requirements: 8.2, 8.3, 8.6_

- [ ] 14. Ajustes de responsividade
  - [ ] 14.1 Testar e ajustar breakpoints
    - Testar layout em 320px, 375px, 768px, 1024px, 1920px
    - Ajustar grids responsivos (polaroid-grid, wishes-grid, surprises-grid, timeline)
    - Verificar tamanhos de fonte e espaçamentos em cada breakpoint
    - _Requirements: 8.1, 8.4, 8.5_
  
  - [ ] 14.2 Ajustar componentes para mobile
    - Reduzir tamanho dos controles do music player em mobile
    - Centralizar timeline em mobile (remover alternância left/right)
    - Ajustar modal para telas pequenas
    - _Requirements: 8.1, 8.5_

- [ ] 15. Integração final e wiring
  - [ ] 15.1 Inicializar todos os módulos no script.js
    - Adicionar chamadas de init() para todos os módulos após DOMContentLoaded
    - Ordem: Utils, Modal, PhotoGallery, MusicPlayer, WishesSection, Timeline, InteractiveSurprises, VirtualCake, VisualEffects
    - Verificar que não há conflitos entre módulos
    - _Requirements: Todos_
  
  - [ ] 15.2 Adicionar validação de dados e error handling
    - Implementar verificações de array vazio em PhotoGallery, WishesSection, Timeline
    - Adicionar mensagens amigáveis para estados vazios
    - Implementar error handlers para audio.onerror, img.onerror
    - Adicionar try/catch em operações de sessionStorage
    - _Requirements: 9.1, 9.2_
  
  - [ ] 15.3 Adicionar meta tags e favicon
    - Adicionar meta tags Open Graph no head
    - Criar e adicionar favicon
    - Verificar meta viewport e charset
    - _Requirements: 8.1_

- [ ] 16. Checkpoint final - Testes e validação
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Todas as tarefas referenciam requisitos específicos para rastreabilidade
- Checkpoints garantem validação incremental
- Implementação usa JavaScript vanilla (HTML/CSS/JavaScript)
- Foco em performance (60fps), acessibilidade e responsividade
- Cada tarefa constrói sobre as anteriores, sem código órfão
- Design já aprovado, então detalhes de implementação estão no design.md
