import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import DoctorsList from '../components/DoctorsList';
import DoctorModal from "../components/DoctorModal";
import { Doctor } from "../models/doctor-model";
import * as doctorServices from "../services/doctor-service";
import { DoctorListMapper } from "../utilities/data-mapper";

export default function Home() {
  const [doctorDetail, setDoctorDetail] = useState({});
  const [doctorsList, setDoctorslist] = useState([]);
	const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchDoctorList();
  },[])

  const fetchDoctorList = async () => {
    setLoading(true);

    let response = await doctorServices.getDoctorList();
    const cookedDoctorList = DoctorListMapper(response.results);
    setDoctorslist(cookedDoctorList);
    
    setLoading(false);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <Grid 
      container alignItems="center" 
      justifyContent="center" 
      style={{ minHeight: "100vh"}}
    >
      <DoctorsList 
        doctorsList={doctorsList}
        handleOpenModal={() => setOpen(true)}
        setDoctorDetail={detail => setDoctorDetail(detail)}
      />

      <DoctorModal 
        doctorDetail={doctorDetail}
        handleCloseModal={() => setOpen(false)}
        open={open}
      />
    </Grid>
  )
}