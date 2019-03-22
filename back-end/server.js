import dotenv from 'dotenv';
dotenv.config();

import fetch from 'node-fetch';

import express from 'express';
const app = express();
import bodyParser from 'body-parser';
let PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send("pong")
})

app.get('/list-user-groups', (req, res) =>{
    const baseUrl = "https://slack.com/api/usergroups.list";
    // const reqUrl = baseUrl+'?token='+process.env.S_SECRET;
    const reqUrl = `${baseUrl}?token=${process.env.U_TOKEN}&include_count=true`;

    

    // console.log(reqUrl)
    const requestData = {
        token: process.env.SECRET,
    }

    fetch(reqUrl, {
        method: 'GET',
        // body: new URLSearchParams(requestData),
        headers: {
            'Content-Type': 'application/x-www-form-urlenconded'
        }
    })
    .then((response) => {
        if (response.ok) {
            // console.log(response.keys())
            // res.status(response.status).json(response.body)
            console.log('In first then')
            // console.log(response)
            return response.json()
        } else {
            console.log(`I'm not ok (in first then)`)
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    })
    .then(json => {
        console.log(`in second then`)
        console.log(json)
        res.send(json);
    })
    .catch(error => {
        console.log('Been caught')
        res.status = error.statusCode;
        console.log(error)
    })
})

// Route for getting info from a particular user group:


// app.listen(PORT, () => console.log(`App running on port ${PORT}`));
app.listen(8080, () => console.log(`App running on port 8080`));