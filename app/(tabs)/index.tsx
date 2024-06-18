import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const imggato=require("../../assets/images/gato.jpg")




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


export default function HomeScreen() {
  return (
    <View style={{display: 'flex'}}>
      <View style={{justifyContent:'center', alignItems:'center', }}>
      <Image source={imggato} resizeMode='cover' style={{width:400, height: 200,}}></Image></View>
      </View>

      
  );
}

const styles = StyleSheet.create({

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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
  
  
});

