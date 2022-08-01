// import { Title } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography, TextField, createMuiTheme, ListItem, List, ListItemIcon, Link, ListItemText, Paper } from '@mui/material';
import { useCreateListItemMutation, useGetQuickLinksQuery ,usePostGlobalListIdMutation,useCreateTokenwithDataMutation,useUpdateQuicklinkTokenMutation,useGetAllQuickLinkQuery,
    useCreateTokenwithUserQuickDataMutation } from '../../services/APIs';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
interface IFolderProps {
    data:any, 
    error:any,
    isLoading:any,
    onSubmiting: (object: any) => void;
}

// const UserQuickLinks = () => {
  const UserQuickLinks: React.FC<IFolderProps> = (props: IFolderProps) => {  
  // const [sendItem] = useCreateTokenwithUserQuickDataMutation();
  // const [updateToken,{data,isLoading} ] = useUpdateCeoMsgTokenMutation();
  //   console.log(data?.response,'jyjtydggfgdhhtjytjytjytjty')
  //  const [sendId] = usePostGlobalListIdMutation();
  // const [sendEmail] = usePostEmailMutation();
  // const { data, error, isLoading } = useGetQuickLinksQuery('');
  // console.log(data)
  
  // const {globalquicklinks,tokens} = props;
  // console.log(tokens,'yyy');
  const pca = new PublicClientApplication(configuration);
  const [tokens, setTokens] = useState<string>();
  const { data, error, isLoading,onSubmiting } = props
  // const [updateToken,{data,isLoading} ] = useUpdateQuicklinkTokenMutation();
  // console.log(data?.response,'jhfhfhtyjytjuyjkukjuykuykuk')
  const accounts = pca.getAllAccounts();
   useEffect(() => {
    async function getAccessToken() {
      if (accounts.length > 0) {
        const request = {
          scopes: ['user.read'],
          account: accounts[0]
        }
        const accessToken = await pca.acquireTokenSilent(request).then((response) => {
         
          // updateToken(response.accessToken);
             setTokens(response.accessToken)
          // console.log(token,'uuuuuu')
        }).catch(error => {
          // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
          console.log(error);
          return null;
        });


      }

      return null;
    }
    getAccessToken();

     
    
  }, [])

  // console.log(tokens,'thtjyjyjyjyjyjy')
  const list = {
    fields: {
      Title: 'My post Request',
      Url: 'https://wwww.schhol.com'
    }
  };

  
  console.log(data,'thytjytjytjudddddddddddddd')

  // const [user, setUser] = useState<any>({fullname:"",email:""});
  const [user, setUser] = useState<any>({

    Title: '',
    Url: '',
    UserEmail: ''

  });
  // const [UserEmail,setUserEmail] = useState<any>('');
  const [vals,setValues ] = useState<any>('')
 
  // const [Title,setTitle] = useState<any>('')
  // const [Url,setUrl] = useState<any>('')
  // const [fetchedData, setFetchedData] = useState('')
  // useEffect(()=>{
  //     function sendItem(){
  //         const requestOptions = {
  //             method: 'POST',
  //             headers: { 
  //                 'Content-Type': 'application/json',

  //             },
  //             body: JSON.stringify(list)
  //         };
  //         fetch('http://localhost:4000/list/listItem', requestOptions)
  //             .then(response => response.json())
  //     }
  //     sendItem();
  // },[])

  const handleChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value })
    console.log(user)


  }
  // useEffect(()=>{
  // const a = async function(){

  //     if(data){
  //     // return(

  //     //     <div>

  //             {data.map((item: any) => {
  //                 const { createdBy = {} } = item;


  //                 // let navLink=fields?.Navigation_x0020_Link;

  //                 // let menuIcon = JSON.parse(fields?.Icon);
  //                 // let menuImg =
  //                 //   menuIcon?.serverUrl + menuIcon?.serverRelativeUrl;

  //                 // let menuIconHover = JSON.parse(fields?.IconHover);
  //                 // let menuImgHover =
  //                 //   menuIconHover?.serverUrl +
  //                 //   menuIconHover?.serverRelativeUrl;


  //             //   console.log(createdBy.user.email,'iiiiii')
  //             //   setUserEmail(createdBy.user.email)
  //              const email ={
  //                  Email:createdBy.user.email
  //              }
  //              sendEmail(email)
  //             // console.log(UserEmail,'000000000000')
  //             //  var Emil = createdBy.user
  //             //      console.log(Emil.email,'uuu')
  //               })}

  //     //      </div>
  //     // )

  //             }
  //   }
  //   a();


  // },[data])

  
  function handle (val: any) {


    // console.log(val);
  // let   Value = val;
    setValues(val)
    // //@ts-ignore
    // if (Value) {
    //   fetch('http://localhost:4000/list/globalid', {

    //     method: 'POST', 
    //     //@ts-ignore
    //     body: JSON.stringify(Value) // body data type must match "Content-Type" header
  
    //   })
    // }
  console.log(vals,'hthytjytdgsdgtyt')
    //  async function sendEventId(){
    //     if (Value) {
    
    
    //       // const requestOptions = {
    //       //   method: 'POST',
    //       //   headers: { 'Content-Type': 'application/json' },
    //       //   body: JSON.stringify({ Value })
    //       // };
    //       // fetch('http://localhost:4000/list/globalid', requestOptions)
    //       //   .then(response => response.json())
    //      await   sendId({Value})
    //     }
    //   }
    //   sendEventId()
    
 

  }
  //  console.log(Value)
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("user created", user)
    const Data = {
      // token:tokens,
      userquicklink:user,
      globalquicklink:vals
    }
    // const url = 'http://localhost:4000/list/listItem'
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         Title:user.Title,
    //         Url:user.Url
    //     })
    // };
    // fetch(url, requestOptions)
    //     .then(response => console.log('Submitted successfully'))
    //     .catch(error => console.log('Form submit error', error))

  // await sendItem(Data)
  onSubmiting(Data)
  }
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="Title"
          value={user.Title}
          onChange={handleChange}
        // onChange={e => setTitle(e.target.value)}
        />
        <label>Url</label>
        <input
          type="text"
          name="Url"
          value={user.Url}
          onChange={handleChange} />
        <label>UserEmail</label>
        <input
          type="text"
          name="UserEmail"
          value={user.UserEmail}
          onChange={handleChange} />


        <button>SendData</button>
      </form>
      <List >
        {data?.response &&
          data?.response.map((item: any, index: any) => {
            const { fields = {} } = item;

            let linkName = fields?.Title;
            // let navLink=fields?.Navigation_x0020_Link;

            // let menuIcon = JSON.parse(fields?.Icon);
            // let menuImg =
            //   menuIcon?.serverUrl + menuIcon?.serverRelativeUrl;

            // let menuIconHover = JSON.parse(fields?.IconHover);
            // let menuImgHover =
            //   menuIconHover?.serverUrl +
            //   menuIconHover?.serverRelativeUrl;
            var menuStatus = false;
            if (linkName != "") {
              menuStatus = true;
            }

            return (
              <ListItem
                key={index}
                sx={{ padding: "16px !important" }}
                className="quickLinkIcon"
              >
                {menuStatus && (
                  <>
                    <Card>

                      <CardContent sx={{ fontSize: "0.87rem" }}
                        onClick={() => handle(item.id)}
                      >
                        <Typography
                          variant="body2"
                          sx={{ paddingLeft: "15px" }}
                          className="menuText"
                        >
                          {linkName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                )}
              </ListItem>
            );
          })}
      </List>
       
    </div>
    // <h1>TTTT</h1>
  )
}

export default UserQuickLinks