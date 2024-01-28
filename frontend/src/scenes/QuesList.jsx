import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import {
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const QuesList = () => {

    const { id } = useParams();
    const [checkedItems, setCheckedItems] = useState({});
    const [taggedQuestions, settaggedQuestions] = useState([]);

    const handleCheckboxChange = (itemId) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [itemId]: !prevCheckedItems[itemId],
        }));
    };

    useEffect(() => {

        const fetchQues = async () => {

            try {
                const lowercaseId = id.toLowerCase();
                const response = await axios.post('http://localhost:8000/getAllQuestions', { tags: lowercaseId });
                console.log("list of question", response.data.data);
                settaggedQuestions(response.data.data);
            }
            catch (error) {
                console.error('Error fetching questions:', error);
            }
        }

        fetchQues();
    }, [id]);

    return (
        <>
            <NavBar />
            <Card className='mx-20 bg-gradient-to-r from-green-500 to-green-100 mb-10 rounded-lg shadow-lg'>
                <p className='font-bold text-3xl text-center my-5 text-white'>{id}</p>
                <List className='mx-20'>
                    {
                        taggedQuestions.map((data) => (
                            <ListItem className={`p-0 mb-3 mt-3 rounded-lg ${checkedItems[data._id] ? 'bg-green-600' : 'bg-yellow-200'} hover:shadow-md transition duration-300`}>
                                <label
                                    htmlFor="vertical-list-react"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-5">
                                        <Checkbox
                                            id={`checkbox-${data._id}`}
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            style={{ width: "1.5em", height: "1.5em" }}
                                            checked={checkedItems[data._id] || false}
                                            onChange={() => handleCheckboxChange(data._id)}
                                        />
                                    </ListItemPrefix>
                                    <a href={data.link} target="_blank" rel="noreferrer">
                                        <Typography color="blue-gray" style={{ fontWeight: "bold" }} className="text-2xl cursor-pointer capitalize font-medium text-gray-700 hover:text-indigo-600">
                                            {data.name}
                                        </Typography>
                                    </a>
                                </label>
                            </ListItem>
                        ))
                    }
                </List>
            </Card>


        </>
    )
}

export default QuesList