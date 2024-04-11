import React from 'react'
import {Button,Card,CardMedia,CardContent,CardActions,Typography} from '@mui/material'
import tree from './tree.jpg'

const CardB=()=>
{
    return(
        <>
        <Card sx={{maxWidth:500}}>
            <CardMedia
            sx={{height:365}}
            image={tree}
            title='tree'
            />
            <CardContent>
                <Typography>
                    Nature
                </Typography>
                <Typography>
                    Naturev is very good
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Learn</Button>
                <Button>Share</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default CardB;