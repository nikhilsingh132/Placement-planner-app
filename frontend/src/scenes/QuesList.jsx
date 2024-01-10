import React, { useState } from 'react'
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


const queslist = [
    {
        id: 1,
        tag: "dp",
        title: "Minimum number"
    },
    {
        id: 2,
        tag: "dp",
        title: "Minimum number"
    },
    {
        id: 3,
        tag: "dp",
        title: "Minimum number"
    },
    {
        id: 4,
        tag: "dp",
        title: "Minimum number"
    }
]

const QuesList = () => {
    const { id } = useParams();
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (itemId) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [itemId]: !prevCheckedItems[itemId],
        }));
    };
    return (
        <>
            <NavBar />
            <Card className='mx-20 bg-green-100'>
                <p className='font-bold text-3xl text-center my-5'>{id}</p>
                <List className='mx-20'>
                    {
                        queslist.map((data) => (
                            <ListItem className={`p-0 mb-3 mt-3 ${checkedItems[data.id] ? 'bg-green-500' : 'bg-yellow-200'}`}>
                                <label
                                    htmlFor="vertical-list-react"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-5">
                                        <Checkbox
                                            id={`checkbox-${data.id}`}
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            style={{ width: "1.5em", height: "1.5em" }}
                                            checked={checkedItems[data.id] || false}
                                            onChange={() => handleCheckboxChange(data.id)}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="text-2xl">
                                        {data.title}
                                    </Typography>
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