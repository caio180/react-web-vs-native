# React Web vs React Native

Repositório dedicado ao estudo e à comparação entre **React Web** e **React Native**, utilizando TypeScript.

O objetivo é desenvolver exemplos práticos nas duas tecnologias, explorando suas diferenças na construção de interfaces, componentes, estilização e execução em diferentes plataformas.

## Tecnologias utilizadas

- **React Web:** React + TypeScript + Vite.
- **React Native:** React Native + TypeScript + Expo.

## Comparação

| Característica | React Web | React Native |
|---|---|---|
| Plataforma | Navegadores | Android e iOS |
| Elementos | HTML | Componentes nativos |
| Estilização | CSS | StyleSheet |
| Texto | `h1`, `p`, `span` | `Text` |
| Estrutura | `div` | `View` |
| Eventos | `onClick` | `onPress` |
| Execução | Navegador | Dispositivo móvel ou emulador |

## Exemplos desenvolvidos

### Formulário de cadastro

Implementação de um formulário com os seguintes campos:

- Nome
- E-mail
- Senha
- Cidade

Ambas as versões utilizam `useState` para controlar os valores dos campos.

### React Web:

<img src="img/web.png" alt="React Web">

### React Native:

<img src="img/mobile.jpeg" alt="React Native" width="300">

## Execução dos projetos

### React Web

```bash
cd web
npm install
npm run dev
```

### React Native

```bash
cd mobile
npm install
npx expo start
```

Para executar no celular, utilize o aplicativo Expo Go e escaneie o QR Code apresentado pelo Expo.

## Objetivo do estudo

Compreender as semelhanças e diferenças entre React Web e React Native, aproveitando os conhecimentos de React e TypeScript para desenvolver aplicações destinadas à web e a dispositivos móveis.