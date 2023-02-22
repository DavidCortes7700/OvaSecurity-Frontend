import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActivitiesCards() {
  return (
    <Card className='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Actividades
        </Typography>
        <Typography variant="h5" component="div">
          be nev o lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small">Leer más...</Button>
        <div>
          <IconButton aria-label="Editar">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Eliminar">
            <DeleteIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
