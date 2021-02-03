import React from 'react'
import { View, Text } from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'


const Customlistitem = (id, chatName, enterChat) => {
    return (
        <ListItem>
           <Avatar
           rounded
           source={{
               uri: "http://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
           }}
           />
           <ListItem.Content>
               <ListItem.Title style={{fontWeight: "800"}}>
                Youtube Chat
               </ListItem.Title>
               <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test
               </ListItem.Subtitle>
           </ListItem.Content>
        </ListItem>
    )
}

export default Customlistitem
