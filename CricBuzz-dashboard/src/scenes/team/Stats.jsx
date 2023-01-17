import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState ,useEffect} from 'react'
// import axios from 'axios';


function Stats() {

    const [mystats, setMyStats] = useState([]);


    useEffect( ()=>{
        const url = "https://cricket.sportmonks.com/api/v2.0/teams";
        console.log(url)

        const fetchData =async ()=>{
            try{
                const res = await fetch(url)
                const json = await res.json()
                // console.log(json)
                setMyStats(json.data)
            } catch(error){
                // console.log(error)
            }
        }

        fetchData()
     },[])

    return (

        <div className='margin_left'>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Ratings</TableCell>
            <TableCell align="center">Points</TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
        {
                mystats.map((post) => {
                    return (
                        <TableRow>
                            <TableCell>{post.name}</TableCell>
                            <TableCell>{post.country}</TableCell>
                            <TableCell>{post.rating}</TableCell>
                            <TableCell>{post.points}</TableCell>
                        </TableRow>
                    )
                }

                )
            }
        </TableBody>
      </Table>
    </TableContainer>
           

        </div >
    )
}

export default Stats