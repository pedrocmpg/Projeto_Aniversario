# Documento de Requisitos: Melhorias Interativas para Site de Aniversário

## Introdução

Este documento especifica os requisitos para adicionar funcionalidades interativas e festivas ao site de aniversário da Sofia. O objetivo é criar uma experiência de celebração memorável e alegre, mantendo o estilo delicado e feminino existente (cores rosa/cream, fontes elegantes, tema de aniversário com emojis 🎂🎉🎈🌸✨).

## Glossário

- **Site**: O site de aniversário em HTML/CSS/JavaScript
- **Galeria_de_Fotos**: Componente que exibe múltiplas fotos em formato de polaroids animados
- **Player_de_Música**: Componente de áudio para reproduzir música de fundo festiva
- **Seção_Desejos**: Componente que exibe lista de desejos e mensagens de aniversário
- **Usuário**: A pessoa que visualiza o site (Sofia)
- **Polaroid**: Elemento visual que simula uma foto polaroid com borda branca e sombra
- **Reveal_Animation**: Animação de revelação progressiva de conteúdo
- **Hover_Effect**: Efeito visual ativado quando o cursor passa sobre um elemento
- **Balão_Virtual**: Elemento gráfico animado que simula balão de festa
- **Surpresa_Interativa**: Elemento clicável que revela conteúdo especial (presente, mensagem, etc.)

## Requisitos

### Requisito 1: Galeria de Fotos em Polaroids

**User Story:** Como criador do site, eu quero adicionar uma galeria de fotos em formato polaroid, para que a Sofia possa ver momentos especiais e felizes de forma visualmente atraente.

#### Acceptance Criteria

1. THE Galeria_de_Fotos SHALL exibir entre 6 e 12 fotos em formato polaroid
2. WHEN o Usuário passa o cursor sobre um Polaroid, THE Polaroid SHALL aplicar efeito de rotação suave e elevação com sombra
3. THE Galeria_de_Fotos SHALL organizar os polaroids em layout responsivo (grid em desktop, coluna em mobile)
4. THE Polaroid SHALL incluir espaço para legenda opcional abaixo da foto
5. THE Galeria_de_Fotos SHALL aplicar rotações aleatórias sutis (-5° a +5°) em cada Polaroid para aparência natural
6. WHEN a Galeria_de_Fotos é carregada, THE Site SHALL animar os polaroids com Reveal_Animation escalonada (um após o outro)
7. THE Galeria_de_Fotos SHALL focar em momentos de alegria, celebrações e memórias felizes

### Requisito 2: Player de Música de Fundo

**User Story:** Como criador do site, eu quero adicionar música de fundo festiva, para que a experiência de aniversário seja mais alegre e memorável.

#### Acceptance Criteria

1. THE Player_de_Música SHALL permitir reprodução de arquivo de áudio em formato MP3 ou OGG
2. THE Player_de_Música SHALL iniciar pausado (não reproduzir automaticamente)
3. THE Player_de_Música SHALL exibir controles visuais minimalistas (play/pause e ícone de volume)
4. WHEN o Usuário clica no botão play, THE Player_de_Música SHALL iniciar a reprodução da música
5. WHEN o Usuário clica no botão pause, THE Player_de_Música SHALL pausar a reprodução
6. THE Player_de_Música SHALL posicionar-se de forma fixa e discreta (canto inferior direito ou superior direito)
7. THE Player_de_Música SHALL manter o estilo visual consistente com o tema rosa/cream do Site
8. THE Player_de_Música SHALL incluir ícone de bolo ou balão decorativo no design dos controles

### Requisito 3: Seção "Desejos de Aniversário"

**User Story:** Como criador do site, eu quero adicionar uma seção com desejos e mensagens especiais, para que a Sofia veja o que desejo para ela neste novo ano de vida.

#### Acceptance Criteria

1. THE Seção_Desejos SHALL exibir lista de 8 a 15 desejos ou mensagens de aniversário
2. THE Seção_Desejos SHALL apresentar cada desejo em card individual com fundo branco e borda rosa
3. WHEN a Seção_Desejos é carregada, THE Site SHALL animar os cards com fade-in progressivo
4. THE Seção_Desejos SHALL numerar cada desejo sequencialmente
5. THE Seção_Desejos SHALL organizar os cards em layout responsivo (2-3 colunas em desktop, 1 coluna em mobile)
6. WHEN o Usuário passa o cursor sobre um card, THE card SHALL aplicar efeito de elevação suave
7. THE Seção_Desejos SHALL incluir emojis decorativos de aniversário (🎂, 🎉, 🎈, 🌸, ✨, 🎁) de forma aleatória nos cards
8. THE Seção_Desejos SHALL ter título festivo como "Meus Desejos Para Você" ou "O Que Desejo Para Este Ano"

### Requisito 4: Linha do Tempo de Momentos Especiais

**User Story:** Como criador do site, eu quero adicionar uma linha do tempo visual, para que momentos especiais e conquistas da Sofia sejam destacados cronologicamente.

#### Acceptance Criteria

1. THE Site SHALL exibir linha do tempo vertical com 4 a 8 marcos temporais
2. THE Site SHALL apresentar cada marco com data, título e descrição curta
3. THE Site SHALL conectar os marcos com linha vertical estilizada (cor rosa)
4. THE Site SHALL posicionar os marcos alternadamente (esquerda/direita em desktop, centralizado em mobile)
5. WHEN o Usuário rola a página até a linha do tempo, THE Site SHALL animar os marcos com Reveal_Animation sequencial
6. THE Site SHALL incluir ícone ou emoji decorativo para cada marco temporal (🎂, 🎓, 🌟, 🎉, 🎈)
7. THE Site SHALL aplicar círculo destacado na linha vertical para marcar cada ponto temporal
8. THE Site SHALL focar em momentos de celebração, conquistas e marcos importantes da vida dela

### Requisito 5: Surpresas Interativas de Aniversário

**User Story:** Como criador do site, eu quero adicionar surpresas ocultas que revelam ao clicar, para que a Sofia descubra mensagens especiais e presentes virtuais de forma interativa.

#### Acceptance Criteria

1. THE Site SHALL exibir 3 a 5 elementos interativos com surpresas ocultas
2. THE Site SHALL apresentar cada elemento como presente embrulhado, balão, bolo ou caixa de surpresa clicável
3. WHEN o Usuário clica em um elemento interativo, THE Site SHALL revelar a surpresa com animação festiva
4. WHEN a surpresa está revelada e o Usuário clica novamente, THE Site SHALL ocultar a surpresa
5. THE Site SHALL indicar visualmente quais elementos são clicáveis (cursor pointer e Hover_Effect)
6. THE Site SHALL manter o estado de surpresas reveladas durante a sessão de navegação
7. THE Site SHALL estilizar as surpresas reveladas com fundo rosa claro e tipografia elegante
8. THE Site SHALL incluir conteúdo de aniversário nas surpresas (desejos especiais, mensagens de felicitações, promessas de presentes reais)

### Requisito 6: Efeitos Visuais Festivos Aprimorados

**User Story:** Como criador do site, eu quero adicionar efeitos visuais mais elaborados e festivos, para que o site seja mais impressionante e celebrativo.

#### Acceptance Criteria

1. WHEN o Usuário rola a página, THE Site SHALL aplicar efeito parallax suave no fundo das seções
2. THE Site SHALL adicionar animação de brilho (sparkle) em elementos decorativos ao passar o cursor
3. WHEN uma seção entra no viewport, THE Site SHALL aplicar fade-in com slide-up nos elementos principais
4. THE Site SHALL adicionar efeito de gradiente animado no hero section
5. WHEN o Usuário clica em balões, bolos ou presentes decorativos, THE Site SHALL criar explosão de confetti ou partículas festivas temporária
6. THE Site SHALL incluir balões flutuantes animados em pelo menos uma seção
7. THE Site SHALL adicionar efeito de "soprar velas" interativo (opcional: clicar em velas de bolo virtual)
8. THE Site SHALL manter performance fluida (60fps) em todas as animações

### Requisito 6.1: Bolo Virtual Interativo

**User Story:** Como criador do site, eu quero adicionar um bolo de aniversário virtual interativo, para que a Sofia possa "soprar as velas" digitalmente.

#### Acceptance Criteria

1. THE Site SHALL exibir ilustração ou animação de bolo de aniversário com velas acesas
2. THE Site SHALL posicionar o bolo em seção dedicada com fundo festivo
3. WHEN o Usuário clica nas velas ou no bolo, THE Site SHALL animar as velas apagando
4. WHEN as velas são apagadas, THE Site SHALL exibir mensagem especial de parabéns
5. WHEN as velas são apagadas, THE Site SHALL disparar animação de confetti
6. THE Site SHALL incluir instrução visual "Clique para soprar as velas" ou similar
7. THE Site SHALL permitir reacender as velas ao clicar novamente (para repetir a experiência)

### Requisito 7: Seção de Galeria Modal

**User Story:** Como usuário, eu quero visualizar fotos em tamanho maior, para que eu possa apreciar os detalhes das imagens.

#### Acceptance Criteria

1. WHEN o Usuário clica em um Polaroid na Galeria_de_Fotos, THE Site SHALL abrir modal com a foto em tamanho ampliado
2. THE Site SHALL exibir a foto centralizada com fundo escuro semi-transparente
3. WHEN o modal está aberto e o Usuário clica fora da foto, THE Site SHALL fechar o modal
4. WHEN o modal está aberto e o Usuário pressiona a tecla ESC, THE Site SHALL fechar o modal
5. THE Site SHALL incluir botão de fechar (X) visível no modal
6. THE Site SHALL exibir a legenda da foto no modal (se disponível)
7. WHEN o modal abre ou fecha, THE Site SHALL aplicar animação suave de fade e scale

### Requisito 8: Responsividade e Acessibilidade

**User Story:** Como criador do site, eu quero garantir que todas as novas funcionalidades sejam responsivas e acessíveis, para que a experiência seja ótima em qualquer dispositivo.

#### Acceptance Criteria

1. THE Site SHALL adaptar todos os novos componentes para telas de 320px a 1920px de largura
2. THE Site SHALL manter legibilidade de textos em dispositivos móveis (tamanho mínimo 14px)
3. THE Site SHALL garantir que elementos interativos tenham área de toque mínima de 44x44px em mobile
4. THE Site SHALL manter proporções e espaçamentos harmoniosos em todas as resoluções
5. WHEN o Site é acessado em mobile, THE Player_de_Música SHALL reduzir tamanho dos controles
6. THE Site SHALL garantir contraste adequado entre texto e fundo (mínimo 4.5:1) em todos os componentes
7. THE Site SHALL permitir navegação por teclado em elementos interativos (Tab, Enter, ESC)

### Requisito 9: Otimização de Performance

**User Story:** Como criador do site, eu quero garantir que o site carregue rapidamente, para que a experiência não seja prejudicada por lentidão.

#### Acceptance Criteria

1. THE Site SHALL carregar imagens da galeria de forma lazy (apenas quando visíveis no viewport)
2. THE Site SHALL comprimir e otimizar todas as imagens para web (formato WebP ou JPEG otimizado)
3. THE Site SHALL limitar o tamanho do arquivo de música para máximo 5MB
4. THE Site SHALL minimizar animações em dispositivos com preferência de movimento reduzido (prefers-reduced-motion)
5. THE Site SHALL carregar fontes de forma otimizada (font-display: swap)
6. THE Site SHALL manter o tempo total de carregamento inicial abaixo de 3 segundos em conexão 3G