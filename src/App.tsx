import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Form, useForm, connect } from 'formfusion';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            inputProps={{ ...connect(config, 'alphabetic') }}
            id="firstName"
            name="firstName"
            label="First name"
            variant="outlined"
            error={Boolean(config.errors.firstName)}
            helperText={config.errors.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default MyForm;
