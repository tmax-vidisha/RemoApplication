/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import useCustom from '../../../useCustom';


interface type {
    token: any[];
    me: String;
}

const Files = () => {
    const { token } = useCustom();

    const [state, setState] = useState({
        me: "",
        successMessage: "",
        token: token,
    });

    function ComponentDidMount() {

        axios.get(
            'https://graph.microsoft.com/v1.0/me?$select=displayName,mail,userPrincipalName',
            { headers: { Authorization: `Bearer ${token}` } }
        ).then(res => {
            const me = res.data;
            setState(me);
        });
    }

const OnWriteToExcel=(me: any)=>{

        const [state, setState] = useState({
            me: "",
            successMessage: "",
            token: token,
        });


        const myEmailAddress = me.mail || me.userPrincipalName;
        const values = [];

        values.push([me.displayName, myEmailAddress]);

        axios
            .post('https://graph.microsoft.com/v1.0/me/drive/root:/demo.xlsx:/workbook/tables/Table1/rows/add',
                { index: null, values },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(res => {
                console.log(res);
                const successMessage = "Successfully wrote your data to demo.xlsx!";
                //setState(successMessage);
                console.log(successMessage, "heloooooooooooooo")
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <button type="submit" onClick={OnWriteToExcel}>Create</button>
        </div>
    );
};

export default Files;

