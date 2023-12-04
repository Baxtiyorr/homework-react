import { useEffect } from "react";

const UserData = () => {

    const url = 'https://twitter154.p.rapidapi.com/user/tweets';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '322b77a092msh1385be87afe1084p18ec28jsn837c2a6468dd',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        },
        body: {
            username: 'omarmhaimdat',
            user_id: '96479162',
            include_replies: false,
            include_pinned: false
        }
    };

    const getUserData = async () =>{
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    
useEffect(() =>{
    getUserData()
},[])

    return (
    <div>
    </div>
  )
}

export default UserData
