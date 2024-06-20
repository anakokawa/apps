
import { StyleSheet,ScrollView, Image,Text,View, TouchableOpacity, Linking, } from 'react-native';

const imgmel=require("../../assets/images/melzinha.jpg")

const InstagramLink = async () => {
  const instagramUrl = "instagram://user?username=ana_kookwa";
  try {
    await Linking.openURL(instagramUrl);
  } catch (error) {
    console.error("Erro ao abrir o link do Instagram:", error);
  }
};

const WhatsAppLink = async () => {
  const phoneNumber = "5518936189244"; // Substitua pelo número de telefone no formato internacional
  const message = "Oi"; // Substitua pela mensagem que deseja enviar
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const supported = await Linking.canOpenURL(whatsappUrl);
  if (supported) {
    await Linking.openURL(whatsappUrl);
  } else {
    console.error(`Não é possível abrir o URL do WhatsApp: ${whatsappUrl}`);
  }
};

const GitHubLink = async () => {
  const githubUrl = "https://github.com/anakookwa"; // Substitua com o URL do seu repositório
  const supported = await Linking.canOpenURL(githubUrl);
  if (supported) {
    await Linking.openURL(githubUrl);
  } else {
    console.error(`Não é possível abrir o URL: ${githubUrl}`);
  }
};

const fazerChamada = async () => {
  // Exemplo de uso
  const numero = "18936189244"; // Substitua pelo número desejado
  const url = `tel:${numero}`;
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Erro ao abrir o cliente de telefone:", error);
  }
};

const AbrirGmailApp = async () => {
  const email = "analaura510251@gmail.com"; // Endereço de e-mail do destinatário
  const subject = "Mensagem de contato"; // Assunto do e-mail (opcional)
  const body = "Prazer, preciso falar com você"; // Corpo do e-mail (opcional)

  const url = `mailto:${email}?subject=${subject}&body=${body}`;

  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Erro ao abrir o cliente de e-mail:", error);
  }
};

const LinkedInlink = async () => {
  // Exemplo de uso
  const profileId = "ana-laura-8a7953314"; // Substitua pelo ID do perfil desejado
  try {
    const linkedInUrl = `linkedin://profile/${profileId}`;
    const isInstalled = await Linking.canOpenURL(linkedInUrl);

    if (isInstalled) {
      await Linking.openURL(linkedInUrl);
    } else {
      // Se o aplicativo não estiver instalado, redirecione para o perfil na web
      const webUrl = `https://www.linkedin.com/in/${profileId}`;
      await Linking.openURL(webUrl);
    }
  } catch (error) {
    console.error("Erro ao abrir o perfil do LinkedIn:", error);
  }
};

export default function TabTwoScreen() {
  return (
   
    <View style={styles.container}>
    {/* Imagem de fundo que se move em paralelo */}
    <Image
        source={require('../../assets/images/fundo.png')}
        style={styles.imagemFundo}
        resizeMode="cover"
    />

<View style={{display: 'flex'}}>
      <View style={{justifyContent:'center', alignItems:'center', }}>
      <Image source={imgmel} resizeMode='cover' style={{width:150, height: 150, borderRadius:80, top:100,}}></Image></View>
      </View>


      <View style={{top:200, alignItems:'center',}}>
        <TouchableOpacity onPress={InstagramLink} style={{backgroundColor:'#FF1493', width:250, height:40, borderRadius:50,top: 0, elevation: 10}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>INSTAGRAM</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={WhatsAppLink} style={{backgroundColor:'#FF1493', width:250, height:40, borderRadius:50,top:10, elevation: 10}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>WHATSAPP</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={LinkedInlink} style={{backgroundColor:'#FF1493', width:250, height:40, borderRadius:50,top:20 ,elevation: 10}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>LINKEDIN</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={fazerChamada} style={{backgroundColor:'#FF1493', width:250, height:40, borderRadius:50,top:30, elevation: 10}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>TELEFONE</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={GitHubLink} style={{backgroundColor:'#FF1493', width:250, height:40, borderRadius:50,top:40, elevation: 10}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>GITHUB</Text></TouchableOpacity>
        </View>
     

    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      </ScrollView>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
},
imagemFundo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6, // Opacidade da imagem de fundo para não sobrecarregar o conteúdo
},
scrollViewContent: {
    padding: 20,
},
texto: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
},
stepContainer: {
  gap: 8,
  marginBottom: 8,
},
reactLogo: {
  height: 178,
  width: 290,
  bottom: 0,
  left: 0,
  position: 'absolute',
},

});
