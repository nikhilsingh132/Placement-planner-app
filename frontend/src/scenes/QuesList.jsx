import React, { useState, useEffect, createContext } from 'react'
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
import ModalWindow from '../components/ModalWindow';
import { useAuth } from "../AuthContext";

const notesDetails = createContext();

const QuesList = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const storageKey = `checkedItems_${user?.username}`;
    const [checkedItems, setCheckedItems] = useState(() => {
        const localStorageData = localStorage.getItem(storageKey);
        return localStorageData ? JSON.parse(localStorageData) : {};
    });
    const [taggedQuestions, settaggedQuestions] = useState([]);
    const [openModal, setopenModal] = useState(false);
    const [quesName, setquesName] = useState("");
    const [quesId, setQuesId] = useState(null);

    useEffect(() => {
        const storedCheckedItems = localStorage.getItem(storageKey);
        if (storedCheckedItems) {
            setCheckedItems(JSON.parse(storedCheckedItems));
        }
    }, [storageKey]);


    const handleCheckboxChange = (itemId) => {
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = {
                ...prevCheckedItems,
                [itemId]: !prevCheckedItems[itemId],
            };

            // Save to local storage with the unique key
            localStorage.setItem(storageKey, JSON.stringify(updatedCheckedItems));

            return updatedCheckedItems;
        });
    };


    const handleModal = async (name, id) => {
        setquesName(name);
        setopenModal(true);
        setQuesId(id);
    }

    useEffect(() => {
        const fetchQues = async () => {
            try {
                const lowercaseId = id.toLowerCase();
                const response = await axios.post('http://localhost:8000/getAllQuestions', { tags: lowercaseId });
                // console.log("list of question", response.data.data);
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
            <div className='bg-[#0b2d39]'>
                <NavBar />
                <div>
                    <Card className='sm:mx-20 sm:mt-[20px] bg-[#003300] sm:rounded-[20px] shadow-md'>
                        <p className='font-bold text-xl text-center my-5 text-white'>{id}</p>
                        <List className='sm:mx-20 mx-6'>
                            {
                                taggedQuestions.map((data) => (
                                    <ListItem className={`mb-3 mt-3 rounded-lg ${checkedItems[data._id] ? 'bg-[#ace600]' : 'bg-[#a6a6a6]'} hover:shadow-md transition duration-300`}>
                                        <label
                                            htmlFor="vertical-list-react"
                                            className="flex w-full cursor-pointer items-center px-3 py-2 text-gray-700 hover:text-[#d9d9d9]"
                                        >
                                            <ListItemPrefix className="mr-5">
                                                <Checkbox
                                                    id={`checkbox-${data._id}`}
                                                    ripple={false}
                                                    className="hover:before:opacity-0 sm:w-[1.5rem] sm:h-[1.5rem] h-[1rem] w-[1rem]"
                                                    containerProps={{
                                                        className: "p-0",
                                                    }}
                                                    checked={checkedItems[data._id] || false}
                                                    onChange={() => handleCheckboxChange(data._id)}
                                                />
                                            </ListItemPrefix>
                                            <div className='flex flex-row items-center justify-between w-full'>
                                                <a href={data.link} target="_blank" rel="noreferrer">
                                                    <Typography color="blue-gray" style={{ fontWeight: "bold" }} className="sm:text-2xl text-xl cursor-pointer capitalize">
                                                        {data.name}
                                                    </Typography>
                                                </a>
                                                <button className='sm:mr-[2rem] bg-[#0d0d0d] sm:w-[4rem] h-[2rem] rounded-lg text-white hover:text-[#ffcc99]' onClick={() => handleModal(data.name, data._id)}>Notes</button>
                                            </div>

                                        </label>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Card>
                </div>
                {
                    openModal === true &&
                    <notesDetails.Provider value={{ quesId }}>
                        <ModalWindow open={openModal} onClose={() => setopenModal(false)} quesName={quesName} />
                    </notesDetails.Provider>
                }
            </div>
        </>
    )
}

export default QuesList

export { notesDetails };