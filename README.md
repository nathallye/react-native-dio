# React Native

Framework open source, Cross Platform(multiplataforma).
Documentação: https://reactnative.dev

## Componentes

O React Native fornece vários componentes principais integrados prontos para você usar em seu aplicativo. 

### Basic Components

A maioria dos aplicativos acabará usando um desses componentes básicos.

- View
- Text
- Image
- TextInput
- ScrollView
- StyleSheet

### User Interface

Esses controles comuns da interface do usuário serão renderizados em qualquer plataforma.

- Button
- Switch

### List Views

Ao contrário do mais genérico ScrollView, os componentes de exibição de lista a seguir renderizam apenas os elementos que estão sendo exibidos na tela no momento. Isso os torna uma escolha de alto desempenho para exibir longas listas de dados.

- FlatList
- SectionList

### Android Components and APIs

Muitos dos componentes a seguir fornecem wrappers para classes Android comumente usadas.

- BackHandler
- DrawerLayoutAndroid
- PermissionsAndroid
- ToastAndroid

### iOS Components and APIs

Muitos dos componentes a seguir fornecem wrappers para classes UIKit comumente usadas.

- ActionSheetIOS


## API 

APIs disponivéis nativamente que podem ser invocadas quando necessário.

Ex.:

- AccessibilityInfo
- Alert
- Hooks


# Criando um emulador do celular Android no Android Studio

- Vamos em `More Actions` > `Virtual Device Manager` > `Create device` e selecionar o simulador `Pixel3` e clicar em `Next` e em seguida vai abrir uma janela para selecionarmos o a versão do sistema android que queremos usar > Após isso vai abrir uma nova janela para nomearmos esse emular, feito isso podemos clicar em `Finish`.

- Agora, temos o emulador disponível, e podemos abri-lo indo na action `play`.


# Criando um projeto 

## Iniciando um projeto com a CLI(Command Line Interface) do React Native

```
npx react-native init [nome-do-projeto]
```

- Concluindo a inicialização do projeto, vamos entrar na pasta do projeto criada e rodar o comando para inicializar o Metro Bundle(o qual vai compilar o JS e passar para o app conseguir renderizar):

```
npx react-native start
```

- Vamos deixar rodando o Metro e abrir um novo terminal no diretório do projeto e realizar a instalação do Android:

```
npx react-native run-android
```

## Estrutura de pastas

- __tests__ : onde vamos conseguir rodar o nosso app e testar;
- .bundle : criamos um bundle para rodar no android, ele vai ser responsavel por transcrever o que está escrito no projeto para ser reconhecido no android;
- android : nessa pasta teremos as configurações nativas do android;
- ios : nessa pasta teremos as configurações nativas do ios;
- node_modules : pasta de dependências do javascript;
- .buckconfig, .eslintrc, flowconfig : arquivos de configurações;
- prettierrc.js : arquivo de regras de código;
- .ruby-version : para guardar a versão do ruby que vamos rodar no ios; 
- .watchmanconfig : arquivo de configuração de watch;
- App.js : arquivo da aplicação;
- babel.config.js : arquivo de configuração do babel, já vem configurado;
- Gemfile, Gemfile.lock : arquivos de gems para o ruby;
- metro.config.js : arquivo de configuração do metro bundle;
- package.json : arquivo de dependências JS;
- yarn.lock : registro das dependências instaladas no app.


# Criando uma tela de profile

## Alterando estrutura de pastas

- Na raíz do projeto vamos criar uma pasta _src_ e dentro dela criar um novo arquivo _App.js_.

- Dentro do arquivo _index.js_ vamos alterar a referência para o arquivo App para o novo que criamos dentro de _src_:

``` JS
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

- Isso ocasionou um erro no nosso emulador android. Para resolver esse problema, dentro do novo arquivo _App.js_ vamos criar uma constante _App_ que vai receber uma arrow funcion/_() =>_ que vai retornar/_return_ vazio/_null_ e em seguida exportar por padrão/_export default_ para que esse componente fique acessível:

``` JS
const App = () => {
  return null;
};

export default App;
```

- E para deixar tudo pronto para implementação de código JSX e dos componentes do react native, vamos importá-los:

``` JS
import React from 'react';
import {} from 'react-native';

const App = () => {
  return null;
};

export default App;
```

## Componente View

Documentação: https://reactnative.dev/docs/view

O componente mais fundamental para a construção de uma interface do usuário.
`View` é um contêiner que suporta layout com flexbox, style, algum manuseio de toque e controles de acessibilidade. É como se fosse uma div.
`View` é projetado para ser aninhado dentro de outras visualizações e pode ter de 0 a muitos filhos de qualquer tipo.

- Vamos importar o componente View do react native:

``` JS
import React from 'react';
import { View } from 'react-native';

const App = () => {
  return null;
};

export default App;
```

- E agora, ao invés de retornarmos o valor _null_, vamos retornar esse componente _View_:

``` JSX
import React from 'react';
import { View } from 'react-native';

const App = () => {
  return <View />;
};

export default App;
```

## Componente Text

Documentação: https://reactnative.dev/docs/text

Um componente React para exibir texto. `Text`suporta aninhamento, estilo e manuseio de toque.

- Vamos importar o componente Text do react native:

``` JSX
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return <View />;
};

export default App;
```

- Agora, podemos inserir o componente _Text_ dentro do componente _View_:

``` JSX
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
};

export default App;
```

- E dentro do componente _Text_ vamos inserir um conteúdo para validarmos no emulador que está ocorrendo tudo certo:

``` JSX
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello Word!</Text>
    </View>
  )
};

export default App;
```