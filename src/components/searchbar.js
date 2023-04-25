import React from "react";
import { SafeAreaView, StyleSheet, TextInput,TouchableOpacity ,} from "react-native";


const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = (text) => {
      setSearchText(text);
      props.onSearch(text);
    };
  
    return (
        <TouchableOpacity style={style.button}>
       
      <Text> "Pesquisar contatos..."</Text>
       style={{ flex: 1, fontSize: 16 }}
       value={searchText}
       onChangeText={handleSearch}
    
        
        </TouchableOpacity>
    );
  };
  const style = StyleSheet.create({
    button: {
      aligncontato: "center",
      backgroundColor: "#A9A9A9",
      padding: 10,
      height:40,
      borderRadius:15
      
    },
});
  export default SearchBar;