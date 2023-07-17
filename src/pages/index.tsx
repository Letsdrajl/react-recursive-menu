import { Center } from "@chakra-ui/react";
import {sampleMenu} from "@/components/menu/SampleMenu";
import RecursiveMenu from "@/components/menu/Menu";

export default function Home(){
    const menu = sampleMenu;

    return(
        <Center mt={20}>
            <RecursiveMenu menu={menu}/>
        </Center>
    )
}
