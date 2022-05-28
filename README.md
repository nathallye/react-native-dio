# Introdução ao React Native
![image](https://user-images.githubusercontent.com/86172286/170399053-e0ce41d5-cfd8-4de6-ba7d-4849f45b5683.png)
![image](https://user-images.githubusercontent.com/86172286/169736753-e60c553a-a435-44f9-b04d-c438d08bff1b.png)

## O que é?

Framework open source, Cross Platform(multiplataforma).
Todo código desenvolvidoéconvertido para a linguagem nativa do sistema operacional.
Conseguimos desenvolver aplicações para Android e iOS utilizando um código único.

Documentação: https://reactnative.dev.

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
yarn android ou npx react-native run-android
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
- babel.config.js : arquivo de configuração do babel, já vem configurado, faz compilação para as versões mais antigas do JS;
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

Um componente React para exibir texto. `Text` suporta aninhamento, estilo e manuseio de toque.

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

## API StyleSheet

Documentação: https://reactnative.dev/docs/stylesheet

É uma abstração semelhante ao CSS StyleSheets.

- Dicas de qualidade de código:

- Ao afastar os estilos da função de renderização, você torna o código mais fácil de entender.
Nomear os estilos é uma boa maneira de adicionar significado aos componentes de baixo nível na função de renderização.

- Vamos importar a API StyleSheet do react native:

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello Word!</Text>
    </View>
  )
};

export default App;
```

- Dessa forma, essa API que importamos vai criar um objeto/folha de estilo. 
Agora, vamos criar uma constante chamada _styles_ que vai receber essa folha de estilo através da função _StyleSheet.create_ e essa função vai receber um objeto com a descrição dos estilos:

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default App;
```

- E dentro desse objeto _styles_ vamos criar um objeto(que funciona igual a uma classe de estilo) chamado _container_(que vamos aplicar posteriormente na _View_):

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    
  }
});

export default App;
```

- Em seguida, vamos passar a propriedade _style_ para o componente _View_, e essa propriedade vai receber o objeto _container_ que se escontra dentro do objeto _styles_, dessa forma todas as propriedades relacionadas dentro do objeto _styles.container_ vai refletir no componente _View_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {

  }
});

export default App;
```

- E para visualizarmos melhor essa aplicação, vamos aplicar um _background color_ nesse objeto _container_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink'
  }
});

export default App;
```

- Obs.: O React Native utiliza o _flex box por padrão_, apenas com a diferença entre linhas e colunas, todas as views ele considera por coluna/_column_ ao invés de ser por linha/_row_ como é na web.
E para informarmos que essa _View_ pode crescer vamos aplicar a propriedade _flex 1_(o flex 1 vai permitir que essa view possa preencher todo o espaço disponível, ou seja, a tela inteira):

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  }
});

export default App;
```

- E agora, vamos criar um novo objeto em _styles_ chamado _text_ e vamos aplicá-lo no componente _Text_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    
  }
});

export default App;
```

- E vamos alterar o _font-size_(tamanho da fonte), _font-weight_(peso da fonte) e a _color_ desse _text_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

## Componente SafeAreaView

Documentação: https://reactnative.dev/docs/safeareaview

O objetivo de `SafeAreaView` é renderizar conteúdo dentro dos limites da área segura de um dispositivo. Atualmente, é aplicável apenas a dispositivos iOS com iOS versão 11 ou posterior.

`SafeAreaView` renderiza o conteúdo aninhado e aplica automaticamente o preenchimento para refletir a parte da visualização que não é coberta por barras de navegação, barras de guias, barras de ferramentas e outras visualizações ancestrais. Além disso, e mais importante, os preenchimentos do Safe Area refletem a limitação física da tela, como cantos arredondados ou entalhes da câmera (ou seja, a área da caixa do sensor no iPhone 13).

- Vamos importar o componente SafeAreaView do react native:

``` JSX
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Word!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

- E vamos envolver todo o conteúdo do nosso App com o componente _SafeAreaView_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Hello Word!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

- E vamos mover a aplicação do estilo da _View_ para o _SafeAreaView_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello Word!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

- O _SafeAreaView_ vai proteger o componente de sair para uma área sem acesso, é muito utilizado e normalmente é trabalhado em conjunto com o componente _Statusbar_.
Para entendermos melhor, vamos importar o _Statusbar_ e inserir dentro do componente _SafeAreaView_, dessa forma podemos manipular a barra de status da nossa aplicação:

``` JSX
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.text}>Hello Word!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

- Vamos passar um _background color_ e um novo estilo de barra/_barStyle_:

``` JSX
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'pink'} barStyle='dark-content' />
      <View>
        <Text style={styles.text}>Hello Word!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

## Componente Image

Documentação: https://reactnative.dev/docs/image

Um componente React para exibir diferentes tipos de imagens, incluindo imagens de rede, recursos estáticos, imagens locais temporárias e imagens do disco local, como o rolo da câmera.

- E para entendermos melhor os próximos componentes, vamos criar uma tela de profile, onde básicamente vamos pegar nosso perfil do github e aplicar no nosso app.
Primeiramente, vamos trocar as cores já definidas no nosso App para a cor do github, e para facilitar esse passo repetitivo vamos criar uma constante com essa cor e aplicar onde for necessário:

``` JSX
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='dark-content' />
      <View>
        <Text style={styles.text}>Hello Word!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
  text: {
    fontSize: 50, // valor em px
    fontWeight: 'bold', // bold = negrito
    color: 'black',
  }
});

export default App;
```

- E agora, como a tela ficou toda escura vamos mudar a propriedade _barStyle_ do _StatusBar_ para _light-content_ e remover o _Text_ e seus estilos, pois não vamos mais utilizá-lo:

``` JSX
import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View>
      
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
});

export default App;
```

- Em seguida, vamos importar o componente _Image_ do react native e dentro da _View_ vamos referênciar esse componente:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View>
        <Image />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
});

export default App;
```

- O _Image_ recebe uma propriedade chamada _source_ que vai ser onde ele vai conseguir buscar a imagem. Então, dentro da propriedade _source_ vamos passar um objeto/_{}_ onde conseguimos passar outras propriedades, que nesse caso vai ser a _uri_ da nossa imagem de perfil do github:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View>
        <Image source={{uri: imageProfileGithub}}/>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
});

export default App;
```

- Mas ainda não apareceu nada no nosso app, isso ocorre por conta que o componente _Image_ precisa obrigatóriamente receber as propriedades de altura/_height_ e largura/_width_. Para isso vamos criar um objeto de estilo chamado _avatar_ e nele vamos passar o _height_ e o _width_ e vamos referênciar esse objeto através da propriedade _style_ no componente _Image_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
  avatar: {
    height: 200, // valor em px
    width: 200,
  },
});

export default App;
```

- E para deixar essa imagem com uma borda arredondada vamos aplicar a propriedade _border radius_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
  avatar: {
    height: 200, // valor em px
    width: 200,
    borderRadius: 100, // valor em px (100 equivale a metade dos pixels da imagem que é 200, é o mesmo de 50%)
  },
});

export default App;
```

- E para aplicar uma cor a essa borda podemos aplicar a propriedade _border color_ e para deixar ela mais "espessa" vamos aplicar a propriedade _border width_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
  avatar: {
    height: 200, // valor em px
    width: 200,
    borderRadius: 100, // valor em px (100 equivale a metade dos pixels da imagem que é 200, é o mesmo de 50%),
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default App;
```

## Flex-box

Forma de alinhar nossos componentes na tela.

- E vamos utilizar o flex-box para alinhar a imagem ao centro. 
Antes de tudo, vamos criar um novo objeto que vai ser aplicado no conteúdo da página(nesse caso vai ser no componente _View_), chamado _content_ e nele vamos aplicar um _align items: center_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 200, // valor em px
    width: 200,
    borderRadius: 100, // valor em px (100 equivale a metade dos pixels da imagem que é 200, é o mesmo de 50%),
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default App;
```

- E como nossa imagem/componente _Image_ ficou muito colada na parte superior, vamos aplicar um _justify content_ ao centro na _View_/_container_ para alinar todos os elementos do app no centro da tela:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { // column, se quisermos alterar esse comportamento para alinhamento em linha, devemos usar:
    // flexDirection: 'row', 
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 200, // valor em px
    width: 200,
    borderRadius: 100, // valor em px (100 equivale a metade dos pixels da imagem que é 200, é o mesmo de 50%),
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default App;
```

## Adicionando name, nickname e description ao profile

- Vamos importar o componente _Text_ e referenciar inseririndo as informações de name, nickname e description:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text>Nathallye Tavares</Text>
        <Text>nathallyet</Text>
        <Text>Software developer</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 200, 
    width: 200,
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default App;
```

- E para aplicarmos algumas propriedades de estilo nesses componentes vamos criar um objeto default chamado _defaultText_ para todos com componentes de texto. E esse objeto vai receber a cor de texto/_color_ padrão do github. Em seguida, para essas propriedades sejam aplicadas nos componentes, vamos referenciar o objeto _defaultText_ através do _style_:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text style={styles.defaultText}>Nathallye Tavares</Text>
        <Text style={styles.defaultText}>nathallyet</Text>
        <Text style={styles.defaultText}>Software developer</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 200, 
    width: 200,
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  }
});

export default App;
```

- E para que os elementos não fiquem muito "grudados" nas laterais vamos adicionar um _padding_ no _content_.
Em seguida, vamos criar objetos de estilo para cada componente de texto(name, nickname, description), pois iremos aplicar propriedades especificas para cada um deles:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text style={styles.defaultText}>Nathallye Tavares</Text>
        <Text style={styles.defaultText}>nathallyet</Text>
        <Text style={styles.defaultText}>Software developer</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {  
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
```

- E para conseguirmos usar mais de um objeto de estilo em um componente, podemos passar um array:

``` JSX
import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text style={[styles.defaultText, styles.name]}>Nathallye Tavares</Text>
        <Text style={[styles.defaultText, styles.nickname]}>nathallyet</Text>
        <Text style={[styles.defaultText, styles.description]}>Software developer</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
```

## Criando botão

- Não vamos usar o botão nativo do react native, vamos criar um manualmente. Para isso, vamos criar uma nova _View_ e dentro dela vamos inserir um _Text_ e vamos criar um objeto de estilo chamado _button_ para aplicarmos nessa view que vai representar nosso botão:

``` JSX
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  SafeAreaView, 
  StatusBar,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          accessibilityLabel='Nathallye Tavares no escritório'
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text 
          accessibilityLabel='Nome: Nathallye Tavares' 
          style={[styles.defaultText, styles.name]}>
          Nathallye Tavares
        </Text>
        <Text 
          accessibilityLabel='Nickname: nathallyet' 
          style={[styles.defaultText, styles.nickname]}>
          nathallyet
        </Text>
        <Text 
          accessibilityLabel='Descrição Nathallye Tavares: Software developer'
          style={[styles.defaultText, styles.description]}>
          Software developer
        </Text>
        <View style={styles.button}>
          <Text>Open in Github</Text>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {  
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200, 
    width: 200,
    
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,

    marginTop: 20,
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,    
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: colorDarkFontGithub,
    
    marginTop: 20,
    padding: 10,
    
    borderRadius: 10,
  }
});

export default App;
```

- E seguida, vamos importar o componente _Pressable_, esse componente torna o elemento em algo "clicavél", e vamos envolver a nossa _View_ que representa o nosso botão com esse componente _Pressable_:

``` JSX
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  SafeAreaView, 
  StatusBar,
  Pressable,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          accessibilityLabel='Nathallye Tavares no escritório'
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text 
          accessibilityLabel='Nome: Nathallye Tavares' 
          style={[styles.defaultText, styles.name]}>
          Nathallye Tavares
        </Text>
        <Text 
          accessibilityLabel='Nickname: nathallyet' 
          style={[styles.defaultText, styles.nickname]}>
          nathallyet
        </Text>
        <Text 
          accessibilityLabel='Descrição Nathallye Tavares: Software developer'
          style={[styles.defaultText, styles.description]}>
          Software developer
        </Text>
        <Pressable>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

// [...]
```

- E vamos inserir nesse componente o evento _onPress_ que vai receber uma arrow function/_()=>_ que vai fazer um _console.log_ quando esse evento for acionando/botão precionado:

``` JSX
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  SafeAreaView, 
  StatusBar,
  Pressable,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          accessibilityLabel='Nathallye Tavares no escritório'
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text 
          accessibilityLabel='Nome: Nathallye Tavares' 
          style={[styles.defaultText, styles.name]}>
          Nathallye Tavares
        </Text>
        <Text 
          accessibilityLabel='Nickname: nathallyet' 
          style={[styles.defaultText, styles.nickname]}>
          nathallyet
        </Text>
        <Text 
          accessibilityLabel='Descrição Nathallye Tavares: Software developer'
          style={[styles.defaultText, styles.description]}>
          Software developer
        </Text>
        <Pressable onPress={() => console.log('github')}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

// [...]
```

## Conhecendo o Linking e adicionando código nativo ao android

`Linking` oferece uma interface geral para interagir com links de aplicativos de entrada e saída.

Cada Link (URL) tem um Esquema de URL, alguns sites são prefixados com https://ou http://e httpé o Esquema de URL. Vamos chamá-lo de esquema para breve.

- Vamos importar a API _Linking_ do react native. Em seguida, vamos criar uma constante chamada _handlePressGoToGithub_(manipular ir para o github) que vai receber uma arrow function/_() =>_ e dentro dela vamos utilizar a api _Linking_.
Vamos chamar o _Linking_ chamando o método _canOpenUrl_ e vamos passar para ele a url do nosso github que está armazenada dentro de _urlToMyGithut_. E podemos em seguida chamar essa função no _onPress_:

``` JSX
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  SafeAreaView, 
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const urlToMyGithut = 'https://github.com/nathallyet';

const App = () => {

  const handlePressGoToGithub = async () => {
    console.log('Verificando link...');
    const res = await Linking.canOpenURL(urlToMyGithut); // primeiro vai perguntar se ele consegue,abrir essa url, portando vai ser uma função assincrona, que vai resperar por um resultado, e isso vai retornar uma promisse boleano
    if (res) { // verifica se a resposta for true
      console.log('Link aprovado!');
      await Linking.openURL(urlToMyGithut); // vai abrir a url do github
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          accessibilityLabel='Nathallye Tavares no escritório'
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text 
          accessibilityLabel='Nome: Nathallye Tavares' 
          style={[styles.defaultText, styles.name]}>
          Nathallye Tavares
        </Text>
        <Text 
          accessibilityLabel='Nickname: nathallyet' 
          style={[styles.defaultText, styles.nickname]}>
          nathallyet
        </Text>
        <Text 
          accessibilityLabel='Descrição Nathallye Tavares: Software developer'
          style={[styles.defaultText, styles.description]}>
          Software developer
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200, 
    width: 200,
    
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,

    marginTop: 20,
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,    
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: colorDarkFontGithub,
    
    marginTop: 20,
    padding: 10,
    
    borderRadius: 10,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default App;
```

- Mas para que o nosso app consiga abrir o link temos que adicionar uma verificação dentro do código nativo do android. Vamos em _android/app/src/main/AndroidManifest.xml_ e acima do conteúdo de _application_ vamos adicionar o _queires_(consutas) que vai permitir abrir o esquema https:

``` XML
// [...]

    <queries>
      <intent>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https" />
      </intent>
    </queries>

// [...]
```

- Para que essas alterações reflitam no nosso app, temos que instalar novamente o sistema, para isso, vamos rodar o comando:

``` 
yarn android ou react-native run-android
```

## React Native Vector Icons(Para o APP curriculum)

Pacote perfeito para botões, logotipos e barras de navegação/guia.

- Primeiramente, no terminal vamos rodar o comando a seguir para baixar o pacote:

```
npm install --save react-native-vector-icons
```

- Em seguida, podemos importá-lo dentro do nosso projeto:

``` JSX
import Icon from 'react-native-vector-icons';
```

- Em seguida, vamos copiar o conteúdo da _Fonts_ pasta para _android/app/src/main/assets/fonts_(observe a pasta de fontes em minúsculas).

- Depois de impotado o componente _Icon_ podemos usá-lo assim:

``` JSX
<Icon name='github' size={30} />
```
