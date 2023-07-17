import {useState} from "react";
import {MenuItem} from "@/types/MenuTypes";
import {background, Button, Flex, List, ListItem, Menu, MenuList} from "@chakra-ui/react";

interface recursiveMenuList {
    currMenu: MenuItem<any>[];
    menuList: recursiveMenuList | null;
}

export default function RecursiveMenu({ menu }: { menu: MenuItem<any>[] }) {
    const [currentMenu, setCurrentMenu] = useState<MenuItem<any>[]>(menu);
    const [menuList, setMenuList] = useState<recursiveMenuList>({currMenu: menu, menuList: null});

    function forwardMenu(child: MenuItem<any>[]) {
        setCurrentMenu(child);
        setMenuList({currMenu: currentMenu, menuList: menuList});
    }

    function backwardMenu() {
        const newList = menuList.menuList;
        if (newList === null){
            console.log('Already at the top, closing menu');
            return;
        }
        setMenuList(newList);
        setCurrentMenu(newList.currMenu);
    }

    function handleChild<T extends MenuItem<T>[] | (() => void) | null | 'back'>(child: T) {
        switch (typeof child){
            case "function":
                child();
                break;
            case 'object':
                if(child === null){
                    break;
                }
                forwardMenu(child);
                break;
            case 'string':
                if(child == 'back'){
                    backwardMenu();
                    break;
                }
        }
    }

    return (
        <Flex>
            <List>
                {currentMenu.map((value, id) => {
                    let disabled = false;
                    if(value.child === null) disabled = true;
                    return (
                        <ListItem mt={2} key={id}>
                            <Button onClick={() => handleChild(value.child)} isDisabled={disabled} bgColor={'gray.700'} border={'15px'} mx={2}>
                                {value.name}
                            </Button>
                        </ListItem>
                    )
                })}
            </List>
        </Flex>
    )
}
