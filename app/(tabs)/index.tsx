import {Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import {styles} from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      {/* <Text style={styles.title}>Hello</Text> */}
      
      {/* 
      <TouchableOpacity onPress={()=> alert("you touched")}>
        <Text>Press Me</Text>
      </TouchableOpacity> */}

      {/* <Pressable onPress={()=> alert("you touched")}>  touchable ve pressable arasındaki fark touchablede tıklandığında text üzerinde renk değişimi oluyor.
        <Text>Press Me</Text>
      </Pressable> */}

      {/* <Image source={require("../assets/images/icon.png")} style={{width:100, height:100}} /> */}

      {/* <Image source={{uri:"https://images.unsplash.com/photo-1741087562365-d0bf6e6fd7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"}} 
      
      style={{
        width:200,
        height: 200,
        resizeMode: "cover"
      }}
      
      /> */}

        <Link href={"/notifications"}>Feed screen in Tabs</Link>

    </View>
  );
}

