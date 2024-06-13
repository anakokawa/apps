import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, Linking} from 'react-native';


const imgfundo=require("../../assets/images/fundo.png")
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


export default function HomeScreen() {
  return (
    <View>
    <View style={{flex:1}}>
      {/* <ImageBackground source={imgfundo} resizeMode='cover' style={{width:400 , height:300,}}/> */}
    <View style={{display: 'flex'}}>
      <View style={{justifyContent:'center', alignItems:'center', }}>
      <Image source={imgmel} resizeMode='cover' style={{width:150, height: 150, borderRadius:100, top:90 }}></Image></View>
      </View>

      <View style={{top:190, alignItems:'center',}}>
        <TouchableOpacity onPress={InstagramLink} style={{backgroundColor:'#FF1493', width:200, height:40, borderRadius:50,}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>INSTAGRAM</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={WhatsAppLink} style={{backgroundColor:'#FF1493', width:200, height:40, borderRadius:50,}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>WHATSAPP</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={InstagramLink} style={{backgroundColor:'#FF1493', width:200, height:40, borderRadius:50,}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>LINKEDIN</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={InstagramLink} style={{backgroundColor:'#FF1493', width:200, height:40, borderRadius:50,}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>TELEFONE</Text></TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={GitHubLink} style={{backgroundColor:'#FF1493', width:200, height:40, borderRadius:50,}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>GITHUB</Text></TouchableOpacity>
      </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
