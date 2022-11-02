
import NavBAr from "./components/nav/NavBar";
import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Social from './components/social/Social'
import './App.css'
import { useColorMode, VStack } from "@chakra-ui/react";


function App() {

  const {colorMode, toggleColorMode} = useColorMode()
  const isDark = colorMode === "dark";
 
  return (
    <VStack className="App" w="100%" rowGap="20px" bg={isDark ? "blue.900" : "peachpuff"} >
        <NavBAr toggleColorMode={toggleColorMode} colorMode={colorMode} />
        <Header/>
        <Social/>
        <Profile/>
    </VStack>
  );
}

export default App;
