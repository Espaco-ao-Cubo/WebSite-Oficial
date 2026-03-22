---
slug: sala-limpa
draft: false
title: 'Sala Limpa: Validação e Primeiros Testes do TejoOne'
category: Engineering
date: 2024-12-05T00:00:00.000Z
author: Equipa Espaço ao Cubo
authorRole: Integração e Testes
image: /images/blog/sala-limpa.jpg
tags:
  - sala limpa
  - integração
  - testes
  - ISO 7
  - fase D
excerpt: 'A chegada da Fase D do projeto TejoOne marca um momento decisivo: validámos a nossa sala limpa ISO 7 e realizámos os primeiros testes de integração.'
---

# Sala Limpa: Validação e Primeiros Testes do TejoOne

A chegada da Fase D do projeto TejoOne marca um momento decisivo: o satélite está finalmente a passar do CDR (Critical Design Review) para a mesa de trabalho, ganhando forma em três dimensões.

Para que esta montagem decorra com total segurança, é necessário ter especial atenção ao ambiente onde os componentes são manipulados. Uma das principais preocupações é a presença de partículas suspensas no ar, que podem danificar ou comprometer o desempenho do satélite durante a missão. Para evitar esse risco, todo o processo de integração é realizado numa **sala limpa**.

## O que é uma Sala Limpa?

Uma sala limpa é um ambiente controlado onde a concentração de partículas suspensas no ar é mantida dentro de limites muito reduzidos. Estas partículas, de tamanho muito pequeno e invisíveis ao olho humano (menores que 10 μm), podem interferir com equipamentos eletrónicos e, sobretudo, com sistemas óticos, podendo causar danos ou afetar o desempenho do satélite.

### Características de uma Sala Limpa

Para garantir este ambiente controlado, uma sala limpa normalmente inclui:

* **Filtragem de ar ativa**, através de filtros HEPA
* **Renovação constante do ar**
* **Pressão diferencial entre salas**, evitando a entrada de partículas de zonas adjacentes
* **Regras de acesso rigorosas**

Estas regras de acesso incluem a proibição de entrada de materiais que libertem partículas, a higienização de todo o equipamento e ferramentas com álcool isopropílico e o uso obrigatório de bata, touca, luvas e protetores de pés.

### Classes ISO de Salas Limpas

De acordo com a norma **ISO 14644-1**, as salas limpas são divididas em diferentes classes, dependendo do número e tamanho das partículas presentes por metro cúbico de ar. Estas classes vão de ISO 9 a ISO 1, correspondendo o ISO 9 ao ambiente de rua e o ISO 1 ao nível de limpeza mais elevado.

Para o trabalho com CubeSats, como o TejoOne, o comum é utilizar **ISO 7**. Neste nível, apenas é necessário preocuparmo-nos com partículas de maiores dimensões, superiores a 0,5 μm (sendo mais precisos: partículas acima dos tamanhos 0,5, 1 e 5 μm).

## Validação da Sala Limpa

Uma vez que a sala era nova, não havia conhecimento prévio da sua capacidade de limpeza nem da classe a que pertencia. Sendo este o caso, foi necessário realizar a sua **validação (ou qualificação)** antes de poder ser utilizada para a integração do TejoOne.

Este processo garante que o ambiente cumpre os requisitos definidos para a classe ISO pretendida. A validação consistiu na realização de vários testes, avaliando diferentes combinações de potência da filtragem e condições ambientais.

### Método de Medição

Para medir o nível real de partículas, foi utilizado um equipamento de contagem que suga um volume conhecido de ar, medido em litros por minuto, e deteta quantas partículas existem para cada tamanho especificado. A partir destes valores, é possível calcular a concentração de partículas por metro cúbico e determinar a classe ISO correspondente.

### Resultados dos Testes

Os testes realizados permitiram obter os seguintes resultados:

1. **Com todos os sistemas desligados**: a sala apresenta um desempenho equivalente a **ISO 8**
2. **Com 50% da filtragem ativa** e o controlo de temperatura desligado: a sala consegue manter **ISO 7**, desde que não haja pessoas no interior

### Conclusões da Validação

Com base nestes resultados, concluiu-se que:

* Durante períodos de trabalho com pessoas presentes, a filtragem deve operar entre **75% e 100%**, dependendo do número de pessoas na sala
* O controlo de temperatura deve ser ligado sempre que houver pessoas a trabalhar ou quando houver necessidade de manter algum componente sensível a uma temperatura estável

Este processo de qualificação permitiu confirmar que **a sala está pronta para suportar as exigências da montagem e integração do satélite**.

## Primeiro Teste Operacional

Com a sala limpa validada e aprovada para utilização em atividades de montagem e integração, realizou-se o primeiro teste operacional: a **inspeção inicial da estrutura** fornecida pela Agência Espacial Portuguesa, seguida da desmontagem e análise de um dos componentes recebidos para integração no TejoOne.

### Objetivos do Teste

O objetivo deste ensaio foi duplo:

1. Verificar o estado físico da estrutura após o transporte e armazenamento
2. Avaliar a compatibilidade mecânica e dimensional do componente com as interfaces previstas no modelo estrutural do satélite

### Resultados e Aprendizagens

Este primeiro teste demonstrou, na prática, que a sala limpa é adequada para operações reais de integração, permitindo trabalhar com componentes sensíveis enquanto se mantém um ambiente controlado.

Além disso, a experiência permitiu:

* Identificar o tipo de material de apoio necessário para otimizar o trabalho em próximas etapas
* Compreender as necessidades logísticas envolvidas no processo
* Avaliar requisitos técnicos e de documentação
* Melhorar a organização e planeamento de testes

## Próximos Passos

Com base nas conclusões retiradas do primeiro teste, os próximos passos passam pela implementação das melhorias identificadas no **Manufacturing, Assembly, Integration and Verification Plan (MAIV Plan)**, de forma a otimizar os procedimentos de montagem dentro da sala limpa.

### Campanha de Testes

Após a revisão do MAIV, será iniciada a **campanha de testes dos componentes de cada subsistema**, com o objetivo de verificar o seu funcionamento, compatibilidade e desempenho em ambiente controlado. Estes testes permitirão validar o estado de cada elemento antes da integração mecânica na estrutura principal.

### Montagem Final

Numa fase posterior, e após a qualificação de todos os subsistemas, será realizada a **montagem completa do TejoOne**, seguindo a sequência definida para a integração final. Este processo marcará a transição para uma nova etapa do projeto, aproximando o satélite da sua configuração final.

## Agradecimentos

Agradecemos ao **Instituto de Astrofísica e Ciências do Espaço** pela cedência do espaço, onde o Espaço ao Cubo realizou a validação da sala limpa e continuará o trabalho, conduzindo os testes necessários e a integração do TejoOne, permitindo-nos realizar o sonho de montar o nosso satélite.

***

*Publicado pela Equipa Espaço ao Cubo - Integração e Testes*
