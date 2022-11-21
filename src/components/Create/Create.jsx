import { FormControl, InputLabel, MenuItem, Select, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './create.css'


export default function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [url, setUrl] = useState("");
    const [select, setSelect] = React.useState("");
    const navigate = useNavigate();

    const handleSelect = (event) => {
        setSelect(event.target.value);
    };
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;

            case 'author':
                setAuthor(value);
                break;

            case 'url':
                setUrl(value);
                break;



            default:
        }
    }

    const handleOnChangeGif = async (e) => {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setCover(reader.result.toString());
        };


    }

    function handleSubmit(e) {
        e.preventDefault()
        const newGif = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            url,
        };
        localStorage.setItem("gif", cover);
        localStorage.setItem("author", author);
        localStorage.setItem("title", title);
        localStorage.setItem("url", url);
        navigate('/galery');
        newGif();
    }


    return (

        <div className='modalContainer' >

            <form className='form' fullWidth onSubmit={handleSubmit}  >
                <div>
                    <Typography>Title</Typography>
                    <TextField
                        fullWidth
                        style={{ backgroundColor: 'white', borderRadius: '1rem' }}
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={title} />
                </div>
                <div>
                    <Typography>Author</Typography>
                    <TextField
                        fullWidth
                        style={{ backgroundColor: 'white', borderRadius: '1rem' }}
                        type="text"
                        name="author"
                        onChange={handleChange}
                        value={author} />
                </div>

                <FormControl fullWidth style={{ backgroundColor: 'white', borderRadius: '1rem', margin: '1rem 0rem' }}>
                    <InputLabel id="demo-simple-select-label" className='placeholder' >Image or URL</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={select}
                        label="Select"
                        onChange={handleSelect}
                    >
                        <MenuItem className='placeholder' value={10}>Image</MenuItem>
                        <MenuItem className='placeholder' value={20}>URL</MenuItem>
                    </Select>
                </FormControl>

                {select === 10 &&
                    <>
                        <TextField
                            inputProps={{ accept: "image/gif" }}
                            style={{ backgroundColor: 'white', borderRadius: '1rem' }}
                            type={"file"}
                            name="cover"
                            onChange={handleOnChangeGif}
                            fullWidth
                        />
                        <div> {!!cover ? <img src={cover} width="200px" alt='preview' /> : ""}</div>

                    </>}
                {select === 20 &&
                    <div>
                        <TextField
                            fullWidth
                            style={{ backgroundColor: 'white', borderRadius: '1rem' }}
                            type="text"
                            name="url"
                            onChange={handleChange}
                            value={url} />
                    </div>
                }

                <Button

                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, color: 'white' }}
                >
                    Upload
                </Button>



            </form>
        </div>
    );
}