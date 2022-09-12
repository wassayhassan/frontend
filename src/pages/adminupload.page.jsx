import React from "react";
import DashNav from "../components/dashnav.component";
import {Label, FileInput, Button, Spinner} from 'flowbite-react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function DashUpload(){
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    function handleFileChange(e){
     setFile(e.target.files[0]);      
    }
    function uploadForm(){
        let data = new FormData();
        data.append('file', file);
        console.log(file);
        axios.post('/api/colleges/insert', data).then((response)=> {
            console.log(response);
        }).catch(err=> {
            console.log(err);
        })
    }

    function uploadDistricts(){
        let data = new FormData();
        data.append('file', file);
        console.log(file);
        axios.post('/api/districts/insertall', data).then((response)=> {
            console.log(response);
        }).catch(err=> {
            console.log(err);
        })
    }
    function uploadCollegeFilters(){
        let data = new FormData();
        data.append('file', file);
        console.log(file);
        axios.post('/api/colleges/insertfilters', data).then((response)=> {
            console.log(response);
        }).catch(err=> {
            console.log(err);
        })
    }
    function uploadBranchFilters(){
        let data = new FormData();
        data.append('file', file);
        console.log(file);
        axios.post('/api/branches/insertall', data).then((response)=> {
            console.log(response);
        }).catch(err=> {
            console.log(err);
        })
    }

    function uploadSeats(){
        let data = new FormData();
        data.append('file', file);
        console.log(file);
        axios.post('/api/seats/insertall', data).then((response)=> {
            console.log(response);
        }).catch(err=> {
            console.log(err);
        })
    }


    return (
         <div className="flex flex-row">
            <DashNav />
            
            <div className="fileupload-container m-2 p-3">
                <div className="header-container text-left text-blue-700 font-bold text-lg mb-10">
                    <p>Upload Excel Data</p>
                </div>
                <div id="fileUpload w-96">
                    <div className="mb-2 block">
                        <Label
                        htmlFor="file"
                        value="Upload file"
                        />
                    </div>
                    <FileInput
                        id="file"
                        name="file"
                        helperText="Upload Excel file"
                        onChange={handleFileChange}
                    />
                 </div>
                 <div className="uploadbtn-container">
                 <Button onClick={uploadForm}>
                    <div className="mr-3">
                   {loading?  <Spinner
                        size="sm"
                        light={true}
                    />: ''} 
                    </div>
                    {loading? 'Saving': 'Save'}
                </Button>
                 </div>
                 <div id="fileUpload w-96">
                    <p>Upload Districts</p>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="file"
                        value="Upload file"
                        />
                    </div>
                    <FileInput
                        id="file"
                        name="file"
                        helperText="Upload Excel file"
                        onChange={handleFileChange}
                    />
                 </div>
                 <div className="uploadbtn-container">
                 <Button onClick={uploadDistricts}>
                    <div className="mr-3">
                   {loading?  <Spinner
                        size="sm"
                        light={true}
                    />: ''} 
                    </div>
                    {loading? 'Saving': 'Save'}
                </Button>
                 </div>
                 <div id="fileUpload w-96">
                    <p>Upload College Filters</p>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="file"
                        value="Upload file"
                        />
                    </div>
                    <FileInput
                        id="file"
                        name="file"
                        helperText="Upload Excel file"
                        onChange={handleFileChange}
                    />
                 </div>
                 <div className="uploadbtn-container">
                 <Button onClick={uploadCollegeFilters}>
                    <div className="mr-3">
                   {loading?  <Spinner
                        size="sm"
                        light={true}
                    />: ''} 
                    </div>
                    {loading? 'Saving': 'Save'}
                </Button>
                 </div>
                 <div id="fileUpload w-96">
                    <p>Upload Branch Filters</p>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="file"
                        value="Upload file"
                        />
                    </div>
                    <FileInput
                        id="file"
                        name="file"
                        helperText="Upload Excel file"
                        onChange={handleFileChange}
                    />
                 </div>
                 <div className="uploadbtn-container">
                 <Button onClick={uploadBranchFilters}>
                    <div className="mr-3">
                   {loading?  <Spinner
                        size="sm"
                        light={true}
                    />: ''} 
                    </div>
                    {loading? 'Saving': 'Save'}
                </Button>
                 </div>
                 <div id="fileUpload w-96">
                    <p>Upload Seats</p>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="file"
                        value="Upload file"
                        />
                    </div>
                    <FileInput
                        id="file"
                        name="file"
                        helperText="Upload Excel file"
                        onChange={handleFileChange}
                    />
                 </div>
                 <div className="uploadbtn-container">
                 <Button onClick={uploadSeats}>
                    <div className="mr-3">
                   {loading?  <Spinner
                        size="sm"
                        light={true}
                    />: ''} 
                    </div>
                    {loading? 'Saving': 'Save'}
                </Button>
                 </div>
            </div>
            
         </div>
    )
}
export default DashUpload;