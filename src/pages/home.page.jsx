import React from "react";
import FooterBar from "../components/footer.component";
import NavBar from "../components/navbar.component";
import { Pagination, Card,TextInput, Select, Button } from "flowbite-react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import CollegeList from "../components/collegelist.component";
import DistrictModal from "../components/districtmodal.component";
import CollegeNameModal from "../components/collegenamemodal.component";
import {HiOutlineArrowRight} from 'react-icons/hi';

function Home(){
    const [colleges, setColleges] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(null);

    //filters
    const [cutoff, setCuttOff]  = useState(0);
    const [communityfilter, setCommunityFilter] = useState('');
    const [disctrictFilter, setDistrictFilter] = useState([]);
    const [collegeFil, setCollegeFil] = useState([]);


    const communities = ['OC', 'BC', 'BCM', 'MBC', 'SC', 'SCA', 'ST'];

   function onPageChange(e){
    getAllColleges(e);

   }
  function getAllColleges(currPage){
    setLoading(true);
    axios.get('/api/colleges/getall', {params: {page: `${currPage}`}}).then((response)=> {
        setColleges(response.data.colleges);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages)
        setLoading(false);
      }).catch((err)=> {
        console.log(err);
      })
  }


  function handleCuttOffChange(e){
   setCuttOff(e.target.value);
  }
  function handleCommunityChange(e){
    setCommunityFilter(e.target.value);
  }

  function handleSearch(){
    let data = {cutoff, communityfilter, disctrictFilter, collegeFil};
    axios.post(`/api/colleges/get/query`, data).then((response)=> {
      setColleges(response.data);
    }).catch((err)=> {
      console.log(err);
    })
  }

    useEffect(()=> {
        getAllColleges(currentPage);
        

    }, [])
    return (
        <>
        <NavBar/>
        <div className="filters-container mt-2">
        <Card >
          <div className="flex flex-row flex-wrap">
            <div className="right cutoff-container w-48 m-2">
            <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">
              Select a Cutt-off
            </p>
            <TextInput
                id="cutoff"
                type="number"
                value={cutoff}
                onChange={handleCuttOffChange}
                required={true}
                helperText="Max Value between 0 and 200"
              />
            </div>
            <div className="right-contain m-2">
                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white text-left">
                Select a Community
                </p>
                <Select
                  id="communities"
                  required={true}
                  onChange= {handleCommunityChange}
                >
                  {communities.map((community, idx)=> {
                    return <option key={idx}>{community}</option>
                  })}

                </Select>
            </div>
            <div className="m-2 mt-8">
              
                <DistrictModal setDistrictFilter={setDistrictFilter} districtFilter={disctrictFilter}/>
            </div>
            <div className="m-2 mt-8">
               <CollegeNameModal collegeFil={collegeFil} setCollegeFil={setCollegeFil} />
            </div>
          </div>

          <div className="ml-2">
              <Button onClick={handleSearch}>
              Search
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>

        </div>
        
          <div className="content-container ">
            <div className="collegelist sm:ml-10 md:ml-10 lg:ml-10 2xl:ml-10">
              <CollegeList colleges={colleges} />
            </div>
            
          </div>

        <div className="pagination-container mb-5">
           { !loading && <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={totalPages}
            />}  

        </div>
        <FooterBar/>
        </>
    )
}
export default Home;