/* eslint-disable jsx-a11y/alt-text */
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import formatISO9075 from 'date-fns/esm/fp/formatISO9075/index.js';
import { Link, Navigate } from 'react-router-dom';

const CardComponent= (props,key) => {
  const {_id,title,summary,cover,content,author,createdAt} = props.post
  console.log(props.post)

  return (
    <div className='card'>
      <Link to={`/postdetail/${_id}`} style={{textDecoration:'none'}}>
        <Card sx={{ maxWidth: "345px",height:"345px",minWidth:'345px'}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="194"
          image= {'http://localhost:8080/'+cover}
          alt="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div>
            <span style={{fontWeight:'bold',color:"black"}}>Auther-{author.username}</span>
            <span style={{marginLeft:'10px'}}>{formatISO9075(new Date(createdAt))}</span>
          </div>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
  )
}


export default CardComponent