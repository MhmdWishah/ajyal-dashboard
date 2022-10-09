import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const UserForm = ({ handleSubmitSave }) => {
  const [state, setState] = useState({ date: new Date() });

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const { Name, Company, StartDate, Status, Amount } = state;

  const handleSubmit = () => {
    handleSubmitSave({ Name, Company, StartDate, Status, Amount });
  };
  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        {/* <Grid container spacing={6}> */}
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <TextField
            type="text"
            name="Name"
            id="standard-basic"
            value={Name || ''}
            onChange={handleChange}
            errorMessages={['this field is required']}
            label="Name (Min length 4, Max length 9)"
            validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
          />

          <TextField
            type="text"
            name="Company"
            label="Company"
            onChange={handleChange}
            value={Company || ''}
            validators={['required']}
            errorMessages={['this field is required']}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              name="StartDate"
              value={StartDate}
              onChange={handleChange}
              renderInput={(props) => (
                <TextField
                  {...props}
                  label="Start Date"
                  id="mui-pickers-date"
                  sx={{ mb: 2, width: '100%' }}
                />
              )}
            />
          </LocalizationProvider>

          <TextField
            type="number"
            name="Amount"
            label="Amount"
            value={Amount || 0}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
          />

          <FormControlLabel
            control={<Checkbox name="Status" value={Status || false} />}
            label="I have read and agree to the terms of service."
          />
        </Grid>
        {/* </Grid> */}

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Save</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default UserForm;
