import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Admin = () => {

    const [imageURL, setImageURL] = useState(null)

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            foodName: data.foodName,
            type: data.type,
            price: data.price,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            imageURL: imageURL
        }

        const url = 'http://localhost:5000/addFood'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('serverside responce', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0233cc6f820bf3b7e422a932b34aaf8e')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(imageURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <input placeholder="Food Name" {...register("foodName")} />
                <select  {...register("type")}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
                <input type="text" placeholder="price" {...register("price")} />
                <input placeholder="Short Description" {...register("shortDescription")} />
                <input placeholder="Long Description" {...register("longDescription")} />
                <input type="file" onChange={handleImageUpload} />
                <input type="submit" />


            </form>
        </div>
    );
};

export default Admin;